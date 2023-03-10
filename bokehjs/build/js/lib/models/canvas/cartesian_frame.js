import { CategoricalScale } from "../scales/categorical_scale";
import { LogScale } from "../scales/log_scale";
import { Range1d } from "../ranges/range1d";
import { DataRange1d } from "../ranges/data_range1d";
import { FactorRange } from "../ranges/factor_range";
import { BBox } from "../../core/util/bbox";
import { entries } from "../../core/util/object";
import { assert } from "../../core/util/assert";
export class CartesianFrame {
    constructor(in_x_scale, in_y_scale, x_range, y_range, extra_x_ranges = {}, extra_y_ranges = {}, extra_x_scales = {}, extra_y_scales = {}) {
        this.in_x_scale = in_x_scale;
        this.in_y_scale = in_y_scale;
        this.x_range = x_range;
        this.y_range = y_range;
        this.extra_x_ranges = extra_x_ranges;
        this.extra_y_ranges = extra_y_ranges;
        this.extra_x_scales = extra_x_scales;
        this.extra_y_scales = extra_y_scales;
        this._bbox = new BBox();
        assert(in_x_scale.properties.source_range.is_unset && in_x_scale.properties.target_range.is_unset);
        assert(in_y_scale.properties.source_range.is_unset && in_y_scale.properties.target_range.is_unset);
        this._configure_scales();
    }
    get bbox() {
        return this._bbox;
    }
    _get_ranges(range, extra_ranges) {
        return new Map(entries({ ...extra_ranges, default: range }));
    }
    /*protected*/ _get_scales(scale, extra_scales, ranges, frame_range) {
        const in_scales = new Map(entries({ ...extra_scales, default: scale }));
        const scales = new Map();
        for (const [name, range] of ranges) {
            const factor_range = range instanceof FactorRange;
            const categorical_scale = scale instanceof CategoricalScale;
            if (factor_range != categorical_scale) {
                throw new Error(`Range ${range.type} is incompatible is Scale ${scale.type}`);
            }
            if (scale instanceof LogScale && range instanceof DataRange1d)
                range.scale_hint = "log";
            const derived_scale = (in_scales.get(name) ?? scale).clone();
            derived_scale.setv({ source_range: range, target_range: frame_range });
            scales.set(name, derived_scale);
        }
        return scales;
    }
    _configure_frame_ranges() {
        // data to/from screen space transform (left-bottom <-> left-top origin)
        const { bbox } = this;
        this._x_target = new Range1d({ start: bbox.left, end: bbox.right });
        this._y_target = new Range1d({ start: bbox.bottom, end: bbox.top });
    }
    _configure_scales() {
        this._configure_frame_ranges();
        this._x_ranges = this._get_ranges(this.x_range, this.extra_x_ranges);
        this._y_ranges = this._get_ranges(this.y_range, this.extra_y_ranges);
        this._x_scales = this._get_scales(this.in_x_scale, this.extra_x_scales, this._x_ranges, this._x_target);
        this._y_scales = this._get_scales(this.in_y_scale, this.extra_y_scales, this._y_ranges, this._y_target);
    }
    _update_scales() {
        this._configure_frame_ranges();
        for (const [, scale] of this._x_scales) {
            scale.target_range = this._x_target;
        }
        for (const [, scale] of this._y_scales) {
            scale.target_range = this._y_target;
        }
    }
    set_geometry(bbox) {
        this._bbox = bbox;
        this._update_scales();
    }
    get x_target() {
        return this._x_target;
    }
    get y_target() {
        return this._y_target;
    }
    get x_ranges() {
        return this._x_ranges;
    }
    get y_ranges() {
        return this._y_ranges;
    }
    get ranges() {
        return new Set([...this.x_ranges.values(), ...this.y_ranges.values()]);
    }
    get x_scales() {
        return this._x_scales;
    }
    get y_scales() {
        return this._y_scales;
    }
    get scales() {
        return new Set([...this.x_scales.values(), ...this.y_scales.values()]);
    }
    get x_scale() {
        return this._x_scales.get("default");
    }
    get y_scale() {
        return this._y_scales.get("default");
    }
}
CartesianFrame.__name__ = "CartesianFrame";
//# sourceMappingURL=cartesian_frame.js.map