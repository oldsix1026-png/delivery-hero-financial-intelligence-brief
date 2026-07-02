import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { profitabilityHistory } from '../../data/deliveryHeroQuarterlyHistory'

export default function ProfitabilityTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={330}>
      <ComposedChart data={profitabilityHistory} margin={{ top: 12, right: 14, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eadfd4" />
        <XAxis dataKey="period" tickLine={false} axisLine={false} />
        <YAxis unit="m" tickLine={false} axisLine={false} />
        <Tooltip formatter={(value, name) => [value === null ? '未披露' : `€${value}m`, name]} />
        <Legend />
        <Bar dataKey="adjustedEbitda" name="Adjusted EBITDA 实际值" fill="#00966b" radius={[6, 6, 0, 0]} />
        <Line type="monotone" dataKey="freeCashFlow" name="Free Cash Flow 实际值" stroke="#9b4fb3" strokeWidth={3} connectNulls={false} />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
