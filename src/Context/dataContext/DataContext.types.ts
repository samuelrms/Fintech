import { Dispatch, SetStateAction } from 'react'

export type Sales = {
  id: string
  name: string
  price: number
  status: 'pago' | 'preocessando' | 'falha'
  payment: 'boleto' | 'cartão' | 'pix'
  installments: number | null
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
