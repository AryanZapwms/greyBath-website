import { useEffect } from 'react'

export function useGSAPAnimations() {
  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // ── Scroll-triggered generic reveals ──
        gsap.utils.toArray<HTMLElement>('.gsap-hidden').forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          })
        })

        // ── Service cards scale-in on scroll (scrub) ──
        gsap.utils.toArray<HTMLElement>('.service-card').forEach((card) => {
          gsap.fromTo(
            card,
            { scale: 0.96 },
            {
              scale: 1,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 40%',
                scrub: true,
              },
            }
          )
        })

        // ── Service card hover ──
        gsap.utils.toArray<HTMLElement>('.service-card').forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.015, duration: 0.4, ease: 'power2.out' })
          })
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
          })
        })

        // ── Bento cards staggered entrance ──
        gsap.utils.toArray<HTMLElement>('.b-card').forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.08,
            scrollTrigger: {
              trigger: '#features',
              start: 'top 80%',
            },
          })
        })

        // ── Stats counter cards ──
        gsap.utils.toArray<HTMLElement>('.stat-card').forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: '#stats',
              start: 'top 85%',
            },
          })
        })

        // ── Strip cards parallax entrance ──
        gsap.utils.toArray<HTMLElement>('.strip-card').forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            x: i % 2 === 0 ? -40 : 40,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: { trigger: '#strip', start: 'top 80%' },
          })
        })

        // ── About text reveal ──
        gsap.from('.about-text', {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '#about', start: 'top 80%' },
        })

        // ── Blob mouse parallax ──
        const onMouseMove = (e: MouseEvent) => {
          const { innerWidth: W, innerHeight: H } = window
          const dx = (e.clientX / W - 0.5) * 30
          const dy = (e.clientY / H - 0.5) * 20
          gsap.to('.blob-purple', { x: dx * 1.2, y: dy, duration: 2, ease: 'power1.out' })
          gsap.to('.blob-silver', { x: -dx * 0.8, y: -dy * 0.6, duration: 2.5, ease: 'power1.out' })
          gsap.to('.blob-blue', { x: dx * 0.5, y: dy * 0.5, duration: 3, ease: 'power1.out' })
        }
        document.addEventListener('mousemove', onMouseMove)

        // ── NAV glassmorphism on scroll ──
        ScrollTrigger.create({
          start: 'top -80',
          onUpdate: (self) => {
            const nav = document.getElementById('main-nav')
            if (!nav) return
            if (self.progress > 0) {
              nav.style.background = 'rgba(240,237,232,0.88)'
              nav.style.backdropFilter = 'blur(16px)'
            } else {
              nav.style.background = 'transparent'
              nav.style.backdropFilter = 'none'
            }
          },
        })

        // ── Scroll progress bar ──
        gsap.to('#progress-bar', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        })
      })
    }

    init()

    return () => {
      ctx?.revert()
    }
  }, [])
}
