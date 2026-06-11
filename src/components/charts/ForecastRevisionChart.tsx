import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { forecastRevisions } from '../../data/deliveryHeroFinancialData'

export default function ForecastRevisionChart() {
  return (
    <ResponsiveContainer width="100%" height={310}>
      <BarChart data={forecastRevisions} layout="vertical" margin={{ left: 8, right: 28 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#eadfd4" />
        <XAxis type="number" unit="m" axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" width={82} axisLine={false} tickLine={false} />
        <Tooltip formatter={(value) => [`€${value}m`, 'FY26 Adjusted EBITDA']} />
        <Legend />
        <Bar dataKey="oldValue" name="UBS 旧预测" fill="#c7b7a8" radius={[0, 6, 6, 0]} barSize={12} />
        <Bar dataKey="newValue" name="UBS 新预测" fill="#3b82a0" radius={[0, 6, 6, 0]} barSize={12} />
      </BarChart>
    </ResponsiveContainer>
  )
}
