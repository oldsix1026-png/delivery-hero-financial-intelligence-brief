export type UnifiedCategory = '业务层面' | '技术层面' | '战略层面' | '融资与资本层面' | '微观运营层面' | '财务与盈利层面' | '其他观察'
export type EntityLevel = 'group' | 'region' | 'brand' | 'country'
export type IntelligenceSource = { title: string; organization: string; url: string; publishedAt: string; sourceType: string }

export type IntelligenceEvent = {
  id: string
  company: 'Delivery Hero'
  entityLevel: EntityLevel
  group: string
  brand: string
  businessLine: string
  region: string
  country: string
  quarter: '2026H1'
  eventDate: string
  eventMonth: string
  eventType: string
  unifiedCategory: UnifiedCategory
  titleZh: string
  summaryZh: string
  impactZh: string
  sourceTier: 'Official' | 'Media-Verified' | 'Official + Media Coverage'
  sourceCount: number
  primarySources: IntelligenceSource[]
  supportingSources: IntelligenceSource[]
  isOfficial: boolean
  isMediaVerified: boolean
  hasOfficialAndMediaCoverage: boolean
  includedReason: string
  duplicateGroupId: string
  sourceNotes: string
  displayInTimeline: boolean
  displayInSummary: boolean
  capturedAt: '2026-06-26'
}

const event = (
  item: Omit<IntelligenceEvent, 'company' | 'quarter' | 'eventMonth' | 'sourceCount' | 'duplicateGroupId' | 'displayInTimeline' | 'displayInSummary' | 'capturedAt'>,
): IntelligenceEvent => ({
  ...item,
  company: 'Delivery Hero',
  quarter: '2026H1',
  eventMonth: item.eventDate.slice(0, 7),
  sourceCount: item.primarySources.length + item.supportingSources.length,
  duplicateGroupId: item.id,
  displayInTimeline: true,
  displayInSummary: true,
  capturedAt: '2026-06-26',
})

export const intelligenceEvents: IntelligenceEvent[] = [
  event({
    id: 'dh-uber-approach-20260523',
    entityLevel: 'group',
    group: 'Delivery Hero',
    brand: '集团',
    businessLine: '集团资本结构',
    region: '全球',
    country: '德国',
    eventDate: '2026-05-23',
    eventType: '潜在要约',
    unifiedCategory: '融资与资本层面',
    titleZh: 'Uber 提出每股 €33 的潜在收购要约意向',
    summaryZh: '公司确认 Uber Technologies 提出每股 €33 的指示性潜在要约，相关对象为 Delivery Hero 全体股东。',
    impactZh: '潜在要约把战略复盘、股东结构和估值重定价连接到同一资本市场事件。',
    sourceTier: 'Official + Media Coverage',
    primarySources: [{
      title: 'Delivery Hero confirms approach by Uber Technologies’ with respect to potential takeover offer',
      organization: 'Delivery Hero Investor Relations',
      url: 'https://ir.deliveryhero.com/news/delivery-hero-confirms-approach-by-uber-technologies-with-respect-to-potential-takeover-offer/3e8c737d-53d6-4aac-9ad8-33862ad11b0d',
      publishedAt: '2026-05-23',
      sourceType: '官方内幕信息公告',
    }],
    supportingSources: [{
      title: 'Uber’s $11.6 Billion Takeover Approach Lifts Delivery Hero Shares',
      organization: 'Wall Street Journal',
      url: 'https://www.wsj.com/business/hospitality/ubers-11-6-billion-takeover-approach-lifts-delivery-hero-shares-ca3f8d01',
      publishedAt: '2026-05-25',
      sourceType: '媒体报道',
    }],
    isOfficial: true,
    isMediaVerified: true,
    hasOfficialAndMediaCoverage: true,
    includedReason: '公司公告确认且 WSJ 报道提供资本市场背景',
    sourceNotes: '前台仅采用公司确认的每股 €33 指示性要约，不采用未被公司确认的成交概率。',
  }),
  event({
    id: 'dh-uber-investment-20260518',
    entityLevel: 'group',
    group: 'Delivery Hero',
    brand: '集团',
    businessLine: '集团股权结构',
    region: '全球',
    country: '德国',
    eventDate: '2026-05-18',
    eventType: '资本结构',
    unifiedCategory: '融资与资本层面',
    titleZh: 'Uber 持有 19.5% 已发行股本，并另有 5.6% 期权',
    summaryZh: 'Delivery Hero 公告称 Uber 已取得额外股份和工具，合计持有 19.5% 已发行股本，并另有 5.6% 期权。',
    impactZh: 'Uber 成为重要股东后，Delivery Hero 的股权结构和潜在交易讨论明显升温。',
    sourceTier: 'Official',
    primarySources: [{
      title: 'Delivery Hero welcomes further investment from Uber',
      organization: 'Delivery Hero Investor Relations',
      url: 'https://ir.deliveryhero.com/news/delivery-hero-welcomes-further-investment-from-uber/13a2b2b1-2f89-4b5b-9733-127edbe57aec',
      publishedAt: '2026-05-18',
      sourceType: '官方公告',
    }],
    supportingSources: [],
    isOfficial: true,
    isMediaVerified: false,
    hasOfficialAndMediaCoverage: false,
    includedReason: '官方公告直接披露 Uber 持股和期权比例',
    sourceNotes: '采用已发行股本 19.5% 与 5.6% 期权两个公司披露数字。',
  }),
  event({
    id: 'dh-ceo-succession-20260512',
    entityLevel: 'group',
    group: 'Delivery Hero',
    brand: '集团',
    businessLine: '公司治理',
    region: '全球',
    country: '德国',
    eventDate: '2026-05-12',
    eventType: '管理层变化',
    unifiedCategory: '战略层面',
    titleZh: 'Niklas Oestberg 将最迟于 2027-03-31 交接 CEO 职务',
    summaryZh: '公司宣布 Niklas Oestberg 将在继任流程完成后交接 CEO 职务，最迟日期为 2027-03-31。',
    impactZh: 'CEO 交接与战略复盘、M&A 流程并行推进，治理变化进入明确时间表。',
    sourceTier: 'Official + Media Coverage',
    primarySources: [{
      title: 'Niklas Östberg to hand over CEO role at Delivery Hero after fifteen years',
      organization: 'Delivery Hero Investor Relations',
      url: 'https://ir.deliveryhero.com/news/niklas-ostberg-to-hand-over-ceo-role-at-delivery-hero-after-fifteen-years-supervisory/3bb73b19-b643-4ca9-b21a-77ef80a1991d',
      publishedAt: '2026-05-12',
      sourceType: '官方公告',
    }],
    supportingSources: [{
      title: 'Delivery Hero chief to step down amid activist pressure',
      organization: 'Financial Times',
      url: 'https://www.ft.com/content/7353c6f8-3569-40b2-9cc5-020a06b92788',
      publishedAt: '2026-05-12',
      sourceType: '媒体报道',
    }],
    isOfficial: true,
    isMediaVerified: true,
    hasOfficialAndMediaCoverage: true,
    includedReason: '公司公告确认时间表，FT 补充股东压力背景',
    sourceNotes: '前台采用公司公告的交接时间和战略复盘表述；股东压力仅作为来源背景。',
  }),
  event({
    id: 'dh-q1-20260430',
    entityLevel: 'group',
    group: 'Delivery Hero',
    brand: '集团',
    businessLine: '集团财务',
    region: '全球',
    country: '多市场',
    eventDate: '2026-04-30',
    eventType: '增长指引',
    unifiedCategory: '财务与盈利层面',
    titleZh: 'Q1 2026 GMV 增长 8.8%，Total Segment Revenue 增长 17.8%',
    summaryZh: '公司披露 Q1 2026 Group GMV 为 €12.5bn，同比增长 8.8% LfL；Total Segment Revenue 为 €3.7bn，同比增长 17.8% LfL。',
    impactZh: '收入增速高于 GMV 9.0 个百分点，Quick Commerce、订阅、AdTech 和 own-delivery 支撑收入转化率提升。',
    sourceTier: 'Official',
    primarySources: [{
      title: 'Delivery Hero accelerates Q1 GMV growth, driven by Everyday App strategy and Quick Commerce momentum',
      organization: 'Delivery Hero Investor Relations',
      url: 'https://ir.deliveryhero.com/news/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/4bb3a698-f3a4-4e83-bc04-77a283ade6af',
      publishedAt: '2026-04-30',
      sourceType: '官方 Trading Update',
    }],
    supportingSources: [],
    isOfficial: true,
    isMediaVerified: false,
    hasOfficialAndMediaCoverage: false,
    includedReason: '官方 Q1 Trading Update 披露核心经营和指引数据',
    sourceNotes: '收入与 GMV 增速差为 17.8% - 8.8% = 9.0 个百分点。',
  }),
  event({
    id: 'dh-aspex-pressure-20260313',
    entityLevel: 'group',
    group: 'Delivery Hero',
    brand: '集团',
    businessLine: '公司治理',
    region: '全球',
    country: '德国',
    eventDate: '2026-03-13',
    eventType: '股东压力',
    unifiedCategory: '战略层面',
    titleZh: 'Aspex 要求加快资产出售，并威胁推动领导层变化',
    summaryZh: 'FT 报道 Aspex 持有约 9.2% 股权，并要求公司出售非优势市场业务、加快战略复盘。',
    impactZh: '股东压力推动资产组合收缩、治理调整和资本配置成为 2026 年上半年主线。',
    sourceTier: 'Media-Verified',
    primarySources: [{
      title: 'Top Delivery Hero investor threatens to seek leadership change',
      organization: 'Financial Times',
      url: 'https://www.ft.com/content/e907b84c-8b49-4e00-82ce-48f14242b61a',
      publishedAt: '2026-03-13',
      sourceType: '媒体报道',
    }],
    supportingSources: [],
    isOfficial: false,
    isMediaVerified: true,
    hasOfficialAndMediaCoverage: false,
    includedReason: 'FT 为高质量媒体且与后续 CEO 交接、资产出售事件一致',
    sourceNotes: '用户提示中的 2026-03-24 未找到可直接核实的同日高质量来源；采用 2026-03-13 FT 可核实报道。',
  }),
  event({
    id: 'dh-fy25-20260326',
    entityLevel: 'group',
    group: 'Delivery Hero',
    brand: '集团',
    businessLine: '集团财务',
    region: '全球',
    country: '多市场',
    eventDate: '2026-03-26',
    eventType: '年度业绩',
    unifiedCategory: '财务与盈利层面',
    titleZh: 'FY2025 Adjusted EBITDA 增长 30%，自由现金流连续第二年为正',
    summaryZh: '集团披露 FY2025 Adjusted EBITDA 为 9.03 亿欧元，自由现金流为 2.50 亿欧元；Quick Commerce 与重点市场继续提供增长动能。',
    impactZh: '盈利和现金流改善为重点市场投入、债务管理与资产组合调整提供基础。',
    sourceTier: 'Official',
    primarySources: [{
      title: 'Delivery Hero reports adj. EBITDA up 30% in 2025 as quick commerce and key markets gain momentum',
      organization: 'Delivery Hero',
      url: 'https://www.deliveryhero.com/newsroom/delivery-hero-reports-adj-ebitda-up-30-in-2025-as-quick-commerce-and-key-markets-gain-momentum/',
      publishedAt: '2026-03-26',
      sourceType: '官方年度财报',
    }],
    supportingSources: [],
    isOfficial: true,
    isMediaVerified: false,
    hasOfficialAndMediaCoverage: false,
    includedReason: '官方年度业绩公告',
    sourceNotes: '集团官方年度业绩公告。',
  }),
  event({
    id: 'dh-foodpanda-taiwan-20260323',
    entityLevel: 'brand',
    group: 'Delivery Hero',
    brand: 'foodpanda',
    businessLine: 'foodpanda',
    region: 'Asia',
    country: '中国台湾',
    eventDate: '2026-03-23',
    eventType: '资产出售',
    unifiedCategory: '融资与资本层面',
    titleZh: '拟以 6 亿美元现金向 Grab 出售中国台湾 foodpanda 业务',
    summaryZh: '交易预计在 2026 年下半年完成，仍需监管审批；台湾业务 2025 年 GMV 为 €1.5bn，集团成本分摊前 adjusted EBITDA 为正。',
    impactZh: '出售净收益拟用于偿债和一般公司用途，资产处置直接服务于资本结构改善。',
    sourceTier: 'Official',
    primarySources: [{
      title: 'Delivery Hero to sell Taiwan food delivery operations to Grab for USD 600 million',
      organization: 'Delivery Hero',
      url: 'https://www.deliveryhero.com/newsroom/delivery-hero-to-sell-taiwan-food-delivery-operations-to-grab-for-usd-600-million/',
      publishedAt: '2026-03-23',
      sourceType: '官方交易公告',
    }],
    supportingSources: [{
      title: 'Grab to Acquire Delivery Hero’s foodpanda Delivery Business in Taiwan',
      organization: 'Grab',
      url: 'https://www.grab.com/sg/press/others/grab-to-acquire-delivery-heros-foodpanda-delivery-business-in-taiwan/',
      publishedAt: '2026-03-23',
      sourceType: '交易对手官方公告',
    }],
    isOfficial: true,
    isMediaVerified: false,
    hasOfficialAndMediaCoverage: false,
    includedReason: '交易双方公告披露交易金额、业务规模和资金用途',
    sourceNotes: '交易双方公告已合并为一条事件。',
  }),
  event({
    id: 'dh-financing-20260317',
    entityLevel: 'group',
    group: 'Delivery Hero',
    brand: '集团',
    businessLine: '集团资本结构',
    region: '全球',
    country: '德国',
    eventDate: '2026-03-17',
    eventType: '债务再融资',
    unifiedCategory: '融资与资本层面',
    titleZh: '新增 14 亿美元定期贷款并延长债务期限',
    summaryZh: '集团安排新定期贷款，用于偿还 2026 年可转债并回购部分 2027 年可转债。',
    impactZh: '降低短期到期压力，使战略复盘和区域投资拥有更稳定的资本结构。',
    sourceTier: 'Official',
    primarySources: [{
      title: 'Delivery Hero FY 2025 audited results and financing update',
      organization: 'Delivery Hero Investor Relations',
      url: 'https://ir.deliveryhero.com/financial-reports-and-presentations',
      publishedAt: '2026-03-17',
      sourceType: '公司 IR',
    }],
    supportingSources: [],
    isOfficial: true,
    isMediaVerified: false,
    hasOfficialAndMediaCoverage: false,
    includedReason: '公司 IR 与年度业绩材料披露融资事项',
    sourceNotes: '融资事项由公司 IR 与年度业绩材料披露。',
  }),
].sort((a, b) => b.eventDate.localeCompare(a.eventDate))

export const movementSummaries = [
  { category: '融资与资本层面', count: 2, representative: '中国台湾资产出售与 14 亿美元再融资', conclusion: '资产组合收缩与债务期限管理同步推进。', credibility: '官方事件 2 条，媒体交叉验证事件 0 条' },
  { category: '财务与盈利层面', count: 1, representative: 'Adjusted EBITDA 与自由现金流改善', conclusion: '盈利改善为战略复盘和重点市场投入提供缓冲。', credibility: '官方事件 1 条，媒体交叉验证事件 0 条' },
  { category: '战略层面', count: 1, representative: '退出中国台湾配送业务', conclusion: '区域组合开始收敛，管理层更强调资产价值与资本效率。', credibility: '官方事件 1 条，媒体交叉验证事件 0 条' },
  { category: '业务层面', count: 1, representative: 'Quick Commerce 继续提供年度增长动能', conclusion: '业务扩张判断来自年度官方披露，未拆分成重复事件。', credibility: '官方事件 1 条，媒体交叉验证事件 0 条' },
]

export const quarterlyMovementSummary = [
  { category: '业务层面', text: 'Quick Commerce 与重点市场仍是增长动能，但本季度可核验的新动作主要集中在资产与资本安排。' },
  { category: '技术层面', text: '本季度未形成达到前台标准的独立重大技术发布。' },
  { category: '战略层面', text: '中国台湾业务出售说明区域组合开始收敛，战略重点转向更高回报市场与资本效率。' },
  { category: '融资与资本层面', text: '资产出售与 14 亿美元再融资并行，核心是释放资产价值、降低杠杆并延长债务期限。' },
  { category: '微观运营层面', text: '本季度未形成达到前台收录标准的独立补贴、佣金或骑手政策事件。' },
  { category: '财务与盈利层面', text: 'Adjusted EBITDA 与自由现金流继续改善，为重点市场投入和资本结构调整提供缓冲。' },
]

export const brandOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.brand)))]
export const regionOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.region)))]
export const eventTypeOptions = ['全部', ...Array.from(new Set(intelligenceEvents.map((item) => item.eventType)))]
