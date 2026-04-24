'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      }
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-[#0e0e0e] text-white px-6 text-center"
    >
      {/* Big 404 */}
      <h1 className="text-[clamp(5rem,12vw,10rem)] font-extrabold leading-none">
        404
      </h1>

      {/* Message */}
      <p className="text-lg text-white/70 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform"
      >
        Go back home
      </Link>

      {/* Subtle glow / decoration */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />
    </div>
  )
}