'use client'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import { useColorMode } from '@/core/context/ColorModeContext/ColorModeContext.provider'
import { useState } from 'react'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const smMd = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const { colorMode } = useColorMode()

  const [menuCollapse, setMenuCollapse] = useState(false)

  const isDarkMode = colorMode === 'dark'

  return (
    <main>
      <Header
        smMd={smMd}
        menuCollapse={menuCollapse}
        setMenuCollapse={setMenuCollapse}
      />
      <Box sx={{ display: 'flex', marginTop: sm ? '56px' : '64px' }}>
        {!sm && (
          <Box>
            <Sidebar smMd={smMd} open={menuCollapse} />
          </Box>
        )}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              paddingY: 2,
              paddingX: 4,
              bgcolor: isDarkMode ? grey[900] : grey[100],
              height: sm ? 'calc(100vh - 88px)' : 'calc(100vh - 96px)',
              overflow: 'auto '
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </main>
  )
}
