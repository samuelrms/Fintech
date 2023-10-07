import { Props } from './SaleItem.types'
import { Stack, Typography } from '..'

export const SaleItem = ({ sale }: Props) => {
  return (
    <Stack sale flex direction="column">
      <a href="" style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </a>
      <Stack p={0} m={0}>
        <Typography as="span">{sale.nome}</Typography>
      </Stack>
      <Stack p={0} m={0}>
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
