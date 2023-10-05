import styled from '@emotion/styled'

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.quaternary};
  display: grid;
  padding: ${({ theme }) => theme.spacing['5']};
  gap: ${({ theme }) => theme.spacing['5']};
`
