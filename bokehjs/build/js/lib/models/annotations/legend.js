var _a;
import { Annotation, AnnotationView } from "./annotation";
import { LegendItem } from "./legend_item";
import { Orientation, LegendLocation, LegendClickPolicy } from "../../core/enums";
import * as mixins from "../../core/property_mixins";
import { Signal0 } from "../../core/signaling";
import { SideLayout } from "../../core/layout/side_panel";
import { font_metrics } from "../../core/util/text";
import { BBox } from "../../core/util/bbox";
import { max, every, some } from "../../core/util/array";
import { isString } from "../../core/util/types";
export class LegendView extends AnnotationView {
    update_layout() {
        const { panel } = this;
        if (panel != null)
            this.layout = new SideLayout(panel, () => this.get_size());
        else
            this.layout = undefined;
    }
    cursor(_sx, _sy) {
        return this.model.click_policy == "none" ? null : "pointer";
    }
    get legend_padding() {
        return this.model.border_line_color != null ? this.model.padding : 0;
    }
    connect_signals() {
        super.connect_signals();
        this.connect(this.model.change, () => this.request_render());
        this.connect(this.model.item_change, () => this.request_render());
    }
    compute_legend_bbox() {
        const legend_names = this.model.get_legend_names();
        const { glyph_height, glyph_width } = this.model;
        const { label_height, label_width } = this.model;
        this.max_label_height = max([font_metrics(this.visuals.label_text.font_value()).height, label_height, glyph_height]);
        // this is to measure text properties
        const { ctx } = this.layer;
        ctx.save();
        this.visuals.label_text.set_value(ctx);
        this.text_widths = new Map();
        for (const name of legend_names) {
            this.text_widths.set(name, max([ctx.measureText(name).width, label_width]));
        }
        const { title } = this.model;
        if (title == null || title.length == 0) {
            this.title_width = 0;
            this.title_height = 0;
        }
        else {
            this.visuals.title_text.set_value(ctx);
            this.title_width = ctx.measureText(title).width;
            this.title_height = font_metrics(this.visuals.title_text.font_value()).height + this.model.title_standoff;
        }
        ctx.restore();
        const max_label_width = Math.max(max([...this.text_widths.values()]), 0);
        const legend_margin = this.model.margin;
        const { legend_padding } = this;
        const legend_spacing = this.model.spacing;
        const { label_standoff } = this.model;
        let legend_height, legend_width;
        if (this.model.orientation == "vertical") {
            legend_height = legend_names.length * this.max_label_height + Math.max(legend_names.length - 1, 0) * legend_spacing + 2 * legend_padding + this.title_height;
            legend_width = max([(max_label_width + glyph_width + label_standoff + 2 * legend_padding), this.title_width + 2 * legend_padding]);
        }
        else {
            let item_width = 2 * legend_padding + Math.max(legend_names.length - 1, 0) * legend_spacing;
            for (const [, width] of this.text_widths) {
                item_width += max([width, label_width]) + glyph_width + label_standoff;
            }
            legend_width = max([this.title_width + 2 * legend_padding, item_width]);
            legend_height = this.max_label_height + this.title_height + 2 * legend_padding;
        }
        const panel = this.layout != null ? this.layout : this.plot_view.frame;
        const [hr, vr] = panel.bbox.ranges;
        const { location } = this.model;
        let sx, sy;
        if (isString(location)) {
            switch (location) {
                case "top_left":
                    sx = hr.start + legend_margin;
                    sy = vr.start + legend_margin;
                    break;
                case "top":
                case "top_center":
                    sx = (hr.end + hr.start) / 2 - legend_width / 2;
                    sy = vr.start + legend_margin;
                    break;
                case "top_right":
                    sx = hr.end - legend_margin - legend_width;
                    sy = vr.start + legend_margin;
                    break;
                case "bottom_right":
                    sx = hr.end - legend_margin - legend_width;
                    sy = vr.end - legend_margin - legend_height;
                    break;
                case "bottom":
                case "bottom_center":
                    sx = (hr.end + hr.start) / 2 - legend_width / 2;
                    sy = vr.end - legend_margin - legend_height;
                    break;
                case "bottom_left":
                    sx = hr.start + legend_margin;
                    sy = vr.end - legend_margin - legend_height;
                    break;
                case "left":
                case "center_left":
                    sx = hr.start + legend_margin;
                    sy = (vr.end + vr.start) / 2 - legend_height / 2;
                    break;
                case "center":
                case "center_center":
                    sx = (hr.end + hr.start) / 2 - legend_width / 2;
                    sy = (vr.end + vr.start) / 2 - legend_height / 2;
                    break;
                case "right":
                case "center_right":
                    sx = hr.end - legend_margin - legend_width;
                    sy = (vr.end + vr.start) / 2 - legend_height / 2;
                    break;
            }
        }
        else {
            const [vx, vy] = location;
            sx = panel.bbox.xview.compute(vx);
            sy = panel.bbox.yview.compute(vy) - legend_height;
        }
        return new BBox({ left: sx, top: sy, width: legend_width, height: legend_height });
    }
    interactive_bbox() {
        return this.compute_legend_bbox();
    }
    interactive_hit(sx, sy) {
        const bbox = this.interactive_bbox();
        return bbox.contains(sx, sy);
    }
    on_hit(sx, sy) {
        let yoffset;
        const { glyph_width } = this.model;
        const { legend_padding } = this;
        const legend_spacing = this.model.spacing;
        const { label_standoff } = this.model;
        let xoffset = (yoffset = legend_padding);
        const legend_bbox = this.compute_legend_bbox();
        const vertical = this.model.orientation == "vertical";
        for (const item of this.model.items) {
            const labels = item.get_labels_list_from_label_prop();
            for (const label of labels) {
                const x1 = legend_bbox.x + xoffset;
                const y1 = legend_bbox.y + yoffset + this.title_height;
                let w, h;
                if (vertical)
                    [w, h] = [legend_bbox.width - 2 * legend_padding, this.max_label_height];
                else
                    [w, h] = [this.text_widths.get(label) + glyph_width + label_standoff, this.max_label_height];
                const bbox = new BBox({ left: x1, top: y1, width: w, height: h });
                if (bbox.contains(sx, sy)) {
                    switch (this.model.click_policy) {
                        case "hide": {
                            for (const r of item.renderers)
                                r.visible = !r.visible;
                            break;
                        }
                        case "mute": {
                            for (const r of item.renderers)
                                r.muted = !r.muted;
                            break;
                        }
                    }
                    return true;
                }
                if (vertical)
                    yoffset += this.max_label_height + legend_spacing;
                else
                    xoffset += this.text_widths.get(label) + glyph_width + label_standoff + legend_spacing;
            }
        }
        return false;
    }
    _render() {
        if (this.model.items.length == 0)
            return;
        if (!some(this.model.items, item => item.visible))
            return;
        // set a backref on render so that items can later signal item_change upates
        // on the model to trigger a re-render
        for (const item of this.model.items) {
            item.legend = this.model;
        }
        const { ctx } = this.layer;
        const bbox = this.compute_legend_bbox();
        ctx.save();
        this._draw_legend_box(ctx, bbox);
        this._draw_legend_items(ctx, bbox);
        this._draw_title(ctx, bbox);
        ctx.restore();
    }
    _draw_legend_box(ctx, bbox) {
        ctx.beginPath();
        ctx.rect(bbox.x, bbox.y, bbox.width, bbox.height);
        this.visuals.background_fill.apply(ctx);
        this.visuals.border_line.apply(ctx);
    }
    _draw_legend_items(ctx, bbox) {
        const { glyph_width, glyph_height } = this.model;
        const { legend_padding } = this;
        const legend_spacing = this.model.spacing;
        const { label_standoff } = this.model;
        let xoffset = legend_padding;
        let yoffset = legend_padding;
        const vertical = this.model.orientation == "vertical";
        for (const item of this.model.items) {
            if (!item.visible)
                continue;
            const labels = item.get_labels_list_from_label_prop();
            const field = item.get_field_from_label_prop();
            if (labels.length == 0)
                continue;
            const active = (() => {
                switch (this.model.click_policy) {
                    case "none": return true;
                    case "hide": return every(item.renderers, r => r.visible);
                    case "mute": return every(item.renderers, r => !r.muted);
                }
            })();
            for (const label of labels) {
                const x1 = bbox.x + xoffset;
                const y1 = bbox.y + yoffset + this.title_height;
                const x2 = x1 + glyph_width;
                const y2 = y1 + glyph_height;
                if (vertical)
                    yoffset += this.max_label_height + legend_spacing;
                else
                    xoffset += this.text_widths.get(label) + glyph_width + label_standoff + legend_spacing;
                this.visuals.label_text.set_value(ctx);
                ctx.fillText(label, x2 + label_standoff, y1 + this.max_label_height / 2.0);
                for (const r of item.renderers) {
                    const view = this.plot_view.renderer_view(r);
                    view?.draw_legend(ctx, x1, x2, y1, y2, field, label, item.index);
                }
                if (!active) {
                    let w, h;
                    if (vertical)
                        [w, h] = [bbox.width - 2 * legend_padding, this.max_label_height];
                    else
                        [w, h] = [this.text_widths.get(label) + glyph_width + label_standoff, this.max_label_height];
                    ctx.beginPath();
                    ctx.rect(x1, y1, w, h);
                    this.visuals.inactive_fill.set_value(ctx);
                    ctx.fill();
                }
            }
        }
    }
    _draw_title(ctx, bbox) {
        const { title } = this.model;
        if (title == null || title.length == 0 || !this.visuals.title_text.doit)
            return;
        ctx.save();
        ctx.translate(bbox.x0, bbox.y0 + this.title_height);
        this.visuals.title_text.set_value(ctx);
        ctx.fillText(title, this.legend_padding, this.legend_padding - this.model.title_standoff);
        ctx.restore();
    }
    _get_size() {
        const { width, height } = this.compute_legend_bbox();
        return {
            width: width + 2 * this.model.margin,
            height: height + 2 * this.model.margin,
        };
    }
}
LegendView.__name__ = "LegendView";
export class Legend extends Annotation {
    constructor(attrs) {
        super(attrs);
    }
    initialize() {
        super.initialize();
        this.item_change = new Signal0(this, "item_change");
    }
    get_legend_names() {
        const legend_names = [];
        for (const item of this.items) {
            const labels = item.get_labels_list_from_label_prop();
            legend_names.push(...labels);
        }
        return legend_names;
    }
}
_a = Legend;
Legend.__name__ = "Legend";
(() => {
    _a.prototype.default_view = LegendView;
    _a.mixins([
        ["label_", mixins.Text],
        ["title_", mixins.Text],
        ["inactive_", mixins.Fill],
        ["border_", mixins.Line],
        ["background_", mixins.Fill],
    ]);
    _a.define(({ Number, String, Array, Tuple, Or, Ref, Nullable }) => ({
        orientation: [Orientation, "vertical"],
        location: [Or(LegendLocation, Tuple(Number, Number)), "top_right"],
        title: [Nullable(String), null],
        title_standoff: [Number, 5],
        label_standoff: [Number, 5],
        glyph_height: [Number, 20],
        glyph_width: [Number, 20],
        label_height: [Number, 20],
        label_width: [Number, 20],
        margin: [Number, 10],
        padding: [Number, 10],
        spacing: [Number, 3],
        items: [Array(Ref(LegendItem)), []],
        click_policy: [LegendClickPolicy, "none"],
    }));
    _a.override({
        border_line_color: "#e5e5e5",
        border_line_alpha: 0.5,
        border_line_width: 1,
        background_fill_color: "#ffffff",
        background_fill_alpha: 0.95,
        inactive_fill_color: "white",
        inactive_fill_alpha: 0.7,
        label_text_font_size: "13px",
        label_text_baseline: "middle",
        title_text_font_size: "13px",
        title_text_font_style: "italic",
    });
})();
//# sourceMappingURL=legend.js.map