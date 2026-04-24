import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GreyBath – Crafted with Care. Bold in execution. Built to last.',
  description:
    'A modern Mumbai-based tech studio delivering enterprise websites, custom portals, and SEO-led growth—engineered for accessibility, security, and scale.',
  keywords: ['web design', 'development', 'UI/UX', 'branding', 'Mumbai', 'India'],
  openGraph: {
    title: 'GreyBath Technology',
    description: 'Crafted with Care. Bold in execution. Built to last.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
