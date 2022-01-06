var _a;
import * as numbro from "@bokeh/numbro";
import { InputWidgetView, InputWidget } from "./input_widget";
import { TickFormatter } from "../formatters/tick_formatter";
import { input } from "../../core/dom";
import { isString } from "../../core/util/types";
import { assert } from "../../core/util/assert";
import * as inputs from "../../styles/widgets/inputs.css";
const int_regex = /^[-+]?\d*$/;
const float_regex = /^[-+]?\d*\.?\d*(?:(?:\d|\d.)[eE][-+]?)*\d*$/;
export class NumericInputView extends InputWidgetView {
    connect_signals() {
        super.connect_signals();
        this.connect(this.model.properties.name.change, () => this.input_el.name = this.model.name ?? "");
        this.connect(this.model.properties.value.change, () => {
            this.input_el.value = this.format_value;
            this.old_value = this.input_el.value;
        });
        this.connect(this.model.properties.low.change, () => {
            const { value, low, high } = this.model;
            if (low != null && high != null)
                assert(low <= high, "Invalid bounds, low must be inferior to high");
            if (value != null && low != null && value < low)
                this.model.value = low;
        });
        this.connect(this.model.properties.high.change, () => {
            const { value, low, high } = this.model;
            if (low != null && high != null)
                assert(high >= low, "Invalid bounds, high must be superior to low");
            if (value != null && high != null && value > high)
                this.model.value = high;
        });
        this.connect(this.model.properties.high.change, () => this.input_el.placeholder = this.model.placeholder);
        this.connect(this.model.properties.disabled.change, () => this.input_el.disabled = this.model.disabled);
        this.connect(this.model.properties.placeholder.change, () => this.input_el.placeholder = this.model.placeholder);
    }
    get format_value() {
        return this.model.value != null ? this.model.pretty(this.model.value) : "";
    }
    _set_input_filter(inputFilter) {
        this.input_el.addEventListener("input", () => {
            const { selectionStart, selectionEnd } = this.input_el;
            if (!inputFilter(this.input_el.value)) { // an invalid character is entered
                const difflen = this.old_value.length - this.input_el.value.length;
                this.input_el.value = this.old_value;
                if (selectionStart != null && selectionEnd != null)
                    this.input_el.setSelectionRange(selectionStart - 1, selectionEnd + difflen);
            }
            else
                this.old_value = this.input_el.value;
        });
    }
    render() {
        super.render();
        this.input_el = input({
            type: "text",
            class: inputs.input,
            name: this.model.name,
            value: this.format_value,
            disabled: this.model.disabled,
            placeholder: this.model.placeholder,
        });
        this.old_value = this.format_value;
        this.set_input_filter();
        this.input_el.addEventListener("change", () => this.change_input());
        this.input_el.addEventListener("focusout", () => this.input_el.value = this.format_value);
        this.group_el.appendChild(this.input_el);
    }
    set_input_filter() {
        const regex = this.model.mode == "int" ? int_regex : float_regex;
        this._set_input_filter((value) => regex.test(value));
    }
    bound_value(value) {
        let output = value;
        const { low, high } = this.model;
        output = low != null ? Math.max(low, output) : output;
        output = high != null ? Math.min(high, output) : output;
        return output;
    }
    get value() {
        let value = this.input_el.value != "" ? Number(this.input_el.value) : null;
        if (value != null)
            value = this.bound_value(value);
        return value;
    }
    change_input() {
        if (this.value == null)
            this.model.value = null;
        else if (!Number.isNaN(this.value))
            this.model.value = this.value;
    }
}
NumericInputView.__name__ = "NumericInputView";
export class NumericInput extends InputWidget {
    constructor(attrs) {
        super(attrs);
    }
    _formatter(value, format) {
        if (isString(format)) {
            return numbro.format(value, format);
        }
        else {
            return format.doFormat([value], { loc: 0 })[0];
        }
    }
    pretty(value) {
        if (this.format != null)
            return this._formatter(value, this.format);
        else
            return `${value}`;
    }
}
_a = NumericInput;
NumericInput.__name__ = "NumericInput";
(() => {
    _a.prototype.default_view = NumericInputView;
    _a.define(({ Number, String, Enum, Ref, Or, Nullable }) => ({
        value: [Nullable(Number), null],
        placeholder: [String, ""],
        mode: [Enum("int", "float"), "int"],
        format: [Nullable(Or(String, Ref(TickFormatter))), null],
        low: [Nullable(Number), null],
        high: [Nullable(Number), null],
    }));
})();
//# sourceMappingURL=numeric_input.js.map