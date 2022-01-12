export const tooltip_contents = "bk-tooltip-contents"
export const left = "bk-left"
export const tooltip_arrow = "bk-tooltip-arrow"
export const tooltip_content = "bk-tooltip-content"
export const right = "bk-right"
export const above = "bk-above"
export const below = "bk-below"
export const tooltip_row_label = "bk-tooltip-row-label"
export const tooltip_row_value = "bk-tooltip-row-value"
export const tooltip_color_block = "bk-tooltip-color-block"
export default `:host{width:max-content;font-weight:300;font-size:12px;position:absolute;padding:5px;border:1px solid #e5e5e5;color:#2f2f2f;background-color:white;pointer-events:none;opacity:0.95;z-index:100;}.bk-tooltip-contents > div:not(:first-child){margin-top:5px;border-top:#e5e5e5 1px dashed;}:host(.bk-left.bk-tooltip-arrow) .bk-tooltip-content::before{position:absolute;margin:-7px 0 0 0;top:50%;width:0;height:0;border-style:solid;border-width:7px 0 7px 0;border-color:transparent;content:" ";display:block;left:-10px;border-right-width:10px;border-right-color:#909599;}:host(.bk-left) .bk-tooltip-content::before{left:-10px;border-right-width:10px;border-right-color:#909599;}:host(.bk-right.bk-tooltip-arrow) .bk-tooltip-content::after{position:absolute;margin:-7px 0 0 0;top:50%;width:0;height:0;border-style:solid;border-width:7px 0 7px 0;border-color:transparent;content:" ";display:block;right:-10px;border-left-width:10px;border-left-color:#909599;}:host(.bk-right) .bk-tooltip-content::after{right:-10px;border-left-width:10px;border-left-color:#909599;}:host(.bk-above) .bk-tooltip-content::before{position:absolute;margin:0 0 0 -7px;left:50%;width:0;height:0;border-style:solid;border-width:0 7px 0 7px;border-color:transparent;content:" ";display:block;top:-10px;border-bottom-width:10px;border-bottom-color:#909599;}:host(.bk-below) .bk-tooltip-content::after{position:absolute;margin:0 0 0 -7px;left:50%;width:0;height:0;border-style:solid;border-width:0 7px 0 7px;border-color:transparent;content:" ";display:block;bottom:-10px;border-top-width:10px;border-top-color:#909599;}.bk-tooltip-row-label{text-align:right;color:#26aae1;}.bk-tooltip-row-value{color:default;}.bk-tooltip-color-block{width:12px;height:12px;margin-left:5px;margin-right:5px;outline:#dddddd solid 1px;display:inline-block;}`