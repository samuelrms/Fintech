import styled from '@emotion/styled'
import { Props } from './Button.types'

export const CustomButton = styled.button<Props>`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: ${({ theme }) => theme.fonts.size.base};
  cursor: pointer;
  outline: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 10px 10px 21px -6px rgba(0, 0, 0, 0.39);

  ${({ date, theme }) =>
    date &&
    `
    background-color: ${theme.colors.tertiary};
    color: ${theme.colors.secondary};
    border: none;
    border-radius: ${theme.spacing[5]};
    padding: ${theme.spacing[5]} ${theme.spacing[2.5]};
    font-weight: ${theme.fonts.weight.semiBold};
    text-transform: capitalize;

    @media (max-width: 700px) {
      padding: ${theme.spacing['3']} ${theme.spacing['2']};
    }
  `}
`
