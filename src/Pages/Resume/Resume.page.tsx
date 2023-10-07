import { Stack, Typography } from '../../Components'
import { useData } from '../../Context'

export const Resume = () => {
  const { data } = useData()

  if (!data)
    return (
      <Stack height="100%" width="100%" as="section">
        Loading...
      </Stack>
    )

  return (
    <Stack as="section" br={0} bgColor="transparent" p={0} m={0}>
      <Stack bgColor="transparent" flex mb resume pl={0} pr={0}>
        <Stack mt={1} mb>
          <Stack m={0} p={0}>
            <Typography as="h2">Vendas</Typography>
            <Stack as="span" p={0}>
              {data
                .reduce((acc, cur) => acc + cur.preco, 0)
                .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
            </Stack>
          </Stack>
        </Stack>
        <Stack mt={1} mb>
          <Stack m={0} p={0}>
            <Typography as="h2">Recebido</Typography>
            <Stack as="span" p={0}>
              {data
                .filter((item) => item.status === 'pago')
                .reduce((acc, cur) => acc + cur.preco, 0)
                .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
            </Stack>
          </Stack>
        </Stack>
        <Stack mt={1} mb>
          <Stack m={0} p={0}>
            <Typography as="h2">Processando</Typography>
            <Stack as="span" p={0}>
              {data
                .filter((item) => item.status === 'processando')
                .reduce((acc, cur) => acc + cur.preco, 0)
                .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
            </Stack>
          </Stack>
        </Stack>
        <Stack mt={1} mb>
          <Stack m={0} p={0}>
            <Typography as="h2">Falha</Typography>
            <Stack as="span" p={0}>
              {data
                .filter((item) => item.status === 'falha')
                .reduce((acc, cur) => acc + cur.preco, 0)
                .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack flex mb>
        Graficos
      </Stack>
    </Stack>
  )
}
