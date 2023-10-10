import { Loading, SalesChart, Stack, Typography } from '../../Components'
import { useData } from '../../Context'

export const Resume = () => {
  const { data, error, loading } = useData()

  if (error)
    return (
      <Stack height="100%" width="100%" as="section">
        Houve um erro ao carregar os dados!
      </Stack>
    )

  if (loading) return <Loading />

  if (!data)
    return (
      <Stack height="100%" width="100%" as="section">
        Sem dados para exibir
      </Stack>
    )

  return (
    <Stack outline as="section" br={0} bgColor="transparent" p={0} m={0}>
      <Stack outline bgColor="transparent" flex mb resume pl={0} pr={0}>
        <Stack>
          <Stack outline m={0} p={0}>
            <Typography as="h2">Vendas</Typography>
            <Stack outline as="span" p={0}>
              {data
                .reduce((acc, cur) => acc + cur.preco, 0)
                .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Stack outline m={0} p={0}>
            <Typography as="h2">Recebido</Typography>
            <Stack outline as="span" p={0}>
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
        <Stack>
          <Stack outline m={0} p={0}>
            <Typography as="h2">Processando</Typography>
            <Stack outline as="span" p={0}>
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
        <Stack>
          <Stack outline m={0} p={0}>
            <Typography as="h2">Falha</Typography>
            <Stack outline as="span" p={0}>
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
        <SalesChart data={data} />
      </Stack>
    </Stack>
  )
}
