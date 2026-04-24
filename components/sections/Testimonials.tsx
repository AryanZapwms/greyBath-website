'use client'

import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote:
      'A seamless B2B experience—faster, cleaner, and easier for our partners. GreyBath delivered on time and with real attention to detail. The new portal reflects exactly what our brand stands for.',
    name: 'Sanjeev Batra',
    role: 'Managing Director',
    company: 'Asianplastowares',
  },
  {
    quote:
      'GreyBath transformed our outdated website into a high-converting marketing machine. Our organic traffic doubled within three months of launch. The team really understands performance and SEO.',
    name: 'Priya Mehta',
    role: 'Head of Marketing',
    company: 'VentureScale',
  },
  {
    quote:
      'The design system they built for us is extraordinary. Every component is pixel-perfect, accessible, and documented beautifully. Our engineering team finally has a single source of truth.',
    name: 'Arjun Kapoor',
    role: 'CTO',
    company: 'FinStack',
  },
  {
    quote:
      'From branding to launch in six weeks—they nailed our identity on the first round. The Figma handoff was so thorough our developers had zero questions. Rare.',
    name: 'Rhea Singhania',
    role: 'Founder',
    company: 'GrowthLeaf',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const goTo = async (index: number) => {
    if (animating || index === active) return
    setAnimating(true)

    const { gsap } = await import('gsap')

    // Slide out current
    await new Promise<void>((resolve) => {
      gsap.to(cardRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: resolve,
      })
    })

    setActive(index)

    // Slide in next
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.45,
        ease: 'power3.out',
        onComplete: () => setAnimating(false),
      }
    )
  }

  // Auto-rotate every 4s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % testimonials.length
        goTo(next)
        return prev // actual state update handled in goTo
      })
    }, 4000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const t = testimonials[active]

  return (
    <section id="testimonials" className="px-8 py-16">
      <div
        className="test-layout grid gap-8 items-start"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Intro */}
        <div className="gsap-hidden">
          <h2
            className="font-display font-extrabold leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#0e0e0e' }}
          >
            What our clients say
          </h2>
          <p className="text-[0.95rem] leading-[1.75] text-[#999] max-w-[340px] mb-8">
            We&apos;re more than just executors — we&apos;re your creative partners. Don&apos;t just
            take our word for it.
          </p>

          {/* Dot navigation */}
          <div className="flex gap-3 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (intervalRef.current) clearInterval(intervalRef.current)
                  goTo(i)
                }}
                aria-label={`Testimonial ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background: i === active ? '#2b2bff' : 'rgba(14,14,14,0.2)',
                  cursor: 'pointer',
                  border: 'none',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Animated card */}
        <div
          ref={cardRef}
          className="bg-white rounded-[24px] p-10 relative"
          style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.07)' }}
        >
          <span
            className="font-display font-extrabold text-[#2b2bff] block mb-2"
            style={{ fontSize: '5rem', lineHeight: 0.7, opacity: 0.2 }}
            aria-hidden="true"
          >
            "
          </span>
          <blockquote
            className="text-[1.05rem] leading-[1.75] mb-7"
            style={{ color: '#0e0e0e' }}
          >
            {t.quote}
          </blockquote>
          <div>
            <strong className="block font-bold" style={{ color: '#0e0e0e' }}>
              {t.name}
            </strong>
            <span className="text-[0.85rem] text-[#999]">
              {t.role} at{' '}
              <span style={{ color: '#2b2bff' }}>{t.company}</span>
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="absolute bottom-0 left-0 h-[3px] rounded-b-[24px] overflow-hidden"
            style={{ width: '100%', background: 'rgba(14,14,14,0.06)' }}
          >
            <div
              key={active}
              style={{
                height: '100%',
                background: '#2b2bff',
                borderRadius: '0 0 0 24px',
                animation: 'progressFill 4s linear forwards',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}