import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import type { Tone } from '../data/deliveryHeroFinancialData'
import type { QuarterlyHistoryRecord } from '../data/deliveryHeroQuarterlyHistory'

const colors: Record<Tone, string> = {
  orange: '#f47a32',
  blue: '#3b82a0',
  green: '#27846b',
  red: '#b94f49',
}

export default function QuarterlyTrendSparkline({ data, tone }: { data: QuarterlyHistoryRecord[]; tone: Tone }) {
  return (
    <div className="sparkline" aria-label="近 12 个季度趋势">
      <ResponsiveContainer width="100%" height={64}>
        <LineChart data={data} margin={{ top: 8, right: 3, bottom: 2, left: 3 }}>
          <Tooltip
            formatter={(value) => [`€${(Number(value) / 1000).toFixed(2)}bn`, data[0]?.metricName]}
            labelFormatter={(_, payload) => payload[0]?.payload.quarter ?? ''}
          />
          <Line type="monotone" dataKey="value" stroke={colors[tone]} strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
