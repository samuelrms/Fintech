import styled from '@emotion/styled'
import { Props } from './Button.types'

export const CustomButton = styled.button<Props>`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: ${({ theme }) => theme.fonts.size.base};
  cursor: pointer;
`
