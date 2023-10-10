import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks'
import { Loading, Stack } from '../../Components'
import { Sales } from '../../Context/dataContext/DataContext.types'
import { Container } from './Sale.styles'

export const Sale = () => {
  const { id } = useParams()
  const { data, error, loading } = useFetch<Omit<Sales, 'data'>>(
    import.meta.env.VITE_BASE_URL_SALE + id,
  )

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
    <Container>
      <Stack mb>ID: {data.id}</Stack>
      <Stack mb>Nome: {data.nome}</Stack>
      <Stack mb>
        Preço:{' '}
        {data.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Stack>
      <Stack mb>Status: {data.status}</Stack>
      <Stack mb>Pagamento: {data.pagamento}</Stack>
      {data.pagamento === 'cartao' && (
        <Stack mb>Pacelas: {data.parcelas}</Stack>
      )}
    </Container>
  )
}
