"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.print_es = exports.parse_es = exports.wrap_in_function = exports.fix_esexports = exports.remove_void0 = exports.fix_esmodule = exports.rename_exports = exports.rewrite_deps = exports.collect_deps = exports.collect_imports = exports.collect_exports = exports.remove_use_strict = exports.insert_class_name = exports.relativize_modules = exports.apply = void 0;
const ts = __importStar(require("typescript"));
function apply(node, ...transforms) {
    const result = ts.transform(node, transforms);
    return result.transformed[0];
}
exports.apply = apply;
function is_require(node) {
    return ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === "require" &&
        node.arguments.length === 1;
}
function relativize_modules(relativize) {
    function relativize_specifier(source, expr) {
        if (expr != null && ts.isStringLiteralLike(expr) && expr.text.length > 0) {
            const relative = relativize(source.fileName, expr.text);
            if (relative != null)
                return ts.createLiteral(relative);
        }
        return null;
    }
    return (context) => {
        return {
            transformSourceFile(root) {
                const { factory } = context;
                function visit(node) {
                    if (ts.isImportDeclaration(node)) {
                        const moduleSpecifier = relativize_specifier(root, node.moduleSpecifier);
                        if (moduleSpecifier != null) {
                            const { decorators, modifiers, importClause, assertClause } = node;
                            return factory.updateImportDeclaration(node, decorators, modifiers, importClause, moduleSpecifier, assertClause);
                        }
                    }
                    if (ts.isExportDeclaration(node)) {
                        const moduleSpecifier = relativize_specifier(root, node.moduleSpecifier);
                        if (moduleSpecifier != null) {
                            const { decorators, modifiers, isTypeOnly, exportClause, assertClause } = node;
                            return factory.updateExportDeclaration(node, decorators, modifiers, isTypeOnly, exportClause, moduleSpecifier, assertClause);
                        }
                    }
                    if (is_require(node)) {
                        const moduleSpecifier = relativize_specifier(root, node.arguments[0]);
                        if (moduleSpecifier != null) {
                            const { expression, typeArguments } = node;
                            return factory.updateCallExpression(node, expression, typeArguments, [moduleSpecifier]);
                        }
                    }
                    return ts.visitEachChild(node, visit, context);
                }
                return ts.visitNode(root, visit);
            },
            transformBundle(_root) {
                throw new Error("unsupported");
            },
        };
    };
}
exports.relativize_modules = relativize_modules;
function is_static(node) {
    return node.modifiers != null && node.modifiers.find((modifier) => modifier.kind == ts.SyntaxKind.StaticKeyword) != null;
}
function insert_class_name() {
    function has__name__(node) {
        return node.members.find((member) => ts.isPropertyDeclaration(member) && member.name.getText() == "__name__" && is_static(member)) != null;
    }
    return (context) => (root) => {
        const { factory } = context;
        function visit(node) {
            node = ts.visitEachChild(node, visit, context);
            if (ts.isClassDeclaration(node) && node.name != null && !has__name__(node)) {
                const property = factory.createPropertyDeclaration(undefined, factory.createModifiersFromModifierFlags(ts.ModifierFlags.Static), "__name__", undefined, undefined, factory.createStringLiteral(node.name.text));
                node = factory.updateClassDeclaration(node, node.decorators, node.modifiers, node.name, node.typeParameters, node.heritageClauses, [property, ...node.members]);
            }
            return node;
        }
        return ts.visitNode(root, visit);
    };
}
exports.insert_class_name = insert_class_name;
function remove_use_strict() {
    return (_context) => (root) => {
        const statements = root.statements.filter((node) => {
            if (ts.isExpressionStatement(node)) {
                const expr = node.expression;
                if (ts.isStringLiteral(expr) && expr.text == "use strict")
                    return false;
            }
            return true;
        });
        return ts.updateSourceFileNode(root, statements);
    };
}
exports.remove_use_strict = remove_use_strict;
function collect_exports(exported) {
    return (_context) => (root) => {
        for (const statement of root.statements) {
            if (ts.isExportDeclaration(statement)) {
                if (statement.isTypeOnly)
                    continue;
                const { exportClause, moduleSpecifier } = statement;
                if (moduleSpecifier == null || !ts.isStringLiteral(moduleSpecifier))
                    continue;
                const module = moduleSpecifier.text;
                if (exportClause == null) {
                    // export * from "module"
                    exported.push({ type: "namespace", module });
                }
                else if (ts.isNamespaceExport(exportClause)) {
                    // export * as name from "module"
                    const name = exportClause.name.text;
                    exported.push({ type: "namespace", name, module });
                }
                else if (ts.isNamedExports(exportClause)) {
                    // export {name0, name1 as nameA} from "module"
                    const bindings = [];
                    for (const elem of exportClause.elements) {
                        bindings.push([elem.propertyName?.text, elem.name.text]);
                    }
                    exported.push({ type: "bindings", bindings, module });
                }
            }
            else if (ts.isExportAssignment(statement) && !(statement.isExportEquals ?? false)) {
                // export default name
                exported.push({ type: "named", name: "default" });
            }
            else if (ts.isClassDeclaration(statement) || ts.isFunctionDeclaration(statement)) {
                const flags = ts.getCombinedModifierFlags(statement);
                if (flags & ts.ModifierFlags.Export) {
                    // export class X {}
                    // export function f() {}
                    if (statement.name != null) {
                        const name = statement.name.text;
                        exported.push({ type: "named", name });
                    }
                }
                else if (flags & ts.ModifierFlags.ExportDefault) {
                    // export default class X {}
                    // export function f() {}
                    exported.push({ type: "named", name: "default" });
                }
            }
        }
        return root;
    };
}
exports.collect_exports = collect_exports;
function isImportCall(node) {
    return ts.isCallExpression(node) && node.expression.kind == ts.SyntaxKind.ImportKeyword;
}
function collect_imports(imports) {
    return (context) => (root) => {
        function visit(node) {
            if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
                const name = node.moduleSpecifier;
                if (name != null && ts.isStringLiteral(name) && name.text.length != 0)
                    imports.add(name.text);
            }
            else if (isImportCall(node)) {
                const [name] = node.arguments;
                if (ts.isStringLiteral(name) && name.text.length != 0)
                    imports.add(name.text);
            }
            return ts.visitEachChild(node, visit, context);
        }
        return ts.visitNode(root, visit);
    };
}
exports.collect_imports = collect_imports;
function collect_deps(source) {
    function traverse(node) {
        if (is_require(node)) {
            const [arg] = node.arguments;
            if (ts.isStringLiteral(arg) && arg.text.length > 0)
                deps.add(arg.text);
        }
        ts.forEachChild(node, traverse);
    }
    const deps = new Set();
    traverse(source);
    return [...deps];
}
exports.collect_deps = collect_deps;
function rewrite_deps(resolve) {
    return (context) => (root) => {
        const { factory } = context;
        function visit(node) {
            if (is_require(node)) {
                const [arg] = node.arguments;
                if (ts.isStringLiteral(arg) && arg.text.length > 0) {
                    const dep = arg.text;
                    const val = resolve(dep);
                    if (val != null) {
                        const literal = typeof val == "string" ? factory.createStringLiteral(val) : factory.createNumericLiteral(val);
                        node = factory.updateCallExpression(node, node.expression, node.typeArguments, [literal]);
                        ts.addSyntheticTrailingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, ` ${dep} `, false);
                    }
                    return node;
                }
            }
            return ts.visitEachChild(node, visit, context);
        }
        return ts.visitNode(root, visit);
    };
}
exports.rewrite_deps = rewrite_deps;
// XXX: this is pretty naive, but affects very litte code
function rename_exports() {
    return (context) => (root) => {
        const { factory } = context;
        function is_exports(node) {
            return ts.isIdentifier(node) && node.text == "exports";
        }
        const has_exports = root.statements.some((stmt) => {
            return ts.isVariableStatement(stmt) && stmt.declarationList.declarations.some((decl) => is_exports(decl.name));
        });
        if (has_exports) {
            function visit(node) {
                if (is_exports(node)) {
                    const updated = factory.createIdentifier("exports$1");
                    const original = node;
                    ts.setOriginalNode(updated, original);
                    ts.setTextRange(updated, original);
                    return updated;
                }
                return ts.visitEachChild(node, visit, context);
            }
            return ts.visitNode(root, visit);
        }
        else
            return root;
    };
}
exports.rename_exports = rename_exports;
function fix_esmodule() {
    return (context) => (root) => {
        const { factory } = context;
        let found = false;
        const statements = root.statements.map((node) => {
            if (!found && ts.isExpressionStatement(node)) {
                const expr = node.expression;
                if (ts.isCallExpression(expr) && expr.arguments.length == 3) {
                    const [, arg] = expr.arguments;
                    if (ts.isStringLiteral(arg) && arg.text == "__esModule") {
                        found = true;
                        const es_module = factory.createIdentifier("__esModule");
                        const call = factory.createCallExpression(es_module, [], []);
                        return factory.createExpressionStatement(call);
                    }
                }
            }
            return node;
        });
        return ts.updateSourceFileNode(root, statements);
    };
}
exports.fix_esmodule = fix_esmodule;
function remove_void0() {
    return (_context) => (root) => {
        let found = false;
        const statements = root.statements.filter((node) => {
            if (!found && ts.isExpressionStatement(node)) {
                let { expression } = node;
                while (ts.isBinaryExpression(expression) &&
                    ts.isPropertyAccessExpression(expression.left) &&
                    ts.isIdentifier(expression.left.expression) &&
                    expression.left.expression.text == "exports") {
                    expression = expression.right;
                }
                if (ts.isVoidExpression(expression)) {
                    found = true;
                    return false;
                }
            }
            return true;
        });
        return ts.updateSourceFileNode(root, statements);
    };
}
exports.remove_void0 = remove_void0;
function fix_esexports() {
    return (context) => (root) => {
        const { factory } = context;
        const statements = root.statements.map((node) => {
            if (ts.isExpressionStatement(node)) {
                const expr = node.expression;
                if (ts.isCallExpression(expr) && ts.isPropertyAccessExpression(expr.expression) && expr.arguments.length == 3) {
                    const { expression, name } = expr.expression;
                    if (ts.isIdentifier(expression) && expression.text == "Object" &&
                        ts.isIdentifier(name) && name.text == "defineProperty") {
                        const [exports, name, config] = expr.arguments;
                        if (ts.isIdentifier(exports) && exports.text == "exports" &&
                            ts.isStringLiteral(name) &&
                            ts.isObjectLiteralExpression(config)) {
                            for (const item of config.properties) {
                                if (ts.isPropertyAssignment(item) &&
                                    ts.isIdentifier(item.name) && item.name.text == "get" &&
                                    ts.isFunctionExpression(item.initializer)) {
                                    const { statements } = item.initializer.body;
                                    if (statements.length == 1) {
                                        const [stmt] = statements;
                                        if (ts.isReturnStatement(stmt) && stmt.expression != null) {
                                            const es_export = factory.createIdentifier("__esExport");
                                            const call = factory.createCallExpression(es_export, [], [name, stmt.expression]);
                                            return factory.createExpressionStatement(call);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return node;
        });
        return ts.updateSourceFileNode(root, statements);
    };
}
exports.fix_esexports = fix_esexports;
function wrap_in_function(module_name) {
    return (context) => (root) => {
        const { factory } = context;
        const p = (name) => factory.createParameterDeclaration(undefined, undefined, undefined, name);
        const params = [p("require"), p("module"), p("exports"), p("__esModule"), p("__esExport")];
        const block = factory.createBlock(root.statements, true);
        const func = factory.createFunctionDeclaration(undefined, undefined, undefined, "_", undefined, params, undefined, block);
        ts.addSyntheticLeadingComment(func, ts.SyntaxKind.MultiLineCommentTrivia, ` ${module_name} `, false);
        return ts.updateSourceFileNode(root, [func]);
    };
}
exports.wrap_in_function = wrap_in_function;
function parse_es(file, code, target = ts.ScriptTarget.ES2017) {
    return ts.createSourceFile(file, code != null ? code : ts.sys.readFile(file), target, true, ts.ScriptKind.JS);
}
exports.parse_es = parse_es;
function print_es(source) {
    const printer = ts.createPrinter();
    return printer.printNode(ts.EmitHint.SourceFile, source, source);
}
exports.print_es = print_es;
//# sourceMappingURL=transforms.js.map