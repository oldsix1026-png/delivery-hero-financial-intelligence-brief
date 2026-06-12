import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { quickCommerceDisclosure } from '../../data/deliveryHeroQuarterlyHistory'

export default function QuickCommerceTrendChart() {
  const data = quickCommerceDisclosure.filter((item) => item.share !== null)
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 12, right: 12, left: -8, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eadfd4" />
        <XAxis dataKey="period" tickLine={false} axisLine={false} />
        <YAxis unit="%" domain={[0, 20]} tickLine={false} axisLine={false} />
        <Tooltip formatter={(value) => [`${value}%`, '占 Group GMV']} />
        <Bar dataKey="share" fill="#27846b" radius={[7, 7, 0, 0]} barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  )
}
