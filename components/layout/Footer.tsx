import Link from 'next/link'

const navLinks = [
  { label: '→ Home', href: '#' },
  { label: '→ About us', href: '#about' },
  { label: '→ FAQ', href: '#' },
  { label: '→ Contact', href: 'mailto:contact@greybath.com' },
]

const serviceLinks = [
  'UI/UX Design',
  'Websites & Web Apps',
  'eCommerce',
  'Brand Identity',
  'Mobile Apps (iOS / Android)',
  'SaaS Product Design',
  'SEO & Technical Optimization',
  'Cloud/DevOps & Hosting',
  'ERP/CRM & Portals',
]

export default function Footer() {
  return (
    <footer className="px-8 pt-12 pb-8">
      <div
        className="footer-top-grid grid gap-6 mb-8"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {/* Nav card */}
        <div className="bg-white rounded-[20px] p-8">
          <div
            className="font-display font-extrabold text-[2rem] mb-6"
            style={{ color: '#0e0e0e' }}
          >
            GreyBath
          </div>
          <nav className="f-nav flex flex-col">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services card */}
        <div className="bg-white rounded-[20px] p-8">
          <div className="font-display font-bold text-[1.1rem] mb-4" style={{ color: '#0e0e0e' }}>
            Services
          </div>
          <div className="f-srv flex flex-col">
            {serviceLinks.map((s) => (
              <Link key={s} href="#">
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact card */}
        <div className="bg-white rounded-[20px] p-8">
          <div
            className="border border-[#ddd] rounded-[12px] px-[1.1rem] py-[0.9rem] mb-3 flex items-center gap-[0.6rem] text-[0.9rem] transition-colors hover:border-[#2b2bff]"
            style={{ color: '#0e0e0e' }}
          >
            <span className="text-purple-700 font-bold">+</span>
            <span>contact@greybath.com</span>
          </div>
          <div
            className="border border-[#ddd] rounded-[12px] px-[1.1rem] py-[0.9rem] mb-4 flex items-center gap-[0.6rem] text-[0.9rem] transition-colors hover:border-[#2b2bff]"
            style={{ color: '#0e0e0e' }}
          >
            <span className="text-purple-700 font-bold">+</span>
            <span>+91 8108325237</span>
          </div>

          <div className="mt-4">
            <div className="font-bold mb-1 text-sm" style={{ color: '#0e0e0e' }}>
              Follow us on social
            </div>
            <div className="text-[0.8rem] text-[#999] mb-4">Tips, case studies &amp; product updates.</div>
            <div className="flex gap-[0.6rem]">
              {['in', 'ig', 'f'].map((icon, i) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={['LinkedIn', 'Instagram', 'Facebook'][i]}
                  className="w-[38px] h-[38px] border border-[#2b2bff] rounded-[8px] flex items-center justify-center text-[#2b2bff] text-[0.85rem] font-bold no-underline transition-all duration-200 hover:bg-[#2b2bff] hover:text-white hover:-translate-y-1"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[0.78rem] text-[#999] pt-6 border-t border-black/[0.08]">
        GreyBath Technology © 2026 · All rights reserved.
      </div>
    </footer>
  )
}
