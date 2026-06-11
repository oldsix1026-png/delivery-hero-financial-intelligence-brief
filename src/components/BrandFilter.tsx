export default function BrandFilter({ options, value, onChange }: {
  options: string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="filter-group">
      <span>品牌</span>
      <div className="chips">
        {options.map((option) => <button className={value === option ? 'active' : ''} key={option} onClick={() => onChange(option)}>{option}</button>)}
      </div>
    </div>
  )
}
