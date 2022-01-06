import { HasProps } from "../core/has_props";
import { Data, Attrs } from "../core/types";
import { Vector } from "../core/vectorization";
import { Property } from "../core/properties";
import { Class } from "../core/class";
import { Location } from "../core/enums";
import { Glyph, GlyphRenderer, Axis, Grid, Range, Scale, Plot, Tool, CoordinateMapping } from "./models";
import { Legend } from "../models/annotations/legend";
import { LegendItem } from "../models/annotations/legend_item";
import { ToolAliases } from "../models/tools/tool";
import { Figure as BaseFigure } from "../models/plots/figure";
import { TypedGlyphRenderer, NamesOf, GlyphAPI } from "./glyph_api";
export declare type ToolName = keyof ToolAliases;
export declare type AxisType = "auto" | "linear" | "datetime" | "log" | "mercator" | null;
export declare namespace Figure {
    type Attrs = Omit<Plot.Attrs, "x_range" | "y_range"> & {
        x_range: Range | [number, number] | ArrayLike<string>;
        y_range: Range | [number, number] | ArrayLike<string>;
        x_axis_type: AxisType;
        y_axis_type: AxisType;
        x_axis_location: Location;
        y_axis_location: Location;
        x_axis_label: Axis["axis_label"];
        y_axis_label: Axis["axis_label"];
        x_minor_ticks: number | "auto";
        y_minor_ticks: number | "auto";
        tools: (Tool | ToolName)[] | string;
    };
}
declare type IModelProxy<T extends HasProps> = {
    each(fn: (model: T, i: number) => void): void;
    [Symbol.iterator](): Generator<T, void, undefined>;
};
declare type PropsOf<T extends HasProps> = {
    [K in keyof T["properties"]]: T["properties"][K] extends Property<infer P> ? P : never;
};
declare type Proxied<T extends HasProps> = PropsOf<T> & IModelProxy<T>;
export declare type ICoordinateMapping = {
    x_source?: Range;
    y_source?: Range;
    x_scale?: Scale;
    y_scale?: Scale;
    x_target: Range;
    y_target: Range;
};
export declare class SubFigure extends GlyphAPI {
    readonly coordinates: CoordinateMapping;
    readonly parent: Figure;
    constructor(coordinates: CoordinateMapping, parent: Figure);
    _glyph<G extends Glyph>(cls: Class<G>, positional: NamesOf<G>, args: unknown[], overrides?: object): TypedGlyphRenderer<G>;
}
export interface Figure extends GlyphAPI {
}
export declare class Figure extends BaseFigure {
    get xaxes(): Axis[];
    get yaxes(): Axis[];
    get axes(): Axis[];
    get xaxis(): Proxied<Axis>;
    get yaxis(): Proxied<Axis>;
    get axis(): Proxied<Axis>;
    get xgrids(): Grid[];
    get ygrids(): Grid[];
    get grids(): Grid[];
    get xgrid(): Proxied<Grid>;
    get ygrid(): Proxied<Grid>;
    get grid(): Proxied<Grid>;
    get legend(): Legend;
    constructor(attrs?: Partial<Figure.Attrs>);
    get coordinates(): CoordinateMapping | null;
    subplot(coordinates: ICoordinateMapping): SubFigure;
    _pop_visuals(cls: Class<HasProps>, props: Attrs, prefix?: string, defaults?: Attrs, override_defaults?: Attrs): Attrs;
    _find_uniq_name(data: Data, name: string): string;
    _fixup_values(cls: Class<HasProps>, data: Data, attrs: Attrs): Set<string>;
    _glyph<G extends Glyph>(cls: Class<G>, positional: NamesOf<G>, args: unknown[], overrides?: object): TypedGlyphRenderer<G>;
    static _get_range(range?: Range | [number, number] | ArrayLike<string>): Range;
    static _get_scale(range_input: Range, axis_type: AxisType): Scale;
    _process_axis_and_grid(axis_type: AxisType, axis_location: Location, minor_ticks: number | "auto" | undefined, axis_label: Axis["axis_label"], rng: Range, dim: 0 | 1): void;
    _get_axis(axis_type: AxisType, range: Range, dim: 0 | 1): Axis | null;
    _get_num_minor_ticks(axis: Axis, num_minor_ticks?: number | "auto"): number;
    _process_tools(tools: (Tool | string)[] | string): Tool[];
    _update_legend(legend_item_label: Vector<string>, glyph_renderer: GlyphRenderer): void;
    protected _handle_legend_label(value: string, legend: Legend, glyph_renderer: GlyphRenderer): void;
    protected _handle_legend_field(field: string, legend: Legend, glyph_renderer: GlyphRenderer): void;
    protected _handle_legend_group(name: string, legend: Legend, glyph_renderer: GlyphRenderer): void;
    protected _find_legend_item(label: Vector<string>, legend: Legend): LegendItem | null;
}
export declare function figure(attributes?: Partial<Figure.Attrs>): Figure;
export {};
//# sourceMappingURL=figure.d.ts.map