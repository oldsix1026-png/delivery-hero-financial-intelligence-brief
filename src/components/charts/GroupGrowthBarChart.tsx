import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { groupGrowth } from '../../data/deliveryHeroFinancialData'

export default function GroupGrowthBarChart() {
  return (
    <ResponsiveContainer width="100%" height={290}>
      <BarChart data={groupGrowth} layout="vertical" margin={{ left: 18, right: 30 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#eadfd4" />
        <XAxis type="number" unit="%" axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" width={156} axisLine={false} tickLine={false} />
        <Tooltip formatter={(value) => [`${value}%`, '同比增速']} />
        <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={28}>{groupGrowth.map((item) => <Cell key={item.name} fill={item.color} />)}</Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
