import type { IntelligenceEvent } from '../data/deliveryHeroIntelligenceData'

const credibilityLabel = (item: IntelligenceEvent) => {
  if (item.hasOfficialAndMediaCoverage) return '官方披露 + 多家媒体跟进'
  if (item.isMediaVerified) return '3 家以上媒体交叉验证'
  return '官方披露'
}

export default function Timeline({ items }: { items: IntelligenceEvent[] }) {
  return (
    <div className="timeline event-card-flow">
      {items.map((item) => (
        <article className="event-card" key={item.id}>
          <div className="timeline__content">
            <time>{item.eventDate}</time>
            <div className="event-meta">
              <span>{item.entityLevel === 'group' ? '集团' : item.entityLevel === 'brand' ? '品牌' : item.entityLevel === 'country' ? '国家' : '区域'}</span>
              <b>{item.brand}</b><i>{item.unifiedCategory}</i><i>{item.eventType}</i>
            </div>
            <h3>{item.titleZh}</h3>
            <p>{item.summaryZh}</p>
            <div className="event-impact"><strong>影响判断</strong><span>{item.impactZh}</span></div>
            <b>{credibilityLabel(item)}</b>
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
