import { useEffect, useRef } from 'react'

type LenisInstance = {
  raf: (time: number) => void
  on: (event: string, cb: () => void) => void
  destroy: () => void
}

export function useLenisScroll() {
  const lenisRef = useRef<LenisInstance | null>(null)

  useEffect(() => {
    let animFrameId: number

    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) =>
          Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }) as LenisInstance

      lenisRef.current = lenis

      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')

      gsap.registerPlugin(ScrollTrigger)

      lenis.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)

      function raf(time: number) {
        lenis.raf(time)
        animFrameId = requestAnimationFrame(raf)
      }

      animFrameId = requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      cancelAnimationFrame(animFrameId)
      lenisRef.current?.destroy()
    }
  }, [])

  return lenisRef
}