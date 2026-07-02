import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { profitabilityHistory } from '../../data/deliveryHeroQuarterlyHistory'

export default function ProfitabilityTrendChart() {
  return (
    <div className="combo-chart-card">
      <ResponsiveContainer width="100%" height={330}>
        <ComposedChart data={profitabilityHistory} margin={{ top: 12, right: 6, left: 2, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eadfd4" />
          <XAxis dataKey="period" tickLine={false} axisLine={false} />
          <YAxis yAxisId="amount" unit="m" tickLine={false} axisLine={false} width={52} />
          <YAxis yAxisId="ratio" orientation="right" unit="%" tickLine={false} axisLine={false} width={46} domain={[0, 2.2]} />
          <Tooltip
            formatter={(value, name) => {
              if (value === null) return ['未披露', name]
              return [name === 'EBITDA / GMV' ? `${value}%` : `€${value}m`, name]
            }}
          />
          <Legend />
          <Bar yAxisId="amount" dataKey="adjustedEbitda" name="Adjusted EBITDA 实际值" fill="#c75a22" radius={[6, 6, 0, 0]} />
          <Line yAxisId="amount" type="monotone" dataKey="freeCashFlow" name="Free Cash Flow 实际值" stroke="#8b4f73" strokeWidth={3} connectNulls={false} dot={{ r: 4 }} />
          <Line yAxisId="ratio" type="monotone" dataKey="ebitdaPct" name="EBITDA / GMV" stroke="#1f8a83" strokeWidth={3} connectNulls={false} dot={{ r: 4 }} />
        </ComposedChart>
      </ResponsiveContainer>
      <p className="chart-source">来源：Delivery Hero 官方公开财报；EBITDA / GMV = Adjusted EBITDA 实际值 / 同频率 Group GMV 实际值。FY 2023 因缺少完整 Group GMV 不计算。</p>
    </div>
  )
}
