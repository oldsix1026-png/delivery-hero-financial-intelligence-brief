import type { Tone } from '../data/deliveryHeroFinancialData'
import type { QuarterlyHistoryRecord } from '../data/deliveryHeroQuarterlyHistory'
import QuarterlyTrendSparkline from './QuarterlyTrendSparkline'

export default function KpiCard({ label, value, change, qoq, period, note, tone, history, source }: {
  label: string
  value: string
  change: string
  qoq: string
  period: string
  note: string
  tone: Tone
  history: QuarterlyHistoryRecord[]
  source?: string
}) {
  return (
    <article className={`kpi-card kpi-card--${tone}`}>
      {source && <span className="source-badge">数据来源：{source}</span>}
      <div className="kpi-card__heading"><span>{label}</span><i>12Q</i></div>
      <strong>{value}</strong>
      <div className="kpi-card__changes"><b>{change}</b><span>{qoq}</span></div>
      <QuarterlyTrendSparkline data={history} tone={tone} />
      <p>{period} · {note}</p>
    </article>
  )
}
