var _a;
import { ColorMapper } from "./color_mapper";
import { GlyphRenderer } from "../renderers/glyph_renderer";
import { map, intersection, is_empty } from "../../core/util/array";
import { isNumber, isArray } from "../../core/util/types";
export class ContinuousColorMapper extends ColorMapper {
    constructor(attrs) {
        super(attrs);
        this._scan_data = null;
    }
    connect_signals() {
        super.connect_signals();
        const connect_renderers = () => {
            // TODO: if already connected this will bail. However, it won't remove old connections.
            for (const [renderer] of this.domain) {
                this.connect(renderer.view.change, () => this.update_data());
                this.connect(renderer.data_source.selected.change, () => this.update_data());
            }
        };
        const { high, low, high_color, low_color, palette, nan_color } = this.properties;
        this.on_change([high, low, high_color, low_color, palette, nan_color], () => this.update_data());
        this.connect(this.properties.domain.change, () => connect_renderers());
        connect_renderers();
    }
    update_data() {
        const { domain, palette } = this;
        const all_data = [...this._collect(domain)];
        this._scan_data = this.scan(all_data, palette.length);
        this.metrics_change.emit();
        this.change.emit();
    }
    get metrics() {
        if (this._scan_data == null) {
            this.update_data();
        }
        return this._scan_data;
    }
    *_collect(domain) {
        for (const [renderer, fields] of domain) {
            for (const field of isArray(fields) ? fields : [fields]) {
                if (renderer.view.properties.indices.is_unset)
                    continue;
                const column = renderer.data_source.get_column(field);
                if (column == null)
                    continue;
                let array = renderer.view.indices.select(column);
                const masked = renderer.view.masked;
                const selected = renderer.data_source.selected.indices;
                let subset;
                if (masked != null && selected.length > 0)
                    subset = intersection([...masked], selected);
                else if (masked != null)
                    subset = [...masked];
                else if (selected.length > 0)
                    subset = selected;
                if (subset != null) {
                    array = map(subset, (i) => array[i]);
                }
                if (array.length > 0 && !isNumber(array[0])) {
                    for (const subarray of array) {
                        yield* subarray;
                    }
                }
                else {
                    yield* array;
                }
            }
        }
    }
    _v_compute(data, values, palette, colors) {
        const { nan_color } = colors;
        let { low_color, high_color } = colors;
        if (low_color == null)
            low_color = palette[0];
        if (high_color == null)
            high_color = palette[palette.length - 1];
        const { domain } = this;
        const all_data = !is_empty(domain) ? [...this._collect(domain)] : data;
        this._scan_data = this.scan(all_data, palette.length);
        this.metrics_change.emit();
        for (let i = 0, end = data.length; i < end; i++) {
            const d = data[i];
            if (isNaN(d))
                values[i] = nan_color;
            else
                values[i] = this.cmap(d, palette, low_color, high_color, this._scan_data);
        }
    }
    _colors(conv) {
        return {
            ...super._colors(conv),
            low_color: this.low_color != null ? conv(this.low_color) : undefined,
            high_color: this.high_color != null ? conv(this.high_color) : undefined,
        };
    }
}
_a = ContinuousColorMapper;
ContinuousColorMapper.__name__ = "ContinuousColorMapper";
(() => {
    _a.define(({ Number, String, Ref, Color, Or, Tuple, Array, Nullable }) => {
        return {
            high: [Nullable(Number), null],
            low: [Nullable(Number), null],
            high_color: [Nullable(Color), null],
            low_color: [Nullable(Color), null],
            domain: [Array(Tuple(Ref(GlyphRenderer), Or(String, Array(String)))), []],
        };
    });
})();
//# sourceMappingURL=continuous_color_mapper.js.map