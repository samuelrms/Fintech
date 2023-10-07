import styled from '@emotion/styled'
import { Props } from './Stack.types'

export const CustomStack = styled.div<Props>`
  display: block;
  padding: ${({ theme }) => theme.spacing['5']};
  border-radius: ${({ theme }) => theme.spacing['5']};
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

  ${({ flex, theme }) =>
    flex &&
    `
  display: flex;
  gap: ${theme.spacing['5']};

  > * {
    flex: 1;
  }
  `}
`
