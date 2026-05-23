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
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const y = useSpring(rawY, { stiffness: 50, damping: 30 })
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden flex items-center"
      style={{ background: 'var(--background)' }}
    >
      {/* Ambient background layers — cinematic depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary ambient glow — top right */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(45,138,90,0.08) 0%, rgba(45,138,90,0.02) 50%, transparent 70%)',
          }}
        />
        {/* Secondary warmth — bottom left */}
        <div
          className="absolute -bottom-[30%] -left-[15%] w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(200,153,104,0.06) 0%, transparent 60%)',
          }}
        />
        {/* Subtle center light */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Background family image — right side bleed, desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          style={{ y }}
          className="absolute right-0 top-0 w-[55%] h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${FAMILY_IMG})` }}
          />
          {/* Premium multi-layer fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, var(--background) 0%, rgba(255,252,249,0.85) 15%, rgba(255,252,249,0.4) 35%, transparent 60%)',
            }}
          />
          {/* Soft vignette top */}
          <div
            className="absolute top-0 inset-x-0 h-48"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,252,249,0.6), transparent)',
            }}
          />
          {/* Elegant bottom fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-56"
            style={{
              background: 'linear-gradient(to top, var(--background), transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16 pt-32 pb-80 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36"
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-8 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-10 max-w-2xl">

            {/* Eyebrow — refined editorial style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 self-start"
            >
              <span
                className="w-8 h-[1.5px]"
                style={{ background: 'var(--brand-green)' }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: 'var(--brand-green)' }}
              >
                Trusted by Millions
              </span>
            </motion.div>

            {/* Main headline — cinematic scale */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7rem] font-black leading-[0.92] tracking-[-0.035em] text-balance"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--foreground)',
              }}
            >
              Pure Quality.
              <br />
              Real Care.
              <br />
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, var(--brand-green) 0%, var(--brand-green-dark) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Every Time.
              </span>
            </motion.h1>

            {/* Subtext — refined typography */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ color: 'var(--neutral-600)' }}
            >
              Made from 100% virgin wood pulp. Trusted by families across Nigeria and West Africa.
            </motion.p>

            {/* CTAs — premium buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={() => scrollTo('products')}
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-500 min-h-[56px]"
                style={{
                  background: 'var(--foreground)',
                  color: 'var(--background)',
                  boxShadow: '0 4px 20px rgba(26,20,16,0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--brand-green)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(45,138,90,0.25)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--foreground)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,20,16,0.15)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Explore Products
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
              <button
                onClick={() => scrollTo('distributor')}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-[15px] font-semibold tracking-wide border-2 transition-all duration-500 min-h-[56px]"
                style={{
                  borderColor: 'var(--neutral-300)',
                  color: 'var(--foreground)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-green)'
                  e.currentTarget.style.color = 'var(--brand-green)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--neutral-300)'
                  e.currentTarget.style.color = 'var(--foreground)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Become a Distributor
              </button>
            </motion.div>

            {/* Trust strip — elegant social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-5 pt-4"
            >
              <div className="flex -space-x-3">
                {[TISSUE_IMG, DIAPER_IMG, FACTORY_IMG].map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full overflow-hidden ring-[3px] ring-white shadow-md"
                    style={{ zIndex: 3 - i }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                  30+ Products
                </span>
                <span className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                  Trusted by millions of families
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — premium floating composition ── */}
          <div className="relative hidden lg:flex justify-center items-center min-h-[500px]">
            
            {/* Floating Trust Card — refined glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20"
            >
              <div
                className="w-[320px] rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255,255,255,0.7)',
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.5),
                    0 2px 4px rgba(0,0,0,0.02),
                    0 8px 16px rgba(0,0,0,0.04),
                    0 24px 48px rgba(0,0,0,0.06),
                    0 48px 80px rgba(15,23,42,0.08)
                  `,
                }}
              >
                {/* Factory photo */}
                <div className="relative h-[160px] overflow-hidden">
                  <img
                    src={FACTORY_IMG}
                    alt="SylFlora Industries factory"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay for depth */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.1) 100%)',
                    }}
                  />
                </div>

                {/* Card info — refined spacing */}
                <div className="p-6">
                  <p
                    className="text-[17px] font-extrabold leading-tight"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}
                  >
                    SylFlora Industries Ltd
                  </p>
                  <p className="text-[13px] mt-1" style={{ color: 'var(--neutral-500)' }}>
                    Manufacturer &middot; Ogidi, Anambra
                  </p>

                  {/* Stars — refined */}
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-[15px] font-bold" style={{ color: 'var(--foreground)' }}>4.0</span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={14}
                          fill={s <= 4 ? '#F59E0B' : 'none'}
                          stroke={s <= 4 ? '#F59E0B' : '#D1D5DB'}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <span className="text-[12px]" style={{ color: 'var(--neutral-400)' }}>(48)</span>
                  </div>

                  {/* Status — refined divider */}
                  <div 
                    className="flex items-center justify-between mt-4 pt-4" 
                    style={{ borderTop: '1px solid var(--neutral-200)' }}
                  >
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{ background: 'var(--brand-green)' }}
                      />
                      <span className="text-[13px] font-semibold" style={{ color: 'var(--brand-green)' }}>
                        Open
                      </span>
                      <span className="text-[12px]" style={{ color: 'var(--neutral-400)' }}>
                        &middot; until 6pm
                      </span>
                    </div>
                    <MapPin size={15} style={{ color: 'var(--neutral-400)' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating product — tissue (bottom left) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={mounted ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[10%] left-[5%] z-10 w-[180px] rounded-2xl overflow-hidden"
              style={{
                boxShadow: `
                  0 8px 16px rgba(0,0,0,0.06),
                  0 24px 48px rgba(0,0,0,0.1),
                  0 48px 80px rgba(15,23,42,0.12)
                `,
                animation: 'float-delayed 8s ease-in-out infinite',
              }}
            >
              <img
                src={TISSUE_IMG}
                alt="Royal Flora tissue roll"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Floating product — diaper (top right) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              animate={mounted ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[5%] right-[8%] z-10 w-[150px] rounded-2xl overflow-hidden"
              style={{
                boxShadow: `
                  0 8px 16px rgba(0,0,0,0.06),
                  0 24px 48px rgba(0,0,0,0.1),
                  0 48px 80px rgba(15,23,42,0.1)
                `,
                animation: 'float 7s ease-in-out infinite',
              }}
            >
              <img
                src={DIAPER_IMG}
                alt="SylFlora baby diaper"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Ambient glow behind card */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(45,138,90,0.06) 0%, transparent 60%)',
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Mobile hero image — refined with stronger gradient */}
      <div className="absolute bottom-0 inset-x-0 h-72 lg:hidden pointer-events-none overflow-hidden -z-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${FAMILY_IMG})` }}
        />
        {/* Stronger gradient to ensure text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, var(--background) 0%, rgba(255,252,249,0.95) 30%, rgba(255,252,249,0.6) 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Scroll indicator — refined */}
      <motion.button
        onClick={() => scrollTo('trust-stats')}
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20 group"
        aria-label="Scroll down"
      >
        <span 
          className="text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 group-hover:text-[var(--brand-green)]" 
          style={{ color: 'var(--neutral-400)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="transition-colors duration-300 group-hover:text-[var(--brand-green)]"
          style={{ color: 'var(--neutral-400)' }}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  )
}
