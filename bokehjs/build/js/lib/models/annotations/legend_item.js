var _a;
import { Model } from "../../model";
import { GlyphRenderer } from "../renderers/glyph_renderer";
import { ColumnarDataSource } from "../sources/columnar_data_source";
import { isValue, isField } from "../../core/vectorization";
import * as p from "../../core/properties";
import { logger } from "../../core/logging";
import { uniq, includes } from "../../core/util/array";
export class LegendItem extends Model {
    constructor(attrs) {
        super(attrs);
    }
    /*protected*/ _check_data_sources_on_renderers() {
        const field = this.get_field_from_label_prop();
        if (field != null) {
            if (this.renderers.length < 1) {
                return false;
            }
            const source = this.renderers[0].data_source;
            for (const r of this.renderers) {
                if (r.data_source != source) {
                    return false;
                }
            }
        }
        return true;
    }
    /*protected*/ _check_field_label_on_data_source() {
        const field = this.get_field_from_label_prop();
        if (field != null) {
            if (this.renderers.length < 1) {
                return false;
            }
            const source = this.renderers[0].data_source;
            if (!includes(source.columns(), field)) {
                return false;
            }
        }
        return true;
    }
    initialize() {
        super.initialize();
        this.legend = null;
        this.connect(this.change, () => this.legend?.item_change.emit());
        // Validate data_sources match
        const data_source_validation = this._check_data_sources_on_renderers();
        if (!data_source_validation)
            logger.error("Non matching data sources on legend item renderers");
        // Validate label in data_source
        const field_validation = this._check_field_label_on_data_source();
        if (!field_validation)
            logger.error(`Bad column name on label: ${this.label}`);
    }
    get_field_from_label_prop() {
        const { label } = this;
        return isField(label) ? label.field : null;
    }
    get_labels_list_from_label_prop() {
        if (!this.visible)
            return [];
        if (isValue(this.label)) {
            const { value } = this.label;
            return value != null ? [value] : [];
        }
        const field = this.get_field_from_label_prop();
        if (field != null) {
            let source;
            if (this.renderers.length != 0)
                source = this.renderers[0].data_source;
            else
                return ["No source found"];
            if (source instanceof ColumnarDataSource) {
                const data = source.get_column(field);
                if (data != null)
                    return uniq(Array.from(data));
                else
                    return ["Invalid field"];
            }
        }
        return [];
    }
}
_a = LegendItem;
LegendItem.__name__ = "LegendItem";
(() => {
    _a.define(({ Boolean, Int, Array, Ref, Nullable }) => ({
        label: [p.NullStringSpec, null],
        renderers: [Array(Ref(GlyphRenderer)), []],
        index: [Nullable(Int), null],
        visible: [Boolean, true],
    }));
})();
//# sourceMappingURL=legend_item.js.map