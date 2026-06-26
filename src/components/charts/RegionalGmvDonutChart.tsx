import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { regions } from '../../data/deliveryHeroFinancialData'

export default function RegionalGmvDonutChart() {
  return (
    <div className="donut-wrap">
      <ResponsiveContainer width="100%" height={310}>
        <PieChart>
          <Pie data={regions} dataKey="value" nameKey="name" innerRadius={78} outerRadius={118} paddingAngle={2}>
            {regions.map((item) => <Cell key={item.name} fill={item.color} />)}
          </Pie>
          <Tooltip formatter={(value) => [`€${Number(value).toLocaleString()}m`, 'GMV']} />
        </PieChart>
      </ResponsiveContainer>
      <div className="donut-center"><strong>Q1 2026</strong><span>分部规模视图*</span></div>
      <div className="donut-legend" aria-label="Q1 2026 区域 GMV 构成图例">
        {regions.map((item) => <span key={item.name}><i style={{ backgroundColor: item.color }} />{item.name}</span>)}
      </div>
    </div>
  )
}
