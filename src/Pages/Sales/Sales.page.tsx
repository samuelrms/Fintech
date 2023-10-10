import { Loading, SaleItem, Stack } from '../../Components'
import { useData } from '../../Context'

export const Sales = () => {
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
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <SaleItem sale={item} />
        </li>
      ))}
    </ul>
  )
}
