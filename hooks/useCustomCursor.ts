import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    document.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])
}
