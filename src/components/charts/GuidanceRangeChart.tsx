import { guidance } from '../../data/deliveryHeroFinancialData'

export default function GuidanceRangeChart() {
  return (
    <div className="guidance-ranges">
      {guidance.map((item, index) => (
        <article key={item.label}>
          <div><span>{item.label}</span><strong>{item.display}</strong></div>
          <div className="range-track"><i style={{ background: item.color, width: `${62 + index * 8}%` }} /></div>
        </article>
      ))}
    </div>
  )
}
