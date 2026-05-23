import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'SylFlora Industries Ltd — Nigeria\'s Trusted Hygiene Manufacturer',
  description:
    'SylFlora Industries Ltd is Nigeria\'s leading manufacturer of tissue paper, serviettes, facial tissues, and baby diapers. Large-scale production, nationwide distribution across 36 states and West Africa.',
  keywords: ['tissue paper', 'hygiene products', 'Nigeria manufacturer', 'SylFlora', 'toilet tissue', 'facial tissue', 'baby diapers', 'serviettes', 'FMCG Nigeria', 'Anambra manufacturer'],
  authors: [{ name: 'SylFlora Industries Ltd' }],
  openGraph: {
    title: 'SylFlora Industries Ltd — Nigeria\'s Trusted Hygiene Manufacturer',
    description: 'Large-scale tissue and hygiene manufacturing. Nationwide distribution. Built for Nigeria.',
    type: 'website',
    url: 'https://sylflora.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B1120',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
