var _a;
import { Keys } from "../../../core/dom";
import { EditTool, EditToolView } from "./edit_tool";
import { tool_icon_point_draw } from "../../../styles/icons.css";
export class PointDrawToolView extends EditToolView {
    _tap(ev) {
        const renderers = this._select_event(ev, this._select_mode(ev), this.model.renderers);
        if (renderers.length || !this.model.add) {
            return;
        }
        const renderer = this.model.renderers[0];
        const point = this._map_drag(ev.sx, ev.sy, renderer);
        if (point == null)
            return;
        // Type once dataspecs are typed
        const glyph = renderer.glyph;
        const cds = renderer.data_source;
        const [xkey, ykey] = [glyph.x.field, glyph.y.field];
        const [x, y] = point;
        this._pop_glyphs(cds, this.model.num_objects);
        if (xkey)
            cds.get_array(xkey).push(x);
        if (ykey)
            cds.get_array(ykey).push(y);
        this._pad_empty_columns(cds, [xkey, ykey]);
        const { data } = cds;
        cds.setv({ data }, { check_eq: false }); // XXX: inplace updates
    }
    _keyup(ev) {
        if (!this.model.active || !this._mouse_in_frame)
            return;
        for (const renderer of this.model.renderers) {
            if (ev.keyCode === Keys.Backspace) {
                this._delete_selected(renderer);
            }
            else if (ev.keyCode == Keys.Esc) {
                renderer.data_source.selection_manager.clear();
            }
        }
    }
    _pan_start(ev) {
        if (!this.model.drag)
            return;
        this._select_event(ev, "append", this.model.renderers);
        this._basepoint = [ev.sx, ev.sy];
    }
    _pan(ev) {
        if (!this.model.drag || this._basepoint == null)
            return;
        this._drag_points(ev, this.model.renderers);
    }
    _pan_end(ev) {
        if (!this.model.drag)
            return;
        this._pan(ev);
        for (const renderer of this.model.renderers)
            this._emit_cds_changes(renderer.data_source, false, true, true);
        this._basepoint = null;
    }
}
PointDrawToolView.__name__ = "PointDrawToolView";
export class PointDrawTool extends EditTool {
    constructor(attrs) {
        super(attrs);
        this.tool_name = "Point Draw Tool";
        this.tool_icon = tool_icon_point_draw;
        this.event_type = ["tap", "pan", "move"];
        this.default_order = 2;
    }
}
_a = PointDrawTool;
PointDrawTool.__name__ = "PointDrawTool";
(() => {
    _a.prototype.default_view = PointDrawToolView;
    _a.define(({ Boolean, Int }) => ({
        add: [Boolean, true],
        drag: [Boolean, true],
        num_objects: [Int, 0],
    }));
})();
//# sourceMappingURL=point_draw_tool.js.map