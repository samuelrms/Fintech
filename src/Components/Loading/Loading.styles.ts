import styled from '@emotion/styled'

export const Container = styled.div`
  border: ${({ theme }) => theme.spacing[3]} solid
    ${({ theme }) => theme.colors.secondary};
  border-top-color: ${({ theme }) => theme.colors.quaternary};
  width: ${({ theme }) => theme.spacing[16]};
  height: ${({ theme }) => theme.spacing[16]};
  border-radius: 50%;

  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
