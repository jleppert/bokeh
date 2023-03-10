var _a;
import { input, label, div, span } from "../../core/dom";
import { uniqueId } from "../../core/util/string";
import { InputGroup, InputGroupView } from "./input_group";
import * as inputs from "../../styles/widgets/inputs.css";
export class RadioGroupView extends InputGroupView {
    render() {
        super.render();
        const group = div({ class: [inputs.input_group, this.model.inline ? inputs.inline : null] });
        this.shadow_el.appendChild(group);
        const name = uniqueId();
        const { active, labels } = this.model;
        this._inputs = [];
        for (let i = 0; i < labels.length; i++) {
            const radio = input({ type: "radio", name, value: `${i}` });
            radio.addEventListener("change", () => this.change_active(i));
            this._inputs.push(radio);
            if (this.model.disabled)
                radio.disabled = true;
            if (i == active)
                radio.checked = true;
            const label_el = label(radio, span(labels[i]));
            group.appendChild(label_el);
        }
    }
    change_active(i) {
        this.model.active = i;
    }
}
RadioGroupView.__name__ = "RadioGroupView";
export class RadioGroup extends InputGroup {
    constructor(attrs) {
        super(attrs);
    }
}
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
//# sourceMappingURL=radio_group.js.map