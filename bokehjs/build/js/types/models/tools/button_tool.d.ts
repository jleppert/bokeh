import { Class } from "../../core/class";
import { DOMView } from "../../core/dom_view";
import { Tool, ToolView } from "./tool";
import { Dimensions } from "../../core/enums";
import * as p from "../../core/properties";
import { MenuItem } from "../../core/util/menus";
import type { ToolbarBaseView } from "./toolbar_base";
export declare abstract class ButtonToolButtonView extends DOMView {
    model: ButtonTool;
    readonly parent: ToolbarBaseView;
    el: HTMLElement;
    private _hammer;
    private _menu?;
    initialize(): void;
    remove(): void;
    styles(): string[];
    css_classes(): string[];
    render(): void;
    protected abstract _clicked(): void;
    protected _pressed(): void;
}
export declare abstract class ButtonToolView extends ToolView {
    model: ButtonTool;
}
export declare namespace ButtonTool {
    type Attrs = p.AttrsOf<Props>;
    type Props = Tool.Props & {
        disabled: p.Property<boolean>;
    };
}
export interface ButtonTool extends ButtonTool.Attrs {
}
export declare abstract class ButtonTool extends Tool {
    properties: ButtonTool.Props;
    __view_type__: ButtonToolView;
    constructor(attrs?: Partial<ButtonTool.Attrs>);
    readonly tool_name: string;
    readonly tool_icon?: string;
    button_view: Class<ButtonToolButtonView>;
    protected _get_dim_tooltip(dims: Dimensions): string;
    get tooltip(): string;
    get computed_icon(): string | undefined;
    get menu(): MenuItem[] | null;
}
//# sourceMappingURL=button_tool.d.ts.map