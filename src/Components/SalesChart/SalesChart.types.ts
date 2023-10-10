import { Sales } from '../../Context/dataContext/DataContext.types'

export type Props = {
  data: Sales[]
}

export type SaleDay = {
  data: string
  pago: number
  processando: number
  falha: number
}
