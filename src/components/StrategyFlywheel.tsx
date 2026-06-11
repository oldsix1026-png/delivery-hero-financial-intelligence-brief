export default function StrategyFlywheel({ steps }: { steps: string[] }) {
  return (
    <div className="flywheel" aria-label="Everyday App 战略飞轮">
      {steps.map((step, index) => (
        <div className="flywheel__step" key={step}>
          <span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>
          {index < steps.length - 1 && <i>→</i>}
        </div>
      ))}
      <small>基于研报与官方战略表述整理</small>
    </div>
  )
}
