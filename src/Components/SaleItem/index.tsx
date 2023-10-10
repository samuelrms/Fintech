import { Props } from './SaleItem.types'
import { Stack, Typography } from '..'
import { NavLink } from 'react-router-dom'

export const SaleItem = ({ sale }: Props) => {
  return (
    <Stack sale flex direction="column">
      <NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </NavLink>
      <Stack outline p={0} m={0}>
        <Typography as="span">{sale.nome}</Typography>
      </Stack>
      <Stack outline p={0} m={0}>
        <Typography as="span">
          {sale.preco.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Typography>
      </Stack>
    </Stack>
  )
}
