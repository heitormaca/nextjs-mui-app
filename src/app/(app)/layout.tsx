'use client'
import { Box } from '@mui/material'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import { useCollapse } from '@/core/context/CollapseContext/CollapseContext.provider'
import styles from './Layout.module.css'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { collapse, toggleCollapse } = useCollapse()

  return (
    <main>
      <Header menuCollapse={collapse} toggleCollapse={toggleCollapse} />
      <Box className={styles.contentBox} sx={{ display: 'flex' }}>
        <Box className={styles.boxSidebar}>
          <Sidebar open={collapse} />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Box
            className={styles.mainContentBox}
            sx={{
              paddingY: 2,
              paddingX: 4,
              bgcolor: 'var(--md-demo-palette-common-background)',
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
