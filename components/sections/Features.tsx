const DashMock = ({ extra = false }: { extra?: boolean }) => (
  <div
    className="bg-white rounded-[12px] p-[0.8rem] w-full mt-4"
    style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
    aria-hidden="true"
  >
    <div className="flex gap-2 mb-2">
      <div className="flex-1 rounded-[8px] h-[38px] bg-yellow-400" />
      <div className="flex-1 rounded-[8px] h-[38px] bg-emerald-400" />
      <div className="flex-1 rounded-[8px] h-[38px] bg-blue-400" />
      {!extra && <div className="flex-1 rounded-[8px] h-[38px] bg-red-400" />}
    </div>
    <div className="flex flex-col gap-1">
      <div className="h-[7px] rounded-[4px] bg-[#2b2bff]" style={{ width: '80%' }} />
      <div className="h-[7px] rounded-[4px] bg-[#6d28d9]" style={{ width: '60%' }} />
      <div className="h-[7px] rounded-[4px] bg-emerald-400" style={{ width: '40%' }} />
    </div>
    {extra && (
      <div className="flex gap-2 mt-[0.4rem]">
        <div className="flex-1 rounded-[8px] h-[38px] bg-red-400" />
        <div className="flex-1 rounded-[8px] h-[38px] bg-emerald-400" />
        <div className="flex-1 rounded-[8px] h-[38px] bg-yellow-400" />
      </div>
    )}
  </div>
)

const icons = [
  { icon: '⚙', label: 'Integrations' },
  { icon: '🗄', label: 'Data' },
  { icon: '🤖', label: 'Automation' },
  { icon: '⚡', label: 'Workflows' },
]

const BTag = ({ children }: { children: string }) => (
  <span
    className="px-3 py-[0.2rem] rounded-[999px] text-[0.72rem] border border-current opacity-70"
    style={{ borderWidth: 1.5 }}
  >
    {children}
  </span>
)

export default function Features() {
  return (
    <section id="features" className="px-8 pt-8 pb-16">
      <p className="text-[0.78rem] tracking-[0.14em] uppercase text-[#999] mb-6 px-1">
        Why teams choose us
      </p>

      <div
        className="bento-grid grid gap-4"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'min-content' }}
      >
        {/* Card 1: Human-centered design */}
        <div
          className="b-card gsap-hidden rounded-[20px] p-8 min-h-[240px] relative overflow-hidden transition-transform duration-[400ms] hover:-translate-y-[6px]"
          style={{ background: '#e8e4de' }}
        >
          <div className="flex flex-wrap gap-[0.4rem] mb-4">
            {['Research', 'Accessible', 'Usability'].map((t) => <BTag key={t}>{t}</BTag>)}
          </div>
          <div className="font-display font-extrabold leading-[1.15] mb-[0.6rem]" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#0e0e0e' }}>
            Human-centered design
          </div>
          <div className="text-[0.88rem] leading-[1.65] opacity-70" style={{ color: '#0e0e0e' }}>
            Design around real users—flows, content, and micro-interactions that boost conversion and delight.
          </div>
          <DashMock />
        </div>

        {/* Card 2: Performance */}
        <div
          className="b-card gsap-hidden rounded-[20px] p-8 min-h-[240px] relative overflow-hidden transition-transform duration-[400ms] hover:-translate-y-[6px]"
          style={{ background: '#2b2bff', color: '#0e0e0e' }}
        >
          <div className="flex flex-wrap gap-[0.4rem] mb-4">
            {['Core Web Vitals', 'SEO', 'Speed'].map((t) => <BTag key={t}>{t}</BTag>)}
          </div>
          <div className="font-display font-extrabold leading-[1.15] mb-[0.6rem]" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}>
            Performance-first engineering
          </div>
          <div className="text-[0.88rem] leading-[1.65] opacity-70">
            Ship lightning-fast experiences tuned for LCP, CLS, and INP. Because speed sells.
          </div>
        </div>


        


        {/* Card 3: Rapid prototyping */}
        <div
          className="b-card gsap-hidden rounded-[20px] p-8 min-h-[240px] border-2 relative overflow-hidden transition-transform duration-[400ms] hover:-translate-y-[6px]"
          style={{ background: '#141414', color: '#fff' }}
        >
          <div className="flex flex-wrap gap-[0.4rem] mb-4">
            {['Clickable', 'User tests', 'Iteration'].map((t) => <BTag key={t}>{t}</BTag>)}
          </div>
          <div className="font-display font-extrabold leading-[1.15] mb-[0.6rem]" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}>
            Rapid prototyping
          </div>
          <div className="text-[0.88rem] leading-[1.65] opacity-70">
            Validate ideas before a single line of production code is written. Faster cycles, less rework.
          </div>
        </div>

        {/* Card 4: End-to-end ownership (span 2) */}
        <div
          className="b-card gsap-hidden bento-span2 rounded-[20px] p-8 min-h-[240px] relative overflow-hidden transition-transform duration-[400ms] hover:-translate-y-[6px]"
          style={{ background: '#5b21b6', color: '#fff', gridColumn: 'span 2' }}
        >
          <div className="font-display font-extrabold leading-[1.15] mb-[0.6rem]" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}>
            End-to-end ownership
          </div>
          <div className="text-[0.88rem] leading-[1.65] opacity-70 mb-6">
            From first wireframe to production deploy—we own the full stack, design system, and all the handoffs. One team. Total accountability.
          </div>
          <div className="flex gap-[1.2rem] flex-wrap mt-6">
            {icons.map(({ icon, label }) => (
              <div key={label} className="text-center text-[0.78rem]">
                <div
                  className="w-[52px] h-[52px] rounded-full border mx-auto mb-[0.4rem] flex items-center justify-center text-[1.3rem] transition-all duration-200 hover:border-[#2b2bff] hover:bg-[#2b2bff]"
                  style={{ border: '1.5px solid rgba(14,14,14,0.2)' }}
                >
                  {icon}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 5: Connect your stack (span 3) */}
        <div
          className="b-card gsap-hidden bento-span3 rounded-[20px] p-8 min-h-[240px] relative overflow-hidden transition-transform duration-[400ms] hover:-translate-y-[6px]"
          style={{ background: '#e8e4de', gridColumn: 'span 3' }}
        >
          <div className="flex gap-8 items-center flex-wrap">
            <div className="flex-1" style={{ minWidth: 220 }}>
              <div
                className="font-display font-extrabold leading-[1.15] mb-[0.6rem]"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#0e0e0e' }}
              >
                Connect your stack
              </div>
              <div className="text-[0.88rem] leading-[1.65] opacity-70" style={{ color: '#0e0e0e' }}>
                ERP/CRM, payments, messaging, analytics—clean APIs and event-driven workflows that automate busywork and surface the signal.
              </div>
            </div>
            <div className="flex-[2]" style={{ minWidth: 240 }}>
              <DashMock extra />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
