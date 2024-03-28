'use client'
import { useState } from 'react'
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import UserMenu from './components/UserMenu'
import Logo from '@/components/_commons/Logo'
import MobileDrawerMenu from './components/MobileDrawerMenu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { HeaderProps } from './Header.types'

export default function Header({
  smMd,
  menuCollapse,
  setMenuCollapse
}: HeaderProps) {
  const [open, setOpen] = useState(false)

  const theme = useTheme()

  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const md = useMediaQuery(theme.breakpoints.up('md'))

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <AppBar position="fixed">
      <Box sx={{ paddingX: 3 }}>
        <Toolbar disableGutters>
          {smMd && (
            <Box sx={{ flexGrow: 1 }}>
              <Logo />
            </Box>
          )}
          {sm && (
            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <MobileDrawerMenu open={open} onClose={toggleDrawer(false)} />
            </Box>
          )}
          {md && (
            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setMenuCollapse(prev => !prev)}
                color="inherit"
              >
                {!menuCollapse ? <MenuIcon /> : <MenuOpenIcon />}
              </IconButton>
              <MobileDrawerMenu open={open} onClose={toggleDrawer(false)} />
            </Box>
          )}
          {!smMd && (
            <Box
              sx={{
                flexGrow: 1
              }}
            >
              <Logo />
            </Box>
          )}
          <UserMenu />
        </Toolbar>
      </Box>
    </AppBar>
  )
}
