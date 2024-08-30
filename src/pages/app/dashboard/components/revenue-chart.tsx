import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  {
    date: '10/12',
    revenue: 1200
  },
  {
    date: '11/12',
    revenue: 1400
  },
  {
    date: '12/12',
    revenue: 200
  },
  {
    date: '13/12',
    revenue: 700
  },
  {
    date: '14/12',
    revenue: 2000
  },
  {
    date: '15/12',
    revenue: 2200
  },
  {
    date: '16/12',
    revenue: 1800
  },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium ">Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line dataKey="revenue" strokeWidth={2} stroke="#8884d8" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis stroke="#888" axisLine={false} tickLine={false} tickFormatter={value => value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })} />

            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}