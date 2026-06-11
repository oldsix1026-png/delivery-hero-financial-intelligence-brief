export type SourceItem = {
  id: string
  title: string
  institution: string
  url?: string
  type: '官方公告' | '官方页面' | '本地辅助材料'
  note: string
}

export const sources: SourceItem[] = [
  {
    id: 'q1-2026',
    title: 'Delivery Hero accelerates Q1 GMV growth driven by Everyday App strategy and quick commerce momentum',
    institution: 'Delivery Hero',
    url: 'https://www.deliveryhero.com/newsroom/delivery-hero-accelerates-q1-gmv-growth-driven-by-everyday-app-strategy-and-quick-commerce-momentum/',
    type: '官方公告',
    note: 'Q1 2026 财务、区域、战略和 FY26 指引的主要来源。',
  },
  { id: 'ir-news', title: 'Delivery Hero IR News', institution: 'Delivery Hero Investor Relations', url: 'https://ir.deliveryhero.com/news', type: '官方页面', note: '集团资本市场与监管公告入口。' },
  { id: 'newsroom', title: 'Delivery Hero Newsroom', institution: 'Delivery Hero', url: 'https://www.deliveryhero.com/newsroom/', type: '官方页面', note: '集团战略、技术、治理和交易事件来源。' },
  { id: 'brands', title: 'Delivery Hero Brands & Countries', institution: 'Delivery Hero', url: 'https://www.deliveryhero.com/brands-countries/', type: '官方页面', note: '集团品牌与市场归属核验。' },
  { id: 'foodpanda-newsroom', title: 'foodpanda Newsroom', institution: 'foodpanda', url: 'https://www.foodpanda.com/newsroom/', type: '官方页面', note: 'foodpanda 品牌动态来源。' },
  { id: 'local-foodpanda', title: 'input/intelligence 中已有 foodpanda 总结', institution: '本地辅助材料', type: '本地辅助材料', note: '仅用于发现线索和核对边界，不作为集团财务数据来源。' },
]
