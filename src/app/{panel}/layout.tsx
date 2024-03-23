import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import { Grid } from '@mui/material'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <div>{children}</div>
        </Grid>
      </Grid>
    </main>
  )
}
