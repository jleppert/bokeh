import { logger } from "../../core/logging";
import { Signal0 } from "../../core/signaling";
import { div, remove } from "../../core/dom";
import { wgs84_mercator } from "../../core/util/projections";
import { PlotView } from "./plot_canvas";
function has_maps_API() {
    return typeof google != "undefined" && typeof google.maps != "undefined";
}
const gmaps_ready = new Signal0({}, "gmaps_ready");
const load_google_api = function (api_key, api_version) {
    window._bokeh_gmaps_callback = () => gmaps_ready.emit();
    const enc = encodeURIComponent;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://maps.googleapis.com/maps/api/js?v=${enc(api_version)}&key=${enc(api_key)}&callback=_bokeh_gmaps_callback`;
    document.body.appendChild(script);
};
export class GMapPlotView extends PlotView {
    initialize() {
        super.initialize();
        this._tiles_loaded = false;
        this.zoom_count = 0;
        const { zoom, lat, lng } = this.model.map_options;
        this.initial_zoom = zoom;
        this.initial_lat = lat;
        this.initial_lng = lng;
        if (!this.model.api_key) {
            const url = "https://developers.google.com/maps/documentation/javascript/get-api-key";
            logger.error(`api_key is required. See ${url} for more information on how to obtain your own.`);
        }
    }
    async lazy_initialize() {
        await super.lazy_initialize();
        this.map_el = div({ style: { position: "absolute" } });
        this.canvas_view.add_underlay(this.map_el);
        if (!has_maps_API()) {
            if (typeof window._bokeh_gmaps_callback === "undefined") {
                const { api_key, api_version } = this.model;
                load_google_api(api_key, api_version);
            }
            gmaps_ready.connect(() => {
                this._build_map();
                this.request_paint("everything");
            });
        }
        else
            this._build_map();
    }
    remove() {
        remove(this.map_el);
        super.remove();
    }
    update_range(range_info, options) {
        // RESET -------------------------
        if (range_info == null) {
            this.map.setCenter({ lat: this.initial_lat, lng: this.initial_lng });
            this.map.setOptions({ zoom: this.initial_zoom });
            super.update_range(null, options);
            // PAN ----------------------------
        }
        else if (range_info.sdx != null || range_info.sdy != null) {
            this.map.panBy(range_info.sdx ?? 0, range_info.sdy ?? 0);
            super.update_range(range_info, options);
            // ZOOM ---------------------------
        }
        else if (range_info.factor != null) {
            // The zoom count decreases the sensitivity of the zoom. (We could make this user configurable)
            if (this.zoom_count !== 10) {
                this.zoom_count += 1;
                return;
            }
            this.zoom_count = 0;
            this.pause();
            super.update_range(range_info, options);
            const zoom_change = range_info.factor < 0 ? -1 : 1;
            const old_map_zoom = this.map.getZoom();
            if (old_map_zoom != null) {
                const new_map_zoom = old_map_zoom + zoom_change;
                // Zooming out too far causes problems
                if (new_map_zoom >= 2) {
                    this.map.setZoom(new_map_zoom);
                    // Check we haven't gone out of bounds, and if we have undo the zoom
                    const [proj_xstart, proj_xend] = this._get_projected_bounds();
                    if (proj_xend - proj_xstart < 0) {
                        this.map.setZoom(old_map_zoom);
                    }
                }
            }
            this.unpause();
        }
        // Finally re-center
        this._set_bokeh_ranges();
    }
    _build_map() {
        const { maps } = google;
        this.map_types = {
            satellite: maps.MapTypeId.SATELLITE,
            terrain: maps.MapTypeId.TERRAIN,
            roadmap: maps.MapTypeId.ROADMAP,
            hybrid: maps.MapTypeId.HYBRID,
        };
        const mo = this.model.map_options;
        const map_options = {
            center: new maps.LatLng(mo.lat, mo.lng),
            zoom: mo.zoom,
            disableDefaultUI: true,
            mapTypeId: this.map_types[mo.map_type],
            scaleControl: mo.scale_control,
            tilt: mo.tilt,
        };
        if (mo.styles != null) {
            map_options.styles = JSON.parse(mo.styles);
        }
        // create the map with above options in div
        this.map = new maps.Map(this.map_el, map_options);
        // update bokeh ranges whenever the map idles, which should be after most UI action
        maps.event.addListener(this.map, "idle", () => this._set_bokeh_ranges());
        // also need an event when bounds change so that map resizes trigger renders too
        maps.event.addListener(this.map, "bounds_changed", () => this._set_bokeh_ranges());
        maps.event.addListenerOnce(this.map, "tilesloaded", () => this._render_finished());
        // wire up listeners so that changes to properties are reflected
        this.connect(this.model.properties.map_options.change, () => this._update_options());
        this.connect(this.model.map_options.properties.styles.change, () => this._update_styles());
        this.connect(this.model.map_options.properties.lat.change, () => this._update_center("lat"));
        this.connect(this.model.map_options.properties.lng.change, () => this._update_center("lng"));
        this.connect(this.model.map_options.properties.zoom.change, () => this._update_zoom());
        this.connect(this.model.map_options.properties.map_type.change, () => this._update_map_type());
        this.connect(this.model.map_options.properties.scale_control.change, () => this._update_scale_control());
        this.connect(this.model.map_options.properties.tilt.change, () => this._update_tilt());
    }
    _render_finished() {
        this._tiles_loaded = true;
        this.notify_finished();
    }
    has_finished() {
        return super.has_finished() && this._tiles_loaded === true;
    }
    _get_latlon_bounds() {
        const bounds = this.map.getBounds();
        const top_right = bounds.getNorthEast();
        const bottom_left = bounds.getSouthWest();
        const xstart = bottom_left.lng();
        const xend = top_right.lng();
        const ystart = bottom_left.lat();
        const yend = top_right.lat();
        return [xstart, xend, ystart, yend];
    }
    _get_projected_bounds() {
        const [xstart, xend, ystart, yend] = this._get_latlon_bounds();
        const [proj_xstart, proj_ystart] = wgs84_mercator.compute(xstart, ystart);
        const [proj_xend, proj_yend] = wgs84_mercator.compute(xend, yend);
        return [proj_xstart, proj_xend, proj_ystart, proj_yend];
    }
    _set_bokeh_ranges() {
        const [proj_xstart, proj_xend, proj_ystart, proj_yend] = this._get_projected_bounds();
        this.frame.x_range.setv({ start: proj_xstart, end: proj_xend });
        this.frame.y_range.setv({ start: proj_ystart, end: proj_yend });
    }
    _update_center(fld) {
        const center = this.map.getCenter()?.toJSON();
        if (center != null) {
            center[fld] = this.model.map_options[fld];
            this.map.setCenter(center);
            this._set_bokeh_ranges();
        }
    }
    _update_map_type() {
        this.map.setOptions({ mapTypeId: this.map_types[this.model.map_options.map_type] });
    }
    _update_scale_control() {
        this.map.setOptions({ scaleControl: this.model.map_options.scale_control });
    }
    _update_tilt() {
        this.map.setOptions({ tilt: this.model.map_options.tilt });
    }
    _update_options() {
        this._update_styles();
        this._update_center("lat");
        this._update_center("lng");
        this._update_zoom();
        this._update_map_type();
    }
    _update_styles() {
        const { styles } = this.model.map_options;
        this.map.setOptions({ styles: styles != null ? JSON.parse(styles) : null });
    }
    _update_zoom() {
        this.map.setOptions({ zoom: this.model.map_options.zoom });
        this._set_bokeh_ranges();
    }
    update_position() {
        super.update_position();
        const { left, top, width, height } = this.frame.bbox;
        this.map_el.style.top = `${top}px`;
        this.map_el.style.left = `${left}px`;
        this.map_el.style.width = `${width}px`;
        this.map_el.style.height = `${height}px`;
    }
}
GMapPlotView.__name__ = "GMapPlotView";
//# sourceMappingURL=gmap_plot_canvas.js.map