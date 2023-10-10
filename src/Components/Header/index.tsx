import { useEffect, useState } from 'react'
import { Months, Stack, Typography } from '..'
import { DataRange } from '../DataRange'
import { DateRange, HeaderContainer } from './Header.styles'
import { useTheme } from '@emotion/react'
import { useLocation } from 'react-router-dom'
import { appRoutes } from '../../mocks'

export const Header = () => {
  const [title, setTitle] = useState('Resumo')
  const theme = useTheme()
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location

    const route = appRoutes.find((route) => route.path === pathname)

    if (route) {
      setTitle(route.title)
      document.title = `${route.title} - Fintech`
    }
  }, [location])

  return (
    <HeaderContainer>
      <DateRange m={0} mb outline>
        <Stack>
          <DataRange />
        </Stack>
        <Stack m={0} bgColor={theme.colors.tertiary}>
          <Typography color={theme.colors.secondary} as="h1">
            {title}
          </Typography>
        </Stack>
      </DateRange>
      <Months />
    </HeaderContainer>
  )
}
