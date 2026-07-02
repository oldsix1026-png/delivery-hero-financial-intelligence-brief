import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { regions } from '../../data/deliveryHeroFinancialData'

export default function RegionalGrowthBarChart() {
  return (
    <ResponsiveContainer width="100%" height={310}>
      <BarChart data={regions} layout="vertical" margin={{ left: 12, right: 28 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#eadfd4" />
        <XAxis type="number" unit="%" axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" width={132} axisLine={false} tickLine={false} />
        <Tooltip formatter={(value, name) => [`${value}%`, name]} />
        <Legend />
        <Bar dataKey="reportedGrowth" name="Reported YoY" fill="#c7b7a8" radius={[0, 6, 6, 0]} barSize={11} />
        <Bar dataKey="lflGrowth" name="LfL YoY" fill="#9b4fb3" radius={[0, 6, 6, 0]} barSize={11} />
      </BarChart>
    </ResponsiveContainer>
  )
}
