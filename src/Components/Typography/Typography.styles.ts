import styled from '@emotion/styled'
import { Props } from './Typography.types'

export const StyledTypography = styled.p<Props>`
  color: ${({ theme, color }) => color ?? theme.colors.text};
  line-height: auto;
  font-size: ${({ fontSize }) => fontSize}rem;

  ${({ as, theme }) => `
  font-weight: ${
    as === 'h1' || as === 'h2' || as === 'h3' || as === 'label'
      ? theme.fonts.weight.semiBold
      : theme.fonts.weight.regular
  };`};
  ${({ as, theme }) =>
    as === 'label' &&
    `
    margin-bottom: ${theme.spacing['2.5']};
    font-size: ${theme.fonts.size.base};
    display: block;
    color: ${theme.colors.secondary};
    padding: ${theme.spacing['2.5']} ${theme.spacing['3']};
    background-color: ${theme.colors.quaternary};
    border-radius: ${theme.spacing['5']};
  `}
`
