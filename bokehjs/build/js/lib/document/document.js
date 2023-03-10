import { ModelResolver } from "../base";
import { version as js_version } from "../version";
import { logger } from "../core/logging";
import { DocumentReady, LODStart, LODEnd } from "../core/bokeh_events";
import { Serializer } from "../core/serializer";
import { Deserializer } from "../core/deserializer";
import { Signal0 } from "../core/signaling";
import { equals } from "../core/util/eq";
import { copy, includes } from "../core/util/array";
import * as sets from "../core/util/set";
import { LayoutDOM } from "../models/layouts/layout_dom";
import { ColumnDataSource } from "../models/sources/column_data_source";
import { Model } from "../model";
import { resolve_defs } from "./defs";
import { DocumentEventBatch, ModelChangedEvent, RootRemovedEvent, TitleChangedEvent, MessageSentEvent, RootAddedEvent, } from "./events";
// Dispatches events to the subscribed models
export class EventManager {
    constructor(document) {
        this.document = document;
        this.session = null;
        this.subscribed_models = new Set();
    }
    send_event(bokeh_event) {
        const event = new MessageSentEvent(this.document, "bokeh_event", bokeh_event.to_json());
        this.document._trigger_on_change(event);
    }
    trigger(event) {
        for (const model of this.subscribed_models) {
            if (event.origin != null && event.origin != model)
                continue;
            model._process_event(event);
        }
    }
}
EventManager.__name__ = "EventManager";
export const documents = [];
export const DEFAULT_TITLE = "Bokeh Application";
// This class should match the API of the Python Document class
// as much as possible.
export class Document {
    constructor(options) {
        documents.push(this);
        this._init_timestamp = Date.now();
        this._resolver = options?.resolver ?? new ModelResolver();
        this._title = DEFAULT_TITLE;
        this._roots = [];
        this._all_models = new Map();
        this._all_models_freeze_count = 0;
        this._callbacks = new Map();
        this._message_callbacks = new Map();
        this.event_manager = new EventManager(this);
        this.idle = new Signal0(this, "idle");
        this._idle_roots = new WeakMap(); // TODO: WeakSet would be better
        this._interactive_timestamp = null;
        this._interactive_plot = null;
    }
    [equals](that, _cmp) {
        return this == that;
    }
    get layoutables() {
        return this._roots.filter((root) => root instanceof LayoutDOM);
    }
    get is_idle() {
        for (const root of this.layoutables) {
            if (!this._idle_roots.has(root))
                return false;
        }
        return true;
    }
    notify_idle(model) {
        this._idle_roots.set(model, true);
        if (this.is_idle) {
            logger.info(`document idle at ${Date.now() - this._init_timestamp} ms`);
            this.event_manager.send_event(new DocumentReady());
            this.idle.emit();
        }
    }
    clear() {
        this._push_all_models_freeze();
        try {
            while (this._roots.length > 0) {
                this.remove_root(this._roots[0]);
            }
        }
        finally {
            this._pop_all_models_freeze();
        }
    }
    interactive_start(plot, finalize = null) {
        if (this._interactive_plot == null) {
            this._interactive_plot = plot;
            this._interactive_plot.trigger_event(new LODStart());
        }
        this._interactive_finalize = finalize;
        this._interactive_timestamp = Date.now();
    }
    interactive_stop() {
        if (this._interactive_plot != null) {
            this._interactive_plot.trigger_event(new LODEnd());
            if (this._interactive_finalize != null) {
                this._interactive_finalize();
            }
        }
        this._interactive_plot = null;
        this._interactive_timestamp = null;
        this._interactive_finalize = null;
    }
    interactive_duration() {
        if (this._interactive_timestamp == null)
            return -1;
        else
            return Date.now() - this._interactive_timestamp;
    }
    destructively_move(dest_doc) {
        if (dest_doc === this) {
            throw new Error("Attempted to overwrite a document with itself");
        }
        dest_doc.clear();
        // we have to remove ALL roots before adding any
        // to the new doc or else models referenced from multiple
        // roots could be in both docs at once, which isn't allowed.
        const roots = copy(this._roots);
        this.clear();
        for (const root of roots) {
            if (root.document != null)
                throw new Error(`Somehow we didn't detach ${root}`);
        }
        if (this._all_models.size != 0) {
            throw new Error(`this._all_models still had stuff in it: ${this._all_models}`);
        }
        for (const root of roots) {
            dest_doc.add_root(root);
        }
        dest_doc.set_title(this._title);
    }
    // TODO other fields of doc
    _push_all_models_freeze() {
        this._all_models_freeze_count += 1;
    }
    _pop_all_models_freeze() {
        this._all_models_freeze_count -= 1;
        if (this._all_models_freeze_count === 0) {
            this._recompute_all_models();
        }
    }
    /*protected*/ _invalidate_all_models() {
        logger.debug("invalidating document models");
        // if freeze count is > 0, we'll recompute on unfreeze
        if (this._all_models_freeze_count === 0) {
            this._recompute_all_models();
        }
    }
    _recompute_all_models() {
        let new_all_models_set = new Set();
        for (const r of this._roots) {
            new_all_models_set = sets.union(new_all_models_set, r.references());
        }
        const old_all_models_set = new Set(this._all_models.values());
        const to_detach = sets.difference(old_all_models_set, new_all_models_set);
        const to_attach = sets.difference(new_all_models_set, old_all_models_set);
        const recomputed = new Map();
        for (const model of new_all_models_set) {
            recomputed.set(model.id, model);
        }
        for (const d of to_detach) {
            d.detach_document();
        }
        for (const a of to_attach) {
            a.attach_document(this);
        }
        this._all_models = recomputed;
    }
    roots() {
        return this._roots;
    }
    add_root(model, setter_id) {
        logger.debug(`Adding root: ${model}`);
        if (includes(this._roots, model))
            return;
        this._push_all_models_freeze();
        try {
            this._roots.push(model);
        }
        finally {
            this._pop_all_models_freeze();
        }
        this._trigger_on_change(new RootAddedEvent(this, model, setter_id));
    }
    remove_root(model, setter_id) {
        const i = this._roots.indexOf(model);
        if (i < 0)
            return;
        this._push_all_models_freeze();
        try {
            this._roots.splice(i, 1);
        }
        finally {
            this._pop_all_models_freeze();
        }
        this._trigger_on_change(new RootRemovedEvent(this, model, setter_id));
    }
    title() {
        return this._title;
    }
    set_title(title, setter_id) {
        if (title != this._title) {
            this._title = title;
            this._trigger_on_change(new TitleChangedEvent(this, title, setter_id));
        }
    }
    get_model_by_id(model_id) {
        return this._all_models.get(model_id) ?? null;
    }
    get_model_by_name(name) {
        const found = [];
        for (const model of this._all_models.values()) {
            if (model instanceof Model && model.name == name)
                found.push(model);
        }
        switch (found.length) {
            case 0:
                return null;
            case 1:
                return found[0];
            default:
                throw new Error(`Multiple models are named '${name}'`);
        }
    }
    on_message(msg_type, callback) {
        const message_callbacks = this._message_callbacks.get(msg_type);
        if (message_callbacks == null)
            this._message_callbacks.set(msg_type, new Set([callback]));
        else
            message_callbacks.add(callback);
    }
    remove_on_message(msg_type, callback) {
        this._message_callbacks.get(msg_type)?.delete(callback);
    }
    _trigger_on_message(msg_type, msg_data) {
        const message_callbacks = this._message_callbacks.get(msg_type);
        if (message_callbacks != null) {
            for (const cb of message_callbacks) {
                cb(msg_data);
            }
        }
    }
    on_change(callback, allow_batches = false) {
        if (!this._callbacks.has(callback)) {
            this._callbacks.set(callback, allow_batches);
        }
    }
    remove_on_change(callback) {
        this._callbacks.delete(callback);
    }
    _trigger_on_change(event) {
        for (const [callback, allow_batches] of this._callbacks) {
            if (!allow_batches && event instanceof DocumentEventBatch) {
                for (const ev of event.events) {
                    callback(ev);
                }
            }
            else {
                callback(event); // TODO
            }
        }
    }
    _notify_change(model, attr, old_value, new_value, options) {
        this._trigger_on_change(new ModelChangedEvent(this, model, attr, old_value, new_value, options?.setter_id, options?.hint));
    }
    to_json_string(include_defaults = true) {
        return JSON.stringify(this.to_json(include_defaults));
    }
    to_json(include_defaults = true) {
        const serializer = new Serializer({ include_defaults });
        const roots = serializer.to_serializable(this._roots);
        return {
            version: js_version,
            title: this._title,
            roots: {
                root_ids: roots.map((r) => r.id),
                references: [...serializer.definitions],
            },
        };
    }
    static from_json_string(s, events) {
        const json = JSON.parse(s);
        return Document.from_json(json, events);
    }
    static _handle_version(json) {
        function pyify(version) {
            return version.replace(/-(dev|rc)\./, "$1");
        }
        if (json.version != null) {
            const py_version = json.version;
            const is_dev = py_version.indexOf("+") !== -1 || py_version.indexOf("-") !== -1;
            const versions_string = `Library versions: JS (${js_version}) / Python (${py_version})`;
            if (!is_dev && pyify(js_version) != py_version) {
                logger.warn("JS/Python version mismatch");
                logger.warn(versions_string);
            }
            else
                logger.debug(versions_string);
        }
        else
            logger.warn("'version' field is missing");
    }
    static from_json(json, events) {
        logger.debug("Creating Document from JSON");
        const doc_repr = Deserializer.decode(json);
        Document._handle_version(doc_repr);
        const resolver = new ModelResolver();
        if (doc_repr.defs != null) {
            resolve_defs(doc_repr.defs, resolver);
        }
        const roots_json = doc_repr.roots;
        const root_ids = roots_json.root_ids;
        const references_json = roots_json.references;
        const doc = new Document({ resolver });
        doc._push_all_models_freeze();
        const listener = (event) => events?.push(event);
        doc.on_change(listener, true);
        const references = Deserializer._instantiate_references_json(references_json, new Map(), resolver);
        Deserializer._initialize_references_json(references_json, new Map(), references, new Map(), doc);
        doc.remove_on_change(listener);
        for (const id of root_ids) {
            const root = references.get(id);
            if (root != null) {
                doc.add_root(root); // XXX: HasProps
            }
        }
        doc._pop_all_models_freeze();
        if (doc_repr.title != null)
            doc.set_title(doc_repr.title);
        return doc;
    }
    replace_with_json(json) {
        const replacement = Document.from_json(json);
        replacement.destructively_move(this);
    }
    create_json_patch(events) {
        for (const event of events) {
            if (event.document != this)
                throw new Error("Cannot create a patch using events from a different document");
        }
        const serializer = new Serializer();
        const events_repr = serializer.to_serializable(events);
        // TODO: We need a proper differential serializer. For now just remove known
        // definitions. We are doing this after a complete serialization, so that all
        // new objects are recorded.
        for (const model of this._all_models.values()) {
            serializer.remove_def(model);
        }
        return {
            events: events_repr,
            references: [...serializer.definitions],
        };
    }
    apply_json_patch(patch, buffers = new Map(), setter_id) {
        const references_json = patch.references;
        const events_json = patch.events;
        const references = Deserializer._instantiate_references_json(references_json, this._all_models, this._resolver);
        if (!(buffers instanceof Map)) {
            buffers = new Map(buffers);
        }
        // The model being changed isn't always in references so add it in
        for (const event_json of events_json) {
            switch (event_json.kind) {
                case "RootAdded":
                case "RootRemoved":
                case "ModelChanged": {
                    const model_id = event_json.model.id;
                    const model = this._all_models.get(model_id);
                    if (model != null) {
                        references.set(model_id, model);
                    }
                    else if (!references.has(model_id)) {
                        logger.warn(`Got an event for unknown model ${event_json.model}"`);
                        throw new Error("event model wasn't known");
                    }
                    break;
                }
            }
        }
        // split references into old and new so we know whether to initialize or update
        const old_references = new Map(this._all_models);
        const new_references = new Map();
        for (const [id, value] of references) {
            if (!old_references.has(id))
                new_references.set(id, value);
        }
        Deserializer._initialize_references_json(references_json, old_references, new_references, buffers, this);
        for (const event_json of events_json) {
            switch (event_json.kind) {
                case "MessageSent": {
                    const { msg_type, msg_data } = event_json;
                    let data;
                    if (msg_data === undefined) {
                        if (buffers.size == 1) {
                            const [[, buffer]] = buffers;
                            data = buffer;
                        }
                        else {
                            throw new Error("expected exactly one buffer");
                        }
                    }
                    else {
                        data = Deserializer._resolve_refs(msg_data, old_references, new_references, buffers);
                    }
                    this._trigger_on_message(msg_type, data);
                    break;
                }
                case "ModelChanged": {
                    const patched_id = event_json.model.id;
                    const patched_obj = this._all_models.get(patched_id);
                    if (patched_obj == null) {
                        throw new Error(`Cannot apply patch to ${patched_id} which is not in the document`);
                    }
                    const attr = event_json.attr;
                    const value = Deserializer._resolve_refs(event_json.new, old_references, new_references, buffers);
                    patched_obj.setv({ [attr]: value }, { setter_id });
                    break;
                }
                case "ColumnDataChanged": {
                    const column_source_id = event_json.column_source.id;
                    const column_source = this._all_models.get(column_source_id);
                    if (column_source == null) {
                        throw new Error(`Cannot stream to ${column_source_id} which is not in the document`);
                    }
                    const data = Deserializer._resolve_refs(event_json.new, new Map(), new Map(), buffers);
                    if (event_json.cols != null) {
                        for (const k in column_source.data) {
                            if (!(k in data)) {
                                data[k] = column_source.data[k];
                            }
                        }
                    }
                    column_source.setv({ data }, { setter_id, check_eq: false });
                    break;
                }
                case "ColumnsStreamed": {
                    const column_source_id = event_json.column_source.id;
                    const column_source = this._all_models.get(column_source_id);
                    if (column_source == null) {
                        throw new Error(`Cannot stream to ${column_source_id} which is not in the document`);
                    }
                    if (!(column_source instanceof ColumnDataSource)) {
                        throw new Error("Cannot stream to non-ColumnDataSource");
                    }
                    const data = event_json.data;
                    const rollover = event_json.rollover;
                    column_source.stream(data, rollover, setter_id);
                    break;
                }
                case "ColumnsPatched": {
                    const column_source_id = event_json.column_source.id;
                    const column_source = this._all_models.get(column_source_id);
                    if (column_source == null) {
                        throw new Error(`Cannot patch ${column_source_id} which is not in the document`);
                    }
                    if (!(column_source instanceof ColumnDataSource)) {
                        throw new Error("Cannot patch non-ColumnDataSource");
                    }
                    const patches = event_json.patches;
                    column_source.patch(patches, setter_id);
                    break;
                }
                case "RootAdded": {
                    const root_id = event_json.model.id;
                    const root_obj = references.get(root_id);
                    this.add_root(root_obj, setter_id); // XXX: HasProps
                    break;
                }
                case "RootRemoved": {
                    const root_id = event_json.model.id;
                    const root_obj = references.get(root_id);
                    this.remove_root(root_obj, setter_id); // XXX: HasProps
                    break;
                }
                case "TitleChanged": {
                    this.set_title(event_json.title, setter_id);
                    break;
                }
                default:
                    throw new Error(`Unknown patch event ${JSON.stringify(event_json)}`);
            }
        }
    }
}
Document.__name__ = "Document";
//# sourceMappingURL=document.js.map