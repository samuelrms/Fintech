import { Months, Stack } from '..'
import { DataRange } from '../DataRange'
import { HeaderContainer } from './Header.styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Stack mb>
        <DataRange />
      </Stack>

      <Months />
    </HeaderContainer>
  )
}
