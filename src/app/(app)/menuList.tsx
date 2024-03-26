import { ReactNode } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import InventoryIcon from '@mui/icons-material/Inventory'
import GroupIcon from '@mui/icons-material/Group'

export type MenuItemProps = {
  title: string
  path: string
  icon: ReactNode
}

export const menuList: MenuItemProps[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />
  },
  {
    title: 'Products',
    path: '/products',
    icon: <InventoryIcon />
  },
  {
    title: 'Users',
    path: '/users',
    icon: <GroupIcon />
  }
]
