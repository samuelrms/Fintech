import styled from '@emotion/styled'

export const Input = styled.input`
  border: none;
  font-family: monospace;
  ${({ theme }) => `
    font-size: ${theme.fonts.size.base};
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.quaternary};
    padding: ${theme.spacing['2.5']} ${theme.spacing['3']};
    border-radius: ${theme.spacing['5']};
  `};
`
