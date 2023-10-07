import { Button } from '..'
import { useData } from '../../Context'
import { Props } from './MonthBtn.types'

const monthName = (n: number) => {
  const date = new Date()
  date.setMonth(date.getMonth() + n)

  const name = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date)

  return name
}

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${year}-${month}-${day}`
}

export const MonthBtn = ({ n }: Props) => {
  const { setFinallyRange, setInitRange } = useData()

  const setMonth = (n: number) => {
    const date = new Date()
    date.setMonth(date.getMonth() + n)
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    setInitRange(formatDate(firstDate))
    setFinallyRange(formatDate(lastDate))
  }

  return (
    <Button date onClick={() => setMonth(n)}>
      {monthName(n)}
    </Button>
  )
}
