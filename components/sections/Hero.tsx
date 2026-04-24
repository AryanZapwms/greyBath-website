import GradientText from "@/components/GradientText"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end pb-24 px-10 relative overflow-hidden"
    >
      {/* Gradient blobs */}
      <div
        className="blob blob-purple absolute rounded-full pointer-events-none will-change-transform blob-float-1"
        style={{
          width: 380,
          height: 380,
          background: 'radial-gradient(circle, #a78bfa66 0%, #6d28d922 60%, transparent 100%)',
          filter: 'blur(70px)',
          top: '15%',
          left: '2%',
        }}
        aria-hidden="true"
      />
      <div
        className="blob blob-silver absolute rounded-full pointer-events-none will-change-transform blob-float-2"
        style={{
          width: 280,
          height: 280,
          background: 'radial-gradient(circle, #ccccccaa 0%, #99999933 60%, transparent 100%)',
          filter: 'blur(70px)',
          top: '8%',
          right: '6%',
        }}
        aria-hidden="true"
      />
      <div
        className="blob blob-blue absolute rounded-full pointer-events-none will-change-transform blob-float-3"
        style={{
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, #2b2bff33 0%, transparent 70%)',
          filter: 'blur(70px)',
          bottom: '20%',
          right: '15%',
        }}
        aria-hidden="true"
      />

      <p
        className="hero-eyebrow text-[0.85rem] tracking-[0.12em] uppercase text-[#999] mb-6"
      >
        Mumbai — India · Est. 2020
      </p>

     <h1
  className="hero-headline font-display font-extrabold leading-none"
  style={{
    fontSize: "clamp(4rem, 10vw, 9rem)",
    letterSpacing: "-3px",
  }}
>
  <span className="line block overflow-hidden">
    <GradientText
      colors={["#5227FF", "#e63ae0", "#eb9494", "#71f769", "#5227FF"]}
      animationSpeed={13}
      showBorder={false}
       className="font-black"
    >
      Crafted with Care.
    </GradientText>
  </span>

  <span className="line block overflow-hidden">
    <GradientText
      colors={["#5227FF", "#e63ae0", "#eb9494", "#71f769", "#5227FF"]}
      animationSpeed={13}
      showBorder={false}
       className="font-black"
    >
      Bold in execution.
    </GradientText>
  </span>

  <span className="line block overflow-hidden">
    <GradientText
      colors={["#5227FF", "#e63ae0", "#eb9494", "#71f769", "#5227FF"]}
      animationSpeed={13}
      showBorder={false}
       className="font-black"
    >
      Built to last.
    </GradientText>
  </span>
</h1>
    </section>
  )
}