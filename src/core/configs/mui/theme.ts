'use client'
import { useColorMode } from '@/core/context/ColorModeContext/ColorModeContext.provider'
import { createTheme } from '@mui/material'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export function useTheme() {
  const [colorMode] = useColorMode()

  const theme = createTheme({
    palette: {
      mode: colorMode
    },
    typography: {
      fontFamily: roboto.style.fontFamily
    }
  })

  return theme
}
