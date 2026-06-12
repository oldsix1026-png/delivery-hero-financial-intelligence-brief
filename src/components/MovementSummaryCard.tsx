export default function MovementSummaryCard({ category, count, representative, conclusion }: {
  category: string
  count: number
  representative: string
  conclusion: string
}) {
  return (
    <article className="movement-card">
      <div><span>{category}</span><strong>{count}</strong></div>
      <p>{representative}</p>
      <b>{conclusion}</b>
    </article>
  )
}
