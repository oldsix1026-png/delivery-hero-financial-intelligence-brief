export type UnifiedCategory = '业务层面' | '技术层面' | '战略层面' | '融资与资本层面' | '微观运营层面' | '财务与盈利层面' | '其他观察'
export type EntityLevel = 'group' | 'region' | 'brand' | 'country'
export type IntelligenceSource = { title: string; organization: string; url: string; publishedAt: string; sourceType: string }

export type IntelligenceEvent = {
  id: string
  company: 'Delivery Hero'
  entityLevel: EntityLevel
  group: string
  brand: string
  region: string
  country: string
  quarter: '2026Q1'
  eventDate: string
  eventType: string
  unifiedCategory: UnifiedCategory
  titleZh: string
  summaryZh: string
  impactZh: string
  sourceTier: 'Official' | 'Media-Verified'
  sourceCount: number
  primarySources: IntelligenceSource[]
  supportingSources: IntelligenceSource[]
  isOfficial: boolean
  isMediaVerified: boolean
  includedReason: string
  sourceNotes: string
  capturedAt: '2026-06-15'
}

const official = (item: Omit<IntelligenceEvent, 'company' | 'quarter' | 'sourceTier' | 'sourceCount' | 'supportingSources' | 'isOfficial' | 'isMediaVerified' | 'includedReason' | 'capturedAt'>): IntelligenceEvent => ({
  ...item, company: 'Delivery Hero', quarter: '2026Q1', sourceTier: 'Official',
  sourceCount: item.primarySources.length, supportingSources: [], isOfficial: true,
  isMediaVerified: false, includedReason: '官方披露', capturedAt: '2026-06-15',
})

export const intelligenceEvents: IntelligenceEvent[] = [
  official({
    id: 'dh-fy25-20260326', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '多市场',
    eventDate: '2026-03-26', eventType: '年度业绩', unifiedCategory: '财务与盈利层面',
    titleZh: 'FY2025 Adjusted EBITDA 增长 30%，自由现金流连续第二年为正',
    summaryZh: '集团披露 FY2025 Adjusted EBITDA 为 9.03 亿欧元，自由现金流为 2.50 亿欧元；Quick Commerce 与重点市场继续提供增长动能。',
    impactZh: '盈利和现金流改善为重点市场投入、债务管理与资产组合调整提供基础。',
    primarySources: [{ title: 'Delivery Hero reports adj. EBITDA up 30% in 2025', organization: 'Delivery Hero', url: 'https://www.deliveryhero.com/newsroom/delivery-hero-reports-adj-ebitda-up-30-in-2025-as-quick-commerce-and-key-markets-gain-momentum/', publishedAt: '2026-03-26', sourceType: '官方年度财报' }],
    sourceNotes: '集团官方年度业绩公告。',
  }),
  official({
    id: 'dh-foodpanda-taiwan-20260323', entityLevel: 'brand', group: 'Delivery Hero', brand: 'foodpanda', region: 'Asia', country: '中国台湾',
    eventDate: '2026-03-23', eventType: '资产出售', unifiedCategory: '融资与资本层面',
    titleZh: '拟以 6 亿美元现金向 Grab 出售台湾 foodpanda 业务',
    summaryZh: '交易预计在 2026 年下半年完成，仍需监管审批；净收益拟用于降低债务和一般公司用途。',
    impactZh: '体现集团收缩地理范围、释放资产价值并降低杠杆的战略复盘方向。',
    primarySources: [{ title: 'Delivery Hero to sell Taiwan food delivery operations to Grab for USD 600 million', organization: 'Delivery Hero', url: 'https://www.deliveryhero.com/newsroom/delivery-hero-to-sell-taiwan-food-delivery-operations-to-grab-for-usd-600-million/', publishedAt: '2026-03-23', sourceType: '官方交易公告' }],
    sourceNotes: '交易双方均发布官方公告。',
  }),
  official({
    id: 'dh-financing-20260317', entityLevel: 'group', group: 'Delivery Hero', brand: '集团', region: '全球', country: '德国',
    eventDate: '2026-03-17', eventType: '债务再融资', unifiedCategory: '融资与资本层面',
    titleZh: '新增 14 亿美元定期贷款并延长债务期限',
    summaryZh: '集团安排新定期贷款，用于偿还 2026 年可转债并回购部分 2027 年可转债。',
    impactZh: '降低短期到期压力，使战略复盘和区域投资拥有更稳定的资本结构。',
    primarySources: [{ title: 'Delivery Hero FY 2025 audited results and financing update', organization: 'Delivery Hero Investor Relations', url: 'https://ir.deliveryhero.com/financial-reports-and-presentations', publishedAt: '2026-03-17', sourceType: '公司 IR' }],
    sourceNotes: '融资事项由公司 IR 与年度业绩材料披露。',
  }),
]

export const movementSummaries = [
  { category: '融资与资本层面', count: 2, representative: '台湾资产出售与 14 亿美元再融资', conclusion: '资产组合收缩与债务期限管理同步推进。', credibility: '官方披露' },
  { category: '财务与盈利层面', count: 1, representative: 'Adjusted EBITDA 和自由现金流改善', conclusion: '盈利改善为战略复盘和重点市场投资提供缓冲。', credibility: '官方披露' },
]

export const quarterlyMovementSummary = [
  { category: '融资与资本层面', text: '台湾业务出售和债务再融资构成本季度主线，集团优先释放资产价值并降低近端偿债压力。' },
  { category: '战略层面', text: '台湾退出说明区域组合正在收敛，管理层应继续关注其他市场是否出现类似评估。' },
  { category: '财务与盈利层面', text: 'Adjusted EBITDA 与自由现金流继续改善，但盈利质量仍需结合重点市场投入和 Quick Commerce 结构观察。' },
]

export const brandOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.brand)))]
export const regionOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.region)))]
export const eventTypeOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.eventType)))]
