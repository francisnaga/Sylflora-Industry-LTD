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
    <footer style={{ background: '#080B10', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-24">

        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-14 mb-20">

          {/* Brand col — spans 2 on lg */}
          <div className="lg:col-span-2 flex flex-col gap-7">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-4 group w-fit">
              <div 
                className="w-12 h-12 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105"
                style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08)' }}
              >
                <img
                  src={LOGO_URL}
                  alt="SylFlora Industries logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p
                  className="text-[20px] font-black leading-tight"
                  style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
                >
                  SylFlora
                </p>
                <p className="text-[10px] font-semibold tracking-[0.12em] uppercase" style={{ color: '#4B5563' }}>
                  Industries Ltd
                </p>
              </div>
            </a>

            <p className="text-[14px] leading-relaxed max-w-[280px]" style={{ color: '#4B5563' }}>
              Nurturing a Hygienic Generation through premium tissue and hygiene manufacturing since 2014.
            </p>

            {/* Quick contacts */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+2347036606036"
                className="flex items-center gap-3 text-[13px] transition-colors duration-300"
                style={{ color: '#6B7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
              >
                <Phone size={14} />
                +234 703 660 6036
              </a>
              <a
                href="mailto:info@sylflora.com"
                className="flex items-center gap-3 text-[13px] transition-colors duration-300"
                style={{ color: '#6B7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
              >
                <Mail size={14} />
                info@sylflora.com
              </a>
              <a
                href="https://www.sylflora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[13px] transition-colors duration-300"
                style={{ color: '#6B7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
              >
                <Globe size={14} />
                www.sylflora.com
              </a>
            </div>
          </div>

          {/* Nav link groups */}
          {navGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <p
                className="text-[11px] font-bold tracking-[0.15em] uppercase"
                style={{ color: '#4FA870' }}
              >
                {group.title}
              </p>
              <ul className="flex flex-col gap-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[13px] transition-colors duration-300"
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
          className="flex flex-col sm:flex-row gap-8 py-10 mb-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
        >
          <div className="flex items-start gap-4">
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(79,168,112,0.1)' }}
            >
              <MapPin size={14} style={{ color: '#4FA870' }} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.12em] uppercase mb-1.5" style={{ color: '#374151' }}>Factory</p>
              <p className="text-[12px] leading-relaxed" style={{ color: '#4B5563' }}>
                Phase II, Block 39 Plot 10, Unique Estate Nkwelle Ogidi, Idemili North LGA, Anambra State
              </p>
            </div>
          </div>
          <div
            className="w-px hidden sm:block self-stretch"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          />
          <div className="flex items-start gap-4">
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(47,128,237,0.1)' }}
            >
              <MapPin size={14} style={{ color: '#2F80ED' }} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.12em] uppercase mb-1.5" style={{ color: '#374151' }}>Admin Office</p>
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
            <span className="font-semibold" style={{ color: '#4FA870' }}>
              Doda Troupe Int&apos;l Ltd
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
