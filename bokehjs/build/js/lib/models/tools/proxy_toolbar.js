import { ToolbarBase } from "./toolbar_base";
import { ToolProxy } from "./tool_proxy";
import { includes, sort_by } from "../../core/util/array";
import { keys, values, entries } from "../../core/util/object";
export class ProxyToolbar extends ToolbarBase {
    constructor(attrs) {
        super(attrs);
    }
    initialize() {
        super.initialize();
        this._merge_tools();
    }
    _merge_tools() {
        // Go through all the tools on the toolbar and replace them with
        // a proxy e.g. PanTool, BoxSelectTool, etc.
        this._proxied_tools = [];
        const inspectors = {};
        const actions = {};
        const gestures = {};
        const new_help_tools = [];
        const new_help_urls = [];
        for (const helptool of this.help) {
            if (!includes(new_help_urls, helptool.redirect)) {
                new_help_tools.push(helptool);
                new_help_urls.push(helptool.redirect);
            }
        }
        this._proxied_tools.push(...new_help_tools);
        this.help = new_help_tools;
        for (const [event_type, gesture] of entries(this.gestures)) {
            if (!(event_type in gestures)) {
                gestures[event_type] = {};
            }
            for (const tool of gesture.tools) {
                if (!(tool.type in gestures[event_type])) {
                    gestures[event_type][tool.type] = [];
                }
                gestures[event_type][tool.type].push(tool);
            }
        }
        for (const tool of this.inspectors) {
            if (!(tool.type in inspectors)) {
                inspectors[tool.type] = [];
            }
            inspectors[tool.type].push(tool);
        }
        for (const tool of this.actions) {
            if (!(tool.type in actions)) {
                actions[tool.type] = [];
            }
            actions[tool.type].push(tool);
        }
        // Add a proxy for each of the groups of tools.
        const make_proxy = (tools, active = false) => {
            const proxy = new ToolProxy({ tools, active });
            this._proxied_tools.push(proxy);
            return proxy;
        };
        for (const event_type of keys(gestures)) {
            const gesture = this.gestures[event_type];
            gesture.tools = [];
            for (const tool_type of keys(gestures[event_type])) {
                const tools = gestures[event_type][tool_type];
                if (tools.length > 0) {
                    if (event_type == "multi") {
                        for (const tool of tools) {
                            const proxy = make_proxy([tool]);
                            gesture.tools.push(proxy);
                            this.connect(proxy.properties.active.change, () => this._active_change(proxy));
                        }
                    }
                    else {
                        const proxy = make_proxy(tools);
                        gesture.tools.push(proxy);
                        this.connect(proxy.properties.active.change, () => this._active_change(proxy));
                    }
                }
            }
        }
        this.actions = [];
        for (const [tool_type, tools] of entries(actions)) {
            if (tool_type == "CustomAction") {
                for (const tool of tools)
                    this.actions.push(make_proxy([tool]));
            }
            else if (tools.length > 0) {
                this.actions.push(make_proxy(tools)); // XXX
            }
        }
        this.inspectors = [];
        for (const tools of values(inspectors)) {
            if (tools.length > 0)
                this.inspectors.push(make_proxy(tools, true)); // XXX
        }
        for (const [et, gesture] of entries(this.gestures)) {
            if (gesture.tools.length == 0)
                continue;
            gesture.tools = sort_by(gesture.tools, (tool) => tool.default_order);
            if (!(et == "pinch" || et == "scroll" || et == "multi"))
                gesture.tools[0].active = true;
        }
    }
}
ProxyToolbar.__name__ = "ProxyToolbar";
//# sourceMappingURL=proxy_toolbar.js.map