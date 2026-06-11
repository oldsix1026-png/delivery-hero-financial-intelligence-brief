export default function RegionFilter({ options, value, onChange }: {
  options: string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <label className="select-filter">
      <span>区域</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  )
}
