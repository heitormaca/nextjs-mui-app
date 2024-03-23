'use client'

import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Button onClick={() => router.push('/dashboard')}>Entrar</Button>
    </div>
  )
}
