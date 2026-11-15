// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import { ACADEMY_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title: {
    default: `${ACADEMY_CONFIG.name} | Dance & Music Academy`,
    template: `%s | ${ACADEMY_CONFIG.name}`,
  },
  description:
    'Sankara Kayika Kalamandalam — A premier dance and music academy offering 23 programmes including 16 dance forms and 7 musical instruments. Rooted in Indian classical tradition.',
  keywords: [
    'dance academy',
    'music academy',
    'Bharatanatyam',
    'Kathakali',
    'Mohiniyattam',
    'classical dance',
    'Kerala',
    'Indian dance',
    'Veena',
    'Sitar',
    'music lessons',
    'Sankara Kayika Kalamandalam',
  ],
  openGraph: {
    title: `${ACADEMY_CONFIG.name} | Dance & Music Academy`,
    description:
      'Experience the timeless beauty of dance and music at Sankara Kayika Kalamandalam.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ACADEMY_CONFIG.name}`,
    description: 'Where Tradition Meets Expression.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
