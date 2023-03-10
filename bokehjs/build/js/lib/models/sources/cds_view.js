var _a;
import { Model } from "../../model";
import { View } from "../../core/view";
import { Indices } from "../../core/types";
import { Filter } from "../filters/filter";
export class CDSViewView extends View {
    initialize() {
        super.initialize();
        this.compute_indices();
    }
    connect_signals() {
        super.connect_signals();
        const { filters } = this.model.properties;
        this.on_change(filters, () => this.compute_indices());
        const connect_listeners = () => {
            const fn = () => this.compute_indices();
            const source = this.parent.data_source.get_value();
            this.connect(source.change, fn);
            this.connect(source.streaming, fn);
            this.connect(source.patching, fn);
        };
        connect_listeners();
        const { data_source } = this.parent;
        this.on_change(data_source, () => {
            // TODO: disconnect
            connect_listeners();
        });
    }
    compute_indices() {
        // XXX: if the data source is empty, there still may be one
        // index originating from glyph's scalar values.
        const source = this.parent.data_source.get_value();
        const size = source.get_length() ?? 1;
        const indices = Indices.all_set(size);
        for (const filter of this.model.filters) {
            indices.intersect(filter.compute_indices(source));
        }
        this.model.indices = indices;
        this.model._indices_map_to_subset();
    }
}
CDSViewView.__name__ = "CDSViewView";
export class CDSView extends Model {
    constructor(attrs) {
        super(attrs);
    }
    _indices_map_to_subset() {
        this._indices = [...this.indices];
        this.indices_map = {};
        for (let i = 0; i < this._indices.length; i++) {
            this.indices_map[this._indices[i]] = i;
        }
    }
    convert_selection_from_subset(selection_subset) {
        return selection_subset.map((i) => this._indices[i]);
    }
    convert_selection_to_subset(selection_full) {
        return selection_full.map((i) => this.indices_map[i]);
    }
    convert_indices_from_subset(indices) {
        return indices.map((i) => this._indices[i]);
    }
}
_a = CDSView;
CDSView.__name__ = "CDSView";
(() => {
    _a.prototype.default_view = CDSViewView;
    _a.define(({ Array, Ref }) => ({
        filters: [Array(Ref(Filter)), []],
    }));
    _a.internal(({ Int, Dict, Ref, Nullable }) => ({
        indices: [Ref(Indices)],
        indices_map: [Dict(Int), {}],
        masked: [Nullable(Ref(Indices)), null],
    }));
})();
//# sourceMappingURL=cds_view.js.map