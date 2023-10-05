import styled from '@emotion/styled'
import { Props } from './Stack.types'

export const CustomStack = styled.div<Props>`
  padding: ${({ theme }) => theme.spacing['5']};
  border-radius: ${({ theme }) => theme.spacing['5']};
  background-color: ${({ theme }) => theme.colors.white};
`
