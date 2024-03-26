'use client'

import { createContext, useContext, useState } from 'react'
import {
  ColorMode,
  ColorModeContextParams,
  ColorModeProviderProps,
  UserColorModeProviderReturn
} from './ColorModeContext.types'

const ColorModeContext = createContext({} as ColorModeContextParams)

export function ColorModeProvider(props: ColorModeProviderProps) {
  const [colorMode, setColorMode] = useState<ColorMode>('light')

  function toggleColorMode() {
    setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  }

  function darkMode() {
    setColorMode('dark')
  }

  function lightMode() {
    setColorMode('light')
  }

  return (
    <ColorModeContext.Provider value={{ colorMode, lightMode, darkMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

export function useColorMode(): UserColorModeProviderReturn {
  const { colorMode, darkMode, lightMode } = useContext(ColorModeContext)

  return [colorMode, darkMode, lightMode]
}
