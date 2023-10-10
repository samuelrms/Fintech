import { PropsWithChildren } from 'react'
import { DataContextProvider } from '../Context'
import { Global, ThemeProvider } from '@emotion/react'
import { resetCss, theme } from '../base_styles'
import { BrowserRouter } from 'react-router-dom'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetCss} />
      <BrowserRouter>
        <DataContextProvider>{children}</DataContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
