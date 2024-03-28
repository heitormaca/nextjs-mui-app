'use client'
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import { useColorMode } from '@/core/context/ColorModeContext/ColorModeContext.provider'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const { colorMode } = useColorMode()

  const isDarkMode = colorMode === 'dark'

  return (
    <main>
      <Header />
      <Grid
        container
        sx={matches ? { marginTop: '56px' } : { marginTop: '64px' }}
      >
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Box
            sx={{
              margin: 2,
              padding: 2,
              borderRadius: 1,
              bgcolor: isDarkMode ? grey[900] : grey[100],
              height: matches ? 'calc(100vh - 88px)' : 'calc(100vh - 96px)',
              overflow: 'auto '
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </main>
  )
}
