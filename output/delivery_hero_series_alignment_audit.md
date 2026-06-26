# Delivery Hero 系列标准对齐 Audit

## 本轮修改范围

- 按 DoorDash 最新标准修改 Delivery Hero 前台文案：Hero 核心判断、01 核心指标、02 增长来源、03 盈利质量、04 财务预测、05 公开事件时间线、导航、页面 meta、README。
- 删除 05 前台摘要小卡片模块：`movement-grid` 和 `2026Q1 核心事件总结` 小卡片组。
- 生成本地预览包：`output/delivery_hero_dashboard_local_preview/` 和 `output/delivery_hero_dashboard_local_preview.zip`。

## 按 DoorDash 标准对齐的内容

- 标题改为“定量描述 + 定性总结”，优先使用项目内已有 GMV、Revenue、Adjusted EBITDA、FCF、Keyword Ads 和区域增速数据。
- 删除 `本部分聚焦`、`核心结论是`、`需要看`、`后续观察`、`情报追踪` 等方法论式或前台残留表达。
- 04 前台统一改为 `财务预测`。
- 05 改为 `公开事件时间线`，保留筛选器和时间线，不保留摘要小卡片网格。

## 修改前 / 修改后标题

| 位置 | 修改前 | 修改后 |
|---|---|---|
| Hero 核心判断 bullet | `Revenue 增速持续快于 GMV 是观察结果，背后需要看 Quick Commerce、订阅、AdTech 和 own-delivery 的实际贡献。` | `Revenue 增速持续快于 GMV，Quick Commerce、订阅、AdTech 和 own-delivery 是主要业务解释。` |
| 01 section subtitle | `业务组合变化带动收入增速高于 GMV` | `Q1 2026 Revenue 增速高于 GMV 9.0 个百分点，收入转化继续改善` |
| 01 section description | `本部分聚焦集团规模、收入转化和增长质量。核心结论是...原因要看...` | `Delivery Hero 仍在扩张，Q1 2026 Revenue LfL 增长 17.8%，Group GMV LfL 增长 8.8%；增速差来自...` |
| 02 section subtitle | `MENA 和 Americas 是增量主力，韩国业务恢复仍取决于订单、GMV 和技术整合` | `MENA 增长 16.1%、Americas 增长 18.1%，韩国业务恢复仍取决于订单、GMV 和技术整合` |
| 03 section subtitle | `Everyday App 把外卖、Quick Commerce、订阅和广告连接成更高频的收入结构` | `Keyword Ads 收入同比增长 170%，Everyday App 提高高频场景和收入转化` |
| 04 section title | `后续观察` | `财务预测` |
| 04 section subtitle | `FY26 EBITDA 和 FCF 仍要看成本控制、现金流管理和资本结构变化` | `FY26 Adjusted EBITDA 指引为 €910m–€960m，FCF 指引为大于 €200m` |
| 04 analysis title | `后续观察集中在现金流、韩国、MENA 和资本结构` | `FY26 财务预测取决于现金流、韩国、MENA 和资本结构` |
| 05 section title | `情报追踪` | `公开事件时间线` |
| 05 timeline title | `本季度情报卡片网格 · n 条` | `本季度公开事件时间线 · n 条` |

## 删除的方法论式表达

- `本部分聚焦`
- `核心结论是`
- `需要看`
- `后续观察`
- `情报追踪`
- `情报卡片网格`

## 04 和小卡片模块

- 04 是否改为 `财务预测`：是。
- 情报追踪小卡片模块是否删除：是。删除了 05 顶部 `movement-grid` 摘要卡，以及 `2026Q1 核心事件总结` 分类小卡片组。

## 使用的项目内数据

- `src/data/deliveryHeroFinancialData.ts`
  - Q1 2026 Group GMV：€12.47bn，LfL +8.8%。
  - Q1 2026 Total Segment Revenue：€3.73bn，LfL +17.8%。
  - Q1 2026 MENA GMV：€3.83bn，LfL +16.1%。
  - Q1 2026 Americas GMV：LfL +18.1%。
  - Q1 2026 Integrated Verticals GMV：€0.99bn，LfL +28.0%。
  - Q1 2026 Keyword Ads revenue：€52m，同比增长 170%。
  - FY26 Adjusted EBITDA 指引：€910m–€960m。
  - FY26 Free Cash Flow 指引：>€200m。

## 无法确认的数据与人工复核

- 未新增外部事实，未编造数据。
- 人工复核：确认 05 改为 `公开事件时间线` 后是否符合系列最终命名；确认删除 05 摘要小卡片后信息密度是否满足汇报场景。

## 事实变化与部署

- 是否涉及事实变化：否。
- npm run build 是否成功：是。
- 是否 push：否。
- 是否触发 Netlify：否。
