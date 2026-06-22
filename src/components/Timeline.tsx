import type { IntelligenceEvent } from '../data/deliveryHeroIntelligenceData'

export default function Timeline({ items }: { items: IntelligenceEvent[] }) {
  return (
    <div className="timeline event-card-flow">
      {items.map((item) => (
        <article className="event-card" key={item.id}>
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
