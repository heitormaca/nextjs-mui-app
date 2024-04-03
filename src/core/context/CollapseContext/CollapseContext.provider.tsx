'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  CollapseContextParams,
  CollapseProviderProps
} from './CollapseContext.types'

const CollapseContext = createContext({} as CollapseContextParams)

export function CollapseProvider(props: CollapseProviderProps) {
  const [collapse, setCollapse] = useState(false)

  function toggleCollapse() {
    setCollapse(prev => {
      window.localStorage.setItem('collapse', String(!prev))
      return !prev
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cl = window.localStorage.getItem('collapse')

      if (!cl) {
        window.localStorage.setItem('collapse', String(collapse))
      } else {
        setCollapse(cl === 'true' ? true : false)
      }
    }
  }, [collapse])

  return (
    <CollapseContext.Provider value={{ collapse, toggleCollapse }}>
      {props.children}
    </CollapseContext.Provider>
  )
}

export function useCollapse(): CollapseContextParams {
  return useContext(CollapseContext)
}
