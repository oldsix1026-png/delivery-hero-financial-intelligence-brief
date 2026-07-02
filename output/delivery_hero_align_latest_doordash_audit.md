# Delivery Hero 对齐最新版 DoorDash 看板审计

## 1. 本轮目标

以当前本地最新版 DoorDash 看板为模板，系统性调整 Delivery Hero 看板的版式、页面结构、图表交互和前台表达规范。本轮只修改 `delivery-hero-financial-intelligence-brief`。

## 2. 是否读取 DoorDash 最新版作为模板

是。已读取 DoorDash 的 `src/App.tsx`、`src/index.css`、图表与卡片结构，并仅参考版式、结构、样式、图表交互和表达规范。

## 3. 只参考的内容

- 版式：暖白背景、橙色主色、圆角卡片、柔和阴影、管理层简报式 Hero。
- 结构：Hero / 一、财报分析 / 趋势总览 / 1. Topline / 2. Bottomline / 二、竞品动态追踪。
- 样式：浅米色边框、卡片间距、source badge、筛选区、事件卡片密度。
- 图表交互：Recharts hover tooltip、legend、source 说明、缺失数据不补 0。
- 表达规范：标题改为判断句，正文讲 Delivery Hero 具体业务，不展示方法论。

## 4. 是否未复制 DoorDash 数据和结论

是。未复制 DoorDash、DashPass、Wolt+、GOV、gas rewards 等 DoorDash 特有内容。所有前台数据仍来自 Delivery Hero 项目已有数据、官方披露和已录入券商观点。

## 5. 修改文件

- `src/App.tsx`
- `src/index.css`
- `src/components/SectionNav.tsx`
- `src/components/Timeline.tsx`
- `src/components/charts/QuarterlyTrendChart.tsx`
- `src/components/charts/GrowthQualityChart.tsx`
- `src/components/charts/RegionalGrowthBarChart.tsx`
- `src/components/charts/ProfitabilityTrendChart.tsx`
- `output/delivery_hero_metric_definitions.md`
- `output/delivery_hero_align_latest_doordash_audit.md`
- `output/delivery_hero_dashboard_local_preview/index.html`
- `output/delivery_hero_dashboard_local_preview/assets/*`
- `output/delivery_hero_dashboard_local_preview/start_preview.bat`
- `output/delivery_hero_dashboard_local_preview/README_如何打开.txt`
- `output/delivery_hero_dashboard_local_preview/server.cjs`
- `output/delivery_hero_dashboard_local_preview.zip`

## 6. 页面结构是否已调整

是。当前前台结构为：

- Hero / Executive Summary
- 一、财报分析
- 趋势总览
- 1. Topline
- 2. Bottomline
- 二、竞品动态追踪
- 关键术语解释
- 信息来源与口径说明

## 7. 删除或弱化的方法论式语言

- 删除独立“战略飞轮”展示，改为在 Topline 的 Everyday App 业务说明中解释。
- 将旧的“核心指标与规模趋势 / 增长来源与业务结构 / 盈利质量与经营杠杆 / 利润与财务预测”四段结构合并到 DoorDash 式财报分析结构中。
- 前台不展示“分析框架”“本页面用于”“AI 分析方法”“后续可观察”等方法论表述。

## 8. 删除或合并的重复内容

- Hero 不再重复下方图表的长段说明，只保留 Topline / Bottomline 两条摘要和三条核心判断。
- Total Segment Revenue 解释只保留在趋势总览结论中，不在多个卡片重复。
- Everyday App 和 Quick Commerce 的概念解释合并到 Topline 业务结构卡中。
- 利润与 FY26 指引合并到 Bottomline，避免独立预测板块重复。

## 9. 修正的标题问题

- Hero 标题改为“Delivery Hero 收入转化改善，利润和资本结构进入兑现期”。
- Topline 标题改为“MENA、Americas 和 Integrated Verticals 提供增量，Everyday App 提高收入结构质量”。
- Bottomline 标题改为“FY26 Adjusted EBITDA 指引为 €910m–€960m，利润改善来自收入转化、成本控制和资本结构动作”。
- 竞品动态标题改为“2026年上半年事件集中在业务恢复、资产出售、股权结构和治理调整”。

## 10. 修正的中英文表达问题

- “韩国恢复”统一为“韩国业务恢复”。
- “超预期”未在前台新增；表达统一使用“超出预期”标准。
- “信心”不单独出现，改为利润改善、公司指引、资本结构等具体表达。
- Everyday App 首次出现时说明业务含义。
- Quick Commerce 首次出现时说明其对频次、订单密度和收入结构的作用，并提示履约和补贴投入压力。

## 11. 图表 hover tooltip 是否已实现

是。核心 Recharts 图表均保留或实现 hover tooltip，并统一暖白背景、浅米色边框、圆角和柔和阴影。图表包括：

- Group GMV 与 Total Segment Revenue
- GMV / Revenue reported YoY
- 区域 GMV 构成
- 区域增速
- 重点区域近三年趋势
- Quick Commerce 占比
- Adjusted EBITDA 与 Free Cash Flow

## 12. 数据口径 md 是否生成

是。已生成 `output/delivery_hero_metric_definitions.md`。

## 13. npm run build 是否成功

是。`npm run build` 已成功完成，Vite 输出位于 `dist/`。构建仅提示 chunk size warning，不影响产物生成。

## 14. 本地预览路径

- 目录：`output/delivery_hero_dashboard_local_preview/`
- 压缩包：`output/delivery_hero_dashboard_local_preview.zip`
- 启动方式：双击 `start_preview.bat`
- 本地地址：`http://127.0.0.1:4175/`

## 15. 是否 push

否。

## 16. 是否触发 Netlify

否。

## 17. 需要人工复核的点

- Q2 2023 与 Q4 2025 单季值由官方全年值减去已披露季度得到，建议人工复核计算过程。
- UBS / J.P. Morgan 观点来自项目已录入资料，建议在上传或对外分享前核对是否已有更新版本。
- `preview-server.mjs` 为历史预览脚本，本轮新增符合要求的 `server.cjs`，未删除旧文件。
