'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { PropsWithChildren } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useTheme } from './theme'
import { ColorModeProvider } from '@/core/context/ColorModeContext/ColorModeContext.provider'

export function MUIConfigProvider(props: PropsWithChildren) {
  const theme = useTheme()
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
