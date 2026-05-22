'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'Products', href: 'products' },
  { label: 'Manufacturing', href: 'manufacturing' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
]

const LOGO_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f7da5756-3a32-4e89-baa1-7723073e12b0.jpeg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)
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
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(255,252,249,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(234,230,224,0.6)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button
              onClick={() => handleLink('home')}
              className="flex items-center gap-2 md:gap-4 group"
              aria-label="SylFlora Industries LTD — go to homepage"
            >
              <div
                className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden transition-all duration-300 flex-shrink-0"
                style={{ boxShadow: '0 0 0 2px transparent' }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 2px #2D8A5A')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 2px transparent')
                }
              >
                <img
                  src={LOGO_URL}
                  alt="SylFlora Industries logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-[15px] md:text-[17px] font-black"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: '#1A1410',
                  letterSpacing: '-0.02em',
                }}
              >
                SylFlora{' '}
                <span style={{ color: '#2D8A5A' }}>Industry LTD</span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLink(link.href)}
                  className="relative text-[13px] font-semibold uppercase tracking-widest transition-colors duration-200 group"
              style={{ color: '#6B6560' }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = '#1A1410')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = '#6B6560')
              }
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                style={{ background: '#2D8A5A' }}
                  />
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <button
              onClick={() => handleLink('distributor')}
              className="hidden md:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wide transition-all duration-300 min-h-[44px]"
              style={{
                background: '#1A1410',
                color: '#FFFCF9',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2D8A5A'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1A1410'
              }}
            >
              Become Distributor
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full transition-colors"
              style={{ color: '#0F172A' }}
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-10"
            style={{ background: '#FFFCF9' }}
          >
            <nav className="flex flex-col flex-1 justify-center gap-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  onClick={() => handleLink(link.href)}
                  className="text-left py-4 text-[28px] font-black tracking-tight border-b"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: '#1A1410',
                    borderColor: '#EAE6E0',
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleLink('distributor')}
              className="w-full py-5 rounded-full text-[14px] font-bold uppercase tracking-wide mt-6"
              style={{ background: '#1A1410', color: '#FFFCF9' }}
            >
              Become Distributor
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
