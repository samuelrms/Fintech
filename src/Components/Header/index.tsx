import { useState } from 'react'
import { Months, Stack, Typography } from '..'
import { DataRange } from '../DataRange'
import { DateRange, HeaderContainer } from './Header.styles'
import { useTheme } from '@emotion/react'

export const Header = () => {
  const [title, setTitle] = useState('Resumo')
  const theme = useTheme()
  return (
    <HeaderContainer>
      <DateRange mb>
        <Stack>
          <DataRange />
        </Stack>
        <Stack bgColor={theme.colors.tertiary}>
          <Typography color={theme.colors.secondary} as="h1">
            {title}
          </Typography>
        </Stack>
      </DateRange>
      <Months />
    </HeaderContainer>
  )
}
