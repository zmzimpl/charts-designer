import { InsightWidgetOption } from "./insight-widget-option";

export interface InsightWidget {
    /** UUID 唯一标识 */
    widgetId?: string;
    /** 部件标题 */
    widgetTitle: string;
    /** 总类型（折线、柱状、饼图、容器） */
    widgeType: WidgetType;
    /** 子类型（普通柱状/堆叠柱状、普通饼图/环形图/玫瑰图） */
    widgetSubType: WidgetSubType;
    /** 部件的属性配置 */
    widgetOption: InsightWidgetOption;
}


export enum WidgetType {
    /** 柱形图 */
    Bar = 'Bar',
    /** 条形图 */
    HorizontalBar = 'HorizontalBar',
    /** 折线图 */
    Line = 'Line',
    /** 面积图 */
    Area = 'Area',
    /** 饼图 */
    Pie = 'Pie',
    /** 组合图形 */
    Combination = 'Combination',
    /** 仪表盘 */
    Gauge = 'Gauge',
    /** 散点图 */
    Sactter = 'Scatter',
    /** 形状图 */
    Rectangle = 'Rectangle',
    /** 无须绑定数据的部件 （文字，标题，容器，图片，视频，音乐） */
    Image = 'Image',
    Text = 'Text',
}

export enum WidgetSubType {
    // 柱形图
    Bar = 'Bar',
    StackBar = 'StackBar',

    // 条形图
    HorizontalBar = 'HorizontalBar',
    HorizontalStackBar = 'HorizontalStackBar',

    // 折线图
    Line = 'Line',

    // 面积图
    Area = 'Area',
    StackArea = 'StackArea',

    // 饼图
    Pie = 'Pie',
    Doughnut = 'Doughnut',
    Rose = 'Rose',

    // 组合图
    Combination = 'Combination',

    // 仪表盘（进度图）
    Gauge = 'Gauge',

    // Unit
    Image = 'Image',
    Text = 'Text',

    // TODO: 待补充
}

export interface WidgetConfig {

}

export interface WidgetPreviewOption {
    title: string;
    type: WidgetSubType;
    image: string;
}

export const WidgetGeneralOptions: Map<string, WidgetType[]> = new Map<string, WidgetType[]>()
.set('Chart', [WidgetType.Bar, WidgetType.HorizontalBar, WidgetType.Pie, WidgetType.Line, WidgetType.Area, WidgetType.Combination, WidgetType.Gauge, WidgetType.Sactter])
.set('Unit', [WidgetType.Image, WidgetType.Text])
.set('Shape', [WidgetType.Rectangle]);


export const BarOptions: WidgetPreviewOption[] = [
    {
        title: 'Bar',
        type: WidgetSubType.Bar,
        image: ''
    },
    {
        title: 'StackBar',
        type: WidgetSubType.StackBar,
        image: ''
    }
]

export const WidgetGeneralMap: Map<WidgetType, WidgetPreviewOption[]> = new Map<WidgetType, WidgetPreviewOption[]>()
.set(WidgetType.Bar, BarOptions)
.set(WidgetType.Line, [{
    title: 'Line',
    type: WidgetSubType.Line,
    image: ''
}]);

