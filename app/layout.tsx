import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'SylFlora Industries Ltd — Premium Hygiene Products',
  description:
    'SylFlora Industries Ltd is Nigeria\'s leading manufacturer of premium tissue and hygiene products. Delivering trusted hygiene solutions through manufacturing excellence, innovation, and nationwide distribution.',
  keywords: ['tissue paper', 'hygiene products', 'Nigeria manufacturer', 'SylFlora', 'toilet tissue', 'facial tissue', 'baby diapers'],
  authors: [{ name: 'SylFlora Industries Ltd' }],
  openGraph: {
    title: 'SylFlora Industries Ltd — Premium Hygiene Products',
    description: 'Nurturing a Hygienic Generation. Premium tissue and hygiene manufacturing from Nigeria.',
    type: 'website',
    url: 'https://sylflora.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#FAFAF8',
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
