import { Dispatch, SetStateAction } from 'react'

export type HeaderProps = {
  smMd: boolean
  menuCollapse: boolean
  setMenuCollapse: Dispatch<SetStateAction<boolean>>
}
