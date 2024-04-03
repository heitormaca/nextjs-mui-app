'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { PropsWithChildren } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { useTheme } from './theme'
import { cssTheme } from './cssTheme'

interface MUIProps extends PropsWithChildren {
  colorMode?: string
}

export function MUIConfigProvider(props: MUIProps) {
  const theme = useTheme()
  return (
    <CssVarsProvider theme={cssTheme}>
      <AppRouterCacheProvider>
        <ThemeProvider
          theme={{
            ...theme,
            palette: { ...theme.palette, mode: props.colorMode || 'light' }
          }}
        >
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </CssVarsProvider>
  )
}
