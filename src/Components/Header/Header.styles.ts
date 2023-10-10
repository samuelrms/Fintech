import styled from '@emotion/styled'
import { CustomStack } from '../Stack/Stack.styles'

export const HeaderContainer = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing[5]};

  @media (max-width: 700px) {
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }
`

export const DateRange = styled(CustomStack)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: transparent;
  gap: ${({ theme }) => theme.spacing[5]};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    *:last-child {
      grid-row: 1;
    }
  }

  @media (max-width: 700px) {
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[3]};
  }
`
