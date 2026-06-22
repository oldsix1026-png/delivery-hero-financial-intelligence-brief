import type { EvidenceLabel } from '../data/deliveryHeroFinancialData'

export default function InsightBlock({ label, evidence, title, text }: {
  label: string
  evidence: EvidenceLabel
  title: string
  text: string
}) {
  const modifier = label.includes('判断边界')
    ? ' insight-block--boundary'
    : label.includes('后续观察') || label.includes('风险提示') || label.includes('资本结构')
      ? ' insight-block--watch'
      : ''

  return (
    <article className={`insight-block${modifier}`}>
      <div><span>{label}</span><b>{evidence}</b></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}
