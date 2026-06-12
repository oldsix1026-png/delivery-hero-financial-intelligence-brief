import type { EvidenceLabel } from '../data/deliveryHeroFinancialData'

export default function InsightBlock({ label, evidence, title, text }: {
  label: string
  evidence: EvidenceLabel
  title: string
  text: string
}) {
  return (
    <article className="insight-block">
      <div><span>{label}</span><b>{evidence}</b></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}
