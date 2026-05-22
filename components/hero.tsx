'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Star, MapPin, ChevronDown } from 'lucide-react'

const FAMILY_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f0a8c5b2-3a95-45d0-bdf5-33ea039a3646.jpeg'
const DIAPER_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b50b37d0-3a78-4d0d-9531-eed7687cbc6a.jpeg'
const TISSUE_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/65c79c3e-4e71-47fd-b7b5-4785d0a19606.jpeg'
const FACTORY_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3ab02bd2-147b-45d0-897e-3cf83a98db96.jpeg'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const y = useSpring(rawY, { stiffness: 80, damping: 20 })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: '#FFFCF9' }}
    >
      {/* Ambient background — minimal, intentional */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,138,90,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Background family image — right side bleed, desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          style={{ y }}
          className="absolute right-0 top-0 w-[52%] h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${FAMILY_IMG})` }}
          />
          {/* Fade out left edge into page background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #FFFCF9 0%, rgba(255,252,249,0.6) 25%, transparent 60%)',
            }}
          />
          {/* Subtle bottom fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-40"
            style={{
              background: 'linear-gradient(to top, #FFFCF9, transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 xl:px-12 pt-28 pb-20 md:pt-36 md:pb-28"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-8 max-w-xl">

            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 self-start"
            >
              <span
                className="w-5 h-px"
                style={{ background: '#2D8A5A' }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: '#2D8A5A' }}
              >
                Trusted by Millions
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[3.2rem] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.2rem] xl:text-[5.8rem] font-black leading-[0.95] tracking-[-0.03em] text-balance"
              style={{
                fontFamily: 'var(--font-display)',
                color: '#1A1410',
              }}
            >
              Pure Quality.
              <br />
              Real Care.
              <br />
              <span
                className="relative"
                style={{
                  background: 'linear-gradient(135deg, #2D8A5A 0%, #1F5F3F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Every Time.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17px] leading-relaxed max-w-md"
              style={{ color: '#6B6560' }}
            >
              Made from 100% virgin wood pulp. Trusted by families across Nigeria and West Africa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo('products')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[14px] font-semibold tracking-wide transition-all duration-300 min-h-[44px]"
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
                Explore Products
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
              <button
                onClick={() => scrollTo('distributor')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[14px] font-semibold tracking-wide border-2 transition-all duration-300 min-h-[44px]"
                style={{
                  borderColor: '#EAE6E0',
                  color: '#1A1410',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2D8A5A'
                  e.currentTarget.style.color = '#2D8A5A'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#EAE6E0'
                  e.currentTarget.style.color = '#1A1410'
                }}
              >
                Become Distributor
              </button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2">
                {[TISSUE_IMG, DIAPER_IMG, FACTORY_IMG].map((src, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white"
                    style={{ zIndex: 3 - i }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" aria-hidden="true" />
                  </div>
                ))}
              </div>
              <p className="text-[13px]" style={{ color: '#6B7280' }}>
                <span className="font-semibold" style={{ color: '#0F172A' }}>30+ products</span> trusted by millions
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — floating composition ── */}
          <div className="relative hidden lg:flex justify-end items-end pb-8 pr-4">
            {/* Floating Trust Card — inspired by the Google Maps card image */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20"
              style={{
                filter:
                  'drop-shadow(0 20px 60px rgba(15,23,42,0.12)) drop-shadow(0 4px 16px rgba(15,23,42,0.08))',
              }}
            >
              <div
                className="w-[300px] rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                }}
              >
                {/* Factory photo top */}
                <div className="relative h-[140px] overflow-hidden">
                  <img
                    src={FACTORY_IMG}
                    alt="SylFlora Industries factory"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card info */}
                <div className="p-5">
                  <p
                    className="text-[16px] font-extrabold leading-tight"
                    style={{ fontFamily: 'var(--font-display)', color: '#0F172A' }}
                  >
                    SylFlora Industries Ltd
                  </p>
                  <p className="text-[12px] mt-0.5" style={{ color: '#6B7280' }}>
                    Manufacturer &middot; Ogidi, Anambra
                  </p>

                  {/* Stars */}
                  <div className="flex items-center gap-1.5 mt-3">
                    <span className="text-[14px] font-bold" style={{ color: '#0F172A' }}>4.0</span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={13}
                          fill={s <= 4 ? '#F59E0B' : 'none'}
                          stroke={s <= 4 ? '#F59E0B' : '#D1D5DB'}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <span className="text-[12px]" style={{ color: '#9CA3AF' }}>(48)</span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: '1px solid #F3F4F6' }}>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#3FAF75]" />
                      <span className="text-[12px] font-semibold" style={{ color: '#3FAF75' }}>Open</span>
                      <span className="text-[12px]" style={{ color: '#9CA3AF' }}>&middot; until 6pm</span>
                    </div>
                    <MapPin size={14} style={{ color: '#9CA3AF' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating product — tissue */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={mounted ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="animate-float-delayed absolute bottom-[-20px] left-[20px] z-10 w-[160px] rounded-2xl overflow-hidden"
              style={{
                filter: 'drop-shadow(0 12px 40px rgba(15,23,42,0.15))',
              }}
            >
              <img
                src={TISSUE_IMG}
                alt="Royal Flora tissue roll"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating product — diaper */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={mounted ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[60px] right-[20px] z-10 w-[140px] rounded-2xl overflow-hidden"
              style={{
                filter: 'drop-shadow(0 12px 40px rgba(15,23,42,0.12))',
              }}
            >
              <img
                src={DIAPER_IMG}
                alt="SylFlora baby diaper"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile hero image — shown only on smaller screens */}
      <div className="absolute bottom-0 inset-x-0 h-56 lg:hidden pointer-events-none overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-top"
          style={{ backgroundImage: `url(${FAMILY_IMG})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #FFFCF9 0%, rgba(255,252,249,0.3) 40%, transparent 100%)',
          }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('trust-stats')}
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: '#9CA3AF' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#9CA3AF' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
