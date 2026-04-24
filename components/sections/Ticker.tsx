'use client'

import { useEffect, useRef } from 'react'

const tickerItems = [
  'Design Systems',
  'Web Engineering',
  'SaaS Platforms',
  'MVP to Scale',
  'Brand Identity',
  'eCommerce',
  'Mobile Apps',
]

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" className="w-[14px] h-[14px] fill-[#2b2bff]" aria-hidden="true">
    <path d="M13.3 4.3L6 11.6 2.7 8.3 1.3 9.7l4.7 4.7 8.7-8.7z" />
  </svg>
)

export default function Ticker() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Duplicate items for seamless loop
    if (trackRef.current) {
      trackRef.current.innerHTML += trackRef.current.innerHTML
    }
  }, [])

  return (
    <div className="px-10 py-14">
      <div
        className="rounded-[999px] py-4 overflow-hidden relative"
        style={{ background: '#2b2bff' }}
      >
        <div
          ref={trackRef}
          id="ticker"
          className="ticker-track flex gap-0 w-max"
          aria-label="Services ticker"
        >
          {tickerItems.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-4 px-8 font-display font-bold text-white whitespace-nowrap"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}
            >
              <div className="w-[26px] h-[26px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <CheckIcon />
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
