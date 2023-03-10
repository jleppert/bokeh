import * as types from "./types";
declare type ESMap<K, V> = globalThis.Map<K, V>;
declare const ESMap: MapConstructor;
declare type ESSet<V> = globalThis.Set<V>;
declare const ESSet: SetConstructor;
export declare abstract class Kind<T> {
    __type__: T;
    abstract valid(value: unknown): value is this["__type__"];
}
declare type Constructor<T> = Function & {
    prototype: T;
};
export declare namespace Kinds {
    class Any extends Kind<any> {
        valid(_value: unknown): _value is any;
    }
    class Unknown extends Kind<unknown> {
        valid(_value: unknown): _value is unknown;
    }
    class Boolean extends Kind<boolean> {
        valid(value: unknown): value is boolean;
    }
    class Ref<ObjType extends object> extends Kind<ObjType> {
        readonly obj_type: Constructor<ObjType>;
        constructor(obj_type: Constructor<ObjType>);
        valid(value: unknown): value is ObjType;
    }
    class AnyRef<ObjType extends object> extends Kind<ObjType> {
        valid(value: unknown): value is ObjType;
    }
    class Number extends Kind<number> {
        valid(value: unknown): value is number;
    }
    class Int extends Number {
        valid(value: unknown): value is number;
    }
    class Percent extends Number {
        valid(value: unknown): value is number;
    }
    type TupleKind<T extends unknown[]> = {
        [K in keyof T]: T[K] extends T[number] ? Kind<T[K]> : never;
    };
    class Or<T extends unknown[]> extends Kind<T[number]> {
        readonly types: TupleKind<T>;
        constructor(types: TupleKind<T>);
        valid(value: unknown): value is T[number];
    }
    class Tuple<T extends [unknown, ...unknown[]]> extends Kind<T> {
        readonly types: TupleKind<T>;
        constructor(types: TupleKind<T>);
        valid(value: unknown): value is T;
    }
    class Struct<T extends object> extends Kind<T> {
        readonly struct_type: {
            [key in keyof T]: Kind<T[key]>;
        };
        constructor(struct_type: {
            [key in keyof T]: Kind<T[key]>;
        });
        valid(value: unknown): value is this["__type__"];
    }
    class Arrayable extends Kind<types.Arrayable> {
        valid(value: unknown): value is types.Arrayable;
    }
    class Array<ItemType> extends Kind<ItemType[]> {
        readonly item_type: Kind<ItemType>;
        constructor(item_type: Kind<ItemType>);
        valid(value: unknown): value is ItemType[];
    }
    class Null extends Kind<null> {
        valid(value: unknown): value is null;
    }
    class Nullable<BaseType> extends Kind<BaseType | null> {
        readonly base_type: Kind<BaseType>;
        constructor(base_type: Kind<BaseType>);
        valid(value: unknown): value is BaseType | null;
    }
    class Opt<BaseType> extends Kind<BaseType | undefined> {
        readonly base_type: Kind<BaseType>;
        constructor(base_type: Kind<BaseType>);
        valid(value: unknown): value is BaseType | undefined;
    }
    class String extends Kind<string> {
        valid(value: unknown): value is string;
    }
    class Regex extends String {
        readonly regex: RegExp;
        constructor(regex: RegExp);
        valid(value: unknown): value is string;
    }
    class Enum<T extends string | number> extends Kind<T> {
        readonly values: ESSet<T>;
        constructor(values: Iterable<T>);
        valid(value: unknown): value is T;
        [Symbol.iterator](): Generator<T, void, undefined>;
    }
    class Dict<ItemType> extends Kind<{
        [key: string]: ItemType;
    }> {
        readonly item_type: Kind<ItemType>;
        constructor(item_type: Kind<ItemType>);
        valid(value: unknown): value is this["__type__"];
    }
    class Map<KeyType, ItemType> extends Kind<ESMap<KeyType, ItemType>> {
        readonly key_type: Kind<KeyType>;
        readonly item_type: Kind<ItemType>;
        constructor(key_type: Kind<KeyType>, item_type: Kind<ItemType>);
        valid(value: unknown): value is this["__type__"];
    }
    class Set<ItemType> extends Kind<ESSet<ItemType>> {
        readonly item_type: Kind<ItemType>;
        constructor(item_type: Kind<ItemType>);
        valid(value: unknown): value is this["__type__"];
    }
    class Color extends Kind<types.Color> {
        valid(value: unknown): value is types.Color;
    }
    class Function<Args extends unknown[], Ret> extends Kind<(...args: Args) => Ret> {
        valid(value: unknown): value is this["__type__"];
    }
}
export declare const Any: Kinds.Any;
export declare const Unknown: Kinds.Unknown;
export declare const Boolean: Kinds.Boolean;
export declare const Number: Kinds.Number;
export declare const Int: Kinds.Int;
export declare const String: Kinds.String;
export declare const Regex: (regex: RegExp) => Kinds.Regex;
export declare const Null: Kinds.Null;
export declare const Nullable: <BaseType>(base_type: Kind<BaseType>) => Kinds.Nullable<BaseType>;
export declare const Opt: <BaseType>(base_type: Kind<BaseType>) => Kinds.Opt<BaseType>;
export declare const Or: <T extends unknown[]>(...types: Kinds.TupleKind<T>) => Kinds.Or<T>;
export declare const Tuple: <T extends [unknown, ...unknown[]]>(...types: Kinds.TupleKind<T>) => Kinds.Tuple<T>;
export declare const Struct: <T extends object>(struct_type: { [key in keyof T]: Kind<T[key]>; }) => Kinds.Struct<T>;
export declare const Arrayable: Kinds.Arrayable;
export declare const Array: <ItemType>(item_type: Kind<ItemType>) => Kinds.Array<ItemType>;
export declare const Dict: <V>(item_type: Kind<V>) => Kinds.Dict<V>;
export declare const Map: <K, V>(key_type: Kind<K>, item_type: Kind<V>) => Kinds.Map<K, V>;
export declare const Set: <V>(item_type: Kind<V>) => Kinds.Set<V>;
export declare const Enum: <T extends string | number>(...values: T[]) => Kinds.Enum<T>;
export declare const Ref: <ObjType extends object>(obj_type: Constructor<ObjType>) => Kinds.Ref<ObjType>;
export declare const AnyRef: <ObjType extends object>() => Kinds.AnyRef<ObjType>;
export declare const Function: <Args extends unknown[], Ret>() => Kinds.Function<Args, Ret>;
export declare const Percent: Kinds.Percent;
export declare const Alpha: Kinds.Percent;
export declare const Color: Kinds.Color;
export declare const Auto: Kinds.Enum<"auto">;
export declare const FontSize: Kinds.String;
export declare const Font: Kinds.String;
export declare const Angle: Kinds.Number;
export {};
//# sourceMappingURL=kinds.d.ts.map