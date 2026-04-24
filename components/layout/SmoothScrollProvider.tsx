'use client'

import { useEffect } from 'react'
import { useLenisScroll } from '@/hooks/useLenisScroll'
import { useCustomCursor } from '@/hooks/useCustomCursor'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useLenisScroll()
  useCustomCursor()

  return <>{children}</>
}
