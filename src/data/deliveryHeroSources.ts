export type SourceItem = {
  id: string
  title: string
  institution: string
  publishedAt?: string
  url?: string
  type: '券商研报' | '官方公告' | '官方页面' | '本地辅助材料'
  note: string
}

export const sources: SourceItem[] = [
  {
    id: 'ubs-report', title: '1Q26: Encouraging momentum, KSA a standout +ve', institution: 'UBS Global Research',
    publishedAt: '2026-05-01', type: '券商研报',
    note: '使用第 1–9 页的 Q1 分析、电话会要点、FY26 预测调整、DCF/SOTP 与风险；不提供原文下载。',
  },
  {
    id: 'jpm-report', title: 'A solid Q126, business on track while all eyes are on M&A scenarios', institution: 'J.P. Morgan Europe Equity Research',
    publishedAt: '2026-04-30', type: '券商研报',
    note: '使用第 1–3 页的实际值与一致预期对比、区域表现、估值方法和风险；不提供原文下载。',
  },
  {
    id: 'q1-2026', title: 'Delivery Hero accelerates Q1 GMV growth', institution: 'Delivery Hero',
    publishedAt: '2026-04-30', url: 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/',
    type: '官方公告', note: 'Q1 2026 财务、区域、战略、口径定义和 FY26 指引。',
  },
  { id: 'ir-news', title: 'Delivery Hero IR News', institution: 'Delivery Hero Investor Relations', url: 'https://ir.deliveryhero.com/news', type: '官方页面', note: '临时公告、治理、资本市场与监管披露入口。' },
  { id: 'newsroom', title: 'Delivery Hero Newsroom', institution: 'Delivery Hero', url: 'https://www.deliveryhero.com/newsroom/', type: '官方页面', note: '集团战略、技术、治理和交易事件。' },
  { id: 'brands', title: 'Delivery Hero Brands & Countries', institution: 'Delivery Hero', url: 'https://www.deliveryhero.com/brands-countries/', type: '官方页面', note: '品牌、区域与集团归属核验。' },
  { id: 'foodpanda-newsroom', title: 'foodpanda Newsroom', institution: 'foodpanda', url: 'https://www.foodpanda.com/newsroom/', type: '官方页面', note: 'foodpanda 品牌 Quick Commerce、商户和骑手动态。' },
  { id: 'local-foodpanda', title: 'foodpanda 竞对分析报告（2026-06-10）', institution: '本地辅助材料', type: '本地辅助材料', note: '用于发现线索和核对品牌边界；品牌独立财务缺口不做推算。' },
]
