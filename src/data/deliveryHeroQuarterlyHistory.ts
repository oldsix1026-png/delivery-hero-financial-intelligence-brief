export type QuarterlyMetricName =
  | 'Group GMV'
  | 'Total Segment Revenue'
  | 'Asia GMV'
  | 'MENA GMV'
  | 'Europe GMV'
  | 'Americas GMV'
  | 'Integrated Verticals GMV'

export type QuarterlyHistoryRecord = {
  quarter: string
  periodEnd: string
  metricName: QuarterlyMetricName
  value: number
  unit: 'EUR million'
  currency: 'EUR'
  yoy: number | null
  qoq: number | null
  scope: string
  sourceTitle: string
  sourceUrl: string
  sourceType: '官方 Trading Update' | '官方财报' | '官方披露计算'
  note: string
}

type QuarterSource = {
  quarter: string
  periodEnd: string
  title: string
  url: string
  sourceType: QuarterlyHistoryRecord['sourceType']
  note: string
}

const quarterSources: QuarterSource[] = [
  {
    quarter: 'Q2 2023', periodEnd: '2023-06-30',
    title: 'Delivery Hero FY 2023 results and quarterly disclosures',
    url: 'https://www.deliveryhero.com/newsroom/preliminary-results-q4-2023/',
    sourceType: '官方披露计算',
    note: '单季值由官方 FY 2023 数值减去已披露 Q1、Q3、Q4 数值计算。',
  },
  {
    quarter: 'Q3 2023', periodEnd: '2023-09-30',
    title: 'Delivery Hero Trading Update Q3 2023',
    url: 'https://www.deliveryhero.com/newsroom/delivery-hero-trading-update-q3-2023/',
    sourceType: '官方 Trading Update', note: 'Reported currency 实际值。',
  },
  {
    quarter: 'Q4 2023', periodEnd: '2023-12-31',
    title: 'Delivery Hero preliminary results Q4 2023',
    url: 'https://www.deliveryhero.com/newsroom/preliminary-results-q4-2023/',
    sourceType: '官方 Trading Update', note: 'Reported currency 实际值；高通胀会计对 Q4 影响显著。',
  },
  {
    quarter: 'Q1 2024', periodEnd: '2024-03-31',
    title: 'Delivery Hero Trading Update Q1 2024',
    url: 'https://www.deliveryhero.com/newsroom/trading-update-q1-2024/',
    sourceType: '官方 Trading Update', note: 'Reported currency 实际值。',
  },
  {
    quarter: 'Q2 2024', periodEnd: '2024-06-30',
    title: 'Delivery Hero Q2 and H1 2025 comparative disclosure',
    url: 'https://www.deliveryhero.com/newsroom/q2-and-h1-2025-financial-results-delivery-hero-accelerates-growth-and-expands-profitability-updates-full-year-guidance/',
    sourceType: '官方财报', note: '公司在 Q2 2025 对比表中重列的 Q2 2024 实际值。',
  },
  {
    quarter: 'Q3 2024', periodEnd: '2024-09-30',
    title: 'Delivery Hero Trading Update Q3 2024',
    url: 'https://www.deliveryhero.com/newsroom/trading-update-q3-2024/',
    sourceType: '官方 Trading Update', note: 'Reported currency 实际值。',
  },
  {
    quarter: 'Q4 2024', periodEnd: '2024-12-31',
    title: 'Delivery Hero Trading Update Q4 2024',
    url: 'https://www.deliveryhero.com/newsroom/trading-update-q4-2024/',
    sourceType: '官方 Trading Update', note: 'Reported currency 实际值。',
  },
  {
    quarter: 'Q1 2025', periodEnd: '2025-03-31',
    title: 'Delivery Hero Trading Update Q1 2025',
    url: 'https://www.deliveryhero.com/newsroom/trading-update-q1-2025-2/',
    sourceType: '官方 Trading Update', note: 'Reported currency 实际值。',
  },
  {
    quarter: 'Q2 2025', periodEnd: '2025-06-30',
    title: 'Delivery Hero Q2 and H1 2025 financial results',
    url: 'https://www.deliveryhero.com/newsroom/q2-and-h1-2025-financial-results-delivery-hero-accelerates-growth-and-expands-profitability-updates-full-year-guidance/',
    sourceType: '官方财报', note: 'Reported currency 实际值。',
  },
  {
    quarter: 'Q3 2025', periodEnd: '2025-09-30',
    title: 'Delivery Hero Trading Update Q3 2025',
    url: 'https://www.deliveryhero.com/newsroom/delivery-hero-reports-q3-gmv-growth-and-efficiency-gains-driven-by-ai-and-global-tech-platform/',
    sourceType: '官方 Trading Update', note: 'Reported currency 实际值。',
  },
  {
    quarter: 'Q4 2025', periodEnd: '2025-12-31',
    title: 'Delivery Hero FY 2025 audited results',
    url: 'https://www.deliveryhero.com/newsroom/delivery-hero-reports-adj-ebitda-up-30-in-2025-as-quick-commerce-and-key-markets-gain-momentum/',
    sourceType: '官方披露计算',
    note: '单季值由官方 FY 2025 数值减去已披露 Q1、Q2、Q3 数值计算。',
  },
  {
    quarter: 'Q1 2026', periodEnd: '2026-03-31',
    title: 'Delivery Hero Quarterly Statement Q1 2026',
    url: 'https://ir.deliveryhero.com/media/document/df113800-41ef-4437-b4dc-1df531779d9f/assets/DE000A2E4K43-Q1-2026-EQ-E-00.pdf?disposition=inline',
    sourceType: '官方 Trading Update', note: 'Reported currency 实际值；同比标签另采用公司披露 LfL 增速。',
  },
]

const series: Record<QuarterlyMetricName, number[]> = {
  'Group GMV': [11083.8, 11693.4, 11299.1, 11788.9, 11897.6, 12249.3, 12818.2, 12372.5, 12243.4, 12179.4, 12401.5, 12466.6],
  'Total Segment Revenue': [2581.1, 2712.9, 2674.7, 2956.8, 3086.8, 3234.5, 3518.2, 3523.3, 3662.5, 3736.1, 3881.5, 3727.7],
  'Asia GMV': [6181.0, 6385.6, 6325.5, 6135.7, 5691.3, 5962.2, 5618.3, 5414.9, 5176.9, 5209.6, 4978.3, 4915.7],
  'MENA GMV': [2315.1, 2716.3, 2673.1, 2745.2, 3169.0, 3204.9, 3706.8, 3548.0, 3690.4, 3664.0, 3741.9, 3828.5],
  'Europe GMV': [1836.9, 1819.5, 2044.1, 2132.4, 2176.7, 2185.0, 2384.6, 2385.2, 2422.7, 2345.2, 2540.1, 2512.1],
  'Americas GMV': [750.8, 772.0, 256.4, 775.6, 860.6, 897.3, 1108.6, 1024.4, 953.5, 960.6, 1141.1, 1210.3],
  'Integrated Verticals GMV': [542.2, 602.6, 548.6, 650.6, 693.1, 740.4, 820.7, 826.6, 828.4, 858.7, 918.6, 991.7],
}

const round = (value: number) => Math.round(value * 10) / 10
const pct = (value: number, base: number) => round(((value / base) - 1) * 100)

export const quarterlyHistory: QuarterlyHistoryRecord[] = Object.entries(series).flatMap(([metricName, values]) =>
  values.map((value, index) => {
    const source = quarterSources[index]
    return {
      quarter: source.quarter,
      periodEnd: source.periodEnd,
      metricName: metricName as QuarterlyMetricName,
      value,
      unit: 'EUR million',
      currency: 'EUR',
      yoy: index >= 4 ? pct(value, values[index - 4]) : null,
      qoq: index > 0 ? pct(value, values[index - 1]) : null,
      scope: metricName.includes('GMV') ? metricName.replace(' GMV', '') : 'Delivery Hero Group',
      sourceTitle: source.title,
      sourceUrl: source.url,
      sourceType: source.sourceType,
      note: source.note,
    }
  }),
)

export const getMetricHistory = (metricName: QuarterlyMetricName) =>
  quarterlyHistory.filter((item) => item.metricName === metricName)

export const groupGmvHistory = getMetricHistory('Group GMV')
export const revenueHistory = getMetricHistory('Total Segment Revenue')
export const integratedVerticalsHistory = getMetricHistory('Integrated Verticals GMV')
export const menaGmvHistory = getMetricHistory('MENA GMV')

export const regionalQuarterlyTrend = quarterSources.map((source, index) => ({
  quarter: source.quarter.replace(' 20', ' ’'),
  Asia: series['Asia GMV'][index],
  MENA: series['MENA GMV'][index],
  Europe: series['Europe GMV'][index],
  Americas: series['Americas GMV'][index],
  'Integrated Verticals': series['Integrated Verticals GMV'][index],
}))

export const groupQuarterlyTrend = quarterSources.map((source, index) => ({
  quarter: source.quarter.replace(' 20', ' ’'),
  gmv: series['Group GMV'][index] / 1000,
  revenue: series['Total Segment Revenue'][index] / 1000,
  gmvYoY: index >= 4 ? pct(series['Group GMV'][index], series['Group GMV'][index - 4]) : null,
  revenueYoY: index >= 4 ? pct(series['Total Segment Revenue'][index], series['Total Segment Revenue'][index - 4]) : null,
}))

export const quickCommerceDisclosure = [
  { period: 'Q1 2024', share: 12, gmv: null, note: '占 Group GMV 比例' },
  { period: 'Q1 2025', share: 15, gmv: null, note: '占 Group GMV 比例' },
  { period: 'FY 2025', share: null, gmv: 7.5, note: '全年 GMV 超过 €7.5bn' },
  { period: 'Q1 2026', share: 18, gmv: null, note: '占 Group GMV 比例，GMV 同比 +30% LfL' },
]

export const profitabilityHistory = [
  { period: 'FY 2023', adjustedEbitda: 253.6, freeCashFlow: null, frequency: '全年' },
  { period: 'H1 2024', adjustedEbitda: 240.6, freeCashFlow: -104, frequency: '半年' },
  { period: 'FY 2024', adjustedEbitda: 692.5, freeCashFlow: 99, frequency: '全年' },
  { period: 'H1 2025', adjustedEbitda: 410.7, freeCashFlow: -8, frequency: '半年' },
  { period: 'FY 2025', adjustedEbitda: 903, freeCashFlow: 250, frequency: '全年' },
]
