/*!
 * Copyright (c) 2012 - 2022, Anaconda, Inc., and Bokeh Contributors
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of Anaconda nor the names of any contributors
 * may be used to endorse or promote products derived from this software
 * without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */
import main from "./bokeh.esm.js";

const plugin = (function(modules, entry, aliases, externals) {
  main.register_plugin(modules, entry, aliases);
})({
458: /* models/widgets/main.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    const Widgets = (0, tslib_1.__importStar)(require(459) /* ./index */);
    exports.Widgets = Widgets;
    const base_1 = require(7) /* ../../base */;
    (0, base_1.register_models)(Widgets);
},
459: /* models/widgets/index.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var abstract_button_1 = require(460) /* ./abstract_button */;
    __esExport("AbstractButton", abstract_button_1.AbstractButton);
    var abstract_icon_1 = require(463) /* ./abstract_icon */;
    __esExport("AbstractIcon", abstract_icon_1.AbstractIcon);
    var autocomplete_input_1 = require(464) /* ./autocomplete_input */;
    __esExport("AutocompleteInput", autocomplete_input_1.AutocompleteInput);
    var button_1 = require(470) /* ./button */;
    __esExport("Button", button_1.Button);
    var checkbox_button_group_1 = require(471) /* ./checkbox_button_group */;
    __esExport("CheckboxButtonGroup", checkbox_button_group_1.CheckboxButtonGroup);
    var checkbox_group_1 = require(474) /* ./checkbox_group */;
    __esExport("CheckboxGroup", checkbox_group_1.CheckboxGroup);
    var color_picker_1 = require(476) /* ./color_picker */;
    __esExport("ColorPicker", color_picker_1.ColorPicker);
    var date_picker_1 = require(477) /* ./date_picker */;
    __esExport("DatePicker", date_picker_1.DatePicker);
    var date_range_slider_1 = require(487) /* ./date_range_slider */;
    __esExport("DateRangeSlider", date_range_slider_1.DateRangeSlider);
    var date_slider_1 = require(492) /* ./date_slider */;
    __esExport("DateSlider", date_slider_1.DateSlider);
    var div_1 = require(493) /* ./div */;
    __esExport("Div", div_1.Div);
    var dropdown_1 = require(496) /* ./dropdown */;
    __esExport("Dropdown", dropdown_1.Dropdown);
    var file_input_1 = require(497) /* ./file_input */;
    __esExport("FileInput", file_input_1.FileInput);
    var input_widget_1 = require(467) /* ./input_widget */;
    __esExport("InputWidget", input_widget_1.InputWidget);
    var markup_1 = require(494) /* ./markup */;
    __esExport("Markup", markup_1.Markup);
    var multiselect_1 = require(498) /* ./multiselect */;
    __esExport("MultiSelect", multiselect_1.MultiSelect);
    var paragraph_1 = require(499) /* ./paragraph */;
    __esExport("Paragraph", paragraph_1.Paragraph);
    var password_input_1 = require(500) /* ./password_input */;
    __esExport("PasswordInput", password_input_1.PasswordInput);
    var multichoice_1 = require(501) /* ./multichoice */;
    __esExport("MultiChoice", multichoice_1.MultiChoice);
    var numeric_input_1 = require(504) /* ./numeric_input */;
    __esExport("NumericInput", numeric_input_1.NumericInput);
    var pretext_1 = require(505) /* ./pretext */;
    __esExport("PreText", pretext_1.PreText);
    var radio_button_group_1 = require(506) /* ./radio_button_group */;
    __esExport("RadioButtonGroup", radio_button_group_1.RadioButtonGroup);
    var radio_group_1 = require(507) /* ./radio_group */;
    __esExport("RadioGroup", radio_group_1.RadioGroup);
    var range_slider_1 = require(508) /* ./range_slider */;
    __esExport("RangeSlider", range_slider_1.RangeSlider);
    var selectbox_1 = require(509) /* ./selectbox */;
    __esExport("Select", selectbox_1.Select);
    var slider_1 = require(510) /* ./slider */;
    __esExport("Slider", slider_1.Slider);
    var spinner_1 = require(511) /* ./spinner */;
    __esExport("Spinner", spinner_1.Spinner);
    var text_input_1 = require(465) /* ./text_input */;
    __esExport("TextInput", text_input_1.TextInput);
    var textarea_input_1 = require(512) /* ./textarea_input */;
    __esExport("TextAreaInput", textarea_input_1.TextAreaInput);
    var toggle_1 = require(513) /* ./toggle */;
    __esExport("Toggle", toggle_1.Toggle);
    var widget_1 = require(538) /* ./widget */;
    __esExport("Widget", widget_1.Widget);
},
460: /* models/widgets/abstract_button.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const enums_1 = require(19) /* ../../core/enums */;
    const dom_1 = require(211) /* ../../core/dom */;
    const build_views_1 = require(112) /* ../../core/build_views */;
    const control_1 = require(461) /* ./control */;
    const abstract_icon_1 = require(463) /* ./abstract_icon */;
    const buttons_css_1 = (0, tslib_1.__importStar)(require(325) /* ../../styles/buttons.css */), buttons = buttons_css_1;
    class AbstractButtonView extends control_1.ControlView {
        *controls() {
            yield this.button_el;
        }
        async lazy_initialize() {
            await super.lazy_initialize();
            const { icon } = this.model;
            if (icon != null) {
                this.icon_view = await (0, build_views_1.build_view)(icon, { parent: this });
            }
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.change, () => this.render());
        }
        remove() {
            if (this.icon_view != null)
                this.icon_view.remove();
            super.remove();
        }
        styles() {
            return [...super.styles(), buttons_css_1.default];
        }
        _render_button(...children) {
            return (0, dom_1.button)({
                type: "button",
                disabled: this.model.disabled,
                class: [buttons.btn, buttons[`btn_${this.model.button_type}`]],
            }, ...children);
        }
        render() {
            super.render();
            this.button_el = this._render_button(this.model.label);
            this.button_el.addEventListener("click", () => this.click());
            if (this.icon_view != null) {
                if (this.model.label != "") {
                    (0, dom_1.prepend)(this.button_el, this.icon_view.el, (0, dom_1.nbsp)());
                }
                else {
                    (0, dom_1.prepend)(this.button_el, this.icon_view.el);
                }
                this.icon_view.render();
            }
            this.group_el = (0, dom_1.div)({ class: buttons.btn_group }, this.button_el);
            this.shadow_el.appendChild(this.group_el);
        }
        click() { }
    }
    exports.AbstractButtonView = AbstractButtonView;
    AbstractButtonView.__name__ = "AbstractButtonView";
    class AbstractButton extends control_1.Control {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.AbstractButton = AbstractButton;
    _a = AbstractButton;
    AbstractButton.__name__ = "AbstractButton";
    (() => {
        _a.define(({ String, Ref, Nullable }) => ({
            label: [String, "Button"],
            icon: [Nullable(Ref(abstract_icon_1.AbstractIcon)), null],
            button_type: [enums_1.ButtonType, "default"],
        }));
    })();
},
461: /* models/widgets/control.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const widget_1 = require(538) /* ./widget */;
    const dom_1 = require(211) /* ../../core/dom */;
    class ControlView extends widget_1.WidgetView {
        connect_signals() {
            super.connect_signals();
            const p = this.model.properties;
            this.on_change(p.disabled, () => {
                for (const el of this.controls()) {
                    (0, dom_1.toggle_attribute)(el, "disabled", this.model.disabled);
                }
            });
        }
    }
    exports.ControlView = ControlView;
    ControlView.__name__ = "ControlView";
    class Control extends widget_1.Widget {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.Control = Control;
    Control.__name__ = "Control";
},
538: /* models/widgets/widget.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var _a;
    const html_box_1 = require(319) /* ../layouts/html_box */;
    const providers_1 = require(129) /* ../text/providers */;
    class WidgetView extends html_box_1.HTMLBoxView {
        get orientation() {
            return "horizontal";
        }
        get default_size() {
            return this.model.default_size;
        }
        _width_policy() {
            return this.orientation == "horizontal" ? super._width_policy() : "fixed";
        }
        _height_policy() {
            return this.orientation == "horizontal" ? "fixed" : super._height_policy();
        }
        box_sizing() {
            const sizing = super.box_sizing();
            if (this.orientation == "horizontal") {
                if (sizing.width == null)
                    sizing.width = this.default_size;
            }
            else {
                if (sizing.height == null)
                    sizing.height = this.default_size;
            }
            return sizing;
        }
        get provider() {
            return providers_1.default_provider;
        }
        async lazy_initialize() {
            await super.lazy_initialize();
            if (this.provider.status == "not_started")
                await this.provider.fetch();
        }
        after_layout() {
            super.after_layout();
            if (this.provider.status == "loading")
                this._has_finished = false;
        }
        process_tex(text) {
            if (!this.provider.MathJax)
                return text;
            const tex_parts = this.provider.MathJax.find_tex(text);
            const processed_text = [];
            let last_index = 0;
            for (const part of tex_parts) {
                processed_text.push(text.slice(last_index, part.start.n));
                processed_text.push(this.provider.MathJax.tex2svg(part.math, { display: part.display }).outerHTML);
                last_index = part.end.n;
            }
            if (last_index < text.length)
                processed_text.push(text.slice(last_index));
            return processed_text.join("");
        }
        contains_tex_string(text) {
            if (!this.provider.MathJax)
                return false;
            return this.provider.MathJax.find_tex(text).length > 0;
        }
        ;
    }
    exports.WidgetView = WidgetView;
    WidgetView.__name__ = "WidgetView";
    class Widget extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.Widget = Widget;
    _a = Widget;
    Widget.__name__ = "Widget";
    (() => {
        _a.define(({ Number }) => ({
            default_size: [Number, 300],
        }));
        _a.override({
            margin: [5, 5, 5, 5],
        });
    })();
},
463: /* models/widgets/abstract_icon.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const model_1 = require(50) /* ../../model */;
    const dom_view_1 = require(227) /* ../../core/dom_view */;
    class AbstractIconView extends dom_view_1.DOMComponentView {
    }
    exports.AbstractIconView = AbstractIconView;
    AbstractIconView.__name__ = "AbstractIconView";
    class AbstractIcon extends model_1.Model {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.AbstractIcon = AbstractIcon;
    AbstractIcon.__name__ = "AbstractIcon";
},
464: /* models/widgets/autocomplete_input.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const text_input_1 = require(465) /* ./text_input */;
    const dom_1 = require(211) /* ../../core/dom */;
    const math_1 = require(11) /* ../../core/util/math */;
    const dropdown_css_1 = (0, tslib_1.__importStar)(require(469) /* ../../styles/dropdown.css */), dropdown = dropdown_css_1;
    class AutocompleteInputView extends text_input_1.TextInputView {
        constructor() {
            super(...arguments);
            this._open = false;
            this._last_value = "";
            this._hover_index = 0;
        }
        styles() {
            return [...super.styles(), dropdown_css_1.default];
        }
        render() {
            super.render();
            this.input_el.addEventListener("keydown", (event) => this._keydown(event));
            this.input_el.addEventListener("keyup", (event) => this._keyup(event));
            this.menu = (0, dom_1.div)({ class: [dropdown.menu, dropdown.below] });
            this.menu.addEventListener("click", (event) => this._menu_click(event));
            this.menu.addEventListener("mouseover", (event) => this._menu_hover(event));
            this.shadow_el.appendChild(this.menu);
            (0, dom_1.undisplay)(this.menu);
        }
        change_input() {
            if (this._open && this.menu.children.length > 0) {
                this.model.value = this.menu.children[this._hover_index].textContent;
                this.input_el.focus();
                this._hide_menu();
            }
            else if (!this.model.restrict) {
                super.change_input();
            }
        }
        _update_completions(completions) {
            (0, dom_1.empty)(this.menu);
            for (const text of completions) {
                const item = (0, dom_1.div)(text);
                this.menu.appendChild(item);
            }
            if (completions.length > 0)
                this.menu.children[0].classList.add(dropdown.active);
        }
        _show_menu() {
            if (!this._open) {
                this._open = true;
                this._hover_index = 0;
                this._last_value = this.model.value;
                (0, dom_1.display)(this.menu);
                const listener = (event) => {
                    if (!event.composedPath().includes(this.el)) {
                        document.removeEventListener("click", listener);
                        this._hide_menu();
                    }
                };
                document.addEventListener("click", listener);
            }
        }
        _hide_menu() {
            if (this._open) {
                this._open = false;
                (0, dom_1.undisplay)(this.menu);
            }
        }
        _menu_click(event) {
            if (event.target != event.currentTarget && event.target instanceof Element) {
                this.model.value = event.target.textContent;
                this.input_el.focus();
                this._hide_menu();
            }
        }
        _menu_hover(event) {
            if (event.target != event.currentTarget && event.target instanceof Element) {
                for (let i = 0; i < this.menu.children.length; i++) {
                    if (this.menu.children[i].textContent == event.target.textContent) {
                        this._bump_hover(i);
                        break;
                    }
                }
            }
        }
        _bump_hover(new_index) {
            const n_children = this.menu.children.length;
            if (this._open && n_children > 0) {
                this.menu.children[this._hover_index].classList.remove(dropdown.active);
                this._hover_index = (0, math_1.clamp)(new_index, 0, n_children - 1);
                this.menu.children[this._hover_index].classList.add(dropdown.active);
            }
        }
        _keydown(_event) { }
        _keyup(event) {
            switch (event.keyCode) {
                case dom_1.Keys.Enter: {
                    this.change_input();
                    break;
                }
                case dom_1.Keys.Esc: {
                    this._hide_menu();
                    break;
                }
                case dom_1.Keys.Up: {
                    this._bump_hover(this._hover_index - 1);
                    break;
                }
                case dom_1.Keys.Down: {
                    this._bump_hover(this._hover_index + 1);
                    break;
                }
                default: {
                    const value = this.input_el.value;
                    if (value.length < this.model.min_characters) {
                        this._hide_menu();
                        return;
                    }
                    const completions = [];
                    const { case_sensitive } = this.model;
                    let acnorm;
                    if (case_sensitive) {
                        acnorm = (t) => t;
                    }
                    else {
                        acnorm = (t) => t.toLowerCase();
                    }
                    for (const text of this.model.completions) {
                        if (acnorm(text).startsWith(acnorm(value))) {
                            completions.push(text);
                        }
                    }
                    this._update_completions(completions);
                    if (completions.length == 0)
                        this._hide_menu();
                    else
                        this._show_menu();
                }
            }
        }
    }
    exports.AutocompleteInputView = AutocompleteInputView;
    AutocompleteInputView.__name__ = "AutocompleteInputView";
    class AutocompleteInput extends text_input_1.TextInput {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.AutocompleteInput = AutocompleteInput;
    _a = AutocompleteInput;
    AutocompleteInput.__name__ = "AutocompleteInput";
    (() => {
        _a.prototype.default_view = AutocompleteInputView;
        _a.define(({ Boolean, Int, String, Array }) => ({
            completions: [Array(String), []],
            min_characters: [Int, 2],
            case_sensitive: [Boolean, true],
            restrict: [Boolean, true],
        }));
    })();
},
465: /* models/widgets/text_input.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const text_like_input_1 = require(466) /* ./text_like_input */;
    const dom_1 = require(211) /* ../../core/dom */;
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    class TextInputView extends text_like_input_1.TextLikeInputView {
        _render_input() {
            this.input_el = (0, dom_1.input)({ type: "text", class: inputs.input });
        }
    }
    exports.TextInputView = TextInputView;
    TextInputView.__name__ = "TextInputView";
    class TextInput extends text_like_input_1.TextLikeInput {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.TextInput = TextInput;
    _a = TextInput;
    TextInput.__name__ = "TextInput";
    (() => {
        _a.prototype.default_view = TextInputView;
    })();
},
466: /* models/widgets/text_like_input.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var _a;
    const input_widget_1 = require(467) /* ./input_widget */;
    class TextLikeInputView extends input_widget_1.InputWidgetView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.name.change, () => { var _b; return this.input_el.name = (_b = this.model.name) !== null && _b !== void 0 ? _b : ""; });
            this.connect(this.model.properties.value.change, () => this.input_el.value = this.model.value);
            this.connect(this.model.properties.value_input.change, () => this.input_el.value = this.model.value_input);
            this.connect(this.model.properties.disabled.change, () => this.input_el.disabled = this.model.disabled);
            this.connect(this.model.properties.placeholder.change, () => this.input_el.placeholder = this.model.placeholder);
            this.connect(this.model.properties.max_length.change, () => {
                const { max_length } = this.model;
                if (max_length != null)
                    this.input_el.maxLength = max_length;
                else
                    this.input_el.removeAttribute("maxLength");
            });
        }
        render() {
            var _b;
            super.render();
            this._render_input();
            const { input_el } = this;
            input_el.name = (_b = this.model.name) !== null && _b !== void 0 ? _b : "";
            input_el.value = this.model.value;
            input_el.disabled = this.model.disabled;
            input_el.placeholder = this.model.placeholder;
            if (this.model.max_length != null)
                input_el.maxLength = this.model.max_length;
            input_el.addEventListener("change", () => this.change_input());
            input_el.addEventListener("input", () => this.change_input_value());
            this.group_el.appendChild(input_el);
        }
        change_input() {
            this.model.value = this.input_el.value;
            super.change_input();
        }
        change_input_value() {
            this.model.value_input = this.input_el.value;
            super.change_input();
        }
    }
    exports.TextLikeInputView = TextLikeInputView;
    TextLikeInputView.__name__ = "TextLikeInputView";
    class TextLikeInput extends input_widget_1.InputWidget {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.TextLikeInput = TextLikeInput;
    _a = TextLikeInput;
    TextLikeInput.__name__ = "TextLikeInput";
    (() => {
        _a.define(({ Int, String, Nullable }) => ({
            value: [String, ""],
            value_input: [String, ""],
            placeholder: [String, ""],
            max_length: [Nullable(Int), null],
        }));
    })();
},
467: /* models/widgets/input_widget.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const control_1 = require(461) /* ./control */;
    const dom_1 = require(211) /* ../../core/dom */;
    const inputs_css_1 = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */), inputs = inputs_css_1;
    class InputWidgetView extends control_1.ControlView {
        *controls() {
            yield this.input_el;
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.title.change, () => {
                this.label_el.textContent = this.model.title;
            });
        }
        styles() {
            return [...super.styles(), inputs_css_1.default];
        }
        render() {
            super.render();
            const { title } = this.model;
            this.label_el = (0, dom_1.label)({ style: { display: title.length == 0 ? "none" : "" } }, title);
            this.group_el = (0, dom_1.div)({ class: inputs.input_group }, this.label_el);
            this.shadow_el.appendChild(this.group_el);
        }
        change_input() { }
    }
    exports.InputWidgetView = InputWidgetView;
    InputWidgetView.__name__ = "InputWidgetView";
    class InputWidget extends control_1.Control {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.InputWidget = InputWidget;
    _a = InputWidget;
    InputWidget.__name__ = "InputWidget";
    (() => {
        _a.define(({ String }) => ({
            title: [String, ""],
        }));
    })();
},
468: /* styles/widgets/inputs.css.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    exports.input = "bk-input";
    exports.input_group = "bk-input-group";
    exports.inline = "bk-inline";
    exports.spin_wrapper = "bk-spin-wrapper";
    exports.spin_btn = "bk-spin-btn";
    exports.spin_btn_up = "bk-spin-btn-up";
    exports.spin_btn_down = "bk-spin-btn-down";
    exports.default = `input[type=file]::file-selector-button{font-family:inherit;}.bk-input{display:inline-block;width:100%;flex-grow:1;min-height:31px;padding:0 12px;background-color:#fff;border:1px solid #ccc;border-radius:4px;}.bk-input:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);}.bk-input::placeholder,.bk-input:-ms-input-placeholder,.bk-input::-moz-placeholder,.bk-input::-webkit-input-placeholder{color:#999;opacity:1;}.bk-input[disabled]{cursor:not-allowed;background-color:#eee;opacity:1;}select:not([multiple]).bk-input,select:not([size]).bk-input{height:auto;appearance:none;-webkit-appearance:none;background-image:url('data:image/svg+xml;utf8,<svg version="1.1" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0,0 25,0 12.5,20 Z" fill="black" /></svg>');background-position:right 0.5em center;background-size:8px 6px;background-repeat:no-repeat;}option{padding:0;}select[multiple].bk-input,select[size].bk-input,textarea.bk-input{height:auto;}.bk-input-group{width:100%;height:100%;display:inline-flex;flex-wrap:nowrap;align-items:start;flex-direction:column;white-space:nowrap;}.bk-input-group.bk-inline{flex-direction:row;}.bk-input-group.bk-inline > *:not(:first-child){margin-left:5px;}.bk-input-group input[type="checkbox"],.bk-input-group input[type="radio"]{margin:0;}.bk-input-group input[type="checkbox"] + span,.bk-input-group input[type="radio"] + span{position:relative;top:-2px;margin-left:3px;}.bk-input-group > .bk-spin-wrapper{display:inherit;width:inherit;height:inherit;position:relative;overflow:hidden;padding:0;vertical-align:middle;}.bk-input-group > .bk-spin-wrapper input{padding-right:20px;}.bk-input-group > .bk-spin-wrapper > .bk-spin-btn{position:absolute;display:block;height:50%;min-height:0;min-width:0;width:30px;padding:0;margin:0;right:0;border:none;background:none;cursor:pointer;}.bk-input-group > .bk-spin-wrapper > .bk-spin-btn:before{content:"";display:inline-block;transform:translateY(-50%);border-left:5px solid transparent;border-right:5px solid transparent;}.bk-input-group > .bk-spin-wrapper > .bk-spin-btn.bk-spin-btn-up{top:0;}.bk-input-group > .bk-spin-wrapper > .bk-spin-btn.bk-spin-btn-up:before{border-bottom:5px solid black;}.bk-input-group > .bk-spin-wrapper > .bk-spin-btn.bk-spin-btn-up:disabled:before{border-bottom-color:grey;}.bk-input-group > .bk-spin-wrapper > .bk-spin-btn.bk-spin-btn-down{bottom:0;}.bk-input-group > .bk-spin-wrapper > .bk-spin-btn.bk-spin-btn-down:before{border-top:5px solid black;}.bk-input-group > .bk-spin-wrapper > .bk-spin-btn.bk-spin-btn-down:disabled:before{border-top-color:grey;}`;
},
469: /* styles/dropdown.css.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    exports.menu = "bk-menu";
    exports.above = "bk-above";
    exports.below = "bk-below";
    exports.divider = "bk-divider";
    exports.active = "bk-active";
    exports.default = `.bk-menu{position:absolute;left:0;width:100%;z-index:100;cursor:pointer;font-size:12px;background-color:#fff;border:1px solid #ccc;border-radius:4px;box-shadow:0 6px 12px rgba(0, 0, 0, 0.175);}.bk-menu.bk-above{bottom:100%;}.bk-menu.bk-below{top:100%;}.bk-menu > .bk-divider{height:1px;margin:7.5px 0;overflow:hidden;background-color:#e5e5e5;}.bk-menu > :not(.bk-divider){padding:6px 12px;}.bk-menu > :not(.bk-divider):hover,.bk-menu > :not(.bk-divider).bk-active{background-color:#e6e6e6;}`;
},
470: /* models/widgets/button.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var _a;
    const abstract_button_1 = require(460) /* ./abstract_button */;
    const bokeh_events_1 = require(258) /* ../../core/bokeh_events */;
    class ButtonView extends abstract_button_1.AbstractButtonView {
        click() {
            this.model.trigger_event(new bokeh_events_1.ButtonClick());
            super.click();
        }
    }
    exports.ButtonView = ButtonView;
    ButtonView.__name__ = "ButtonView";
    class Button extends abstract_button_1.AbstractButton {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.Button = Button;
    _a = Button;
    Button.__name__ = "Button";
    (() => {
        _a.prototype.default_view = ButtonView;
        _a.override({
            label: "Button",
        });
    })();
},
471: /* models/widgets/checkbox_button_group.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const button_group_1 = require(472) /* ./button_group */;
    const dom_1 = require(211) /* ../../core/dom */;
    const buttons = (0, tslib_1.__importStar)(require(325) /* ../../styles/buttons.css */);
    class CheckboxButtonGroupView extends button_group_1.ButtonGroupView {
        get active() {
            return new Set(this.model.active);
        }
        change_active(i) {
            const { active } = this;
            active.has(i) ? active.delete(i) : active.add(i);
            this.model.active = [...active].sort();
        }
        _update_active() {
            const { active } = this;
            this._buttons.forEach((button, i) => {
                (0, dom_1.classes)(button).toggle(buttons.active, active.has(i));
            });
        }
    }
    exports.CheckboxButtonGroupView = CheckboxButtonGroupView;
    CheckboxButtonGroupView.__name__ = "CheckboxButtonGroupView";
    class CheckboxButtonGroup extends button_group_1.ButtonGroup {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.CheckboxButtonGroup = CheckboxButtonGroup;
    _a = CheckboxButtonGroup;
    CheckboxButtonGroup.__name__ = "CheckboxButtonGroup";
    (() => {
        _a.prototype.default_view = CheckboxButtonGroupView;
        _a.define(({ Int, Array }) => ({
            active: [Array(Int), []],
        }));
    })();
},
472: /* models/widgets/button_group.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const oriented_control_1 = require(473) /* ./oriented_control */;
    const enums_1 = require(19) /* ../../core/enums */;
    const dom_1 = require(211) /* ../../core/dom */;
    const buttons_css_1 = (0, tslib_1.__importStar)(require(325) /* ../../styles/buttons.css */), buttons = buttons_css_1;
    class ButtonGroupView extends oriented_control_1.OrientedControlView {
        get default_size() {
            return this.orientation == "horizontal" ? super.default_size : undefined;
        }
        *controls() {
            yield* this._buttons; // TODO: HTMLButtonElement[]
        }
        connect_signals() {
            super.connect_signals();
            const p = this.model.properties;
            this.on_change(p.button_type, () => this.render());
            this.on_change(p.labels, () => this.render());
            this.on_change(p.active, () => this._update_active());
        }
        styles() {
            return [...super.styles(), buttons_css_1.default];
        }
        render() {
            super.render();
            this._buttons = this.model.labels.map((label, i) => {
                const button = (0, dom_1.div)({
                    class: [buttons.btn, buttons[`btn_${this.model.button_type}`]],
                    disabled: this.model.disabled,
                }, label);
                button.addEventListener("click", () => this.change_active(i));
                return button;
            });
            this._update_active();
            const orient = this.model.orientation == "horizontal" ? buttons.horizontal : buttons.vertical;
            const group = (0, dom_1.div)({ class: [buttons.btn_group, orient] }, this._buttons);
            this.shadow_el.appendChild(group);
        }
    }
    exports.ButtonGroupView = ButtonGroupView;
    ButtonGroupView.__name__ = "ButtonGroupView";
    class ButtonGroup extends oriented_control_1.OrientedControl {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.ButtonGroup = ButtonGroup;
    _a = ButtonGroup;
    ButtonGroup.__name__ = "ButtonGroup";
    (() => {
        _a.define(({ String, Array }) => ({
            labels: [Array(String), []],
            button_type: [enums_1.ButtonType, "default"],
        }));
    })();
},
473: /* models/widgets/oriented_control.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var _a;
    const control_1 = require(461) /* ./control */;
    const enums_1 = require(19) /* ../../core/enums */;
    class OrientedControlView extends control_1.ControlView {
        get orientation() {
            return this.model.orientation;
        }
    }
    exports.OrientedControlView = OrientedControlView;
    OrientedControlView.__name__ = "OrientedControlView";
    class OrientedControl extends control_1.Control {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.OrientedControl = OrientedControl;
    _a = OrientedControl;
    OrientedControl.__name__ = "OrientedControl";
    (() => {
        _a.define(() => ({
            orientation: [enums_1.Orientation, "horizontal"],
        }));
    })();
},
474: /* models/widgets/checkbox_group.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const input_group_1 = require(475) /* ./input_group */;
    const dom_1 = require(211) /* ../../core/dom */;
    const array_1 = require(10) /* ../../core/util/array */;
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    class CheckboxGroupView extends input_group_1.InputGroupView {
        render() {
            super.render();
            const group = (0, dom_1.div)({ class: [inputs.input_group, this.model.inline ? inputs.inline : null] });
            this.shadow_el.appendChild(group);
            const { active, labels } = this.model;
            this._inputs = [];
            for (let i = 0; i < labels.length; i++) {
                const checkbox = (0, dom_1.input)({ type: "checkbox", value: `${i}` });
                checkbox.addEventListener("change", () => this.change_active(i));
                this._inputs.push(checkbox);
                if (this.model.disabled)
                    checkbox.disabled = true;
                if ((0, array_1.includes)(active, i))
                    checkbox.checked = true;
                const label_el = (0, dom_1.label)(checkbox, (0, dom_1.span)(labels[i]));
                group.appendChild(label_el);
            }
        }
        change_active(i) {
            const active = new Set(this.model.active);
            active.has(i) ? active.delete(i) : active.add(i);
            this.model.active = [...active].sort();
        }
    }
    exports.CheckboxGroupView = CheckboxGroupView;
    CheckboxGroupView.__name__ = "CheckboxGroupView";
    class CheckboxGroup extends input_group_1.InputGroup {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.CheckboxGroup = CheckboxGroup;
    _a = CheckboxGroup;
    CheckboxGroup.__name__ = "CheckboxGroup";
    (() => {
        _a.prototype.default_view = CheckboxGroupView;
        _a.define(({ Boolean, Int, String, Array }) => ({
            active: [Array(Int), []],
            labels: [Array(String), []],
            inline: [Boolean, false],
        }));
    })();
},
475: /* models/widgets/input_group.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    const control_1 = require(461) /* ./control */;
    const inputs_css_1 = (0, tslib_1.__importDefault)(require(468) /* ../../styles/widgets/inputs.css */);
    class InputGroupView extends control_1.ControlView {
        *controls() {
            yield* this._inputs;
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.change, () => this.render());
        }
        styles() {
            return [...super.styles(), inputs_css_1.default];
        }
    }
    exports.InputGroupView = InputGroupView;
    InputGroupView.__name__ = "InputGroupView";
    class InputGroup extends control_1.Control {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.InputGroup = InputGroup;
    InputGroup.__name__ = "InputGroup";
},
476: /* models/widgets/color_picker.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const input_widget_1 = require(467) /* ./input_widget */;
    const dom_1 = require(211) /* ../../core/dom */;
    const color_1 = require(21) /* ../../core/util/color */;
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    class ColorPickerView extends input_widget_1.InputWidgetView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.name.change, () => { var _b; return this.input_el.name = (_b = this.model.name) !== null && _b !== void 0 ? _b : ""; });
            this.connect(this.model.properties.color.change, () => this.input_el.value = (0, color_1.color2hexrgb)(this.model.color));
            this.connect(this.model.properties.disabled.change, () => this.input_el.disabled = this.model.disabled);
        }
        render() {
            super.render();
            this.input_el = (0, dom_1.input)({
                type: "color",
                class: inputs.input,
                name: this.model.name,
                value: this.model.color,
                disabled: this.model.disabled,
            });
            this.input_el.addEventListener("change", () => this.change_input());
            this.group_el.appendChild(this.input_el);
        }
        change_input() {
            this.model.color = this.input_el.value;
            super.change_input();
        }
    }
    exports.ColorPickerView = ColorPickerView;
    ColorPickerView.__name__ = "ColorPickerView";
    class ColorPicker extends input_widget_1.InputWidget {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.ColorPicker = ColorPicker;
    _a = ColorPicker;
    ColorPicker.__name__ = "ColorPicker";
    (() => {
        _a.prototype.default_view = ColorPickerView;
        _a.define(({ Color }) => ({
            color: [Color, "#000000"],
        }));
    })();
},
477: /* models/widgets/date_picker.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const flatpickr_1 = (0, tslib_1.__importDefault)(require(478) /* flatpickr */);
    const input_widget_1 = require(467) /* ./input_widget */;
    const dom_1 = require(211) /* ../../core/dom */;
    const enums_1 = require(19) /* ../../core/enums */;
    const types_1 = require(8) /* ../../core/util/types */;
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    const flatpickr_css_1 = (0, tslib_1.__importDefault)(require(486) /* ../../styles/widgets/flatpickr.css */);
    function _convert_date_list(value) {
        const result = [];
        for (const item of value) {
            if ((0, types_1.isString)(item))
                result.push(item);
            else {
                const [from, to] = item;
                result.push({ from, to });
            }
        }
        return result;
    }
    class DatePickerView extends input_widget_1.InputWidgetView {
        connect_signals() {
            super.connect_signals();
            const { value, min_date, max_date, disabled_dates, enabled_dates, inline } = this.model.properties;
            this.connect(value.change, () => { var _b; return (_b = this._picker) === null || _b === void 0 ? void 0 : _b.setDate(this.model.value); });
            this.connect(min_date.change, () => { var _b; return (_b = this._picker) === null || _b === void 0 ? void 0 : _b.set("minDate", this.model.min_date); });
            this.connect(max_date.change, () => { var _b; return (_b = this._picker) === null || _b === void 0 ? void 0 : _b.set("maxDate", this.model.max_date); });
            this.connect(disabled_dates.change, () => {
                var _b;
                const { disabled_dates } = this.model;
                (_b = this._picker) === null || _b === void 0 ? void 0 : _b.set("disable", disabled_dates != null ? _convert_date_list(disabled_dates) : undefined);
            });
            this.connect(enabled_dates.change, () => {
                var _b;
                const { enabled_dates } = this.model;
                (_b = this._picker) === null || _b === void 0 ? void 0 : _b.set("enable", enabled_dates != null ? _convert_date_list(enabled_dates) : undefined);
            });
            this.connect(inline.change, () => { var _b; return (_b = this._picker) === null || _b === void 0 ? void 0 : _b.set("inline", this.model.inline); });
        }
        remove() {
            var _b;
            (_b = this._picker) === null || _b === void 0 ? void 0 : _b.destroy();
            super.remove();
        }
        styles() {
            return [...super.styles(), flatpickr_css_1.default];
        }
        render() {
            if (this._picker != null)
                return;
            super.render();
            this.input_el = (0, dom_1.input)({ type: "text", class: inputs.input, disabled: this.model.disabled });
            this.group_el.appendChild(this.input_el);
            const options = {
                appendTo: this.group_el,
                positionElement: this.input_el,
                defaultDate: this.model.value,
                inline: this.model.inline,
                position: this._position.bind(this),
                onChange: (selected_dates, date_string, instance) => this._on_change(selected_dates, date_string, instance),
            };
            const { min_date, max_date, disabled_dates, enabled_dates } = this.model;
            if (min_date != null)
                options.minDate = min_date;
            if (max_date != null)
                options.maxDate = max_date;
            if (disabled_dates != null)
                options.disable = _convert_date_list(disabled_dates);
            if (enabled_dates != null)
                options.enable = _convert_date_list(enabled_dates);
            this._picker = (0, flatpickr_1.default)(this.input_el, options);
        }
        _on_change(_selected_dates, date_string, _instance) {
            this.model.value = date_string;
            this.change_input();
        }
        // https://github.com/flatpickr/flatpickr/pull/2362
        _position(self, custom_el) {
            const positionElement = custom_el !== null && custom_el !== void 0 ? custom_el : self._positionElement;
            const calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, ((acc, child) => acc + child.offsetHeight), 0);
            const calendarWidth = self.calendarContainer.offsetWidth;
            const configPos = this.model.position.split(" ");
            const configPosVertical = configPos[0];
            const configPosHorizontal = configPos.length > 1 ? configPos[1] : null;
            // const inputBounds = positionElement.getBoundingClientRect()
            const inputBounds = {
                top: positionElement.offsetTop,
                bottom: positionElement.offsetTop + positionElement.offsetHeight,
                left: positionElement.offsetLeft,
                right: positionElement.offsetLeft + positionElement.offsetWidth,
                width: positionElement.offsetWidth,
            };
            const distanceFromBottom = window.innerHeight - inputBounds.bottom;
            const showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            // const top =
            //   window.pageYOffset +
            //   inputBounds.top +
            //   (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2)
            const top = self.config.appendTo
                ? inputBounds.top +
                    (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2)
                : window.pageYOffset +
                    inputBounds.top +
                    (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            self.calendarContainer.classList.toggle("arrowTop", !showOnTop);
            self.calendarContainer.classList.toggle("arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            let left = window.pageXOffset + inputBounds.left;
            let isCenter = false;
            let isRight = false;
            if (configPosHorizontal === "center") {
                left -= (calendarWidth - inputBounds.width) / 2;
                isCenter = true;
            }
            else if (configPosHorizontal === "right") {
                left -= calendarWidth - inputBounds.width;
                isRight = true;
            }
            self.calendarContainer.classList.toggle("arrowLeft", !isCenter && !isRight);
            self.calendarContainer.classList.toggle("arrowCenter", isCenter);
            self.calendarContainer.classList.toggle("arrowRight", isRight);
            const right = window.document.body.offsetWidth -
                (window.pageXOffset + inputBounds.right);
            const rightMost = left + calendarWidth > window.document.body.offsetWidth;
            const centerMost = right + calendarWidth > window.document.body.offsetWidth;
            self.calendarContainer.classList.toggle("rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = `${top}px`;
            if (!rightMost) {
                self.calendarContainer.style.left = `${left}px`;
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = `${right}px`;
            }
            else {
                const css = this.shadow_el.styleSheets[0];
                const bodyWidth = window.document.body.offsetWidth;
                const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                const centerBefore = ".flatpickr-calendar.centerMost:before";
                const centerAfter = ".flatpickr-calendar.centerMost:after";
                const centerIndex = css.cssRules.length;
                const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
                self.calendarContainer.classList.toggle("rightMost", false);
                self.calendarContainer.classList.toggle("centerMost", true);
                css.insertRule(`${centerBefore},${centerAfter}${centerStyle}`, centerIndex);
                self.calendarContainer.style.left = `${centerLeft}px`;
                self.calendarContainer.style.right = "auto";
            }
        }
    }
    exports.DatePickerView = DatePickerView;
    DatePickerView.__name__ = "DatePickerView";
    class DatePicker extends input_widget_1.InputWidget {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.DatePicker = DatePicker;
    _a = DatePicker;
    DatePicker.__name__ = "DatePicker";
    (() => {
        _a.prototype.default_view = DatePickerView;
        _a.define(({ Boolean, String, Array, Tuple, Or, Nullable }) => {
            const DateStr = String;
            const DatesList = Array(Or(DateStr, Tuple(DateStr, DateStr)));
            return {
                value: [String],
                min_date: [Nullable(String), null],
                max_date: [Nullable(String), null],
                disabled_dates: [Nullable(DatesList), null],
                enabled_dates: [Nullable(DatesList), null],
                position: [enums_1.CalendarPosition, "auto"],
                inline: [Boolean, false],
            };
        });
    })();
},
478: /* flatpickr/dist/esm/index.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    const options_1 = require(479) /* ./types/options */;
    const default_1 = (0, tslib_1.__importDefault)(require(480) /* ./l10n/default */);
    const utils_1 = require(481) /* ./utils */;
    const dom_1 = require(482) /* ./utils/dom */;
    const dates_1 = require(483) /* ./utils/dates */;
    const formatting_1 = require(484) /* ./utils/formatting */;
    require(485) /* ./utils/polyfills */;
    const DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        const self = {
            config: Object.assign(Object.assign({}, options_1.defaults), flatpickr.defaultConfig),
            l10n: default_1.default,
        };
        self.parseDate = (0, dates_1.createDateParser)({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = dom_1.createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth(month = self.currentMonth, yr = self.currentYear) {
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                },
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            const config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1) {
                return;
            }
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        const daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                const defaultDate = self.config.minDate === undefined ||
                    (0, dates_1.compareDates)(new Date(), self.config.minDate) >= 0
                    ? new Date()
                    : new Date(self.config.minDate.getTime());
                const defaults = (0, dates_1.getDefaultHours)(self.config);
                defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
                self.selectedDates = [defaultDate];
                self.latestSelectedDateObj = defaultDate;
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            const prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * (0, utils_1.int)(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            let hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            const limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    (0, dates_1.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            const limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    (0, dates_1.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                const maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                const minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                    minutes = minTime.getMinutes();
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        function setHoursFromDate(dateObj) {
            const date = dateObj || self.latestSelectedDateObj;
            if (date) {
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
            }
        }
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = (0, utils_1.pad)(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * (0, utils_1.int)(hours % 12 === 0)
                : hours);
            self.minuteElement.value = (0, utils_1.pad)(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[(0, utils_1.int)(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = (0, utils_1.pad)(seconds);
        }
        function onYearInput(event) {
            const eventTarget = (0, dom_1.getEventTarget)(event);
            const year = parseInt(eventTarget.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach((ev) => bind(element, ev, handler, options));
            if (element instanceof Array)
                return element.forEach((el) => bind(el, event, handler, options));
            element.addEventListener(event, handler, options);
            self._handlers.push({
                remove: () => element.removeEventListener(event, handler),
            });
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach((evt) => {
                    Array.prototype.forEach.call(self.element.querySelectorAll(`[data-${evt}]`), (el) => bind(el, "click", self[evt]));
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            const debouncedResize = (0, utils_1.debounce)(onResize, 50);
            self._debouncedChange = (0, utils_1.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", (e) => {
                    if (self.config.mode === "range")
                        onMouseOver((0, dom_1.getEventTarget)(e));
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "mousedown", documentClick);
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "click", self.open);
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "click", onMonthNavClick);
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "click", selectDate);
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                const selText = (e) => (0, dom_1.getEventTarget)(e).select();
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "click", timeIncrement);
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", () => self.secondElement && self.secondElement.select());
                if (self.amPM !== undefined) {
                    bind(self.amPM, "click", (e) => {
                        updateTime(e);
                        triggerChange();
                    });
                }
            }
            if (self.config.allowInput) {
                bind(self._input, "blur", onBlur);
            }
        }
        function jumpToDate(jumpDate, triggerChange) {
            const jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            const oldYear = self.currentYear;
            const oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        function timeIncrement(e) {
            const eventTarget = (0, dom_1.getEventTarget)(e);
            if (~eventTarget.className.indexOf("arrow"))
                incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
        }
        function incrementNumInput(e, delta, inputElem) {
            const target = e && (0, dom_1.getEventTarget)(e);
            const input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            const event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            const fragment = window.document.createDocumentFragment();
            self.calendarContainer = (0, dom_1.createElement)("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = (0, dom_1.createElement)("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    const { weekWrapper, weekNumbers } = buildWeeks();
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = (0, dom_1.createElement)("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = (0, dom_1.createElement)("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            (0, dom_1.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
            (0, dom_1.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
            (0, dom_1.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            const customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    const wrapper = (0, dom_1.createElement)("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            const dateIsEnabled = isEnabled(date, true), dayElement = (0, dom_1.createElement)("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                (0, dates_1.compareDates)(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        (0, dom_1.toggleClass)(dayElement, "startRange", self.selectedDates[0] &&
                            (0, dates_1.compareDates)(date, self.selectedDates[0], true) === 0);
                        (0, dom_1.toggleClass)(dayElement, "endRange", self.selectedDates[1] &&
                            (0, dates_1.compareDates)(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            const startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            const endMonth = delta > 0 ? self.config.showMonths : -1;
            for (let m = startMonth; m != endMonth; m += delta) {
                const month = self.daysContainer.children[m];
                const startIndex = delta > 0 ? 0 : month.children.length - 1;
                const endIndex = delta > 0 ? month.children.length : -1;
                for (let i = startIndex; i != endIndex; i += delta) {
                    const c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            const givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            const endMonth = delta > 0 ? self.config.showMonths : -1;
            const loopDelta = delta > 0 ? 1 : -1;
            for (let m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                const month = self.daysContainer.children[m];
                const startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                const numMonthDays = month.children.length;
                for (let i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    const c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            const dayFocused = isInView(document.activeElement || document.body);
            const startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined) {
                self._input.focus();
            }
            else if (!dayFocused) {
                focusOnDayElem(startElem);
            }
            else {
                getNextAvailableDay(startElem, offset);
            }
        }
        function buildMonthDays(year, month) {
            const firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            const prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
            const daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            let dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            for (let dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            const dayContainer = (0, dom_1.createElement)("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            (0, dom_1.clearNode)(self.daysContainer);
            if (self.weekNumbers)
                (0, dom_1.clearNode)(self.weekNumbers);
            const frag = document.createDocumentFragment();
            for (let i = 0; i < self.config.showMonths; i++) {
                const d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            const shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (let i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                const month = (0, dom_1.createElement)("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = (0, formatting_1.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            const container = (0, dom_1.createElement)("div", "flatpickr-month");
            const monthNavFragment = window.document.createDocumentFragment();
            let monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = (0, dom_1.createElement)("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = (0, dom_1.createElement)("select", "flatpickr-monthDropdown-months");
                self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
                bind(self.monthsDropdownContainer, "change", (e) => {
                    const target = (0, dom_1.getEventTarget)(e);
                    const selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            const yearInput = (0, dom_1.createNumberInput)("cur-year", { tabindex: "-1" });
            const yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            const currentMonth = (0, dom_1.createElement)("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container,
                yearElement,
                monthElement,
            };
        }
        function buildMonths() {
            (0, dom_1.clearNode)(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (let m = self.config.showMonths; m--;) {
                const month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = (0, dom_1.createElement)("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = (0, dom_1.createElement)("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = (0, dom_1.createElement)("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: () => self.__hidePrevMonthArrow,
                set(bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        (0, dom_1.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                },
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: () => self.__hideNextMonthArrow,
                set(bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        (0, dom_1.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                },
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            const defaults = (0, dates_1.getDefaultHours)(self.config);
            self.timeContainer = (0, dom_1.createElement)("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            const separator = (0, dom_1.createElement)("span", "flatpickr-time-separator", ":");
            const hourInput = (0, dom_1.createNumberInput)("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel,
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            const minuteInput = (0, dom_1.createNumberInput)("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel,
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = (0, utils_1.pad)(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? defaults.hours
                    : military2ampm(defaults.hours));
            self.minuteElement.value = (0, utils_1.pad)(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : defaults.minutes);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.hourElement.setAttribute("maxlength", "2");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.minuteElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                const secondInput = (0, dom_1.createNumberInput)("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = (0, utils_1.pad)(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : defaults.seconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.secondElement.setAttribute("maxlength", "2");
                self.timeContainer.appendChild((0, dom_1.createElement)("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                self.amPM = (0, dom_1.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0, utils_1.int)((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = (0, dom_1.createElement)("div", "flatpickr-weekdays");
            else
                (0, dom_1.clearNode)(self.weekdayContainer);
            for (let i = self.config.showMonths; i--;) {
                const container = (0, dom_1.createElement)("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            const firstDayOfWeek = self.l10n.firstDayOfWeek;
            let weekdays = [...self.l10n.weekdays.shorthand];
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = [
                    ...weekdays.splice(firstDayOfWeek, weekdays.length),
                    ...weekdays.splice(0, firstDayOfWeek),
                ];
            }
            for (let i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = `
      <span class='flatpickr-weekday'>
        ${weekdays.join("</span><span class='flatpickr-weekday'>")}
      </span>
      `;
            }
        }
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            const weekWrapper = (0, dom_1.createElement)("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild((0, dom_1.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            const weekNumbers = (0, dom_1.createElement)("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper,
                weekNumbers,
            };
        }
        function changeMonth(value, isOffset = true) {
            const delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent = true, toInitial = true) {
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            if (self.config.enableTime === true) {
                const { hours, minutes, seconds } = (0, dates_1.getDefaultHours)(self.config);
                setHours(hours, minutes, seconds);
            }
            self.redraw();
            if (triggerChangeEvent)
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (let i = self._handlers.length; i--;) {
                self._handlers[i].remove();
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    const wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach((k) => {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                const eventTarget = (0, dom_1.getEventTarget)(e);
                const isCalendarElement = isCalendarElem(eventTarget);
                const isInput = eventTarget === self.input ||
                    eventTarget === self.altInput ||
                    self.element.contains(eventTarget) ||
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                const lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                const isIgnored = !self.config.ignoredFocusElements.some((elem) => elem.contains(eventTarget));
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined &&
                        self.input.value !== "" &&
                        self.input.value !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config &&
                        self.config.mode === "range" &&
                        self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            const newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless = true) {
            var _a;
            const dateToCheck = self.parseDate(date, undefined, timeless);
            if ((self.config.minDate &&
                dateToCheck &&
                (0, dates_1.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    (0, dates_1.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (!self.config.enable && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            const bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
            for (let i = 0, d; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck))
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    return bool;
                else if (typeof d === "string") {
                    const parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    elem.className.indexOf("flatpickr-disabled") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onBlur(e) {
            const isInput = e.target === self._input;
            if (isInput &&
                (self.selectedDates.length > 0 || self._input.value.length > 0) &&
                !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
                self.setDate(self._input.value, true, e.target === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
            }
        }
        function onKeyDown(e) {
            const eventTarget = (0, dom_1.getEventTarget)(e);
            const isInput = self.config.wrap
                ? element.contains(eventTarget)
                : eventTarget === self._input;
            const allowInput = self.config.allowInput;
            const allowKeydown = self.isOpen && (!allowInput || !isInput);
            const allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, eventTarget === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return eventTarget.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(eventTarget) ||
                allowKeydown ||
                allowInlineKeydown) {
                const isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(eventTarget);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27:
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                const delta = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        const delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer &&
                            eventTarget.$i !== undefined) ||
                            eventTarget === self.input ||
                            eventTarget === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (eventTarget === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            const elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter((x) => x);
                            const i = elems.indexOf(eventTarget);
                            if (i !== -1) {
                                const target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(eventTarget) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                    default:
                        break;
                }
            }
            if (self.amPM !== undefined && eventTarget === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(eventTarget)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            const hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            let containsDisabled = false;
            let minRange = 0, maxRange = 0;
            for (let t = rangeStartDate; t < rangeEndDate; t += dates_1.duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (let m = 0; m < self.config.showMonths; m++) {
                const month = self.daysContainer.children[m];
                for (let i = 0, l = month.children.length; i < l; i++) {
                    const dayElem = month.children[i], date = dayElem.dateObj;
                    const timestamp = date.getTime();
                    const outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach((c) => {
                            dayElem.classList.remove(c);
                        });
                        continue;
                    }
                    else if (containsDisabled && !outOfRange)
                        continue;
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach((c) => {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            (0, dates_1.isBetween)(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function open(e, positionElement = self._positionElement) {
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    const eventTarget = (0, dom_1.getEventTarget)(e);
                    if (eventTarget) {
                        eventTarget.blur();
                    }
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            else if (self._input.disabled || self.config.inline) {
                return;
            }
            const wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(() => self.hourElement.select(), 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return (date) => {
                const dateObj = (self.config[`_${type}Date`] = self.parseDate(date, self.config.dateFormat));
                const inverseDateObj = self.config[`_${type === "min" ? "max" : "min"}Date`];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter((d) => isEnabled(d));
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            const boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "allowInvalidPreload",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            const userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
            const formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: () => self.config._enable,
                set: (dates) => {
                    self.config._enable = parseDateRules(dates);
                },
            });
            Object.defineProperty(self.config, "disable", {
                get: () => self.config._disable,
                set: (dates) => {
                    self.config._disable = parseDateRules(dates);
                },
            });
            const timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                const defaultDateFormat = flatpickr.defaultConfig.dateFormat || options_1.defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                const defaultAltFormat = flatpickr.defaultConfig.altFormat || options_1.defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + ` h:i${userConfig.enableSeconds ? ":S" : ""} K`;
            }
            Object.defineProperty(self.config, "minDate", {
                get: () => self.config._minDate,
                set: minMaxDateSetter("min"),
            });
            Object.defineProperty(self.config, "maxDate", {
                get: () => self.config._maxDate,
                set: minMaxDateSetter("max"),
            });
            const minMaxTimeSetter = (type) => (val) => {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            };
            Object.defineProperty(self.config, "minTime", {
                get: () => self.config._minTime,
                set: minMaxTimeSetter("min"),
            });
            Object.defineProperty(self.config, "maxTime", {
                get: () => self.config._maxTime,
                set: minMaxTimeSetter("max"),
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (let i = 0; i < boolOpts.length; i++)
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            options_1.HOOKS.filter((hook) => self.config[hook] !== undefined).forEach((hook) => {
                self.config[hook] = (0, utils_1.arrayify)(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (let i = 0; i < self.config.plugins.length; i++) {
                const pluginConf = self.config.plugins[i](self) || {};
                for (const key in pluginConf) {
                    if (options_1.HOOKS.indexOf(key) > -1) {
                        self.config[key] = (0, utils_1.arrayify)(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    getInputElem().className + " " + self.config.altInputClass;
            }
            triggerEvent("onParseConfig");
        }
        function getInputElem() {
            return self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error(`flatpickr: invalid locale ${self.config.locale}`));
            self.l10n = Object.assign(Object.assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            formatting_1.tokenRegex.K = `(${self.l10n.amPM[0]}|${self.l10n.amPM[1]}|${self.l10n.amPM[0].toLowerCase()}|${self.l10n.amPM[1].toLowerCase()})`;
            const userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = (0, dates_1.createDateFormatter)(self);
            self.parseDate = (0, dates_1.createDateParser)({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (typeof self.config.position === "function") {
                return void self.config.position(self, customPositionElement);
            }
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            const positionElement = customPositionElement || self._positionElement;
            const calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, ((acc, child) => acc + child.offsetHeight), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            const top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            (0, dom_1.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
            (0, dom_1.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            let left = window.pageXOffset + inputBounds.left;
            let isCenter = false;
            let isRight = false;
            if (configPosHorizontal === "center") {
                left -= (calendarWidth - inputBounds.width) / 2;
                isCenter = true;
            }
            else if (configPosHorizontal === "right") {
                left -= calendarWidth - inputBounds.width;
                isRight = true;
            }
            (0, dom_1.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
            (0, dom_1.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
            (0, dom_1.toggleClass)(self.calendarContainer, "arrowRight", isRight);
            const right = window.document.body.offsetWidth -
                (window.pageXOffset + inputBounds.right);
            const rightMost = left + calendarWidth > window.document.body.offsetWidth;
            const centerMost = right + calendarWidth > window.document.body.offsetWidth;
            (0, dom_1.toggleClass)(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = `${top}px`;
            if (!rightMost) {
                self.calendarContainer.style.left = `${left}px`;
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = `${right}px`;
            }
            else {
                const doc = getDocumentStyleSheet();
                if (doc === undefined)
                    return;
                const bodyWidth = window.document.body.offsetWidth;
                const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                const centerBefore = ".flatpickr-calendar.centerMost:before";
                const centerAfter = ".flatpickr-calendar.centerMost:after";
                const centerIndex = doc.cssRules.length;
                const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
                (0, dom_1.toggleClass)(self.calendarContainer, "rightMost", false);
                (0, dom_1.toggleClass)(self.calendarContainer, "centerMost", true);
                doc.insertRule(`${centerBefore},${centerAfter}${centerStyle}`, centerIndex);
                self.calendarContainer.style.left = `${centerLeft}px`;
                self.calendarContainer.style.right = "auto";
            }
        }
        function getDocumentStyleSheet() {
            let editableSheet = null;
            for (let i = 0; i < document.styleSheets.length; i++) {
                const sheet = document.styleSheets[i];
                try {
                    sheet.cssRules;
                }
                catch (err) {
                    continue;
                }
                editableSheet = sheet;
                break;
            }
            return editableSheet != null ? editableSheet : createStyleSheet();
        }
        function createStyleSheet() {
            const style = document.createElement("style");
            document.head.appendChild(style);
            return style.sheet;
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            buildMonthSwitch();
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            const isSelectable = (day) => day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("flatpickr-disabled") &&
                !day.classList.contains("notAllowed");
            const t = (0, dom_1.findParent)((0, dom_1.getEventTarget)(e), isSelectable);
            if (t === undefined)
                return;
            const target = t;
            const selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            const shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                const selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                if ((0, dates_1.compareDates)(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                const isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                const single = self.config.mode === "single" && !self.config.enableTime;
                const range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        const CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate],
            clickOpens: [
                () => {
                    if (self.config.clickOpens === true) {
                        bind(self._input, "focus", self.open);
                        bind(self._input, "click", self.open);
                    }
                    else {
                        self._input.removeEventListener("focus", self.open);
                        self._input.removeEventListener("click", self.open);
                    }
                },
            ],
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (const key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach((x) => x());
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach((x) => x());
                else if (options_1.HOOKS.indexOf(option) > -1)
                    self.config[option] = (0, utils_1.arrayify)(value);
            }
            self.redraw();
            updateValue(true);
        }
        function setSelectedDate(inputDate, format) {
            let dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map((d) => self.parseDate(d, format));
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map((date) => self.parseDate(date, format));
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map((date) => self.parseDate(date, format));
                        break;
                    default:
                        break;
                }
            }
            else
                self.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(inputDate)}`));
            self.selectedDates = (self.config.allowInvalidPreload
                ? dates
                : dates.filter((d) => d instanceof Date && isEnabled(d, false)));
            if (self.config.mode === "range")
                self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
        }
        function setDate(date, triggerChange = false, format = self.config.dateFormat) {
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate(undefined, triggerChange);
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map((rule) => {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined),
                    };
                return rule;
            })
                .filter((x) => x);
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            const preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
        }
        function setupInputs() {
            self.input = getInputElem();
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                self.altInput = (0, dom_1.createElement)(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            const inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = (0, dom_1.createElement)("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            if (self.input.getAttribute("step"))
                self.mobileInput.step = String(self.input.getAttribute("step"));
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", (e) => {
                self.setDate((0, dom_1.getEventTarget)(e).value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            if (self.config === undefined)
                return;
            const hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (let i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            const e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (let i = 0; i < self.selectedDates.length; i++) {
                if ((0, dates_1.compareDates)(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return ((0, dates_1.compareDates)(date, self.selectedDates[0]) >= 0 &&
                (0, dates_1.compareDates)(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach((yearElement, i) => {
                const d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        (0, formatting_1.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map((dObj) => self.formatDate(dObj, format))
                .filter((d, i, arr) => self.config.mode !== "range" ||
                self.config.enableTime ||
                arr.indexOf(d) === i)
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        function updateValue(triggerChange = true) {
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            const eventTarget = (0, dom_1.getEventTarget)(e);
            const isPrevMonth = self.prevMonthNav.contains(eventTarget);
            const isNextMonth = self.nextMonthNav.contains(eventTarget);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(eventTarget) >= 0) {
                eventTarget.select();
            }
            else if (eventTarget.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (eventTarget.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            const isKeyDown = e.type === "keydown", eventTarget = (0, dom_1.getEventTarget)(e), input = eventTarget;
            if (self.amPM !== undefined && eventTarget === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[(0, utils_1.int)(self.amPM.textContent === self.l10n.amPM[0])];
            }
            const min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            let newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                const isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            (0, utils_1.int)(!isHourElem) +
                            ((0, utils_1.int)(isHourElem) && (0, utils_1.int)(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - (0, utils_1.int)(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[(0, utils_1.int)(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = (0, utils_1.pad)(newValue);
            }
        }
        init();
        return self;
    }
    function _flatpickr(nodeList, config) {
        const nodes = Array.prototype.slice
            .call(nodeList)
            .filter((x) => x instanceof HTMLElement);
        const instances = [];
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: Object.assign({}, default_1.default),
        default: Object.assign({}, default_1.default),
    };
    flatpickr.localize = (l10n) => {
        flatpickr.l10ns.default = Object.assign(Object.assign({}, flatpickr.l10ns.default), l10n);
    };
    flatpickr.setDefaults = (config) => {
        flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config);
    };
    flatpickr.parseDate = (0, dates_1.createDateParser)({});
    flatpickr.formatDate = (0, dates_1.createDateFormatter)({});
    flatpickr.compareDates = dates_1.compareDates;
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }
    exports.default = flatpickr;
},
479: /* flatpickr/dist/esm/types/options.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    exports.HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    exports.defaults = {
        _disable: [],
        allowInput: false,
        allowInvalidPreload: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: true,
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enableSeconds: false,
        enableTime: false,
        errorHandler: (err) => typeof console !== "undefined" && console.warn(err),
        getWeek: (givenDate) => {
            const date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            var week1 = new Date(date.getFullYear(), 0, 4);
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false,
    };
},
480: /* flatpickr/dist/esm/l10n/default.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    exports.english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: (nth) => {
            const s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        monthAriaLabel: "Month",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false,
    };
    exports.default = exports.english;
},
481: /* flatpickr/dist/esm/utils/index.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const pad = (number, length = 2) => `000${number}`.slice(length * -1);
    exports.pad = pad;
    const int = (bool) => (bool === true ? 1 : 0);
    exports.int = int;
    function debounce(fn, wait) {
        let t;
        return function () {
            clearTimeout(t);
            t = setTimeout(() => fn.apply(this, arguments), wait);
        };
    }
    exports.debounce = debounce;
    const arrayify = (obj) => obj instanceof Array ? obj : [obj];
    exports.arrayify = arrayify;
},
482: /* flatpickr/dist/esm/utils/dom.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    exports.toggleClass = toggleClass;
    function createElement(tag, className, content) {
        const e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    exports.createElement = createElement;
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    exports.clearNode = clearNode;
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined;
    }
    exports.findParent = findParent;
    function createNumberInput(inputClassName, opts) {
        const wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (const key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    exports.createNumberInput = createNumberInput;
    function getEventTarget(event) {
        try {
            if (typeof event.composedPath === "function") {
                const path = event.composedPath();
                return path[0];
            }
            return event.target;
        }
        catch (error) {
            return event.target;
        }
    }
    exports.getEventTarget = getEventTarget;
},
483: /* flatpickr/dist/esm/utils/dates.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const formatting_1 = require(484) /* ./formatting */;
    const options_1 = require(479) /* ../types/options */;
    const default_1 = require(480) /* ../l10n/default */;
    const createDateFormatter = ({ config = options_1.defaults, l10n = default_1.english, isMobile = false, }) => (dateObj, frmt, overrideLocale) => {
        const locale = overrideLocale || l10n;
        if (config.formatDate !== undefined && !isMobile) {
            return config.formatDate(dateObj, frmt, locale);
        }
        return frmt
            .split("")
            .map((c, i, arr) => formatting_1.formats[c] && arr[i - 1] !== "\\"
            ? formatting_1.formats[c](dateObj, locale, config)
            : c !== "\\"
                ? c
                : "")
            .join("");
    };
    exports.createDateFormatter = createDateFormatter;
    const createDateParser = ({ config = options_1.defaults, l10n = default_1.english }) => (date, givenFormat, timeless, customLocale) => {
        if (date !== 0 && !date)
            return undefined;
        const locale = customLocale || l10n;
        let parsedDate;
        const dateOrig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            const format = givenFormat || (config || options_1.defaults).dateFormat;
            const datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr))
                parsedDate = new Date(date);
            else if (config && config.parseDate)
                parsedDate = config.parseDate(date, format);
            else {
                parsedDate =
                    !config || !config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                let matched, ops = [];
                for (let i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    const token = format[i];
                    const isBackSlash = token === "\\";
                    const escaped = format[i - 1] === "\\" || isBackSlash;
                    if (formatting_1.tokenRegex[token] && !escaped) {
                        regexStr += formatting_1.tokenRegex[token];
                        const match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: formatting_1.revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                    ops.forEach(({ fn, val }) => (parsedDate = fn(parsedDate, val, locale) || parsedDate));
                }
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error(`Invalid date provided: ${dateOrig}`));
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    };
    exports.createDateParser = createDateParser;
    function compareDates(date1, date2, timeless = true) {
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    exports.compareDates = compareDates;
    function compareTimes(date1, date2) {
        return (3600 * (date1.getHours() - date2.getHours()) +
            60 * (date1.getMinutes() - date2.getMinutes()) +
            date1.getSeconds() -
            date2.getSeconds());
    }
    exports.compareTimes = compareTimes;
    const isBetween = (ts, ts1, ts2) => {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    exports.isBetween = isBetween;
    exports.duration = {
        DAY: 86400000,
    };
    function getDefaultHours(config) {
        let hours = config.defaultHour;
        let minutes = config.defaultMinute;
        let seconds = config.defaultSeconds;
        if (config.minDate !== undefined) {
            const minHour = config.minDate.getHours();
            const minMinutes = config.minDate.getMinutes();
            const minSeconds = config.minDate.getSeconds();
            if (hours < minHour) {
                hours = minHour;
            }
            if (hours === minHour && minutes < minMinutes) {
                minutes = minMinutes;
            }
            if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
                seconds = config.minDate.getSeconds();
        }
        if (config.maxDate !== undefined) {
            const maxHr = config.maxDate.getHours();
            const maxMinutes = config.maxDate.getMinutes();
            hours = Math.min(hours, maxHr);
            if (hours === maxHr)
                minutes = Math.min(maxMinutes, minutes);
            if (hours === maxHr && minutes === maxMinutes)
                seconds = config.maxDate.getSeconds();
        }
        return { hours, minutes, seconds };
    }
    exports.getDefaultHours = getDefaultHours;
},
484: /* flatpickr/dist/esm/utils/formatting.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const utils_1 = require(481) /* ../utils */;
    const doNothing = () => undefined;
    const monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
    exports.monthToStr = monthToStr;
    exports.revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: (dateObj, hour) => {
            dateObj.setHours(parseFloat(hour));
        },
        H: (dateObj, hour) => {
            dateObj.setHours(parseFloat(hour));
        },
        J: (dateObj, day) => {
            dateObj.setDate(parseFloat(day));
        },
        K: (dateObj, amPM, locale) => {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * (0, utils_1.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: (dateObj, seconds) => {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: (_, unixSeconds) => new Date(parseFloat(unixSeconds) * 1000),
        W: function (dateObj, weekNum, locale) {
            const weekNumber = parseInt(weekNum);
            const date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: (dateObj, year) => {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: (_, ISODate) => new Date(ISODate),
        d: (dateObj, day) => {
            dateObj.setDate(parseFloat(day));
        },
        h: (dateObj, hour) => {
            dateObj.setHours(parseFloat(hour));
        },
        i: (dateObj, minutes) => {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: (dateObj, day) => {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: (dateObj, month) => {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: (dateObj, month) => {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: (dateObj, seconds) => {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: (_, unixMillSeconds) => new Date(parseFloat(unixMillSeconds)),
        w: doNothing,
        y: (dateObj, year) => {
            dateObj.setFullYear(2000 + parseFloat(year));
        },
    };
    exports.tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})",
    };
    exports.formats = {
        Z: (date) => date.toISOString(),
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[exports.formats.w(date, locale, options)];
        },
        F: function (date, locale, options) {
            return (0, exports.monthToStr)(exports.formats.n(date, locale, options) - 1, false, locale);
        },
        G: function (date, locale, options) {
            return (0, utils_1.pad)(exports.formats.h(date, locale, options));
        },
        H: (date) => (0, utils_1.pad)(date.getHours()),
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        K: (date, locale) => locale.amPM[(0, utils_1.int)(date.getHours() > 11)],
        M: function (date, locale) {
            return (0, exports.monthToStr)(date.getMonth(), true, locale);
        },
        S: (date) => (0, utils_1.pad)(date.getSeconds()),
        U: (date) => date.getTime() / 1000,
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        Y: (date) => (0, utils_1.pad)(date.getFullYear(), 4),
        d: (date) => (0, utils_1.pad)(date.getDate()),
        h: (date) => (date.getHours() % 12 ? date.getHours() % 12 : 12),
        i: (date) => (0, utils_1.pad)(date.getMinutes()),
        j: (date) => date.getDate(),
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        m: (date) => (0, utils_1.pad)(date.getMonth() + 1),
        n: (date) => date.getMonth() + 1,
        s: (date) => date.getSeconds(),
        u: (date) => date.getTime(),
        w: (date) => date.getDay(),
        y: (date) => String(date.getFullYear()).substring(2),
    };
},
485: /* flatpickr/dist/esm/utils/polyfills.js */ function _(require, module, exports, __esModule, __esExport) {
    if (typeof Object.assign !== "function") {
        Object.assign = function (target, ...args) {
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            for (const source of args) {
                if (source) {
                    Object.keys(source).forEach((key) => (target[key] = source[key]));
                }
            }
            return target;
        };
    }
},
486: /* styles/widgets/flatpickr.css.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    exports.default = `.flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0, 0, 0, 0.08);box-shadow:1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0, 0, 0, 0.08);}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible;}.flatpickr-calendar.open{display:inline-block;z-index:99999;}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);}.flatpickr-calendar.inline{display:block;position:relative;top:2px;}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px);}.flatpickr-calendar.static.open{z-index:999;display:block;}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important;}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0;}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0;}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6;}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto;}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px;}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px;}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%;}.flatpickr-calendar:before{border-width:5px;margin:0 -5px;}.flatpickr-calendar:after{border-width:4px;margin:0 -4px;}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%;}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6;}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff;}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%;}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6;}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff;}.flatpickr-calendar:focus{outline:0;}.flatpickr-wrapper{position:relative;display:inline-block;}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0, 0, 0, 0.9);fill:rgba(0, 0, 0, 0.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0, 0, 0, 0.9);fill:rgba(0, 0, 0, 0.9);}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none;}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative;}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0;}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0;}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9;}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747;}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px;}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill 0.1s;transition:fill 0.1s;fill:inherit;}.numInputWrapper{position:relative;height:auto;}.numInputWrapper input,.numInputWrapper span{display:inline-block;}.numInputWrapper input{width:100%;}.numInputWrapper input::-ms-clear{display:none;}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none;}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57, 57, 57, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;}.numInputWrapper span:hover{background:rgba(0, 0, 0, 0.1);}.numInputWrapper span:active{background:rgba(0, 0, 0, 0.2);}.numInputWrapper span:after{display:block;content:"";position:absolute;}.numInputWrapper span.arrowUp{top:0;border-bottom:0;}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57, 57, 57, 0.6);top:26%;}.numInputWrapper span.arrowDown{top:50%;}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57, 57, 57, 0.6);top:40%;}.numInputWrapper span svg{width:inherit;height:auto;}.numInputWrapper span svg path{fill:rgba(0, 0, 0, 0.5);}.numInputWrapper:hover{background:rgba(0, 0, 0, 0.05);}.numInputWrapper:hover span{opacity:1;}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0px, 0px, 0px);transform:translate3d(0px, 0px, 0px);}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:0.5ch;padding:0;}.flatpickr-current-month span.cur-month:hover{background:rgba(0, 0, 0, 0.05);}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\0;display:inline-block;}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0, 0, 0, 0.9);}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0, 0, 0, 0.9);}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 0.5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-current-month input.cur-year:focus{outline:0;}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0, 0, 0, 0.5);background:transparent;pointer-events:none;}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 0.5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto;}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none;}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0, 0, 0, 0.05);}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0;}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px;}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0, 0, 0, 0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder;}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0;}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px;}.flatpickr-days:focus{outline:0;}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0px, 0px, 0px);transform:translate3d(0px, 0px, 0px);opacity:1;}.dayContainer + .dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6;}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6;}.flatpickr-day.today{border-color:#959ea9;}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff;}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7;}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px;}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0;}.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7;}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px;}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57, 57, 57, 0.3);background:transparent;border-color:transparent;cursor:default;}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57, 57, 57, 0.1);}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7, 5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7, 5px 0 0 #569ff7;}.flatpickr-day.hidden{visibility:hidden;}.rangeMode .flatpickr-day{margin-top:1px;}.flatpickr-weekwrapper{float:left;}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6;}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px;}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57, 57, 57, 0.3);background:transparent;cursor:default;border:none;}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-time:after{content:"";display:table;clear:both;}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left;}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939;}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939;}.flatpickr-time.hasSeconds .numInputWrapper{width:26%;}.flatpickr-time.time24hr .numInputWrapper{width:49%;}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-time input.flatpickr-hour{font-weight:bold;}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400;}.flatpickr-time input:focus{outline:0;border:0;}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400;}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee;}.flatpickr-input[readonly]{cursor:pointer;}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0);}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0);}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);}}.flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-box-shadow:0 3px 13px rgba(0, 0, 0, 0.08);box-shadow:0 3px 13px rgba(0, 0, 0, 0.08);}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible;}.flatpickr-calendar.open{display:inline-block;z-index:99999;}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);}.flatpickr-calendar.inline{display:block;position:relative;top:2px;}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px);}.flatpickr-calendar.static.open{z-index:999;display:block;}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important;}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0;}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0;}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #eceef1;}.flatpickr-calendar.hasTime .flatpickr-innerContainer{border-bottom:0;}.flatpickr-calendar.hasTime .flatpickr-time{border:1px solid #eceef1;}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto;}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px;}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px;}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%;}.flatpickr-calendar:before{border-width:5px;margin:0 -5px;}.flatpickr-calendar:after{border-width:4px;margin:0 -4px;}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%;}.flatpickr-calendar.arrowTop:before{border-bottom-color:#eceef1;}.flatpickr-calendar.arrowTop:after{border-bottom-color:#eceef1;}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%;}.flatpickr-calendar.arrowBottom:before{border-top-color:#eceef1;}.flatpickr-calendar.arrowBottom:after{border-top-color:#eceef1;}.flatpickr-calendar:focus{outline:0;}.flatpickr-wrapper{position:relative;display:inline-block;}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-months .flatpickr-month{border-radius:5px 5px 0 0;background:#eceef1;color:#5a6171;fill:#5a6171;height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:#5a6171;fill:#5a6171;}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none;}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative;}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0;}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0;}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#bbb;}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747;}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px;}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill 0.1s;transition:fill 0.1s;fill:inherit;}.numInputWrapper{position:relative;height:auto;}.numInputWrapper input,.numInputWrapper span{display:inline-block;}.numInputWrapper input{width:100%;}.numInputWrapper input::-ms-clear{display:none;}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none;}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(72, 72, 72, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;}.numInputWrapper span:hover{background:rgba(0, 0, 0, 0.1);}.numInputWrapper span:active{background:rgba(0, 0, 0, 0.2);}.numInputWrapper span:after{display:block;content:"";position:absolute;}.numInputWrapper span.arrowUp{top:0;border-bottom:0;}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(72, 72, 72, 0.6);top:26%;}.numInputWrapper span.arrowDown{top:50%;}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(72, 72, 72, 0.6);top:40%;}.numInputWrapper span svg{width:inherit;height:auto;}.numInputWrapper span svg path{fill:rgba(90, 97, 113, 0.5);}.numInputWrapper:hover{background:rgba(0, 0, 0, 0.05);}.numInputWrapper:hover span{opacity:1;}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0px, 0px, 0px);transform:translate3d(0px, 0px, 0px);}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:0.5ch;padding:0;}.flatpickr-current-month span.cur-month:hover{background:rgba(0, 0, 0, 0.05);}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\0;display:inline-block;}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:#5a6171;}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:#5a6171;}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 0.5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-current-month input.cur-year:focus{outline:0;}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(90, 97, 113, 0.5);background:transparent;pointer-events:none;}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:#eceef1;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 0.5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto;}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none;}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0, 0, 0, 0.05);}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:#eceef1;outline:none;padding:0;}.flatpickr-weekdays{background:#eceef1;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px;}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;}span.flatpickr-weekday{cursor:default;font-size:90%;background:#eceef1;color:#5a6171;line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder;}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0;}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px;border-left:1px solid #eceef1;border-right:1px solid #eceef1;}.flatpickr-days:focus{outline:0;}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0px, 0px, 0px);transform:translate3d(0px, 0px, 0px);opacity:1;}.dayContainer + .dayContainer{-webkit-box-shadow:-1px 0 0 #eceef1;box-shadow:-1px 0 0 #eceef1;}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#484848;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e2e2e2;border-color:#e2e2e2;}.flatpickr-day.today{border-color:#bbb;}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#bbb;background:#bbb;color:#fff;}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#ff5a5f;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#ff5a5f;}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px;}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0;}.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #ff5a5f;box-shadow:-10px 0 0 #ff5a5f;}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px;}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;box-shadow:-5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(72, 72, 72, 0.3);background:transparent;border-color:transparent;cursor:default;}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(72, 72, 72, 0.1);}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #ff5a5f, 5px 0 0 #ff5a5f;box-shadow:-5px 0 0 #ff5a5f, 5px 0 0 #ff5a5f;}.flatpickr-day.hidden{visibility:hidden;}.rangeMode .flatpickr-day{margin-top:1px;}.flatpickr-weekwrapper{float:left;}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;border-left:1px solid #eceef1;}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px;}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(72, 72, 72, 0.3);background:transparent;cursor:default;border:none;}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;background:#fff;border-bottom:1px solid #eceef1;}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fff;border-radius:0 0 5px 5px;}.flatpickr-time:after{content:"";display:table;clear:both;}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left;}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#484848;}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#484848;}.flatpickr-time.hasSeconds .numInputWrapper{width:26%;}.flatpickr-time.time24hr .numInputWrapper{width:49%;}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#484848;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-time input.flatpickr-hour{font-weight:bold;}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400;}.flatpickr-time input:focus{outline:0;border:0;}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#484848;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400;}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eaeaea;}.flatpickr-input[readonly]{cursor:pointer;}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0);}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0);}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);}}span.flatpickr-day.selected{font-weight:bold;}`;
},
487: /* models/widgets/date_range_slider.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const timezone_1 = (0, tslib_1.__importDefault)(require(150) /* timezone */);
    const abstract_slider_1 = require(488) /* ./abstract_slider */;
    const types_1 = require(8) /* ../../core/util/types */;
    class DateRangeSliderView extends abstract_slider_1.AbstractRangeSliderView {
    }
    exports.DateRangeSliderView = DateRangeSliderView;
    DateRangeSliderView.__name__ = "DateRangeSliderView";
    class DateRangeSlider extends abstract_slider_1.AbstractSlider {
        constructor(attrs) {
            super(attrs);
            this.behaviour = "drag";
            this.connected = [false, true, false];
        }
        _formatter(value, format) {
            if ((0, types_1.isString)(format))
                return (0, timezone_1.default)(value, format);
            else
                return format.compute(value);
        }
    }
    exports.DateRangeSlider = DateRangeSlider;
    _a = DateRangeSlider;
    DateRangeSlider.__name__ = "DateRangeSlider";
    (() => {
        _a.prototype.default_view = DateRangeSliderView;
        _a.override({
            format: "%d %b %Y",
        });
    })();
},
488: /* models/widgets/abstract_slider.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const nouislider_1 = (0, tslib_1.__importDefault)(require(489) /* nouislider */);
    const dom_1 = require(211) /* ../../core/dom */;
    const array_1 = require(10) /* ../../core/util/array */;
    const color_1 = require(21) /* ../../core/util/color */;
    const oriented_control_1 = require(473) /* ./oriented_control */;
    const tick_formatter_1 = require(137) /* ../formatters/tick_formatter */;
    const sliders_css_1 = (0, tslib_1.__importStar)(require(490) /* ../../styles/widgets/sliders.css */), sliders = sliders_css_1;
    const nouislider_css_1 = (0, tslib_1.__importDefault)(require(491) /* ../../styles/widgets/nouislider.css */);
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    class AbstractBaseSliderView extends oriented_control_1.OrientedControlView {
        *controls() {
            yield this.slider_el;
        }
        connect_signals() {
            super.connect_signals();
            const { direction, orientation, tooltips } = this.model.properties;
            this.on_change([direction, orientation, tooltips], () => this.render());
            const { start, end, value, step, title } = this.model.properties;
            this.on_change([start, end, value, step], () => {
                const { start, end, value, step } = this._calc_to();
                this._noUiSlider.updateOptions({
                    range: { min: start, max: end },
                    start: value,
                    step,
                }, true);
            });
            const { bar_color } = this.model.properties;
            this.on_change(bar_color, () => {
                this._set_bar_color();
            });
            const { show_value } = this.model.properties;
            this.on_change([value, title, show_value], () => this._update_title());
        }
        styles() {
            return [...super.styles(), nouislider_css_1.default, sliders_css_1.default];
        }
        _update_title() {
            (0, dom_1.empty)(this.title_el);
            const hide_header = this.model.title == null || (this.model.title.length == 0 && !this.model.show_value);
            this.title_el.style.display = hide_header ? "none" : "";
            if (!hide_header) {
                const { title } = this.model;
                if (title != null && title.length > 0) {
                    if (this.contains_tex_string(title)) {
                        this.title_el.innerHTML = `${this.process_tex(title)}: `;
                    }
                    else {
                        this.title_el.textContent = `${title}: `;
                    }
                }
                if (this.model.show_value) {
                    const { value } = this._calc_to();
                    const pretty = value.map((v) => this.model.pretty(v)).join(" .. ");
                    this.title_el.appendChild((0, dom_1.span)({ class: sliders.slider_value }, pretty));
                }
            }
        }
        _set_bar_color() {
            if (!this.model.disabled && this.slider_el != null) {
                const connect_el = this.slider_el.querySelector(".noUi-connect");
                connect_el.style.backgroundColor = (0, color_1.color2css)(this.model.bar_color);
            }
        }
        render() {
            super.render();
            const { start, end, value, step } = this._calc_to();
            let tooltips; // XXX
            if (this.model.tooltips) {
                const formatter = {
                    to: (value) => this.model.pretty(value),
                };
                tooltips = (0, array_1.repeat)(formatter, value.length);
            }
            else
                tooltips = null;
            if (this.slider_el == null) {
                this.slider_el = (0, dom_1.div)();
                this._noUiSlider = nouislider_1.default.create(this.slider_el, {
                    range: { min: start, max: end },
                    start: value,
                    step,
                    behaviour: this.model.behaviour,
                    connect: this.model.connected,
                    tooltips: tooltips !== null && tooltips !== void 0 ? tooltips : false,
                    orientation: this.model.orientation,
                    direction: this.model.direction,
                });
                this._noUiSlider.on("slide", (_, __, values) => this._slide(values));
                this._noUiSlider.on("change", (_, __, values) => this._change(values));
                const toggle_tooltip = (i, show) => {
                    if (tooltips == null || this.slider_el == null)
                        return;
                    const handle = this.slider_el.querySelectorAll(".noUi-handle")[i];
                    const tooltip = handle.querySelector(".noUi-tooltip");
                    tooltip.style.display = show ? "block" : "";
                };
                this._noUiSlider.on("start", (_, i) => toggle_tooltip(i, true));
                this._noUiSlider.on("end", (_, i) => toggle_tooltip(i, false));
            }
            else {
                this._noUiSlider.updateOptions({
                    range: { min: start, max: end },
                    start: value,
                    step,
                }, true);
            }
            this._set_bar_color();
            if (this.model.disabled)
                this.slider_el.setAttribute("disabled", "true");
            else
                this.slider_el.removeAttribute("disabled");
            this.title_el = (0, dom_1.div)({ class: sliders.slider_title });
            this._update_title();
            this.group_el = (0, dom_1.div)({ class: inputs.input_group }, this.title_el, this.slider_el);
            this.shadow_el.appendChild(this.group_el);
            this._has_finished = true;
        }
        _slide(values) {
            this.model.value = this._calc_from(values);
        }
        _change(values) {
            const value = this._calc_from(values);
            this.model.setv({ value, value_throttled: value });
        }
    }
    AbstractBaseSliderView.__name__ = "AbstractBaseSliderView";
    class AbstractSliderView extends AbstractBaseSliderView {
        _calc_to() {
            return {
                start: this.model.start,
                end: this.model.end,
                value: [this.model.value],
                step: this.model.step,
            };
        }
        _calc_from([value]) {
            if (Number.isInteger(this.model.start) && Number.isInteger(this.model.end) && Number.isInteger(this.model.step))
                return Math.round(value);
            else
                return value;
        }
    }
    exports.AbstractSliderView = AbstractSliderView;
    AbstractSliderView.__name__ = "AbstractSliderView";
    class AbstractRangeSliderView extends AbstractBaseSliderView {
        _calc_to() {
            return {
                start: this.model.start,
                end: this.model.end,
                value: this.model.value,
                step: this.model.step,
            };
        }
        _calc_from(values) {
            return values;
        }
    }
    exports.AbstractRangeSliderView = AbstractRangeSliderView;
    AbstractRangeSliderView.__name__ = "AbstractRangeSliderView";
    class AbstractSlider extends oriented_control_1.OrientedControl {
        // TODO: __view_type__: AbstractSliderView
        constructor(attrs) {
            super(attrs);
            this.connected = false;
        }
        pretty(value) {
            return this._formatter(value, this.format);
        }
    }
    exports.AbstractSlider = AbstractSlider;
    _a = AbstractSlider;
    AbstractSlider.__name__ = "AbstractSlider";
    (() => {
        _a.define(({ Any, Boolean, Number, String, Color, Or, Enum, Ref, Nullable }) => {
            return {
                title: [Nullable(String), ""],
                show_value: [Boolean, true],
                start: [Any],
                end: [Any],
                value: [Any],
                value_throttled: [Any],
                step: [Number, 1],
                format: [Or(String, Ref(tick_formatter_1.TickFormatter))],
                direction: [Enum("ltr", "rtl"), "ltr"],
                tooltips: [Boolean, true],
                bar_color: [Color, "#e6e6e6"],
            };
        });
    })();
},
489: /* nouislider/dist/nouislider.js */ function _(require, module, exports, __esModule, __esExport) {
    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
            typeof define === 'function' && define.amd ? define(['exports'], factory) :
                (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.noUiSlider = {}));
    }(this, (function (exports) {
        'use strict';
        exports.PipsMode = void 0;
        (function (PipsMode) {
            PipsMode["Range"] = "range";
            PipsMode["Steps"] = "steps";
            PipsMode["Positions"] = "positions";
            PipsMode["Count"] = "count";
            PipsMode["Values"] = "values";
        })(exports.PipsMode || (exports.PipsMode = {}));
        exports.PipsType = void 0;
        (function (PipsType) {
            PipsType[PipsType["None"] = -1] = "None";
            PipsType[PipsType["NoValue"] = 0] = "NoValue";
            PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
            PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
        })(exports.PipsType || (exports.PipsType = {}));
        //region Helper Methods
        function isValidFormatter(entry) {
            return isValidPartialFormatter(entry) && typeof entry.from === "function";
        }
        function isValidPartialFormatter(entry) {
            // partial formatters only need a to function and not a from function
            return typeof entry === "object" && typeof entry.to === "function";
        }
        function removeElement(el) {
            el.parentElement.removeChild(el);
        }
        function isSet(value) {
            return value !== null && value !== undefined;
        }
        // Bindable version
        function preventDefault(e) {
            e.preventDefault();
        }
        // Removes duplicates from an array.
        function unique(array) {
            return array.filter(function (a) {
                return !this[a] ? (this[a] = true) : false;
            }, {});
        }
        // Round a value to the closest 'to'.
        function closest(value, to) {
            return Math.round(value / to) * to;
        }
        // Current position of an element relative to the document.
        function offset(elem, orientation) {
            var rect = elem.getBoundingClientRect();
            var doc = elem.ownerDocument;
            var docElem = doc.documentElement;
            var pageOffset = getPageOffset(doc);
            // getBoundingClientRect contains left scroll in Chrome on Android.
            // I haven't found a feature detection that proves this. Worst case
            // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
            if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
                pageOffset.x = 0;
            }
            return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
        }
        // Checks whether a value is numerical.
        function isNumeric(a) {
            return typeof a === "number" && !isNaN(a) && isFinite(a);
        }
        // Sets a class and removes it after [duration] ms.
        function addClassFor(element, className, duration) {
            if (duration > 0) {
                addClass(element, className);
                setTimeout(function () {
                    removeClass(element, className);
                }, duration);
            }
        }
        // Limits a value to 0 - 100
        function limit(a) {
            return Math.max(Math.min(a, 100), 0);
        }
        // Wraps a variable as an array, if it isn't one yet.
        // Note that an input array is returned by reference!
        function asArray(a) {
            return Array.isArray(a) ? a : [a];
        }
        // Counts decimals
        function countDecimals(numStr) {
            numStr = String(numStr);
            var pieces = numStr.split(".");
            return pieces.length > 1 ? pieces[1].length : 0;
        }
        // http://youmightnotneedjquery.com/#add_class
        function addClass(el, className) {
            if (el.classList && !/\s/.test(className)) {
                el.classList.add(className);
            }
            else {
                el.className += " " + className;
            }
        }
        // http://youmightnotneedjquery.com/#remove_class
        function removeClass(el, className) {
            if (el.classList && !/\s/.test(className)) {
                el.classList.remove(className);
            }
            else {
                el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            }
        }
        // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
        function hasClass(el, className) {
            return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
        }
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
        function getPageOffset(doc) {
            var supportPageOffset = window.pageXOffset !== undefined;
            var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
            var x = supportPageOffset
                ? window.pageXOffset
                : isCSS1Compat
                    ? doc.documentElement.scrollLeft
                    : doc.body.scrollLeft;
            var y = supportPageOffset
                ? window.pageYOffset
                : isCSS1Compat
                    ? doc.documentElement.scrollTop
                    : doc.body.scrollTop;
            return {
                x: x,
                y: y
            };
        }
        // we provide a function to compute constants instead
        // of accessing window.* as soon as the module needs it
        // so that we do not compute anything if not needed
        function getActions() {
            // Determine the events to bind. IE11 implements pointerEvents without
            // a prefix, which breaks compatibility with the IE10 implementation.
            return window.navigator.pointerEnabled
                ? {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                }
                : window.navigator.msPointerEnabled
                    ? {
                        start: "MSPointerDown",
                        move: "MSPointerMove",
                        end: "MSPointerUp"
                    }
                    : {
                        start: "mousedown touchstart",
                        move: "mousemove touchmove",
                        end: "mouseup touchend"
                    };
        }
        // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
        // Issue #785
        function getSupportsPassive() {
            var supportsPassive = false;
            /* eslint-disable */
            try {
                var opts = Object.defineProperty({}, "passive", {
                    get: function () {
                        supportsPassive = true;
                    }
                });
                // @ts-ignore
                window.addEventListener("test", null, opts);
            }
            catch (e) { }
            /* eslint-enable */
            return supportsPassive;
        }
        function getSupportsTouchActionNone() {
            return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
        }
        //endregion
        //region Range Calculation
        // Determine the size of a sub-range in relation to a full range.
        function subRangeRatio(pa, pb) {
            return 100 / (pb - pa);
        }
        // (percentage) How many percent is this value of this range?
        function fromPercentage(range, value, startRange) {
            return (value * 100) / (range[startRange + 1] - range[startRange]);
        }
        // (percentage) Where is this value on this range?
        function toPercentage(range, value) {
            return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
        }
        // (value) How much is this percentage on this range?
        function isPercentage(range, value) {
            return (value * (range[1] - range[0])) / 100 + range[0];
        }
        function getJ(value, arr) {
            var j = 1;
            while (value >= arr[j]) {
                j += 1;
            }
            return j;
        }
        // (percentage) Input a value, find where, on a scale of 0-100, it applies.
        function toStepping(xVal, xPct, value) {
            if (value >= xVal.slice(-1)[0]) {
                return 100;
            }
            var j = getJ(value, xVal);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
        }
        // (value) Input a percentage, find where it is on the specified range.
        function fromStepping(xVal, xPct, value) {
            // There is no range group that fits 100
            if (value >= 100) {
                return xVal.slice(-1)[0];
            }
            var j = getJ(value, xPct);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
        }
        // (percentage) Get the step that applies at a certain value.
        function getStep(xPct, xSteps, snap, value) {
            if (value === 100) {
                return value;
            }
            var j = getJ(value, xPct);
            var a = xPct[j - 1];
            var b = xPct[j];
            // If 'snap' is set, steps are used as fixed points on the slider.
            if (snap) {
                // Find the closest position, a or b.
                if (value - a > (b - a) / 2) {
                    return b;
                }
                return a;
            }
            if (!xSteps[j - 1]) {
                return value;
            }
            return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
        }
        //endregion
        //region Spectrum
        var Spectrum = /** @class */ (function () {
            function Spectrum(entry, snap, singleStep) {
                this.xPct = [];
                this.xVal = [];
                this.xSteps = [];
                this.xNumSteps = [];
                this.xHighestCompleteStep = [];
                this.xSteps = [singleStep || false];
                this.xNumSteps = [false];
                this.snap = snap;
                var index;
                var ordered = [];
                // Map the object keys to an array.
                Object.keys(entry).forEach(function (index) {
                    ordered.push([asArray(entry[index]), index]);
                });
                // Sort all entries by value (numeric sort).
                ordered.sort(function (a, b) {
                    return a[0][0] - b[0][0];
                });
                // Convert all entries to subranges.
                for (index = 0; index < ordered.length; index++) {
                    this.handleEntryPoint(ordered[index][1], ordered[index][0]);
                }
                // Store the actual step values.
                // xSteps is sorted in the same order as xPct and xVal.
                this.xNumSteps = this.xSteps.slice(0);
                // Convert all numeric steps to the percentage of the subrange they represent.
                for (index = 0; index < this.xNumSteps.length; index++) {
                    this.handleStepPoint(index, this.xNumSteps[index]);
                }
            }
            Spectrum.prototype.getDistance = function (value) {
                var distances = [];
                for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                    distances[index] = fromPercentage(this.xVal, value, index);
                }
                return distances;
            };
            // Calculate the percentual distance over the whole scale of ranges.
            // direction: 0 = backwards / 1 = forwards
            Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
                var xPct_index = 0;
                // Calculate range where to start calculation
                if (value < this.xPct[this.xPct.length - 1]) {
                    while (value > this.xPct[xPct_index + 1]) {
                        xPct_index++;
                    }
                }
                else if (value === this.xPct[this.xPct.length - 1]) {
                    xPct_index = this.xPct.length - 2;
                }
                // If looking backwards and the value is exactly at a range separator then look one range further
                if (!direction && value === this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
                if (distances === null) {
                    distances = [];
                }
                var start_factor;
                var rest_factor = 1;
                var rest_rel_distance = distances[xPct_index];
                var range_pct = 0;
                var rel_range_distance = 0;
                var abs_distance_counter = 0;
                var range_counter = 0;
                // Calculate what part of the start range the value is
                if (direction) {
                    start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
                }
                else {
                    start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
                }
                // Do until the complete distance across ranges is calculated
                while (rest_rel_distance > 0) {
                    // Calculate the percentage of total range
                    range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                    // Detect if the margin, padding or limit is larger then the current range and calculate
                    if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                        // If larger then take the percentual distance of the whole range
                        rel_range_distance = range_pct * start_factor;
                        // Rest factor of relative percentual distance still to be calculated
                        rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                        // Set start factor to 1 as for next range it does not apply.
                        start_factor = 1;
                    }
                    else {
                        // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                        rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                        // No rest left as the rest fits in current range
                        rest_factor = 0;
                    }
                    if (direction) {
                        abs_distance_counter = abs_distance_counter - rel_range_distance;
                        // Limit range to first range when distance becomes outside of minimum range
                        if (this.xPct.length + range_counter >= 1) {
                            range_counter--;
                        }
                    }
                    else {
                        abs_distance_counter = abs_distance_counter + rel_range_distance;
                        // Limit range to last range when distance becomes outside of maximum range
                        if (this.xPct.length - range_counter >= 1) {
                            range_counter++;
                        }
                    }
                    // Rest of relative percentual distance still to be calculated
                    rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
                }
                return value + abs_distance_counter;
            };
            Spectrum.prototype.toStepping = function (value) {
                value = toStepping(this.xVal, this.xPct, value);
                return value;
            };
            Spectrum.prototype.fromStepping = function (value) {
                return fromStepping(this.xVal, this.xPct, value);
            };
            Spectrum.prototype.getStep = function (value) {
                value = getStep(this.xPct, this.xSteps, this.snap, value);
                return value;
            };
            Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
                var j = getJ(value, this.xPct);
                // When at the top or stepping down, look at the previous sub-range
                if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                    j = Math.max(j - 1, 1);
                }
                return (this.xVal[j] - this.xVal[j - 1]) / size;
            };
            Spectrum.prototype.getNearbySteps = function (value) {
                var j = getJ(value, this.xPct);
                return {
                    stepBefore: {
                        startValue: this.xVal[j - 2],
                        step: this.xNumSteps[j - 2],
                        highestStep: this.xHighestCompleteStep[j - 2]
                    },
                    thisStep: {
                        startValue: this.xVal[j - 1],
                        step: this.xNumSteps[j - 1],
                        highestStep: this.xHighestCompleteStep[j - 1]
                    },
                    stepAfter: {
                        startValue: this.xVal[j],
                        step: this.xNumSteps[j],
                        highestStep: this.xHighestCompleteStep[j]
                    }
                };
            };
            Spectrum.prototype.countStepDecimals = function () {
                var stepDecimals = this.xNumSteps.map(countDecimals);
                return Math.max.apply(null, stepDecimals);
            };
            Spectrum.prototype.hasNoSize = function () {
                return this.xVal[0] === this.xVal[this.xVal.length - 1];
            };
            // Outside testing
            Spectrum.prototype.convert = function (value) {
                return this.getStep(this.toStepping(value));
            };
            Spectrum.prototype.handleEntryPoint = function (index, value) {
                var percentage;
                // Covert min/max syntax to 0 and 100.
                if (index === "min") {
                    percentage = 0;
                }
                else if (index === "max") {
                    percentage = 100;
                }
                else {
                    percentage = parseFloat(index);
                }
                // Check for correct input.
                if (!isNumeric(percentage) || !isNumeric(value[0])) {
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                }
                // Store values.
                this.xPct.push(percentage);
                this.xVal.push(value[0]);
                var value1 = Number(value[1]);
                // NaN will evaluate to false too, but to keep
                // logging clear, set step explicitly. Make sure
                // not to override the 'step' setting with false.
                if (!percentage) {
                    if (!isNaN(value1)) {
                        this.xSteps[0] = value1;
                    }
                }
                else {
                    this.xSteps.push(isNaN(value1) ? false : value1);
                }
                this.xHighestCompleteStep.push(0);
            };
            Spectrum.prototype.handleStepPoint = function (i, n) {
                // Ignore 'false' stepping.
                if (!n) {
                    return;
                }
                // Step over zero-length ranges (#948);
                if (this.xVal[i] === this.xVal[i + 1]) {
                    this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                    return;
                }
                // Factor to range ratio
                this.xSteps[i] =
                    fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
                var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
                var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
                var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
                this.xHighestCompleteStep[i] = step;
            };
            return Spectrum;
        }());
        //endregion
        //region Options
        /*	Every input option is tested and parsed. This will prevent
            endless validation in internal methods. These tests are
            structured with an item for every option available. An
            option can be marked as required by setting the 'r' flag.
            The testing function is provided with three arguments:
                - The provided value for the option;
                - A reference to the options object;
                - The name for the option;
    
            The testing function returns false when an error is detected,
            or true when everything is OK. It can also modify the option
            object, to make sure all values can be correctly looped elsewhere. */
        //region Defaults
        var defaultFormatter = {
            to: function (value) {
                return value === undefined ? "" : value.toFixed(2);
            },
            from: Number
        };
        var cssClasses = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub"
        };
        // Namespaces of internal event listeners
        var INTERNAL_EVENT_NS = {
            tooltips: ".__tooltips",
            aria: ".__aria"
        };
        //endregion
        function testStep(parsed, entry) {
            if (!isNumeric(entry)) {
                throw new Error("noUiSlider: 'step' is not numeric.");
            }
            // The step option can still be used to set stepping
            // for linear sliders. Overwritten if set in 'range'.
            parsed.singleStep = entry;
        }
        function testKeyboardPageMultiplier(parsed, entry) {
            if (!isNumeric(entry)) {
                throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
            }
            parsed.keyboardPageMultiplier = entry;
        }
        function testKeyboardMultiplier(parsed, entry) {
            if (!isNumeric(entry)) {
                throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
            }
            parsed.keyboardMultiplier = entry;
        }
        function testKeyboardDefaultStep(parsed, entry) {
            if (!isNumeric(entry)) {
                throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
            }
            parsed.keyboardDefaultStep = entry;
        }
        function testRange(parsed, entry) {
            // Filter incorrect input.
            if (typeof entry !== "object" || Array.isArray(entry)) {
                throw new Error("noUiSlider: 'range' is not an object.");
            }
            // Catch missing start or end.
            if (entry.min === undefined || entry.max === undefined) {
                throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            }
            parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
        }
        function testStart(parsed, entry) {
            entry = asArray(entry);
            // Validate input. Values aren't tested, as the public .val method
            // will always provide a valid location.
            if (!Array.isArray(entry) || !entry.length) {
                throw new Error("noUiSlider: 'start' option is incorrect.");
            }
            // Store the number of handles.
            parsed.handles = entry.length;
            // When the slider is initialized, the .val method will
            // be called with the start options.
            parsed.start = entry;
        }
        function testSnap(parsed, entry) {
            if (typeof entry !== "boolean") {
                throw new Error("noUiSlider: 'snap' option must be a boolean.");
            }
            // Enforce 100% stepping within subranges.
            parsed.snap = entry;
        }
        function testAnimate(parsed, entry) {
            if (typeof entry !== "boolean") {
                throw new Error("noUiSlider: 'animate' option must be a boolean.");
            }
            // Enforce 100% stepping within subranges.
            parsed.animate = entry;
        }
        function testAnimationDuration(parsed, entry) {
            if (typeof entry !== "number") {
                throw new Error("noUiSlider: 'animationDuration' option must be a number.");
            }
            parsed.animationDuration = entry;
        }
        function testConnect(parsed, entry) {
            var connect = [false];
            var i;
            // Map legacy options
            if (entry === "lower") {
                entry = [true, false];
            }
            else if (entry === "upper") {
                entry = [false, true];
            }
            // Handle boolean options
            if (entry === true || entry === false) {
                for (i = 1; i < parsed.handles; i++) {
                    connect.push(entry);
                }
                connect.push(false);
            }
            // Reject invalid input
            else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
                throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            }
            else {
                connect = entry;
            }
            parsed.connect = connect;
        }
        function testOrientation(parsed, entry) {
            // Set orientation to an a numerical value for easy
            // array selection.
            switch (entry) {
                case "horizontal":
                    parsed.ort = 0;
                    break;
                case "vertical":
                    parsed.ort = 1;
                    break;
                default:
                    throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
        }
        function testMargin(parsed, entry) {
            if (!isNumeric(entry)) {
                throw new Error("noUiSlider: 'margin' option must be numeric.");
            }
            // Issue #582
            if (entry === 0) {
                return;
            }
            parsed.margin = parsed.spectrum.getDistance(entry);
        }
        function testLimit(parsed, entry) {
            if (!isNumeric(entry)) {
                throw new Error("noUiSlider: 'limit' option must be numeric.");
            }
            parsed.limit = parsed.spectrum.getDistance(entry);
            if (!parsed.limit || parsed.handles < 2) {
                throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
            }
        }
        function testPadding(parsed, entry) {
            var index;
            if (!isNumeric(entry) && !Array.isArray(entry)) {
                throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            }
            if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
                throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            }
            if (entry === 0) {
                return;
            }
            if (!Array.isArray(entry)) {
                entry = [entry, entry];
            }
            // 'getDistance' returns false for invalid values.
            parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
            for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
                // last "range" can't contain step size as it is purely an endpoint.
                if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                    throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
                }
            }
            var totalPadding = entry[0] + entry[1];
            var firstValue = parsed.spectrum.xVal[0];
            var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
            if (totalPadding / (lastValue - firstValue) > 1) {
                throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
            }
        }
        function testDirection(parsed, entry) {
            // Set direction as a numerical value for easy parsing.
            // Invert connection for RTL sliders, so that the proper
            // handles get the connect/background classes.
            switch (entry) {
                case "ltr":
                    parsed.dir = 0;
                    break;
                case "rtl":
                    parsed.dir = 1;
                    break;
                default:
                    throw new Error("noUiSlider: 'direction' option was not recognized.");
            }
        }
        function testBehaviour(parsed, entry) {
            // Make sure the input is a string.
            if (typeof entry !== "string") {
                throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            }
            // Check if the string contains any keywords.
            // None are required.
            var tap = entry.indexOf("tap") >= 0;
            var drag = entry.indexOf("drag") >= 0;
            var fixed = entry.indexOf("fixed") >= 0;
            var snap = entry.indexOf("snap") >= 0;
            var hover = entry.indexOf("hover") >= 0;
            var unconstrained = entry.indexOf("unconstrained") >= 0;
            var dragAll = entry.indexOf("drag-all") >= 0;
            if (fixed) {
                if (parsed.handles !== 2) {
                    throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                }
                // Use margin to enforce fixed state
                testMargin(parsed, parsed.start[1] - parsed.start[0]);
            }
            if (unconstrained && (parsed.margin || parsed.limit)) {
                throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
            }
            parsed.events = {
                tap: tap || snap,
                drag: drag,
                dragAll: dragAll,
                fixed: fixed,
                snap: snap,
                hover: hover,
                unconstrained: unconstrained
            };
        }
        function testTooltips(parsed, entry) {
            if (entry === false) {
                return;
            }
            if (entry === true || isValidPartialFormatter(entry)) {
                parsed.tooltips = [];
                for (var i = 0; i < parsed.handles; i++) {
                    parsed.tooltips.push(entry);
                }
            }
            else {
                entry = asArray(entry);
                if (entry.length !== parsed.handles) {
                    throw new Error("noUiSlider: must pass a formatter for all handles.");
                }
                entry.forEach(function (formatter) {
                    if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                        throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                    }
                });
                parsed.tooltips = entry;
            }
        }
        function testHandleAttributes(parsed, entry) {
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a attributes for all handles.");
            }
            parsed.handleAttributes = entry;
        }
        function testAriaFormat(parsed, entry) {
            if (!isValidPartialFormatter(entry)) {
                throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            }
            parsed.ariaFormat = entry;
        }
        function testFormat(parsed, entry) {
            if (!isValidFormatter(entry)) {
                throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
            }
            parsed.format = entry;
        }
        function testKeyboardSupport(parsed, entry) {
            if (typeof entry !== "boolean") {
                throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
            }
            parsed.keyboardSupport = entry;
        }
        function testDocumentElement(parsed, entry) {
            // This is an advanced option. Passed values are used without validation.
            parsed.documentElement = entry;
        }
        function testCssPrefix(parsed, entry) {
            if (typeof entry !== "string" && entry !== false) {
                throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
            }
            parsed.cssPrefix = entry;
        }
        function testCssClasses(parsed, entry) {
            if (typeof entry !== "object") {
                throw new Error("noUiSlider: 'cssClasses' must be an object.");
            }
            if (typeof parsed.cssPrefix === "string") {
                parsed.cssClasses = {};
                Object.keys(entry).forEach(function (key) {
                    parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
                });
            }
            else {
                parsed.cssClasses = entry;
            }
        }
        // Test all developer settings and parse to assumption-safe values.
        function testOptions(options) {
            // To prove a fix for #537, freeze options here.
            // If the object is modified, an error will be thrown.
            // Object.freeze(options);
            var parsed = {
                margin: null,
                limit: null,
                padding: null,
                animate: true,
                animationDuration: 300,
                ariaFormat: defaultFormatter,
                format: defaultFormatter
            };
            // Tests are executed in the order they are presented here.
            var tests = {
                step: { r: false, t: testStep },
                keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
                keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
                keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
                start: { r: true, t: testStart },
                connect: { r: true, t: testConnect },
                direction: { r: true, t: testDirection },
                snap: { r: false, t: testSnap },
                animate: { r: false, t: testAnimate },
                animationDuration: { r: false, t: testAnimationDuration },
                range: { r: true, t: testRange },
                orientation: { r: false, t: testOrientation },
                margin: { r: false, t: testMargin },
                limit: { r: false, t: testLimit },
                padding: { r: false, t: testPadding },
                behaviour: { r: true, t: testBehaviour },
                ariaFormat: { r: false, t: testAriaFormat },
                format: { r: false, t: testFormat },
                tooltips: { r: false, t: testTooltips },
                keyboardSupport: { r: true, t: testKeyboardSupport },
                documentElement: { r: false, t: testDocumentElement },
                cssPrefix: { r: true, t: testCssPrefix },
                cssClasses: { r: true, t: testCssClasses },
                handleAttributes: { r: false, t: testHandleAttributes }
            };
            var defaults = {
                connect: false,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: true,
                cssPrefix: "noUi-",
                cssClasses: cssClasses,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10
            };
            // AriaFormat defaults to regular format, if any.
            if (options.format && !options.ariaFormat) {
                options.ariaFormat = options.format;
            }
            // Run all options through a testing mechanism to ensure correct
            // input. It should be noted that options might get modified to
            // be handled properly. E.g. wrapping integers in arrays.
            Object.keys(tests).forEach(function (name) {
                // If the option isn't set, but it is required, throw an error.
                if (!isSet(options[name]) && defaults[name] === undefined) {
                    if (tests[name].r) {
                        throw new Error("noUiSlider: '" + name + "' is required.");
                    }
                    return;
                }
                tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
            });
            // Forward pips options
            parsed.pips = options.pips;
            // All recent browsers accept unprefixed transform.
            // We need -ms- for IE9 and -webkit- for older Android;
            // Assume use of -webkit- if unprefixed and -ms- are not supported.
            // https://caniuse.com/#feat=transforms2d
            var d = document.createElement("div");
            var msPrefix = d.style.msTransform !== undefined;
            var noPrefix = d.style.transform !== undefined;
            parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
            // Pips don't move, so we can place them using left/top.
            var styles = [
                ["left", "top"],
                ["right", "bottom"]
            ];
            parsed.style = styles[parsed.dir][parsed.ort];
            return parsed;
        }
        //endregion
        function scope(target, options, originalOptions) {
            var actions = getActions();
            var supportsTouchActionNone = getSupportsTouchActionNone();
            var supportsPassive = supportsTouchActionNone && getSupportsPassive();
            // All variables local to 'scope' are prefixed with 'scope_'
            // Slider DOM Nodes
            var scope_Target = target;
            var scope_Base;
            var scope_Handles;
            var scope_Connects;
            var scope_Pips;
            var scope_Tooltips;
            // Slider state values
            var scope_Spectrum = options.spectrum;
            var scope_Values = [];
            var scope_Locations = [];
            var scope_HandleNumbers = [];
            var scope_ActiveHandlesCount = 0;
            var scope_Events = {};
            // Document Nodes
            var scope_Document = target.ownerDocument;
            var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
            var scope_Body = scope_Document.body;
            // For horizontal sliders in standard ltr documents,
            // make .noUi-origin overflow to the left so the document doesn't scroll.
            var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
            // Creates a node, adds it to target, returns the new node.
            function addNodeTo(addTarget, className) {
                var div = scope_Document.createElement("div");
                if (className) {
                    addClass(div, className);
                }
                addTarget.appendChild(div);
                return div;
            }
            // Append a origin to the base
            function addOrigin(base, handleNumber) {
                var origin = addNodeTo(base, options.cssClasses.origin);
                var handle = addNodeTo(origin, options.cssClasses.handle);
                addNodeTo(handle, options.cssClasses.touchArea);
                handle.setAttribute("data-handle", String(handleNumber));
                if (options.keyboardSupport) {
                    // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                    // 0 = focusable and reachable
                    handle.setAttribute("tabindex", "0");
                    handle.addEventListener("keydown", function (event) {
                        return eventKeydown(event, handleNumber);
                    });
                }
                if (options.handleAttributes !== undefined) {
                    var attributes_1 = options.handleAttributes[handleNumber];
                    Object.keys(attributes_1).forEach(function (attribute) {
                        handle.setAttribute(attribute, attributes_1[attribute]);
                    });
                }
                handle.setAttribute("role", "slider");
                handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
                if (handleNumber === 0) {
                    addClass(handle, options.cssClasses.handleLower);
                }
                else if (handleNumber === options.handles - 1) {
                    addClass(handle, options.cssClasses.handleUpper);
                }
                return origin;
            }
            // Insert nodes for connect elements
            function addConnect(base, add) {
                if (!add) {
                    return false;
                }
                return addNodeTo(base, options.cssClasses.connect);
            }
            // Add handles to the slider base.
            function addElements(connectOptions, base) {
                var connectBase = addNodeTo(base, options.cssClasses.connects);
                scope_Handles = [];
                scope_Connects = [];
                scope_Connects.push(addConnect(connectBase, connectOptions[0]));
                // [::::O====O====O====]
                // connectOptions = [0, 1, 1, 1]
                for (var i = 0; i < options.handles; i++) {
                    // Keep a list of all added handles.
                    scope_Handles.push(addOrigin(base, i));
                    scope_HandleNumbers[i] = i;
                    scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
                }
            }
            // Initialize a single slider.
            function addSlider(addTarget) {
                // Apply classes and data to the target.
                addClass(addTarget, options.cssClasses.target);
                if (options.dir === 0) {
                    addClass(addTarget, options.cssClasses.ltr);
                }
                else {
                    addClass(addTarget, options.cssClasses.rtl);
                }
                if (options.ort === 0) {
                    addClass(addTarget, options.cssClasses.horizontal);
                }
                else {
                    addClass(addTarget, options.cssClasses.vertical);
                }
                var textDirection = getComputedStyle(addTarget).direction;
                if (textDirection === "rtl") {
                    addClass(addTarget, options.cssClasses.textDirectionRtl);
                }
                else {
                    addClass(addTarget, options.cssClasses.textDirectionLtr);
                }
                return addNodeTo(addTarget, options.cssClasses.base);
            }
            function addTooltip(handle, handleNumber) {
                if (!options.tooltips || !options.tooltips[handleNumber]) {
                    return false;
                }
                return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
            }
            function isSliderDisabled() {
                return scope_Target.hasAttribute("disabled");
            }
            // Disable the slider dragging if any handle is disabled
            function isHandleDisabled(handleNumber) {
                var handleOrigin = scope_Handles[handleNumber];
                return handleOrigin.hasAttribute("disabled");
            }
            function removeTooltips() {
                if (scope_Tooltips) {
                    removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                    scope_Tooltips.forEach(function (tooltip) {
                        if (tooltip) {
                            removeElement(tooltip);
                        }
                    });
                    scope_Tooltips = null;
                }
            }
            // The tooltips option is a shorthand for using the 'update' event.
            function tooltips() {
                removeTooltips();
                // Tooltips are added with options.tooltips in original order.
                scope_Tooltips = scope_Handles.map(addTooltip);
                bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                    if (!scope_Tooltips || !options.tooltips) {
                        return;
                    }
                    if (scope_Tooltips[handleNumber] === false) {
                        return;
                    }
                    var formattedValue = values[handleNumber];
                    if (options.tooltips[handleNumber] !== true) {
                        formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                    }
                    scope_Tooltips[handleNumber].innerHTML = formattedValue;
                });
            }
            function aria() {
                removeEvent("update" + INTERNAL_EVENT_NS.aria);
                bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                    // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                    scope_HandleNumbers.forEach(function (index) {
                        var handle = scope_Handles[index];
                        var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                        var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                        var now = positions[index];
                        // Formatted value for display
                        var text = String(options.ariaFormat.to(unencoded[index]));
                        // Map to slider range values
                        min = scope_Spectrum.fromStepping(min).toFixed(1);
                        max = scope_Spectrum.fromStepping(max).toFixed(1);
                        now = scope_Spectrum.fromStepping(now).toFixed(1);
                        handle.children[0].setAttribute("aria-valuemin", min);
                        handle.children[0].setAttribute("aria-valuemax", max);
                        handle.children[0].setAttribute("aria-valuenow", now);
                        handle.children[0].setAttribute("aria-valuetext", text);
                    });
                });
            }
            function getGroup(pips) {
                // Use the range.
                if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                    return scope_Spectrum.xVal;
                }
                if (pips.mode === exports.PipsMode.Count) {
                    if (pips.values < 2) {
                        throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                    }
                    // Divide 0 - 100 in 'count' parts.
                    var interval = pips.values - 1;
                    var spread = 100 / interval;
                    var values = [];
                    // List these parts and have them handled as 'positions'.
                    while (interval--) {
                        values[interval] = interval * spread;
                    }
                    values.push(100);
                    return mapToRange(values, pips.stepped);
                }
                if (pips.mode === exports.PipsMode.Positions) {
                    // Map all percentages to on-range values.
                    return mapToRange(pips.values, pips.stepped);
                }
                if (pips.mode === exports.PipsMode.Values) {
                    // If the value must be stepped, it needs to be converted to a percentage first.
                    if (pips.stepped) {
                        return pips.values.map(function (value) {
                            // Convert to percentage, apply step, return to value.
                            return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                        });
                    }
                    // Otherwise, we can simply use the values.
                    return pips.values;
                }
                return []; // pips.mode = never
            }
            function mapToRange(values, stepped) {
                return values.map(function (value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                });
            }
            function generateSpread(pips) {
                function safeIncrement(value, increment) {
                    // Avoid floating point variance by dropping the smallest decimal places.
                    return Number((value + increment).toFixed(7));
                }
                var group = getGroup(pips);
                var indexes = {};
                var firstInRange = scope_Spectrum.xVal[0];
                var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
                var ignoreFirst = false;
                var ignoreLast = false;
                var prevPct = 0;
                // Create a copy of the group, sort it and filter away all duplicates.
                group = unique(group.slice().sort(function (a, b) {
                    return a - b;
                }));
                // Make sure the range starts with the first element.
                if (group[0] !== firstInRange) {
                    group.unshift(firstInRange);
                    ignoreFirst = true;
                }
                // Likewise for the last one.
                if (group[group.length - 1] !== lastInRange) {
                    group.push(lastInRange);
                    ignoreLast = true;
                }
                group.forEach(function (current, index) {
                    // Get the current step and the lower + upper positions.
                    var step;
                    var i;
                    var q;
                    var low = current;
                    var high = group[index + 1];
                    var newPct;
                    var pctDifference;
                    var pctPos;
                    var type;
                    var steps;
                    var realSteps;
                    var stepSize;
                    var isSteps = pips.mode === exports.PipsMode.Steps;
                    // When using 'steps' mode, use the provided steps.
                    // Otherwise, we'll step on to the next subrange.
                    if (isSteps) {
                        step = scope_Spectrum.xNumSteps[index];
                    }
                    // Default to a 'full' step.
                    if (!step) {
                        step = high - low;
                    }
                    // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                    if (high === undefined) {
                        high = low;
                    }
                    // Make sure step isn't 0, which would cause an infinite loop (#654)
                    step = Math.max(step, 0.0000001);
                    // Find all steps in the subrange.
                    for (i = low; i <= high; i = safeIncrement(i, step)) {
                        // Get the percentage value for the current step,
                        // calculate the size for the subrange.
                        newPct = scope_Spectrum.toStepping(i);
                        pctDifference = newPct - prevPct;
                        steps = pctDifference / (pips.density || 1);
                        realSteps = Math.round(steps);
                        // This ratio represents the amount of percentage-space a point indicates.
                        // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                        // Round the percentage offset to an even number, then divide by two
                        // to spread the offset on both sides of the range.
                        stepSize = pctDifference / realSteps;
                        // Divide all points evenly, adding the correct number to this subrange.
                        // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                        for (q = 1; q <= realSteps; q += 1) {
                            // The ratio between the rounded value and the actual size might be ~1% off.
                            // Correct the percentage offset by the number of points
                            // per subrange. density = 1 will result in 100 points on the
                            // full range, 2 for 50, 4 for 25, etc.
                            pctPos = prevPct + q * stepSize;
                            indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                        }
                        // Determine the point type.
                        type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                        // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                        if (!index && ignoreFirst && i !== high) {
                            type = 0;
                        }
                        if (!(i === high && ignoreLast)) {
                            // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                            indexes[newPct.toFixed(5)] = [i, type];
                        }
                        // Update the percentage count.
                        prevPct = newPct;
                    }
                });
                return indexes;
            }
            function addMarking(spread, filterFunc, formatter) {
                var _a, _b;
                var element = scope_Document.createElement("div");
                var valueSizeClasses = (_a = {},
                    _a[exports.PipsType.None] = "",
                    _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                    _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                    _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                    _a);
                var markerSizeClasses = (_b = {},
                    _b[exports.PipsType.None] = "",
                    _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                    _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                    _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                    _b);
                var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
                var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
                addClass(element, options.cssClasses.pips);
                addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
                function getClasses(type, source) {
                    var a = source === options.cssClasses.value;
                    var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                    var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                    return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
                }
                function addSpread(offset, value, type) {
                    // Apply the filter function, if it is set.
                    type = filterFunc ? filterFunc(value, type) : type;
                    if (type === exports.PipsType.None) {
                        return;
                    }
                    // Add a marker for every point
                    var node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.marker);
                    node.style[options.style] = offset + "%";
                    // Values are only appended for points marked '1' or '2'.
                    if (type > exports.PipsType.NoValue) {
                        node = addNodeTo(element, false);
                        node.className = getClasses(type, options.cssClasses.value);
                        node.setAttribute("data-value", String(value));
                        node.style[options.style] = offset + "%";
                        node.innerHTML = String(formatter.to(value));
                    }
                }
                // Append all points.
                Object.keys(spread).forEach(function (offset) {
                    addSpread(offset, spread[offset][0], spread[offset][1]);
                });
                return element;
            }
            function removePips() {
                if (scope_Pips) {
                    removeElement(scope_Pips);
                    scope_Pips = null;
                }
            }
            function pips(pips) {
                // Fix #669
                removePips();
                var spread = generateSpread(pips);
                var filter = pips.filter;
                var format = pips.format || {
                    to: function (value) {
                        return String(Math.round(value));
                    }
                };
                scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
                return scope_Pips;
            }
            // Shorthand for base dimensions.
            function baseSize() {
                var rect = scope_Base.getBoundingClientRect();
                var alt = ("offset" + ["Width", "Height"][options.ort]);
                return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
            }
            // Handler for attaching events trough a proxy.
            function attachEvent(events, element, callback, data) {
                // This function can be used to 'filter' events to the slider.
                // element is a node, not a nodeList
                var method = function (event) {
                    var e = fixEvent(event, data.pageOffset, data.target || element);
                    // fixEvent returns false if this event has a different target
                    // when handling (multi-) touch events;
                    if (!e) {
                        return false;
                    }
                    // doNotReject is passed by all end events to make sure released touches
                    // are not rejected, leaving the slider "stuck" to the cursor;
                    if (isSliderDisabled() && !data.doNotReject) {
                        return false;
                    }
                    // Stop if an active 'tap' transition is taking place.
                    if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                        return false;
                    }
                    // Ignore right or middle clicks on start #454
                    if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                        return false;
                    }
                    // Ignore right or middle clicks on start #454
                    if (data.hover && e.buttons) {
                        return false;
                    }
                    // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                    // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                    // touch-action: manipulation, but that allows panning, which breaks
                    // sliders after zooming/on non-responsive pages.
                    // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                    if (!supportsPassive) {
                        e.preventDefault();
                    }
                    e.calcPoint = e.points[options.ort];
                    // Call the event handler with the event [ and additional data ].
                    callback(e, data);
                    return;
                };
                var methods = [];
                // Bind a closure on the target for every event type.
                events.split(" ").forEach(function (eventName) {
                    element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                    methods.push([eventName, method]);
                });
                return methods;
            }
            // Provide a clean event with standardized offset values.
            function fixEvent(e, pageOffset, eventTarget) {
                // Filter the event to register the type, which can be
                // touch, mouse or pointer. Offset changes need to be
                // made on an event specific basis.
                var touch = e.type.indexOf("touch") === 0;
                var mouse = e.type.indexOf("mouse") === 0;
                var pointer = e.type.indexOf("pointer") === 0;
                var x = 0;
                var y = 0;
                // IE10 implemented pointer events with a prefix;
                if (e.type.indexOf("MSPointer") === 0) {
                    pointer = true;
                }
                // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
                // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
                // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
                if (e.type === "mousedown" && !e.buttons && !e.touches) {
                    return false;
                }
                // The only thing one handle should be concerned about is the touches that originated on top of it.
                if (touch) {
                    // Returns true if a touch originated on the target.
                    var isTouchOnTarget = function (checkTouch) {
                        var target = checkTouch.target;
                        return (target === eventTarget ||
                            eventTarget.contains(target) ||
                            (e.composed && e.composedPath().shift() === eventTarget));
                    };
                    // In the case of touchstart events, we need to make sure there is still no more than one
                    // touch on the target so we look amongst all touches.
                    if (e.type === "touchstart") {
                        var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                        // Do not support more than one touch per handle.
                        if (targetTouches.length > 1) {
                            return false;
                        }
                        x = targetTouches[0].pageX;
                        y = targetTouches[0].pageY;
                    }
                    else {
                        // In the other cases, find on changedTouches is enough.
                        var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                        // Cancel if the target touch has not moved.
                        if (!targetTouch) {
                            return false;
                        }
                        x = targetTouch.pageX;
                        y = targetTouch.pageY;
                    }
                }
                pageOffset = pageOffset || getPageOffset(scope_Document);
                if (mouse || pointer) {
                    x = e.clientX + pageOffset.x;
                    y = e.clientY + pageOffset.y;
                }
                e.pageOffset = pageOffset;
                e.points = [x, y];
                e.cursor = mouse || pointer; // Fix #435
                return e;
            }
            // Translate a coordinate in the document to a percentage on the slider
            function calcPointToPercentage(calcPoint) {
                var location = calcPoint - offset(scope_Base, options.ort);
                var proposal = (location * 100) / baseSize();
                // Clamp proposal between 0% and 100%
                // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
                // are used (e.g. contained handles feature)
                proposal = limit(proposal);
                return options.dir ? 100 - proposal : proposal;
            }
            // Find handle closest to a certain percentage on the slider
            function getClosestHandle(clickedPosition) {
                var smallestDifference = 100;
                var handleNumber = false;
                scope_Handles.forEach(function (handle, index) {
                    // Disabled handles are ignored
                    if (isHandleDisabled(index)) {
                        return;
                    }
                    var handlePosition = scope_Locations[index];
                    var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                    // Initial state
                    var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                    // Difference with this handle is smaller than the previously checked handle
                    var isCloser = differenceWithThisHandle < smallestDifference;
                    var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                    if (isCloser || isCloserAfter || clickAtEdge) {
                        handleNumber = index;
                        smallestDifference = differenceWithThisHandle;
                    }
                });
                return handleNumber;
            }
            // Fire 'end' when a mouse or pen leaves the document.
            function documentLeave(event, data) {
                if (event.type === "mouseout" &&
                    event.target.nodeName === "HTML" &&
                    event.relatedTarget === null) {
                    eventEnd(event, data);
                }
            }
            // Handle movement on document for handle and range drag.
            function eventMove(event, data) {
                // Fix #498
                // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
                // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
                // IE9 has .buttons and .which zero on mousemove.
                // Firefox breaks the spec MDN defines.
                if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                    return eventEnd(event, data);
                }
                // Check if we are moving up or down
                var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
                // Convert the movement into a percentage of the slider width/height
                var proposal = (movement * 100) / data.baseSize;
                moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
            }
            // Unbind move events on document, call callbacks.
            function eventEnd(event, data) {
                // The handle is no longer active, so remove the class.
                if (data.handle) {
                    removeClass(data.handle, options.cssClasses.active);
                    scope_ActiveHandlesCount -= 1;
                }
                // Unbind the move and end events, which are added on 'start'.
                data.listeners.forEach(function (c) {
                    scope_DocumentElement.removeEventListener(c[0], c[1]);
                });
                if (scope_ActiveHandlesCount === 0) {
                    // Remove dragging class.
                    removeClass(scope_Target, options.cssClasses.drag);
                    setZindex();
                    // Remove cursor styles and text-selection events bound to the body.
                    if (event.cursor) {
                        scope_Body.style.cursor = "";
                        scope_Body.removeEventListener("selectstart", preventDefault);
                    }
                }
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("change", handleNumber);
                    fireEvent("set", handleNumber);
                    fireEvent("end", handleNumber);
                });
            }
            // Bind move events on document.
            function eventStart(event, data) {
                // Ignore event if any handle is disabled
                if (data.handleNumbers.some(isHandleDisabled)) {
                    return;
                }
                var handle;
                if (data.handleNumbers.length === 1) {
                    var handleOrigin = scope_Handles[data.handleNumbers[0]];
                    handle = handleOrigin.children[0];
                    scope_ActiveHandlesCount += 1;
                    // Mark the handle as 'active' so it can be styled.
                    addClass(handle, options.cssClasses.active);
                }
                // A drag should never propagate up to the 'tap' event.
                event.stopPropagation();
                // Record the event listeners.
                var listeners = [];
                // Attach the move and end events.
                var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                    // The event target has changed so we need to propagate the original one so that we keep
                    // relying on it to extract target touches.
                    target: event.target,
                    handle: handle,
                    connect: data.connect,
                    listeners: listeners,
                    startCalcPoint: event.calcPoint,
                    baseSize: baseSize(),
                    pageOffset: event.pageOffset,
                    handleNumbers: data.handleNumbers,
                    buttonsProperty: event.buttons,
                    locations: scope_Locations.slice()
                });
                var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                    target: event.target,
                    handle: handle,
                    listeners: listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                    target: event.target,
                    handle: handle,
                    listeners: listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                // We want to make sure we pushed the listeners in the listener list rather than creating
                // a new one as it has already been passed to the event handlers.
                listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
                // Text selection isn't an issue on touch devices,
                // so adding cursor styles can be skipped.
                if (event.cursor) {
                    // Prevent the 'I' cursor and extend the range-drag cursor.
                    scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                    // Mark the target with a dragging state.
                    if (scope_Handles.length > 1) {
                        addClass(scope_Target, options.cssClasses.drag);
                    }
                    // Prevent text selection when dragging the handles.
                    // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                    // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                    // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                    // The 'cursor' flag is false.
                    // See: http://caniuse.com/#search=selectstart
                    scope_Body.addEventListener("selectstart", preventDefault, false);
                }
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("start", handleNumber);
                });
            }
            // Move closest handle to tapped location.
            function eventTap(event) {
                // The tap event shouldn't propagate up
                event.stopPropagation();
                var proposal = calcPointToPercentage(event.calcPoint);
                var handleNumber = getClosestHandle(proposal);
                // Tackle the case that all handles are 'disabled'.
                if (handleNumber === false) {
                    return;
                }
                // Flag the slider as it is now in a transitional state.
                // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
                if (!options.events.snap) {
                    addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                }
                setHandle(handleNumber, proposal, true, true);
                setZindex();
                fireEvent("slide", handleNumber, true);
                fireEvent("update", handleNumber, true);
                if (!options.events.snap) {
                    fireEvent("change", handleNumber, true);
                    fireEvent("set", handleNumber, true);
                }
                else {
                    eventStart(event, { handleNumbers: [handleNumber] });
                }
            }
            // Fires a 'hover' event for a hovered mouse/pen position.
            function eventHover(event) {
                var proposal = calcPointToPercentage(event.calcPoint);
                var to = scope_Spectrum.getStep(proposal);
                var value = scope_Spectrum.fromStepping(to);
                Object.keys(scope_Events).forEach(function (targetEvent) {
                    if ("hover" === targetEvent.split(".")[0]) {
                        scope_Events[targetEvent].forEach(function (callback) {
                            callback.call(scope_Self, value);
                        });
                    }
                });
            }
            // Handles keydown on focused handles
            // Don't move the document when pressing arrow keys on focused handles
            function eventKeydown(event, handleNumber) {
                if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                    return false;
                }
                var horizontalKeys = ["Left", "Right"];
                var verticalKeys = ["Down", "Up"];
                var largeStepKeys = ["PageDown", "PageUp"];
                var edgeKeys = ["Home", "End"];
                if (options.dir && !options.ort) {
                    // On an right-to-left slider, the left and right keys act inverted
                    horizontalKeys.reverse();
                }
                else if (options.ort && !options.dir) {
                    // On a top-to-bottom slider, the up and down keys act inverted
                    verticalKeys.reverse();
                    largeStepKeys.reverse();
                }
                // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
                var key = event.key.replace("Arrow", "");
                var isLargeDown = key === largeStepKeys[0];
                var isLargeUp = key === largeStepKeys[1];
                var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
                var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
                var isMin = key === edgeKeys[0];
                var isMax = key === edgeKeys[1];
                if (!isDown && !isUp && !isMin && !isMax) {
                    return true;
                }
                event.preventDefault();
                var to;
                if (isUp || isDown) {
                    var direction = isDown ? 0 : 1;
                    var steps = getNextStepsForHandle(handleNumber);
                    var step = steps[direction];
                    // At the edge of a slider, do nothing
                    if (step === null) {
                        return false;
                    }
                    // No step set, use the default of 10% of the sub-range
                    if (step === false) {
                        step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                    }
                    if (isLargeUp || isLargeDown) {
                        step *= options.keyboardPageMultiplier;
                    }
                    else {
                        step *= options.keyboardMultiplier;
                    }
                    // Step over zero-length ranges (#948);
                    step = Math.max(step, 0.0000001);
                    // Decrement for down steps
                    step = (isDown ? -1 : 1) * step;
                    to = scope_Values[handleNumber] + step;
                }
                else if (isMax) {
                    // End key
                    to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
                }
                else {
                    // Home key
                    to = options.spectrum.xVal[0];
                }
                setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
                fireEvent("slide", handleNumber);
                fireEvent("update", handleNumber);
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                return false;
            }
            // Attach events to several slider parts.
            function bindSliderEvents(behaviour) {
                // Attach the standard drag event to the handles.
                if (!behaviour.fixed) {
                    scope_Handles.forEach(function (handle, index) {
                        // These events are only bound to the visual handle
                        // element, not the 'real' origin element.
                        attachEvent(actions.start, handle.children[0], eventStart, {
                            handleNumbers: [index]
                        });
                    });
                }
                // Attach the tap event to the slider base.
                if (behaviour.tap) {
                    attachEvent(actions.start, scope_Base, eventTap, {});
                }
                // Fire hover events
                if (behaviour.hover) {
                    attachEvent(actions.move, scope_Base, eventHover, {
                        hover: true
                    });
                }
                // Make the range draggable.
                if (behaviour.drag) {
                    scope_Connects.forEach(function (connect, index) {
                        if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                            return;
                        }
                        var handleBefore = scope_Handles[index - 1];
                        var handleAfter = scope_Handles[index];
                        var eventHolders = [connect];
                        var handlesToDrag = [handleBefore, handleAfter];
                        var handleNumbersToDrag = [index - 1, index];
                        addClass(connect, options.cssClasses.draggable);
                        // When the range is fixed, the entire range can
                        // be dragged by the handles. The handle in the first
                        // origin will propagate the start event upward,
                        // but it needs to be bound manually on the other.
                        if (behaviour.fixed) {
                            eventHolders.push(handleBefore.children[0]);
                            eventHolders.push(handleAfter.children[0]);
                        }
                        if (behaviour.dragAll) {
                            handlesToDrag = scope_Handles;
                            handleNumbersToDrag = scope_HandleNumbers;
                        }
                        eventHolders.forEach(function (eventHolder) {
                            attachEvent(actions.start, eventHolder, eventStart, {
                                handles: handlesToDrag,
                                handleNumbers: handleNumbersToDrag,
                                connect: connect
                            });
                        });
                    });
                }
            }
            // Attach an event to this slider, possibly including a namespace
            function bindEvent(namespacedEvent, callback) {
                scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
                scope_Events[namespacedEvent].push(callback);
                // If the event bound is 'update,' fire it immediately for all handles.
                if (namespacedEvent.split(".")[0] === "update") {
                    scope_Handles.forEach(function (a, index) {
                        fireEvent("update", index);
                    });
                }
            }
            function isInternalNamespace(namespace) {
                return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
            }
            // Undo attachment of event
            function removeEvent(namespacedEvent) {
                var event = namespacedEvent && namespacedEvent.split(".")[0];
                var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
                Object.keys(scope_Events).forEach(function (bind) {
                    var tEvent = bind.split(".")[0];
                    var tNamespace = bind.substring(tEvent.length);
                    if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                        // only delete protected internal event if intentional
                        if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                            delete scope_Events[bind];
                        }
                    }
                });
            }
            // External event handling
            function fireEvent(eventName, handleNumber, tap) {
                Object.keys(scope_Events).forEach(function (targetEvent) {
                    var eventType = targetEvent.split(".")[0];
                    if (eventName === eventType) {
                        scope_Events[targetEvent].forEach(function (callback) {
                            callback.call(
                            // Use the slider public API as the scope ('this')
                            scope_Self, 
                            // Return values as array, so arg_1[arg_2] is always valid.
                            scope_Values.map(options.format.to), 
                            // Handle index, 0 or 1
                            handleNumber, 
                            // Un-formatted slider values
                            scope_Values.slice(), 
                            // Event is fired by tap, true or false
                            tap || false, 
                            // Left offset of the handle, in relation to the slider
                            scope_Locations.slice(), 
                            // add the slider public API to an accessible parameter when this is unavailable
                            scope_Self);
                        });
                    }
                });
            }
            // Split out the handle positioning logic so the Move event can use it, too
            function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
                var distance;
                // For sliders with multiple handles, limit movement to the other handle.
                // Apply the margin option by adding it to the handle positions.
                if (scope_Handles.length > 1 && !options.events.unconstrained) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                        to = Math.max(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                        to = Math.min(to, distance);
                    }
                }
                // The limit option has the opposite effect, limiting handles to a
                // maximum distance from another. Limit must be > 0, as otherwise
                // handles would be unmovable.
                if (scope_Handles.length > 1 && options.limit) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                        to = Math.min(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                        to = Math.max(to, distance);
                    }
                }
                // The padding option keeps the handles a certain distance from the
                // edges of the slider. Padding must be > 0.
                if (options.padding) {
                    if (handleNumber === 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                        to = Math.max(to, distance);
                    }
                    if (handleNumber === scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                        to = Math.min(to, distance);
                    }
                }
                to = scope_Spectrum.getStep(to);
                // Limit percentage to the 0 - 100 range
                to = limit(to);
                // Return false if handle can't move
                if (to === reference[handleNumber] && !getValue) {
                    return false;
                }
                return to;
            }
            // Uses slider orientation to create CSS rules. a = base value;
            function inRuleOrder(v, a) {
                var o = options.ort;
                return (o ? a : v) + ", " + (o ? v : a);
            }
            // Moves handle(s) by a percentage
            // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
            function moveHandles(upward, proposal, locations, handleNumbers, connect) {
                var proposals = locations.slice();
                // Store first handle now, so we still have it in case handleNumbers is reversed
                var firstHandle = handleNumbers[0];
                var b = [!upward, upward];
                var f = [upward, !upward];
                // Copy handleNumbers so we don't change the dataset
                handleNumbers = handleNumbers.slice();
                // Check to see which handle is 'leading'.
                // If that one can't move the second can't either.
                if (upward) {
                    handleNumbers.reverse();
                }
                // Step 1: get the maximum percentage that any of the handles can move
                if (handleNumbers.length > 1) {
                    handleNumbers.forEach(function (handleNumber, o) {
                        var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
                        // Stop if one of the handles can't move.
                        if (to === false) {
                            proposal = 0;
                        }
                        else {
                            proposal = to - proposals[handleNumber];
                            proposals[handleNumber] = to;
                        }
                    });
                }
                // If using one handle, check backward AND forward
                else {
                    b = f = [true];
                }
                var state = false;
                // Step 2: Try to set the handles with the found percentage
                handleNumbers.forEach(function (handleNumber, o) {
                    state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
                });
                // Step 3: If a handle moved, fire events
                if (state) {
                    handleNumbers.forEach(function (handleNumber) {
                        fireEvent("update", handleNumber);
                        fireEvent("slide", handleNumber);
                    });
                    // If target is a connect, then fire drag event
                    if (connect != undefined) {
                        fireEvent("drag", firstHandle);
                    }
                }
            }
            // Takes a base value and an offset. This offset is used for the connect bar size.
            // In the initial design for this feature, the origin element was 1% wide.
            // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
            // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
            function transformDirection(a, b) {
                return options.dir ? 100 - a - b : a;
            }
            // Updates scope_Locations and scope_Values, updates visual state
            function updateHandlePosition(handleNumber, to) {
                // Update locations.
                scope_Locations[handleNumber] = to;
                // Convert the value to the slider stepping/range.
                scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
                var translation = transformDirection(to, 0) - scope_DirOffset;
                var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
                scope_Handles[handleNumber].style[options.transformRule] = translateRule;
                updateConnect(handleNumber);
                updateConnect(handleNumber + 1);
            }
            // Handles before the slider middle are stacked later = higher,
            // Handles after the middle later is lower
            // [[7] [8] .......... | .......... [5] [4]
            function setZindex() {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                    var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                    scope_Handles[handleNumber].style.zIndex = String(zIndex);
                });
            }
            // Test suggested values and apply margin, step.
            // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
            function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
                if (!exactInput) {
                    to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
                }
                if (to === false) {
                    return false;
                }
                updateHandlePosition(handleNumber, to);
                return true;
            }
            // Updates style attribute for connect nodes
            function updateConnect(index) {
                // Skip connects set to false
                if (!scope_Connects[index]) {
                    return;
                }
                var l = 0;
                var h = 100;
                if (index !== 0) {
                    l = scope_Locations[index - 1];
                }
                if (index !== scope_Connects.length - 1) {
                    h = scope_Locations[index];
                }
                // We use two rules:
                // 'translate' to change the left/top offset;
                // 'scale' to change the width of the element;
                // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
                var connectWidth = h - l;
                var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
                var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
                scope_Connects[index].style[options.transformRule] =
                    translateRule + " " + scaleRule;
            }
            // Parses value passed to .set method. Returns current value if not parse-able.
            function resolveToValue(to, handleNumber) {
                // Setting with null indicates an 'ignore'.
                // Inputting 'false' is invalid.
                if (to === null || to === false || to === undefined) {
                    return scope_Locations[handleNumber];
                }
                // If a formatted number was passed, attempt to decode it.
                if (typeof to === "number") {
                    to = String(to);
                }
                to = options.format.from(to);
                if (to !== false) {
                    to = scope_Spectrum.toStepping(to);
                }
                // If parsing the number failed, use the current value.
                if (to === false || isNaN(to)) {
                    return scope_Locations[handleNumber];
                }
                return to;
            }
            // Set the slider value.
            function valueSet(input, fireSetEvent, exactInput) {
                var values = asArray(input);
                var isInit = scope_Locations[0] === undefined;
                // Event fires by default
                fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
                // Animation is optional.
                // Make sure the initial values were set before using animated placement.
                if (options.animate && !isInit) {
                    addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                }
                // First pass, without lookAhead but with lookBackward. Values are set from left to right.
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
                });
                var i = scope_HandleNumbers.length === 1 ? 0 : 1;
                // Spread handles evenly across the slider if the range has no size (min=max)
                if (isInit && scope_Spectrum.hasNoSize()) {
                    exactInput = true;
                    scope_Locations[0] = 0;
                    if (scope_HandleNumbers.length > 1) {
                        var space_1 = 100 / (scope_HandleNumbers.length - 1);
                        scope_HandleNumbers.forEach(function (handleNumber) {
                            scope_Locations[handleNumber] = handleNumber * space_1;
                        });
                    }
                }
                // Secondary passes. Now that all base values are set, apply constraints.
                // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
                for (; i < scope_HandleNumbers.length; ++i) {
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                    });
                }
                setZindex();
                scope_HandleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    // Fire the event only for handles that received a new value, as per #579
                    if (values[handleNumber] !== null && fireSetEvent) {
                        fireEvent("set", handleNumber);
                    }
                });
            }
            // Reset slider to initial values
            function valueReset(fireSetEvent) {
                valueSet(options.start, fireSetEvent);
            }
            // Set value for a single handle
            function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
                // Ensure numeric input
                handleNumber = Number(handleNumber);
                if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                    throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
                }
                // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
                // The exactInput argument can be used to ignore slider stepping (#436)
                setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
                fireEvent("update", handleNumber);
                if (fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            }
            // Get the slider value.
            function valueGet(unencoded) {
                if (unencoded === void 0) {
                    unencoded = false;
                }
                if (unencoded) {
                    // return a copy of the raw values
                    return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
                }
                var values = scope_Values.map(options.format.to);
                // If only one handle is used, return a single value.
                if (values.length === 1) {
                    return values[0];
                }
                return values;
            }
            // Removes classes from the root and empties it.
            function destroy() {
                // remove protected internal listeners
                removeEvent(INTERNAL_EVENT_NS.aria);
                removeEvent(INTERNAL_EVENT_NS.tooltips);
                Object.keys(options.cssClasses).forEach(function (key) {
                    removeClass(scope_Target, options.cssClasses[key]);
                });
                while (scope_Target.firstChild) {
                    scope_Target.removeChild(scope_Target.firstChild);
                }
                delete scope_Target.noUiSlider;
            }
            function getNextStepsForHandle(handleNumber) {
                var location = scope_Locations[handleNumber];
                var nearbySteps = scope_Spectrum.getNearbySteps(location);
                var value = scope_Values[handleNumber];
                var increment = nearbySteps.thisStep.step;
                var decrement = null;
                // If snapped, directly use defined step value
                if (options.snap) {
                    return [
                        value - nearbySteps.stepBefore.startValue || null,
                        nearbySteps.stepAfter.startValue - value || null
                    ];
                }
                // If the next value in this step moves into the next step,
                // the increment is the start of the next step - the current value
                if (increment !== false) {
                    if (value + increment > nearbySteps.stepAfter.startValue) {
                        increment = nearbySteps.stepAfter.startValue - value;
                    }
                }
                // If the value is beyond the starting point
                if (value > nearbySteps.thisStep.startValue) {
                    decrement = nearbySteps.thisStep.step;
                }
                else if (nearbySteps.stepBefore.step === false) {
                    decrement = false;
                }
                // If a handle is at the start of a step, it always steps back into the previous step first
                else {
                    decrement = value - nearbySteps.stepBefore.highestStep;
                }
                // Now, if at the slider edges, there is no in/decrement
                if (location === 100) {
                    increment = null;
                }
                else if (location === 0) {
                    decrement = null;
                }
                // As per #391, the comparison for the decrement step can have some rounding issues.
                var stepDecimals = scope_Spectrum.countStepDecimals();
                // Round per #391
                if (increment !== null && increment !== false) {
                    increment = Number(increment.toFixed(stepDecimals));
                }
                if (decrement !== null && decrement !== false) {
                    decrement = Number(decrement.toFixed(stepDecimals));
                }
                return [decrement, increment];
            }
            // Get the current step size for the slider.
            function getNextSteps() {
                return scope_HandleNumbers.map(getNextStepsForHandle);
            }
            // Updatable: margin, limit, padding, step, range, animate, snap
            function updateOptions(optionsToUpdate, fireSetEvent) {
                // Spectrum is created using the range, snap, direction and step options.
                // 'snap' and 'step' can be updated.
                // If 'snap' and 'step' are not passed, they should remain unchanged.
                var v = valueGet();
                var updateAble = [
                    "margin",
                    "limit",
                    "padding",
                    "range",
                    "animate",
                    "snap",
                    "step",
                    "format",
                    "pips",
                    "tooltips"
                ];
                // Only change options that we're actually passed to update.
                updateAble.forEach(function (name) {
                    // Check for undefined. null removes the value.
                    if (optionsToUpdate[name] !== undefined) {
                        originalOptions[name] = optionsToUpdate[name];
                    }
                });
                var newOptions = testOptions(originalOptions);
                // Load new options into the slider state
                updateAble.forEach(function (name) {
                    if (optionsToUpdate[name] !== undefined) {
                        options[name] = newOptions[name];
                    }
                });
                scope_Spectrum = newOptions.spectrum;
                // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
                options.margin = newOptions.margin;
                options.limit = newOptions.limit;
                options.padding = newOptions.padding;
                // Update pips, removes existing.
                if (options.pips) {
                    pips(options.pips);
                }
                else {
                    removePips();
                }
                // Update tooltips, removes existing.
                if (options.tooltips) {
                    tooltips();
                }
                else {
                    removeTooltips();
                }
                // Invalidate the current positioning so valueSet forces an update.
                scope_Locations = [];
                valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
            }
            // Initialization steps
            function setupSlider() {
                // Create the base element, initialize HTML and set classes.
                // Add handles and connect elements.
                scope_Base = addSlider(scope_Target);
                addElements(options.connect, scope_Base);
                // Attach user events.
                bindSliderEvents(options.events);
                // Use the public value method to set the start values.
                valueSet(options.start);
                if (options.pips) {
                    pips(options.pips);
                }
                if (options.tooltips) {
                    tooltips();
                }
                aria();
            }
            setupSlider();
            var scope_Self = {
                destroy: destroy,
                steps: getNextSteps,
                on: bindEvent,
                off: removeEvent,
                get: valueGet,
                set: valueSet,
                setHandle: valueSetHandle,
                reset: valueReset,
                // Exposed for unit testing, don't use this in your application.
                __moveHandles: function (upward, proposal, handleNumbers) {
                    moveHandles(upward, proposal, scope_Locations, handleNumbers);
                },
                options: originalOptions,
                updateOptions: updateOptions,
                target: scope_Target,
                removePips: removePips,
                removeTooltips: removeTooltips,
                getPositions: function () {
                    return scope_Locations.slice();
                },
                getTooltips: function () {
                    return scope_Tooltips;
                },
                getOrigins: function () {
                    return scope_Handles;
                },
                pips: pips // Issue #594
            };
            return scope_Self;
        }
        // Run the standard initializer
        function initialize(target, originalOptions) {
            if (!target || !target.nodeName) {
                throw new Error("noUiSlider: create requires a single element, got: " + target);
            }
            // Throw an error if the slider was already initialized.
            if (target.noUiSlider) {
                throw new Error("noUiSlider: Slider was already initialized.");
            }
            // Test the options and create the slider environment;
            var options = testOptions(originalOptions);
            var api = scope(target, options, originalOptions);
            target.noUiSlider = api;
            return api;
        }
        var nouislider = {
            // Exposed for unit testing, don't use this in your application.
            __spectrum: Spectrum,
            // A reference to the default classes, allows global changes.
            // Use the cssClasses option for changes to one slider.
            cssClasses: cssClasses,
            create: initialize
        };
        exports.create = initialize;
        exports.cssClasses = cssClasses;
        exports['default'] = nouislider;
        Object.defineProperty(exports, '__esModule', { value: true });
    })));
},
490: /* styles/widgets/sliders.css.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    exports.slider_title = "bk-slider-title";
    exports.slider_value = "bk-slider-value";
    exports.default = `.bk-slider-title{white-space:nowrap;}.bk-slider-value{font-weight:600;}`;
},
491: /* styles/widgets/nouislider.css.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    exports.default = `.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-moz-box-sizing:border-box;box-sizing:border-box;}.noUi-target{position:relative;}.noUi-base,.noUi-connects{width:100%;height:100%;position:relative;z-index:1;}.noUi-connects{overflow:hidden;z-index:0;}.noUi-connect,.noUi-origin{will-change:transform;position:absolute;z-index:1;top:0;right:0;height:100%;width:100%;-ms-transform-origin:0 0;-webkit-transform-origin:0 0;-webkit-transform-style:preserve-3d;transform-origin:0 0;transform-style:flat;}.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin{left:0;right:auto;}.noUi-vertical .noUi-origin{top:-100%;width:0;}.noUi-horizontal .noUi-origin{height:0;}.noUi-handle{-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;}.noUi-touch-area{height:100%;width:100%;}.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin{-webkit-transition:transform 0.3s;transition:transform 0.3s;}.noUi-state-drag *{cursor:inherit !important;}.noUi-horizontal{height:18px;}.noUi-horizontal .noUi-handle{width:34px;height:28px;right:-17px;top:-6px;}.noUi-vertical{width:18px;}.noUi-vertical .noUi-handle{width:28px;height:34px;right:-6px;bottom:-17px;}.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle{left:-17px;right:auto;}.noUi-target{background:#FAFAFA;border-radius:4px;border:1px solid #D3D3D3;box-shadow:inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;}.noUi-connects{border-radius:3px;}.noUi-connect{background:#3FB8AF;}.noUi-draggable{cursor:ew-resize;}.noUi-vertical .noUi-draggable{cursor:ns-resize;}.noUi-handle{border:1px solid #D9D9D9;border-radius:3px;background:#FFF;cursor:default;box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;}.noUi-active{box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;}.noUi-handle:before,.noUi-handle:after{content:"";display:block;position:absolute;height:14px;width:1px;background:#E8E7E6;left:14px;top:6px;}.noUi-handle:after{left:17px;}.noUi-vertical .noUi-handle:before,.noUi-vertical .noUi-handle:after{width:14px;height:1px;left:6px;top:14px;}.noUi-vertical .noUi-handle:after{top:17px;}[disabled] .noUi-connect{background:#B8B8B8;}[disabled].noUi-target,[disabled].noUi-handle,[disabled] .noUi-handle{cursor:not-allowed;}.noUi-pips,.noUi-pips *{-moz-box-sizing:border-box;box-sizing:border-box;}.noUi-pips{position:absolute;color:#999;}.noUi-value{position:absolute;white-space:nowrap;text-align:center;}.noUi-value-sub{color:#ccc;font-size:10px;}.noUi-marker{position:absolute;background:#CCC;}.noUi-marker-sub{background:#AAA;}.noUi-marker-large{background:#AAA;}.noUi-pips-horizontal{padding:10px 0;height:80px;top:100%;left:0;width:100%;}.noUi-value-horizontal{-webkit-transform:translate(-50%, 50%);transform:translate(-50%, 50%);}.noUi-rtl .noUi-value-horizontal{-webkit-transform:translate(50%, 50%);transform:translate(50%, 50%);}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:2px;height:5px;}.noUi-marker-horizontal.noUi-marker-sub{height:10px;}.noUi-marker-horizontal.noUi-marker-large{height:15px;}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%;}.noUi-value-vertical{-webkit-transform:translate(0, -50%);transform:translate(0, -50%);padding-left:25px;}.noUi-rtl .noUi-value-vertical{-webkit-transform:translate(0, 50%);transform:translate(0, 50%);}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px;}.noUi-marker-vertical.noUi-marker-sub{width:10px;}.noUi-marker-vertical.noUi-marker-large{width:15px;}.noUi-tooltip{display:block;position:absolute;border:1px solid #D9D9D9;border-radius:3px;background:#fff;color:#000;padding:5px;text-align:center;white-space:nowrap;}.noUi-horizontal .noUi-tooltip{-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);left:50%;bottom:120%;}.noUi-vertical .noUi-tooltip{-webkit-transform:translate(0, -50%);transform:translate(0, -50%);top:50%;right:120%;}.noUi-horizontal .noUi-origin > .noUi-tooltip{-webkit-transform:translate(50%, 0);transform:translate(50%, 0);left:auto;bottom:10px;}.noUi-vertical .noUi-origin > .noUi-tooltip{-webkit-transform:translate(0, -18px);transform:translate(0, -18px);top:auto;right:28px;}.noUi-handle{cursor:grab;cursor:-webkit-grab;}.noUi-handle.noUi-active{cursor:grabbing;cursor:-webkit-grabbing;}.noUi-handle:after,.noUi-handle:before{display:none;}.noUi-tooltip{display:none;white-space:nowrap;}.noUi-handle:hover .noUi-tooltip{display:block;}.noUi-horizontal{width:100%;height:10px;}.noUi-vertical{width:10px;height:100%;}.noUi-horizontal .noUi-handle{width:14px;height:18px;right:-7px;top:-5px;}.noUi-vertical .noUi-handle{width:18px;height:14px;right:-5px;top:-7px;}.noUi-target.noUi-horizontal{margin:5px 0px;}.noUi-target.noUi-vertical{margin:0px 5px;}`;
},
492: /* models/widgets/date_slider.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const timezone_1 = (0, tslib_1.__importDefault)(require(150) /* timezone */);
    const abstract_slider_1 = require(488) /* ./abstract_slider */;
    const types_1 = require(8) /* ../../core/util/types */;
    class DateSliderView extends abstract_slider_1.AbstractSliderView {
    }
    exports.DateSliderView = DateSliderView;
    DateSliderView.__name__ = "DateSliderView";
    class DateSlider extends abstract_slider_1.AbstractSlider {
        constructor(attrs) {
            super(attrs);
            this.behaviour = "tap";
            this.connected = [true, false];
        }
        _formatter(value, format) {
            if ((0, types_1.isString)(format))
                return (0, timezone_1.default)(value, format);
            else
                return format.compute(value);
        }
    }
    exports.DateSlider = DateSlider;
    _a = DateSlider;
    DateSlider.__name__ = "DateSlider";
    (() => {
        _a.prototype.default_view = DateSliderView;
        _a.override({
            format: "%d %b %Y",
        });
    })();
},
493: /* models/widgets/div.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var _a;
    const markup_1 = require(494) /* ./markup */;
    class DivView extends markup_1.MarkupView {
        render() {
            super.render();
            if (this.model.render_as_text)
                this.markup_el.textContent = this.model.text;
            else
                this.markup_el.innerHTML = this.has_math_disabled() ? this.model.text : this.process_tex(this.model.text);
        }
    }
    exports.DivView = DivView;
    DivView.__name__ = "DivView";
    class Div extends markup_1.Markup {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.Div = Div;
    _a = Div;
    Div.__name__ = "Div";
    (() => {
        _a.prototype.default_view = DivView;
        _a.define(({ Boolean }) => ({
            render_as_text: [Boolean, false],
        }));
    })();
},
494: /* models/widgets/markup.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const html_1 = require(210) /* ../../core/layout/html */;
    const dom_1 = require(211) /* ../../core/dom */;
    const widget_1 = require(538) /* ./widget */;
    const clearfix_css_1 = (0, tslib_1.__importStar)(require(495) /* ../../styles/clearfix.css */);
    class MarkupView extends widget_1.WidgetView {
        async lazy_initialize() {
            await super.lazy_initialize();
            if (this.provider.status == "not_started" || this.provider.status == "loading")
                this.provider.ready.connect(() => {
                    if (this.contains_tex_string(this.model.text))
                        this.rerender();
                });
        }
        has_math_disabled() {
            return this.model.disable_math || !this.contains_tex_string(this.model.text);
        }
        rerender() {
            this.layout.invalidate_cache();
            this.render();
            this.root.compute_layout(); // XXX: invalidate_layout?
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.change, () => {
                this.rerender();
            });
        }
        styles() {
            return [...super.styles(), clearfix_css_1.default, "p { margin: 0; }"];
        }
        _update_layout() {
            this.layout = new html_1.CachedVariadicBox(this.el);
            this.layout.set_sizing(this.box_sizing());
        }
        render() {
            super.render();
            const style = Object.assign(Object.assign({}, this.model.style), { display: "inline-block" });
            this.markup_el = (0, dom_1.div)({ class: clearfix_css_1.clearfix, style });
            this.shadow_el.appendChild(this.markup_el);
            if (this.provider.status == "failed" || this.provider.status == "loaded")
                this._has_finished = true;
        }
    }
    exports.MarkupView = MarkupView;
    MarkupView.__name__ = "MarkupView";
    class Markup extends widget_1.Widget {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.Markup = Markup;
    _a = Markup;
    Markup.__name__ = "Markup";
    (() => {
        _a.define(({ Boolean, String, Dict }) => ({
            text: [String, ""],
            style: [Dict(String), {}],
            disable_math: [Boolean, false],
        }));
    })();
},
495: /* styles/clearfix.css.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    exports.clearfix = "bk-clearfix";
    exports.default = `.bk-clearfix:before,.bk-clearfix:after{content:"";display:table;}.bk-clearfix:after{clear:both;}`;
},
496: /* models/widgets/dropdown.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const abstract_button_1 = require(460) /* ./abstract_button */;
    const bokeh_events_1 = require(258) /* ../../core/bokeh_events */;
    const dom_1 = require(211) /* ../../core/dom */;
    const types_1 = require(8) /* ../../core/util/types */;
    const buttons = (0, tslib_1.__importStar)(require(325) /* ../../styles/buttons.css */);
    const dropdown_css_1 = (0, tslib_1.__importStar)(require(469) /* ../../styles/dropdown.css */), dropdown = dropdown_css_1;
    const caret_css_1 = (0, tslib_1.__importStar)(require(326) /* ../../styles/caret.css */), carets = caret_css_1;
    class DropdownView extends abstract_button_1.AbstractButtonView {
        constructor() {
            super(...arguments);
            this._open = false;
        }
        styles() {
            return [...super.styles(), dropdown_css_1.default, caret_css_1.default];
        }
        render() {
            super.render();
            const caret = (0, dom_1.div)({ class: [carets.caret, carets.down] });
            if (!this.model.is_split)
                this.button_el.appendChild(caret);
            else {
                const toggle = this._render_button(caret);
                toggle.classList.add(buttons.dropdown_toggle);
                toggle.addEventListener("click", () => this._toggle_menu());
                this.group_el.appendChild(toggle);
            }
            const items = this.model.menu.map((item, i) => {
                if (item == null)
                    return (0, dom_1.div)({ class: dropdown.divider });
                else {
                    const label = (0, types_1.isString)(item) ? item : item[0];
                    const el = (0, dom_1.div)(label);
                    el.addEventListener("click", () => this._item_click(i));
                    return el;
                }
            });
            this.menu = (0, dom_1.div)({ class: [dropdown.menu, dropdown.below] }, items);
            this.shadow_el.appendChild(this.menu);
            (0, dom_1.undisplay)(this.menu);
        }
        _show_menu() {
            if (!this._open) {
                this._open = true;
                (0, dom_1.display)(this.menu);
                const listener = (event) => {
                    if (!event.composedPath().includes(this.el)) {
                        document.removeEventListener("click", listener);
                        this._hide_menu();
                    }
                };
                document.addEventListener("click", listener);
            }
        }
        _hide_menu() {
            if (this._open) {
                this._open = false;
                (0, dom_1.undisplay)(this.menu);
            }
        }
        _toggle_menu() {
            if (this._open)
                this._hide_menu();
            else
                this._show_menu();
        }
        click() {
            if (!this.model.is_split)
                this._toggle_menu();
            else {
                this._hide_menu();
                this.model.trigger_event(new bokeh_events_1.ButtonClick());
                super.click();
            }
        }
        _item_click(i) {
            this._hide_menu();
            const item = this.model.menu[i];
            if (item != null) {
                const value_or_callback = (0, types_1.isString)(item) ? item : item[1];
                if ((0, types_1.isString)(value_or_callback)) {
                    this.model.trigger_event(new bokeh_events_1.MenuItemClick(value_or_callback));
                }
                else {
                    value_or_callback.execute(this.model, { index: i }); // TODO
                }
            }
        }
    }
    exports.DropdownView = DropdownView;
    DropdownView.__name__ = "DropdownView";
    class Dropdown extends abstract_button_1.AbstractButton {
        constructor(attrs) {
            super(attrs);
        }
        get is_split() {
            return this.split;
        }
    }
    exports.Dropdown = Dropdown;
    _a = Dropdown;
    Dropdown.__name__ = "Dropdown";
    (() => {
        _a.prototype.default_view = DropdownView;
        _a.define(({ Null, Boolean, String, Array, Tuple, Or }) => ({
            split: [Boolean, false],
            menu: [Array(Or(String, Tuple(String, Or(String)), Null)), []],
        }));
        _a.override({
            label: "Dropdown",
        });
    })();
},
497: /* models/widgets/file_input.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const dom_1 = require(211) /* ../../core/dom */;
    const widget_1 = require(538) /* ./widget */;
    const inputs_css_1 = (0, tslib_1.__importDefault)(require(468) /* ../../styles/widgets/inputs.css */);
    class FileInputView extends widget_1.WidgetView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.change, () => this.render());
        }
        styles() {
            return [...super.styles(), inputs_css_1.default];
        }
        render() {
            const { multiple, accept, disabled, width } = this.model;
            if (this.dialog_el == null) {
                this.dialog_el = (0, dom_1.input)({ type: "file", multiple });
                this.dialog_el.onchange = () => {
                    var _b;
                    const files = (_b = this.dialog_el) === null || _b === void 0 ? void 0 : _b.files;
                    if (files != null) {
                        this.load_files(files);
                    }
                };
                this.shadow_el.appendChild(this.dialog_el);
            }
            if (accept != "") {
                this.dialog_el.accept = accept;
            }
            this.dialog_el.style.width = `${width}px`;
            this.dialog_el.disabled = disabled;
        }
        async load_files(files) {
            const values = [];
            const filenames = [];
            const mime_types = [];
            for (const file of files) {
                const data_url = await this._read_file(file);
                const [, mime_type = "", , value = ""] = data_url.split(/[:;,]/, 4);
                values.push(value);
                filenames.push(file.name);
                mime_types.push(mime_type);
            }
            if (this.model.multiple)
                this.model.setv({ value: values, filename: filenames, mime_type: mime_types });
            else
                this.model.setv({ value: values[0], filename: filenames[0], mime_type: mime_types[0] });
        }
        _read_file(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    var _b;
                    const { result } = reader;
                    if (result != null) {
                        resolve(result);
                    }
                    else {
                        reject((_b = reader.error) !== null && _b !== void 0 ? _b : new Error(`unable to read '${file.name}'`));
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    }
    exports.FileInputView = FileInputView;
    FileInputView.__name__ = "FileInputView";
    class FileInput extends widget_1.Widget {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.FileInput = FileInput;
    _a = FileInput;
    FileInput.__name__ = "FileInput";
    (() => {
        _a.prototype.default_view = FileInputView;
        _a.define(({ Boolean, String, Array, Or }) => ({
            value: [Or(String, Array(String)), ""],
            mime_type: [Or(String, Array(String)), ""],
            filename: [Or(String, Array(String)), ""],
            accept: [String, ""],
            multiple: [Boolean, false],
        }));
    })();
},
498: /* models/widgets/multiselect.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const dom_1 = require(211) /* ../../core/dom */;
    const types_1 = require(8) /* ../../core/util/types */;
    const input_widget_1 = require(467) /* ./input_widget */;
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    class MultiSelectView extends input_widget_1.InputWidgetView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.value.change, () => this.render_selection());
            this.connect(this.model.properties.options.change, () => this.render());
            this.connect(this.model.properties.name.change, () => this.render());
            this.connect(this.model.properties.title.change, () => this.render());
            this.connect(this.model.properties.size.change, () => this.render());
            this.connect(this.model.properties.disabled.change, () => this.render());
        }
        render() {
            super.render();
            const options = this.model.options.map((opt) => {
                let value, _label;
                if ((0, types_1.isString)(opt))
                    value = _label = opt;
                else
                    [value, _label] = opt;
                return (0, dom_1.option)({ value }, _label);
            });
            this.input_el = (0, dom_1.select)({
                multiple: true,
                class: inputs.input,
                name: this.model.name,
                disabled: this.model.disabled,
            }, options);
            this.input_el.addEventListener("change", () => this.change_input());
            this.group_el.appendChild(this.input_el);
            this.render_selection();
        }
        render_selection() {
            const selected = new Set(this.model.value);
            for (const el of this.shadow_el.querySelectorAll("option"))
                el.selected = selected.has(el.value);
            // Note that some browser implementations might not reduce
            // the number of visible options for size <= 3.
            this.input_el.size = this.model.size;
        }
        change_input() {
            const is_focused = this.shadow_el.querySelector("select:focus") != null;
            const values = [];
            for (const el of this.shadow_el.querySelectorAll("option")) {
                if (el.selected)
                    values.push(el.value);
            }
            this.model.value = values;
            super.change_input();
            // Restore focus back to the <select> afterwards,
            // so that even if python on_change callback is invoked,
            // focus remains on <select> and one can seamlessly scroll
            // up/down.
            if (is_focused)
                this.input_el.focus();
        }
    }
    exports.MultiSelectView = MultiSelectView;
    MultiSelectView.__name__ = "MultiSelectView";
    class MultiSelect extends input_widget_1.InputWidget {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.MultiSelect = MultiSelect;
    _a = MultiSelect;
    MultiSelect.__name__ = "MultiSelect";
    (() => {
        _a.prototype.default_view = MultiSelectView;
        _a.define(({ Int, String, Array, Tuple, Or }) => ({
            value: [Array(String), []],
            options: [Array(Or(String, Tuple(String, String))), []],
            size: [Int, 4], // 4 is the HTML default
        }));
    })();
},
499: /* models/widgets/paragraph.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var _a;
    const markup_1 = require(494) /* ./markup */;
    const dom_1 = require(211) /* ../../core/dom */;
    class ParagraphView extends markup_1.MarkupView {
        render() {
            super.render();
            // This overrides default user-agent styling and helps layout work
            const content = (0, dom_1.p)({ style: { margin: 0 } });
            if (this.has_math_disabled())
                content.textContent = this.model.text;
            else
                content.innerHTML = this.process_tex(this.model.text);
            this.markup_el.appendChild(content);
        }
    }
    exports.ParagraphView = ParagraphView;
    ParagraphView.__name__ = "ParagraphView";
    class Paragraph extends markup_1.Markup {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.Paragraph = Paragraph;
    _a = Paragraph;
    Paragraph.__name__ = "Paragraph";
    (() => {
        _a.prototype.default_view = ParagraphView;
    })();
},
500: /* models/widgets/password_input.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var _a;
    const text_input_1 = require(465) /* ./text_input */;
    class PasswordInputView extends text_input_1.TextInputView {
        render() {
            super.render();
            this.input_el.type = "password";
        }
    }
    exports.PasswordInputView = PasswordInputView;
    PasswordInputView.__name__ = "PasswordInputView";
    class PasswordInput extends text_input_1.TextInput {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.PasswordInput = PasswordInput;
    _a = PasswordInput;
    PasswordInput.__name__ = "PasswordInput";
    (() => {
        _a.prototype.default_view = PasswordInputView;
    })();
},
501: /* models/widgets/multichoice.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const choices_js_1 = (0, tslib_1.__importDefault)(require(502) /* choices.js */);
    const dom_1 = require(211) /* ../../core/dom */;
    const types_1 = require(8) /* ../../core/util/types */;
    const html_1 = require(210) /* ../../core/layout/html */;
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    const choices_css_1 = (0, tslib_1.__importDefault)(require(503) /* ../../styles/widgets/choices.css */);
    const input_widget_1 = require(467) /* ./input_widget */;
    class MultiChoiceView extends input_widget_1.InputWidgetView {
        constructor() {
            super(...arguments);
            this._last_height = null;
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.disabled.change, () => this.set_disabled());
            const { value, max_items, option_limit, search_option_limit, delete_button, placeholder, options, name, title } = this.model.properties;
            this.on_change([value, max_items, option_limit, search_option_limit, delete_button, placeholder, options, name, title], () => this.render());
        }
        styles() {
            return [...super.styles(), choices_css_1.default];
        }
        _update_layout() {
            this.layout = new html_1.CachedVariadicBox(this.el);
            this.layout.set_sizing(this.box_sizing());
        }
        render() {
            super.render();
            this.input_el = (0, dom_1.select)({
                multiple: true,
                class: inputs.input,
                name: this.model.name,
                disabled: this.model.disabled,
            });
            this.group_el.appendChild(this.input_el);
            const selected = new Set(this.model.value);
            const choices = this.model.options.map((opt) => {
                let value, label;
                if ((0, types_1.isString)(opt))
                    value = label = opt;
                else
                    [value, label] = opt;
                return { value, label, selected: selected.has(value) };
            });
            const fill = this.model.solid ? "solid" : "light";
            const item = `choices__item ${fill}`;
            const button = `choices__button ${fill}`;
            const options = {
                choices,
                duplicateItemsAllowed: false,
                shouldSort: false,
                removeItemButton: this.model.delete_button,
                classNames: { item, button }, // XXX: bad typings, missing Partial<>
            };
            if (this.model.placeholder != null)
                options.placeholderValue = this.model.placeholder;
            if (this.model.max_items != null)
                options.maxItemCount = this.model.max_items;
            if (this.model.option_limit != null)
                options.renderChoiceLimit = this.model.option_limit;
            if (this.model.search_option_limit != null)
                options.searchResultLimit = this.model.search_option_limit;
            this.choice_el = new choices_js_1.default(this.input_el, options);
            const height = () => this.choice_el.containerOuter.element.getBoundingClientRect().height;
            if (this._last_height != null && this._last_height != height()) {
                this.root.invalidate_layout();
            }
            this._last_height = height();
            this.input_el.addEventListener("change", () => this.change_input());
        }
        set_disabled() {
            if (this.model.disabled)
                this.choice_el.disable();
            else
                this.choice_el.enable();
        }
        change_input() {
            const is_focused = this.shadow_el.querySelector("select:focus") != null;
            const values = [];
            for (const el of this.shadow_el.querySelectorAll("option")) {
                if (el.selected)
                    values.push(el.value);
            }
            this.model.value = values;
            super.change_input();
            // Restore focus back to the <select> afterwards,
            // so that even if python on_change callback is invoked,
            // focus remains on <select> and one can seamlessly scroll
            // up/down.
            if (is_focused)
                this.input_el.focus();
        }
    }
    exports.MultiChoiceView = MultiChoiceView;
    MultiChoiceView.__name__ = "MultiChoiceView";
    class MultiChoice extends input_widget_1.InputWidget {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.MultiChoice = MultiChoice;
    _a = MultiChoice;
    MultiChoice.__name__ = "MultiChoice";
    (() => {
        _a.prototype.default_view = MultiChoiceView;
        _a.define(({ Boolean, Int, String, Array, Tuple, Or, Nullable }) => ({
            value: [Array(String), []],
            options: [Array(Or(String, Tuple(String, String))), []],
            max_items: [Nullable(Int), null],
            delete_button: [Boolean, true],
            placeholder: [Nullable(String), null],
            option_limit: [Nullable(Int), null],
            search_option_limit: [Nullable(Int), null],
            solid: [Boolean, true],
        }));
    })();
},
502: /* choices.js/public/assets/scripts/choices.js */ function _(require, module, exports, __esModule, __esExport) {
    /*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
    (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === 'object' && typeof module === 'object')
            module.exports = factory();
        else if (typeof define === 'function' && define.amd)
            define([], factory);
        else if (typeof exports === 'object')
            exports["Choices"] = factory();
        else
            root["Choices"] = factory();
    })(window, function () {
        return /******/ (function (modules) {
            /******/ // The module cache
            /******/ var installedModules = {};
            /******/
            /******/ // The require function
            /******/ function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/ if (installedModules[moduleId]) {
                    /******/ return installedModules[moduleId].exports;
                    /******/ }
                /******/ // Create a new module (and put it into the cache)
                /******/ var module = installedModules[moduleId] = {
                    /******/ i: moduleId,
                    /******/ l: false,
                    /******/ exports: {}
                    /******/ 
                };
                /******/
                /******/ // Execute the module function
                /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/ module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/ return module.exports;
                /******/ 
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/ __webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/ __webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/ __webpack_require__.d = function (exports, name, getter) {
                /******/ if (!__webpack_require__.o(exports, name)) {
                    /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/ }
                /******/ 
            };
            /******/
            /******/ // define __esModule on exports
            /******/ __webpack_require__.r = function (exports) {
                /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/ }
                /******/ Object.defineProperty(exports, '__esModule', { value: true });
                /******/ 
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/ __webpack_require__.t = function (value, mode) {
                /******/ if (mode & 1)
                    value = __webpack_require__(value);
                /******/ if (mode & 8)
                    return value;
                /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                    return value;
                /******/ var ns = Object.create(null);
                /******/ __webpack_require__.r(ns);
                /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/ if (mode & 2 && typeof value != 'string')
                    for (var key in value)
                        __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
                /******/ return ns;
                /******/ 
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/ __webpack_require__.n = function (module) {
                /******/ var getter = module && module.__esModule ?
                    /******/ function getDefault() { return module['default']; } :
                    /******/ function getModuleExports() { return module; };
                /******/ __webpack_require__.d(getter, 'a', getter);
                /******/ return getter;
                /******/ 
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
            /******/
            /******/ // __webpack_public_path__
            /******/ __webpack_require__.p = "/public/assets/scripts/";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/ return __webpack_require__(__webpack_require__.s = 4);
            /******/ 
        })([
            /* 0 */
            /***/ (function (module, exports, __webpack_require__) {
                "use strict";
                var isMergeableObject = function isMergeableObject(value) {
                    return isNonNullObject(value)
                        && !isSpecial(value);
                };
                function isNonNullObject(value) {
                    return !!value && typeof value === 'object';
                }
                function isSpecial(value) {
                    var stringValue = Object.prototype.toString.call(value);
                    return stringValue === '[object RegExp]'
                        || stringValue === '[object Date]'
                        || isReactElement(value);
                }
                // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
                var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
                var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
                function isReactElement(value) {
                    return value.$$typeof === REACT_ELEMENT_TYPE;
                }
                function emptyTarget(val) {
                    return Array.isArray(val) ? [] : {};
                }
                function cloneUnlessOtherwiseSpecified(value, options) {
                    return (options.clone !== false && options.isMergeableObject(value))
                        ? deepmerge(emptyTarget(value), value, options)
                        : value;
                }
                function defaultArrayMerge(target, source, options) {
                    return target.concat(source).map(function (element) {
                        return cloneUnlessOtherwiseSpecified(element, options);
                    });
                }
                function getMergeFunction(key, options) {
                    if (!options.customMerge) {
                        return deepmerge;
                    }
                    var customMerge = options.customMerge(key);
                    return typeof customMerge === 'function' ? customMerge : deepmerge;
                }
                function getEnumerableOwnPropertySymbols(target) {
                    return Object.getOwnPropertySymbols
                        ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
                            return target.propertyIsEnumerable(symbol);
                        })
                        : [];
                }
                function getKeys(target) {
                    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
                }
                // Protects from prototype poisoning and unexpected merging up the prototype chain.
                function propertyIsUnsafe(target, key) {
                    try {
                        return (key in target) // Properties are safe to merge if they don't exist in the target yet,
                            && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
                                && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
                    }
                    catch (unused) {
                        // Counterintuitively, it's safe to merge any property on a target that causes the `in` operator to throw.
                        // This happens when trying to copy an object in the source over a plain string in the target.
                        return false;
                    }
                }
                function mergeObject(target, source, options) {
                    var destination = {};
                    if (options.isMergeableObject(target)) {
                        getKeys(target).forEach(function (key) {
                            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                        });
                    }
                    getKeys(source).forEach(function (key) {
                        if (propertyIsUnsafe(target, key)) {
                            return;
                        }
                        if (!options.isMergeableObject(source[key]) || !target[key]) {
                            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                        }
                        else {
                            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                        }
                    });
                    return destination;
                }
                function deepmerge(target, source, options) {
                    options = options || {};
                    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
                    // implementations can use it. The caller may not replace it.
                    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                    var sourceIsArray = Array.isArray(source);
                    var targetIsArray = Array.isArray(target);
                    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                    if (!sourceAndTargetTypesMatch) {
                        return cloneUnlessOtherwiseSpecified(source, options);
                    }
                    else if (sourceIsArray) {
                        return options.arrayMerge(target, source, options);
                    }
                    else {
                        return mergeObject(target, source, options);
                    }
                }
                deepmerge.all = function deepmergeAll(array, options) {
                    if (!Array.isArray(array)) {
                        throw new Error('first argument should be an array');
                    }
                    return array.reduce(function (prev, next) {
                        return deepmerge(prev, next, options);
                    }, {});
                };
                var deepmerge_1 = deepmerge;
                module.exports = deepmerge_1;
                /***/ 
            }),
            /* 1 */
            /***/ (function (module, __webpack_exports__, __webpack_require__) {
                "use strict";
                /* WEBPACK VAR INJECTION */ (function (global, module) {
                    var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
                    /* global window */
                    var root;
                    if (typeof self !== 'undefined') {
                        root = self;
                    }
                    else if (typeof window !== 'undefined') {
                        root = window;
                    }
                    else if (typeof global !== 'undefined') {
                        root = global;
                    }
                    else if (true) {
                        root = module;
                    }
                    else { }
                    var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[ /* default */"a"])(root);
                    /* harmony default export */ __webpack_exports__["a"] = (result);
                    /* WEBPACK VAR INJECTION */ 
                }.call(this, __webpack_require__(5), __webpack_require__(6)(module)));
                /***/ 
            }),
            /* 2 */
            /***/ (function (module, exports, __webpack_require__) {
                /*!
                 * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
                 *
                 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
                 * All Rights Reserved. Apache Software License 2.0
                 *
                 * http://www.apache.org/licenses/LICENSE-2.0
                 */
                !function (e, t) { true ? module.exports = t() : undefined; }(this, function () { return function (e) { var t = {}; function n(r) { if (t[r])
                    return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports; } return n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }); }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t)
                    return e; if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                    for (var o in e)
                        n.d(r, o, function (t) { return e[t]; }.bind(null, o)); return r; }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(t, "a", t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = "", n(n.s = 1); }([function (e, t) { e.exports = function (e) { return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e); }; }, function (e, t, n) { function r(e) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; })(e); } function o(e, t) { for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    } } var i = n(2), a = n(8), s = n(0), c = function () { function e(t, n) { var r = n.location, o = void 0 === r ? 0 : r, i = n.distance, s = void 0 === i ? 100 : i, c = n.threshold, h = void 0 === c ? .6 : c, l = n.maxPatternLength, u = void 0 === l ? 32 : l, f = n.caseSensitive, d = void 0 !== f && f, v = n.tokenSeparator, p = void 0 === v ? / +/g : v, g = n.findAllMatches, y = void 0 !== g && g, m = n.minMatchCharLength, k = void 0 === m ? 1 : m, S = n.id, x = void 0 === S ? null : S, b = n.keys, M = void 0 === b ? [] : b, _ = n.shouldSort, L = void 0 === _ || _, w = n.getFn, A = void 0 === w ? a : w, C = n.sortFn, I = void 0 === C ? function (e, t) { return e.score - t.score; } : C, O = n.tokenize, j = void 0 !== O && O, P = n.matchAllTokens, F = void 0 !== P && P, T = n.includeMatches, z = void 0 !== T && T, E = n.includeScore, K = void 0 !== E && E, $ = n.verbose, J = void 0 !== $ && $; !function (e, t) { if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function"); }(this, e), this.options = { location: o, distance: s, threshold: h, maxPatternLength: u, isCaseSensitive: d, tokenSeparator: p, findAllMatches: y, minMatchCharLength: k, id: x, keys: M, includeMatches: z, includeScore: K, shouldSort: L, getFn: A, sortFn: I, verbose: J, tokenize: j, matchAllTokens: F }, this.setCollection(t); } var t, n, c; return t = e, (n = [{ key: "setCollection", value: function (e) { return this.list = e, e; } }, { key: "search", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: !1 }; this._log('---------\nSearch pattern: "'.concat(e, '"')); var n = this._prepareSearchers(e), r = n.tokenSearchers, o = n.fullSearcher, i = this._search(r, o), a = i.weights, s = i.results; return this._computeScore(a, s), this.options.shouldSort && this._sort(s), t.limit && "number" == typeof t.limit && (s = s.slice(0, t.limit)), this._format(s); } }, { key: "_prepareSearchers", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = []; if (this.options.tokenize)
                                for (var n = e.split(this.options.tokenSeparator), r = 0, o = n.length; r < o; r += 1)
                                    t.push(new i(n[r], this.options)); return { tokenSearchers: t, fullSearcher: new i(e, this.options) }; } }, { key: "_search", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 ? arguments[1] : void 0, n = this.list, r = {}, o = []; if ("string" == typeof n[0]) {
                                for (var i = 0, a = n.length; i < a; i += 1)
                                    this._analyze({ key: "", value: n[i], record: i, index: i }, { resultMap: r, results: o, tokenSearchers: e, fullSearcher: t });
                                return { weights: null, results: o };
                            } for (var s = {}, c = 0, h = n.length; c < h; c += 1)
                                for (var l = n[c], u = 0, f = this.options.keys.length; u < f; u += 1) {
                                    var d = this.options.keys[u];
                                    if ("string" != typeof d) {
                                        if (s[d.name] = { weight: 1 - d.weight || 1 }, d.weight <= 0 || d.weight > 1)
                                            throw new Error("Key weight has to be > 0 and <= 1");
                                        d = d.name;
                                    }
                                    else
                                        s[d] = { weight: 1 };
                                    this._analyze({ key: d, value: this.options.getFn(l, d), record: l, index: c }, { resultMap: r, results: o, tokenSearchers: e, fullSearcher: t });
                                } return { weights: s, results: o }; } }, { key: "_analyze", value: function (e, t) { var n = e.key, r = e.arrayIndex, o = void 0 === r ? -1 : r, i = e.value, a = e.record, c = e.index, h = t.tokenSearchers, l = void 0 === h ? [] : h, u = t.fullSearcher, f = void 0 === u ? [] : u, d = t.resultMap, v = void 0 === d ? {} : d, p = t.results, g = void 0 === p ? [] : p; if (null != i) {
                                var y = !1, m = -1, k = 0;
                                if ("string" == typeof i) {
                                    this._log("\nKey: ".concat("" === n ? "-" : n));
                                    var S = f.search(i);
                                    if (this._log('Full text: "'.concat(i, '", score: ').concat(S.score)), this.options.tokenize) {
                                        for (var x = i.split(this.options.tokenSeparator), b = [], M = 0; M < l.length; M += 1) {
                                            var _ = l[M];
                                            this._log('\nPattern: "'.concat(_.pattern, '"'));
                                            for (var L = !1, w = 0; w < x.length; w += 1) {
                                                var A = x[w], C = _.search(A), I = {};
                                                C.isMatch ? (I[A] = C.score, y = !0, L = !0, b.push(C.score)) : (I[A] = 1, this.options.matchAllTokens || b.push(1)), this._log('Token: "'.concat(A, '", score: ').concat(I[A]));
                                            }
                                            L && (k += 1);
                                        }
                                        m = b[0];
                                        for (var O = b.length, j = 1; j < O; j += 1)
                                            m += b[j];
                                        m /= O, this._log("Token score average:", m);
                                    }
                                    var P = S.score;
                                    m > -1 && (P = (P + m) / 2), this._log("Score average:", P);
                                    var F = !this.options.tokenize || !this.options.matchAllTokens || k >= l.length;
                                    if (this._log("\nCheck Matches: ".concat(F)), (y || S.isMatch) && F) {
                                        var T = v[c];
                                        T ? T.output.push({ key: n, arrayIndex: o, value: i, score: P, matchedIndices: S.matchedIndices }) : (v[c] = { item: a, output: [{ key: n, arrayIndex: o, value: i, score: P, matchedIndices: S.matchedIndices }] }, g.push(v[c]));
                                    }
                                }
                                else if (s(i))
                                    for (var z = 0, E = i.length; z < E; z += 1)
                                        this._analyze({ key: n, arrayIndex: z, value: i[z], record: a, index: c }, { resultMap: v, results: g, tokenSearchers: l, fullSearcher: f });
                            } } }, { key: "_computeScore", value: function (e, t) { this._log("\n\nComputing score:\n"); for (var n = 0, r = t.length; n < r; n += 1) {
                                for (var o = t[n].output, i = o.length, a = 1, s = 1, c = 0; c < i; c += 1) {
                                    var h = e ? e[o[c].key].weight : 1, l = (1 === h ? o[c].score : o[c].score || .001) * h;
                                    1 !== h ? s = Math.min(s, l) : (o[c].nScore = l, a *= l);
                                }
                                t[n].score = 1 === s ? a : s, this._log(t[n]);
                            } } }, { key: "_sort", value: function (e) { this._log("\n\nSorting...."), e.sort(this.options.sortFn); } }, { key: "_format", value: function (e) { var t = []; if (this.options.verbose) {
                                var n = [];
                                this._log("\n\nOutput:\n\n", JSON.stringify(e, function (e, t) { if ("object" === r(t) && null !== t) {
                                    if (-1 !== n.indexOf(t))
                                        return;
                                    n.push(t);
                                } return t; })), n = null;
                            } var o = []; this.options.includeMatches && o.push(function (e, t) { var n = e.output; t.matches = []; for (var r = 0, o = n.length; r < o; r += 1) {
                                var i = n[r];
                                if (0 !== i.matchedIndices.length) {
                                    var a = { indices: i.matchedIndices, value: i.value };
                                    i.key && (a.key = i.key), i.hasOwnProperty("arrayIndex") && i.arrayIndex > -1 && (a.arrayIndex = i.arrayIndex), t.matches.push(a);
                                }
                            } }), this.options.includeScore && o.push(function (e, t) { t.score = e.score; }); for (var i = 0, a = e.length; i < a; i += 1) {
                                var s = e[i];
                                if (this.options.id && (s.item = this.options.getFn(s.item, this.options.id)[0]), o.length) {
                                    for (var c = { item: s.item }, h = 0, l = o.length; h < l; h += 1)
                                        o[h](s, c);
                                    t.push(c);
                                }
                                else
                                    t.push(s.item);
                            } return t; } }, { key: "_log", value: function () { var e; this.options.verbose && (e = console).log.apply(e, arguments); } }]) && o(t.prototype, n), c && o(t, c), e; }(); e.exports = c; }, function (e, t, n) { function r(e, t) { for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    } } var o = n(3), i = n(4), a = n(7), s = function () { function e(t, n) { var r = n.location, o = void 0 === r ? 0 : r, i = n.distance, s = void 0 === i ? 100 : i, c = n.threshold, h = void 0 === c ? .6 : c, l = n.maxPatternLength, u = void 0 === l ? 32 : l, f = n.isCaseSensitive, d = void 0 !== f && f, v = n.tokenSeparator, p = void 0 === v ? / +/g : v, g = n.findAllMatches, y = void 0 !== g && g, m = n.minMatchCharLength, k = void 0 === m ? 1 : m; !function (e, t) { if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function"); }(this, e), this.options = { location: o, distance: s, threshold: h, maxPatternLength: u, isCaseSensitive: d, tokenSeparator: p, findAllMatches: y, minMatchCharLength: k }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = a(this.pattern)); } var t, n, s; return t = e, (n = [{ key: "search", value: function (e) { if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e)
                                return { isMatch: !0, score: 0, matchedIndices: [[0, e.length - 1]] }; var t = this.options, n = t.maxPatternLength, r = t.tokenSeparator; if (this.pattern.length > n)
                                return o(e, this.pattern, r); var a = this.options, s = a.location, c = a.distance, h = a.threshold, l = a.findAllMatches, u = a.minMatchCharLength; return i(e, this.pattern, this.patternAlphabet, { location: s, distance: c, threshold: h, findAllMatches: l, minMatchCharLength: u }); } }]) && r(t.prototype, n), s && r(t, s), e; }(); e.exports = s; }, function (e, t) { var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g; e.exports = function (e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g, o = new RegExp(t.replace(n, "\\$&").replace(r, "|")), i = e.match(o), a = !!i, s = []; if (a)
                        for (var c = 0, h = i.length; c < h; c += 1) {
                            var l = i[c];
                            s.push([e.indexOf(l), l.length - 1]);
                        } return { score: a ? .5 : 1, isMatch: a, matchedIndices: s }; }; }, function (e, t, n) { var r = n(5), o = n(6); e.exports = function (e, t, n, i) { for (var a = i.location, s = void 0 === a ? 0 : a, c = i.distance, h = void 0 === c ? 100 : c, l = i.threshold, u = void 0 === l ? .6 : l, f = i.findAllMatches, d = void 0 !== f && f, v = i.minMatchCharLength, p = void 0 === v ? 1 : v, g = s, y = e.length, m = u, k = e.indexOf(t, g), S = t.length, x = [], b = 0; b < y; b += 1)
                        x[b] = 0; if (-1 !== k) {
                        var M = r(t, { errors: 0, currentLocation: k, expectedLocation: g, distance: h });
                        if (m = Math.min(M, m), -1 !== (k = e.lastIndexOf(t, g + S))) {
                            var _ = r(t, { errors: 0, currentLocation: k, expectedLocation: g, distance: h });
                            m = Math.min(_, m);
                        }
                    } k = -1; for (var L = [], w = 1, A = S + y, C = 1 << S - 1, I = 0; I < S; I += 1) {
                        for (var O = 0, j = A; O < j;) {
                            r(t, { errors: I, currentLocation: g + j, expectedLocation: g, distance: h }) <= m ? O = j : A = j, j = Math.floor((A - O) / 2 + O);
                        }
                        A = j;
                        var P = Math.max(1, g - j + 1), F = d ? y : Math.min(g + j, y) + S, T = Array(F + 2);
                        T[F + 1] = (1 << I) - 1;
                        for (var z = F; z >= P; z -= 1) {
                            var E = z - 1, K = n[e.charAt(E)];
                            if (K && (x[E] = 1), T[z] = (T[z + 1] << 1 | 1) & K, 0 !== I && (T[z] |= (L[z + 1] | L[z]) << 1 | 1 | L[z + 1]), T[z] & C && (w = r(t, { errors: I, currentLocation: E, expectedLocation: g, distance: h })) <= m) {
                                if (m = w, (k = E) <= g)
                                    break;
                                P = Math.max(1, 2 * g - k);
                            }
                        }
                        if (r(t, { errors: I + 1, currentLocation: g, expectedLocation: g, distance: h }) > m)
                            break;
                        L = T;
                    } return { isMatch: k >= 0, score: 0 === w ? .001 : w, matchedIndices: o(x, p) }; }; }, function (e, t) { e.exports = function (e, t) { var n = t.errors, r = void 0 === n ? 0 : n, o = t.currentLocation, i = void 0 === o ? 0 : o, a = t.expectedLocation, s = void 0 === a ? 0 : a, c = t.distance, h = void 0 === c ? 100 : c, l = r / e.length, u = Math.abs(s - i); return h ? l + u / h : u ? 1 : l; }; }, function (e, t) { e.exports = function () { for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = [], r = -1, o = -1, i = 0, a = e.length; i < a; i += 1) {
                        var s = e[i];
                        s && -1 === r ? r = i : s || -1 === r || ((o = i - 1) - r + 1 >= t && n.push([r, o]), r = -1);
                    } return e[i - 1] && i - r >= t && n.push([r, i - 1]), n; }; }, function (e, t) { e.exports = function (e) { for (var t = {}, n = e.length, r = 0; r < n; r += 1)
                        t[e.charAt(r)] = 0; for (var o = 0; o < n; o += 1)
                        t[e.charAt(o)] |= 1 << n - o - 1; return t; }; }, function (e, t, n) { var r = n(0); e.exports = function (e, t) { return function e(t, n, o) { if (n) {
                        var i = n.indexOf("."), a = n, s = null;
                        -1 !== i && (a = n.slice(0, i), s = n.slice(i + 1));
                        var c = t[a];
                        if (null != c)
                            if (s || "string" != typeof c && "number" != typeof c)
                                if (r(c))
                                    for (var h = 0, l = c.length; h < l; h += 1)
                                        e(c[h], s, o);
                                else
                                    s && e(c, s, o);
                            else
                                o.push(c.toString());
                    }
                    else
                        o.push(t); return o; }(e, t, []); }; }]); });
                /***/ 
            }),
            /* 3 */
            /***/ (function (module, __webpack_exports__, __webpack_require__) {
                "use strict";
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return symbolObservablePonyfill; });
                function symbolObservablePonyfill(root) {
                    var result;
                    var Symbol = root.Symbol;
                    if (typeof Symbol === 'function') {
                        if (Symbol.observable) {
                            result = Symbol.observable;
                        }
                        else {
                            result = Symbol('observable');
                            Symbol.observable = result;
                        }
                    }
                    else {
                        result = '@@observable';
                    }
                    return result;
                }
                ;
                /***/ 
            }),
            /* 4 */
            /***/ (function (module, exports, __webpack_require__) {
                module.exports = __webpack_require__(7);
                /***/ 
            }),
            /* 5 */
            /***/ (function (module, exports) {
                var g;
                // This works in non-strict mode
                g = (function () {
                    return this;
                })();
                try {
                    // This works if eval is allowed (see CSP)
                    g = g || new Function("return this")();
                }
                catch (e) {
                    // This works if the window reference is available
                    if (typeof window === "object")
                        g = window;
                }
                // g can still be undefined, but nothing to do about it...
                // We return undefined, instead of nothing here, so it's
                // easier to handle this case. if(!global) { ...}
                module.exports = g;
                /***/ 
            }),
            /* 6 */
            /***/ (function (module, exports) {
                module.exports = function (originalModule) {
                    if (!originalModule.webpackPolyfill) {
                        var module = Object.create(originalModule);
                        // module.parent = undefined by default
                        if (!module.children)
                            module.children = [];
                        Object.defineProperty(module, "loaded", {
                            enumerable: true,
                            get: function () {
                                return module.l;
                            }
                        });
                        Object.defineProperty(module, "id", {
                            enumerable: true,
                            get: function () {
                                return module.i;
                            }
                        });
                        Object.defineProperty(module, "exports", {
                            enumerable: true
                        });
                        module.webpackPolyfill = 1;
                    }
                    return module;
                };
                /***/ 
            }),
            /* 7 */
            /***/ (function (module, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                // EXTERNAL MODULE: ./node_modules/fuse.js/dist/fuse.js
                var dist_fuse = __webpack_require__(2);
                var fuse_default = /*#__PURE__*/ __webpack_require__.n(dist_fuse);
                // EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js
                var cjs = __webpack_require__(0);
                var cjs_default = /*#__PURE__*/ __webpack_require__.n(cjs);
                // EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
                var es = __webpack_require__(1);
                // CONCATENATED MODULE: ./node_modules/redux/es/redux.js
                /**
                 * These are private action types reserved by Redux.
                 * For any unknown actions, you must return the current state.
                 * If the current state is undefined, you must return the initial state.
                 * Do not reference these action types directly in your code.
                 */
                var randomString = function randomString() {
                    return Math.random().toString(36).substring(7).split('').join('.');
                };
                var ActionTypes = {
                    INIT: "@@redux/INIT" + randomString(),
                    REPLACE: "@@redux/REPLACE" + randomString(),
                    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                    }
                };
                /**
                 * @param {any} obj The object to inspect.
                 * @returns {boolean} True if the argument appears to be a plain object.
                 */
                function isPlainObject(obj) {
                    if (typeof obj !== 'object' || obj === null)
                        return false;
                    var proto = obj;
                    while (Object.getPrototypeOf(proto) !== null) {
                        proto = Object.getPrototypeOf(proto);
                    }
                    return Object.getPrototypeOf(obj) === proto;
                }
                /**
                 * Creates a Redux store that holds the state tree.
                 * The only way to change the data in the store is to call `dispatch()` on it.
                 *
                 * There should only be a single store in your app. To specify how different
                 * parts of the state tree respond to actions, you may combine several reducers
                 * into a single reducer function by using `combineReducers`.
                 *
                 * @param {Function} reducer A function that returns the next state tree, given
                 * the current state tree and the action to handle.
                 *
                 * @param {any} [preloadedState] The initial state. You may optionally specify it
                 * to hydrate the state from the server in universal apps, or to restore a
                 * previously serialized user session.
                 * If you use `combineReducers` to produce the root reducer function, this must be
                 * an object with the same shape as `combineReducers` keys.
                 *
                 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
                 * to enhance the store with third-party capabilities such as middleware,
                 * time travel, persistence, etc. The only store enhancer that ships with Redux
                 * is `applyMiddleware()`.
                 *
                 * @returns {Store} A Redux store that lets you read the state, dispatch actions
                 * and subscribe to changes.
                 */
                function createStore(reducer, preloadedState, enhancer) {
                    var _ref2;
                    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
                        throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
                    }
                    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
                        enhancer = preloadedState;
                        preloadedState = undefined;
                    }
                    if (typeof enhancer !== 'undefined') {
                        if (typeof enhancer !== 'function') {
                            throw new Error('Expected the enhancer to be a function.');
                        }
                        return enhancer(createStore)(reducer, preloadedState);
                    }
                    if (typeof reducer !== 'function') {
                        throw new Error('Expected the reducer to be a function.');
                    }
                    var currentReducer = reducer;
                    var currentState = preloadedState;
                    var currentListeners = [];
                    var nextListeners = currentListeners;
                    var isDispatching = false;
                    /**
                     * This makes a shallow copy of currentListeners so we can use
                     * nextListeners as a temporary list while dispatching.
                     *
                     * This prevents any bugs around consumers calling
                     * subscribe/unsubscribe in the middle of a dispatch.
                     */
                    function ensureCanMutateNextListeners() {
                        if (nextListeners === currentListeners) {
                            nextListeners = currentListeners.slice();
                        }
                    }
                    /**
                     * Reads the state tree managed by the store.
                     *
                     * @returns {any} The current state tree of your application.
                     */
                    function getState() {
                        if (isDispatching) {
                            throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
                        }
                        return currentState;
                    }
                    /**
                     * Adds a change listener. It will be called any time an action is dispatched,
                     * and some part of the state tree may potentially have changed. You may then
                     * call `getState()` to read the current state tree inside the callback.
                     *
                     * You may call `dispatch()` from a change listener, with the following
                     * caveats:
                     *
                     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
                     * If you subscribe or unsubscribe while the listeners are being invoked, this
                     * will not have any effect on the `dispatch()` that is currently in progress.
                     * However, the next `dispatch()` call, whether nested or not, will use a more
                     * recent snapshot of the subscription list.
                     *
                     * 2. The listener should not expect to see all state changes, as the state
                     * might have been updated multiple times during a nested `dispatch()` before
                     * the listener is called. It is, however, guaranteed that all subscribers
                     * registered before the `dispatch()` started will be called with the latest
                     * state by the time it exits.
                     *
                     * @param {Function} listener A callback to be invoked on every dispatch.
                     * @returns {Function} A function to remove this change listener.
                     */
                    function subscribe(listener) {
                        if (typeof listener !== 'function') {
                            throw new Error('Expected the listener to be a function.');
                        }
                        if (isDispatching) {
                            throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
                        }
                        var isSubscribed = true;
                        ensureCanMutateNextListeners();
                        nextListeners.push(listener);
                        return function unsubscribe() {
                            if (!isSubscribed) {
                                return;
                            }
                            if (isDispatching) {
                                throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
                            }
                            isSubscribed = false;
                            ensureCanMutateNextListeners();
                            var index = nextListeners.indexOf(listener);
                            nextListeners.splice(index, 1);
                        };
                    }
                    /**
                     * Dispatches an action. It is the only way to trigger a state change.
                     *
                     * The `reducer` function, used to create the store, will be called with the
                     * current state tree and the given `action`. Its return value will
                     * be considered the **next** state of the tree, and the change listeners
                     * will be notified.
                     *
                     * The base implementation only supports plain object actions. If you want to
                     * dispatch a Promise, an Observable, a thunk, or something else, you need to
                     * wrap your store creating function into the corresponding middleware. For
                     * example, see the documentation for the `redux-thunk` package. Even the
                     * middleware will eventually dispatch plain object actions using this method.
                     *
                     * @param {Object} action A plain object representing “what changed”. It is
                     * a good idea to keep actions serializable so you can record and replay user
                     * sessions, or use the time travelling `redux-devtools`. An action must have
                     * a `type` property which may not be `undefined`. It is a good idea to use
                     * string constants for action types.
                     *
                     * @returns {Object} For convenience, the same action object you dispatched.
                     *
                     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
                     * return something else (for example, a Promise you can await).
                     */
                    function dispatch(action) {
                        if (!isPlainObject(action)) {
                            throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
                        }
                        if (typeof action.type === 'undefined') {
                            throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
                        }
                        if (isDispatching) {
                            throw new Error('Reducers may not dispatch actions.');
                        }
                        try {
                            isDispatching = true;
                            currentState = currentReducer(currentState, action);
                        }
                        finally {
                            isDispatching = false;
                        }
                        var listeners = currentListeners = nextListeners;
                        for (var i = 0; i < listeners.length; i++) {
                            var listener = listeners[i];
                            listener();
                        }
                        return action;
                    }
                    /**
                     * Replaces the reducer currently used by the store to calculate the state.
                     *
                     * You might need this if your app implements code splitting and you want to
                     * load some of the reducers dynamically. You might also need this if you
                     * implement a hot reloading mechanism for Redux.
                     *
                     * @param {Function} nextReducer The reducer for the store to use instead.
                     * @returns {void}
                     */
                    function replaceReducer(nextReducer) {
                        if (typeof nextReducer !== 'function') {
                            throw new Error('Expected the nextReducer to be a function.');
                        }
                        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
                        // Any reducers that existed in both the new and old rootReducer
                        // will receive the previous state. This effectively populates
                        // the new state tree with any relevant data from the old one.
                        dispatch({
                            type: ActionTypes.REPLACE
                        });
                    }
                    /**
                     * Interoperability point for observable/reactive libraries.
                     * @returns {observable} A minimal observable of state changes.
                     * For more information, see the observable proposal:
                     * https://github.com/tc39/proposal-observable
                     */
                    function observable() {
                        var _ref;
                        var outerSubscribe = subscribe;
                        return _ref = {
                            /**
                             * The minimal observable subscription method.
                             * @param {Object} observer Any object that can be used as an observer.
                             * The observer object should have a `next` method.
                             * @returns {subscription} An object with an `unsubscribe` method that can
                             * be used to unsubscribe the observable from the store, and prevent further
                             * emission of values from the observable.
                             */
                            subscribe: function subscribe(observer) {
                                if (typeof observer !== 'object' || observer === null) {
                                    throw new TypeError('Expected the observer to be an object.');
                                }
                                function observeState() {
                                    if (observer.next) {
                                        observer.next(getState());
                                    }
                                }
                                observeState();
                                var unsubscribe = outerSubscribe(observeState);
                                return {
                                    unsubscribe: unsubscribe
                                };
                            }
                        }, _ref[es["a" /* default */]] = function () {
                            return this;
                        }, _ref;
                    } // When a store is created, an "INIT" action is dispatched so that every
                    // reducer returns their initial state. This effectively populates
                    // the initial state tree.
                    dispatch({
                        type: ActionTypes.INIT
                    });
                    return _ref2 = {
                        dispatch: dispatch,
                        subscribe: subscribe,
                        getState: getState,
                        replaceReducer: replaceReducer
                    }, _ref2[es["a" /* default */]] = observable, _ref2;
                }
                /**
                 * Prints a warning in the console if it exists.
                 *
                 * @param {String} message The warning message.
                 * @returns {void}
                 */
                function warning(message) {
                    /* eslint-disable no-console */
                    if (typeof console !== 'undefined' && typeof console.error === 'function') {
                        console.error(message);
                    }
                    /* eslint-enable no-console */
                    try {
                        // This error was thrown as a convenience so that if you enable
                        // "break on all exceptions" in your console,
                        // it would pause the execution at this line.
                        throw new Error(message);
                    }
                    catch (e) { } // eslint-disable-line no-empty
                }
                function getUndefinedStateErrorMessage(key, action) {
                    var actionType = action && action.type;
                    var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
                    return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
                }
                function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
                    var reducerKeys = Object.keys(reducers);
                    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
                    if (reducerKeys.length === 0) {
                        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
                    }
                    if (!isPlainObject(inputState)) {
                        return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
                    }
                    var unexpectedKeys = Object.keys(inputState).filter(function (key) {
                        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
                    });
                    unexpectedKeys.forEach(function (key) {
                        unexpectedKeyCache[key] = true;
                    });
                    if (action && action.type === ActionTypes.REPLACE)
                        return;
                    if (unexpectedKeys.length > 0) {
                        return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
                    }
                }
                function assertReducerShape(reducers) {
                    Object.keys(reducers).forEach(function (key) {
                        var reducer = reducers[key];
                        var initialState = reducer(undefined, {
                            type: ActionTypes.INIT
                        });
                        if (typeof initialState === 'undefined') {
                            throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
                        }
                        if (typeof reducer(undefined, {
                            type: ActionTypes.PROBE_UNKNOWN_ACTION()
                        }) === 'undefined') {
                            throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
                        }
                    });
                }
                /**
                 * Turns an object whose values are different reducer functions, into a single
                 * reducer function. It will call every child reducer, and gather their results
                 * into a single state object, whose keys correspond to the keys of the passed
                 * reducer functions.
                 *
                 * @param {Object} reducers An object whose values correspond to different
                 * reducer functions that need to be combined into one. One handy way to obtain
                 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
                 * undefined for any action. Instead, they should return their initial state
                 * if the state passed to them was undefined, and the current state for any
                 * unrecognized action.
                 *
                 * @returns {Function} A reducer function that invokes every reducer inside the
                 * passed object, and builds a state object with the same shape.
                 */
                function combineReducers(reducers) {
                    var reducerKeys = Object.keys(reducers);
                    var finalReducers = {};
                    for (var i = 0; i < reducerKeys.length; i++) {
                        var key = reducerKeys[i];
                        if (false) { }
                        if (typeof reducers[key] === 'function') {
                            finalReducers[key] = reducers[key];
                        }
                    }
                    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
                    // keys multiple times.
                    var unexpectedKeyCache;
                    if (false) { }
                    var shapeAssertionError;
                    try {
                        assertReducerShape(finalReducers);
                    }
                    catch (e) {
                        shapeAssertionError = e;
                    }
                    return function combination(state, action) {
                        if (state === void 0) {
                            state = {};
                        }
                        if (shapeAssertionError) {
                            throw shapeAssertionError;
                        }
                        if (false) {
                            var warningMessage;
                        }
                        var hasChanged = false;
                        var nextState = {};
                        for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                            var _key = finalReducerKeys[_i];
                            var reducer = finalReducers[_key];
                            var previousStateForKey = state[_key];
                            var nextStateForKey = reducer(previousStateForKey, action);
                            if (typeof nextStateForKey === 'undefined') {
                                var errorMessage = getUndefinedStateErrorMessage(_key, action);
                                throw new Error(errorMessage);
                            }
                            nextState[_key] = nextStateForKey;
                            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                        }
                        return hasChanged ? nextState : state;
                    };
                }
                function bindActionCreator(actionCreator, dispatch) {
                    return function () {
                        return dispatch(actionCreator.apply(this, arguments));
                    };
                }
                /**
                 * Turns an object whose values are action creators, into an object with the
                 * same keys, but with every function wrapped into a `dispatch` call so they
                 * may be invoked directly. This is just a convenience method, as you can call
                 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
                 *
                 * For convenience, you can also pass an action creator as the first argument,
                 * and get a dispatch wrapped function in return.
                 *
                 * @param {Function|Object} actionCreators An object whose values are action
                 * creator functions. One handy way to obtain it is to use ES6 `import * as`
                 * syntax. You may also pass a single function.
                 *
                 * @param {Function} dispatch The `dispatch` function available on your Redux
                 * store.
                 *
                 * @returns {Function|Object} The object mimicking the original object, but with
                 * every action creator wrapped into the `dispatch` call. If you passed a
                 * function as `actionCreators`, the return value will also be a single
                 * function.
                 */
                function bindActionCreators(actionCreators, dispatch) {
                    if (typeof actionCreators === 'function') {
                        return bindActionCreator(actionCreators, dispatch);
                    }
                    if (typeof actionCreators !== 'object' || actionCreators === null) {
                        throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
                    }
                    var boundActionCreators = {};
                    for (var key in actionCreators) {
                        var actionCreator = actionCreators[key];
                        if (typeof actionCreator === 'function') {
                            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                        }
                    }
                    return boundActionCreators;
                }
                function _defineProperty(obj, key, value) {
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        });
                    }
                    else {
                        obj[key] = value;
                    }
                    return obj;
                }
                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        keys.push.apply(keys, Object.getOwnPropertySymbols(object));
                    }
                    if (enumerableOnly)
                        keys = keys.filter(function (sym) {
                            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                        });
                    return keys;
                }
                function _objectSpread2(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i] != null ? arguments[i] : {};
                        if (i % 2) {
                            ownKeys(source, true).forEach(function (key) {
                                _defineProperty(target, key, source[key]);
                            });
                        }
                        else if (Object.getOwnPropertyDescriptors) {
                            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                        }
                        else {
                            ownKeys(source).forEach(function (key) {
                                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                            });
                        }
                    }
                    return target;
                }
                /**
                 * Composes single-argument functions from right to left. The rightmost
                 * function can take multiple arguments as it provides the signature for
                 * the resulting composite function.
                 *
                 * @param {...Function} funcs The functions to compose.
                 * @returns {Function} A function obtained by composing the argument functions
                 * from right to left. For example, compose(f, g, h) is identical to doing
                 * (...args) => f(g(h(...args))).
                 */
                function compose() {
                    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
                        funcs[_key] = arguments[_key];
                    }
                    if (funcs.length === 0) {
                        return function (arg) {
                            return arg;
                        };
                    }
                    if (funcs.length === 1) {
                        return funcs[0];
                    }
                    return funcs.reduce(function (a, b) {
                        return function () {
                            return a(b.apply(void 0, arguments));
                        };
                    });
                }
                /**
                 * Creates a store enhancer that applies middleware to the dispatch method
                 * of the Redux store. This is handy for a variety of tasks, such as expressing
                 * asynchronous actions in a concise manner, or logging every action payload.
                 *
                 * See `redux-thunk` package as an example of the Redux middleware.
                 *
                 * Because middleware is potentially asynchronous, this should be the first
                 * store enhancer in the composition chain.
                 *
                 * Note that each middleware will be given the `dispatch` and `getState` functions
                 * as named arguments.
                 *
                 * @param {...Function} middlewares The middleware chain to be applied.
                 * @returns {Function} A store enhancer applying the middleware.
                 */
                function applyMiddleware() {
                    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
                        middlewares[_key] = arguments[_key];
                    }
                    return function (createStore) {
                        return function () {
                            var store = createStore.apply(void 0, arguments);
                            var _dispatch = function dispatch() {
                                throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
                            };
                            var middlewareAPI = {
                                getState: store.getState,
                                dispatch: function dispatch() {
                                    return _dispatch.apply(void 0, arguments);
                                }
                            };
                            var chain = middlewares.map(function (middleware) {
                                return middleware(middlewareAPI);
                            });
                            _dispatch = compose.apply(void 0, chain)(store.dispatch);
                            return _objectSpread2({}, store, {
                                dispatch: _dispatch
                            });
                        };
                    };
                }
                /*
                 * This is a dummy function to check if the function name has been altered by minification.
                 * If the function has been minified and NODE_ENV !== 'production', warn the user.
                 */
                function isCrushed() { }
                if (false) { }
                // CONCATENATED MODULE: ./src/scripts/reducers/items.js
                var defaultState = [];
                function items_items(state, action) {
                    if (state === void 0) {
                        state = defaultState;
                    }
                    switch (action.type) {
                        case 'ADD_ITEM':
                            {
                                // Add object to items array
                                var newState = [].concat(state, [{
                                        id: action.id,
                                        choiceId: action.choiceId,
                                        groupId: action.groupId,
                                        value: action.value,
                                        label: action.label,
                                        active: true,
                                        highlighted: false,
                                        customProperties: action.customProperties,
                                        placeholder: action.placeholder || false,
                                        keyCode: null
                                    }]);
                                return newState.map(function (obj) {
                                    var item = obj;
                                    item.highlighted = false;
                                    return item;
                                });
                            }
                        case 'REMOVE_ITEM':
                            {
                                // Set item to inactive
                                return state.map(function (obj) {
                                    var item = obj;
                                    if (item.id === action.id) {
                                        item.active = false;
                                    }
                                    return item;
                                });
                            }
                        case 'HIGHLIGHT_ITEM':
                            {
                                return state.map(function (obj) {
                                    var item = obj;
                                    if (item.id === action.id) {
                                        item.highlighted = action.highlighted;
                                    }
                                    return item;
                                });
                            }
                        default:
                            {
                                return state;
                            }
                    }
                }
                // CONCATENATED MODULE: ./src/scripts/reducers/groups.js
                var groups_defaultState = [];
                function groups(state, action) {
                    if (state === void 0) {
                        state = groups_defaultState;
                    }
                    switch (action.type) {
                        case 'ADD_GROUP':
                            {
                                return [].concat(state, [{
                                        id: action.id,
                                        value: action.value,
                                        active: action.active,
                                        disabled: action.disabled
                                    }]);
                            }
                        case 'CLEAR_CHOICES':
                            {
                                return [];
                            }
                        default:
                            {
                                return state;
                            }
                    }
                }
                // CONCATENATED MODULE: ./src/scripts/reducers/choices.js
                var choices_defaultState = [];
                function choices_choices(state, action) {
                    if (state === void 0) {
                        state = choices_defaultState;
                    }
                    switch (action.type) {
                        case 'ADD_CHOICE':
                            {
                                /*
                                    A disabled choice appears in the choice dropdown but cannot be selected
                                    A selected choice has been added to the passed input's value (added as an item)
                                    An active choice appears within the choice dropdown
                                 */
                                return [].concat(state, [{
                                        id: action.id,
                                        elementId: action.elementId,
                                        groupId: action.groupId,
                                        value: action.value,
                                        label: action.label || action.value,
                                        disabled: action.disabled || false,
                                        selected: false,
                                        active: true,
                                        score: 9999,
                                        customProperties: action.customProperties,
                                        placeholder: action.placeholder || false,
                                        keyCode: null
                                    }]);
                            }
                        case 'ADD_ITEM':
                            {
                                // If all choices need to be activated
                                if (action.activateOptions) {
                                    return state.map(function (obj) {
                                        var choice = obj;
                                        choice.active = action.active;
                                        return choice;
                                    });
                                } // When an item is added and it has an associated choice,
                                // we want to disable it so it can't be chosen again
                                if (action.choiceId > -1) {
                                    return state.map(function (obj) {
                                        var choice = obj;
                                        if (choice.id === parseInt(action.choiceId, 10)) {
                                            choice.selected = true;
                                        }
                                        return choice;
                                    });
                                }
                                return state;
                            }
                        case 'REMOVE_ITEM':
                            {
                                // When an item is removed and it has an associated choice,
                                // we want to re-enable it so it can be chosen again
                                if (action.choiceId > -1) {
                                    return state.map(function (obj) {
                                        var choice = obj;
                                        if (choice.id === parseInt(action.choiceId, 10)) {
                                            choice.selected = false;
                                        }
                                        return choice;
                                    });
                                }
                                return state;
                            }
                        case 'FILTER_CHOICES':
                            {
                                return state.map(function (obj) {
                                    var choice = obj; // Set active state based on whether choice is
                                    // within filtered results
                                    choice.active = action.results.some(function (_ref) {
                                        var item = _ref.item, score = _ref.score;
                                        if (item.id === choice.id) {
                                            choice.score = score;
                                            return true;
                                        }
                                        return false;
                                    });
                                    return choice;
                                });
                            }
                        case 'ACTIVATE_CHOICES':
                            {
                                return state.map(function (obj) {
                                    var choice = obj;
                                    choice.active = action.active;
                                    return choice;
                                });
                            }
                        case 'CLEAR_CHOICES':
                            {
                                return choices_defaultState;
                            }
                        default:
                            {
                                return state;
                            }
                    }
                }
                // CONCATENATED MODULE: ./src/scripts/reducers/general.js
                var general_defaultState = {
                    loading: false
                };
                var general = function general(state, action) {
                    if (state === void 0) {
                        state = general_defaultState;
                    }
                    switch (action.type) {
                        case 'SET_IS_LOADING':
                            {
                                return {
                                    loading: action.isLoading
                                };
                            }
                        default:
                            {
                                return state;
                            }
                    }
                };
                /* harmony default export */ var reducers_general = (general);
                // CONCATENATED MODULE: ./src/scripts/lib/utils.js
                /**
                 * @param {number} min
                 * @param {number} max
                 * @returns {number}
                 */
                var getRandomNumber = function getRandomNumber(min, max) {
                    return Math.floor(Math.random() * (max - min) + min);
                };
                /**
                 * @param {number} length
                 * @returns {string}
                 */
                var generateChars = function generateChars(length) {
                    return Array.from({
                        length: length
                    }, function () {
                        return getRandomNumber(0, 36).toString(36);
                    }).join('');
                };
                /**
                 * @param {HTMLInputElement | HTMLSelectElement} element
                 * @param {string} prefix
                 * @returns {string}
                 */
                var generateId = function generateId(element, prefix) {
                    var id = element.id || element.name && element.name + "-" + generateChars(2) || generateChars(4);
                    id = id.replace(/(:|\.|\[|\]|,)/g, '');
                    id = prefix + "-" + id;
                    return id;
                };
                /**
                 * @param {any} obj
                 * @returns {string}
                 */
                var getType = function getType(obj) {
                    return Object.prototype.toString.call(obj).slice(8, -1);
                };
                /**
                 * @param {string} type
                 * @param {any} obj
                 * @returns {boolean}
                 */
                var isType = function isType(type, obj) {
                    return obj !== undefined && obj !== null && getType(obj) === type;
                };
                /**
                 * @param {HTMLElement} element
                 * @param {HTMLElement} [wrapper={HTMLDivElement}]
                 * @returns {HTMLElement}
                 */
                var utils_wrap = function wrap(element, wrapper) {
                    if (wrapper === void 0) {
                        wrapper = document.createElement('div');
                    }
                    if (element.nextSibling) {
                        element.parentNode.insertBefore(wrapper, element.nextSibling);
                    }
                    else {
                        element.parentNode.appendChild(wrapper);
                    }
                    return wrapper.appendChild(element);
                };
                /**
                 * @param {Element} startEl
                 * @param {string} selector
                 * @param {1 | -1} direction
                 * @returns {Element | undefined}
                 */
                var getAdjacentEl = function getAdjacentEl(startEl, selector, direction) {
                    if (direction === void 0) {
                        direction = 1;
                    }
                    if (!(startEl instanceof Element) || typeof selector !== 'string') {
                        return undefined;
                    }
                    var prop = (direction > 0 ? 'next' : 'previous') + "ElementSibling";
                    var sibling = startEl[prop];
                    while (sibling) {
                        if (sibling.matches(selector)) {
                            return sibling;
                        }
                        sibling = sibling[prop];
                    }
                    return sibling;
                };
                /**
                 * @param {Element} element
                 * @param {Element} parent
                 * @param {-1 | 1} direction
                 * @returns {boolean}
                 */
                var isScrolledIntoView = function isScrolledIntoView(element, parent, direction) {
                    if (direction === void 0) {
                        direction = 1;
                    }
                    if (!element) {
                        return false;
                    }
                    var isVisible;
                    if (direction > 0) {
                        // In view from bottom
                        isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
                    }
                    else {
                        // In view from top
                        isVisible = element.offsetTop >= parent.scrollTop;
                    }
                    return isVisible;
                };
                /**
                 * @param {any} value
                 * @returns {any}
                 */
                var sanitise = function sanitise(value) {
                    if (typeof value !== 'string') {
                        return value;
                    }
                    return value.replace(/&/g, '&amp;').replace(/>/g, '&rt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
                };
                /**
                 * @returns {() => (str: string) => Element}
                 */
                var strToEl = function () {
                    var tmpEl = document.createElement('div');
                    return function (str) {
                        var cleanedInput = str.trim();
                        tmpEl.innerHTML = cleanedInput;
                        var firldChild = tmpEl.children[0];
                        while (tmpEl.firstChild) {
                            tmpEl.removeChild(tmpEl.firstChild);
                        }
                        return firldChild;
                    };
                }();
                /**
                 * @param {{ label?: string, value: string }} a
                 * @param {{ label?: string, value: string }} b
                 * @returns {number}
                 */
                var sortByAlpha = function sortByAlpha(_ref, _ref2) {
                    var value = _ref.value, _ref$label = _ref.label, label = _ref$label === void 0 ? value : _ref$label;
                    var value2 = _ref2.value, _ref2$label = _ref2.label, label2 = _ref2$label === void 0 ? value2 : _ref2$label;
                    return label.localeCompare(label2, [], {
                        sensitivity: 'base',
                        ignorePunctuation: true,
                        numeric: true
                    });
                };
                /**
                 * @param {{ score: number }} a
                 * @param {{ score: number }} b
                 */
                var sortByScore = function sortByScore(a, b) {
                    return a.score - b.score;
                };
                /**
                 * @param {HTMLElement} element
                 * @param {string} type
                 * @param {object} customArgs
                 */
                var dispatchEvent = function dispatchEvent(element, type, customArgs) {
                    if (customArgs === void 0) {
                        customArgs = null;
                    }
                    var event = new CustomEvent(type, {
                        detail: customArgs,
                        bubbles: true,
                        cancelable: true
                    });
                    return element.dispatchEvent(event);
                };
                /**
                 * @param {array} array
                 * @param {any} value
                 * @param {string} [key="value"]
                 * @returns {boolean}
                 */
                var existsInArray = function existsInArray(array, value, key) {
                    if (key === void 0) {
                        key = 'value';
                    }
                    return array.some(function (item) {
                        if (typeof value === 'string') {
                            return item[key] === value.trim();
                        }
                        return item[key] === value;
                    });
                };
                /**
                 * @param {any} obj
                 * @returns {any}
                 */
                var cloneObject = function cloneObject(obj) {
                    return JSON.parse(JSON.stringify(obj));
                };
                /**
                 * Returns an array of keys present on the first but missing on the second object
                 * @param {object} a
                 * @param {object} b
                 * @returns {string[]}
                 */
                var diff = function diff(a, b) {
                    var aKeys = Object.keys(a).sort();
                    var bKeys = Object.keys(b).sort();
                    return aKeys.filter(function (i) {
                        return bKeys.indexOf(i) < 0;
                    });
                };
                // CONCATENATED MODULE: ./src/scripts/reducers/index.js
                var appReducer = combineReducers({
                    items: items_items,
                    groups: groups,
                    choices: choices_choices,
                    general: reducers_general
                });
                var reducers_rootReducer = function rootReducer(passedState, action) {
                    var state = passedState; // If we are clearing all items, groups and options we reassign
                    // state and then pass that state to our proper reducer. This isn't
                    // mutating our actual state
                    // See: http://stackoverflow.com/a/35641992
                    if (action.type === 'CLEAR_ALL') {
                        state = undefined;
                    }
                    else if (action.type === 'RESET_TO') {
                        return cloneObject(action.state);
                    }
                    return appReducer(state, action);
                };
                /* harmony default export */ var reducers = (reducers_rootReducer);
                // CONCATENATED MODULE: ./src/scripts/store/store.js
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                /**
                 * @typedef {import('../../../types/index').Choices.Choice} Choice
                 * @typedef {import('../../../types/index').Choices.Group} Group
                 * @typedef {import('../../../types/index').Choices.Item} Item
                 */
                var store_Store = 
                /*#__PURE__*/
                function () {
                    function Store() {
                        this._store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                    }
                    /**
                     * Subscribe store to function call (wrapped Redux method)
                     * @param  {Function} onChange Function to trigger when state changes
                     * @return
                     */
                    var _proto = Store.prototype;
                    _proto.subscribe = function subscribe(onChange) {
                        this._store.subscribe(onChange);
                    };
                    _proto.dispatch = function dispatch(action) {
                        this._store.dispatch(action);
                    };
                    /**
                     * Get loading state from store
                     * @returns {boolean} Loading State
                     */
                    _proto.isLoading = function isLoading() {
                        return this.state.general.loading;
                    };
                    _proto.getChoiceById = function getChoiceById(id) {
                        return this.activeChoices.find(function (choice) {
                            return choice.id === parseInt(id, 10);
                        });
                    };
                    _proto.getGroupById = function getGroupById(id) {
                        return this.groups.find(function (group) {
                            return group.id === id;
                        });
                    };
                    _createClass(Store, [{
                            key: "state",
                            get: function get() {
                                return this._store.getState();
                            }
                            /**
                             * Get items from store
                             * @returns {Item[]} Item objects
                             */
                        }, {
                            key: "items",
                            get: function get() {
                                return this.state.items;
                            }
                            /**
                             * Get active items from store
                             * @returns {Item[]} Item objects
                             */
                        }, {
                            key: "activeItems",
                            get: function get() {
                                return this.items.filter(function (item) {
                                    return item.active === true;
                                });
                            }
                            /**
                             * Get highlighted items from store
                             * @returns {Item[]} Item objects
                             */
                        }, {
                            key: "highlightedActiveItems",
                            get: function get() {
                                return this.items.filter(function (item) {
                                    return item.active && item.highlighted;
                                });
                            }
                            /**
                             * Get choices from store
                             * @returns {Choice[]} Option objects
                             */
                        }, {
                            key: "choices",
                            get: function get() {
                                return this.state.choices;
                            }
                            /**
                             * Get active choices from store
                             * @returns {Choice[]} Option objects
                             */
                        }, {
                            key: "activeChoices",
                            get: function get() {
                                return this.choices.filter(function (choice) {
                                    return choice.active === true;
                                });
                            }
                            /**
                             * Get selectable choices from store
                             * @returns {Choice[]} Option objects
                             */
                        }, {
                            key: "selectableChoices",
                            get: function get() {
                                return this.choices.filter(function (choice) {
                                    return choice.disabled !== true;
                                });
                            }
                            /**
                             * Get choices that can be searched (excluding placeholders)
                             * @returns {Choice[]} Option objects
                             */
                        }, {
                            key: "searchableChoices",
                            get: function get() {
                                return this.selectableChoices.filter(function (choice) {
                                    return choice.placeholder !== true;
                                });
                            }
                            /**
                             * Get placeholder choice from store
                             * @returns {Choice | undefined} Found placeholder
                             */
                        }, {
                            key: "placeholderChoice",
                            get: function get() {
                                return [].concat(this.choices).reverse().find(function (choice) {
                                    return choice.placeholder === true;
                                });
                            }
                            /**
                             * Get groups from store
                             * @returns {Group[]} Group objects
                             */
                        }, {
                            key: "groups",
                            get: function get() {
                                return this.state.groups;
                            }
                            /**
                             * Get active groups from store
                             * @returns {Group[]} Group objects
                             */
                        }, {
                            key: "activeGroups",
                            get: function get() {
                                var groups = this.groups, choices = this.choices;
                                return groups.filter(function (group) {
                                    var isActive = group.active === true && group.disabled === false;
                                    var hasActiveOptions = choices.some(function (choice) {
                                        return choice.active === true && choice.disabled === false;
                                    });
                                    return isActive && hasActiveOptions;
                                }, []);
                            }
                        }]);
                    return Store;
                }();
                // CONCATENATED MODULE: ./src/scripts/components/dropdown.js
                function dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    dropdown_defineProperties(Constructor, staticProps); return Constructor; }
                /**
                 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
                 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
                 */
                var Dropdown = 
                /*#__PURE__*/
                function () {
                    /**
                     * @param {{
                     *  element: HTMLElement,
                     *  type: passedElement['type'],
                     *  classNames: ClassNames,
                     * }} args
                     */
                    function Dropdown(_ref) {
                        var element = _ref.element, type = _ref.type, classNames = _ref.classNames;
                        this.element = element;
                        this.classNames = classNames;
                        this.type = type;
                        this.isActive = false;
                    }
                    /**
                     * Bottom position of dropdown in viewport coordinates
                     * @returns {number} Vertical position
                     */
                    var _proto = Dropdown.prototype;
                    /**
                     * Find element that matches passed selector
                     * @param {string} selector
                     * @returns {HTMLElement | null}
                     */
                    _proto.getChild = function getChild(selector) {
                        return this.element.querySelector(selector);
                    };
                    _proto.show = function show() {
                        this.element.classList.add(this.classNames.activeState);
                        this.element.setAttribute('aria-expanded', 'true');
                        this.isActive = true;
                        return this;
                    };
                    _proto.hide = function hide() {
                        this.element.classList.remove(this.classNames.activeState);
                        this.element.setAttribute('aria-expanded', 'false');
                        this.isActive = false;
                        return this;
                    };
                    dropdown_createClass(Dropdown, [{
                            key: "distanceFromTopWindow",
                            get: function get() {
                                return this.element.getBoundingClientRect().bottom;
                            }
                        }]);
                    return Dropdown;
                }();
                // CONCATENATED MODULE: ./src/scripts/constants.js
                /**
                 * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
                 * @typedef {import('../../types/index').Choices.Options} Options
                 */
                /** @type {ClassNames} */
                var DEFAULT_CLASSNAMES = {
                    containerOuter: 'choices',
                    containerInner: 'choices__inner',
                    input: 'choices__input',
                    inputCloned: 'choices__input--cloned',
                    list: 'choices__list',
                    listItems: 'choices__list--multiple',
                    listSingle: 'choices__list--single',
                    listDropdown: 'choices__list--dropdown',
                    item: 'choices__item',
                    itemSelectable: 'choices__item--selectable',
                    itemDisabled: 'choices__item--disabled',
                    itemChoice: 'choices__item--choice',
                    placeholder: 'choices__placeholder',
                    group: 'choices__group',
                    groupHeading: 'choices__heading',
                    button: 'choices__button',
                    activeState: 'is-active',
                    focusState: 'is-focused',
                    openState: 'is-open',
                    disabledState: 'is-disabled',
                    highlightedState: 'is-highlighted',
                    selectedState: 'is-selected',
                    flippedState: 'is-flipped',
                    loadingState: 'is-loading',
                    noResults: 'has-no-results',
                    noChoices: 'has-no-choices'
                };
                /** @type {Options} */
                var DEFAULT_CONFIG = {
                    items: [],
                    choices: [],
                    silent: false,
                    renderChoiceLimit: -1,
                    maxItemCount: -1,
                    addItems: true,
                    addItemFilter: null,
                    removeItems: true,
                    removeItemButton: false,
                    editItems: false,
                    duplicateItemsAllowed: true,
                    delimiter: ',',
                    paste: true,
                    searchEnabled: true,
                    searchChoices: true,
                    searchFloor: 1,
                    searchResultLimit: 4,
                    searchFields: ['label', 'value'],
                    position: 'auto',
                    resetScrollPosition: true,
                    shouldSort: true,
                    shouldSortItems: false,
                    sorter: sortByAlpha,
                    placeholder: true,
                    placeholderValue: null,
                    searchPlaceholderValue: null,
                    prependValue: null,
                    appendValue: null,
                    renderSelectedChoices: 'auto',
                    loadingText: 'Loading...',
                    noResultsText: 'No results found',
                    noChoicesText: 'No choices to choose from',
                    itemSelectText: 'Press to select',
                    uniqueItemText: 'Only unique values can be added',
                    customAddItemText: 'Only values matching specific conditions can be added',
                    addItemText: function addItemText(value) {
                        return "Press Enter to add <b>\"" + sanitise(value) + "\"</b>";
                    },
                    maxItemText: function maxItemText(maxItemCount) {
                        return "Only " + maxItemCount + " values can be added";
                    },
                    valueComparer: function valueComparer(value1, value2) {
                        return value1 === value2;
                    },
                    fuseOptions: {
                        includeScore: true
                    },
                    callbackOnInit: null,
                    callbackOnCreateTemplates: null,
                    classNames: DEFAULT_CLASSNAMES
                };
                var EVENTS = {
                    showDropdown: 'showDropdown',
                    hideDropdown: 'hideDropdown',
                    change: 'change',
                    choice: 'choice',
                    search: 'search',
                    addItem: 'addItem',
                    removeItem: 'removeItem',
                    highlightItem: 'highlightItem',
                    highlightChoice: 'highlightChoice'
                };
                var ACTION_TYPES = {
                    ADD_CHOICE: 'ADD_CHOICE',
                    FILTER_CHOICES: 'FILTER_CHOICES',
                    ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
                    CLEAR_CHOICES: 'CLEAR_CHOICES',
                    ADD_GROUP: 'ADD_GROUP',
                    ADD_ITEM: 'ADD_ITEM',
                    REMOVE_ITEM: 'REMOVE_ITEM',
                    HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
                    CLEAR_ALL: 'CLEAR_ALL'
                };
                var KEY_CODES = {
                    BACK_KEY: 46,
                    DELETE_KEY: 8,
                    ENTER_KEY: 13,
                    A_KEY: 65,
                    ESC_KEY: 27,
                    UP_KEY: 38,
                    DOWN_KEY: 40,
                    PAGE_UP_KEY: 33,
                    PAGE_DOWN_KEY: 34
                };
                var TEXT_TYPE = 'text';
                var SELECT_ONE_TYPE = 'select-one';
                var SELECT_MULTIPLE_TYPE = 'select-multiple';
                var SCROLLING_SPEED = 4;
                // CONCATENATED MODULE: ./src/scripts/components/container.js
                /**
                 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
                 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
                 */
                var container_Container = 
                /*#__PURE__*/
                function () {
                    /**
                     * @param {{
                     *  element: HTMLElement,
                     *  type: passedElement['type'],
                     *  classNames: ClassNames,
                     *  position
                     * }} args
                     */
                    function Container(_ref) {
                        var element = _ref.element, type = _ref.type, classNames = _ref.classNames, position = _ref.position;
                        this.element = element;
                        this.classNames = classNames;
                        this.type = type;
                        this.position = position;
                        this.isOpen = false;
                        this.isFlipped = false;
                        this.isFocussed = false;
                        this.isDisabled = false;
                        this.isLoading = false;
                        this._onFocus = this._onFocus.bind(this);
                        this._onBlur = this._onBlur.bind(this);
                    }
                    var _proto = Container.prototype;
                    _proto.addEventListeners = function addEventListeners() {
                        this.element.addEventListener('focus', this._onFocus);
                        this.element.addEventListener('blur', this._onBlur);
                    };
                    _proto.removeEventListeners = function removeEventListeners() {
                        this.element.removeEventListener('focus', this._onFocus);
                        this.element.removeEventListener('blur', this._onBlur);
                    };
                    _proto.shouldFlip = function shouldFlip(dropdownPos) {
                        if (typeof dropdownPos !== 'number') {
                            return false;
                        } // If flip is enabled and the dropdown bottom position is
                        // greater than the window height flip the dropdown.
                        var shouldFlip = false;
                        if (this.position === 'auto') {
                            shouldFlip = !window.matchMedia("(min-height: " + (dropdownPos + 1) + "px)").matches;
                        }
                        else if (this.position === 'top') {
                            shouldFlip = true;
                        }
                        return shouldFlip;
                    };
                    _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
                        this.element.setAttribute('aria-activedescendant', activeDescendantID);
                    };
                    _proto.removeActiveDescendant = function removeActiveDescendant() {
                        this.element.removeAttribute('aria-activedescendant');
                    };
                    _proto.open = function open(dropdownPos) {
                        this.element.classList.add(this.classNames.openState);
                        this.element.setAttribute('aria-expanded', 'true');
                        this.isOpen = true;
                        if (this.shouldFlip(dropdownPos)) {
                            this.element.classList.add(this.classNames.flippedState);
                            this.isFlipped = true;
                        }
                    };
                    _proto.close = function close() {
                        this.element.classList.remove(this.classNames.openState);
                        this.element.setAttribute('aria-expanded', 'false');
                        this.removeActiveDescendant();
                        this.isOpen = false; // A dropdown flips if it does not have space within the page
                        if (this.isFlipped) {
                            this.element.classList.remove(this.classNames.flippedState);
                            this.isFlipped = false;
                        }
                    };
                    _proto.focus = function focus() {
                        if (!this.isFocussed) {
                            this.element.focus();
                        }
                    };
                    _proto.addFocusState = function addFocusState() {
                        this.element.classList.add(this.classNames.focusState);
                    };
                    _proto.removeFocusState = function removeFocusState() {
                        this.element.classList.remove(this.classNames.focusState);
                    };
                    _proto.enable = function enable() {
                        this.element.classList.remove(this.classNames.disabledState);
                        this.element.removeAttribute('aria-disabled');
                        if (this.type === SELECT_ONE_TYPE) {
                            this.element.setAttribute('tabindex', '0');
                        }
                        this.isDisabled = false;
                    };
                    _proto.disable = function disable() {
                        this.element.classList.add(this.classNames.disabledState);
                        this.element.setAttribute('aria-disabled', 'true');
                        if (this.type === SELECT_ONE_TYPE) {
                            this.element.setAttribute('tabindex', '-1');
                        }
                        this.isDisabled = true;
                    };
                    _proto.wrap = function wrap(element) {
                        utils_wrap(element, this.element);
                    };
                    _proto.unwrap = function unwrap(element) {
                        // Move passed element outside this element
                        this.element.parentNode.insertBefore(element, this.element); // Remove this element
                        this.element.parentNode.removeChild(this.element);
                    };
                    _proto.addLoadingState = function addLoadingState() {
                        this.element.classList.add(this.classNames.loadingState);
                        this.element.setAttribute('aria-busy', 'true');
                        this.isLoading = true;
                    };
                    _proto.removeLoadingState = function removeLoadingState() {
                        this.element.classList.remove(this.classNames.loadingState);
                        this.element.removeAttribute('aria-busy');
                        this.isLoading = false;
                    };
                    _proto._onFocus = function _onFocus() {
                        this.isFocussed = true;
                    };
                    _proto._onBlur = function _onBlur() {
                        this.isFocussed = false;
                    };
                    return Container;
                }();
                // CONCATENATED MODULE: ./src/scripts/components/input.js
                function input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function input_createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    input_defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    input_defineProperties(Constructor, staticProps); return Constructor; }
                /**
                 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
                 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
                 */
                var input_Input = 
                /*#__PURE__*/
                function () {
                    /**
                     * @param {{
                     *  element: HTMLInputElement,
                     *  type: passedElement['type'],
                     *  classNames: ClassNames,
                     *  preventPaste: boolean
                     * }} args
                     */
                    function Input(_ref) {
                        var element = _ref.element, type = _ref.type, classNames = _ref.classNames, preventPaste = _ref.preventPaste;
                        this.element = element;
                        this.type = type;
                        this.classNames = classNames;
                        this.preventPaste = preventPaste;
                        this.isFocussed = this.element === document.activeElement;
                        this.isDisabled = element.disabled;
                        this._onPaste = this._onPaste.bind(this);
                        this._onInput = this._onInput.bind(this);
                        this._onFocus = this._onFocus.bind(this);
                        this._onBlur = this._onBlur.bind(this);
                    }
                    /**
                     * @param {string} placeholder
                     */
                    var _proto = Input.prototype;
                    _proto.addEventListeners = function addEventListeners() {
                        this.element.addEventListener('paste', this._onPaste);
                        this.element.addEventListener('input', this._onInput, {
                            passive: true
                        });
                        this.element.addEventListener('focus', this._onFocus, {
                            passive: true
                        });
                        this.element.addEventListener('blur', this._onBlur, {
                            passive: true
                        });
                    };
                    _proto.removeEventListeners = function removeEventListeners() {
                        this.element.removeEventListener('input', this._onInput, {
                            passive: true
                        });
                        this.element.removeEventListener('paste', this._onPaste);
                        this.element.removeEventListener('focus', this._onFocus, {
                            passive: true
                        });
                        this.element.removeEventListener('blur', this._onBlur, {
                            passive: true
                        });
                    };
                    _proto.enable = function enable() {
                        this.element.removeAttribute('disabled');
                        this.isDisabled = false;
                    };
                    _proto.disable = function disable() {
                        this.element.setAttribute('disabled', '');
                        this.isDisabled = true;
                    };
                    _proto.focus = function focus() {
                        if (!this.isFocussed) {
                            this.element.focus();
                        }
                    };
                    _proto.blur = function blur() {
                        if (this.isFocussed) {
                            this.element.blur();
                        }
                    };
                    _proto.clear = function clear(setWidth) {
                        if (setWidth === void 0) {
                            setWidth = true;
                        }
                        if (this.element.value) {
                            this.element.value = '';
                        }
                        if (setWidth) {
                            this.setWidth();
                        }
                        return this;
                    };
                    _proto.setWidth = function setWidth() {
                        // Resize input to contents or placeholder
                        var _this$element = this.element, style = _this$element.style, value = _this$element.value, placeholder = _this$element.placeholder;
                        style.minWidth = placeholder.length + 1 + "ch";
                        style.width = value.length + 1 + "ch";
                    };
                    _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
                        this.element.setAttribute('aria-activedescendant', activeDescendantID);
                    };
                    _proto.removeActiveDescendant = function removeActiveDescendant() {
                        this.element.removeAttribute('aria-activedescendant');
                    };
                    _proto._onInput = function _onInput() {
                        if (this.type !== SELECT_ONE_TYPE) {
                            this.setWidth();
                        }
                    };
                    _proto._onPaste = function _onPaste(event) {
                        if (this.preventPaste) {
                            event.preventDefault();
                        }
                    };
                    _proto._onFocus = function _onFocus() {
                        this.isFocussed = true;
                    };
                    _proto._onBlur = function _onBlur() {
                        this.isFocussed = false;
                    };
                    input_createClass(Input, [{
                            key: "placeholder",
                            set: function set(placeholder) {
                                this.element.placeholder = placeholder;
                            }
                            /**
                             * @returns {string}
                             */
                        }, {
                            key: "value",
                            get: function get() {
                                return sanitise(this.element.value);
                            }
                            /**
                             * @param {string} value
                             */
                            ,
                            set: function set(value) {
                                this.element.value = value;
                            }
                        }]);
                    return Input;
                }();
                // CONCATENATED MODULE: ./src/scripts/components/list.js
                /**
                 * @typedef {import('../../../types/index').Choices.Choice} Choice
                 */
                var list_List = 
                /*#__PURE__*/
                function () {
                    /**
                     * @param {{ element: HTMLElement }} args
                     */
                    function List(_ref) {
                        var element = _ref.element;
                        this.element = element;
                        this.scrollPos = this.element.scrollTop;
                        this.height = this.element.offsetHeight;
                    }
                    var _proto = List.prototype;
                    _proto.clear = function clear() {
                        this.element.innerHTML = '';
                    };
                    _proto.append = function append(node) {
                        this.element.appendChild(node);
                    };
                    _proto.getChild = function getChild(selector) {
                        return this.element.querySelector(selector);
                    };
                    _proto.hasChildren = function hasChildren() {
                        return this.element.hasChildNodes();
                    };
                    _proto.scrollToTop = function scrollToTop() {
                        this.element.scrollTop = 0;
                    };
                    _proto.scrollToChildElement = function scrollToChildElement(element, direction) {
                        var _this = this;
                        if (!element) {
                            return;
                        }
                        var listHeight = this.element.offsetHeight; // Scroll position of dropdown
                        var listScrollPosition = this.element.scrollTop + listHeight;
                        var elementHeight = element.offsetHeight; // Distance from bottom of element to top of parent
                        var elementPos = element.offsetTop + elementHeight; // Difference between the element and scroll position
                        var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                        requestAnimationFrame(function () {
                            _this._animateScroll(destination, direction);
                        });
                    };
                    _proto._scrollDown = function _scrollDown(scrollPos, strength, destination) {
                        var easing = (destination - scrollPos) / strength;
                        var distance = easing > 1 ? easing : 1;
                        this.element.scrollTop = scrollPos + distance;
                    };
                    _proto._scrollUp = function _scrollUp(scrollPos, strength, destination) {
                        var easing = (scrollPos - destination) / strength;
                        var distance = easing > 1 ? easing : 1;
                        this.element.scrollTop = scrollPos - distance;
                    };
                    _proto._animateScroll = function _animateScroll(destination, direction) {
                        var _this2 = this;
                        var strength = SCROLLING_SPEED;
                        var choiceListScrollTop = this.element.scrollTop;
                        var continueAnimation = false;
                        if (direction > 0) {
                            this._scrollDown(choiceListScrollTop, strength, destination);
                            if (choiceListScrollTop < destination) {
                                continueAnimation = true;
                            }
                        }
                        else {
                            this._scrollUp(choiceListScrollTop, strength, destination);
                            if (choiceListScrollTop > destination) {
                                continueAnimation = true;
                            }
                        }
                        if (continueAnimation) {
                            requestAnimationFrame(function () {
                                _this2._animateScroll(destination, direction);
                            });
                        }
                    };
                    return List;
                }();
                // CONCATENATED MODULE: ./src/scripts/components/wrapped-element.js
                function wrapped_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function wrapped_element_createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    wrapped_element_defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    wrapped_element_defineProperties(Constructor, staticProps); return Constructor; }
                /**
                 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
                 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
                 */
                var wrapped_element_WrappedElement = 
                /*#__PURE__*/
                function () {
                    /**
                     * @param {{
                     *  element: HTMLInputElement | HTMLSelectElement,
                     *  classNames: ClassNames,
                     * }} args
                     */
                    function WrappedElement(_ref) {
                        var element = _ref.element, classNames = _ref.classNames;
                        this.element = element;
                        this.classNames = classNames;
                        if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
                            throw new TypeError('Invalid element passed');
                        }
                        this.isDisabled = false;
                    }
                    var _proto = WrappedElement.prototype;
                    _proto.conceal = function conceal() {
                        // Hide passed input
                        this.element.classList.add(this.classNames.input);
                        this.element.hidden = true; // Remove element from tab index
                        this.element.tabIndex = -1; // Backup original styles if any
                        var origStyle = this.element.getAttribute('style');
                        if (origStyle) {
                            this.element.setAttribute('data-choice-orig-style', origStyle);
                        }
                        this.element.setAttribute('data-choice', 'active');
                    };
                    _proto.reveal = function reveal() {
                        // Reinstate passed element
                        this.element.classList.remove(this.classNames.input);
                        this.element.hidden = false;
                        this.element.removeAttribute('tabindex'); // Recover original styles if any
                        var origStyle = this.element.getAttribute('data-choice-orig-style');
                        if (origStyle) {
                            this.element.removeAttribute('data-choice-orig-style');
                            this.element.setAttribute('style', origStyle);
                        }
                        else {
                            this.element.removeAttribute('style');
                        }
                        this.element.removeAttribute('data-choice'); // Re-assign values - this is weird, I know
                        // @todo Figure out why we need to do this
                        this.element.value = this.element.value; // eslint-disable-line no-self-assign
                    };
                    _proto.enable = function enable() {
                        this.element.removeAttribute('disabled');
                        this.element.disabled = false;
                        this.isDisabled = false;
                    };
                    _proto.disable = function disable() {
                        this.element.setAttribute('disabled', '');
                        this.element.disabled = true;
                        this.isDisabled = true;
                    };
                    _proto.triggerEvent = function triggerEvent(eventType, data) {
                        dispatchEvent(this.element, eventType, data);
                    };
                    wrapped_element_createClass(WrappedElement, [{
                            key: "isActive",
                            get: function get() {
                                return this.element.dataset.choice === 'active';
                            }
                        }, {
                            key: "dir",
                            get: function get() {
                                return this.element.dir;
                            }
                        }, {
                            key: "value",
                            get: function get() {
                                return this.element.value;
                            },
                            set: function set(value) {
                                // you must define setter here otherwise it will be readonly property
                                this.element.value = value;
                            }
                        }]);
                    return WrappedElement;
                }();
                // CONCATENATED MODULE: ./src/scripts/components/wrapped-input.js
                function wrapped_input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function wrapped_input_createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    wrapped_input_defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    wrapped_input_defineProperties(Constructor, staticProps); return Constructor; }
                function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
                /**
                 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
                 * @typedef {import('../../../types/index').Choices.Item} Item
                 */
                var WrappedInput = 
                /*#__PURE__*/
                function (_WrappedElement) {
                    _inheritsLoose(WrappedInput, _WrappedElement);
                    /**
                     * @param {{
                     *  element: HTMLInputElement,
                     *  classNames: ClassNames,
                     *  delimiter: string
                     * }} args
                     */
                    function WrappedInput(_ref) {
                        var _this;
                        var element = _ref.element, classNames = _ref.classNames, delimiter = _ref.delimiter;
                        _this = _WrappedElement.call(this, {
                            element: element,
                            classNames: classNames
                        }) || this;
                        _this.delimiter = delimiter;
                        return _this;
                    }
                    /**
                     * @returns {string}
                     */
                    wrapped_input_createClass(WrappedInput, [{
                            key: "value",
                            get: function get() {
                                return this.element.value;
                            }
                            /**
                             * @param {Item[]} items
                             */
                            ,
                            set: function set(items) {
                                var itemValues = items.map(function (_ref2) {
                                    var value = _ref2.value;
                                    return value;
                                });
                                var joinedValues = itemValues.join(this.delimiter);
                                this.element.setAttribute('value', joinedValues);
                                this.element.value = joinedValues;
                            }
                        }]);
                    return WrappedInput;
                }(wrapped_element_WrappedElement);
                // CONCATENATED MODULE: ./src/scripts/components/wrapped-select.js
                function wrapped_select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function wrapped_select_createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    wrapped_select_defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    wrapped_select_defineProperties(Constructor, staticProps); return Constructor; }
                function wrapped_select_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
                /**
                 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
                 * @typedef {import('../../../types/index').Choices.Item} Item
                 * @typedef {import('../../../types/index').Choices.Choice} Choice
                 */
                var WrappedSelect = 
                /*#__PURE__*/
                function (_WrappedElement) {
                    wrapped_select_inheritsLoose(WrappedSelect, _WrappedElement);
                    /**
                     * @param {{
                     *  element: HTMLSelectElement,
                     *  classNames: ClassNames,
                     *  delimiter: string
                     *  template: function
                     * }} args
                     */
                    function WrappedSelect(_ref) {
                        var _this;
                        var element = _ref.element, classNames = _ref.classNames, template = _ref.template;
                        _this = _WrappedElement.call(this, {
                            element: element,
                            classNames: classNames
                        }) || this;
                        _this.template = template;
                        return _this;
                    }
                    var _proto = WrappedSelect.prototype;
                    /**
                     * @param {DocumentFragment} fragment
                     */
                    _proto.appendDocFragment = function appendDocFragment(fragment) {
                        this.element.innerHTML = '';
                        this.element.appendChild(fragment);
                    };
                    wrapped_select_createClass(WrappedSelect, [{
                            key: "placeholderOption",
                            get: function get() {
                                return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
                                    this.element.querySelector('option[placeholder]');
                            }
                            /**
                             * @returns {Element[]}
                             */
                        }, {
                            key: "optionGroups",
                            get: function get() {
                                return Array.from(this.element.getElementsByTagName('OPTGROUP'));
                            }
                            /**
                             * @returns {Item[] | Choice[]}
                             */
                        }, {
                            key: "options",
                            get: function get() {
                                return Array.from(this.element.options);
                            }
                            /**
                             * @param {Item[] | Choice[]} options
                             */
                            ,
                            set: function set(options) {
                                var _this2 = this;
                                var fragment = document.createDocumentFragment();
                                var addOptionToFragment = function addOptionToFragment(data) {
                                    // Create a standard select option
                                    var option = _this2.template(data); // Append it to fragment
                                    fragment.appendChild(option);
                                }; // Add each list item to list
                                options.forEach(function (optionData) {
                                    return addOptionToFragment(optionData);
                                });
                                this.appendDocFragment(fragment);
                            }
                        }]);
                    return WrappedSelect;
                }(wrapped_element_WrappedElement);
                // CONCATENATED MODULE: ./src/scripts/components/index.js
                // CONCATENATED MODULE: ./src/scripts/templates.js
                /**
                 * Helpers to create HTML elements used by Choices
                 * Can be overridden by providing `callbackOnCreateTemplates` option
                 * @typedef {import('../../types/index').Choices.Templates} Templates
                 * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
                 * @typedef {import('../../types/index').Choices.Options} Options
                 * @typedef {import('../../types/index').Choices.Item} Item
                 * @typedef {import('../../types/index').Choices.Choice} Choice
                 * @typedef {import('../../types/index').Choices.Group} Group
                 */
                var TEMPLATES = 
                /** @type {Templates} */
                {
                    /**
                     * @param {Partial<ClassNames>} classNames
                     * @param {"ltr" | "rtl" | "auto"} dir
                     * @param {boolean} isSelectElement
                     * @param {boolean} isSelectOneElement
                     * @param {boolean} searchEnabled
                     * @param {"select-one" | "select-multiple" | "text"} passedElementType
                     */
                    containerOuter: function containerOuter(_ref, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType) {
                        var _containerOuter = _ref.containerOuter;
                        var div = Object.assign(document.createElement('div'), {
                            className: _containerOuter
                        });
                        div.dataset.type = passedElementType;
                        if (dir) {
                            div.dir = dir;
                        }
                        if (isSelectOneElement) {
                            div.tabIndex = 0;
                        }
                        if (isSelectElement) {
                            div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');
                            if (searchEnabled) {
                                div.setAttribute('aria-autocomplete', 'list');
                            }
                        }
                        div.setAttribute('aria-haspopup', 'true');
                        div.setAttribute('aria-expanded', 'false');
                        return div;
                    },
                    /**
                     * @param {Partial<ClassNames>} classNames
                     */
                    containerInner: function containerInner(_ref2) {
                        var _containerInner = _ref2.containerInner;
                        return Object.assign(document.createElement('div'), {
                            className: _containerInner
                        });
                    },
                    /**
                     * @param {Partial<ClassNames>} classNames
                     * @param {boolean} isSelectOneElement
                     */
                    itemList: function itemList(_ref3, isSelectOneElement) {
                        var list = _ref3.list, listSingle = _ref3.listSingle, listItems = _ref3.listItems;
                        return Object.assign(document.createElement('div'), {
                            className: list + " " + (isSelectOneElement ? listSingle : listItems)
                        });
                    },
                    /**
                     * @param {Partial<ClassNames>} classNames
                     * @param {string} value
                     */
                    placeholder: function placeholder(_ref4, value) {
                        var _placeholder = _ref4.placeholder;
                        return Object.assign(document.createElement('div'), {
                            className: _placeholder,
                            innerHTML: value
                        });
                    },
                    /**
                     * @param {Partial<ClassNames>} classNames
                     * @param {Item} item
                     * @param {boolean} removeItemButton
                     */
                    item: function item(_ref5, _ref6, removeItemButton) {
                        var _item = _ref5.item, button = _ref5.button, highlightedState = _ref5.highlightedState, itemSelectable = _ref5.itemSelectable, placeholder = _ref5.placeholder;
                        var id = _ref6.id, value = _ref6.value, label = _ref6.label, customProperties = _ref6.customProperties, active = _ref6.active, disabled = _ref6.disabled, highlighted = _ref6.highlighted, isPlaceholder = _ref6.placeholder;
                        var div = Object.assign(document.createElement('div'), {
                            className: _item,
                            innerHTML: label
                        });
                        Object.assign(div.dataset, {
                            item: '',
                            id: id,
                            value: value,
                            customProperties: customProperties
                        });
                        if (active) {
                            div.setAttribute('aria-selected', 'true');
                        }
                        if (disabled) {
                            div.setAttribute('aria-disabled', 'true');
                        }
                        if (isPlaceholder) {
                            div.classList.add(placeholder);
                        }
                        div.classList.add(highlighted ? highlightedState : itemSelectable);
                        if (removeItemButton) {
                            if (disabled) {
                                div.classList.remove(itemSelectable);
                            }
                            div.dataset.deletable = '';
                            /** @todo This MUST be localizable, not hardcoded! */
                            var REMOVE_ITEM_TEXT = 'Remove item';
                            var removeButton = Object.assign(document.createElement('button'), {
                                type: 'button',
                                className: button,
                                innerHTML: REMOVE_ITEM_TEXT
                            });
                            removeButton.setAttribute('aria-label', REMOVE_ITEM_TEXT + ": '" + value + "'");
                            removeButton.dataset.button = '';
                            div.appendChild(removeButton);
                        }
                        return div;
                    },
                    /**
                     * @param {Partial<ClassNames>} classNames
                     * @param {boolean} isSelectOneElement
                     */
                    choiceList: function choiceList(_ref7, isSelectOneElement) {
                        var list = _ref7.list;
                        var div = Object.assign(document.createElement('div'), {
                            className: list
                        });
                        if (!isSelectOneElement) {
                            div.setAttribute('aria-multiselectable', 'true');
                        }
                        div.setAttribute('role', 'listbox');
                        return div;
                    },
                    /**
                     * @param {Partial<ClassNames>} classNames
                     * @param {Group} group
                     */
                    choiceGroup: function choiceGroup(_ref8, _ref9) {
                        var group = _ref8.group, groupHeading = _ref8.groupHeading, itemDisabled = _ref8.itemDisabled;
                        var id = _ref9.id, value = _ref9.value, disabled = _ref9.disabled;
                        var div = Object.assign(document.createElement('div'), {
                            className: group + " " + (disabled ? itemDisabled : '')
                        });
                        div.setAttribute('role', 'group');
                        Object.assign(div.dataset, {
                            group: '',
                            id: id,
                            value: value
                        });
                        if (disabled) {
                            div.setAttribute('aria-disabled', 'true');
                        }
                        div.appendChild(Object.assign(document.createElement('div'), {
                            className: groupHeading,
                            innerHTML: value
                        }));
                        return div;
                    },
                    /**
                     * @param {Partial<ClassNames>} classNames
                     * @param {Choice} choice
                     * @param {Options['itemSelectText']} selectText
                     */
                    choice: function choice(_ref10, _ref11, selectText) {
                        var item = _ref10.item, itemChoice = _ref10.itemChoice, itemSelectable = _ref10.itemSelectable, selectedState = _ref10.selectedState, itemDisabled = _ref10.itemDisabled, placeholder = _ref10.placeholder;
                        var id = _ref11.id, value = _ref11.value, label = _ref11.label, groupId = _ref11.groupId, elementId = _ref11.elementId, isDisabled = _ref11.disabled, isSelected = _ref11.selected, isPlaceholder = _ref11.placeholder;
                        var div = Object.assign(document.createElement('div'), {
                            id: elementId,
                            innerHTML: label,
                            className: item + " " + itemChoice
                        });
                        if (isSelected) {
                            div.classList.add(selectedState);
                        }
                        if (isPlaceholder) {
                            div.classList.add(placeholder);
                        }
                        div.setAttribute('role', groupId > 0 ? 'treeitem' : 'option');
                        Object.assign(div.dataset, {
                            choice: '',
                            id: id,
                            value: value,
                            selectText: selectText
                        });
                        if (isDisabled) {
                            div.classList.add(itemDisabled);
                            div.dataset.choiceDisabled = '';
                            div.setAttribute('aria-disabled', 'true');
                        }
                        else {
                            div.classList.add(itemSelectable);
                            div.dataset.choiceSelectable = '';
                        }
                        return div;
                    },
                    /**
                     * @param {Partial<ClassNames>} classNames
                     * @param {string} placeholderValue
                     */
                    input: function input(_ref12, placeholderValue) {
                        var _input = _ref12.input, inputCloned = _ref12.inputCloned;
                        var inp = Object.assign(document.createElement('input'), {
                            type: 'text',
                            className: _input + " " + inputCloned,
                            autocomplete: 'off',
                            autocapitalize: 'off',
                            spellcheck: false
                        });
                        inp.setAttribute('role', 'textbox');
                        inp.setAttribute('aria-autocomplete', 'list');
                        inp.setAttribute('aria-label', placeholderValue);
                        return inp;
                    },
                    /**
                     * @param {Partial<ClassNames>} classNames
                     */
                    dropdown: function dropdown(_ref13) {
                        var list = _ref13.list, listDropdown = _ref13.listDropdown;
                        var div = document.createElement('div');
                        div.classList.add(list, listDropdown);
                        div.setAttribute('aria-expanded', 'false');
                        return div;
                    },
                    /**
                     *
                     * @param {Partial<ClassNames>} classNames
                     * @param {string} innerHTML
                     * @param {"no-choices" | "no-results" | ""} type
                     */
                    notice: function notice(_ref14, innerHTML, type) {
                        var item = _ref14.item, itemChoice = _ref14.itemChoice, noResults = _ref14.noResults, noChoices = _ref14.noChoices;
                        if (type === void 0) {
                            type = '';
                        }
                        var classes = [item, itemChoice];
                        if (type === 'no-choices') {
                            classes.push(noChoices);
                        }
                        else if (type === 'no-results') {
                            classes.push(noResults);
                        }
                        return Object.assign(document.createElement('div'), {
                            innerHTML: innerHTML,
                            className: classes.join(' ')
                        });
                    },
                    /**
                     * @param {Item} option
                     */
                    option: function option(_ref15) {
                        var label = _ref15.label, value = _ref15.value, customProperties = _ref15.customProperties, active = _ref15.active, disabled = _ref15.disabled;
                        var opt = new Option(label, value, false, active);
                        if (customProperties) {
                            opt.dataset.customProperties = customProperties;
                        }
                        opt.disabled = disabled;
                        return opt;
                    }
                };
                /* harmony default export */ var templates = (TEMPLATES);
                // CONCATENATED MODULE: ./src/scripts/actions/choices.js
                /**
                 * @typedef {import('redux').Action} Action
                 * @typedef {import('../../../types/index').Choices.Choice} Choice
                 */
                /**
                 * @argument {Choice} choice
                 * @returns {Action & Choice}
                 */
                var choices_addChoice = function addChoice(_ref) {
                    var value = _ref.value, label = _ref.label, id = _ref.id, groupId = _ref.groupId, disabled = _ref.disabled, elementId = _ref.elementId, customProperties = _ref.customProperties, placeholder = _ref.placeholder, keyCode = _ref.keyCode;
                    return {
                        type: ACTION_TYPES.ADD_CHOICE,
                        value: value,
                        label: label,
                        id: id,
                        groupId: groupId,
                        disabled: disabled,
                        elementId: elementId,
                        customProperties: customProperties,
                        placeholder: placeholder,
                        keyCode: keyCode
                    };
                };
                /**
                 * @argument {Choice[]} results
                 * @returns {Action & { results: Choice[] }}
                 */
                var choices_filterChoices = function filterChoices(results) {
                    return {
                        type: ACTION_TYPES.FILTER_CHOICES,
                        results: results
                    };
                };
                /**
                 * @argument {boolean} active
                 * @returns {Action & { active: boolean }}
                 */
                var choices_activateChoices = function activateChoices(active) {
                    if (active === void 0) {
                        active = true;
                    }
                    return {
                        type: ACTION_TYPES.ACTIVATE_CHOICES,
                        active: active
                    };
                };
                /**
                 * @returns {Action}
                 */
                var choices_clearChoices = function clearChoices() {
                    return {
                        type: ACTION_TYPES.CLEAR_CHOICES
                    };
                };
                // CONCATENATED MODULE: ./src/scripts/actions/items.js
                /**
                 * @typedef {import('redux').Action} Action
                 * @typedef {import('../../../types/index').Choices.Item} Item
                 */
                /**
                 * @param {Item} item
                 * @returns {Action & Item}
                 */
                var items_addItem = function addItem(_ref) {
                    var value = _ref.value, label = _ref.label, id = _ref.id, choiceId = _ref.choiceId, groupId = _ref.groupId, customProperties = _ref.customProperties, placeholder = _ref.placeholder, keyCode = _ref.keyCode;
                    return {
                        type: ACTION_TYPES.ADD_ITEM,
                        value: value,
                        label: label,
                        id: id,
                        choiceId: choiceId,
                        groupId: groupId,
                        customProperties: customProperties,
                        placeholder: placeholder,
                        keyCode: keyCode
                    };
                };
                /**
                 * @param {string} id
                 * @param {string} choiceId
                 * @returns {Action & { id: string, choiceId: string }}
                 */
                var items_removeItem = function removeItem(id, choiceId) {
                    return {
                        type: ACTION_TYPES.REMOVE_ITEM,
                        id: id,
                        choiceId: choiceId
                    };
                };
                /**
                 * @param {string} id
                 * @param {boolean} highlighted
                 * @returns {Action & { id: string, highlighted: boolean }}
                 */
                var items_highlightItem = function highlightItem(id, highlighted) {
                    return {
                        type: ACTION_TYPES.HIGHLIGHT_ITEM,
                        id: id,
                        highlighted: highlighted
                    };
                };
                // CONCATENATED MODULE: ./src/scripts/actions/groups.js
                /**
                 * @typedef {import('redux').Action} Action
                 * @typedef {import('../../../types/index').Choices.Group} Group
                 */
                /**
                 * @param {Group} group
                 * @returns {Action & Group}
                 */
                var groups_addGroup = function addGroup(_ref) {
                    var value = _ref.value, id = _ref.id, active = _ref.active, disabled = _ref.disabled;
                    return {
                        type: ACTION_TYPES.ADD_GROUP,
                        value: value,
                        id: id,
                        active: active,
                        disabled: disabled
                    };
                };
                // CONCATENATED MODULE: ./src/scripts/actions/misc.js
                /**
                 * @typedef {import('redux').Action} Action
                 */
                /**
                 * @returns {Action}
                 */
                var clearAll = function clearAll() {
                    return {
                        type: 'CLEAR_ALL'
                    };
                };
                /**
                 * @param {any} state
                 * @returns {Action & { state: object }}
                 */
                var resetTo = function resetTo(state) {
                    return {
                        type: 'RESET_TO',
                        state: state
                    };
                };
                /**
                 * @param {boolean} isLoading
                 * @returns {Action & { isLoading: boolean }}
                 */
                var setIsLoading = function setIsLoading(isLoading) {
                    return {
                        type: 'SET_IS_LOADING',
                        isLoading: isLoading
                    };
                };
                // CONCATENATED MODULE: ./src/scripts/choices.js
                function choices_defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function choices_createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    choices_defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    choices_defineProperties(Constructor, staticProps); return Constructor; }
                /** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */
                var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
                /**
                 * @typedef {import('../../types/index').Choices.Choice} Choice
                 * @typedef {import('../../types/index').Choices.Item} Item
                 * @typedef {import('../../types/index').Choices.Group} Group
                 * @typedef {import('../../types/index').Choices.Options} Options
                 */
                /** @type {Partial<Options>} */
                var USER_DEFAULTS = {};
                /**
                 * Choices
                 * @author Josh Johnson<josh@joshuajohnson.co.uk>
                 */
                var choices_Choices = 
                /*#__PURE__*/
                function () {
                    choices_createClass(Choices, null, [{
                            key: "defaults",
                            get: function get() {
                                return Object.preventExtensions({
                                    get options() {
                                        return USER_DEFAULTS;
                                    },
                                    get templates() {
                                        return TEMPLATES;
                                    }
                                });
                            }
                            /**
                             * @param {string | HTMLInputElement | HTMLSelectElement} element
                             * @param {Partial<Options>} userConfig
                             */
                        }]);
                    function Choices(element, userConfig) {
                        var _this = this;
                        if (element === void 0) {
                            element = '[data-choice]';
                        }
                        if (userConfig === void 0) {
                            userConfig = {};
                        }
                        /** @type {Partial<Options>} */
                        this.config = cjs_default.a.all([DEFAULT_CONFIG, Choices.defaults.options, userConfig], // When merging array configs, replace with a copy of the userConfig array,
                        // instead of concatenating with the default array
                        {
                            arrayMerge: function arrayMerge(_, sourceArray) {
                                return [].concat(sourceArray);
                            }
                        });
                        var invalidConfigOptions = diff(this.config, DEFAULT_CONFIG);
                        if (invalidConfigOptions.length) {
                            console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
                        }
                        var passedElement = typeof element === 'string' ? document.querySelector(element) : element;
                        if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
                            throw TypeError('Expected one of the following types text|select-one|select-multiple');
                        }
                        this._isTextElement = passedElement.type === TEXT_TYPE;
                        this._isSelectOneElement = passedElement.type === SELECT_ONE_TYPE;
                        this._isSelectMultipleElement = passedElement.type === SELECT_MULTIPLE_TYPE;
                        this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                        this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
                        if (!['auto', 'always'].includes(this.config.renderSelectedChoices)) {
                            this.config.renderSelectedChoices = 'auto';
                        }
                        if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
                            var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                            this.config.addItemFilter = re.test.bind(re);
                        }
                        if (this._isTextElement) {
                            this.passedElement = new WrappedInput({
                                element: passedElement,
                                classNames: this.config.classNames,
                                delimiter: this.config.delimiter
                            });
                        }
                        else {
                            this.passedElement = new WrappedSelect({
                                element: passedElement,
                                classNames: this.config.classNames,
                                template: function template(data) {
                                    return _this._templates.option(data);
                                }
                            });
                        }
                        this.initialised = false;
                        this._store = new store_Store();
                        this._initialState = {};
                        this._currentState = {};
                        this._prevState = {};
                        this._currentValue = '';
                        this._canSearch = this.config.searchEnabled;
                        this._isScrollingOnIe = false;
                        this._highlightPosition = 0;
                        this._wasTap = true;
                        this._placeholderValue = this._generatePlaceholderValue();
                        this._baseId = generateId(this.passedElement.element, 'choices-');
                        /**
                         * setting direction in cases where it's explicitly set on passedElement
                         * or when calculated direction is different from the document
                         * @type {HTMLElement['dir']}
                         */
                        this._direction = this.passedElement.dir;
                        if (!this._direction) {
                            var _window$getComputedSt = window.getComputedStyle(this.passedElement.element), elementDirection = _window$getComputedSt.direction;
                            var _window$getComputedSt2 = window.getComputedStyle(document.documentElement), documentDirection = _window$getComputedSt2.direction;
                            if (elementDirection !== documentDirection) {
                                this._direction = elementDirection;
                            }
                        }
                        this._idNames = {
                            itemChoice: 'item-choice'
                        }; // Assign preset groups from passed element
                        this._presetGroups = this.passedElement.optionGroups; // Assign preset options from passed element
                        this._presetOptions = this.passedElement.options; // Assign preset choices from passed object
                        this._presetChoices = this.config.choices; // Assign preset items from passed object first
                        this._presetItems = this.config.items; // Add any values passed from attribute
                        if (this.passedElement.value) {
                            this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter));
                        } // Create array of choices from option elements
                        if (this.passedElement.options) {
                            this.passedElement.options.forEach(function (o) {
                                _this._presetChoices.push({
                                    value: o.value,
                                    label: o.innerHTML,
                                    selected: o.selected,
                                    disabled: o.disabled || o.parentNode.disabled,
                                    placeholder: o.value === '' || o.hasAttribute('placeholder'),
                                    customProperties: o.getAttribute('data-custom-properties')
                                });
                            });
                        }
                        this._render = this._render.bind(this);
                        this._onFocus = this._onFocus.bind(this);
                        this._onBlur = this._onBlur.bind(this);
                        this._onKeyUp = this._onKeyUp.bind(this);
                        this._onKeyDown = this._onKeyDown.bind(this);
                        this._onClick = this._onClick.bind(this);
                        this._onTouchMove = this._onTouchMove.bind(this);
                        this._onTouchEnd = this._onTouchEnd.bind(this);
                        this._onMouseDown = this._onMouseDown.bind(this);
                        this._onMouseOver = this._onMouseOver.bind(this);
                        this._onFormReset = this._onFormReset.bind(this);
                        this._onAKey = this._onAKey.bind(this);
                        this._onEnterKey = this._onEnterKey.bind(this);
                        this._onEscapeKey = this._onEscapeKey.bind(this);
                        this._onDirectionKey = this._onDirectionKey.bind(this);
                        this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently
                        if (this.passedElement.isActive) {
                            if (!this.config.silent) {
                                console.warn('Trying to initialise Choices on element already initialised');
                            }
                            this.initialised = true;
                            return;
                        } // Let's go
                        this.init();
                    }
                    var _proto = Choices.prototype;
                    _proto.init = function init() {
                        if (this.initialised) {
                            return;
                        }
                        this._createTemplates();
                        this._createElements();
                        this._createStructure(); // Set initial state (We need to clone the state because some reducers
                        // modify the inner objects properties in the state) 🤢
                        this._initialState = cloneObject(this._store.state);
                        this._store.subscribe(this._render);
                        this._render();
                        this._addEventListeners();
                        var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');
                        if (shouldDisable) {
                            this.disable();
                        }
                        this.initialised = true;
                        var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function
                        if (callbackOnInit && typeof callbackOnInit === 'function') {
                            callbackOnInit.call(this);
                        }
                    };
                    _proto.destroy = function destroy() {
                        if (!this.initialised) {
                            return;
                        }
                        this._removeEventListeners();
                        this.passedElement.reveal();
                        this.containerOuter.unwrap(this.passedElement.element);
                        this.clearStore();
                        if (this._isSelectElement) {
                            this.passedElement.options = this._presetOptions;
                        }
                        this._templates = null;
                        this.initialised = false;
                    };
                    _proto.enable = function enable() {
                        if (this.passedElement.isDisabled) {
                            this.passedElement.enable();
                        }
                        if (this.containerOuter.isDisabled) {
                            this._addEventListeners();
                            this.input.enable();
                            this.containerOuter.enable();
                        }
                        return this;
                    };
                    _proto.disable = function disable() {
                        if (!this.passedElement.isDisabled) {
                            this.passedElement.disable();
                        }
                        if (!this.containerOuter.isDisabled) {
                            this._removeEventListeners();
                            this.input.disable();
                            this.containerOuter.disable();
                        }
                        return this;
                    };
                    _proto.highlightItem = function highlightItem(item, runEvent) {
                        if (runEvent === void 0) {
                            runEvent = true;
                        }
                        if (!item) {
                            return this;
                        }
                        var id = item.id, _item$groupId = item.groupId, groupId = _item$groupId === void 0 ? -1 : _item$groupId, _item$value = item.value, value = _item$value === void 0 ? '' : _item$value, _item$label = item.label, label = _item$label === void 0 ? '' : _item$label;
                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        this._store.dispatch(items_highlightItem(id, true));
                        if (runEvent) {
                            this.passedElement.triggerEvent(EVENTS.highlightItem, {
                                id: id,
                                value: value,
                                label: label,
                                groupValue: group && group.value ? group.value : null
                            });
                        }
                        return this;
                    };
                    _proto.unhighlightItem = function unhighlightItem(item) {
                        if (!item) {
                            return this;
                        }
                        var id = item.id, _item$groupId2 = item.groupId, groupId = _item$groupId2 === void 0 ? -1 : _item$groupId2, _item$value2 = item.value, value = _item$value2 === void 0 ? '' : _item$value2, _item$label2 = item.label, label = _item$label2 === void 0 ? '' : _item$label2;
                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        this._store.dispatch(items_highlightItem(id, false));
                        this.passedElement.triggerEvent(EVENTS.highlightItem, {
                            id: id,
                            value: value,
                            label: label,
                            groupValue: group && group.value ? group.value : null
                        });
                        return this;
                    };
                    _proto.highlightAll = function highlightAll() {
                        var _this2 = this;
                        this._store.items.forEach(function (item) {
                            return _this2.highlightItem(item);
                        });
                        return this;
                    };
                    _proto.unhighlightAll = function unhighlightAll() {
                        var _this3 = this;
                        this._store.items.forEach(function (item) {
                            return _this3.unhighlightItem(item);
                        });
                        return this;
                    };
                    _proto.removeActiveItemsByValue = function removeActiveItemsByValue(value) {
                        var _this4 = this;
                        this._store.activeItems.filter(function (item) {
                            return item.value === value;
                        }).forEach(function (item) {
                            return _this4._removeItem(item);
                        });
                        return this;
                    };
                    _proto.removeActiveItems = function removeActiveItems(excludedId) {
                        var _this5 = this;
                        this._store.activeItems.filter(function (_ref) {
                            var id = _ref.id;
                            return id !== excludedId;
                        }).forEach(function (item) {
                            return _this5._removeItem(item);
                        });
                        return this;
                    };
                    _proto.removeHighlightedItems = function removeHighlightedItems(runEvent) {
                        var _this6 = this;
                        if (runEvent === void 0) {
                            runEvent = false;
                        }
                        this._store.highlightedActiveItems.forEach(function (item) {
                            _this6._removeItem(item); // If this action was performed by the user
                            // trigger the event
                            if (runEvent) {
                                _this6._triggerChange(item.value);
                            }
                        });
                        return this;
                    };
                    _proto.showDropdown = function showDropdown(preventInputFocus) {
                        var _this7 = this;
                        if (this.dropdown.isActive) {
                            return this;
                        }
                        requestAnimationFrame(function () {
                            _this7.dropdown.show();
                            _this7.containerOuter.open(_this7.dropdown.distanceFromTopWindow);
                            if (!preventInputFocus && _this7._canSearch) {
                                _this7.input.focus();
                            }
                            _this7.passedElement.triggerEvent(EVENTS.showDropdown, {});
                        });
                        return this;
                    };
                    _proto.hideDropdown = function hideDropdown(preventInputBlur) {
                        var _this8 = this;
                        if (!this.dropdown.isActive) {
                            return this;
                        }
                        requestAnimationFrame(function () {
                            _this8.dropdown.hide();
                            _this8.containerOuter.close();
                            if (!preventInputBlur && _this8._canSearch) {
                                _this8.input.removeActiveDescendant();
                                _this8.input.blur();
                            }
                            _this8.passedElement.triggerEvent(EVENTS.hideDropdown, {});
                        });
                        return this;
                    };
                    _proto.getValue = function getValue(valueOnly) {
                        if (valueOnly === void 0) {
                            valueOnly = false;
                        }
                        var values = this._store.activeItems.reduce(function (selectedItems, item) {
                            var itemValue = valueOnly ? item.value : item;
                            selectedItems.push(itemValue);
                            return selectedItems;
                        }, []);
                        return this._isSelectOneElement ? values[0] : values;
                    };
                    _proto.setValue = function setValue(items) {
                        var _this9 = this;
                        if (!this.initialised) {
                            return this;
                        }
                        items.forEach(function (value) {
                            return _this9._setChoiceOrItem(value);
                        });
                        return this;
                    };
                    _proto.setChoiceByValue = function setChoiceByValue(value) {
                        var _this10 = this;
                        if (!this.initialised || this._isTextElement) {
                            return this;
                        } // If only one value has been passed, convert to array
                        var choiceValue = Array.isArray(value) ? value : [value]; // Loop through each value and
                        choiceValue.forEach(function (val) {
                            return _this10._findAndSelectChoiceByValue(val);
                        });
                        return this;
                    };
                    _proto.setChoices = function setChoices(choicesArrayOrFetcher, value, label, replaceChoices) {
                        var _this11 = this;
                        if (choicesArrayOrFetcher === void 0) {
                            choicesArrayOrFetcher = [];
                        }
                        if (value === void 0) {
                            value = 'value';
                        }
                        if (label === void 0) {
                            label = 'label';
                        }
                        if (replaceChoices === void 0) {
                            replaceChoices = false;
                        }
                        if (!this.initialised) {
                            throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                        }
                        if (!this._isSelectElement) {
                            throw new TypeError("setChoices can't be used with INPUT based Choices");
                        }
                        if (typeof value !== 'string' || !value) {
                            throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                        } // Clear choices if needed
                        if (replaceChoices) {
                            this.clearChoices();
                        }
                        if (typeof choicesArrayOrFetcher === 'function') {
                            // it's a choices fetcher function
                            var fetcher = choicesArrayOrFetcher(this);
                            if (typeof Promise === 'function' && fetcher instanceof Promise) {
                                // that's a promise
                                // eslint-disable-next-line compat/compat
                                return new Promise(function (resolve) {
                                    return requestAnimationFrame(resolve);
                                }).then(function () {
                                    return _this11._handleLoadingState(true);
                                }).then(function () {
                                    return fetcher;
                                }).then(function (data) {
                                    return _this11.setChoices(data, value, label, replaceChoices);
                                }).catch(function (err) {
                                    if (!_this11.config.silent) {
                                        console.error(err);
                                    }
                                }).then(function () {
                                    return _this11._handleLoadingState(false);
                                }).then(function () {
                                    return _this11;
                                });
                            } // function returned something else than promise, let's check if it's an array of choices
                            if (!Array.isArray(fetcher)) {
                                throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + typeof fetcher);
                            } // recursion with results, it's sync and choices were cleared already
                            return this.setChoices(fetcher, value, label, false);
                        }
                        if (!Array.isArray(choicesArrayOrFetcher)) {
                            throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                        }
                        this.containerOuter.removeLoadingState();
                        this._startLoading();
                        choicesArrayOrFetcher.forEach(function (groupOrChoice) {
                            if (groupOrChoice.choices) {
                                _this11._addGroup({
                                    id: parseInt(groupOrChoice.id, 10) || null,
                                    group: groupOrChoice,
                                    valueKey: value,
                                    labelKey: label
                                });
                            }
                            else {
                                _this11._addChoice({
                                    value: groupOrChoice[value],
                                    label: groupOrChoice[label],
                                    isSelected: groupOrChoice.selected,
                                    isDisabled: groupOrChoice.disabled,
                                    customProperties: groupOrChoice.customProperties,
                                    placeholder: groupOrChoice.placeholder
                                });
                            }
                        });
                        this._stopLoading();
                        return this;
                    };
                    _proto.clearChoices = function clearChoices() {
                        this._store.dispatch(choices_clearChoices());
                        return this;
                    };
                    _proto.clearStore = function clearStore() {
                        this._store.dispatch(clearAll());
                        return this;
                    };
                    _proto.clearInput = function clearInput() {
                        var shouldSetInputWidth = !this._isSelectOneElement;
                        this.input.clear(shouldSetInputWidth);
                        if (!this._isTextElement && this._canSearch) {
                            this._isSearching = false;
                            this._store.dispatch(choices_activateChoices(true));
                        }
                        return this;
                    };
                    _proto._render = function _render() {
                        if (this._store.isLoading()) {
                            return;
                        }
                        this._currentState = this._store.state;
                        var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                        var shouldRenderChoices = this._isSelectElement;
                        var shouldRenderItems = this._currentState.items !== this._prevState.items;
                        if (!stateChanged) {
                            return;
                        }
                        if (shouldRenderChoices) {
                            this._renderChoices();
                        }
                        if (shouldRenderItems) {
                            this._renderItems();
                        }
                        this._prevState = this._currentState;
                    };
                    _proto._renderChoices = function _renderChoices() {
                        var _this12 = this;
                        var _this$_store = this._store, activeGroups = _this$_store.activeGroups, activeChoices = _this$_store.activeChoices;
                        var choiceListFragment = document.createDocumentFragment();
                        this.choiceList.clear();
                        if (this.config.resetScrollPosition) {
                            requestAnimationFrame(function () {
                                return _this12.choiceList.scrollToTop();
                            });
                        } // If we have grouped options
                        if (activeGroups.length >= 1 && !this._isSearching) {
                            // If we have a placeholder choice along with groups
                            var activePlaceholders = activeChoices.filter(function (activeChoice) {
                                return activeChoice.placeholder === true && activeChoice.groupId === -1;
                            });
                            if (activePlaceholders.length >= 1) {
                                choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                            }
                            choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                        }
                        else if (activeChoices.length >= 1) {
                            choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                        } // If we have choices to show
                        if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                            var activeItems = this._store.activeItems;
                            var canAddItem = this._canAddItem(activeItems, this.input.value); // ...and we can select them
                            if (canAddItem.response) {
                                // ...append them and highlight the first choice
                                this.choiceList.append(choiceListFragment);
                                this._highlightChoice();
                            }
                            else {
                                // ...otherwise show a notice
                                this.choiceList.append(this._getTemplate('notice', canAddItem.notice));
                            }
                        }
                        else {
                            // Otherwise show a notice
                            var dropdownItem;
                            var notice;
                            if (this._isSearching) {
                                notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
                                dropdownItem = this._getTemplate('notice', notice, 'no-results');
                            }
                            else {
                                notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
                                dropdownItem = this._getTemplate('notice', notice, 'no-choices');
                            }
                            this.choiceList.append(dropdownItem);
                        }
                    };
                    _proto._renderItems = function _renderItems() {
                        var activeItems = this._store.activeItems || [];
                        this.itemList.clear(); // Create a fragment to store our list items
                        // (so we don't have to update the DOM for each item)
                        var itemListFragment = this._createItemsFragment(activeItems); // If we have items to add, append them
                        if (itemListFragment.childNodes) {
                            this.itemList.append(itemListFragment);
                        }
                    };
                    _proto._createGroupsFragment = function _createGroupsFragment(groups, choices, fragment) {
                        var _this13 = this;
                        if (fragment === void 0) {
                            fragment = document.createDocumentFragment();
                        }
                        var getGroupChoices = function getGroupChoices(group) {
                            return choices.filter(function (choice) {
                                if (_this13._isSelectOneElement) {
                                    return choice.groupId === group.id;
                                }
                                return choice.groupId === group.id && (_this13.config.renderSelectedChoices === 'always' || !choice.selected);
                            });
                        }; // If sorting is enabled, filter groups
                        if (this.config.shouldSort) {
                            groups.sort(this.config.sorter);
                        }
                        groups.forEach(function (group) {
                            var groupChoices = getGroupChoices(group);
                            if (groupChoices.length >= 1) {
                                var dropdownGroup = _this13._getTemplate('choiceGroup', group);
                                fragment.appendChild(dropdownGroup);
                                _this13._createChoicesFragment(groupChoices, fragment, true);
                            }
                        });
                        return fragment;
                    };
                    _proto._createChoicesFragment = function _createChoicesFragment(choices, fragment, withinGroup) {
                        var _this14 = this;
                        if (fragment === void 0) {
                            fragment = document.createDocumentFragment();
                        }
                        if (withinGroup === void 0) {
                            withinGroup = false;
                        }
                        // Create a fragment to store our list items (so we don't have to update the DOM for each item)
                        var _this$config = this.config, renderSelectedChoices = _this$config.renderSelectedChoices, searchResultLimit = _this$config.searchResultLimit, renderChoiceLimit = _this$config.renderChoiceLimit;
                        var filter = this._isSearching ? sortByScore : this.config.sorter;
                        var appendChoice = function appendChoice(choice) {
                            var shouldRender = renderSelectedChoices === 'auto' ? _this14._isSelectOneElement || !choice.selected : true;
                            if (shouldRender) {
                                var dropdownItem = _this14._getTemplate('choice', choice, _this14.config.itemSelectText);
                                fragment.appendChild(dropdownItem);
                            }
                        };
                        var rendererableChoices = choices;
                        if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
                            rendererableChoices = choices.filter(function (choice) {
                                return !choice.selected;
                            });
                        } // Split array into placeholders and "normal" choices
                        var _rendererableChoices$ = rendererableChoices.reduce(function (acc, choice) {
                            if (choice.placeholder) {
                                acc.placeholderChoices.push(choice);
                            }
                            else {
                                acc.normalChoices.push(choice);
                            }
                            return acc;
                        }, {
                            placeholderChoices: [],
                            normalChoices: []
                        }), placeholderChoices = _rendererableChoices$.placeholderChoices, normalChoices = _rendererableChoices$.normalChoices; // If sorting is enabled or the user is searching, filter choices
                        if (this.config.shouldSort || this._isSearching) {
                            normalChoices.sort(filter);
                        }
                        var choiceLimit = rendererableChoices.length; // Prepend placeholeder
                        var sortedChoices = this._isSelectOneElement ? [].concat(placeholderChoices, normalChoices) : normalChoices;
                        if (this._isSearching) {
                            choiceLimit = searchResultLimit;
                        }
                        else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
                            choiceLimit = renderChoiceLimit;
                        } // Add each choice to dropdown within range
                        for (var i = 0; i < choiceLimit; i += 1) {
                            if (sortedChoices[i]) {
                                appendChoice(sortedChoices[i]);
                            }
                        }
                        return fragment;
                    };
                    _proto._createItemsFragment = function _createItemsFragment(items, fragment) {
                        var _this15 = this;
                        if (fragment === void 0) {
                            fragment = document.createDocumentFragment();
                        }
                        // Create fragment to add elements to
                        var _this$config2 = this.config, shouldSortItems = _this$config2.shouldSortItems, sorter = _this$config2.sorter, removeItemButton = _this$config2.removeItemButton; // If sorting is enabled, filter items
                        if (shouldSortItems && !this._isSelectOneElement) {
                            items.sort(sorter);
                        }
                        if (this._isTextElement) {
                            // Update the value of the hidden input
                            this.passedElement.value = items;
                        }
                        else {
                            // Update the options of the hidden input
                            this.passedElement.options = items;
                        }
                        var addItemToFragment = function addItemToFragment(item) {
                            // Create new list element
                            var listItem = _this15._getTemplate('item', item, removeItemButton); // Append it to list
                            fragment.appendChild(listItem);
                        }; // Add each list item to list
                        items.forEach(addItemToFragment);
                        return fragment;
                    };
                    _proto._triggerChange = function _triggerChange(value) {
                        if (value === undefined || value === null) {
                            return;
                        }
                        this.passedElement.triggerEvent(EVENTS.change, {
                            value: value
                        });
                    };
                    _proto._selectPlaceholderChoice = function _selectPlaceholderChoice() {
                        var placeholderChoice = this._store.placeholderChoice;
                        if (placeholderChoice) {
                            this._addItem({
                                value: placeholderChoice.value,
                                label: placeholderChoice.label,
                                choiceId: placeholderChoice.id,
                                groupId: placeholderChoice.groupId,
                                placeholder: placeholderChoice.placeholder
                            });
                            this._triggerChange(placeholderChoice.value);
                        }
                    };
                    _proto._handleButtonAction = function _handleButtonAction(activeItems, element) {
                        if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
                            return;
                        }
                        var itemId = element.parentNode.getAttribute('data-id');
                        var itemToRemove = activeItems.find(function (item) {
                            return item.id === parseInt(itemId, 10);
                        }); // Remove item associated with button
                        this._removeItem(itemToRemove);
                        this._triggerChange(itemToRemove.value);
                        if (this._isSelectOneElement) {
                            this._selectPlaceholderChoice();
                        }
                    };
                    _proto._handleItemAction = function _handleItemAction(activeItems, element, hasShiftKey) {
                        var _this16 = this;
                        if (hasShiftKey === void 0) {
                            hasShiftKey = false;
                        }
                        if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
                            return;
                        }
                        var passedId = element.getAttribute('data-id'); // We only want to select one item with a click
                        // so we deselect any items that aren't the target
                        // unless shift is being pressed
                        activeItems.forEach(function (item) {
                            if (item.id === parseInt(passedId, 10) && !item.highlighted) {
                                _this16.highlightItem(item);
                            }
                            else if (!hasShiftKey && item.highlighted) {
                                _this16.unhighlightItem(item);
                            }
                        }); // Focus input as without focus, a user cannot do anything with a
                        // highlighted item
                        this.input.focus();
                    };
                    _proto._handleChoiceAction = function _handleChoiceAction(activeItems, element) {
                        if (!activeItems || !element) {
                            return;
                        } // If we are clicking on an option
                        var id = element.dataset.id;
                        var choice = this._store.getChoiceById(id);
                        if (!choice) {
                            return;
                        }
                        var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : null;
                        var hasActiveDropdown = this.dropdown.isActive; // Update choice keyCode
                        choice.keyCode = passedKeyCode;
                        this.passedElement.triggerEvent(EVENTS.choice, {
                            choice: choice
                        });
                        if (!choice.selected && !choice.disabled) {
                            var canAddItem = this._canAddItem(activeItems, choice.value);
                            if (canAddItem.response) {
                                this._addItem({
                                    value: choice.value,
                                    label: choice.label,
                                    choiceId: choice.id,
                                    groupId: choice.groupId,
                                    customProperties: choice.customProperties,
                                    placeholder: choice.placeholder,
                                    keyCode: choice.keyCode
                                });
                                this._triggerChange(choice.value);
                            }
                        }
                        this.clearInput(); // We want to close the dropdown if we are dealing with a single select box
                        if (hasActiveDropdown && this._isSelectOneElement) {
                            this.hideDropdown(true);
                            this.containerOuter.focus();
                        }
                    };
                    _proto._handleBackspace = function _handleBackspace(activeItems) {
                        if (!this.config.removeItems || !activeItems) {
                            return;
                        }
                        var lastItem = activeItems[activeItems.length - 1];
                        var hasHighlightedItems = activeItems.some(function (item) {
                            return item.highlighted;
                        }); // If editing the last item is allowed and there are not other selected items,
                        // we can edit the item value. Otherwise if we can remove items, remove all selected items
                        if (this.config.editItems && !hasHighlightedItems && lastItem) {
                            this.input.value = lastItem.value;
                            this.input.setWidth();
                            this._removeItem(lastItem);
                            this._triggerChange(lastItem.value);
                        }
                        else {
                            if (!hasHighlightedItems) {
                                // Highlight last item if none already highlighted
                                this.highlightItem(lastItem, false);
                            }
                            this.removeHighlightedItems(true);
                        }
                    };
                    _proto._startLoading = function _startLoading() {
                        this._store.dispatch(setIsLoading(true));
                    };
                    _proto._stopLoading = function _stopLoading() {
                        this._store.dispatch(setIsLoading(false));
                    };
                    _proto._handleLoadingState = function _handleLoadingState(setLoading) {
                        if (setLoading === void 0) {
                            setLoading = true;
                        }
                        var placeholderItem = this.itemList.getChild("." + this.config.classNames.placeholder);
                        if (setLoading) {
                            this.disable();
                            this.containerOuter.addLoadingState();
                            if (this._isSelectOneElement) {
                                if (!placeholderItem) {
                                    placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
                                    this.itemList.append(placeholderItem);
                                }
                                else {
                                    placeholderItem.innerHTML = this.config.loadingText;
                                }
                            }
                            else {
                                this.input.placeholder = this.config.loadingText;
                            }
                        }
                        else {
                            this.enable();
                            this.containerOuter.removeLoadingState();
                            if (this._isSelectOneElement) {
                                placeholderItem.innerHTML = this._placeholderValue || '';
                            }
                            else {
                                this.input.placeholder = this._placeholderValue || '';
                            }
                        }
                    };
                    _proto._handleSearch = function _handleSearch(value) {
                        if (!value || !this.input.isFocussed) {
                            return;
                        }
                        var choices = this._store.choices;
                        var _this$config3 = this.config, searchFloor = _this$config3.searchFloor, searchChoices = _this$config3.searchChoices;
                        var hasUnactiveChoices = choices.some(function (option) {
                            return !option.active;
                        }); // Check that we have a value to search and the input was an alphanumeric character
                        if (value && value.length >= searchFloor) {
                            var resultCount = searchChoices ? this._searchChoices(value) : 0; // Trigger search event
                            this.passedElement.triggerEvent(EVENTS.search, {
                                value: value,
                                resultCount: resultCount
                            });
                        }
                        else if (hasUnactiveChoices) {
                            // Otherwise reset choices to active
                            this._isSearching = false;
                            this._store.dispatch(choices_activateChoices(true));
                        }
                    };
                    _proto._canAddItem = function _canAddItem(activeItems, value) {
                        var canAddItem = true;
                        var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;
                        if (!this._isSelectOneElement) {
                            var isDuplicateValue = existsInArray(activeItems, value);
                            if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                                // If there is a max entry limit and we have reached that limit
                                // don't update
                                canAddItem = false;
                                notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                            }
                            if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                                canAddItem = false;
                                notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                            }
                            if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
                                canAddItem = false;
                                notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
                            }
                        }
                        return {
                            response: canAddItem,
                            notice: notice
                        };
                    };
                    _proto._searchChoices = function _searchChoices(value) {
                        var newValue = typeof value === 'string' ? value.trim() : value;
                        var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;
                        if (newValue.length < 1 && newValue === currentValue + " ") {
                            return 0;
                        } // If new value matches the desired length and is not the same as the current value with a space
                        var haystack = this._store.searchableChoices;
                        var needle = newValue;
                        var keys = [].concat(this.config.searchFields);
                        var options = Object.assign(this.config.fuseOptions, {
                            keys: keys
                        });
                        var fuse = new fuse_default.a(haystack, options);
                        var results = fuse.search(needle);
                        this._currentValue = newValue;
                        this._highlightPosition = 0;
                        this._isSearching = true;
                        this._store.dispatch(choices_filterChoices(results));
                        return results.length;
                    };
                    _proto._addEventListeners = function _addEventListeners() {
                        var _document = document, documentElement = _document.documentElement; // capture events - can cancel event processing or propagation
                        documentElement.addEventListener('touchend', this._onTouchEnd, true);
                        this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
                        this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true); // passive events - doesn't call `preventDefault` or `stopPropagation`
                        documentElement.addEventListener('click', this._onClick, {
                            passive: true
                        });
                        documentElement.addEventListener('touchmove', this._onTouchMove, {
                            passive: true
                        });
                        this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
                            passive: true
                        });
                        if (this._isSelectOneElement) {
                            this.containerOuter.element.addEventListener('focus', this._onFocus, {
                                passive: true
                            });
                            this.containerOuter.element.addEventListener('blur', this._onBlur, {
                                passive: true
                            });
                        }
                        this.input.element.addEventListener('keyup', this._onKeyUp, {
                            passive: true
                        });
                        this.input.element.addEventListener('focus', this._onFocus, {
                            passive: true
                        });
                        this.input.element.addEventListener('blur', this._onBlur, {
                            passive: true
                        });
                        if (this.input.element.form) {
                            this.input.element.form.addEventListener('reset', this._onFormReset, {
                                passive: true
                            });
                        }
                        this.input.addEventListeners();
                    };
                    _proto._removeEventListeners = function _removeEventListeners() {
                        var _document2 = document, documentElement = _document2.documentElement;
                        documentElement.removeEventListener('touchend', this._onTouchEnd, true);
                        this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
                        this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
                        documentElement.removeEventListener('click', this._onClick);
                        documentElement.removeEventListener('touchmove', this._onTouchMove);
                        this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);
                        if (this._isSelectOneElement) {
                            this.containerOuter.element.removeEventListener('focus', this._onFocus);
                            this.containerOuter.element.removeEventListener('blur', this._onBlur);
                        }
                        this.input.element.removeEventListener('keyup', this._onKeyUp);
                        this.input.element.removeEventListener('focus', this._onFocus);
                        this.input.element.removeEventListener('blur', this._onBlur);
                        if (this.input.element.form) {
                            this.input.element.form.removeEventListener('reset', this._onFormReset);
                        }
                        this.input.removeEventListeners();
                    };
                    _proto._onKeyDown = function _onKeyDown(event) {
                        var _keyDownActions;
                        var target = event.target, keyCode = event.keyCode, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
                        var activeItems = this._store.activeItems;
                        var hasFocusedInput = this.input.isFocussed;
                        var hasActiveDropdown = this.dropdown.isActive;
                        var hasItems = this.itemList.hasChildren();
                        var keyString = String.fromCharCode(keyCode);
                        var BACK_KEY = KEY_CODES.BACK_KEY, DELETE_KEY = KEY_CODES.DELETE_KEY, ENTER_KEY = KEY_CODES.ENTER_KEY, A_KEY = KEY_CODES.A_KEY, ESC_KEY = KEY_CODES.ESC_KEY, UP_KEY = KEY_CODES.UP_KEY, DOWN_KEY = KEY_CODES.DOWN_KEY, PAGE_UP_KEY = KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = KEY_CODES.PAGE_DOWN_KEY;
                        var hasCtrlDownKeyPressed = ctrlKey || metaKey; // If a user is typing and the dropdown is not active
                        if (!this._isTextElement && /[a-zA-Z0-9-_ ]/.test(keyString)) {
                            this.showDropdown();
                        } // Map keys to key actions
                        var keyDownActions = (_keyDownActions = {}, _keyDownActions[A_KEY] = this._onAKey, _keyDownActions[ENTER_KEY] = this._onEnterKey, _keyDownActions[ESC_KEY] = this._onEscapeKey, _keyDownActions[UP_KEY] = this._onDirectionKey, _keyDownActions[PAGE_UP_KEY] = this._onDirectionKey, _keyDownActions[DOWN_KEY] = this._onDirectionKey, _keyDownActions[PAGE_DOWN_KEY] = this._onDirectionKey, _keyDownActions[DELETE_KEY] = this._onDeleteKey, _keyDownActions[BACK_KEY] = this._onDeleteKey, _keyDownActions); // If keycode has a function, run it
                        if (keyDownActions[keyCode]) {
                            keyDownActions[keyCode]({
                                event: event,
                                target: target,
                                keyCode: keyCode,
                                metaKey: metaKey,
                                activeItems: activeItems,
                                hasFocusedInput: hasFocusedInput,
                                hasActiveDropdown: hasActiveDropdown,
                                hasItems: hasItems,
                                hasCtrlDownKeyPressed: hasCtrlDownKeyPressed
                            });
                        }
                    };
                    _proto._onKeyUp = function _onKeyUp(_ref2) {
                        var target = _ref2.target, keyCode = _ref2.keyCode;
                        var value = this.input.value;
                        var activeItems = this._store.activeItems;
                        var canAddItem = this._canAddItem(activeItems, value);
                        var backKey = KEY_CODES.BACK_KEY, deleteKey = KEY_CODES.DELETE_KEY; // We are typing into a text input and have a value, we want to show a dropdown
                        // notice. Otherwise hide the dropdown
                        if (this._isTextElement) {
                            var canShowDropdownNotice = canAddItem.notice && value;
                            if (canShowDropdownNotice) {
                                var dropdownItem = this._getTemplate('notice', canAddItem.notice);
                                this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                                this.showDropdown(true);
                            }
                            else {
                                this.hideDropdown(true);
                            }
                        }
                        else {
                            var userHasRemovedValue = (keyCode === backKey || keyCode === deleteKey) && !target.value;
                            var canReactivateChoices = !this._isTextElement && this._isSearching;
                            var canSearch = this._canSearch && canAddItem.response;
                            if (userHasRemovedValue && canReactivateChoices) {
                                this._isSearching = false;
                                this._store.dispatch(choices_activateChoices(true));
                            }
                            else if (canSearch) {
                                this._handleSearch(this.input.value);
                            }
                        }
                        this._canSearch = this.config.searchEnabled;
                    };
                    _proto._onAKey = function _onAKey(_ref3) {
                        var hasItems = _ref3.hasItems, hasCtrlDownKeyPressed = _ref3.hasCtrlDownKeyPressed;
                        // If CTRL + A or CMD + A have been pressed and there are items to select
                        if (hasCtrlDownKeyPressed && hasItems) {
                            this._canSearch = false;
                            var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                            if (shouldHightlightAll) {
                                this.highlightAll();
                            }
                        }
                    };
                    _proto._onEnterKey = function _onEnterKey(_ref4) {
                        var event = _ref4.event, target = _ref4.target, activeItems = _ref4.activeItems, hasActiveDropdown = _ref4.hasActiveDropdown;
                        var enterKey = KEY_CODES.ENTER_KEY;
                        var targetWasButton = target.hasAttribute('data-button');
                        if (this._isTextElement && target.value) {
                            var value = this.input.value;
                            var canAddItem = this._canAddItem(activeItems, value);
                            if (canAddItem.response) {
                                this.hideDropdown(true);
                                this._addItem({
                                    value: value
                                });
                                this._triggerChange(value);
                                this.clearInput();
                            }
                        }
                        if (targetWasButton) {
                            this._handleButtonAction(activeItems, target);
                            event.preventDefault();
                        }
                        if (hasActiveDropdown) {
                            var highlightedChoice = this.dropdown.getChild("." + this.config.classNames.highlightedState);
                            if (highlightedChoice) {
                                // add enter keyCode value
                                if (activeItems[0]) {
                                    activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
                                }
                                this._handleChoiceAction(activeItems, highlightedChoice);
                            }
                            event.preventDefault();
                        }
                        else if (this._isSelectOneElement) {
                            this.showDropdown();
                            event.preventDefault();
                        }
                    };
                    _proto._onEscapeKey = function _onEscapeKey(_ref5) {
                        var hasActiveDropdown = _ref5.hasActiveDropdown;
                        if (hasActiveDropdown) {
                            this.hideDropdown(true);
                            this.containerOuter.focus();
                        }
                    };
                    _proto._onDirectionKey = function _onDirectionKey(_ref6) {
                        var event = _ref6.event, hasActiveDropdown = _ref6.hasActiveDropdown, keyCode = _ref6.keyCode, metaKey = _ref6.metaKey;
                        var downKey = KEY_CODES.DOWN_KEY, pageUpKey = KEY_CODES.PAGE_UP_KEY, pageDownKey = KEY_CODES.PAGE_DOWN_KEY; // If up or down key is pressed, traverse through options
                        if (hasActiveDropdown || this._isSelectOneElement) {
                            this.showDropdown();
                            this._canSearch = false;
                            var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                            var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                            var selectableChoiceIdentifier = '[data-choice-selectable]';
                            var nextEl;
                            if (skipKey) {
                                if (directionInt > 0) {
                                    nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier + ":last-of-type");
                                }
                                else {
                                    nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                                }
                            }
                            else {
                                var currentEl = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);
                                if (currentEl) {
                                    nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
                                }
                                else {
                                    nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                                }
                            }
                            if (nextEl) {
                                // We prevent default to stop the cursor moving
                                // when pressing the arrow
                                if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) {
                                    this.choiceList.scrollToChildElement(nextEl, directionInt);
                                }
                                this._highlightChoice(nextEl);
                            } // Prevent default to maintain cursor position whilst
                            // traversing dropdown options
                            event.preventDefault();
                        }
                    };
                    _proto._onDeleteKey = function _onDeleteKey(_ref7) {
                        var event = _ref7.event, target = _ref7.target, hasFocusedInput = _ref7.hasFocusedInput, activeItems = _ref7.activeItems;
                        // If backspace or delete key is pressed and the input has no value
                        if (hasFocusedInput && !target.value && !this._isSelectOneElement) {
                            this._handleBackspace(activeItems);
                            event.preventDefault();
                        }
                    };
                    _proto._onTouchMove = function _onTouchMove() {
                        if (this._wasTap) {
                            this._wasTap = false;
                        }
                    };
                    _proto._onTouchEnd = function _onTouchEnd(event) {
                        var _ref8 = event || event.touches[0], target = _ref8.target;
                        var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                        if (touchWasWithinContainer) {
                            var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                            if (containerWasExactTarget) {
                                if (this._isTextElement) {
                                    this.input.focus();
                                }
                                else if (this._isSelectMultipleElement) {
                                    this.showDropdown();
                                }
                            } // Prevents focus event firing
                            event.stopPropagation();
                        }
                        this._wasTap = true;
                    };
                    _proto._onMouseDown = function _onMouseDown(event) {
                        var target = event.target;
                        if (!(target instanceof HTMLElement)) {
                            return;
                        } // If we have our mouse down on the scrollbar and are on IE11...
                        if (IS_IE11 && this.choiceList.element.contains(target)) {
                            // check if click was on a scrollbar area
                            var firstChoice = 
                            /** @type {HTMLElement} */
                            this.choiceList.element.firstElementChild;
                            var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                            this._isScrollingOnIe = isOnScrollbar;
                        }
                        if (target === this.input.element) {
                            return;
                        }
                        var item = target.closest('[data-button],[data-item],[data-choice]');
                        if (item instanceof HTMLElement) {
                            var hasShiftKey = event.shiftKey;
                            var activeItems = this._store.activeItems;
                            var dataset = item.dataset;
                            if ('button' in dataset) {
                                this._handleButtonAction(activeItems, item);
                            }
                            else if ('item' in dataset) {
                                this._handleItemAction(activeItems, item, hasShiftKey);
                            }
                            else if ('choice' in dataset) {
                                this._handleChoiceAction(activeItems, item);
                            }
                        }
                        event.preventDefault();
                    };
                    _proto._onMouseOver = function _onMouseOver(_ref9) {
                        var target = _ref9.target;
                        if (target instanceof HTMLElement && 'choice' in target.dataset) {
                            this._highlightChoice(target);
                        }
                    };
                    _proto._onClick = function _onClick(_ref10) {
                        var target = _ref10.target;
                        var clickWasWithinContainer = this.containerOuter.element.contains(target);
                        if (clickWasWithinContainer) {
                            if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                                if (this._isTextElement) {
                                    if (document.activeElement !== this.input.element) {
                                        this.input.focus();
                                    }
                                }
                                else {
                                    this.showDropdown();
                                    this.containerOuter.focus();
                                }
                            }
                            else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
                                this.hideDropdown();
                            }
                        }
                        else {
                            var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                            if (hasHighlightedItems) {
                                this.unhighlightAll();
                            }
                            this.containerOuter.removeFocusState();
                            this.hideDropdown(true);
                        }
                    };
                    _proto._onFocus = function _onFocus(_ref11) {
                        var _this17 = this, _focusActions;
                        var target = _ref11.target;
                        var focusWasWithinContainer = this.containerOuter.element.contains(target);
                        if (!focusWasWithinContainer) {
                            return;
                        }
                        var focusActions = (_focusActions = {}, _focusActions[TEXT_TYPE] = function () {
                            if (target === _this17.input.element) {
                                _this17.containerOuter.addFocusState();
                            }
                        }, _focusActions[SELECT_ONE_TYPE] = function () {
                            _this17.containerOuter.addFocusState();
                            if (target === _this17.input.element) {
                                _this17.showDropdown(true);
                            }
                        }, _focusActions[SELECT_MULTIPLE_TYPE] = function () {
                            if (target === _this17.input.element) {
                                _this17.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
                                // isn't already open, focus and show dropdown
                                _this17.containerOuter.addFocusState();
                            }
                        }, _focusActions);
                        focusActions[this.passedElement.element.type]();
                    };
                    _proto._onBlur = function _onBlur(_ref12) {
                        var _this18 = this;
                        var target = _ref12.target;
                        var blurWasWithinContainer = this.containerOuter.element.contains(target);
                        if (blurWasWithinContainer && !this._isScrollingOnIe) {
                            var _blurActions;
                            var activeItems = this._store.activeItems;
                            var hasHighlightedItems = activeItems.some(function (item) {
                                return item.highlighted;
                            });
                            var blurActions = (_blurActions = {}, _blurActions[TEXT_TYPE] = function () {
                                if (target === _this18.input.element) {
                                    _this18.containerOuter.removeFocusState();
                                    if (hasHighlightedItems) {
                                        _this18.unhighlightAll();
                                    }
                                    _this18.hideDropdown(true);
                                }
                            }, _blurActions[SELECT_ONE_TYPE] = function () {
                                _this18.containerOuter.removeFocusState();
                                if (target === _this18.input.element || target === _this18.containerOuter.element && !_this18._canSearch) {
                                    _this18.hideDropdown(true);
                                }
                            }, _blurActions[SELECT_MULTIPLE_TYPE] = function () {
                                if (target === _this18.input.element) {
                                    _this18.containerOuter.removeFocusState();
                                    _this18.hideDropdown(true);
                                    if (hasHighlightedItems) {
                                        _this18.unhighlightAll();
                                    }
                                }
                            }, _blurActions);
                            blurActions[this.passedElement.element.type]();
                        }
                        else {
                            // On IE11, clicking the scollbar blurs our input and thus
                            // closes the dropdown. To stop this, we refocus our input
                            // if we know we are on IE *and* are scrolling.
                            this._isScrollingOnIe = false;
                            this.input.element.focus();
                        }
                    };
                    _proto._onFormReset = function _onFormReset() {
                        this._store.dispatch(resetTo(this._initialState));
                    };
                    _proto._highlightChoice = function _highlightChoice(el) {
                        var _this19 = this;
                        if (el === void 0) {
                            el = null;
                        }
                        var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));
                        if (!choices.length) {
                            return;
                        }
                        var passedEl = el;
                        var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)); // Remove any highlighted choices
                        highlightedChoices.forEach(function (choice) {
                            choice.classList.remove(_this19.config.classNames.highlightedState);
                            choice.setAttribute('aria-selected', 'false');
                        });
                        if (passedEl) {
                            this._highlightPosition = choices.indexOf(passedEl);
                        }
                        else {
                            // Highlight choice based on last known highlight location
                            if (choices.length > this._highlightPosition) {
                                // If we have an option to highlight
                                passedEl = choices[this._highlightPosition];
                            }
                            else {
                                // Otherwise highlight the option before
                                passedEl = choices[choices.length - 1];
                            }
                            if (!passedEl) {
                                passedEl = choices[0];
                            }
                        }
                        passedEl.classList.add(this.config.classNames.highlightedState);
                        passedEl.setAttribute('aria-selected', 'true');
                        this.passedElement.triggerEvent(EVENTS.highlightChoice, {
                            el: passedEl
                        });
                        if (this.dropdown.isActive) {
                            // IE11 ignores aria-label and blocks virtual keyboard
                            // if aria-activedescendant is set without a dropdown
                            this.input.setActiveDescendant(passedEl.id);
                            this.containerOuter.setActiveDescendant(passedEl.id);
                        }
                    };
                    _proto._addItem = function _addItem(_ref13) {
                        var value = _ref13.value, _ref13$label = _ref13.label, label = _ref13$label === void 0 ? null : _ref13$label, _ref13$choiceId = _ref13.choiceId, choiceId = _ref13$choiceId === void 0 ? -1 : _ref13$choiceId, _ref13$groupId = _ref13.groupId, groupId = _ref13$groupId === void 0 ? -1 : _ref13$groupId, _ref13$customProperti = _ref13.customProperties, customProperties = _ref13$customProperti === void 0 ? null : _ref13$customProperti, _ref13$placeholder = _ref13.placeholder, placeholder = _ref13$placeholder === void 0 ? false : _ref13$placeholder, _ref13$keyCode = _ref13.keyCode, keyCode = _ref13$keyCode === void 0 ? null : _ref13$keyCode;
                        var passedValue = typeof value === 'string' ? value.trim() : value;
                        var passedKeyCode = keyCode;
                        var passedCustomProperties = customProperties;
                        var items = this._store.items;
                        var passedLabel = label || passedValue;
                        var passedOptionId = choiceId || -1;
                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        var id = items ? items.length + 1 : 1; // If a prepended value has been passed, prepend it
                        if (this.config.prependValue) {
                            passedValue = this.config.prependValue + passedValue.toString();
                        } // If an appended value has been passed, append it
                        if (this.config.appendValue) {
                            passedValue += this.config.appendValue.toString();
                        }
                        this._store.dispatch(items_addItem({
                            value: passedValue,
                            label: passedLabel,
                            id: id,
                            choiceId: passedOptionId,
                            groupId: groupId,
                            customProperties: customProperties,
                            placeholder: placeholder,
                            keyCode: passedKeyCode
                        }));
                        if (this._isSelectOneElement) {
                            this.removeActiveItems(id);
                        } // Trigger change event
                        this.passedElement.triggerEvent(EVENTS.addItem, {
                            id: id,
                            value: passedValue,
                            label: passedLabel,
                            customProperties: passedCustomProperties,
                            groupValue: group && group.value ? group.value : undefined,
                            keyCode: passedKeyCode
                        });
                        return this;
                    };
                    _proto._removeItem = function _removeItem(item) {
                        if (!item || !isType('Object', item)) {
                            return this;
                        }
                        var id = item.id, value = item.value, label = item.label, choiceId = item.choiceId, groupId = item.groupId;
                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        this._store.dispatch(items_removeItem(id, choiceId));
                        if (group && group.value) {
                            this.passedElement.triggerEvent(EVENTS.removeItem, {
                                id: id,
                                value: value,
                                label: label,
                                groupValue: group.value
                            });
                        }
                        else {
                            this.passedElement.triggerEvent(EVENTS.removeItem, {
                                id: id,
                                value: value,
                                label: label
                            });
                        }
                        return this;
                    };
                    _proto._addChoice = function _addChoice(_ref14) {
                        var value = _ref14.value, _ref14$label = _ref14.label, label = _ref14$label === void 0 ? null : _ref14$label, _ref14$isSelected = _ref14.isSelected, isSelected = _ref14$isSelected === void 0 ? false : _ref14$isSelected, _ref14$isDisabled = _ref14.isDisabled, isDisabled = _ref14$isDisabled === void 0 ? false : _ref14$isDisabled, _ref14$groupId = _ref14.groupId, groupId = _ref14$groupId === void 0 ? -1 : _ref14$groupId, _ref14$customProperti = _ref14.customProperties, customProperties = _ref14$customProperti === void 0 ? null : _ref14$customProperti, _ref14$placeholder = _ref14.placeholder, placeholder = _ref14$placeholder === void 0 ? false : _ref14$placeholder, _ref14$keyCode = _ref14.keyCode, keyCode = _ref14$keyCode === void 0 ? null : _ref14$keyCode;
                        if (typeof value === 'undefined' || value === null) {
                            return;
                        } // Generate unique id
                        var choices = this._store.choices;
                        var choiceLabel = label || value;
                        var choiceId = choices ? choices.length + 1 : 1;
                        var choiceElementId = this._baseId + "-" + this._idNames.itemChoice + "-" + choiceId;
                        this._store.dispatch(choices_addChoice({
                            id: choiceId,
                            groupId: groupId,
                            elementId: choiceElementId,
                            value: value,
                            label: choiceLabel,
                            disabled: isDisabled,
                            customProperties: customProperties,
                            placeholder: placeholder,
                            keyCode: keyCode
                        }));
                        if (isSelected) {
                            this._addItem({
                                value: value,
                                label: choiceLabel,
                                choiceId: choiceId,
                                customProperties: customProperties,
                                placeholder: placeholder,
                                keyCode: keyCode
                            });
                        }
                    };
                    _proto._addGroup = function _addGroup(_ref15) {
                        var _this20 = this;
                        var group = _ref15.group, id = _ref15.id, _ref15$valueKey = _ref15.valueKey, valueKey = _ref15$valueKey === void 0 ? 'value' : _ref15$valueKey, _ref15$labelKey = _ref15.labelKey, labelKey = _ref15$labelKey === void 0 ? 'label' : _ref15$labelKey;
                        var groupChoices = isType('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
                        var groupId = id || Math.floor(new Date().valueOf() * Math.random());
                        var isDisabled = group.disabled ? group.disabled : false;
                        if (groupChoices) {
                            this._store.dispatch(groups_addGroup({
                                value: group.label,
                                id: groupId,
                                active: true,
                                disabled: isDisabled
                            }));
                            var addGroupChoices = function addGroupChoices(choice) {
                                var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                                _this20._addChoice({
                                    value: choice[valueKey],
                                    label: isType('Object', choice) ? choice[labelKey] : choice.innerHTML,
                                    isSelected: choice.selected,
                                    isDisabled: isOptDisabled,
                                    groupId: groupId,
                                    customProperties: choice.customProperties,
                                    placeholder: choice.placeholder
                                });
                            };
                            groupChoices.forEach(addGroupChoices);
                        }
                        else {
                            this._store.dispatch(groups_addGroup({
                                value: group.label,
                                id: group.id,
                                active: false,
                                disabled: group.disabled
                            }));
                        }
                    };
                    _proto._getTemplate = function _getTemplate(template) {
                        var _this$_templates$temp;
                        if (!template) {
                            return null;
                        }
                        var classNames = this.config.classNames;
                        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            args[_key - 1] = arguments[_key];
                        }
                        return (_this$_templates$temp = this._templates[template]).call.apply(_this$_templates$temp, [this, classNames].concat(args));
                    };
                    _proto._createTemplates = function _createTemplates() {
                        var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                        var userTemplates = {};
                        if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
                            userTemplates = callbackOnCreateTemplates.call(this, strToEl);
                        }
                        this._templates = cjs_default()(TEMPLATES, userTemplates);
                    };
                    _proto._createElements = function _createElements() {
                        this.containerOuter = new container_Container({
                            element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            position: this.config.position
                        });
                        this.containerInner = new container_Container({
                            element: this._getTemplate('containerInner'),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            position: this.config.position
                        });
                        this.input = new input_Input({
                            element: this._getTemplate('input', this._placeholderValue),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            preventPaste: !this.config.paste
                        });
                        this.choiceList = new list_List({
                            element: this._getTemplate('choiceList', this._isSelectOneElement)
                        });
                        this.itemList = new list_List({
                            element: this._getTemplate('itemList', this._isSelectOneElement)
                        });
                        this.dropdown = new Dropdown({
                            element: this._getTemplate('dropdown'),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type
                        });
                    };
                    _proto._createStructure = function _createStructure() {
                        // Hide original element
                        this.passedElement.conceal(); // Wrap input in container preserving DOM ordering
                        this.containerInner.wrap(this.passedElement.element); // Wrapper inner container with outer container
                        this.containerOuter.wrap(this.containerInner.element);
                        if (this._isSelectOneElement) {
                            this.input.placeholder = this.config.searchPlaceholderValue || '';
                        }
                        else if (this._placeholderValue) {
                            this.input.placeholder = this._placeholderValue;
                            this.input.setWidth();
                        }
                        this.containerOuter.element.appendChild(this.containerInner.element);
                        this.containerOuter.element.appendChild(this.dropdown.element);
                        this.containerInner.element.appendChild(this.itemList.element);
                        if (!this._isTextElement) {
                            this.dropdown.element.appendChild(this.choiceList.element);
                        }
                        if (!this._isSelectOneElement) {
                            this.containerInner.element.appendChild(this.input.element);
                        }
                        else if (this.config.searchEnabled) {
                            this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                        }
                        if (this._isSelectElement) {
                            this._highlightPosition = 0;
                            this._isSearching = false;
                            this._startLoading();
                            if (this._presetGroups.length) {
                                this._addPredefinedGroups(this._presetGroups);
                            }
                            else {
                                this._addPredefinedChoices(this._presetChoices);
                            }
                            this._stopLoading();
                        }
                        if (this._isTextElement) {
                            this._addPredefinedItems(this._presetItems);
                        }
                    };
                    _proto._addPredefinedGroups = function _addPredefinedGroups(groups) {
                        var _this21 = this;
                        // If we have a placeholder option
                        var placeholderChoice = this.passedElement.placeholderOption;
                        if (placeholderChoice && placeholderChoice.parentNode.tagName === 'SELECT') {
                            this._addChoice({
                                value: placeholderChoice.value,
                                label: placeholderChoice.innerHTML,
                                isSelected: placeholderChoice.selected,
                                isDisabled: placeholderChoice.disabled,
                                placeholder: true
                            });
                        }
                        groups.forEach(function (group) {
                            return _this21._addGroup({
                                group: group,
                                id: group.id || null
                            });
                        });
                    };
                    _proto._addPredefinedChoices = function _addPredefinedChoices(choices) {
                        var _this22 = this;
                        // If sorting is enabled or the user is searching, filter choices
                        if (this.config.shouldSort) {
                            choices.sort(this.config.sorter);
                        }
                        var hasSelectedChoice = choices.some(function (choice) {
                            return choice.selected;
                        });
                        var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
                            return choice.disabled === undefined || !choice.disabled;
                        });
                        choices.forEach(function (choice, index) {
                            var value = choice.value, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                            if (_this22._isSelectElement) {
                                // If the choice is actually a group
                                if (choice.choices) {
                                    _this22._addGroup({
                                        group: choice,
                                        id: choice.id || null
                                    });
                                }
                                else {
                                    /**
                                     * If there is a selected choice already or the choice is not the first in
                                     * the array, add each choice normally.
                                     *
                                     * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
                                     */
                                    var shouldPreselect = _this22._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                                    var isSelected = shouldPreselect ? true : choice.selected;
                                    var isDisabled = choice.disabled;
                                    _this22._addChoice({
                                        value: value,
                                        label: label,
                                        isSelected: isSelected,
                                        isDisabled: isDisabled,
                                        customProperties: customProperties,
                                        placeholder: placeholder
                                    });
                                }
                            }
                            else {
                                _this22._addChoice({
                                    value: value,
                                    label: label,
                                    isSelected: choice.selected,
                                    isDisabled: choice.disabled,
                                    customProperties: customProperties,
                                    placeholder: placeholder
                                });
                            }
                        });
                    };
                    _proto._addPredefinedItems = function _addPredefinedItems(items) {
                        var _this23 = this;
                        items.forEach(function (item) {
                            if (typeof item === 'object' && item.value) {
                                _this23._addItem({
                                    value: item.value,
                                    label: item.label,
                                    choiceId: item.id,
                                    customProperties: item.customProperties,
                                    placeholder: item.placeholder
                                });
                            }
                            if (typeof item === 'string') {
                                _this23._addItem({
                                    value: item
                                });
                            }
                        });
                    };
                    _proto._setChoiceOrItem = function _setChoiceOrItem(item) {
                        var _this24 = this;
                        var itemType = getType(item).toLowerCase();
                        var handleType = {
                            object: function object() {
                                if (!item.value) {
                                    return;
                                } // If we are dealing with a select input, we need to create an option first
                                // that is then selected. For text inputs we can just add items normally.
                                if (!_this24._isTextElement) {
                                    _this24._addChoice({
                                        value: item.value,
                                        label: item.label,
                                        isSelected: true,
                                        isDisabled: false,
                                        customProperties: item.customProperties,
                                        placeholder: item.placeholder
                                    });
                                }
                                else {
                                    _this24._addItem({
                                        value: item.value,
                                        label: item.label,
                                        choiceId: item.id,
                                        customProperties: item.customProperties,
                                        placeholder: item.placeholder
                                    });
                                }
                            },
                            string: function string() {
                                if (!_this24._isTextElement) {
                                    _this24._addChoice({
                                        value: item,
                                        label: item,
                                        isSelected: true,
                                        isDisabled: false
                                    });
                                }
                                else {
                                    _this24._addItem({
                                        value: item
                                    });
                                }
                            }
                        };
                        handleType[itemType]();
                    };
                    _proto._findAndSelectChoiceByValue = function _findAndSelectChoiceByValue(val) {
                        var _this25 = this;
                        var choices = this._store.choices; // Check 'value' property exists and the choice isn't already selected
                        var foundChoice = choices.find(function (choice) {
                            return _this25.config.valueComparer(choice.value, val);
                        });
                        if (foundChoice && !foundChoice.selected) {
                            this._addItem({
                                value: foundChoice.value,
                                label: foundChoice.label,
                                choiceId: foundChoice.id,
                                groupId: foundChoice.groupId,
                                customProperties: foundChoice.customProperties,
                                placeholder: foundChoice.placeholder,
                                keyCode: foundChoice.keyCode
                            });
                        }
                    };
                    _proto._generatePlaceholderValue = function _generatePlaceholderValue() {
                        if (this._isSelectElement) {
                            var placeholderOption = this.passedElement.placeholderOption;
                            return placeholderOption ? placeholderOption.text : false;
                        }
                        var _this$config4 = this.config, placeholder = _this$config4.placeholder, placeholderValue = _this$config4.placeholderValue;
                        var dataset = this.passedElement.element.dataset;
                        if (placeholder) {
                            if (placeholderValue) {
                                return placeholderValue;
                            }
                            if (dataset.placeholder) {
                                return dataset.placeholder;
                            }
                        }
                        return false;
                    };
                    return Choices;
                }();
                /* harmony default export */ var scripts_choices = __webpack_exports__["default"] = (choices_Choices);
                /***/ 
            })
            /******/ 
        ])["default"];
    });
},
503: /* styles/widgets/choices.css.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    exports.default = `.choices{position:relative;margin-bottom:24px;font-size:16px;}.choices:focus{outline:none;}.choices:last-child{margin-bottom:0;}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{background-color:#eaeaea;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none;}.choices.is-disabled .choices__item{cursor:not-allowed;}.choices [hidden]{display:none !important;}.choices[data-type*='select-one']{cursor:pointer;}.choices[data-type*='select-one'] .choices__inner{padding-bottom:7.5px;}.choices[data-type*='select-one'] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #dddddd;background-color:#ffffff;margin:0;}.choices[data-type*='select-one'] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:0.5;}.choices[data-type*='select-one'] .choices__button:hover,.choices[data-type*='select-one'] .choices__button:focus{opacity:1;}.choices[data-type*='select-one'] .choices__button:focus{box-shadow:0px 0px 0px 2px #00bcd4;}.choices[data-type*='select-one'] .choices__item[data-value=''] .choices__button{display:none;}.choices[data-type*='select-one']:after{content:'';height:0;width:0;border-style:solid;border-color:#333333 transparent transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none;}.choices[data-type*='select-one'].is-open:after{border-color:transparent transparent #333333 transparent;margin-top:-7.5px;}.choices[data-type*='select-one'][dir='rtl']:after{left:11.5px;right:auto;}.choices[data-type*='select-one'][dir='rtl'] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0;}.choices[data-type*='select-multiple'] .choices__inner,.choices[data-type*='text'] .choices__inner{cursor:text;}.choices[data-type*='select-multiple'] .choices__button,.choices[data-type*='text'] .choices__button{position:relative;display:inline-block;margin-top:0;margin-right:-4px;margin-bottom:0;margin-left:8px;padding-left:16px;border-left:1px solid #008fa1;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:0.75;border-radius:0;}.choices[data-type*='select-multiple'] .choices__button:hover,.choices[data-type*='select-multiple'] .choices__button:focus,.choices[data-type*='text'] .choices__button:hover,.choices[data-type*='text'] .choices__button:focus{opacity:1;}.choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:#f9f9f9;padding:7.5px 7.5px 3.75px;border:1px solid #dddddd;border-radius:2.5px;font-size:14px;min-height:44px;overflow:hidden;}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7;}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0;}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px;}.choices__list{margin:0;padding-left:0;list-style:none;}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%;}[dir='rtl'] .choices__list--single{padding-right:4px;padding-left:16px;}.choices__list--single .choices__item{width:100%;}.choices__list--multiple{display:inline;}.choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:#00bcd4;border:1px solid #00a5bb;color:#ffffff;word-break:break-all;box-sizing:border-box;}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px;}[dir='rtl'] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px;}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1;}.is-disabled .choices__list--multiple .choices__item{background-color:#aaaaaa;border:1px solid #919191;}.choices__list--dropdown{visibility:hidden;z-index:1;position:absolute;width:100%;background-color:#ffffff;border:1px solid #dddddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all;will-change:visibility;}.choices__list--dropdown.is-active{visibility:visible;}.is-open .choices__list--dropdown{border-color:#b7b7b7;}.is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:0.25rem 0.25rem 0 0;}.choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position;}.choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px;}[dir='rtl'] .choices__list--dropdown .choices__item{text-align:right;}@media (min-width: 640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px;}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%);}[dir='rtl'] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px;}[dir='rtl'] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px;}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2;}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:0.5;}.choices__item{cursor:default;}.choices__item--selectable{cursor:pointer;}.choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none;opacity:0.5;}.choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:gray;}.choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer;}.choices__button:focus{outline:none;}.choices__input{display:inline-block;vertical-align:baseline;background-color:#f9f9f9;font-size:14px;margin-bottom:5px;border:0;border-radius:0;max-width:100%;padding:4px 0 4px 2px;}.choices__input:focus{outline:0;}[dir='rtl'] .choices__input{padding-right:2px;padding-left:0;}.choices__placeholder{opacity:0.5;}.choices{width:100%;}.choices{box-sizing:border-box;}.choices *,.choices *:before,.choices *:after{box-sizing:inherit;}.choices__inner .choices__item.light{background-color:rgba(0, 126, 255, 0.08);border-radius:5px;border:1px solid rgba(0, 126, 255, 0.24);color:#007eff;}.choices__inner .choices__item.solid{background-color:#1f77b4;border:none;border-radius:5px;color:white;}.choices__inner .choices__item.solid .is-highlighted{background-color:#1f77b4;border:none;}.choices__input{background-color:transparent;}.choices__inner{background:transparent;border:1px solid darkgray;border-radius:5px;min-height:unset;}.choices__list{white-space:initial;}.choices__list--dropdown{z-index:100;}.choices[data-type*=select-multiple] .choices__button.light{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDA3ZWZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);}.choices[data-type*=select-multiple] .choices__button.solid{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);border-left:1px solid white;opacity:1;}`;
},
504: /* models/widgets/numeric_input.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const numbro = (0, tslib_1.__importStar)(require(152) /* @bokeh/numbro */);
    const input_widget_1 = require(467) /* ./input_widget */;
    const tick_formatter_1 = require(137) /* ../formatters/tick_formatter */;
    const dom_1 = require(211) /* ../../core/dom */;
    const types_1 = require(8) /* ../../core/util/types */;
    const assert_1 = require(12) /* ../../core/util/assert */;
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    const int_regex = /^[-+]?\d*$/;
    const float_regex = /^[-+]?\d*\.?\d*(?:(?:\d|\d.)[eE][-+]?)*\d*$/;
    class NumericInputView extends input_widget_1.InputWidgetView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.name.change, () => { var _b; return this.input_el.name = (_b = this.model.name) !== null && _b !== void 0 ? _b : ""; });
            this.connect(this.model.properties.value.change, () => {
                this.input_el.value = this.format_value;
                this.old_value = this.input_el.value;
            });
            this.connect(this.model.properties.low.change, () => {
                const { value, low, high } = this.model;
                if (low != null && high != null)
                    (0, assert_1.assert)(low <= high, "Invalid bounds, low must be inferior to high");
                if (value != null && low != null && value < low)
                    this.model.value = low;
            });
            this.connect(this.model.properties.high.change, () => {
                const { value, low, high } = this.model;
                if (low != null && high != null)
                    (0, assert_1.assert)(high >= low, "Invalid bounds, high must be superior to low");
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
            this.input_el = (0, dom_1.input)({
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
    exports.NumericInputView = NumericInputView;
    NumericInputView.__name__ = "NumericInputView";
    class NumericInput extends input_widget_1.InputWidget {
        constructor(attrs) {
            super(attrs);
        }
        _formatter(value, format) {
            if ((0, types_1.isString)(format)) {
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
    exports.NumericInput = NumericInput;
    _a = NumericInput;
    NumericInput.__name__ = "NumericInput";
    (() => {
        _a.prototype.default_view = NumericInputView;
        _a.define(({ Number, String, Enum, Ref, Or, Nullable }) => ({
            value: [Nullable(Number), null],
            placeholder: [String, ""],
            mode: [Enum("int", "float"), "int"],
            format: [Nullable(Or(String, Ref(tick_formatter_1.TickFormatter))), null],
            low: [Nullable(Number), null],
            high: [Nullable(Number), null],
        }));
    })();
},
505: /* models/widgets/pretext.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var _a;
    const markup_1 = require(494) /* ./markup */;
    const dom_1 = require(211) /* ../../core/dom */;
    class PreTextView extends markup_1.MarkupView {
        render() {
            super.render();
            const content = (0, dom_1.pre)({ style: { overflow: "auto" } }, this.model.text);
            this.markup_el.appendChild(content);
        }
    }
    exports.PreTextView = PreTextView;
    PreTextView.__name__ = "PreTextView";
    class PreText extends markup_1.Markup {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.PreText = PreText;
    _a = PreText;
    PreText.__name__ = "PreText";
    (() => {
        _a.prototype.default_view = PreTextView;
    })();
},
506: /* models/widgets/radio_button_group.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const button_group_1 = require(472) /* ./button_group */;
    const dom_1 = require(211) /* ../../core/dom */;
    const buttons = (0, tslib_1.__importStar)(require(325) /* ../../styles/buttons.css */);
    class RadioButtonGroupView extends button_group_1.ButtonGroupView {
        change_active(i) {
            if (this.model.active !== i) {
                this.model.active = i;
            }
        }
        _update_active() {
            const { active } = this.model;
            this._buttons.forEach((button, i) => {
                (0, dom_1.classes)(button).toggle(buttons.active, active === i);
            });
        }
    }
    exports.RadioButtonGroupView = RadioButtonGroupView;
    RadioButtonGroupView.__name__ = "RadioButtonGroupView";
    class RadioButtonGroup extends button_group_1.ButtonGroup {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.RadioButtonGroup = RadioButtonGroup;
    _a = RadioButtonGroup;
    RadioButtonGroup.__name__ = "RadioButtonGroup";
    (() => {
        _a.prototype.default_view = RadioButtonGroupView;
        _a.define(({ Int, Nullable }) => ({
            active: [Nullable(Int), null],
        }));
    })();
},
507: /* models/widgets/radio_group.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const dom_1 = require(211) /* ../../core/dom */;
    const string_1 = require(33) /* ../../core/util/string */;
    const input_group_1 = require(475) /* ./input_group */;
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    class RadioGroupView extends input_group_1.InputGroupView {
        render() {
            super.render();
            const group = (0, dom_1.div)({ class: [inputs.input_group, this.model.inline ? inputs.inline : null] });
            this.shadow_el.appendChild(group);
            const name = (0, string_1.uniqueId)();
            const { active, labels } = this.model;
            this._inputs = [];
            for (let i = 0; i < labels.length; i++) {
                const radio = (0, dom_1.input)({ type: "radio", name, value: `${i}` });
                radio.addEventListener("change", () => this.change_active(i));
                this._inputs.push(radio);
                if (this.model.disabled)
                    radio.disabled = true;
                if (i == active)
                    radio.checked = true;
                const label_el = (0, dom_1.label)(radio, (0, dom_1.span)(labels[i]));
                group.appendChild(label_el);
            }
        }
        change_active(i) {
            this.model.active = i;
        }
    }
    exports.RadioGroupView = RadioGroupView;
    RadioGroupView.__name__ = "RadioGroupView";
    class RadioGroup extends input_group_1.InputGroup {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.RadioGroup = RadioGroup;
    _a = RadioGroup;
    RadioGroup.__name__ = "RadioGroup";
    (() => {
        _a.prototype.default_view = RadioGroupView;
        _a.define(({ Boolean, Int, String, Array, Nullable }) => ({
            active: [Nullable(Int), null],
            labels: [Array(String), []],
            inline: [Boolean, false],
        }));
    })();
},
508: /* models/widgets/range_slider.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const numbro = (0, tslib_1.__importStar)(require(152) /* @bokeh/numbro */);
    const abstract_slider_1 = require(488) /* ./abstract_slider */;
    const types_1 = require(8) /* ../../core/util/types */;
    class RangeSliderView extends abstract_slider_1.AbstractRangeSliderView {
    }
    exports.RangeSliderView = RangeSliderView;
    RangeSliderView.__name__ = "RangeSliderView";
    class RangeSlider extends abstract_slider_1.AbstractSlider {
        constructor(attrs) {
            super(attrs);
            this.behaviour = "drag";
            this.connected = [false, true, false];
        }
        _formatter(value, format) {
            if ((0, types_1.isString)(format))
                return numbro.format(value, format);
            else
                return format.compute(value);
        }
    }
    exports.RangeSlider = RangeSlider;
    _a = RangeSlider;
    RangeSlider.__name__ = "RangeSlider";
    (() => {
        _a.prototype.default_view = RangeSliderView;
        _a.override({
            format: "0[.]00",
        });
    })();
},
509: /* models/widgets/selectbox.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const dom_1 = require(211) /* ../../core/dom */;
    const types_1 = require(8) /* ../../core/util/types */;
    const object_1 = require(9) /* ../../core/util/object */;
    const input_widget_1 = require(467) /* ./input_widget */;
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    class SelectView extends input_widget_1.InputWidgetView {
        constructor() {
            super(...arguments);
            this._known_values = new Set();
        }
        connect_signals() {
            super.connect_signals();
            const { value, options } = this.model.properties;
            this.on_change(value, () => {
                this._update_value();
            });
            this.on_change(options, () => {
                (0, dom_1.empty)(this.input_el);
                (0, dom_1.append)(this.input_el, ...this.options_el());
                this._update_value();
            });
        }
        options_el() {
            const { _known_values } = this;
            _known_values.clear();
            function build_options(values) {
                return values.map((el) => {
                    let value, label;
                    if ((0, types_1.isString)(el))
                        value = label = el;
                    else
                        [value, label] = el;
                    _known_values.add(value);
                    return (0, dom_1.option)({ value }, label);
                });
            }
            const { options } = this.model;
            if ((0, types_1.isArray)(options))
                return build_options(options);
            else
                return (0, object_1.entries)(options).map(([label, values]) => (0, dom_1.optgroup)({ label }, build_options(values)));
        }
        render() {
            super.render();
            this.input_el = (0, dom_1.select)({
                class: inputs.input,
                name: this.model.name,
                disabled: this.model.disabled,
            }, this.options_el());
            this._update_value();
            this.input_el.addEventListener("change", () => this.change_input());
            this.group_el.appendChild(this.input_el);
        }
        change_input() {
            const value = this.input_el.value;
            this.model.value = value;
            super.change_input();
        }
        _update_value() {
            const { value } = this.model;
            if (this._known_values.has(value))
                this.input_el.value = value;
            else
                this.input_el.removeAttribute("value");
        }
    }
    exports.SelectView = SelectView;
    SelectView.__name__ = "SelectView";
    class Select extends input_widget_1.InputWidget {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.Select = Select;
    _a = Select;
    Select.__name__ = "Select";
    (() => {
        _a.prototype.default_view = SelectView;
        _a.define(({ String, Array, Tuple, Dict, Or }) => {
            const Options = Array(Or(String, Tuple(String, String)));
            return {
                value: [String, ""],
                options: [Or(Options, Dict(Options)), []],
            };
        });
    })();
},
510: /* models/widgets/slider.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const numbro = (0, tslib_1.__importStar)(require(152) /* @bokeh/numbro */);
    const abstract_slider_1 = require(488) /* ./abstract_slider */;
    const types_1 = require(8) /* ../../core/util/types */;
    class SliderView extends abstract_slider_1.AbstractSliderView {
    }
    exports.SliderView = SliderView;
    SliderView.__name__ = "SliderView";
    class Slider extends abstract_slider_1.AbstractSlider {
        constructor(attrs) {
            super(attrs);
            this.behaviour = "tap";
            this.connected = [true, false];
        }
        _formatter(value, format) {
            if ((0, types_1.isString)(format))
                return numbro.format(value, format);
            else
                return format.compute(value);
        }
    }
    exports.Slider = Slider;
    _a = Slider;
    Slider.__name__ = "Slider";
    (() => {
        _a.prototype.default_view = SliderView;
        _a.override({
            format: "0[.]00",
        });
    })();
},
511: /* models/widgets/spinner.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var _a;
    const numeric_input_1 = require(504) /* ./numeric_input */;
    const dom_1 = require(211) /* ../../core/dom */;
    const { min, max, floor, abs } = Math;
    function precision(num) {
        return (floor(num) !== num) ? num.toFixed(16).replace(/0+$/, "").split(".")[1].length : 0;
    }
    function debounce(func, wait, immediate = false) {
        //func must works by side effects
        let timeoutId;
        return function (...args) {
            const context = this;
            const doLater = function () {
                timeoutId = undefined;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            const shouldCallNow = immediate && timeoutId === undefined;
            if (timeoutId !== undefined) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(doLater, wait);
            if (shouldCallNow) {
                func.apply(context, args);
            }
        };
    }
    // Inspiration from https://github.com/uNmAnNeR/ispinjs
    class SpinnerView extends numeric_input_1.NumericInputView {
        *buttons() {
            yield this.btn_up_el;
            yield this.btn_down_el;
        }
        initialize() {
            super.initialize();
            this._handles = { interval: undefined, timeout: undefined };
            this._interval = 200;
        }
        connect_signals() {
            super.connect_signals();
            const p = this.model.properties;
            this.on_change(p.disabled, () => {
                for (const btn of this.buttons()) {
                    (0, dom_1.toggle_attribute)(btn, "disabled", this.model.disabled);
                }
            });
        }
        render() {
            super.render();
            this.wrapper_el = (0, dom_1.div)({ class: "bk-spin-wrapper" });
            this.group_el.replaceChild(this.wrapper_el, this.input_el);
            this.btn_up_el = (0, dom_1.button)({ class: "bk-spin-btn bk-spin-btn-up" });
            this.btn_down_el = (0, dom_1.button)({ class: "bk-spin-btn bk-spin-btn-down" });
            this.wrapper_el.appendChild(this.input_el);
            this.wrapper_el.appendChild(this.btn_up_el);
            this.wrapper_el.appendChild(this.btn_down_el);
            for (const btn of this.buttons()) {
                (0, dom_1.toggle_attribute)(btn, "disabled", this.model.disabled);
                btn.addEventListener("mousedown", (evt) => this._btn_mouse_down(evt));
                btn.addEventListener("mouseup", () => this._btn_mouse_up());
                btn.addEventListener("mouseleave", () => this._btn_mouse_leave());
            }
            this.input_el.addEventListener("keydown", (evt) => this._input_key_down(evt));
            this.input_el.addEventListener("keyup", () => this.model.value_throttled = this.model.value);
            this.input_el.addEventListener("wheel", (evt) => this._input_mouse_wheel(evt));
            this.input_el.addEventListener("wheel", debounce(() => {
                this.model.value_throttled = this.model.value;
            }, this.model.wheel_wait, false));
        }
        get precision() {
            const { low, high, step } = this.model;
            const p = precision;
            return max(p(abs(low !== null && low !== void 0 ? low : 0)), p(abs(high !== null && high !== void 0 ? high : 0)), p(abs(step)));
        }
        remove() {
            this._stop_incrementation();
            super.remove();
        }
        _start_incrementation(sign) {
            clearInterval(this._handles.interval);
            this._counter = 0;
            const { step } = this.model;
            const increment_with_increasing_rate = (step) => {
                this._counter += 1;
                if (this._counter % 5 == 0) {
                    const quotient = Math.floor(this._counter / 5);
                    if (quotient < 10) {
                        clearInterval(this._handles.interval);
                        this._handles.interval = setInterval(() => increment_with_increasing_rate(step), this._interval / (quotient + 1));
                    }
                    else if (quotient >= 10 && quotient <= 13) {
                        clearInterval(this._handles.interval);
                        this._handles.interval = setInterval(() => increment_with_increasing_rate(step * 2), this._interval / 10);
                    }
                }
                this.increment(step);
            };
            this._handles.interval = setInterval(() => increment_with_increasing_rate(sign * step), this._interval);
        }
        _stop_incrementation() {
            clearTimeout(this._handles.timeout);
            this._handles.timeout = undefined;
            clearInterval(this._handles.interval);
            this._handles.interval = undefined;
            this.model.value_throttled = this.model.value;
        }
        _btn_mouse_down(evt) {
            evt.preventDefault();
            const sign = evt.currentTarget === (this.btn_up_el) ? 1 : -1;
            this.increment(sign * this.model.step);
            this.input_el.focus();
            //while mouse is down we increment at a certain rate
            this._handles.timeout = setTimeout(() => this._start_incrementation(sign), this._interval);
        }
        _btn_mouse_up() {
            this._stop_incrementation();
        }
        _btn_mouse_leave() {
            this._stop_incrementation();
        }
        _input_mouse_wheel(evt) {
            if (document.activeElement === this.input_el) {
                evt.preventDefault();
                const sign = (evt.deltaY > 0) ? -1 : 1;
                this.increment(sign * this.model.step);
            }
        }
        _input_key_down(evt) {
            switch (evt.keyCode) {
                case dom_1.Keys.Up:
                    evt.preventDefault();
                    return this.increment(this.model.step);
                case dom_1.Keys.Down:
                    evt.preventDefault();
                    return this.increment(-this.model.step);
                case dom_1.Keys.PageUp:
                    evt.preventDefault();
                    return this.increment(this.model.page_step_multiplier * this.model.step);
                case dom_1.Keys.PageDown:
                    evt.preventDefault();
                    return this.increment(-this.model.page_step_multiplier * this.model.step);
            }
        }
        adjust_to_precision(value) {
            return this.bound_value(Number(value.toFixed(this.precision)));
        }
        increment(step) {
            const { low, high } = this.model;
            if (this.model.value == null) {
                if (step > 0)
                    this.model.value = (low != null) ? low : (high != null) ? min(0, high) : 0;
                else if (step < 0)
                    this.model.value = (high != null) ? high : (low != null) ? max(low, 0) : 0;
            }
            else
                this.model.value = this.adjust_to_precision(this.model.value + step);
        }
        change_input() {
            super.change_input();
            this.model.value_throttled = this.model.value;
        }
    }
    exports.SpinnerView = SpinnerView;
    SpinnerView.__name__ = "SpinnerView";
    class Spinner extends numeric_input_1.NumericInput {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.Spinner = Spinner;
    _a = Spinner;
    Spinner.__name__ = "Spinner";
    (() => {
        _a.prototype.default_view = SpinnerView;
        _a.define(({ Number, Nullable }) => ({
            value_throttled: [Nullable(Number), null],
            step: [Number, 1],
            page_step_multiplier: [Number, 10],
            wheel_wait: [Number, 100],
        }));
        _a.override({
            mode: "float",
        });
    })();
},
512: /* models/widgets/textarea_input.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const text_like_input_1 = require(466) /* ./text_like_input */;
    const dom_1 = require(211) /* ../../core/dom */;
    const inputs = (0, tslib_1.__importStar)(require(468) /* ../../styles/widgets/inputs.css */);
    class TextAreaInputView extends text_like_input_1.TextLikeInputView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.rows.change, () => this.input_el.rows = this.model.rows);
            this.connect(this.model.properties.cols.change, () => this.input_el.cols = this.model.cols);
        }
        _render_input() {
            this.input_el = (0, dom_1.textarea)({ class: inputs.input });
        }
        render() {
            super.render();
            this.input_el.cols = this.model.cols;
            this.input_el.rows = this.model.rows;
        }
    }
    exports.TextAreaInputView = TextAreaInputView;
    TextAreaInputView.__name__ = "TextAreaInputView";
    class TextAreaInput extends text_like_input_1.TextLikeInput {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.TextAreaInput = TextAreaInput;
    _a = TextAreaInput;
    TextAreaInput.__name__ = "TextAreaInput";
    (() => {
        _a.prototype.default_view = TextAreaInputView;
        _a.define(({ Int }) => ({
            cols: [Int, 20],
            rows: [Int, 2],
        }));
        _a.override({
            max_length: 500,
        });
    })();
},
513: /* models/widgets/toggle.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require(1) /* tslib */;
    var _a;
    const abstract_button_1 = require(460) /* ./abstract_button */;
    const dom_1 = require(211) /* ../../core/dom */;
    const inputs = (0, tslib_1.__importStar)(require(325) /* ../../styles/buttons.css */);
    class ToggleView extends abstract_button_1.AbstractButtonView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.active.change, () => this._update_active());
        }
        render() {
            super.render();
            this._update_active();
        }
        click() {
            this.model.active = !this.model.active;
            super.click();
        }
        _update_active() {
            (0, dom_1.classes)(this.button_el).toggle(inputs.active, this.model.active);
        }
    }
    exports.ToggleView = ToggleView;
    ToggleView.__name__ = "ToggleView";
    class Toggle extends abstract_button_1.AbstractButton {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.Toggle = Toggle;
    _a = Toggle;
    Toggle.__name__ = "Toggle";
    (() => {
        _a.prototype.default_view = ToggleView;
        _a.define(({ Boolean }) => ({
            active: [Boolean, false],
        }));
        _a.override({
            label: "Toggle",
        });
    })();
},
}, 458, {"models/widgets/main":458,"models/widgets/index":459,"models/widgets/abstract_button":460,"models/widgets/control":461,"models/widgets/widget":538,"models/widgets/abstract_icon":463,"models/widgets/autocomplete_input":464,"models/widgets/text_input":465,"models/widgets/text_like_input":466,"models/widgets/input_widget":467,"styles/widgets/inputs.css":468,"styles/dropdown.css":469,"models/widgets/button":470,"models/widgets/checkbox_button_group":471,"models/widgets/button_group":472,"models/widgets/oriented_control":473,"models/widgets/checkbox_group":474,"models/widgets/input_group":475,"models/widgets/color_picker":476,"models/widgets/date_picker":477,"styles/widgets/flatpickr.css":486,"models/widgets/date_range_slider":487,"models/widgets/abstract_slider":488,"styles/widgets/sliders.css":490,"styles/widgets/nouislider.css":491,"models/widgets/date_slider":492,"models/widgets/div":493,"models/widgets/markup":494,"styles/clearfix.css":495,"models/widgets/dropdown":496,"models/widgets/file_input":497,"models/widgets/multiselect":498,"models/widgets/paragraph":499,"models/widgets/password_input":500,"models/widgets/multichoice":501,"styles/widgets/choices.css":503,"models/widgets/numeric_input":504,"models/widgets/pretext":505,"models/widgets/radio_button_group":506,"models/widgets/radio_group":507,"models/widgets/range_slider":508,"models/widgets/selectbox":509,"models/widgets/slider":510,"models/widgets/spinner":511,"models/widgets/textarea_input":512,"models/widgets/toggle":513}, {});export default plugin;
//# sourceMappingURL=bokeh-widgets.esm.js.map
