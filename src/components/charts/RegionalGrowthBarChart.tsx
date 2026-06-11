import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { regions } from '../../data/deliveryHeroFinancialData'

export default function RegionalGrowthBarChart() {
  return (
    <ResponsiveContainer width="100%" height={310}>
      <BarChart data={regions} layout="vertical" margin={{ left: 12, right: 28 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#eadfd4" />
        <XAxis type="number" unit="%" axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" width={132} axisLine={false} tickLine={false} />
        <Tooltip formatter={(value) => [`${value}% LfL`, 'GMV 同比']} />
        <Bar dataKey="growth" radius={[0, 8, 8, 0]} barSize={24}>{regions.map((item) => <Cell key={item.name} fill={item.color} />)}</Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
