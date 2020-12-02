import { InsightWidgetOption } from "./insight-widget-option";

export interface InsightWidget {
    /** UUID 唯一标识 */
    widgetId?: string;
    /** 部件标题 */
    widgetTitle: string;
    /** 总类型（折线、柱状、饼图、容器） */
    widgeType: string;
    /** 子类型（普通柱状/条形图/堆叠柱状、普通饼图/环形图/玫瑰图） */
    widgetSubType: string;
    /** 部件的属性配置 */
    widgetOption: InsightWidgetOption;
}