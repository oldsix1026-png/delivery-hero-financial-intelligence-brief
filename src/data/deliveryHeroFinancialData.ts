import {
  groupGmvHistory,
  integratedVerticalsHistory,
  menaGmvHistory,
  revenueHistory,
} from './deliveryHeroQuarterlyHistory'

export type Tone = 'orange' | 'blue' | 'green' | 'red'
export type EvidenceLabel = '公司披露' | 'UBS 观点' | 'J.P. Morgan 观点' | '券商估算' | '基于研报数据观察'

const latest = <T,>(items: T[]) => items[items.length - 1]

export const heroKpis = [
  {
    label: 'Group GMV',
    value: '€12.47bn',
    change: '+8.8% YoY LfL',
    qoq: '+0.5% QoQ reported',
    period: 'Q2 2023–Q1 2026',
    note: '集团口径 · 实际值 · 欧元',
    tone: 'orange' as Tone,
    history: groupGmvHistory,
  },
  {
    label: 'Total Segment Revenue',
    value: '€3.73bn',
    change: '+17.8% YoY LfL',
    qoq: '-4.0% QoQ reported',
    period: 'Q2 2023–Q1 2026',
    note: '集团分部收入 · 实际值 · 欧元',
    tone: 'blue' as Tone,
    history: revenueHistory,
  },
  {
    label: 'MENA GMV',
    value: '€3.83bn',
    change: '+16.1% YoY LfL',
    qoq: '+2.3% QoQ reported',
    period: 'Q2 2023–Q1 2026',
    note: '区域口径 · 土耳其受高通胀会计影响',
    tone: 'green' as Tone,
    history: menaGmvHistory,
  },
  {
    label: 'Integrated Verticals GMV',
    value: '€0.99bn',
    change: '+28.0% YoY LfL',
    qoq: '+8.0% QoQ reported',
    period: 'Q2 2023–Q1 2026',
    note: '战略业务口径 · Quick Commerce 为主要驱动',
    tone: 'orange' as Tone,
    history: integratedVerticalsHistory,
  },
]

export const guidance = [
  { label: 'GMV growth', min: 8, max: 10, display: '8–10% YoY LfL', color: '#f47a32', scaleMax: 20 },
  { label: 'Total Segment Revenue', min: 14, max: 16, display: '14–16% YoY LfL', color: '#3b82a0', scaleMax: 20 },
  { label: 'Adjusted EBITDA', min: 910, max: 960, display: '€910m–€960m', color: '#27846b', scaleMax: 1100 },
  { label: 'Free Cash Flow', min: 200, max: 200, display: '>€200m', color: '#8b6cab', scaleMax: 300 },
]

export const groupGrowth = [
  { name: 'Group GMV', value: 8.8, color: '#f47a32' },
  { name: 'Total Segment Revenue', value: 17.8, color: '#3b82a0' },
]

export const regions = [
  { name: 'Asia', value: 4915.7, reportedGrowth: -9.2, lflGrowth: 3.0, color: '#f47a32' },
  { name: 'MENA', value: 3828.5, reportedGrowth: 7.9, lflGrowth: 16.1, color: '#3b82a0' },
  { name: 'Europe', value: 2512.1, reportedGrowth: 5.3, lflGrowth: 6.8, color: '#e8a05f' },
  { name: 'Americas', value: 1210.3, reportedGrowth: 18.1, lflGrowth: 18.1, color: '#27846b' },
  { name: 'Integrated Verticals', value: 991.7, reportedGrowth: 20.0, lflGrowth: 28.0, color: '#8b6cab' },
]

export const forecastRevisions = [
  { name: 'MENA', oldValue: 487, newValue: 495 },
  { name: 'Asia', oldValue: 314, newValue: 305 },
  { name: 'Americas', oldValue: 128, newValue: 137 },
  { name: '集团合计', oldValue: 941, newValue: 950 },
]

export const growthAnalysis = [
  {
    label: '观察结果', evidence: '基于研报数据观察' as EvidenceLabel,
    title: '业务组合变化带动收入转化改善',
    text: '近三年多数季度 Total Segment Revenue 增速高于 GMV，这是图表观察结果，不是原因。它说明平台从交易规模向收入的转化能力改善，背后原因包括 Quick Commerce、订阅、AdTech 和 own-delivery 的业务组合变化。',
  },
  {
    label: '业务原因', evidence: '公司披露' as EvidenceLabel,
    title: 'Quick Commerce、订阅和 AdTech 解释收入与 GMV 增速差异',
    text: '公司将收入与 GMV 增速差归因于 Quick Commerce 扩张、订阅与 AdTech 动能，以及 own-delivery 持续铺开；这些业务会提高订单频次、商户服务收入和平台履约收入。',
  },
  {
    label: '增量来源', evidence: 'J.P. Morgan 观点' as EvidenceLabel,
    title: 'Integrated Verticals 与 LatAm 表现超出预期',
    text: 'J.P. Morgan 认为 Q1 GMV 与收入分别高于一致预期约 2% 和 1%，主要正向差异来自 Integrated Verticals、LatAm 和 MENA。',
  },
  {
    label: '判断边界', evidence: 'UBS 观点' as EvidenceLabel,
    title: '收入转化改善仍需看市场投入后的利润结果',
    text: 'UBS 认可韩国、MENA 和 Quick Commerce 投资回报改善，但客户获取、促销和基础设施投入具有滞后效应，收入转化改善还需要在后续利润和现金流中验证。',
  },
]

export const regionalAnalysis = [
  {
    label: '当前增长主力', evidence: '公司披露' as EvidenceLabel,
    title: 'MENA 与 Americas 领先',
    text: 'Q1 2026 MENA GMV 增长 16.1% LfL，Americas 增长 18.1% LfL；Integrated Verticals 增长 28.0% LfL。',
  },
  {
    label: '区域分化原因', evidence: 'UBS 观点' as EvidenceLabel,
    title: '沙特增长依赖订阅、商户供给和体验',
    text: 'UBS 指出 HungerStation 没有简单匹配折扣，而是通过订阅、商户选择、多品类和商户出资优惠提升体验；沙特订阅用户贡献 61% GMV。',
  },
  {
    label: '后续观察', evidence: 'UBS 观点' as EvidenceLabel,
    title: '韩国业务恢复仍取决于订单、GMV 和技术整合',
    text: '韩国订单和 LfL GMV 已恢复正增长，但市场竞争、补贴、Baemin 订阅、own-delivery、商户工具和全球技术栈整合仍会影响利润改善速度。',
  },
  {
    label: '后续观察', evidence: 'J.P. Morgan 观点' as EvidenceLabel,
    title: 'MENA 和韩国竞争会推高营销、补贴和技术投入',
    text: 'J.P. Morgan 将韩国和 MENA 市占率竞争、营销成本和技术成本超出预期列为主要风险；这些内容属于后续观察，应作为后续风险变量跟踪。',
  },
]

export const strategyMetrics = [
  { label: '多品类用户 GMV 占比', value: '55%', note: 'Q1 2026 · 公司披露', tone: 'orange' as Tone },
  { label: '订阅用户 GMV 占比', value: '43%', note: 'Q1 2026 · 公司披露，同比 +11ppt', tone: 'blue' as Tone },
  { label: 'Keyword Ads revenue', value: '€52m', note: 'Q1 2026 · 公司披露，同比 +170%', tone: 'green' as Tone },
  { label: '商户广告 ROAS', value: '+7%', note: '新 GenAI 排序模型 · 公司披露', tone: 'red' as Tone },
]

export const keyTermCards = [
  {
    term: 'Group GMV',
    body: '集团平台交易额，反映各区域和品牌促成的订单规模；它不是收入，不能直接等同于利润或现金流。',
  },
  {
    term: 'Total Segment Revenue',
    body: 'Delivery Hero 按分部披露的收入指标，用来观察平台从 GMV 转化为收入的能力，需与 Group GMV 分开看。',
  },
  {
    term: 'Quick Commerce',
    body: '高频即时零售和快速配送，覆盖杂货、便利零售等场景，是餐饮外卖之外的新增量。',
  },
  {
    term: 'Everyday App',
    body: '把外卖、杂货、零售、订阅和广告等多场景集中在一个高频应用中，提高用户留存和跨品类消费。',
  },
  {
    term: 'AdTech / Keyword Ads',
    body: '广告和关键词投放工具，帮助商户提高曝光并让平台增加可扩展变现，不只是营销费用分类。',
  },
  {
    term: 'Herogen',
    body: 'Delivery Hero 的 AI 工程工具，重点在开发自动化和工程效率，而不是泛泛的 AI 概念。',
  },
  {
    term: 'MENA / KSA / HungerStation',
    body: 'MENA 是当前增长和利润的重要区域，KSA 与 HungerStation 的订阅、商户供给和体验策略决定区域质量。',
  },
  {
    term: 'Strategic review',
    body: '战略复盘、资产出售和债务期限管理会影响资本结构、现金流预期和估值，而不只是公司治理新闻。',
  },
] as const

export const strategyAnalysis = [
  {
    label: '核心战略判断', evidence: 'UBS 观点' as EvidenceLabel,
    title: 'Everyday App 把外卖、Quick Commerce、订阅和广告连接成更高频的收入结构',
    text: 'Everyday App 是一个高频入口，把外卖、Quick Commerce、订阅、广告和履约连接起来，先提高使用频次和跨品类消费，再提升广告变现、商户服务收入和履约效率；目前只能说明战略方向开始落地，还不足以证明中长期利润改善。',
  },
  {
    label: '用户侧驱动', evidence: '公司披露' as EvidenceLabel,
    title: '跨品类用户价值更高',
    text: 'Q2 2025 公司披露，多品类用户平均消费约为仅外卖用户的 5.2 倍；Q1 2026 多品类用户贡献 55% GMV。',
  },
  {
    label: '商户与广告', evidence: '公司披露' as EvidenceLabel,
    title: 'AdTech 增加可扩展变现',
    text: 'Keyword Ads 收入达到 €52m，同比增长 170%；新 GenAI 广告排序模型将商户 ROAS 提升 7%。',
  },
  {
    label: '履约与技术', evidence: '基于研报数据观察' as EvidenceLabel,
    title: 'own-delivery 与 Herogen 同时改善履约和工程效率',
    text: 'own-delivery 提升收入转化与用户体验，Herogen 和全球技术平台则改善工程交付、调度和本地化效率；它们服务于经营杠杆，但仍需要后续利润和现金流验证。',
  },
]

export const flywheelSteps = [
  '更多品类', '更多使用场景', '更高订单频率', '更强订阅留存',
  '更高商户价值', '更好的履约效率', '支撑变现与盈利改善',
]

export const profitabilityAnalysis = [
  {
    label: '公司指引', evidence: '公司披露' as EvidenceLabel,
    title: '盈利与现金流已跨过年度拐点',
    text: 'FY 2025 Adjusted EBITDA 为 €903m，同比增长 30%；FCF 为 €250m，连续第二年为正。',
  },
  {
    label: '成本控制', evidence: 'UBS 观点' as EvidenceLabel,
    title: 'FY26 EBITDA 预测上调来自成本控制和投资回报约束',
    text: 'UBS 将 FY26 Adjusted EBITDA 预测上调至 €950m，MENA 与 Americas 上调抵消 Asia 下调；该数值是券商预测，不是公司实际值。',
  },
  {
    label: '后续观察', evidence: 'J.P. Morgan 观点' as EvidenceLabel,
    title: '竞争、营销、技术投入和交易执行影响现金流节奏',
    text: '市场竞争、营销及技术成本、交易执行和潜在过高支付价格是研报列示风险；汇率与高通胀会计只作为口径解释，reported 与 LfL 必须同口径比较。',
  },
  {
    label: '资本结构观察', evidence: '公司披露' as EvidenceLabel,
    title: '债务到期管理、资产出售和潜在交易影响资本结构',
    text: '台湾 foodpanda 出售仍待审批；再融资延长债务期限；Uber 持股升至 19.5%；CEO 继任搜索和战略复盘同时推进。投资者会根据现金流、债务期限、资产出售和潜在并购或出售交易重新评估公司价值。',
  },
]

export const risks = [
  { title: '韩国和 MENA 竞争会改变获客成本与利润改善节奏', level: '较高', text: 'J.P. Morgan 将韩国和 MENA 市占率竞争、营销、补贴与技术成本超出预期列为主要风险。' },
  { title: '韩国业务恢复仍取决于订单、GMV、竞争环境和技术整合', level: '观察中', text: '订单与 GMV 已恢复，但市场竞争、补贴、own-delivery、订阅、Quick Commerce、商户工具和全球技术栈整合仍需继续落地。' },
  { title: '债务期限、资产出售和潜在交易会影响资本结构', level: '较高', text: '台湾 foodpanda 出售审批、再融资后的债务期限、潜在并购或出售交易和资本配置会影响现金流、估值和资本结构。' },
  { title: '监管与骑手事项可能带来额外现金流出', level: '中等', text: '反垄断、骑手法律事项及平台监管可能改变成本结构和区域经营节奏。' },
  { title: '汇率和高通胀会计会放大 reported 与 LfL 差异', level: '中等', text: '阿根廷与土耳其使 reported、constant currency 和 LfL 增速出现明显差异，必须同口径比较。' },
  { title: 'CEO 交接需要和战略复盘进度一起观察', level: '观察中', text: '管理层交接、董事会变化和战略复盘并行，可能影响资本配置和执行节奏。' },
]

export const latestActuals = {
  groupGmv: latest(groupGmvHistory),
  revenue: latest(revenueHistory),
  menaGmv: latest(menaGmvHistory),
  integratedVerticals: latest(integratedVerticalsHistory),
}
