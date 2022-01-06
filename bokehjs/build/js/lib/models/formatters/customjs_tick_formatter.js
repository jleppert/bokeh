var _a;
import { TickFormatter } from "./tick_formatter";
import { keys, values } from "../../core/util/object";
import { use_strict } from "../../core/util/string";
export class CustomJSTickFormatter extends TickFormatter {
    constructor(attrs) {
        super(attrs);
    }
    get names() {
        return keys(this.args);
    }
    get values() {
        return values(this.args);
    }
    /*protected*/ _make_func() {
        const code = use_strict(this.code);
        return new Function("tick", "index", "ticks", ...this.names, code);
    }
    doFormat(ticks, _opts) {
        const cache = {};
        const func = this._make_func().bind(cache);
        return ticks.map((tick, index, ticks) => `${func(tick, index, ticks, ...this.values)}`);
    }
}
_a = CustomJSTickFormatter;
CustomJSTickFormatter.__name__ = "CustomJSTickFormatter";
(() => {
    _a.define(({ Unknown, String, Dict }) => ({
        args: [Dict(Unknown), {}],
        code: [String, ""],
    }));
})();
//# sourceMappingURL=customjs_tick_formatter.js.map