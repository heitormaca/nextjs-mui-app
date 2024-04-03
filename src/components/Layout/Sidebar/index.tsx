'use client'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { SidebarProps } from './Sidebar.types'
import { menuList } from '@/app/(app)/menuList'
import { usePathname, useRouter } from 'next/navigation'
import styles from './Sidebar.module.css'

export default function Sidebar({ open }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleSidebarListItemButtonOpen = open
    ? styles.sidebarListItemButtonOpen
    : styles.sidebarListItemButtonCollapse

  const handleSidebarListItemIconOpen = open
    ? styles.sidebarListItemIconOpen
    : styles.sidebarListItemIconCollapse

  const handleListItemTextOpen = open
    ? styles.sidebarListItemTextOpen
    : styles.sidebarListItemTextCollapse

  return (
    <List sx={{ p: 0 }}>
      {menuList.map(item => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            className={`${styles.sidebarListItemButton} ${handleSidebarListItemButtonOpen} `}
            sx={{
              minHeight: 48,
              px: 2.5
            }}
            selected={pathname === item.path}
            onClick={() => router.push(`${item.path}`)}
          >
            <ListItemIcon
              className={`${styles.sidebarListItemIcon} ${handleSidebarListItemIconOpen}`}
              sx={{
                minWidth: 0,
                justifyContent: 'center'
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              className={`${styles.sidebarListItemText} ${handleListItemTextOpen}`}
              primary={item.title}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
