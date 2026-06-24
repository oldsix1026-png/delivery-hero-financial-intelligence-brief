# Delivery Hero language revision audit

核验日期：2026-06-24

| 修改前标题或短句 | 修改后标题或短句 | 修改原因 | 所在页面或组件文件 | 是否涉及事实变化 | 问题来源 | 是否需要人工复核 |
| --- | --- | --- | --- | --- | --- | --- |
| 上半区间信心来自成本控制和投资回报约束 | FY26 EBITDA 预测上调来自成本控制和投资回报约束 | “信心”表义不明，改为明确说明 UBS 上调 FY26 Adjusted EBITDA 预测的依据；保留 €950m 为券商预测、不是公司实际值。 | src/data/deliveryHeroFinancialData.ts | 否 | 本轮用户指定问题 | 否 |
| 韩国恢复仍取决于订单、GMV 和技术整合 | 韩国业务恢复仍取决于订单、GMV 和技术整合 | “韩国恢复”容易被理解为国家层面恢复，补足对象为韩国业务。 | src/data/deliveryHeroFinancialData.ts | 否 | 本轮用户指定问题 | 否 |
| MENA 和 Americas 是增量主力，韩国恢复仍取决于订单、GMV 和技术整合 | MENA 和 Americas 是增量主力，韩国业务恢复仍取决于订单、GMV 和技术整合 | 章节副标题同步补足“韩国业务”对象，避免标题过度省略。 | src/App.tsx | 否 | 本轮用户指定问题 | 否 |
| Quick Commerce、订阅和 AdTech 提供主要解释 | Quick Commerce、订阅和 AdTech 解释收入与 GMV 增速差异 | “主要解释”省略了解释对象，结合相邻正文补足为收入与 GMV 增速差异。 | src/data/deliveryHeroFinancialData.ts | 否 | 本轮用户指定问题 | 否 |
| Integrated Verticals 与 LatAm 提供超预期 | Integrated Verticals 与 LatAm 表现超出预期 | “提供超预期”表述不自然且对象不清，改为表现超出预期，保留 J.P. Morgan 对 Q1 GMV 与收入高于一致预期的判断。 | src/data/deliveryHeroFinancialData.ts | 否 | 本轮用户指定问题 | 否 |
| J.P. Morgan 将韩国和 MENA 市占率竞争、营销成本和技术成本超预期列为主要风险；这些内容属于后续观察，不能作为区域增长原因。 | J.P. Morgan 将韩国和 MENA 市占率竞争、营销成本和技术成本超出预期列为主要风险；这些内容属于后续观察，应作为后续风险变量跟踪。 | 将“超预期”改为“超出预期”，并把“不能作为”否定式改为肯定式后续跟踪表达。 | src/data/deliveryHeroFinancialData.ts | 否 | 自纠自查发现的问题 | 否 |
| J.P. Morgan 将韩国和 MENA 市占率竞争、营销、补贴与技术成本超预期列为主要风险。 | J.P. Morgan 将韩国和 MENA 市占率竞争、营销、补贴与技术成本超出预期列为主要风险。 | 将“超预期”改为更完整的“超出预期”，避免省略表达。 | src/data/deliveryHeroFinancialData.ts | 否 | 自纠自查发现的问题 | 否 |
| 用于实际值与一致预期比较、区域超预期来源、成本竞争风险和 M&A 讨论。 | 用于实际值与一致预期比较、区域表现超出预期来源、成本竞争风险和 M&A 讨论。 | 信息来源区会在页面显示，将“区域超预期来源”补足为“区域表现超出预期来源”。 | src/data/deliveryHeroSources.ts | 否 | 自纠自查发现的问题 | 否 |

本轮仅修改标题和相邻短句表达，未新增事实、未调整数据、未修改页面结构。单文件本地预览产物为 `output/delivery_hero_dashboard_local_preview.html`，可直接发送该 HTML 文件供双击预览。
