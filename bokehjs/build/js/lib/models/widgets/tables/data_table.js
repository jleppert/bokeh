var _a;
import { RowSelectionModel } from "@bokeh/slickgrid/plugins/slick.rowselectionmodel";
import { CheckboxSelectColumn } from "@bokeh/slickgrid/plugins/slick.checkboxselectcolumn";
import { CellExternalCopyManager } from "@bokeh/slickgrid/plugins/slick.cellexternalcopymanager";
import { Grid as SlickGrid } from "@bokeh/slickgrid";
import { div, position } from "../../../core/dom";
import { uniqueId } from "../../../core/util/string";
import { isString, isNumber, is_defined } from "../../../core/util/types";
import { some, range } from "../../../core/util/array";
import { keys } from "../../../core/util/object";
import { logger } from "../../../core/logging";
import { WidgetView } from "../widget";
import { DTINDEX_NAME } from "./definitions";
import { TableWidget } from "./table_widget";
import { TableColumn } from "./table_column";
import { build_view } from "../../../core/build_views";
import tables_css, * as tables from "../../../styles/widgets/tables.css";
import slickgrid_css from "../../../styles/widgets/slickgrid.css";
export const AutosizeModes = {
    fit_columns: "FCV",
    fit_viewport: "FVC",
    force_fit: "LFF",
    none: "NOA",
};
let _warned_not_reorderable = false;
export class TableDataProvider {
    constructor(source, view) {
        this.init(source, view);
    }
    init(source, view) {
        if (DTINDEX_NAME in source.data)
            throw new Error(`special name ${DTINDEX_NAME} cannot be used as a data table column`);
        this.source = source;
        this.view = view;
        this.index = [...this.view.indices];
    }
    getLength() {
        return this.index.length;
    }
    getItem(offset) {
        const item = {};
        for (const field of keys(this.source.data)) {
            item[field] = this.source.data[field][this.index[offset]];
        }
        item[DTINDEX_NAME] = this.index[offset];
        return item;
    }
    getField(offset, field) {
        // offset is the
        if (field == DTINDEX_NAME) {
            return this.index[offset];
        }
        return this.source.data[field][this.index[offset]];
    }
    setField(offset, field, value) {
        // field assumed never to be internal index name (ctor would throw)
        const index = this.index[offset];
        this.source.patch({ [field]: [[index, value]] });
    }
    getRecords() {
        return range(0, this.getLength()).map((i) => this.getItem(i));
    }
    getItems() {
        return this.getRecords();
    }
    slice(start, end, step = 1) {
        end = end ?? this.getLength();
        return range(start, end, step).map((i) => this.getItem(i));
    }
    sort(columns) {
        let cols = columns.map((column) => [column.sortCol.field, column.sortAsc ? 1 : -1]);
        if (cols.length == 0) {
            cols = [[DTINDEX_NAME, 1]];
        }
        const records = this.getRecords();
        const old_index = this.index.slice();
        this.index.sort((i0, i1) => {
            for (const [field, sign] of cols) {
                const v0 = records[old_index.indexOf(i0)][field];
                const v1 = records[old_index.indexOf(i1)][field];
                if (v0 === v1)
                    continue;
                if (isNumber(v0) && isNumber(v1))
                    return sign * (v0 - v1 || +isNaN(v0) - +isNaN(v1));
                else
                    return `${v0}` > `${v1}` ? sign : -sign;
            }
            return 0;
        });
    }
}
TableDataProvider.__name__ = "TableDataProvider";
export class DataTableView extends WidgetView {
    constructor() {
        super(...arguments);
        this._in_selection_update = false;
        this._width = null;
    }
    get data_source() {
        return this.model.properties.source;
    }
    initialize() {
        super.initialize();
        this.wrapper_el = div({ class: tables.data_table });
        this.shadow_el.appendChild(this.wrapper_el);
    }
    async lazy_initialize() {
        await super.lazy_initialize();
        this.cds_view = await build_view(this.model.view, { parent: this });
    }
    remove() {
        this.cds_view.remove();
        this.grid.destroy();
        super.remove();
    }
    connect_signals() {
        super.connect_signals();
        this.connect(this.model.change, () => this.render());
        this.connect(this.model.source.streaming, () => this.updateGrid());
        this.connect(this.model.source.patching, () => this.updateGrid());
        this.connect(this.model.source.change, () => this.updateGrid());
        this.connect(this.model.source.properties.data.change, () => this.updateGrid());
        this.connect(this.model.source.selected.change, () => this.updateSelection());
        this.connect(this.model.source.selected.properties.indices.change, () => this.updateSelection());
        for (const column of this.model.columns) {
            this.connect(column.change, () => {
                this.invalidate_layout();
                this.render();
            });
        }
    }
    styles() {
        return [...super.styles(), slickgrid_css, tables_css];
    }
    update_position() {
        super.update_position();
        const { width, height } = this.layout.bbox;
        position(this.wrapper_el, { x: 0, y: 0, width, height });
        this.grid.resizeCanvas();
    }
    after_layout() {
        super.after_layout();
        this.updateLayout(true, false);
    }
    box_sizing() {
        const sizing = super.box_sizing();
        if (this.model.autosize_mode === "fit_viewport" && this._width != null)
            sizing.width = this._width;
        return sizing;
    }
    updateLayout(initialized, rerender) {
        const autosize = this.autosize;
        if (autosize === AutosizeModes.fit_columns || autosize === AutosizeModes.force_fit) {
            if (!initialized)
                this.grid.resizeCanvas();
            this.grid.autosizeColumns();
        }
        else if (initialized && rerender && autosize === AutosizeModes.fit_viewport)
            this.invalidate_layout();
    }
    updateGrid() {
        // TODO (bev) This is to ensure that CDSView indices are properly computed
        // before passing to the DataProvider. This will result in extra calls to
        // compute_indices. This "over execution" will be addressed in a more
        // general look at events
        this.cds_view.compute_indices();
        this.data.init(this.model.source, this.model.view);
        // This is obnoxious but there is no better way to programmatically force
        // a re-sort on the existing sorted columns until/if we start using DataView
        if (this.model.sortable) {
            const columns = this.grid.getColumns();
            const sorters = this.grid.getSortColumns().map((x) => ({
                sortCol: {
                    field: columns[this.grid.getColumnIndex(x.columnId)].field,
                },
                sortAsc: x.sortAsc,
            }));
            this.data.sort(sorters);
        }
        this.grid.invalidate();
        this.updateLayout(true, true);
    }
    updateSelection() {
        if (this._in_selection_update)
            return;
        const { selected } = this.model.source;
        const permuted_indices = selected.indices.map((x) => this.data.index.indexOf(x)).sort();
        this._in_selection_update = true;
        this.grid.setSelectedRows(permuted_indices);
        this._in_selection_update = false;
        // If the selection is not in the current slickgrid viewport, scroll the
        // datatable to start at the row before the first selected row, so that
        // the selection is immediately brought into view. We don't scroll when
        // the selection is already in the viewport so that selecting from the
        // datatable itself does not re-scroll.
        const cur_grid_range = this.grid.getViewport();
        const scroll_index = this.model.get_scroll_index(cur_grid_range, permuted_indices);
        if (scroll_index != null)
            this.grid.scrollRowToTop(scroll_index);
    }
    newIndexColumn() {
        return {
            id: uniqueId(),
            name: this.model.index_header,
            field: DTINDEX_NAME,
            width: this.model.index_width,
            behavior: "select",
            cannotTriggerInsert: true,
            resizable: false,
            selectable: false,
            sortable: true,
            cssClass: tables.cell_index,
            headerCssClass: tables.header_index,
        };
    }
    get autosize() {
        let autosize;
        if (this.model.fit_columns === true)
            autosize = AutosizeModes.force_fit;
        else if (this.model.fit_columns === false)
            autosize = AutosizeModes.none;
        else
            autosize = AutosizeModes[this.model.autosize_mode];
        return autosize;
    }
    render() {
        const columns = this.model.columns.filter((column) => column.visible).map((column) => {
            return { ...column.toColumn(), parent: this };
        });
        let checkbox_selector = null;
        if (this.model.selectable == "checkbox") {
            checkbox_selector = new CheckboxSelectColumn({ cssClass: tables.cell_select });
            columns.unshift(checkbox_selector.getColumnDefinition());
        }
        if (this.model.index_position != null) {
            const index_position = this.model.index_position;
            const index = this.newIndexColumn();
            // This is to be able to provide negative index behaviour that
            // matches what python users will expect
            if (index_position == -1)
                columns.push(index);
            else if (index_position < -1)
                columns.splice(index_position + 1, 0, index);
            else
                columns.splice(index_position, 0, index);
        }
        let { reorderable } = this.model;
        if (reorderable && !(typeof $ != "undefined" && typeof $.fn != "undefined" && "sortable" in $.fn)) {
            if (!_warned_not_reorderable) {
                logger.warn("jquery-ui is required to enable DataTable.reorderable");
                _warned_not_reorderable = true;
            }
            reorderable = false;
        }
        let frozen_row = -1;
        let frozen_bottom = false;
        const { frozen_rows, frozen_columns } = this.model;
        const frozen_column = frozen_columns == null ? -1 : frozen_columns - 1;
        if (frozen_rows != null) {
            frozen_bottom = frozen_rows < 0;
            frozen_row = Math.abs(frozen_rows);
        }
        const options = {
            enableCellNavigation: this.model.selectable !== false,
            enableColumnReorder: reorderable,
            autosizeColsMode: this.autosize,
            multiColumnSort: this.model.sortable,
            editable: this.model.editable,
            autoEdit: this.model.auto_edit,
            autoHeight: false,
            rowHeight: this.model.row_height,
            frozenColumn: frozen_column,
            frozenRow: frozen_row,
            frozenBottom: frozen_bottom,
        };
        const initialized = is_defined(this.grid);
        this.data = new TableDataProvider(this.model.source, this.model.view);
        this.grid = new SlickGrid(this.wrapper_el, this.data, columns, options);
        if (this.autosize == AutosizeModes.fit_viewport) {
            this.grid.autosizeColumns();
            let width = 0;
            for (const column of columns)
                width += column.width ?? 0;
            this._width = Math.ceil(width);
        }
        this.grid.onSort.subscribe((_event, args) => {
            if (!this.model.sortable)
                return;
            const to_sort = args.sortCols;
            if (to_sort == null)
                return;
            this.data.sort(to_sort);
            this.grid.invalidate();
            this.updateSelection();
            this.grid.render();
            if (!this.model.header_row) {
                this._hide_header();
            }
            this.model.update_sort_columns(to_sort);
        });
        if (this.model.selectable !== false) {
            this.grid.setSelectionModel(new RowSelectionModel({ selectActiveRow: checkbox_selector == null }));
            if (checkbox_selector != null)
                this.grid.registerPlugin(checkbox_selector);
            const pluginOptions = {
                dataItemColumnValueExtractor(val, col) {
                    // As defined in this file, Item can contain any type values
                    let value = val[col.field];
                    if (isString(value)) {
                        value = value.replace(/\n/g, "\\n");
                    }
                    return value;
                },
                includeHeaderWhenCopying: false,
            };
            this.grid.registerPlugin(new CellExternalCopyManager(pluginOptions));
            this.grid.onSelectedRowsChanged.subscribe((_event, args) => {
                if (this._in_selection_update) {
                    return;
                }
                this.model.source.selected.indices = args.rows.map((i) => this.data.index[i]);
            });
            this.updateSelection();
            if (!this.model.header_row) {
                this._hide_header();
            }
        }
        if (initialized)
            this.updateLayout(initialized, false);
    }
    _hide_header() {
        for (const el of this.shadow_el.querySelectorAll(".slick-header-columns")) {
            el.style.height = "0px";
        }
        this.grid.resizeCanvas();
    }
}
DataTableView.__name__ = "DataTableView";
export class DataTable extends TableWidget {
    constructor(attrs) {
        super(attrs);
        this._sort_columns = [];
    }
    get sort_columns() {
        return this._sort_columns;
    }
    update_sort_columns(sort_cols) {
        this._sort_columns = sort_cols.map(({ sortCol, sortAsc }) => ({ field: sortCol.field, sortAsc }));
    }
    get_scroll_index(grid_range, selected_indices) {
        if (!this.scroll_to_selection || (selected_indices.length == 0))
            return null;
        if (!some(selected_indices, i => grid_range.top <= i && i <= grid_range.bottom)) {
            return Math.max(0, Math.min(...selected_indices) - 1);
        }
        return null;
    }
}
_a = DataTable;
DataTable.__name__ = "DataTable";
(() => {
    _a.prototype.default_view = DataTableView;
    _a.define(({ Array, Boolean, Int, Ref, String, Enum, Or, Nullable }) => ({
        autosize_mode: [Enum("fit_columns", "fit_viewport", "none", "force_fit"), "force_fit"],
        auto_edit: [Boolean, false],
        columns: [Array(Ref(TableColumn)), []],
        fit_columns: [Nullable(Boolean), null],
        frozen_columns: [Nullable(Int), null],
        frozen_rows: [Nullable(Int), null],
        sortable: [Boolean, true],
        reorderable: [Boolean, true],
        editable: [Boolean, false],
        selectable: [Or(Boolean, Enum("checkbox")), true],
        index_position: [Nullable(Int), 0],
        index_header: [String, "#"],
        index_width: [Int, 40],
        scroll_to_selection: [Boolean, true],
        header_row: [Boolean, true],
        row_height: [Int, 25],
    }));
    _a.override({
        width: 600,
        height: 400,
    });
})();
//# sourceMappingURL=data_table.js.map