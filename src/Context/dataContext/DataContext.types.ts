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
  error: string | null
  data: Sales[] | null
}
