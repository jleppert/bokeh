import { ModelResolver } from "../base";
import { BokehEvent, ModelEvent } from "../core/bokeh_events";
import { HasProps } from "../core/has_props";
import { ID } from "../core/types";
import { Signal0 } from "../core/signaling";
import { Struct } from "../core/util/refs";
import { equals, Equatable, Comparator } from "../core/util/eq";
import { Buffers } from "../core/util/serialization";
import { LayoutDOM } from "../models/layouts/layout_dom";
import { ClientSession } from "../client/session";
import { Model } from "../model";
import { ModelDef } from "./defs";
import { DocumentEvent, DocumentChangedEvent, DocumentChanged } from "./events";
export declare type Out<T> = T;
export declare class EventManager {
    readonly document: Document;
    session: ClientSession | null;
    subscribed_models: Set<Model>;
    constructor(document: Document);
    send_event(bokeh_event: BokehEvent): void;
    trigger(event: ModelEvent): void;
}
export declare type DocJson = {
    version?: string;
    title?: string;
    defs?: ModelDef[];
    roots: {
        root_ids: ID[];
        references: Struct[];
    };
};
export declare type Patch = {
    references: Struct[];
    events: DocumentChanged[];
};
export declare const documents: Document[];
export declare const DEFAULT_TITLE = "Bokeh Application";
export declare class Document implements Equatable {
    readonly event_manager: EventManager;
    readonly idle: Signal0<this>;
    protected readonly _init_timestamp: number;
    protected readonly _resolver: ModelResolver;
    protected _title: string;
    protected _roots: Model[];
    _all_models: Map<ID, HasProps>;
    protected _all_models_freeze_count: number;
    protected _callbacks: Map<((event: DocumentEvent) => void) | ((event: DocumentChangedEvent) => void), boolean>;
    protected _message_callbacks: Map<string, Set<(data: unknown) => void>>;
    private _idle_roots;
    protected _interactive_timestamp: number | null;
    protected _interactive_plot: Model | null;
    protected _interactive_finalize: (() => void) | null;
    constructor(options?: {
        resolver?: ModelResolver;
    });
    [equals](that: this, _cmp: Comparator): boolean;
    get layoutables(): LayoutDOM[];
    get is_idle(): boolean;
    notify_idle(model: HasProps): void;
    clear(): void;
    interactive_start(plot: Model, finalize?: (() => void) | null): void;
    interactive_stop(): void;
    interactive_duration(): number;
    destructively_move(dest_doc: Document): void;
    protected _push_all_models_freeze(): void;
    protected _pop_all_models_freeze(): void;
    _invalidate_all_models(): void;
    protected _recompute_all_models(): void;
    roots(): Model[];
    add_root(model: Model, setter_id?: string): void;
    remove_root(model: Model, setter_id?: string): void;
    title(): string;
    set_title(title: string, setter_id?: string): void;
    get_model_by_id(model_id: string): HasProps | null;
    get_model_by_name(name: string): HasProps | null;
    on_message(msg_type: string, callback: (msg_data: unknown) => void): void;
    remove_on_message(msg_type: string, callback: (msg_data: unknown) => void): void;
    protected _trigger_on_message(msg_type: string, msg_data: unknown): void;
    on_change(callback: (event: DocumentEvent) => void, allow_batches: true): void;
    on_change(callback: (event: DocumentChangedEvent) => void, allow_batches?: false): void;
    remove_on_change(callback: ((event: DocumentEvent) => void) | ((event: DocumentChangedEvent) => void)): void;
    _trigger_on_change(event: DocumentEvent): void;
    _notify_change(model: HasProps, attr: string, old_value: unknown, new_value: unknown, options?: {
        setter_id?: string;
        hint?: DocumentChangedEvent;
    }): void;
    to_json_string(include_defaults?: boolean): string;
    to_json(include_defaults?: boolean): DocJson;
    static from_json_string(s: string, events?: Out<DocumentEvent[]>): Document;
    private static _handle_version;
    static from_json(json: DocJson, events?: Out<DocumentEvent[]>): Document;
    replace_with_json(json: DocJson): void;
    create_json_patch(events: DocumentChangedEvent[]): Patch;
    apply_json_patch(patch: Patch, buffers?: Buffers | ReturnType<Buffers["entries"]>, setter_id?: string): void;
}
//# sourceMappingURL=document.d.ts.map