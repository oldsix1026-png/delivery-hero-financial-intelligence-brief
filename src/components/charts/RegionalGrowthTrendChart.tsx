import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { regionalQuarterlyTrend } from '../../data/deliveryHeroQuarterlyHistory'

export default function RegionalGrowthTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <LineChart data={regionalQuarterlyTrend} margin={{ top: 12, right: 14, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eadfd4" />
        <XAxis dataKey="quarter" tickLine={false} axisLine={false} />
        <YAxis unit="m" tickLine={false} axisLine={false} />
        <Tooltip formatter={(value, name) => [`€${Number(value).toLocaleString()}m`, name]} />
        <Legend />
        <Line type="monotone" dataKey="Asia" stroke="#f47a32" strokeWidth={2.5} dot={false} />
        <Line type="monotone" dataKey="MENA" stroke="#3b82a0" strokeWidth={2.5} dot={false} />
        <Line type="monotone" dataKey="Europe" stroke="#e8a05f" strokeWidth={2.2} dot={false} />
        <Line type="monotone" dataKey="Americas" stroke="#27846b" strokeWidth={2.2} dot={false} />
        <Line type="monotone" dataKey="Integrated Verticals" stroke="#8b6cab" strokeWidth={2.2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
