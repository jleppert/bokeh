var _a;
import { Signal0, Signal, Signalable } from "./signaling";
import * as p from "./properties";
import * as k from "./kinds";
import { assert } from "./util/assert";
import { uniqueId } from "./util/string";
import { keys, values, entries, extend } from "./util/object";
import { isPlainObject, isArray, isFunction, isPrimitive } from "./util/types";
import { is_equal } from "./util/eq";
import { serialize } from "./serializer";
import { DocumentEventBatch, ModelChangedEvent } from "../document/events";
import { equals } from "./util/eq";
import { pretty } from "./util/pretty";
import { clone, Cloner } from "./util/cloneable";
import * as kinds from "./kinds";
export class HasProps extends Signalable() {
    constructor(attrs = {}) {
        super();
        this.document = null;
        this.destroyed = new Signal0(this, "destroyed");
        this.change = new Signal0(this, "change");
        this.transformchange = new Signal0(this, "transformchange");
        this.exprchange = new Signal0(this, "exprchange");
        this.properties = {};
        this._watchers = new WeakMap();
        this._pending = false;
        this._changing = false;
        const deferred = isPlainObject(attrs) && "id" in attrs;
        this.id = deferred ? attrs.id : uniqueId();
        for (const [name, { type, default_value, options }] of entries(this._props)) {
            let property;
            if (type instanceof p.PropertyAlias) {
                Object.defineProperty(this.properties, name, {
                    get: () => this.properties[type.attr],
                    configurable: false,
                    enumerable: false,
                });
            }
            else {
                if (type instanceof k.Kind)
                    property = new p.PrimitiveProperty(this, name, type, default_value, options);
                else
                    property = new type(this, name, k.Any, default_value, options);
                this.properties[name] = property;
            }
        }
        if (deferred) {
            assert(keys(attrs).length == 1);
        }
        else {
            const items = attrs instanceof Map ? attrs.entries() : entries(attrs);
            for (const [attr, value] of items) {
                if (attr in this.properties)
                    this.properties[attr].set_value(value);
                else
                    throw new Error(`unknown property ${this.type}.${attr}`);
            }
            // allowing us to defer initialization when loading many models
            // when loading a bunch of models, we want to do initialization as a second pass
            // because other objects that this one depends on might not be loaded yet
            this.finalize_props();
            this.finalize();
            this.connect_signals();
        }
    }
    get is_syncable() {
        return true;
    }
    // XXX: setter is only required for backwards compatibility
    set type(name) {
        console.warn("prototype.type = 'ModelName' is deprecated, use static __name__ instead");
        this.constructor.__name__ = name;
    }
    get type() {
        return this.constructor.__qualified__;
    }
    static get __qualified__() {
        const { __module__, __name__ } = this;
        return __module__ != null ? `${__module__}.${__name__}` : __name__;
    }
    get [Symbol.toStringTag]() {
        return this.constructor.__name__;
    }
    static _fix_default(default_value, _attr) {
        if (default_value === undefined)
            return () => p.unset;
        else if (isFunction(default_value))
            return default_value;
        else if (isPrimitive(default_value))
            return () => default_value;
        else {
            const cloner = new Cloner();
            return () => cloner.clone(default_value);
        }
    }
    // TODO: don't use Partial<>, but exclude inherited properties
    static define(obj) {
        for (const [name, prop] of entries(isFunction(obj) ? obj(kinds) : obj)) {
            if (name in this.prototype._props)
                throw new Error(`attempted to redefine property '${this.prototype.type}.${name}'`);
            if (name in this.prototype)
                throw new Error(`attempted to redefine attribute '${this.prototype.type}.${name}'`);
            Object.defineProperty(this.prototype, name, {
                // XXX: don't use tail calls in getters/setters due to https://bugs.webkit.org/show_bug.cgi?id=164306
                get() {
                    const value = this.properties[name].get_value();
                    return value;
                },
                set(value) {
                    this.setv({ [name]: value });
                    return this;
                },
                configurable: false,
                enumerable: true,
            });
            const [type, default_value, options = {}] = prop;
            const refined_prop = {
                type,
                default_value: this._fix_default(default_value, name),
                options,
            };
            const props = { ...this.prototype._props };
            props[name] = refined_prop;
            this.prototype._props = props;
        }
    }
    static internal(obj) {
        const _object = {};
        for (const [name, prop] of entries(isFunction(obj) ? obj(kinds) : obj)) {
            const [type, default_value, options = {}] = prop;
            _object[name] = [type, default_value, { ...options, internal: true }];
        }
        this.define(_object);
    }
    static mixins(defs) {
        function rename(prefix, mixin) {
            const result = {};
            for (const [name, prop] of entries(mixin)) {
                result[prefix + name] = prop;
            }
            return result;
        }
        const mixin_defs = {};
        const mixins = [];
        for (const def of isArray(defs) ? defs : [defs]) {
            if (isArray(def)) {
                const [prefix, mixin] = def;
                extend(mixin_defs, rename(prefix, mixin));
                mixins.push([prefix, mixin]);
            }
            else {
                const mixin = def;
                extend(mixin_defs, mixin);
                mixins.push(["", mixin]);
            }
        }
        this.define(mixin_defs);
        this.prototype._mixins = [...this.prototype._mixins, ...mixins];
    }
    static override(obj) {
        for (const [name, prop] of entries(obj)) {
            const default_value = this._fix_default(prop, name);
            if (!(name in this.prototype._props))
                throw new Error(`attempted to override nonexistent '${this.prototype.type}.${name}'`);
            const value = this.prototype._props[name];
            const props = { ...this.prototype._props };
            props[name] = { ...value, default_value };
            this.prototype._props = props;
        }
    }
    toString() {
        return `${this.type}(${this.id})`;
    }
    property(name) {
        if (name in this.properties)
            return this.properties[name];
        else
            throw new Error(`unknown property ${this.type}.${name}`);
    }
    get attributes() {
        const attrs = {};
        for (const prop of this) {
            if (!prop.is_unset)
                attrs[prop.attr] = prop.get_value();
        }
        return attrs;
    }
    [clone](cloner) {
        const attrs = new Map();
        for (const prop of this) {
            if (prop.dirty) {
                attrs.set(prop.attr, cloner.clone(prop.get_value()));
            }
        }
        return new this.constructor(attrs);
    }
    [equals](that, cmp) {
        for (const p0 of this) {
            const p1 = that.property(p0.attr);
            if (!cmp.eq(p0.get_value(), p1.get_value()))
                return false;
        }
        return true;
    }
    [pretty](printer) {
        const T = printer.token;
        const items = [];
        for (const prop of this) {
            if (prop.dirty) {
                const value = prop.get_value();
                items.push(`${prop.attr}${T(":")} ${printer.to_string(value)}`);
            }
        }
        const cls = this.constructor.__qualified__;
        return `${cls}${T("(")}${T("{")}${items.join(`${T(",")} `)}${T("}")}${T(")")}`;
    }
    [serialize](serializer) {
        const ref = this.ref();
        serializer.add_ref(this, ref);
        const struct = this.struct();
        for (const prop of this) {
            if (prop.syncable && (serializer.include_defaults || prop.dirty)) {
                const value = serializer.include_unset && prop.is_unset ? p.unset : prop.get_value();
                struct.attributes[prop.attr] = serializer.to_serializable(value);
            }
        }
        serializer.add_def(this, struct);
        return ref;
    }
    finalize_props() {
        for (const prop of this) {
            if (!prop.initialized)
                prop.initialize();
        }
    }
    finalize() {
        this.initialize();
    }
    initialize() { }
    connect_signals() {
        for (const prop of this) {
            if (!(prop instanceof p.VectorSpec || prop instanceof p.ScalarSpec))
                continue;
            const value = prop.get_value(); // XXX: T -> any under instanceof
            if (value != null) {
                const { transform, expr } = value;
                if (transform != null)
                    this.connect(transform.change, () => this.transformchange.emit());
                if (expr != null)
                    this.connect(expr.change, () => this.exprchange.emit());
            }
        }
    }
    disconnect_signals() {
        Signal.disconnect_receiver(this);
    }
    destroy() {
        this.disconnect_signals();
        this.destroyed.emit();
    }
    // Create a new model with exact attribute values to this one, but new identity.
    clone() {
        const cloner = new Cloner();
        return cloner.clone(this);
    }
    changed_for(obj) {
        const changed = this._watchers.get(obj);
        this._watchers.set(obj, false);
        return changed ?? true;
    }
    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    _setv(changes, options) {
        // Extract attributes and options.
        const check_eq = options.check_eq;
        const changed = new Set();
        const changing = this._changing;
        this._changing = true;
        for (const [prop, value] of changes) {
            if (check_eq === false || prop.is_unset || !is_equal(prop.get_value(), value)) {
                prop.set_value(value);
                changed.add(prop);
            }
        }
        // Trigger all relevant attribute changes.
        if (changed.size > 0) {
            this._watchers = new WeakMap();
            this._pending = true;
        }
        for (const prop of changed) {
            prop.change.emit();
        }
        // You might be wondering why there's a `while` loop here. Changes can
        // be recursively nested within `"change"` events.
        if (!changing) {
            if (!(options.no_change ?? false)) {
                while (this._pending) {
                    this._pending = false;
                    this.change.emit();
                }
            }
            this._pending = false;
            this._changing = false;
        }
        return changed;
    }
    setv(changed_attrs, options = {}) {
        const changes = entries(changed_attrs);
        if (changes.length == 0)
            return;
        if (options.silent === true) {
            this._watchers = new WeakMap();
            for (const [attr, value] of changes) {
                this.properties[attr].set_value(value);
            }
            return;
        }
        const changed = new Map();
        const previous = new Map();
        for (const [attr, value] of changes) {
            const prop = this.properties[attr];
            changed.set(prop, value);
            previous.set(prop, prop.is_unset ? undefined : prop.get_value());
        }
        const updated = this._setv(changed, options);
        const { document } = this;
        if (document != null) {
            const changed = [];
            for (const [prop, value] of previous) {
                if (updated.has(prop))
                    changed.push([prop, value, prop.get_value()]);
            }
            for (const [, old_value, new_value] of changed) {
                if (this._needs_invalidate(old_value, new_value)) {
                    document._invalidate_all_models();
                    break;
                }
            }
            this._push_changes(changed, options);
        }
    }
    ref() {
        return { id: this.id };
    }
    struct() {
        const struct = {
            type: this.type,
            id: this.id,
            attributes: {},
        };
        return struct;
    }
    *[Symbol.iterator]() {
        yield* values(this.properties);
    }
    *syncable_properties() {
        for (const prop of this) {
            if (prop.syncable)
                yield prop;
        }
    }
    // add all references from 'v' to 'result', if recurse
    // is true then descend into refs, if false only
    // descend into non-refs
    static _value_record_references(v, refs, options) {
        const { recursive } = options;
        if (v instanceof HasProps) {
            if (!refs.has(v)) {
                refs.add(v);
                if (recursive) {
                    for (const prop of v.syncable_properties()) {
                        if (!prop.is_unset) {
                            const value = prop.get_value();
                            HasProps._value_record_references(value, refs, { recursive });
                        }
                    }
                }
            }
        }
        else if (isArray(v)) {
            for (const elem of v)
                HasProps._value_record_references(elem, refs, { recursive });
        }
        else if (isPlainObject(v)) {
            for (const elem of values(v)) {
                HasProps._value_record_references(elem, refs, { recursive });
            }
        }
    }
    references() {
        const refs = new Set();
        HasProps._value_record_references(this, refs, { recursive: true });
        return refs;
    }
    _doc_attached() { }
    _doc_detached() { }
    attach_document(doc) {
        // This should only be called by the Document implementation to set the document field
        if (this.document != null) {
            if (this.document == doc)
                return;
            else
                throw new Error("models must be owned by only a single document");
        }
        this.document = doc;
        this._doc_attached();
    }
    detach_document() {
        // This should only be called by the Document implementation to unset the document field
        this._doc_detached();
        this.document = null;
    }
    _needs_invalidate(old_value, new_value) {
        const new_refs = new Set();
        HasProps._value_record_references(new_value, new_refs, { recursive: false });
        const old_refs = new Set();
        HasProps._value_record_references(old_value, old_refs, { recursive: false });
        for (const new_id of new_refs) {
            if (!old_refs.has(new_id))
                return true;
        }
        for (const old_id of old_refs) {
            if (!new_refs.has(old_id))
                return true;
        }
        return false;
    }
    _push_changes(changes, options = {}) {
        if (!this.is_syncable)
            return;
        const { document } = this;
        if (document == null)
            return;
        const { setter_id } = options;
        const events = [];
        for (const [prop, old_value, new_value] of changes) {
            if (prop.syncable)
                events.push(new ModelChangedEvent(document, this, prop.attr, old_value, new_value, setter_id));
        }
        if (events.length != 0) {
            let event;
            if (events.length == 1)
                [event] = events;
            else
                event = new DocumentEventBatch(document, events, setter_id);
            document._trigger_on_change(event);
        }
    }
    on_change(properties, fn) {
        for (const property of isArray(properties) ? properties : [properties]) {
            this.connect(property.change, fn);
        }
    }
}
_a = HasProps;
(() => {
    _a.prototype._props = {};
    _a.prototype._mixins = [];
})();
//# sourceMappingURL=has_props.js.map