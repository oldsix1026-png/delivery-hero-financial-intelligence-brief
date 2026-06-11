export type Tone = 'orange' | 'blue' | 'green' | 'red'
export type EvidenceLabel = '公司披露' | 'UBS 观点' | 'J.P. Morgan 观点' | '券商估算' | '基于研报数据观察'

export const heroKpis = [
  { label: 'Group GMV', value: '€12.47bn', change: '+8.8% YoY LfL', note: 'Q1 2026 实际值 · 公司披露', tone: 'orange' as Tone },
  { label: 'Total Segment Revenue', value: '€3.73bn', change: '+17.8% YoY LfL', note: 'Q1 2026 实际值 · 公司披露', tone: 'blue' as Tone },
  { label: 'Quick Commerce GMV', value: '+30%', change: '占集团 GMV 18%', note: 'Q1 2026 LfL · 公司披露', tone: 'green' as Tone },
  { label: 'FY26 Adjusted EBITDA', value: '€910m–€960m', change: '公司维持指引', note: '预测区间 · 公司披露', tone: 'orange' as Tone },
]

export const groupGrowth = [
  { name: 'Group GMV', value: 8.8, color: '#f47a32' },
  { name: 'Total Segment Revenue', value: 17.8, color: '#3b82a0' },
]

export const financialInsights = [
  { eyebrow: '公司披露', title: '收入增长快于 GMV', metric: '+9.0ppt', description: 'Q1 2026 LfL 口径下，Revenue 增速比 GMV 高 9.0 个百分点。', tone: 'blue' as Tone },
  { eyebrow: 'J.P. Morgan 观点', title: '业绩高于一致预期', metric: '+2% / +1%', description: '集团 GMV 与 Revenue 分别高于报告所列一致预期约 2% 和 1%。', tone: 'green' as Tone },
  { eyebrow: 'UBS 观点', title: '投资回报改善', description: 'UBS 认为 Korea、MENA 与 Quick Commerce 的投入回报提升了盈利指引可信度。', tone: 'orange' as Tone },
  { eyebrow: '基于研报数据观察', title: '增长仍有区域差异', description: '集团超预期主要由 Americas、MENA 与 Integrated Verticals 支撑，Asia 相对偏弱。', tone: 'red' as Tone },
]

export const regions = [
  { name: 'Asia', value: 4915.7, reportedGrowth: -9.2, lflGrowth: 3.0, color: '#f47a32' },
  { name: 'MENA', value: 3828.5, reportedGrowth: 7.9, lflGrowth: 16.1, color: '#3b82a0' },
  { name: 'Europe', value: 2512.1, reportedGrowth: 5.3, lflGrowth: 6.8, color: '#e8a05f' },
  { name: 'Americas', value: 1210.3, reportedGrowth: 18.1, lflGrowth: 18.1, color: '#27846b' },
  { name: 'Integrated Verticals', value: 991.7, reportedGrowth: 20.0, lflGrowth: 28.0, color: '#8b6cab' },
]

export const regionalInsights = [
  { eyebrow: '公司披露', title: 'MENA', metric: '+16.1% LfL', description: 'HungerStation 与 talabat 订单增长强劲；沙特订阅 GMV 渗透率为 61%。', tone: 'blue' as Tone },
  { eyebrow: 'J.P. Morgan 观点', title: 'Americas 超预期', metric: '+13%', description: 'Q1 GMV 实际值较报告所列一致预期高约 13%，为主要正向差异之一。', tone: 'green' as Tone },
  { eyebrow: 'UBS 观点', title: 'Asia 仍在修复', metric: '+3.0% LfL', description: '韩国订单与 GMV 恢复，但技术栈整合和优惠券强度仍影响效率释放。', tone: 'orange' as Tone },
  { eyebrow: '基于研报数据观察', title: 'Integrated Verticals', metric: '+28.0% LfL', description: '分部 GMV 和 Revenue 增长最快，Quick Commerce 是主要驱动。', tone: 'red' as Tone },
]

export const strategyMetrics = [
  { label: '多品类用户 GMV 占比', value: '55%', note: 'Q1 2026 · 公司披露', tone: 'orange' as Tone },
  { label: '订阅用户 GMV 占比', value: '43%', note: 'Q1 2026 · 公司披露', tone: 'blue' as Tone },
  { label: '骑手餐厅等待时间', value: '-8%', note: 'Q1 2026 · UBS 转述管理层披露', tone: 'green' as Tone },
  { label: 'Priority deliveries', value: '+50%', note: 'Q1 2026 YoY · UBS 转述管理层披露', tone: 'red' as Tone },
]

export const flywheelSteps = ['更多品类', '更多使用场景', '更高订单频率', '更强订阅留存', '更高商户价值', '更高履约效率', '支撑盈利改善']

export const capabilityPath = [
  { title: '用户侧', text: '多品类、订阅与 Quick Commerce 扩展日常使用场景。' },
  { title: '商户侧', text: 'AdTech 排序模型提升商户广告 ROAS，增强平台商业价值。' },
  { title: '履约侧', text: 'own-delivery、Priority deliveries 与等待时间优化提升体验。' },
  { title: '技术侧', text: 'Herogen 与生成式 AI 用于工程交付和广告模型迭代。' },
]

export const efficiencySignals = [
  { label: 'Herogen', value: '约 130 人等效产出', text: '公司披露的年化高级工程师等效编码产能。' },
  { label: 'AdTech', value: '商户 ROAS +7%', text: '公司披露新广告排序模型带来的改善。' },
  { label: 'Quick Commerce', value: 'GMV +30% LfL', text: '已占集团 GMV 18%，同比提升 3 个百分点。' },
]

export const guidance = [
  { label: 'GMV growth', min: 8, max: 10, display: '8–10% YoY LfL', color: '#f47a32', scaleMax: 20 },
  { label: 'Total Segment Revenue', min: 14, max: 16, display: '14–16% YoY LfL', color: '#3b82a0', scaleMax: 20 },
  { label: 'Adjusted EBITDA', min: 910, max: 960, display: '€910m–€960m', color: '#27846b', scaleMax: 1100 },
  { label: 'Free Cash Flow', min: 200, max: 200, display: '>€200m', color: '#8b6cab', scaleMax: 300 },
]

export const forecastRevisions = [
  { name: 'MENA', oldValue: 487, newValue: 495 },
  { name: 'Asia', oldValue: 314, newValue: 305 },
  { name: 'Americas', oldValue: 128, newValue: 137 },
  { name: '集团合计', oldValue: 941, newValue: 950 },
]

export const profitabilityInsights = [
  { eyebrow: '公司披露', title: '盈利指引不变', description: 'FY26 Adjusted EBITDA 维持 €910m–€960m，管理层对上半区间更有信心。', tone: 'green' as Tone },
  { eyebrow: 'UBS 券商估算', title: 'FY26 Adjusted EBITDA', metric: '€950m', description: '较旧预测上调 0.9%，位于公司指引上半区间。', tone: 'blue' as Tone },
  { eyebrow: 'J.P. Morgan 观点', title: '一致预期或上调', description: '预计市场 FY26 EBITDA 预测可能出现中个位数幅度上调。', tone: 'orange' as Tone },
  { eyebrow: '口径提示', title: 'FCF 不可直接混用', description: '公司 FCF 指引与 UBS equity FCF 模型定义不同，页面分别标注。', tone: 'red' as Tone },
]

export const strategicActions = [
  { tag: '资产出售', title: '台湾 foodpanda 业务', metric: 'USD 600m cash', text: '预计 2026 年下半年交割，仍取决于监管审批等条件。' },
  { tag: '治理变化', title: 'CEO 交接', metric: '继任者搜索已启动', text: 'Niklas Östberg 将在继任者到任后交接 CEO 职责。' },
  { tag: '资本市场', title: 'Uber 进一步投资', metric: '持股 19.5%', text: '公司另披露 Uber 持有相当于 5.6% 股本的期权。' },
  { tag: '潜在交易', title: 'Uber 潜在要约接洽', metric: '尚无正式要约', text: '2026 年 5 月 23 日公司确认收到接洽，结果仍不确定。' },
]

export const risks = [
  { title: '区域竞争', level: '较高', text: '韩国、MENA 等市场的竞争和促销投入可能影响利润改善节奏。' },
  { title: '韩国修复进度', level: '观察中', text: '订单增长恢复，但全球技术栈整合与补贴强度仍需跟踪。' },
  { title: 'M&A 执行', level: '较高', text: '交易审批、估值、交割和业务迁移均存在执行不确定性。' },
  { title: '监管与法律事项', level: '中等', text: '反垄断、骑手相关事项及平台监管可能带来额外现金支出。' },
  { title: '汇率与高通胀会计', level: '中等', text: '跨区域经营使 reported 与 LfL 增速出现明显差异。' },
  { title: '治理与资本结构', level: '观察中', text: 'CEO 交接、股东结构和去杠杆路径需要持续观察。' },
]
