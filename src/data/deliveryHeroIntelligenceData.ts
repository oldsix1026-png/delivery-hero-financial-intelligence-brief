export type EntityLevel = 'group' | 'region' | 'brand' | 'country'
export type SourceTier = 'S' | 'A' | 'B' | 'C'

export type IntelligenceEvent = {
  id: string
  entityLevel: EntityLevel
  group: string
  brand: string
  region: string
  country: string
  eventDate: string
  eventType: string
  titleZh: string
  summaryZh: string
  impactZh: string
  sourceTitle: string
  sourceOrganization: string
  sourceUrl: string
  sourceType: string
  sourceTier: SourceTier
  publishedAt: string
  capturedAt: string
}

const capturedAt = '2026-06-12'
const q1Url = 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/'

const events: IntelligenceEvent[] = [
  {
    id: 'dh-emissions-20260605', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '多市场',
    eventDate: '2026-06-05', eventType: '可持续履约', titleZh: '发布末端配送减排路径与现实约束',
    summaryZh: '集团总结电动化、骑手基础设施和本地政策协同对末端配送减排的重要性，并指出各市场基础条件差异。',
    impactZh: '履约效率与合规投入需要同时推进，短期更偏运营能力建设。',
    sourceTitle: 'Cutting last-mile delivery emissions: The challenges, priorities and the road ahead',
    sourceOrganization: 'Delivery Hero', sourceUrl: 'https://www.deliveryhero.com/newsroom/', sourceType: '集团官方 Newsroom', sourceTier: 'A', publishedAt: '2026-06-05', capturedAt,
  },
  {
    id: 'dh-uber-approach-20260523', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-23', eventType: '潜在交易', titleZh: '确认收到 Uber 潜在收购要约接洽',
    summaryZh: '公司确认收到每股 €33 的非约束性意向接洽，公告时尚无正式要约，战略复盘继续推进。',
    impactZh: '控制权交易仍处于不确定阶段，不应视为已达成交易。',
    sourceTitle: 'Delivery Hero confirms approach by Uber Technologies with respect to potential takeover offer',
    sourceOrganization: 'Delivery Hero Investor Relations', sourceUrl: 'https://ir.deliveryhero.com/news', sourceType: '官方临时公告', sourceTier: 'S', publishedAt: '2026-05-23', capturedAt,
  },
  {
    id: 'dh-uber-investment-20260518', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-18', eventType: '资本结构', titleZh: 'Uber 持股升至 19.5%',
    summaryZh: 'Delivery Hero 披露 Uber 持有 19.5% 已发行股本，并另持有相当于约 5.6% 股本的期权。',
    impactZh: '股东结构发生重大变化，资本与潜在战略事项的关注度上升。',
    sourceTitle: 'Delivery Hero welcomes further investment from Uber', sourceOrganization: 'Delivery Hero',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-welcomes-further-investment-from-uber/', sourceType: '集团官方公告', sourceTier: 'A', publishedAt: '2026-05-18', capturedAt,
  },
  {
    id: 'dh-ceo-transition-20260512', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-12', eventType: '治理变化', titleZh: '启动 CEO 继任者搜索',
    summaryZh: 'Niklas Östberg 将在继任者到任后交接 CEO 职责，并继续担任顾问。',
    impactZh: '战略复盘与管理层交接并行，执行连续性进入观察期。',
    sourceTitle: 'Niklas Östberg to hand over CEO role at Delivery Hero after fifteen years',
    sourceOrganization: 'Delivery Hero', sourceUrl: 'https://www.deliveryhero.com/newsroom/niklas-ostberg-to-hand-over-ceo-role-at-delivery-hero-after-fifteen-years-supervisory-board-initiates-search-for-successor/',
    sourceType: '集团官方公告', sourceTier: 'A', publishedAt: '2026-05-12', capturedAt,
  },
  {
    id: 'talabat-q1-20260512', entityLevel: 'brand', group: 'Delivery Hero', brand: 'talabat', region: 'MENA', country: '八个运营市场',
    eventDate: '2026-05-12', eventType: '品牌经营', titleZh: 'talabat 推进 Everyday App 投资计划',
    summaryZh: 'Q1 GMV 为 USD 2.685bn，同比增长 19%；公司已投入接近 USD 25m，用于 talabat mart 门店密度、供应链、talabat pro 和零售新服务。',
    impactZh: 'MENA 增长与利润之间的平衡更多依赖杂货、订阅和多品类投资的转化效率。',
    sourceTitle: 'talabat delivers strong Q1 2026 performance, advances strategic investments and increases guidance',
    sourceOrganization: 'talabat Investor Relations', sourceUrl: 'https://ir.talabat.com/wp-content/uploads/2026/05/20260512_talabat-Q126-Results-Press-Release-En.pdf',
    sourceType: '品牌官方财报', sourceTier: 'S', publishedAt: '2026-05-12', capturedAt,
  },
  {
    id: 'dh-board-20260504', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-04', eventType: '治理变化', titleZh: 'Roger Rabalais 加入监事会',
    summaryZh: 'Roger Rabalais 被任命为独立监事会成员，并将参与战略复盘和下一阶段监督。',
    impactZh: '董事会补充消费科技与财务运营经验。',
    sourceTitle: 'Delivery Hero welcomes Roger Rabalais to Supervisory Board', sourceOrganization: 'Delivery Hero',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-welcomes-roger-rabalais-to-supervisory-board/', sourceType: '集团官方公告', sourceTier: 'A', publishedAt: '2026-05-04', capturedAt,
  },
  {
    id: 'dh-q1-20260430', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '多市场',
    eventDate: '2026-04-30', eventType: '财务业绩', titleZh: 'Q1 GMV 增长加速并确认 FY26 指引',
    summaryZh: 'Group GMV 增长 8.8% LfL，Total Segment Revenue 增长 17.8% LfL；公司对 Adjusted EBITDA 达到指引上半区间更有信心。',
    impactZh: 'Everyday App、Quick Commerce 和重点市场投入成为本轮业绩主线。',
    sourceTitle: 'Delivery Hero Quarterly Statement Q1 2026', sourceOrganization: 'Delivery Hero', sourceUrl: q1Url,
    sourceType: '官方 Trading Update', sourceTier: 'S', publishedAt: '2026-04-30', capturedAt,
  },
  {
    id: 'hungerstation-q1-20260430', entityLevel: 'brand', group: 'Delivery Hero', brand: 'HungerStation', region: 'MENA', country: '沙特阿拉伯',
    eventDate: '2026-04-30', eventType: '订阅与体验', titleZh: '沙特订阅与多品类策略支撑增长',
    summaryZh: '集团披露沙特订阅用户贡献 61% GMV，并通过商户选择、多品类和商户出资优惠改善客户体验。',
    impactZh: '在竞争环境下，公司选择体验与留存优先，而非仅依赖平台补贴。',
    sourceTitle: 'Delivery Hero Q1 2026 Trading Update', sourceOrganization: 'Delivery Hero', sourceUrl: q1Url,
    sourceType: '集团官方披露', sourceTier: 'S', publishedAt: '2026-04-30', capturedAt,
  },
  {
    id: 'baemin-q1-20260430', entityLevel: 'brand', group: 'Delivery Hero', brand: 'Baemin', region: 'Asia', country: '韩国',
    eventDate: '2026-04-30', eventType: '市场修复', titleZh: '韩国订单恢复并扩大 own-delivery',
    summaryZh: '韩国订单增速自 2025 年末以来继续回升，own-delivery、订阅和 Quick Commerce 支撑收入增长；订阅用户贡献约 50% GMV。',
    impactZh: '修复信号明确，但全球技术平台整合仍是进一步释放效率的前提。',
    sourceTitle: 'Delivery Hero Q1 2026 Trading Update', sourceOrganization: 'Delivery Hero', sourceUrl: q1Url,
    sourceType: '集团官方披露', sourceTier: 'S', publishedAt: '2026-04-30', capturedAt,
  },
  {
    id: 'pedidosya-q1-20260430', entityLevel: 'brand', group: 'Delivery Hero', brand: 'PedidosYa', region: 'Americas', country: '拉丁美洲',
    eventDate: '2026-04-30', eventType: '多品类增长', titleZh: 'Americas 订单与零售品类同步增长',
    summaryZh: '区域订单同比增长 25%，15 个市场中有 13 个增长超过 20%；Quick Commerce 增长 34%，订阅占订单 37%。',
    impactZh: '杂货、药品等多品类和订阅正在提高区域使用频率。',
    sourceTitle: 'Delivery Hero Q1 2026 Trading Update', sourceOrganization: 'Delivery Hero', sourceUrl: q1Url,
    sourceType: '集团官方披露', sourceTier: 'S', publishedAt: '2026-04-30', capturedAt,
  },
  {
    id: 'glovo-europe-q1-20260430', entityLevel: 'region', group: 'Delivery Hero', brand: 'Glovo / foodora', region: 'Europe', country: '欧洲多市场',
    eventDate: '2026-04-30', eventType: '履约与广告', titleZh: '欧洲扩大 own-delivery 并强化 AdTech',
    summaryZh: '欧洲 own-delivery 占比达到 83%，推动收入增速高于 GMV；AdTech 收入同比增长 34%。',
    impactZh: '履约控制与广告变现共同改善收入质量，但西班牙骑手模式调整带来短期效率影响。',
    sourceTitle: 'Delivery Hero Q1 2026 Trading Update', sourceOrganization: 'Delivery Hero', sourceUrl: q1Url,
    sourceType: '集团官方披露', sourceTier: 'S', publishedAt: '2026-04-30', capturedAt,
  },
  {
    id: 'dh-qcommerce-q1-20260430', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '多市场',
    eventDate: '2026-04-30', eventType: 'Quick Commerce', titleZh: 'Quick Commerce 占 Group GMV 比例升至 18%',
    summaryZh: 'Quick Commerce GMV 同比增长 30% LfL，占集团 GMV 18%，较上年同期提高 3 个百分点。',
    impactZh: 'Quick Commerce 已从补充品类转为 Everyday App 的主要增长引擎。',
    sourceTitle: 'Delivery Hero Quarterly Statement Q1 2026', sourceOrganization: 'Delivery Hero', sourceUrl: q1Url,
    sourceType: '官方 Trading Update', sourceTier: 'S', publishedAt: '2026-04-30', capturedAt,
  },
  {
    id: 'dh-herogen-20260424', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-04-24', eventType: 'AI 与效率', titleZh: '发布自主工程 AI Agent Herogen',
    summaryZh: '公司称 Herogen 可执行端到端工程任务，年化编码产出相当于约 130 名高级工程师。',
    impactZh: 'AI 应用从辅助工具延伸到工程执行，但该产能指标为公司口径。',
    sourceTitle: 'Delivery Hero Unveils Herogen – Autonomous AI Agent Unlocks 130-Person Engineering Output',
    sourceOrganization: 'Delivery Hero', sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-unveils-herogen-autonomous-ai-agent-unlocks-130-person-engineering-output/',
    sourceType: '集团官方公告', sourceTier: 'A', publishedAt: '2026-04-24', capturedAt,
  },
  {
    id: 'dh-local-economy-study-20260422', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '多市场',
    eventDate: '2026-04-22', eventType: '商户生态', titleZh: '发布本地经济影响研究',
    summaryZh: '集团发布研究，讨论平台订单、商户与骑手生态对本地经济活动的带动作用。',
    impactZh: '强化平台对商户生态和监管沟通的叙事，不作为财务趋势数据使用。',
    sourceTitle: 'Beyond the Backpack: Delivery Hero Study Reveals €62 Billion Engine Powering Local Economies',
    sourceOrganization: 'Delivery Hero', sourceUrl: 'https://www.deliveryhero.com/newsroom/', sourceType: '集团官方 Newsroom', sourceTier: 'A', publishedAt: '2026-04-22', capturedAt,
  },
  {
    id: 'dh-uber-shareholder-20260417', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-04-17', eventType: '资本结构', titleZh: 'Uber 成为重要长期股东',
    summaryZh: 'Uber 从 Prosus 增持 13,582,342 股，约占 Delivery Hero 已发行股本 4.5%。',
    impactZh: '股东结构调整先于后续进一步增持和潜在要约接洽。',
    sourceTitle: 'Delivery Hero welcomes Uber as a long-term shareholder', sourceOrganization: 'Delivery Hero',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-welcomes-uber-as-a-long-term-shareholder/', sourceType: '集团官方公告', sourceTier: 'A', publishedAt: '2026-04-17', capturedAt,
  },
  {
    id: 'dh-fy25-20260326', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '多市场',
    eventDate: '2026-03-26', eventType: '财务业绩', titleZh: 'FY 2025 EBITDA 与 FCF 继续改善',
    summaryZh: 'FY 2025 Adjusted EBITDA 为 €903m，同比增长 30%；FCF 为 €250m，连续第二年为正。',
    impactZh: '盈利和现金流改善为 2026 年重点市场投资及资本结构调整提供基础。',
    sourceTitle: 'Delivery Hero reports adj. EBITDA up 30% in 2025', sourceOrganization: 'Delivery Hero',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-reports-adj-ebitda-up-30-in-2025-as-quick-commerce-and-key-markets-gain-momentum/',
    sourceType: '官方年度财报', sourceTier: 'S', publishedAt: '2026-03-26', capturedAt,
  },
  {
    id: 'fp-taiwan-sale-20260323', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '中国台湾',
    eventDate: '2026-03-23', eventType: '资产出售', titleZh: '台湾 foodpanda 业务拟出售给 Grab',
    summaryZh: '交易对价为 USD 600m 现金，预计 2026 年下半年完成，仍需监管审批。',
    impactZh: '体现集团收缩地理范围、释放资产价值和降低杠杆的战略方向。',
    sourceTitle: 'Delivery Hero to sell Taiwan food delivery operations to Grab for USD 600 million',
    sourceOrganization: 'Delivery Hero', sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-to-sell-taiwan-food-delivery-operations-to-grab-for-usd-600-million/',
    sourceType: '官方交易公告', sourceTier: 'S', publishedAt: '2026-03-23', capturedAt,
  },
  {
    id: 'dh-financing-20260317', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-03-17', eventType: '资本结构', titleZh: '新增 USD 1.4bn 定期贷款并延长债务期限',
    summaryZh: '公司完成新的定期贷款安排，计划用于偿还 2026 年可转债并回购部分 2027 年可转债。',
    impactZh: '短期到期压力下降，资本结构调整与台湾出售所得形成组合。',
    sourceTitle: 'Delivery Hero FY 2025 audited results', sourceOrganization: 'Delivery Hero',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-reports-adj-ebitda-up-30-in-2025-as-quick-commerce-and-key-markets-gain-momentum/',
    sourceType: '官方年度财报', sourceTier: 'S', publishedAt: '2026-03-26', capturedAt,
  },
]

export const intelligenceEvents = events.sort((a, b) => b.eventDate.localeCompare(a.eventDate))

export const movementSummaries = [
  {
    category: '战略与资本事项', count: intelligenceEvents.filter((item) => ['潜在交易', '资本结构', '资产出售'].includes(item.eventType)).length,
    representative: 'Uber 增持与潜在要约、台湾 foodpanda 出售、债务期限延长',
    conclusion: '资本结构与资产组合调整是近三个月影响最大的主线。',
  },
  {
    category: 'Quick Commerce 与零售扩张', count: intelligenceEvents.filter((item) => ['Quick Commerce', '多品类增长', '品牌经营'].includes(item.eventType)).length,
    representative: '集团 Quick Commerce 占比升至 18%，talabat mart 与零售服务继续投入',
    conclusion: 'MENA 与 Americas 的多品类动作最密集。',
  },
  {
    category: 'AI、AdTech 与效率', count: intelligenceEvents.filter((item) => ['AI 与效率', '履约与广告'].includes(item.eventType)).length,
    representative: 'Herogen、GenAI 广告排序、欧洲 own-delivery 与 AdTech',
    conclusion: 'AI 已从研发工具延伸到广告、履约和平台效率。',
  },
  {
    category: '区域品牌动态', count: intelligenceEvents.filter((item) => item.entityLevel === 'brand' || item.entityLevel === 'region').length,
    representative: 'HungerStation 订阅、Baemin 修复、PedidosYa 多品类、talabat 投资',
    conclusion: 'MENA 最活跃，韩国仍是恢复验证重点。',
  },
  {
    category: '组织与治理变化', count: intelligenceEvents.filter((item) => item.eventType === '治理变化').length,
    representative: 'CEO 继任搜索与监事会调整',
    conclusion: '治理变化与战略复盘同步发生，需关注执行连续性。',
  },
]

export const brandOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.brand)))]
export const regionOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.region)))]
export const eventTypeOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.eventType)))]
