import styled from '@emotion/styled'
import { Props } from './Typography.types'

export const StyledTypography = styled.p<Props>`
  color: ${({ theme, color }) => color ?? theme.colors.text};
  line-height: auto;

  ${({ as, theme }) => `
  font-weight: ${
    as === 'h1' || as === 'h2' || as === 'h3'
      ? theme.fonts.weight.semiBold
      : theme.fonts.weight.regular
  };
  `}
`
