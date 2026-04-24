'use client'

import { FaServer, FaMobileAlt, FaSearch, FaChartBar } from 'react-icons/fa'

const strips = [
  {
    title: 'Headless CMS',
    desc: 'Flexible, API-first architecture for modern websites and digital platforms.',
    bg: '#2b2bff',
    icon: FaServer,
  },
  {
    title: 'Mobile & Native Apps',
    desc: 'High-performance mobile applications built for scale and user experience.',
    bg: '#111111',
    icon: FaMobileAlt,
  },
  {
    title: 'SEO & Growth Systems',
    desc: 'Technical SEO, performance optimization, and growth-focused engineering.',
    bg: '#5b21b6',
    icon: FaSearch,
  },
  {
    title: 'CRMs',
    desc: 'Technical SEO, performance optimization, and growth-focused engineering.',
    bg: '#d38506',
    icon: FaChartBar,
  },
]

export default function Strip() {
  return (
    <section className="w-full py-10 px-6">
      <div className="grid gap-6 md:grid-cols-4 max-w-8xl mx-auto">

        {strips.map((item, i) => {
          const Icon = item.icon

          return (
            <div
              key={i}
              className="group relative rounded-3xl p-8 h-[380px] flex flex-col justify-between text-white overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{ background: item.bg }}
            >

              {/* subtle glow */}
              <div className="absolute inset-0 opacity-20 bg-white/10 blur-2xl group-hover:opacity-30 transition" />

              {/* ICON */}
              <div className="text-3xl opacity-90">
                <Icon />
              </div>

              {/* TITLE */}
              <div>
                <h3 className="font-display font-bold text-[1.5rem] leading-[1.2]">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}