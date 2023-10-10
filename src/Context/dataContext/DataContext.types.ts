import { Dispatch, SetStateAction } from 'react'

export type Sales = {
  id: string
  nome: string
  preco: number
  status: 'pago' | 'processando' | 'falha'
  pagamento: 'boleto' | 'cartao' | 'pix'
  parcelas: number | null
  data: string
}

export type Props = {
  loading: boolean
  initRange: string
  finallyRange: string
  error: string | null
  data: Sales[] | null
  setInitRange: Dispatch<SetStateAction<string>>
  setFinallyRange: Dispatch<SetStateAction<string>>
}
