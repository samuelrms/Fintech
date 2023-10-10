import styled from '@emotion/styled'

export const SidenavContainer = styled.nav`
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[5]};
  outline: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 10px 10px 21px -6px rgba(0, 0, 0, 0.39);

  li {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2.5]};
  }

  li span {
    width: ${({ theme }) => theme.spacing[8]};
    height: ${({ theme }) => theme.spacing[8]};
    background: ${({ theme }) => theme.colors.quaternary};
    border-radius: ${({ theme }) => theme.spacing[5]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li a {
    flex: 1;
    font-size: ${({ theme }) => theme.fonts.size.xl};
    color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing[2.5]} 0;
    margin: ${({ theme }) => theme.spacing[1]} 0;
  }

  li:hover span {
    background: ${({ theme }) => theme.colors.tertiary};
    transition: 0.3s ease-in-out;
  }

  .mb {
    margin-bottom: ${({ theme }) => theme.spacing[5]};
  }

  @media (max-width: 700px) {
    padding: ${({ theme }) => theme.spacing[3]};
    .mb {
      margin-bottom: ${({ theme }) => theme.spacing[3]};
    }

    li {
      gap: ${({ theme }) => theme.spacing[2]};
    }

    li a {
      padding: ${({ theme }) => theme.spacing[2]} 0;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    li a {
      font-size: ${({ theme }) => theme.fonts.size.sm};
    }
  }
`
