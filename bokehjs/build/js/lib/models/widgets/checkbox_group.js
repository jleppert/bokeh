var _a;
import { InputGroup, InputGroupView } from "./input_group";
import { input, label, div, span } from "../../core/dom";
import { includes } from "../../core/util/array";
import * as inputs from "../../styles/widgets/inputs.css";
export class CheckboxGroupView extends InputGroupView {
    render() {
        super.render();
        const group = div({ class: [inputs.input_group, this.model.inline ? inputs.inline : null] });
        this.shadow_el.appendChild(group);
        const { active, labels } = this.model;
        this._inputs = [];
        for (let i = 0; i < labels.length; i++) {
            const checkbox = input({ type: "checkbox", value: `${i}` });
            checkbox.addEventListener("change", () => this.change_active(i));
            this._inputs.push(checkbox);
            if (this.model.disabled)
                checkbox.disabled = true;
            if (includes(active, i))
                checkbox.checked = true;
            const label_el = label(checkbox, span(labels[i]));
            group.appendChild(label_el);
        }
    }
    change_active(i) {
        const active = new Set(this.model.active);
        active.has(i) ? active.delete(i) : active.add(i);
        this.model.active = [...active].sort();
    }
}
CheckboxGroupView.__name__ = "CheckboxGroupView";
export class CheckboxGroup extends InputGroup {
    constructor(attrs) {
        super(attrs);
    }
}
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
//# sourceMappingURL=checkbox_group.js.map