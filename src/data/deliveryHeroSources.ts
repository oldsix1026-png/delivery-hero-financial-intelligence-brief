export type SourceItem = {
  id: string
  title: string
  institution: string
  publishedAt?: string
  url?: string
  type: '券商研报' | '官方财报' | '官方页面'
  note: string
}

export const sources: SourceItem[] = [
  {
    id: 'ubs-report', title: '1Q26: Encouraging momentum, KSA a standout +ve', institution: 'UBS Global Research',
    publishedAt: '2026-05-01', type: '券商研报',
    note: '用于 Q1 电话会、沙特与韩国归因、Everyday App、FY26 模型修订和风险分析；预测值与实际值分开。',
  },
  {
    id: 'jpm-report', title: 'A solid Q126, business on track while all eyes are on M&A scenarios', institution: 'J.P. Morgan Europe Equity Research',
    publishedAt: '2026-04-30', type: '券商研报',
    note: '用于实际值与一致预期比较、区域超预期来源、成本竞争风险和 M&A 讨论。',
  },
  {
    id: 'dh-reports', title: 'Financial Reports and Presentations', institution: 'Delivery Hero Investor Relations',
    url: 'https://ir.deliveryhero.com/financial-reports-and-presentations', type: '官方页面',
    note: '季度趋势、年度盈利、现金流、指引和口径定义的首要来源。',
  },
  {
    id: 'q1-2026', title: 'Quarterly Statement Q1 2026', institution: 'Delivery Hero',
    publishedAt: '2026-04-30',
    url: 'https://ir.deliveryhero.com/media/document/df113800-41ef-4437-b4dc-1df531779d9f/assets/DE000A2E4K43-Q1-2026-EQ-E-00.pdf?disposition=inline',
    type: '官方财报', note: '最新集团、区域、Quick Commerce、Everyday App 和 FY26 指引。',
  },
  {
    id: 'fy-2025', title: 'FY 2025 audited results', institution: 'Delivery Hero',
    publishedAt: '2026-03-26',
    url: 'https://www.deliveryhero.com/newsroom/delivery-hero-reports-adj-ebitda-up-30-in-2025-as-quick-commerce-and-key-markets-gain-momentum/',
    type: '官方财报', note: 'Adjusted EBITDA、FCF、Quick Commerce 全年规模和资本结构。',
  },
  {
    id: 'dh-news', title: 'Delivery Hero IR News', institution: 'Delivery Hero Investor Relations',
    url: 'https://ir.deliveryhero.com/news', type: '官方页面',
    note: '治理、资本市场、潜在交易和法定披露入口。',
  },
  {
    id: 'dh-newsroom', title: 'Delivery Hero Newsroom', institution: 'Delivery Hero',
    url: 'https://www.deliveryhero.com/newsroom/', type: '官方页面',
    note: '集团战略、技术、交易、经营与可持续动态。',
  },
  {
    id: 'talabat-ir', title: 'talabat Financial Reports and Presentations', institution: 'talabat Investor Relations',
    url: 'https://ir.talabat.com/financial-reports-and-presentations/', type: '官方页面',
    note: 'talabat Q1 2026 品牌经营、投资计划与财务口径。',
  },
  {
    id: 'foodpanda-newsroom', title: 'foodpanda Newsroom', institution: 'foodpanda',
    url: 'https://www.foodpanda.com/newsroom/', type: '官方页面',
    note: '本轮 90 天窗口未发现足够多可纳入的新增独立品牌公告。',
  },
]
