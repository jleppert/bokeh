import { CachedVariadicBox } from "../../core/layout/html";
import * as p from "../../core/properties";
import { Widget, WidgetView } from "./widget";
export declare abstract class MarkupView extends WidgetView {
    model: Markup;
    layout: CachedVariadicBox;
    protected markup_el: HTMLElement;
    lazy_initialize(): Promise<void>;
    has_math_disabled(): boolean;
    protected rerender(): void;
    connect_signals(): void;
    styles(): string[];
    _update_layout(): void;
    render(): void;
}
export declare namespace Markup {
    type Attrs = p.AttrsOf<Props>;
    type Props = Widget.Props & {
        text: p.Property<string>;
        style: p.Property<{
            [key: string]: string;
        }>;
        disable_math: p.Property<boolean>;
    };
}
export interface Markup extends Markup.Attrs {
}
export declare abstract class Markup extends Widget {
    properties: Markup.Props;
    __view_type__: MarkupView;
    constructor(attrs?: Partial<Markup.Attrs>);
}
//# sourceMappingURL=markup.d.ts.map