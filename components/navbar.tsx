'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'Products', href: 'products' },
  { label: 'Manufacturing', href: 'manufacturing' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
]

const LOGO_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Premium%20modern%20logo%20redesign%2C%20circular%20badge%20with%20perfect%20symmetry%2C%20left%20side%20vibrant%20blue%20water%20droplet%2C%20right%20side%20bright%20green%20leaf%20flame%2C%20intertwined%20S-curve%20design%20in%20white%20creating%20yin-yang%20balance%2C%20crisp%20vector-style%20graphics%2C%20subtle%20gradient%20-Re0t8mbbed9Bcd0p4SpKwVbdzani7J.jpeg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(8,13,24,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-[72px]">

            {/* Logo */}
            <button
              onClick={() => handleLink('home')}
              className="flex items-center gap-3 group shrink-0"
              aria-label="SylFlora Industries Ltd — go to homepage"
            >
              <div
                className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden shrink-0 ring-1 ring-transparent group-hover:ring-[var(--cyan)] transition-all duration-300"
              >
                <img
                  src={LOGO_URL}
                  alt="SylFlora Industries logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[15px] md:text-[16px] font-black tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
                >
                  SylFlora
                </span>
                <span
                  className="text-[9px] font-bold tracking-[0.15em] uppercase"
                  style={{ color: 'var(--cyan)' }}
                >
                  Industries Ltd
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLink(link.href)}
                  className="relative text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.55)'
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: 'var(--cyan)' }}
                  />
                </button>
              ))}
            </nav>

            {/* Desktop CTA + phone */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+2348035429082"
                className="flex items-center gap-2 text-[11px] font-semibold tracking-wide transition-colors"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >
                <Phone size={12} />
                +234 803 542 9082
              </a>
              <button
                onClick={() => handleLink('distributor')}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300"
                style={{
                  background: 'var(--cyan)',
                  color: '#FFFFFF',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--cyan-light)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--cyan)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Become Distributor
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center transition-colors"
              style={{ color: '#FFFFFF' }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8"
            style={{ background: 'var(--navy)' }}
          >
            {/* Thin cyan top line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'var(--cyan)' }}
              aria-hidden="true"
            />

            <nav className="flex flex-col flex-1 justify-center gap-0" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  onClick={() => handleLink(link.href)}
                  className="text-left py-5 text-[2rem] font-black tracking-tight border-b flex items-center justify-between group"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: '#FFFFFF',
                    borderColor: 'rgba(255,255,255,0.06)',
                  }}
                >
                  <span className="group-hover:text-[var(--cyan)] transition-colors">{link.label}</span>
                  <span
                    className="text-[1rem] opacity-0 group-hover:opacity-100 transition-all"
                    style={{ color: 'var(--cyan)' }}
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col gap-3 mt-6"
            >
              <a
                href="tel:+2348035429082"
                className="flex items-center justify-center gap-2 w-full py-4 text-[12px] font-bold uppercase tracking-[0.1em]"
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                <Phone size={13} />
                +234 803 542 9082
              </a>
              <button
                onClick={() => handleLink('distributor')}
                className="w-full py-4 text-[13px] font-bold uppercase tracking-[0.1em]"
                style={{ background: 'var(--cyan)', color: '#FFFFFF' }}
              >
                Become a Distributor
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
