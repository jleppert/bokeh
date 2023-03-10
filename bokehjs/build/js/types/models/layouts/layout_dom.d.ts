import { Model } from "../../model";
import { Signal } from "../../core/signaling";
import { Color } from "../../core/types";
import { Align, SizingMode } from "../../core/enums";
import * as p from "../../core/properties";
import { DOMComponentView } from "../../core/dom_view";
import { SizingPolicy, BoxSizing, Size, Layoutable } from "../../core/layout";
import { CanvasLayer } from "../../core/util/canvas";
import { SerializableState } from "../../core/view";
export declare abstract class LayoutDOMView extends DOMComponentView {
    model: LayoutDOM;
    root: LayoutDOMView;
    readonly parent: DOMComponentView;
    el: HTMLElement;
    protected _child_views: Map<LayoutDOM, LayoutDOMView>;
    protected _on_resize?: () => void;
    protected _offset_parent: Element | null;
    protected _parent_observer?: number;
    protected _viewport: Partial<Size>;
    layout: Layoutable;
    readonly mouseenter: Signal<MouseEvent, this>;
    readonly mouseleave: Signal<MouseEvent, this>;
    get is_layout_root(): boolean;
    get base_font_size(): number | null;
    initialize(): void;
    lazy_initialize(): Promise<void>;
    remove(): void;
    connect_signals(): void;
    disconnect_signals(): void;
    css_classes(): string[];
    abstract get child_models(): LayoutDOM[];
    get child_views(): LayoutDOMView[];
    build_child_views(): Promise<void>;
    render(): void;
    abstract _update_layout(): void;
    update_layout(): void;
    update_position(): void;
    after_layout(): void;
    compute_viewport(): void;
    renderTo(element: Node): void;
    build(): this;
    rebuild(): Promise<void>;
    compute_layout(): void;
    resize_layout(): void;
    invalidate_layout(): void;
    invalidate_render(): void;
    has_finished(): boolean;
    protected _width_policy(): SizingPolicy;
    protected _height_policy(): SizingPolicy;
    box_sizing(): Partial<BoxSizing>;
    protected _viewport_size(): Partial<Size>;
    export(type: "png" | "svg", hidpi?: boolean): CanvasLayer;
    serializable_state(): SerializableState;
}
export declare namespace LayoutDOM {
    type Attrs = p.AttrsOf<Props>;
    type Props = Model.Props & {
        width: p.Property<number | null>;
        height: p.Property<number | null>;
        min_width: p.Property<number | null>;
        min_height: p.Property<number | null>;
        max_width: p.Property<number | null>;
        max_height: p.Property<number | null>;
        margin: p.Property<number | [number, number] | [number, number, number, number] | null>;
        width_policy: p.Property<SizingPolicy | "auto">;
        height_policy: p.Property<SizingPolicy | "auto">;
        aspect_ratio: p.Property<number | "auto" | null>;
        sizing_mode: p.Property<SizingMode | null>;
        visible: p.Property<boolean>;
        disabled: p.Property<boolean>;
        align: p.Property<Align | [Align, Align]>;
        background: p.Property<Color | null>;
        css_classes: p.Property<string[]>;
    };
}
export interface LayoutDOM extends LayoutDOM.Attrs {
}
export declare abstract class LayoutDOM extends Model {
    properties: LayoutDOM.Props;
    __view_type__: LayoutDOMView;
    constructor(attrs?: Partial<LayoutDOM.Attrs>);
}
//# sourceMappingURL=layout_dom.d.ts.map