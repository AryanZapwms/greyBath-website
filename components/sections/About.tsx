'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const words = container.querySelectorAll('.word')

    gsap.fromTo(
      words,
      { color: '#b0b0b0', opacity: 0.3 },
      {
        color: '#0e0e0e',
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-20 px-10 max-w-[1100px] mx-auto"
    >
      <p className="font-display font-bold leading-[1.3] text-[clamp(2.4rem,5vw,3.2rem)]">
        {[
          "A","modern","Mumbai","based","tech","studio","delivering","enterprise",
          "websites,","custom","portals,","and","SEO-led","growth—engineered",
          "for","accessibility,","security,","and","scale.",
          "Trusted","by","manufacturing,","FMCG,","banking,","and","high-growth","brands."
        ].map((word, i) => (
          <span key={i} className="word mr-3 inline-block">
            {word}
          </span>
        ))}
      </p>
    </section>
  )
}