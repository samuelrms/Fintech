import styled from '@emotion/styled'
import { Props } from './Button.types'

export const CustomButton = styled.button<Props>`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: ${({ theme }) => theme.fonts.size.base};
  cursor: pointer;

  ${({ date, theme }) =>
    date &&
    `
    background-color: ${theme.colors.tertiary};
    color: ${theme.colors.secondary};
    border: none;
    border-radius: ${theme.spacing['5']};
    padding: ${theme.spacing['5']} ${theme.spacing['2.5']};
    font-weight: ${theme.fonts.weight.semiBold};
    text-transform: capitalize;
  `}
`
