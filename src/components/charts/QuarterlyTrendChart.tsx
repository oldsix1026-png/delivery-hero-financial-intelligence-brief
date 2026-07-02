import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { groupQuarterlyTrend } from '../../data/deliveryHeroQuarterlyHistory'

export default function QuarterlyTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={370}>
      <LineChart data={groupQuarterlyTrend} margin={{ top: 12, right: 16, left: 2, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eadfd4" />
        <XAxis dataKey="quarter" tickLine={false} axisLine={false} />
        <YAxis yAxisId="gmv" domain={[9, 14]} unit="bn" tickLine={false} axisLine={false} />
        <YAxis yAxisId="revenue" orientation="right" domain={[2, 4.2]} unit="bn" tickLine={false} axisLine={false} />
        <Tooltip formatter={(value, name) => [`€${Number(value).toFixed(2)}bn`, name]} />
        <Legend />
        <Line yAxisId="gmv" type="monotone" dataKey="gmv" name="Group GMV 实际值" stroke="#00966b" strokeWidth={3} dot={{ r: 3 }} />
        <Line yAxisId="revenue" type="monotone" dataKey="revenue" name="Total Segment Revenue 实际值" stroke="#f05a24" strokeWidth={3} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
