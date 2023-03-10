import * as ts from "typescript";
export declare function apply<T extends ts.Node>(node: T, ...transforms: ts.TransformerFactory<T>[]): T;
export declare function relativize_modules(relativize: (file: string, module_path: string) => string | null): (context: ts.TransformationContext) => ts.CustomTransformer;
export declare function insert_class_name(): (context: ts.TransformationContext) => (root: ts.SourceFile) => ts.SourceFile;
export declare function remove_use_strict(): (_context: ts.TransformationContext) => (root: ts.SourceFile) => ts.SourceFile;
export declare type ExportNamespace = {
    type: "namespace";
    name?: string;
    module: string;
};
export declare type ExportBindings = {
    type: "bindings";
    bindings: [string | undefined, string][];
    module: string;
};
export declare type ExportNamed = {
    type: "named";
    name: string;
};
export declare type Exports = ExportNamespace | ExportBindings | ExportNamed;
export declare function collect_exports(exported: Exports[]): (_context: ts.TransformationContext) => (root: ts.SourceFile) => ts.SourceFile;
export declare function collect_imports(imports: Set<string>): (context: ts.TransformationContext) => (root: ts.SourceFile) => ts.SourceFile;
export declare function collect_deps(source: ts.SourceFile): string[];
export declare function rewrite_deps(resolve: (dep: string) => number | string | undefined): (context: ts.TransformationContext) => (root: ts.SourceFile) => ts.SourceFile;
export declare function rename_exports(): (context: ts.TransformationContext) => (root: ts.SourceFile) => ts.SourceFile;
export declare function fix_esmodule(): (context: ts.TransformationContext) => (root: ts.SourceFile) => ts.SourceFile;
export declare function remove_void0(): (_context: ts.TransformationContext) => (root: ts.SourceFile) => ts.SourceFile;
export declare function fix_esexports(): (context: ts.TransformationContext) => (root: ts.SourceFile) => ts.SourceFile;
export declare function wrap_in_function(module_name: string): (context: ts.TransformationContext) => (root: ts.SourceFile) => ts.SourceFile;
export declare function parse_es(file: string, code?: string, target?: ts.ScriptTarget): ts.SourceFile;
export declare function print_es(source: ts.SourceFile): string;
//# sourceMappingURL=transforms.d.ts.map