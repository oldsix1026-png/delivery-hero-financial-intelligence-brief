export type EntityLevel = 'group' | 'region' | 'brand'

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
  publishedAt: string
}

export const intelligenceEvents: IntelligenceEvent[] = [
  {
    id: 'dh-uber-approach-20260523', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-23', eventType: '潜在交易', titleZh: '确认收到 Uber 潜在收购要约接洽',
    summaryZh: 'Delivery Hero 确认 Uber 就潜在收购要约进行接洽；公告时尚无正式要约。',
    impactZh: '控制权交易存在不确定性，需继续跟踪正式要约与监管进展。',
    sourceTitle: 'Delivery Hero confirms approach by Uber Technologies with respect to potential takeover offer',
    sourceOrganization: 'Delivery Hero Investor Relations', sourceUrl: 'https://ir.deliveryhero.com/news', sourceType: '官方临时公告', publishedAt: '2026-05-23',
  },
  {
    id: 'dh-uber-investment-20260518', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-18', eventType: '资本市场', titleZh: 'Uber 持股升至 19.5%',
    summaryZh: 'Delivery Hero 披露 Uber 持有 19.5% 已发行股本，并另持有相当于 5.6% 股本的期权。',
    impactZh: '股东结构发生重要变化。',
    sourceTitle: 'Delivery Hero welcomes further investment from Uber', sourceOrganization: 'Delivery Hero',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-welcomes-further-investment-from-uber/', sourceType: '集团官方公告', publishedAt: '2026-05-18',
  },
  {
    id: 'dh-ceo-transition-20260512', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-05-12', eventType: '治理变化', titleZh: '启动 CEO 继任者搜索',
    summaryZh: 'Niklas Östberg 将在继任者到任后交接 CEO 职责，并继续担任顾问。',
    impactZh: '治理连续性和战略执行进入交接观察期。',
    sourceTitle: 'Niklas Östberg to hand over CEO role at Delivery Hero after fifteen years',
    sourceOrganization: 'Delivery Hero', sourceUrl: 'https://www.deliveryhero.com/newsroom/niklas-ostberg-to-hand-over-ceo-role-at-delivery-hero-after-fifteen-years-supervisory-board-initiates-search-for-successor/',
    sourceType: '集团官方公告', publishedAt: '2026-05-12',
  },
  {
    id: 'dh-q1-2026-20260430', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-04-30', eventType: '财务业绩', titleZh: 'Q1 2026 GMV 增长加速',
    summaryZh: '集团 GMV 增长 8.8% LfL，Total Segment Revenue 增长 17.8% LfL，并维持 FY26 指引。',
    impactZh: 'Everyday App 与 Quick Commerce 成为主要增长主线。',
    sourceTitle: 'Delivery Hero accelerates Q1 GMV growth', sourceOrganization: 'Delivery Hero',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/',
    sourceType: '集团官方公告', publishedAt: '2026-04-30',
  },
  {
    id: 'mena-q1-2026', entityLevel: 'region', group: 'Delivery Hero', brand: 'HungerStation / talabat', region: 'MENA', country: '沙特及中东市场',
    eventDate: '2026-04-30', eventType: '区域经营', titleZh: 'MENA GMV 增长重新加速',
    summaryZh: '集团披露 MENA GMV 增长 16.1% LfL，HungerStation 与 talabat 订单增长强劲。',
    impactZh: 'MENA 是 Q1 主要增长贡献区域之一；数据不代表单一品牌独立指标。',
    sourceTitle: 'Delivery Hero Q1 2026 Trading Update', sourceOrganization: 'Delivery Hero',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/',
    sourceType: '集团官方公告', publishedAt: '2026-04-30',
  },
  {
    id: 'baemin-q1-2026', entityLevel: 'region', group: 'Delivery Hero', brand: 'Baemin', region: 'Asia', country: '韩国',
    eventDate: '2026-04-30', eventType: '区域经营', titleZh: '韩国订单增长重新加速',
    summaryZh: '集团披露韩国订单增速自 2025 年末以来重新提升，own-delivery 与订阅推动 Revenue。',
    impactZh: 'Asia 恢复出现积极信号；未披露 Baemin 独立财务数据。',
    sourceTitle: 'Delivery Hero Q1 2026 Trading Update', sourceOrganization: 'Delivery Hero',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/',
    sourceType: '集团官方公告', publishedAt: '2026-04-30',
  },
  {
    id: 'pedidosya-q1-2026', entityLevel: 'region', group: 'Delivery Hero', brand: 'PedidosYa', region: 'Americas', country: '拉丁美洲',
    eventDate: '2026-04-30', eventType: '区域经营', titleZh: 'Americas 订单增长 25%',
    summaryZh: '集团披露 Americas GMV 增长 18.1% LfL、订单增长 25%，订阅订单渗透率达 37%。',
    impactZh: '区域增长动能增强；数据不作为 PedidosYa 独立财务指标。',
    sourceTitle: 'Delivery Hero Q1 2026 Trading Update', sourceOrganization: 'Delivery Hero',
    sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/',
    sourceType: '集团官方公告', publishedAt: '2026-04-30',
  },
  {
    id: 'dh-herogen-20260424', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-04-24', eventType: 'AI 与效率', titleZh: '发布自主 AI Agent Herogen',
    summaryZh: '公司称 Herogen 可执行端到端工程任务，年化编码产出相当于约 130 名高级工程师。',
    impactZh: 'AI 应用从辅助工具延伸至工程执行。',
    sourceTitle: 'Delivery Hero Unveils Herogen – Autonomous AI Agent Unlocks 130-Person Engineering Output',
    sourceOrganization: 'Delivery Hero', sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-unveils-herogen-autonomous-ai-agent-unlocks-130-person-engineering-output/',
    sourceType: '集团官方公告', publishedAt: '2026-04-24',
  },
  {
    id: 'fp-taiwan-sale-20260323', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '中国台湾',
    eventDate: '2026-03-23', eventType: '资产出售', titleZh: '台湾 foodpanda 业务拟出售给 Grab',
    summaryZh: '交易对价为 6 亿美元现金，预计 2026 年下半年完成，仍需监管审批。',
    impactZh: '集团战略聚焦与资本结构调整的重要步骤。',
    sourceTitle: 'Delivery Hero to sell Taiwan food delivery operations to Grab for USD 600 million',
    sourceOrganization: 'Delivery Hero', sourceUrl: 'https://www.deliveryhero.com/newsroom/delivery-hero-to-sell-taiwan-food-delivery-operations-to-grab-for-usd-600-million/',
    sourceType: '集团官方公告', publishedAt: '2026-03-23',
  },
  {
    id: 'fp-pandamart-xl-20260120', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '新加坡',
    eventDate: '2026-01-20', eventType: 'Quick Commerce', titleZh: '推出更大规格 pandamart 门店',
    summaryZh: 'foodpanda 在新加坡推出更大规格 pandamart，以扩充商品选择和大单购物能力。',
    impactZh: '强化 Quick Commerce 供给深度。',
    sourceTitle: 'foodpanda boosts bigger grocery runs with new, upsized pandamart stores',
    sourceOrganization: 'foodpanda', sourceUrl: 'https://www.foodpanda.com/newsroom/foodpanda-boosts-bigger-grocery-runs-with-new-upsized-pandamart-stores/',
    sourceType: '品牌官方公告', publishedAt: '2026-01-20',
  },
  {
    id: 'fp-merchant-20251217', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '亚洲多市场',
    eventDate: '2025-12-17', eventType: '商户服务', titleZh: '加强亚洲商户服务与入驻流程',
    summaryZh: 'foodpanda 披露商户支持和 onboarding 里程碑，持续降低商户接入与运营门槛。',
    impactZh: '提升商户供给扩展效率。',
    sourceTitle: 'foodpanda strengthens merchant care with record onboarding milestone in Asia',
    sourceOrganization: 'foodpanda', sourceUrl: 'https://www.foodpanda.com/newsroom/foodpanda-strengthens-merchant-care-with-record-onboarding-milestone-in-asia/',
    sourceType: '品牌官方公告', publishedAt: '2025-12-17',
  },
  {
    id: 'fp-rider-safety-20251125', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '亚洲多市场',
    eventDate: '2025-11-25', eventType: '骑手保障', titleZh: 'panda hearts 计划扩展',
    summaryZh: 'foodpanda 披露相关骑手安全举措推动亚洲骑手事故下降 30%。',
    impactZh: '骑手保障和平台运营韧性改善。',
    sourceTitle: 'foodpanda expands panda hearts programme, reports 30% drop in rider accidents across Asia',
    sourceOrganization: 'foodpanda', sourceUrl: 'https://www.foodpanda.com/newsroom/foodpanda-expands-panda-hearts-programme-reports-30-drop-in-rider-accidents-across-asia/',
    sourceType: '品牌官方公告', publishedAt: '2025-11-25',
  },
]

export const brandOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.brand)))]
export const regionOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.region)))]
export const eventTypeOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.eventType)))]
