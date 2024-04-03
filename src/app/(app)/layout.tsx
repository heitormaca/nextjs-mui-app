import { Box } from '@mui/material'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import styles from './Layout.module.css'
import { getCollapse } from '@/core/configs/next/cookies/collapse'

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const collapse = await getCollapse()

  return (
    <main>
      <Header collapse={collapse} />
      <Box className={styles.contentBox} sx={{ display: 'flex' }}>
        <Box className={styles.boxSidebar}>
          <Sidebar collapse={JSON.parse(collapse)} />
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
