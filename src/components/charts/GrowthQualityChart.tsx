import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { groupQuarterlyTrend } from '../../data/deliveryHeroQuarterlyHistory'

export default function GrowthQualityChart() {
  const data = groupQuarterlyTrend.filter((item) => item.gmvYoY !== null)
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -8, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eadfd4" />
        <XAxis dataKey="quarter" tickLine={false} axisLine={false} />
        <YAxis unit="%" tickLine={false} axisLine={false} />
        <Tooltip formatter={(value, name) => [`${value}%`, name]} />
        <Legend />
        <Bar dataKey="gmvYoY" name="GMV reported YoY" fill="#9b4fb3" radius={[5, 5, 0, 0]} />
        <Bar dataKey="revenueYoY" name="Revenue reported YoY" fill="#f05a24" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
