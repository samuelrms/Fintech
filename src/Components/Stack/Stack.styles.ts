import styled from '@emotion/styled'
import { Props } from './Stack.types'

export const CustomStack = styled.div<Props>`
  display: block;
  padding: ${({ theme }) => theme.spacing['5']};
  border-radius: ${({ theme, br }) => br ?? theme.spacing['5']};
  background-color: ${({ theme, bgColor }) => bgColor ?? theme.colors.white};
  border-color: ${({ borderColor }) => borderColor};
  border-style: ${({ borderStyle }) => borderStyle};
  padding: ${({ p }) => p}rem;
  padding-left: ${({ pl }) => pl}rem;
  padding-right: ${({ pr }) => pr}rem;
  padding-top: ${({ pt }) => pt}rem;
  padding-bottom: ${({ pb }) => pb}rem;
  margin: ${({ m }) => m}rem;
  margin-left: ${({ ml }) => ml}rem;
  margin-right: ${({ mr }) => mr}rem;
  margin-top: ${({ mt }) => mt}rem;
  margin-bottom: ${({ mb, theme }) => mb && theme.spacing['5']};
  gap: ${({ gap }) => gap}rem;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex-direction: ${({ direction }) => direction};

  ${({ flex, theme }) =>
    flex &&
    `
  display: flex;
  gap: ${theme.spacing['5']};

  > * {
    flex: 1;
  }
  `}

  ${({ resume, theme }) =>
    resume &&
    `
    font-size: ${theme.fonts.size['2xl']};
    font-weight: ${theme.fonts.weight.semiBold};
    flex-wrap: wrap;

    h2{
      font-size: ${theme.fonts.size['2xl']};
      margin-bottom: ${theme.spacing['5']};
      color: ${theme.colors.primary};
    }
    `}

  ${({ sale, theme }) =>
    sale &&
    `
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: ${theme.spacing['5']};
    margin-bottom: ${theme.spacing['2.5']};
    align-items: center;

    > div:last-child {
      justify-self: end;
    }
  `}
`
