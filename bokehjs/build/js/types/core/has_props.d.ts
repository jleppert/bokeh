import { View } from "./view";
import { Class } from "./class";
import { Attrs } from "./types";
import { Signal0, Signal, ISignalable } from "./signaling";
import { Struct, Ref } from "./util/refs";
import * as p from "./properties";
import { Property } from "./properties";
import { serialize, Serializable, Serializer } from "./serializer";
import type { Document } from "../document/document";
import { equals, Equatable, Comparator } from "./util/eq";
import { pretty, Printable, Printer } from "./util/pretty";
import { clone, Cloneable, Cloner } from "./util/cloneable";
import * as kinds from "./kinds";
declare type AttrsLike = {
    [key: string]: unknown;
} | Map<string, unknown>;
export declare module HasProps {
    type Attrs = p.AttrsOf<Props>;
    type Props = {};
    type SetOptions = {
        check_eq?: boolean;
        silent?: boolean;
        no_change?: boolean;
        setter_id?: string;
    };
}
export interface HasProps extends HasProps.Attrs, ISignalable {
    constructor: Function & {
        __name__: string;
        __module__?: string;
        __qualified__: string;
    };
}
export declare type PropertyGenerator = Generator<Property, void, undefined>;
declare const HasProps_base: {
    new (): {
        connect<Args, Sender extends object>(signal: Signal<Args, Sender>, slot: import("./signaling").Slot<Args, Sender>): boolean;
        disconnect<Args_1, Sender_1 extends object>(signal: Signal<Args_1, Sender_1>, slot: import("./signaling").Slot<Args_1, Sender_1>): boolean;
    };
};
export declare abstract class HasProps extends HasProps_base implements Equatable, Printable, Serializable, Cloneable {
    __view_type__: View;
    readonly id: string;
    get is_syncable(): boolean;
    set type(name: string);
    get type(): string;
    static __name__: string;
    static __module__?: string;
    static get __qualified__(): string;
    get [Symbol.toStringTag](): string;
    /** @prototype */
    default_view: Class<View, [View.Options]>;
    /** @prototype */
    _props: {
        [key: string]: {
            type: p.PropertyConstructor<unknown>;
            default_value: (self: HasProps) => unknown | p.Unset;
            options: p.PropertyOptions<unknown>;
        };
    };
    /** @prototype */
    _mixins: [string, object][];
    private static _fix_default;
    static define<T>(obj: Partial<p.DefineOf<T>> | ((types: typeof kinds) => Partial<p.DefineOf<T>>)): void;
    static internal<T>(obj: Partial<p.DefineOf<T>> | ((types: typeof kinds) => Partial<p.DefineOf<T>>)): void;
    static mixins<_T>(defs: Attrs | (Attrs | [string, Attrs])[]): void;
    static override<T>(obj: Partial<p.DefaultsOf<T>>): void;
    toString(): string;
    document: Document | null;
    readonly destroyed: Signal0<this>;
    readonly change: Signal0<this>;
    readonly transformchange: Signal0<this>;
    readonly exprchange: Signal0<this>;
    readonly properties: {
        [key: string]: Property;
    };
    property(name: string): Property;
    get attributes(): Attrs;
    [clone](cloner: Cloner): this;
    [equals](that: this, cmp: Comparator): boolean;
    [pretty](printer: Printer): string;
    [serialize](serializer: Serializer): Ref;
    constructor(attrs?: {
        id: string;
    } | AttrsLike);
    finalize_props(): void;
    finalize(): void;
    initialize(): void;
    connect_signals(): void;
    disconnect_signals(): void;
    destroy(): void;
    clone(): this;
    private _watchers;
    changed_for(obj: object): boolean;
    private _pending;
    private _changing;
    private _setv;
    setv(changed_attrs: Attrs, options?: HasProps.SetOptions): void;
    ref(): Ref;
    struct(): Struct;
    [Symbol.iterator](): PropertyGenerator;
    syncable_properties(): PropertyGenerator;
    static _value_record_references(v: unknown, refs: Set<HasProps>, options: {
        recursive: boolean;
    }): void;
    references(): Set<HasProps>;
    protected _doc_attached(): void;
    protected _doc_detached(): void;
    attach_document(doc: Document): void;
    detach_document(): void;
    protected _needs_invalidate(old_value: unknown, new_value: unknown): boolean;
    protected _push_changes(changes: [Property, unknown, unknown][], options?: {
        setter_id?: string;
    }): void;
    on_change(properties: Property<unknown> | Property<unknown>[], fn: () => void): void;
}
export {};
//# sourceMappingURL=has_props.d.ts.map