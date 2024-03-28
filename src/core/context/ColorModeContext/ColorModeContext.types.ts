import { PropsWithChildren } from 'react'

export type ColorModeContextParams = {
  colorMode: ColorMode
  darkMode: () => void
  lightMode: () => void
}

export type ColorMode = 'light' | 'dark'

export type ColorModeProviderProps = PropsWithChildren<unknown>

export type UserColorModeProviderReturn = {
  colorMode: ColorMode
  lightMode: VoidFunction
  darkMode: VoidFunction
}
