export type EntityLevel = 'group' | 'brand' | 'region'

export type IntelligenceEvent = {
  id: string
  entityLevel: EntityLevel
  group: string
  brand: string
  region: string
  country: string
  eventDate: string
  eventType: string
  title: string
  summary: string
  impact: string
  sourceTitle: string
  sourceUrl: string
  sourceType: string
  publishedAt: string
}

export const intelligenceEvents: IntelligenceEvent[] = [
  {
    id: 'dh-uber-contact-20260523', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-23', eventType: '战略审视', title: '确认 Uber 潜在收购接洽',
    summary: 'Delivery Hero 确认收到 Uber 的初步接洽，内容涉及潜在收购；当时尚未形成正式要约。',
    impact: '潜在控制权交易进入观察阶段。', sourceTitle: 'Delivery Hero IR News',
    sourceUrl: 'https://ir.deliveryhero.com/news', sourceType: '官方 IR 公告入口', publishedAt: '2026-05-23',
  },
  {
    id: 'dh-uber-investment-20260518', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-18', eventType: '资本市场', title: '欢迎 Uber 进一步投资',
    summary: 'Delivery Hero 披露 Uber 持有已发行股本的 19.5%，另持有 5.6% options。',
    impact: '股东结构发生重要变化。', sourceTitle: 'Delivery Hero welcomes further investment from Uber',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-welcomes-further-investment-from-uber/', sourceType: '官方公告', publishedAt: '2026-05-18',
  },
  {
    id: 'dh-ceo-transition-20260512', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-12', eventType: '治理变化', title: '启动 CEO 交接',
    summary: 'Niklas Östberg 将在继任者到任后交接 CEO 角色，监事会已启动外部继任者搜索。',
    impact: '治理连续性与战略执行成为跟踪重点。', sourceTitle: 'Delivery Hero announces CEO transition',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/niklas-ostberg-to-hand-over-ceo-role-at-delivery-hero-after-fifteen-years-supervisory-board-initiates-search-for-successor/', sourceType: '官方公告', publishedAt: '2026-05-12',
  },
  {
    id: 'dh-15-years-20260507', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-07', eventType: '公司里程碑', title: 'Delivery Hero 成立 15 周年',
    summary: '公司回顾从餐饮外卖平台向多品类本地商业与 Everyday App 战略演进。',
    impact: '强化集团长期战略叙事。', sourceTitle: 'Delivery Hero turns 15',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/15-years-delivering-to-you/', sourceType: '官方公告', publishedAt: '2026-05-07',
  },
  {
    id: 'dh-q1-2026-20260430', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-04-30', eventType: '财务业绩', title: '发布 Q1 2026 Trading Update',
    summary: '集团 GMV 同比增长 8.8% LfL，Total Segment Revenue 同比增长 17.8% LfL。',
    impact: '增长加速并维持 FY26 指引。', sourceTitle: 'Delivery Hero accelerates Q1 GMV growth',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/', sourceType: '官方公告', publishedAt: '2026-04-30',
  },
  {
    id: 'dh-herogen-20260424', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-04-24', eventType: 'AI 与效率', title: '发布 Herogen 自主 AI Agent',
    summary: 'Herogen 已承担复杂工程任务，公司披露其年化产出相当于 130 名高级工程师。',
    impact: 'AI 从辅助工具进入工程执行环节。', sourceTitle: 'Delivery Hero unveils Herogen autonomous AI agent',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-unveils-herogen-autonomous-ai-agent-unlocks-130-person-engineering-output/', sourceType: '官方公告', publishedAt: '2026-04-24',
  },
  {
    id: 'fp-taiwan-sale-20260323', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '中国台湾',
    eventDate: '2026-03-23', eventType: '资产出售', title: '台湾 foodpanda 业务出售给 Grab',
    summary: '交易对价为 USD 600m 现金，预计 2026 年下半年完成，并受监管审批等条件约束。',
    impact: '集团战略梳理与去杠杆的重要步骤。', sourceTitle: 'Delivery Hero to sell foodpanda Taiwan business to Grab',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-to-sell-taiwan-food-delivery-operations-to-grab-for-usd-600-million/', sourceType: '官方公告', publishedAt: '2026-03-23',
  },
  {
    id: 'fp-pandamart-xl-20260120', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '新加坡',
    eventDate: '2026-01-20', eventType: 'Quick Commerce', title: '推出更大规格 pandamart 门店',
    summary: 'foodpanda 推进更大门店规格，以扩充商品选择并强化日常零售场景。',
    impact: '加深 Quick Commerce 供给能力。', sourceTitle: 'foodpanda launches bigger pandamart stores',
    sourceUrl: 'https://www.foodpanda.com/newsroom/foodpanda-boosts-bigger-grocery-runs-with-new-upsized-pandamart-stores/', sourceType: '品牌官方公告', publishedAt: '2026-01-20',
  },
  {
    id: 'fp-merchant-20251217', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '多市场',
    eventDate: '2025-12-17', eventType: '商户服务', title: '加强亚洲商户服务与 onboarding',
    summary: 'foodpanda 更新商户支持与入驻流程，降低商户接入和日常运营门槛。',
    impact: '提升商户供给扩展效率。', sourceTitle: 'foodpanda strengthens merchant services and onboarding across Asia',
    sourceUrl: 'https://www.foodpanda.com/newsroom/foodpanda-strengthens-merchant-care-with-record-onboarding-milestone-in-asia/', sourceType: '品牌官方公告', publishedAt: '2025-12-17',
  },
  {
    id: 'fp-panda-hearts-20251125', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '多市场',
    eventDate: '2025-11-25', eventType: '骑手保障', title: 'panda hearts 扩展，骑手事故下降 30%',
    summary: 'foodpanda 扩展骑手保障计划，并披露相关安全举措推动事故下降 30%。',
    impact: '骑手安全与平台韧性改善。', sourceTitle: 'foodpanda expands panda hearts programme',
    sourceUrl: 'https://www.foodpanda.com/newsroom/foodpanda-expands-panda-hearts-programme-reports-30-drop-in-rider-accidents-across-asia/', sourceType: '品牌官方公告', publishedAt: '2025-11-25',
  },
  {
    id: 'fp-pandapro-20251121', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '多市场',
    eventDate: '2025-11-21', eventType: '订阅会员', title: 'pandapro 拓展网约车合作权益',
    summary: 'foodpanda 通过出行合作扩展 pandapro 权益，增加订阅会员的跨场景价值。',
    impact: '会员体系向 Everyday App 场景延伸。', sourceTitle: 'foodpanda expands pandapro benefits with ride-hailing partnerships',
    sourceUrl: 'https://www.foodpanda.com/newsroom/foodpanda-brings-unmatched-value-to-pandapro-members-with-one-of-a-kind-ride-hailing-partnerships-across-asia/', sourceType: '品牌官方公告', publishedAt: '2025-11-21',
  },
  {
    id: 'mena-brands-q1-2026', entityLevel: 'region', group: 'Delivery Hero', brand: 'HungerStation / talabat', region: 'MENA', country: '沙特及中东市场',
    eventDate: '2026-04-30', eventType: '区域经营', title: 'HungerStation 与 talabat 订单增长强劲',
    summary: '集团 Q1 公告指出两大品牌订单增长强劲，沙特订阅渗透率达到 GMV 的 61%。',
    impact: 'MENA 成为集团增长亮点。', sourceTitle: 'Delivery Hero Q1 2026 Trading Update',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/', sourceType: '官方公告', publishedAt: '2026-04-30',
  },
  {
    id: 'korea-q1-2026', entityLevel: 'region', group: 'Delivery Hero', brand: 'Baedal Minjok', region: 'Asia', country: '韩国',
    eventDate: '2026-04-30', eventType: '区域经营', title: '韩国订单增长重新加速',
    summary: '集团按韩国市场披露订单增速重新提升，Asia GMV 同比增长 3.0% LfL。',
    impact: '亚洲恢复出现积极迹象。', sourceTitle: 'Delivery Hero Q1 2026 Trading Update',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/', sourceType: '官方公告', publishedAt: '2026-04-30',
  },
  {
    id: 'americas-q1-2026', entityLevel: 'region', group: 'Delivery Hero', brand: 'PedidosYa', region: 'Americas', country: '拉丁美洲',
    eventDate: '2026-04-30', eventType: '区域经营', title: 'Americas 区域增长加速',
    summary: '集团按区域披露 GMV 同比增长 18.1%、订单量增长 25%；不作为 PedidosYa 独立财务数据。',
    impact: '区域增长动能增强。', sourceTitle: 'Delivery Hero Q1 2026 Trading Update',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/', sourceType: '官方公告', publishedAt: '2026-04-30',
  },
]

export const brandOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.brand)))]
export const regionOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.region)))]
export const eventTypeOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.eventType)))]
