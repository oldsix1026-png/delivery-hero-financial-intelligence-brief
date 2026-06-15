import type { IntelligenceEvent } from '../data/deliveryHeroIntelligenceData'

export default function Timeline({ items }: { items: IntelligenceEvent[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={item.id}>
          <div className="timeline__rail"><time>2026Q1</time><span /></div>
          <div className="timeline__content">
            <div className="event-meta">
              <span>{item.entityLevel === 'group' ? '集团' : item.entityLevel === 'brand' ? '品牌' : item.entityLevel === 'country' ? '国家' : '区域'}</span>
              <b>{item.brand}</b><i>{item.unifiedCategory}</i><i>{item.eventType}</i>
            </div>
            <h3>{item.titleZh}</h3><p>{item.summaryZh}</p>
            <div className="event-impact"><strong>影响判断</strong><span>{item.impactZh}</span></div>
            <b>{item.sourceTier === 'Official' ? '官方披露' : '3 家以上媒体交叉验证'}</b>
            <details><summary>查看来源</summary>{[...item.primarySources, ...item.supportingSources].map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.organization} · {source.title}</a>)}</details>
          </div>
        </article>
      ))}
    </div>
  )
}
