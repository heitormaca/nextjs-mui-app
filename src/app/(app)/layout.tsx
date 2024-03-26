'use client'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import { Grid } from '@mui/material'
import { useState } from 'react'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [selectedIndex, setSelectedIndex] = useState('/dashboard')

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: string
  ) => {
    setSelectedIndex(index)
  }

  return (
    <main>
      <Header
        handleListItemClick={handleListItemClick}
        selectedIndex={selectedIndex}
      />
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
