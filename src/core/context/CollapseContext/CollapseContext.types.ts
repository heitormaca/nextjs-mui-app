import { PropsWithChildren } from 'react'

export type CollapseContextParams = {
  collapse: boolean
  toggleCollapse: VoidFunction
}

export type CollapseProviderProps = PropsWithChildren<unknown>
