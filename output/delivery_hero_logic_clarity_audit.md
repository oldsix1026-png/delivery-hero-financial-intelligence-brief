# Delivery Hero logic clarity audit

更新时间：2026-06-22

| 原问题标题 / 表达 | 问题类型 | 修改后标题 / 表达 | 修改原因 | 对应来源 | 是否拆分卡片 | 是否合并卡片 | 是否移动到 04 后续观察 |
|---|---|---|---|---|---|---|---|
| 收入增长持续快于 GMV | 图表观察误写成原因 | 业务组合变化带动收入转化改善 | Revenue 增速高于 GMV 是图表观察结果，不是原因；原因应指向 Quick Commerce、订阅、AdTech 和 own-delivery | Delivery Hero Q1 2026 statement；UBS；J.P. Morgan | 否 | 否 | 否 |
| 增长质量归因中混入“投资回报需要跨季度验证” | 后续观察放错位置 | 收入转化改善仍需扣除市场投入 | 将验证性判断从增长原因中剥离，改为说明收入改善还需利润和现金流验证 | UBS 1Q26 report | 否 | 否 | 部分移动 |
| MENA 和 Americas 是增量主力，Asia/Korea 仍是修复变量 | 抽象词不清楚 | MENA 和 Americas 是增量主力，韩国恢复仍取决于订单、GMV 和技术整合 | “修复变量”不够直观，改成订单、GMV、订阅、own-delivery、商户工具和技术整合 | Delivery Hero Q1 2026 statement；UBS | 否 | 是 | 否 |
| 沙特坚持体验优先 | 证据不支撑标题 | 沙特增长依赖订阅、商户供给和体验 | 原标题较抽象，改为说明 HungerStation 如何通过订阅、商户选择、多品类和商户出资优惠支撑增长 | UBS 1Q26 report | 否 | 是 | 否 |
| 韩国恢复但技术整合未完成 | 同一主题被拆散 | 韩国恢复仍取决于订单、GMV 和技术整合 | 将韩国订单、GMV、own-delivery、订阅、Quick Commerce 和技术整合放入同一条主线 | UBS 1Q26 report；公司披露 | 否 | 是 | 部分移动 |
| 竞争与成本仍会扰动利润 | 抽象词不清楚 | MENA 和韩国竞争会推高营销与技术投入 | 明确竞争影响的是营销成本、技术成本和利润改善速度 | J.P. Morgan Q1'26 report | 否 | 是 | 是 |
| Everyday App 正形成早期证据 | 抽象词不清楚 | Everyday App 连接高频场景和收入结构 | 删除“早期证据”；说明 Everyday App 如何把外卖、Quick Commerce、订阅、广告和履约连接成高频入口 | UBS；公司披露 | 否 | 是 | 否 |
| FY26 EBITDA 和 FCF 指引体现纪律，资本事项决定估值讨论 | 抽象词不清楚；观点拼接 | FY26 EBITDA 和 FCF 仍要看成本控制、现金流管理和资本结构变化 | “纪律”“资本事项”“估值讨论”全部具体化为成本控制、现金流管理、债务期限、资产出售、潜在交易和资本结构影响 | Delivery Hero FY2025 audited results；UBS；J.P. Morgan | 否 | 是 | 是 |
| 指引、模型修订与后续观察 | 标题不统一 | 后续观察 | 按本轮要求统一 04 主标题；副标题保留 Delivery Hero 的具体判断 | 页面结构要求；公司指引；券商研报 | 否 | 否 | 是 |
| 资产出售、股东变化与 CEO 交接并行 | 同一主题被拆散；抽象词不清楚 | 债务期限、资产出售和潜在交易影响资本结构 | 将资产出售、再融资、股东变化、CEO 继任和战略复盘合并为资本结构与战略审查主线 | 公司 IR；Delivery Hero Newsroom；J.P. Morgan | 否 | 是 | 是 |
| 汇率和 reported / LfL 差异 | 后续观察放错位置 | reported、constant currency 和 like-for-like 仅在同口径下比较 | 该内容作为口径解释保留在来源说明和风险矩阵，不作为单独主分析卡 | Delivery Hero 官方口径；J.P. Morgan | 否 | 否 | 否 |

## 本轮结构处理

- `01` 将“收入高于 GMV”改为观察结果，并把原因收束为 Quick Commerce、订阅、AdTech 和 own-delivery。
- `02` 合并韩国相关判断，统一表述为订单、GMV、订阅、own-delivery、商户工具和技术整合的恢复主线。
- `02` 将 MENA / KSA / HungerStation 聚焦到订阅、商户供给、多品类和体验，而不是泛泛写区域竞争。
- `03` 将 Everyday App 串成“高频入口 -> 使用频次 / 跨品类消费 -> 广告变现 / 商户服务 / 履约效率”的因果链。
- `04` 主标题统一为“后续观察”，集中承接公司指引、券商模型修订、韩国恢复、MENA 竞争、现金流、债务期限、资产出售和潜在交易。
- 页面不新增未披露数字，不把券商预测写成公司实际结果。
