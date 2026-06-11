import type { Tone } from '../data/deliveryHeroFinancialData'

export default function InsightCard({ eyebrow, title, metric, description, tone = 'orange' }: {
  eyebrow: string
  title: string
  metric?: string
  description: string
  tone?: Tone
}) {
  return (
    <article className={`insight-card insight-card--${tone}`}>
      <span>{eyebrow}</span><h3>{title}</h3>{metric && <strong>{metric}</strong>}<p>{description}</p>
    </article>
  )
}
