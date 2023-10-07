import { SaleItem, Stack } from '../../Components'
import { useData } from '../../Context'

export const Sales = () => {
  const { data } = useData()

  if (!data)
    return (
      <Stack height="100%" width="100%" as="section">
        Loading...
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
