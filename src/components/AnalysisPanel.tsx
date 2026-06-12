import InsightBlock from './InsightBlock'
import type { EvidenceLabel } from '../data/deliveryHeroFinancialData'

type Item = { label: string; evidence: EvidenceLabel; title: string; text: string }

export default function AnalysisPanel({ title, items }: { title: string; items: Item[] }) {
  return (
    <aside className="analysis-panel">
      <header><span>券商研报归因</span><h3>{title}</h3></header>
      <div className="analysis-panel__items">{items.map((item) => <InsightBlock key={item.label} {...item} />)}</div>
    </aside>
  )
}
