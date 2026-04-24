const stats = [
  { num: '50', suffix: '+', label: 'Projects shipped' },
  { num: '6', suffix: 'yr', label: 'Of building products' },
  { num: '4', suffix: 'x', label: 'Average performance lift' },
  { num: '98', suffix: '%', label: 'Client satisfaction' },
]

export default function Stats() {
  return (
    <div
      id="stats"
      className="stats-grid px-8 py-12 grid gap-4"
      style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="stat-card gsap-hidden rounded-[20px] p-8 text-center transition-transform duration-300 hover:-translate-y-1"
          style={{ background: '#141414', color: '#fff' }}
        >
          <div
            className="font-display font-extrabold leading-none text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
          >
            {stat.num}
            <span style={{ color: '#2b2bff' }}>{stat.suffix}</span>
          </div>
          <div className="text-[0.82rem] text-[#999] mt-2">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
