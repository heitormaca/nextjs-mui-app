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

export default function Sidebar({ smMd, open }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <List sx={{ p: 0 }}>
      {menuList.map(item => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: smMd ? 'center' : open ? 'initial' : 'center',
              px: 2.5
            }}
            selected={pathname === item.path}
            onClick={() => router.push(`${item.path}`)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: smMd ? 'auto' : open ? 3 : 'auto',
                justifyContent: 'center'
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              sx={{
                display: smMd ? 'none' : open ? 'flex' : 'none'
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
