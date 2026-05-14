import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Nav from '@/components/Nav'
import Ticker from '@/components/Ticker'
import EasterEgg from '@/components/EasterEgg'
import { config } from '@/data/config'

export const metadata: Metadata = {
  title: config.name.lower,
  description: 'Product Designer. Background in Human-Computer Interaction (MHCI+D @ UW) and B2B Product Design.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: `${config.name.display} Portfolio`,
    description: 'Product Designer. Background in Human-Computer Interaction.',
    url: 'https://judyhu.me',
    siteName: `${config.name.display} Portfolio`,
    type: 'website',
    images: [{ url: '/og.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${config.name.display} Portfolio`,
    description: 'Product Designer. Background in Human-Computer Interaction.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Nav />
        <Ticker />
        <EasterEgg />
        {children}
      </body>
    </html>
  )
}
