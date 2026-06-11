import type { Tone } from '../data/deliveryHeroFinancialData'

export default function KpiCard({ label, value, change, note, tone }: {
  label: string
  value: string
  change: string
  note: string
  tone: Tone
}) {
  return (
    <article className={`kpi-card kpi-card--${tone}`}>
      <div className="kpi-card__heading"><span>{label}</span><i>↗</i></div>
      <strong>{value}</strong><b>{change}</b><p>{note} · 官方公开数据</p>
    </article>
  )
}
