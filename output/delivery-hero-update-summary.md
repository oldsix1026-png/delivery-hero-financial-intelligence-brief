# Delivery Hero 独立看板更新总结

更新日期：2026-06-12

## 本轮完成内容

- 首页由 Q1 2026 单季度快照升级为“最新值 + 近 12 个季度迷你趋势图”。
- 新增集团近三年完整趋势图，对比 Group GMV 与 Total Segment Revenue。
- 01–04 分析板块统一重构为“左侧官方数据 + 右侧券商研报归因”。
- 情报追踪升级为主要动向摘要卡与完整时间轴两层结构。
- 修复原 `App.tsx` 和 data 文件中的中文编码损坏。

## 新增季度趋势

形成 Q2 2023 至 Q1 2026 的 12 个季度序列：

1. Group GMV
2. Total Segment Revenue
3. Asia GMV
4. MENA GMV
5. Europe GMV
6. Americas GMV
7. Integrated Verticals GMV

其中 Q2 2023 与 Q4 2025 的单季值由官方全年值减去其他已披露季度计算，已在每条记录的 `sourceType` 和 `note` 中明确标注，没有作为公司单季表格原文展示。

## 无法形成连续季度序列的指标

- Quick Commerce GMV：公司主要披露增速、全年规模或特定季度占比，未形成完整 12 季度实际值。
- Quick Commerce 占 Group GMV 比例：仅使用 Q1 2024、Q1 2025、Q1 2026 明确披露节点。
- Adjusted EBITDA：主要按半年或全年披露。
- Free Cash Flow：主要按半年或全年披露，且历史定义存在变化。
- 多品类、订阅、AdTech、Herogen 和履约指标：属于阶段性战略披露，未补造季度值。

## 首页最终 KPI

1. Group GMV
2. Total Segment Revenue
3. MENA GMV
4. Integrated Verticals GMV

第四项选择 Integrated Verticals GMV，是因为其具有连续季度实际值，同时能代表 Quick Commerce 等战略业务的增长。

## 01–04 板块重构

- 01 集团增长质量：左侧为 GMV/Revenue 12 季度趋势与同比增速差，右侧解释 Quick Commerce、订阅、AdTech、own-delivery 和区域超预期。
- 02 区域增长结构：左侧为区域构成、Q1 增速和 12 季度区域趋势，右侧解释 MENA、沙特、Americas、韩国修复和竞争风险。
- 03 战略增长引擎：左侧为 Quick Commerce 披露节点、战略指标与 Everyday App 飞轮，右侧解释用户价值、广告变现、履约和 AI 效率。
- 04 盈利、指引与风险：左侧为半年/全年盈利趋势、FY26 指引和定性风险矩阵，右侧解释利润改善、券商模型修订、资本事项与治理变化。

## 研报贡献观点

### UBS

- 沙特市场采用客户体验、订阅、多品类和商户出资优惠，而不是简单匹配竞争对手折扣。
- 韩国订单和 GMV 恢复，但全球技术栈整合仍是效率释放条件。
- 韩国、MENA 与 Quick Commerce 的投资回报改善，提高了 FY26 EBITDA 指引上半区间的可信度。
- Everyday App 与 AI 已出现早期积极证据，但中长期利润仍取决于各市场执行。

### J.P. Morgan

- Q1 2026 Group GMV 与 Revenue 分别高于一致预期约 2% 和 1%。
- Integrated Verticals、LatAm 和 MENA 是主要正向差异，Asia 相对偏弱。
- 竞争、营销与技术成本、M&A 执行和潜在过高支付价格是主要风险。
- 市场 FY26 EBITDA 一致预期可能因公司上半区间信心而上调。

## 情报追踪

新增并保留 2026-03-12 至 2026-06-12 的 18 条可核验事件。

动向摘要分类：

- 战略与资本事项：5 条
- Quick Commerce 与零售扩张：3 条
- AI、AdTech 与效率：2 条
- 区域品牌动态：6 条
- 组织与治理变化：2 条

此外时间轴包含财务业绩、商户生态和可持续履约事件，因此分类卡不是互斥的完整事件类型统计。

集团层级事件包括 FY 2025 业绩、Q1 2026 Trading Update、Quick Commerce、Herogen、Uber 持股与潜在要约、CEO 交接、监事会变化、融资、商户生态研究和末端减排。

品牌与区域事件包括：

- foodpanda：台湾业务出售。
- talabat：Q1 2026 业绩、talabat mart、talabat pro 和零售新服务投资。
- HungerStation：沙特订阅、多品类和客户体验策略。
- Baemin：韩国订单恢复、own-delivery、订阅和技术整合。
- PedidosYa：Americas 订单、订阅和 Quick Commerce 增长。
- Glovo / foodora：欧洲 own-delivery、AdTech 和西班牙骑手模式调整。

未找到足够独立、可靠且位于 90 天窗口内的 foodora 单独公告。Baemin、PedidosYa、HungerStation 和 Glovo 的部分动态仅能使用 Delivery Hero Q1 官方披露，未使用搜索摘要补数。

## 页面访问与验证限制

- Delivery Hero IR、Delivery Hero Newsroom、talabat IR 和 talabat Q1 2026 官方 PDF 可访问。
- foodpanda Newsroom 页面可访问，但本轮窗口内没有检索到足够多可纳入的独立新公告。
- HungerStation、Baemin、PedidosYa、Glovo 和 foodora 的独立官方页面未检索到足够可靠的新事件。
- 本地内置浏览器因 Windows 沙箱权限错误无法启动，未完成截图式视觉 QA；已通过响应式 CSS、静态源码检查、ESLint 和生产构建进行替代验证。

## 安全与构建检查

- `npm run build`：成功。
- `npm run lint`：成功。
- `public` 中 PDF：无。
- `dist` 中 PDF：无。
- PDF 未复制到 `src`、`public` 或 `dist`。
- 未发现空白卡片、乱码、Grab 财报看板或 Uber 财报看板正文残留。
- 页面中的 Grab 仅作为台湾 foodpanda 交易对手，Uber 仅作为 Delivery Hero 股东或潜在交易事项，均有官方来源。
- 实际值、券商预测、季度、半年和全年指标已分层标注。

## 后续优化建议

- 在 Delivery Hero 后续季度更新后滚动替换 Q2 2023，保持固定 12 季度窗口。
- 若公司开始稳定披露 Quick Commerce 季度 GMV，可将首页第四张 KPI 从 Integrated Verticals GMV 切换为 Quick Commerce GMV。
- 在浏览器权限恢复后补充 1440px、1024px、768px 和 390px 四档截图式视觉回归。
