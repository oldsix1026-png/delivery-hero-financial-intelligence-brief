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
    label: '核心判断', evidence: '基于研报数据观察' as EvidenceLabel,
    title: '收入增长持续快于 GMV',
    text: '近三年多数季度 Total Segment Revenue 增速高于 GMV。Q1 2026 的 LfL 增速差为 9.0 个百分点，显示变现结构继续改善。',
  },
  {
    label: '增长驱动', evidence: '公司披露' as EvidenceLabel,
    title: '业务组合提高收入转化',
    text: '公司将差异归因于 Quick Commerce 扩张、订阅与 AdTech 动能，以及 own-delivery 持续铺开。',
  },
  {
    label: '研报解读', evidence: 'J.P. Morgan 观点' as EvidenceLabel,
    title: 'Integrated Verticals 与 LatAm 提供超预期',
    text: 'J.P. Morgan 认为 Q1 GMV 与收入分别高于一致预期约 2% 和 1%，主要正向差异来自 Integrated Verticals、LatAm 和 MENA。',
  },
  {
    label: '后续观察', evidence: 'UBS 观点' as EvidenceLabel,
    title: '投资回报需要跨季度验证',
    text: 'UBS 认可韩国、MENA 和 Quick Commerce 投资回报改善，但强调客户获取与基础设施投入具有滞后和复利效应。',
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
    title: '沙特坚持体验优先',
    text: 'UBS 指出 HungerStation 没有简单匹配折扣，而是通过订阅、商户选择、多品类和商户出资优惠提升体验；沙特订阅用户贡献 61% GMV。',
  },
  {
    label: '恢复观察', evidence: 'UBS 观点' as EvidenceLabel,
    title: '韩国恢复但技术整合未完成',
    text: '韩国订单与 LfL GMV 恢复正增长，own-delivery、订阅和 Quick Commerce 提供支持；全球技术栈整合仍是效率释放前提。',
  },
  {
    label: '风险提示', evidence: 'J.P. Morgan 观点' as EvidenceLabel,
    title: '竞争与成本仍会扰动利润',
    text: 'J.P. Morgan 将韩国和 MENA 市占率竞争、营销与技术成本超预期列为主要风险，单一市场表现不能外推为集团趋势。',
  },
]

export const strategyMetrics = [
  { label: '多品类用户 GMV 占比', value: '55%', note: 'Q1 2026 · 公司披露', tone: 'orange' as Tone },
  { label: '订阅用户 GMV 占比', value: '43%', note: 'Q1 2026 · 公司披露，同比 +11ppt', tone: 'blue' as Tone },
  { label: 'Keyword Ads revenue', value: '€52m', note: 'Q1 2026 · 公司披露，同比 +170%', tone: 'green' as Tone },
  { label: '商户广告 ROAS', value: '+7%', note: '新 GenAI 排序模型 · 公司披露', tone: 'red' as Tone },
]

export const strategyAnalysis = [
  {
    label: '核心战略判断', evidence: 'UBS 观点' as EvidenceLabel,
    title: 'Everyday App 正形成早期证据',
    text: 'UBS 认为多品类参与、订阅和 Quick Commerce 的早期指标支持战略方向，但中长期利润改善仍取决于各市场执行。',
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
    title: 'own-delivery 与 AI 同时作用',
    text: 'own-delivery 提升收入转化与体验，Herogen 和全球技术平台则改善工程交付、调度和本地化效率。',
  },
]

export const flywheelSteps = [
  '更多品类', '更多使用场景', '更高订单频率', '更强订阅留存',
  '更高商户价值', '更好的履约效率', '支撑变现与盈利改善',
]

export const profitabilityAnalysis = [
  {
    label: '盈利判断', evidence: '公司披露' as EvidenceLabel,
    title: '盈利与现金流已跨过年度拐点',
    text: 'FY 2025 Adjusted EBITDA 为 €903m，同比增长 30%；FCF 为 €250m，连续第二年为正。',
  },
  {
    label: '指引解读', evidence: 'UBS 观点' as EvidenceLabel,
    title: '上半区间信心来自投资回报改善',
    text: 'UBS 将 FY26 Adjusted EBITDA 预测上调至 €950m，MENA 与 Americas 上调抵消 Asia 下调；该数值是券商预测，不是公司实际值。',
  },
  {
    label: '风险矩阵', evidence: 'J.P. Morgan 观点' as EvidenceLabel,
    title: '竞争、投入与 M&A 执行',
    text: '市场竞争、营销及技术成本、交易执行和潜在过高支付价格是研报列示风险；汇率与高通胀会计还会放大 reported 与 LfL 差异。',
  },
  {
    label: '资本与治理', evidence: '公司披露' as EvidenceLabel,
    title: '资产出售、股东变化与 CEO 交接并行',
    text: '台湾 foodpanda 出售仍待审批；Uber 持股升至 19.5%；CEO 继任搜索和战略复盘同时推进。',
  },
]

export const risks = [
  { title: '区域竞争与促销', level: '较高', text: '韩国和 MENA 的竞争可能改变获客成本与利润改善节奏。' },
  { title: '韩国修复持续性', level: '观察中', text: '订单与 GMV 已恢复，但技术栈整合和优惠券强度仍需验证。' },
  { title: 'M&A 与资产处置', level: '较高', text: '台湾交易审批、潜在战略事项和资本配置存在执行不确定性。' },
  { title: '监管与骑手事项', level: '中等', text: '反垄断、骑手法律事项及平台监管可能带来额外现金流出。' },
  { title: '汇率与高通胀会计', level: '中等', text: '阿根廷与土耳其使 reported、CC 和 LfL 增速出现明显差异。' },
  { title: '治理与管理层交接', level: '观察中', text: 'CEO 交接与董事会变化需要与战略复盘进度共同观察。' },
]

export const latestActuals = {
  groupGmv: latest(groupGmvHistory),
  revenue: latest(revenueHistory),
  menaGmv: latest(menaGmvHistory),
  integratedVerticals: latest(integratedVerticalsHistory),
}
