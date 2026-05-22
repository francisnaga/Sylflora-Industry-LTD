'use client'

import { Phone, Mail, Globe, MapPin } from 'lucide-react'

const LOGO_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f7da5756-3a32-4e89-baa1-7723073e12b0.jpeg'

const navGroups = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Manufacturing', href: '#manufacturing' },
      { label: 'Industry Presence', href: '#presence' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Toilet Tissue', href: '#products' },
      { label: 'Facial Tissue', href: '#products' },
      { label: 'Handkerchiefs', href: '#products' },
      { label: 'Baby Diapers', href: '#products' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Become a Distributor', href: '#distributor' },
      { label: 'WhatsApp', href: 'https://wa.me/2347036606036' },
      { label: 'www.sylflora.com', href: 'https://www.sylflora.com' },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: '#080B10', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 xl:px-12 py-16 md:py-20">

        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand col — spans 2 on lg */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <div className="w-11 h-11 rounded-full overflow-hidden" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.1)' }}>
                <img
                  src={LOGO_URL}
                  alt="SylFlora Industries logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p
                  className="text-[18px] font-black leading-tight"
                  style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
                >
                  SylFlora
                </p>
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#4B5563' }}>
                  Industries Ltd
                </p>
              </div>
            </a>

            <p className="text-[14px] leading-relaxed max-w-[260px]" style={{ color: '#4B5563' }}>
              Nurturing a Hygienic Generation through premium tissue and hygiene manufacturing since 2014.
            </p>

            {/* Quick contacts */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+2347036606036"
                className="flex items-center gap-2.5 text-[13px] transition-colors"
                style={{ color: '#6B7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
              >
                <Phone size={13} />
                +234 703 660 6036
              </a>
              <a
                href="mailto:info@sylflora.com"
                className="flex items-center gap-2.5 text-[13px] transition-colors"
                style={{ color: '#6B7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
              >
                <Mail size={13} />
                info@sylflora.com
              </a>
              <a
                href="https://www.sylflora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] transition-colors"
                style={{ color: '#6B7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
              >
                <Globe size={13} />
                www.sylflora.com
              </a>
            </div>
          </div>

          {/* Nav link groups */}
          {navGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-5">
              <p
                className="text-[11px] font-bold tracking-[0.12em] uppercase"
                style={{ color: '#3FAF75' }}
              >
                {group.title}
              </p>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[13px] transition-colors"
                      style={{ color: '#4B5563' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Address bar */}
        <div
          className="flex flex-col sm:flex-row gap-6 py-8 mb-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-start gap-2.5">
            <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: '#3FAF75' }} />
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: '#374151' }}>Factory</p>
              <p className="text-[12px] leading-relaxed" style={{ color: '#4B5563' }}>
                Phase II, Block 39 Plot 10, Unique Estate Nkwelle Ogidi, Idemili North LGA, Anambra State
              </p>
            </div>
          </div>
          <div
            className="w-px hidden sm:block self-stretch"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          />
          <div className="flex items-start gap-2.5">
            <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: '#2F80ED' }} />
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: '#374151' }}>Admin Office</p>
              <p className="text-[12px] leading-relaxed" style={{ color: '#4B5563' }}>
                Plot 3, Surulere Industrial Road, Off Acme, Ikeja, Lagos State
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px]" style={{ color: '#374151' }}>
            &copy; {currentYear} SylFlora Industries Ltd. All rights reserved.
          </p>
          <p className="text-[12px]" style={{ color: '#374151' }}>
            Exclusively marketed in West Africa by{' '}
            <span className="font-semibold" style={{ color: '#3FAF75' }}>
              Doda Troupe Int&apos;l Ltd
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
