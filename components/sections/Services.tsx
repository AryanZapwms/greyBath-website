interface ServiceCardProps {
  num: string
  title: string
  desc: string
  variant: 'dark' | 'blue'
  col1Heading: string
  col1Items: string[]
  col2Heading: string
  col2Items: string[]
  tags: string[]
}

function ServiceCard({
  num,
  title,
  desc,
  variant,
  col1Heading,
  col1Items,
  col2Heading,
  col2Items,
  tags,
}: ServiceCardProps) {
  const isDark = variant === 'dark'
  return (
    <div
      className={`service-card gsap-hidden rounded-[24px] p-12 mb-6 relative overflow-hidden will-change-transform ${
        isDark ? 'card-dark' : 'card-blue'
      }`}
      style={{
        background: isDark ? '#141414' : '#2b2bff',
        color: isDark ? '#fff' : '#0e0e0e',
        transformOrigin: 'center bottom',
      }}
    >
      {/* Large number watermark */}
      <div
        className="absolute top-10 right-10 font-display font-extrabold pointer-events-none select-none"
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          letterSpacing: '-3px',
          color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        }}
        aria-hidden="true"
      >
        {num}
      </div>

      <h3
        className="font-display font-extrabold leading-[1.05] mb-5"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
      >
        {title}
      </h3>
      <p className="text-[1rem] leading-[1.7] max-w-[680px] opacity-70 mb-8">{desc}</p>

      <div
        className="card-grid-2col grid gap-8 mb-8"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        <div>
          <div className="font-bold mb-[0.6rem] text-[0.95rem]">{col1Heading}</div>
          <ul className="list-none">
            {col1Items.map((item) => (
              <li key={item} className="text-[0.88rem] leading-[2] opacity-75">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold mb-[0.6rem] text-[0.95rem]">{col2Heading}</div>
          <ul className="list-none">
            {col2Items.map((item) => (
              <li key={item} className="text-[0.88rem] leading-[2] opacity-75">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag" style={{ color: 'currentColor' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

const services: ServiceCardProps[] = [
  {
    num: '/01',
    title: 'UI/UX Design',
    desc: 'Human-centered product design that improves conversion, retention, and task success. We research, prototype, test, and ship accessible design systems that scale across platforms.',
    variant: 'dark',
    col1Heading: 'Deliverables',
    col1Items: [
      'User research (interviews, surveys, JTBD)',
      'Wireframes, high-fidelity prototypes, motion specs',
      'Design system & token library, components',
      'Developer handoff: redlines, variants, docs',
    ],
    col2Heading: 'Outcomes',
    col2Items: [
      'Increased task completion & reduced time-to-value',
      'Consistent brand & faster feature delivery',
      'WCAG 2.2 AA accessibility compliance',
      'Lower design & engineering rework',
    ],
    tags: [
      'UI/UX',
      'Prototyping',
      'Wireframes',
      'User research',
      'Usability testing',
      'Interaction design',
      'Motion',
      'Figma/FigJam',
    ],
  },
  {
    num: '/02',
    title: 'Websites & Web Apps',
    desc: 'Fast, SEO-ready marketing sites and web applications built with modern stacks. SSR/SSG/ISR for performance, accessibility by default, and clean, maintainable code.',
    variant: 'blue',
    col1Heading: 'What we build',
    col1Items: [
      'Corporate & marketing websites, landing pages',
      'Custom dashboards, portals, and internal tools',
      'Headless CMS integrations & multilingual sites',
      'PWA/SPA with offline support & app-like UX',
    ],
    col2Heading: 'Engineering practices',
    col2Items: [
      'Type-safe codebases, linting, tests, CI/CD',
      'Core Web Vitals optimization (LCP/INP/CLS)',
      'Image/CDN optimization, caching & edge rendering',
      'Security hardening, privacy & consent management',
    ],
    tags: ['Next.js', 'React', 'Vue', 'Angular', 'Node.js', 'Laravel', 'PHP', 'TypeScript', 'SCSS'],
  },
  {
    num: '/03',
    title: 'eCommerce',
    desc: 'Full-stack ecommerce platforms built for growth: Shopify, WooCommerce, or custom headless stacks. Conversion-optimized UX, performance at scale, and seamless payment integrations.',
    variant: 'dark',
    col1Heading: 'Platforms',
    col1Items: [
      'Shopify Plus, custom themes & app dev',
      'WooCommerce, headless + API-first builds',
      'Custom order & inventory management',
      'B2B portals, wholesale & multi-currency',
    ],
    col2Heading: 'Integrations',
    col2Items: [
      'Razorpay, Stripe, PayPal, PhonePe',
      'ERP/WMS sync, logistics & shipping APIs',
      'CRM & email automation, loyalty programs',
      'Google Analytics 4, Meta Pixel, GTM',
    ],
    tags: ['Shopify', 'WooCommerce', 'Headless', 'Razorpay', 'Stripe', 'Performance'],
  },
  {
    num: '/04',
    title: 'Brand Identity',
    desc: 'Distinctive brand systems that scale: logos, typography, colors, voice, and guidelines. Built to perform across web, print, product, and social.',
    variant: 'dark',
    col1Heading: 'Deliverables',
    col1Items: [
      'Naming, positioning, and messaging',
      'Logo suites, iconography, color & type systems',
      'Brand guidelines & design kits',
      'Marketing & sales collateral, mockups',
    ],
    col2Heading: 'Use cases',
    col2Items: [
      'Website & product UI, decks & one-pagers',
      'Social media, email, print & packaging',
      'Event assets & environmental graphics',
    ],
    tags: [
      'Logo',
      'Visual identity',
      'Brand voice',
      'Guidelines',
      'Typography',
      'Color systems',
      'Iconography',
      'Templates',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="px-8 pb-12">
      {services.map((service) => (
        <ServiceCard key={service.num} {...service} />
      ))}
    </section>
  )
}
