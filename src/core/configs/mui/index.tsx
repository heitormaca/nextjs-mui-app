import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { PropsWithChildren } from 'react'
import { CssBaseline, createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Theme } from './theme'

export function MUIConfigProvider(props: PropsWithChildren) {
  const theme = Theme()
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
