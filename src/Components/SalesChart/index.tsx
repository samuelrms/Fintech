import {
  LineChart,
  XAxis,
  Line,
  Tooltip,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Props, SaleDay } from './SalesChart.types'
import { Sales } from '../../Context/dataContext/DataContext.types'

const transformData = (data: Sales[]): SaleDay[] => {
  const date = data.reduce((acc: { [key: string]: SaleDay }, item) => {
    const day = item.data.split(' ')[0]
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0,
      }
      acc[day][item.status] += item.preco
    }
    return acc
  }, {})

  return Object.values(date).map((item) => ({
    ...item,
    data: item.data.substring(5),
  }))
}

export const SalesChart = ({ data }: Props) => {
  const transformedData = transformData(data)

  return (
    <ResponsiveContainer width={'99%'} height={400}>
      <LineChart data={transformedData} margin={{ top: 20, bottom: 20 }}>
        <XAxis dataKey={'data'} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          name="Pago"
          dataKey="pago"
          stroke="#ff7300"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#387908"
          strokeWidth={3}
          name="Pendente"
        />
        <Line
          type="monotone"
          dataKey="falha"
          name="Falha"
          stroke="#000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
