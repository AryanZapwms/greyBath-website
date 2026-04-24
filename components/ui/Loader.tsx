'use client'

import { useEffect } from 'react'
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations'

export default function Loader() {
  useGSAPAnimations()

  useEffect(() => {
    const run = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Step 1: immediately hide the words so the animation looks intentional
      // We set them here (client-side only) right before animating
      const words = gsap.utils.toArray<HTMLElement>('.hero-headline .word')
      gsap.set(words, { opacity: 0, y: 80, rotateX: -60, skewX: 5, transformOrigin: 'top left' })
      gsap.set('.hero-eyebrow', { opacity: 0, y: 10 })
      gsap.set('#main-nav', { opacity: 0, y: -30 })

      const tl = gsap.timeline({
        onComplete: () => {
          // Hero headline — word-by-word 3D flip stagger
          gsap.to(words, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            skewX: 0,
            duration: 0.9,
            ease: 'power4.out',
            stagger: 0.06,
            delay: 0.1,
          })

          // Hero eyebrow
          gsap.to('.hero-eyebrow', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.05,
          })

          // Nav
          gsap.to('#main-nav', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.5,
          })
        },
      })

      tl.to('#loader-bar', { width: '100%', duration: 1.4, ease: 'power2.inOut' })
        .to('#loader', { yPercent: -100, duration: 0.9, ease: 'power4.inOut', delay: 0.2 })
        .set('#loader', { display: 'none' })
    }

    run()
  }, [])

  return (
    <div
      id="loader"
      className="fixed inset-0 z-[9998] flex items-center justify-center flex-col gap-6"
      style={{ background: '#0e0e0e' }}
      aria-hidden="true"
    >
      <div
        id="loader-logo"
        className="font-display font-extrabold overflow-hidden"
        style={{ fontSize: '4rem', letterSpacing: '-3px', color: '#fff' }}
      >
        <span style={{ display: 'inline-block' }}>G</span>
        <span style={{ display: 'inline-block', color: '#7c3aed' }}>B</span>
      </div>
      <div
        style={{
          width: 200,
          height: 2,
          background: 'rgba(255,255,255,0.15)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <div
          id="loader-bar"
          style={{ height: '100%', width: 0, background: '#fff', borderRadius: 2 }}
        />
      </div> 
    </div>
  )
}