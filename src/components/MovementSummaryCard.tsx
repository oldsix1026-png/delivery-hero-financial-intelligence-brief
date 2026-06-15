export default function MovementSummaryCard({ category, count, representative, conclusion, credibility }: {
  category: string
  count: number
  representative: string
  conclusion: string
  credibility: string
}) {
  return (
    <article className="movement-card">
      <div><span>{category}</span><strong>{count}</strong></div>
      <p>{representative}</p>
      <b>{conclusion}</b>
      <small>观察期：2026Q1 · {credibility}</small>
    </article>
  )
}
