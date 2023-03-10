var _a;
import { DataRange } from "./data_range";
import { PaddingUnits, StartEnd } from "../../core/enums";
import { flat_map } from "../../core/util/iterator";
import { logger } from "../../core/logging";
import * as bbox from "../../core/util/bbox";
import { compute_renderers } from "../util";
export class DataRange1d extends DataRange {
    constructor(attrs) {
        super(attrs);
        this.plots = new Set();
        this.have_updated_interactively = false;
    }
    initialize() {
        super.initialize();
        this._initial_start = isNaN(this.start) ? null : this.start;
        this._initial_end = isNaN(this.end) ? null : this.end;
        this._initial_range_padding = this.range_padding;
        this._initial_range_padding_units = this.range_padding_units;
        this._initial_follow = this.follow;
        this._initial_follow_interval = this.follow_interval;
        this._initial_default_span = this.default_span;
        this._plot_bounds = new Map();
    }
    get min() {
        return Math.min(this.start, this.end);
    }
    get max() {
        return Math.max(this.start, this.end);
    }
    computed_renderers() {
        // TODO (bev) check that renderers actually configured with this range
        const { renderers } = this;
        const all_renderers = flat_map(this.plots, (plot) => plot.data_renderers);
        return compute_renderers(renderers.length == 0 ? "auto" : renderers, [...all_renderers]);
    }
    /*protected*/ _compute_plot_bounds(renderers, bounds) {
        let result = bbox.empty();
        for (const r of renderers) {
            const rect = bounds.get(r);
            if (rect != null && (r.visible || !this.only_visible)) {
                result = bbox.union(result, rect);
            }
        }
        return result;
    }
    adjust_bounds_for_aspect(bounds, ratio) {
        const result = bbox.empty();
        let width = bounds.x1 - bounds.x0;
        if (width <= 0) {
            width = 1.0;
        }
        let height = bounds.y1 - bounds.y0;
        if (height <= 0) {
            height = 1.0;
        }
        const xcenter = 0.5 * (bounds.x1 + bounds.x0);
        const ycenter = 0.5 * (bounds.y1 + bounds.y0);
        if (width < ratio * height) {
            width = ratio * height;
        }
        else {
            height = width / ratio;
        }
        result.x1 = xcenter + 0.5 * width;
        result.x0 = xcenter - 0.5 * width;
        result.y1 = ycenter + 0.5 * height;
        result.y0 = ycenter - 0.5 * height;
        return result;
    }
    /*protected*/ _compute_min_max(plot_bounds, dimension) {
        let overall = bbox.empty();
        for (const [plot, rect] of plot_bounds) {
            if (plot.visible)
                overall = bbox.union(overall, rect);
        }
        let min, max;
        if (dimension == 0)
            [min, max] = [overall.x0, overall.x1];
        else
            [min, max] = [overall.y0, overall.y1];
        return [min, max];
    }
    /*protected*/ _compute_range(min, max) {
        const range_padding = this.range_padding; // XXX: ? 0
        let start, end;
        if (this._initial_start != null)
            min = this._initial_start;
        if (this._initial_end != null)
            max = this._initial_end;
        if (this.scale_hint == "log") {
            if (isNaN(min) || !isFinite(min) || min <= 0) {
                if (isNaN(max) || !isFinite(max) || max <= 0)
                    min = 0.1;
                else
                    min = max / 100;
                logger.warn(`could not determine minimum data value for log axis, DataRange1d using value ${min}`);
            }
            if (isNaN(max) || !isFinite(max) || max <= 0) {
                if (isNaN(min) || !isFinite(min) || min <= 0)
                    max = 10;
                else
                    max = min * 100;
                logger.warn(`could not determine maximum data value for log axis, DataRange1d using value ${max}`);
            }
            let center, span;
            if (max == min) {
                span = this.default_span + 0.001;
                center = Math.log(min) / Math.log(10);
            }
            else {
                let log_min, log_max;
                if (this.range_padding_units == "percent") {
                    log_min = Math.log(min) / Math.log(10);
                    log_max = Math.log(max) / Math.log(10);
                    span = (log_max - log_min) * (1 + range_padding);
                }
                else {
                    log_min = Math.log(min - range_padding) / Math.log(10);
                    log_max = Math.log(max + range_padding) / Math.log(10);
                    span = log_max - log_min;
                }
                center = (log_min + log_max) / 2.0;
            }
            start = 10 ** (center - span / 2.0);
            end = 10 ** (center + span / 2.0);
        }
        else {
            let span;
            if (max == min)
                span = this.default_span;
            else {
                if (this.range_padding_units == "percent")
                    span = (max - min) * (1 + range_padding);
                else
                    span = (max - min) + 2 * range_padding;
            }
            const center = (max + min) / 2.0;
            start = center - span / 2.0;
            end = center + span / 2.0;
        }
        let follow_sign = +1;
        if (this.flipped) {
            [start, end] = [end, start];
            follow_sign = -1;
        }
        const follow_interval = this.follow_interval;
        if (follow_interval != null && Math.abs(start - end) > follow_interval) {
            if (this.follow == "start")
                end = start + follow_sign * follow_interval;
            else if (this.follow == "end")
                start = end - follow_sign * follow_interval;
        }
        return [start, end];
    }
    update(bounds, dimension, plot, ratio) {
        if (this.have_updated_interactively)
            return;
        const renderers = this.computed_renderers();
        // update the raw data bounds for all renderers we care about
        let total_bounds = this._compute_plot_bounds(renderers, bounds);
        if (ratio != null)
            total_bounds = this.adjust_bounds_for_aspect(total_bounds, ratio);
        this._plot_bounds.set(plot, total_bounds);
        // compute the min/mix for our specified dimension
        const [min, max] = this._compute_min_max(this._plot_bounds.entries(), dimension);
        // derive start, end from bounds and data range config
        let [start, end] = this._compute_range(min, max);
        if (this._initial_start != null) {
            if (this.scale_hint == "log") {
                if (this._initial_start > 0)
                    start = this._initial_start;
            }
            else
                start = this._initial_start;
        }
        if (this._initial_end != null) {
            if (this.scale_hint == "log") {
                if (this._initial_end > 0)
                    end = this._initial_end;
            }
            else
                end = this._initial_end;
        }
        let needs_emit = false;
        if (this.bounds == "auto") {
            this.setv({ bounds: [start, end] }, { silent: true });
            needs_emit = true;
        }
        // only trigger updates when there are changes
        const [_start, _end] = [this.start, this.end];
        if (start != _start || end != _end) {
            const new_range = {};
            if (start != _start)
                new_range.start = start;
            if (end != _end)
                new_range.end = end;
            this.setv(new_range);
            needs_emit = false;
        }
        if (needs_emit)
            this.change.emit();
    }
    reset() {
        this.have_updated_interactively = false;
        // change events silenced as PlotView.update_dataranges triggers property callbacks
        this.setv({
            range_padding: this._initial_range_padding,
            range_padding_units: this._initial_range_padding_units,
            follow: this._initial_follow,
            follow_interval: this._initial_follow_interval,
            default_span: this._initial_default_span,
        }, { silent: true });
        this.change.emit();
    }
}
_a = DataRange1d;
DataRange1d.__name__ = "DataRange1d";
(() => {
    _a.define(({ Boolean, Number, Nullable }) => ({
        start: [Number, NaN],
        end: [Number, NaN],
        range_padding: [Number, 0.1],
        range_padding_units: [PaddingUnits, "percent"],
        flipped: [Boolean, false],
        follow: [Nullable(StartEnd), null],
        follow_interval: [Nullable(Number), null],
        default_span: [Number, 2.0],
        only_visible: [Boolean, false],
    }));
    _a.internal(({ Enum }) => ({
        scale_hint: [Enum("log", "auto"), "auto"],
    }));
})();
//# sourceMappingURL=data_range1d.js.map