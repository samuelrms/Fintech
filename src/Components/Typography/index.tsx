import { StyledTypography } from './Typography.styles'
import { Props } from './Typography.types'

export const Typography = ({ as = 'p', ...props }: Partial<Props>) => (
  <StyledTypography as={as} {...props} />
)
