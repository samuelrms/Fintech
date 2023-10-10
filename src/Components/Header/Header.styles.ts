import styled from '@emotion/styled'
import { Stack } from '..'

export const HeaderContainer = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing['5']};
`

export const DateRange = styled(Stack)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: transparent;
  gap: ${({ theme }) => theme.spacing['5']};
`
