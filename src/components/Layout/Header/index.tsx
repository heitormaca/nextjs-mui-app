'use client'
import { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import UserMenu from './components/UserMenu'
import Logo from '@/components/_commons/Logo'
import MobileDrawerMenu from './components/MobileDrawerMenu'

export default function Header() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <AppBar position="fixed">
      <Box sx={{ paddingX: 3 }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <Logo />
          </Box>
          <UserMenu />
        </Toolbar>
      </Box>
    </AppBar>
  )
}
