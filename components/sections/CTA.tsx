'use client'

import { useMagnetic } from '@/hooks/useMagnetic'

export default function CTA() {
  const wrapRef = useMagnetic()

  return (
    <section
      id="cta"
      className="gsap-hidden mx-8 mb-12 rounded-[28px] py-20 px-8 text-center relative overflow-hidden"
      style={{ background: '#141414' }}
    >
      {/* Glow blob */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, #2b2bff22 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />

      <h2
        className="font-display font-extrabold text-white leading-[1.05] mb-8 relative z-10"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          letterSpacing: '-2px',
        }}
      >
        Ready to build
        <br />
        something great?
      </h2>

      <div ref={wrapRef} className="mag-wrap inline-block relative z-10">
        <a href="mailto:contact@greybath.com" className="btn-primary">
          <span>Start a project →</span>
        </a>
      </div>
    </section>
  )
}
