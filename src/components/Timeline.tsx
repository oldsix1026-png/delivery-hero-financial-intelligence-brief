import type { IntelligenceEvent } from '../data/deliveryHeroIntelligenceData'

export default function Timeline({ items }: { items: IntelligenceEvent[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={item.id}>
          <div className="timeline__rail"><time>{item.eventDate}</time><span /></div>
          <div className="timeline__content">
            <div className="event-meta">
              <span>{item.entityLevel === 'group' ? '集团' : item.entityLevel === 'brand' ? '品牌' : '区域'}</span>
              <b>{item.brand}</b><i>{item.region}</i><i>{item.eventType}</i>
            </div>
            <h3>{item.titleZh}</h3><p>{item.summaryZh}</p>
            <a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceOrganization} · {item.sourceTitle} ↗</a>
          </div>
        </article>
      ))}
    </div>
  )
}
