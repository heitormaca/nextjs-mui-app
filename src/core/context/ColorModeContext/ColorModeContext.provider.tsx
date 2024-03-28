'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  ColorMode,
  ColorModeContextParams,
  ColorModeProviderProps,
  UserColorModeProviderReturn
} from './ColorModeContext.types'

const ColorModeContext = createContext({} as ColorModeContextParams)

export function ColorModeProvider(props: ColorModeProviderProps) {
  const [colorMode, setColorMode] = useState<ColorMode>('light')

  function darkMode() {
    setColorMode('dark')
    localStorage.setItem('colorMode', 'dark')
  }

  function lightMode() {
    setColorMode('light')
    localStorage.setItem('colorMode', 'light')
  }

  const cm = localStorage.getItem('colorMode')

  useEffect(() => {
    if (!cm) {
      localStorage.setItem('colorMode', colorMode)
    } else {
      setColorMode(cm as ColorMode)
    }
  }, [colorMode, cm])

  return (
    <ColorModeContext.Provider value={{ colorMode, lightMode, darkMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

export function useColorMode(): UserColorModeProviderReturn {
  return useContext(ColorModeContext)
}
