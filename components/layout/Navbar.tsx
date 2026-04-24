'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useMagnetic } from '@/hooks/useMagnetic'

function MagneticBtn({ children }) {
  const wrapRef = useMagnetic()
  return <div ref={wrapRef}>{children}</div>
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const panelRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    if (!panelRef.current) return

    if (open) {
      gsap.to(panelRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      })

      gsap.to(linksRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        delay: 0.15,
        duration: 0.4,
      })
    } else {
      gsap.to(linksRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.2,
      })

      gsap.to(panelRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
      })
    }
  }, [open])

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-10 py-[1.4rem]">

      {/* LOGO */}
      <Link
        href="/"
        className="font-display font-extrabold text-[1.75rem] text-purple-700"
      >
        G<span className="text-[#0e0e0e]">B</span>
      </Link>

      <div className="flex items-center gap-4 relative">

        {/* START BUTTON */}
        <MagneticBtn>
          <button className="btn-outline ">
            Start a project →
          </button>
        </MagneticBtn>

        {/* TOGGLE BUTTON (always fixed circle) */}
        <MagneticBtn>
          <button
            onClick={() => setOpen(!open)}
            className="w-11 h-11 rounded-full bg-[#0e0e0e] flex flex-col items-center justify-center gap-[5px] relative z-50"
          >
            <span className="w-[18px] h-[1.5px] bg-white" />
            <span className="w-[18px] h-[1.5px] bg-white" />
          </button>
        </MagneticBtn>

        {/* EXPANDING MENU PANEL */}
        <div
          ref={panelRef}
          className="absolute right-0 top-0 mt-14 w-[220px] bg-[#0e0e0e] text-white rounded-2xl p-6 origin-top-right scale-0 opacity-0 overflow-hidden"
        >

          <div
            ref={linksRef}
            className="flex flex-col gap-3 opacity-0"
          >
            <Link href="/" className="text-sm hover:opacity-70">
              Home
            </Link>
            <Link href="/work" className="text-sm hover:opacity-70">
              Work
            </Link>
            <Link href="/about" className="text-sm hover:opacity-70">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:opacity-70">
              Contact
            </Link>
          </div>

        </div>

      </div>
    </nav>
  )
}