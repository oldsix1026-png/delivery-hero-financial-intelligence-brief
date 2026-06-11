import { guidance } from '../../data/deliveryHeroFinancialData'

export default function GuidanceRangeChart() {
  return (
    <div className="guidance-ranges">
      {guidance.map((item) => (
        <article key={item.label}>
          <div><span>{item.label}</span><strong>{item.display}</strong></div>
          <div className="range-track">
            <i style={{
              background: item.color,
              marginLeft: `${(item.min / item.scaleMax) * 100}%`,
              width: `${Math.max(4, ((item.max - item.min) / item.scaleMax) * 100)}%`,
            }} />
          </div>
        </article>
      ))}
    </div>
  )
}
