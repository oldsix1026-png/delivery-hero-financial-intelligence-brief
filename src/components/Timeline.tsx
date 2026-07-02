import type { IntelligenceEvent } from '../data/deliveryHeroIntelligenceData'

const eventTone = (item: IntelligenceEvent) => {
  if (['年度业绩', '增长指引'].includes(item.eventType)) return 'finance'
  if (['潜在要约', '资本结构', '债务再融资'].includes(item.eventType)) return 'capital'
  if (['管理层变化'].includes(item.eventType)) return 'strategy'
  if (['资产出售', '股东压力'].includes(item.eventType)) return 'asset'
  if (item.unifiedCategory.includes('业务')) return 'operations'
  return 'risk'
}

export default function Timeline({ items }: { items: IntelligenceEvent[] }) {
  return (
    <div className="timeline event-card-flow">
      {items.map((item) => (
        <article className={`event-card event-card--${eventTone(item)}`} key={item.id}>
          <span className="event-bookmark">{item.eventType}</span>
          <div className="timeline__content">
            <time>{item.eventDate}</time>
            <div className="event-meta">
              <span>{item.unifiedCategory}</span>
              <b>{item.brand}</b>
            </div>
            <h3>{item.titleZh}</h3>
            <p>{item.summaryZh}</p>
            <div className="event-impact"><strong>影响判断</strong><span>{item.impactZh}</span></div>
            <details>
              <summary>查看来源</summary>
              {[...item.primarySources, ...item.supportingSources].map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                  {source.organization} · {source.title}
                </a>
              ))}
            </details>
          </div>
        </article>
      ))}
    </div>
  )
}
