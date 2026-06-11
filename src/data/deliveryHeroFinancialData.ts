export type Tone = 'orange' | 'blue' | 'green' | 'red'

export const heroKpis = [
  { label: 'Group GMV', value: '€12.5bn', change: '+8.8% LfL', note: 'Q1 2026，集团层级', tone: 'orange' as Tone },
  { label: 'Total Segment Revenue', value: '€3.7bn', change: '+17.8% LfL', note: '收入增速高于 GMV', tone: 'blue' as Tone },
  { label: 'Quick Commerce GMV', value: '+30%', change: '占集团 GMV 18%', note: 'Q1 2026 同比增长', tone: 'green' as Tone },
  { label: 'FY26 Adjusted EBITDA', value: '€910m–€960m', change: '更有信心达到上半段', note: '公司维持 FY26 指引', tone: 'orange' as Tone },
]

export const groupGrowth = [
  { name: 'Group GMV', value: 8.8, color: '#f47a32' },
  { name: 'Total Segment Revenue', value: 17.8, color: '#3b82a0' },
  { name: 'Quick Commerce GMV', value: 30, color: '#27846b' },
]

export const growthPath = [
  { title: 'Everyday App', text: '从单一餐饮外卖扩展到多品类日常消费场景。' },
  { title: '订阅', text: '订阅用户贡献 43% GMV，强化使用频率与留存。' },
  { title: 'AdTech', text: '新广告排序模型使商户 ROAS 改善 7%。' },
  { title: 'own-delivery', text: '亚洲 own-delivery 与订阅推动收入增长。' },
  { title: 'Quick Commerce', text: 'GMV 同比增长 30%，占集团 GMV 18%。' },
]

export const regions = [
  { name: 'Asia', value: 4915.7, growth: 3.0, color: '#f47a32' },
  { name: 'MENA', value: 3828.5, growth: 16.1, color: '#3b82a0' },
  { name: 'Europe', value: 2512.1, growth: 6.8, color: '#e8a05f' },
  { name: 'Americas', value: 1210.3, growth: 18.1, color: '#27846b' },
  { name: 'Integrated Verticals', value: 991.7, growth: 28.0, color: '#8b6cab' },
]

export const regionalInsights = [
  { eyebrow: '增长亮点', title: 'MENA', metric: '+16.1%', description: 'HungerStation 与 talabat 订单增长强劲；沙特订阅渗透率达到 GMV 的 61%。', tone: 'blue' as Tone },
  { eyebrow: '增长加速', title: 'Americas', metric: '+18.1%', description: '订单量同比增长 25%，订阅订单渗透率达到 37%。', tone: 'green' as Tone },
  { eyebrow: '恢复观察', title: 'Asia', metric: '+3.0%', description: '韩国订单增长重新加速，own-delivery 与订阅体系继续推动收入增长。', tone: 'orange' as Tone },
  { eyebrow: '战略增长引擎', title: 'Integrated Verticals', metric: '+28.0%', description: 'Revenue 同比增长 32%，Quick Commerce 是主要驱动。', tone: 'red' as Tone },
]

export const strategyMetrics = [
  { label: '多品类用户 GMV 占比', value: '55%', note: '跨多个品类下单的用户', tone: 'orange' as Tone },
  { label: '订阅用户 GMV 占比', value: '43%', note: 'Q1 2026 集团 GMV', tone: 'blue' as Tone },
  { label: 'Quick Commerce GMV 占比', value: '18%', note: '同比增长 30%', tone: 'green' as Tone },
  { label: 'Herogen AI 工程产能', value: '130 人', note: '年化高级工程师等效产出', tone: 'red' as Tone },
]

export const flywheelSteps = ['更多品类', '更多使用场景', '更高订单频率', '更强订阅留存', '更高商户价值', '更好的履约效率', '支撑盈利改善']

export const efficiencySignals = [
  { label: 'Herogen', value: '自主 AI Agent', text: '用于代码生成、测试、文档和系统集成等工程任务。' },
  { label: 'AdTech', value: 'ROAS +7%', text: '新广告排序模型改善商户广告投资回报。' },
  { label: '工程效率', value: '130 人等效产出', text: '公司按年化口径披露的高级工程师等效产能。' },
]

export const guidance = [
  { label: 'GMV growth', min: 8, max: 10, display: '8–10% YoY LfL', color: '#f47a32' },
  { label: 'Total Segment Revenue', min: 14, max: 16, display: '14–16% YoY LfL', color: '#3b82a0' },
  { label: 'Adjusted EBITDA', min: 910, max: 960, display: '€910m–€960m', color: '#27846b' },
  { label: 'Free Cash Flow', min: 200, max: 200, display: '>€200m', color: '#8b6cab' },
]

export const strategicActions = [
  { tag: '资本结构调整', title: '出售台湾 foodpanda 业务', metric: 'USD 600m cash', text: '预计 2026 年下半年完成；所得款项拟用于偿债及一般公司用途。' },
  { tag: '治理变化', title: 'CEO 交接', metric: '继任者搜索已启动', text: 'Niklas Östberg 将在继任者到任后交接 CEO 角色，并继续担任顾问。' },
  { tag: '资本市场事件', title: 'Uber 进一步投资', metric: '持股 19.5%', text: 'Delivery Hero 披露 Uber 另持有 5.6% options，并表示欢迎其进一步投资。' },
  { tag: '战略审视', title: 'Uber 潜在收购接洽', metric: '初步接洽', text: '公司确认收到潜在收购接洽；当时尚未形成正式要约。' },
]

export const risks = [
  { title: '区域竞争', level: '高', text: '多区域竞争强度和促销策略可能影响增长质量与利润改善。' },
  { title: '韩国修复进度', level: '观察中', text: '订单增长已重新加速，但恢复持续性仍需后续季度验证。' },
  { title: 'MENA 竞争与促销压力', level: '中', text: 'MENA 增长较强，同时需观察竞争投入和订阅经济性。' },
  { title: '监管风险', level: '中', text: '平台、骑手、竞争和交易审批均可能带来执行不确定性。' },
  { title: '资本结构', level: '观察中', text: '台湾出售所得拟用于偿债，后续去杠杆节奏仍需跟踪。' },
  { title: 'M&A 执行', level: '高', text: '交易审批、交割与业务过渡存在时间和执行风险。' },
  { title: '汇率与高通胀会计', level: '中', text: '集团跨区域经营使报告数据受到汇率和高通胀会计影响。' },
]
