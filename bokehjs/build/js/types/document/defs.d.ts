import { ModelResolver } from "../base";
import { Struct } from "../core/util/refs";
export declare type ModelRef = {
    name: string;
    module?: string | null;
};
export declare type ModelDef = ModelRef & {
    extends: ModelRef;
    properties: PropertyDef[];
    overrides: OverrideDef[];
    references: Struct[];
};
export declare type PrimitiveKindRef = "Any" | "Unknown" | "Boolean" | "Number" | "Int" | "String" | "Null";
export declare type KindRef = PrimitiveKindRef | [
    "Regex",
    string,
    string?
] | [
    "Nullable",
    KindRef
] | [
    "Or",
    ...KindRef[]
] | [
    "Tuple",
    KindRef,
    ...KindRef[]
] | [
    "Array",
    KindRef
] | [
    "Struct",
    ...([string, KindRef][])
] | [
    "Dict",
    KindRef
] | [
    "Map",
    KindRef,
    KindRef
] | [
    "Enum",
    ...string[]
] | [
    "Ref",
    ModelRef
] | [
    "AnyRef"
];
export declare type PropertyDef = {
    name: string;
    kind: KindRef;
    default?: unknown;
};
export declare type OverrideDef = {
    name: string;
    default: unknown;
};
export declare function resolve_defs(defs: ModelDef[], resolver: ModelResolver): void;
//# sourceMappingURL=defs.d.ts.map