# Delivery Hero local revision round 4 audit

## 1. 本轮修改目标

根据用户截图反馈，继续精修 Delivery Hero 本地看板。本轮重点是：修改笼统标题、删除不清晰表达、把趋势总览四个指标卡移入右下角、删除重复占位内容、刷新本地预览目录。本轮仅做本地修改，不上传 Netlify，不 push。

## 2. 修改文件

- `index.html`
- `src/App.tsx`
- `src/index.css`
- `src/data/deliveryHeroFinancialData.ts`
- `src/data/deliveryHeroIntelligenceData.ts`
- `output/delivery_hero_metric_definitions.md`
- `output/delivery_hero_revision_round4_audit.md`
- `output/delivery_hero_dashboard_local_preview/index.html`
- `output/delivery_hero_dashboard_local_preview/assets/`

## 3. Topline 分析标题

原标题 `区域和品类组合解释增量来源` 已改为：

`MENA 与品类组合拉动 GMV，订阅和 AdTech 抬升收入转化`

修改后标题是判断句，不再使用“解释增量来源”等方法论式表达。

## 4. 百分点表达

已把前台和数据说明中的 `+9.0ppt` 改为 `+9.0 个百分点`。该数字表示 Total Segment Revenue 17.8% LfL 与 Group GMV 8.8% LfL 的增速差，不是普通百分比。

## 5. 投资回报约束

已将前台标题和分析卡中的“投资回报约束”改为“投资回报”。当前源码和指标定义文件中不再保留“投资回报约束”。

## 6. 节奏类表达

已将空泛的“节奏”替换为更具体表达：

- `韩国业务恢复节奏` 改为 `韩国业务恢复进度`
- `现金流节奏` 改为 `现金流改善速度`
- `利润改善节奏` 改为 `利润改善速度`
- `区域经营节奏` 改为 `区域经营安排`
- `执行节奏` 改为 `执行速度`

保留“韩国业务恢复”等明确业务对象的表达，未保留单独、空泛的“恢复”。

## 7. 趋势总览指标卡位置

四个指标卡已从趋势总览顶部移入趋势总览右下角：

- Group GMV
- Total Segment Revenue
- MENA GMV
- Integrated Verticals GMV

右下角采用 `kpi-grid kpi-grid--compact` 的 2x2 小卡布局。移动端在 580px 以下改为单列堆叠。

## 8. 趋势总览左右布局

趋势总览仍为两列：

- 左列：Group GMV 与 Total Segment Revenue 图、增长质量图、9.0 个百分点增速差提示
- 右列上方：Adjusted EBITDA、Free Cash Flow 与 EBITDA / GMV 图
- 右列下方：四个 2x2 指标卡

删除了原本单独占据页面顶部的一整排四指标卡，减少重复和页面重心不平衡。

## 9. 删除重复内容

本轮删除的是趋势总览顶部单独展示的四个指标卡占位。四个指标卡只在趋势总览右下角保留一份；核心趋势图、盈利现金流图和 tooltip 逻辑未删除。

## 10. Tooltip 和图表能力

未修改 Recharts 图表组件的数据、tooltip formatter 或 EBITDA / GMV 计算逻辑。`Adjusted EBITDA、Free Cash Flow 与 EBITDA / GMV` 图仍保留，EBITDA / GMV 仍按 `Adjusted EBITDA 实际值 / 同频率 Group GMV 实际值` 计算。

## 11. Metric definitions

已更新 `output/delivery_hero_metric_definitions.md`，明确列出：

- Group GMV
- Total Segment Revenue
- MENA GMV
- Integrated Verticals GMV
- Adjusted EBITDA
- Free Cash Flow
- EBITDA / GMV

其中 EBITDA / GMV 公式写明为：`Adjusted EBITDA 实际值 / 同频率 Group GMV 实际值`。

## 12. Build

已运行 `npm run build`，构建成功。Vite 输出 chunk size warning，但不影响构建成功。

## 13. 本地预览路径

本地预览目录：

`C:\Users\tobyzhou_i\AI_PPT_Research\delivery-hero-financial-intelligence-brief\output\delivery_hero_dashboard_local_preview\`

目录包含：

- `index.html`
- `assets`
- `start_preview.bat`
- `README_如何打开.txt`
- `server.cjs`

## 14. 浏览器验证

尝试连接 in-app browser 做布局预览时，浏览器工具返回环境元数据错误，未能完成截图验证。已完成构建验证和静态文本检查。

## 15. 是否 push

否。

## 16. 是否上传 Netlify

否。
