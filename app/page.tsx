'use client'

import dynamic from 'next/dynamic'
import Loader from '@/components/ui/Loader'
import Cursor from '@/components/ui/Cursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Ticker from '@/components/sections/Ticker'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Features from '@/components/sections/Features'
import Strip from '@/components/sections/Strip'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/ui/WhatsAppFAB'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Features />
        <Strip />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </SmoothScrollProvider>
  )
}
