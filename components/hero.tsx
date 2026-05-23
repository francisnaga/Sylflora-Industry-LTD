'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Award } from 'lucide-react'

// Real SylFlora product images from the user-provided assets
const FACTORY_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66e1bef6-8355-4606-a861-6076ec220833.jpeg'
const PRODUCT_RANGE_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5650-SqeDn6CDWd1WDVhwsEUHDCpAyexeHc.jpeg'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
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
      className="relative min-h-[100svh] flex items-end overflow-hidden"
    >
      {/* Full-bleed factory background with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <div
          className="w-full h-[115%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${FACTORY_IMG})`,
            transformOrigin: 'center',
          }}
        />
      </motion.div>

      {/* Dark industrial overlay — layered for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(8,13,24,0.97) 0%, rgba(8,13,24,0.75) 30%, rgba(8,13,24,0.45) 65%, rgba(8,13,24,0.3) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Left vignette for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            'linear-gradient(to right, rgba(8,13,24,0.7) 0%, rgba(8,13,24,0.3) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 xl:px-16 pb-20 md:pb-28 pt-40"
      >
        {/* Award badge — real credibility signal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 mb-10 px-4 py-2.5 rounded"
          style={{
            background: 'rgba(0,168,198,0.12)',
            border: '1px solid rgba(0,168,198,0.3)',
          }}
        >
          <Award size={14} style={{ color: 'var(--cyan)' }} aria-hidden="true" />
          <span
            className="text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{ color: 'var(--cyan)' }}
          >
            ONICCIMA Award — Best Tissue & Serviette Producer 2024
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-end">
          {/* Left — main headline */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black leading-[0.92] tracking-[-0.03em] text-balance"
              style={{
                fontFamily: 'var(--font-display)',
                color: '#FFFFFF',
                fontSize: 'clamp(3rem, 7vw, 6rem)',
              }}
            >
              {"Nigeria's Trusted"}
              <br />
              <span style={{ color: 'var(--cyan)' }}>Hygiene</span>
              <br />
              Manufacturing Brand
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Large-scale tissue and hygiene production from our Anambra facility.
              Supplying supermarkets, wholesalers, and retailers across all 36 states
              and West Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <button
                onClick={() => scrollTo('distributor')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] transition-all duration-300"
                style={{
                  background: 'var(--cyan)',
                  color: '#FFFFFF',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--cyan-light)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--cyan)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Become a Distributor
                <span aria-hidden="true">&rarr;</span>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cyan)'
                  e.currentTarget.style.color = 'var(--cyan)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                  e.currentTarget.style.color = '#FFFFFF'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Contact Sales
              </button>
            </motion.div>
          </div>

          {/* Right — stats strip + product image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-6 self-end"
          >
            {/* Product range card */}
            <div
              className="overflow-hidden"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <img
                src={PRODUCT_RANGE_IMG}
                alt="Full SylFlora product range — tissue papers, serviettes, baby diapers"
                className="w-full object-cover"
                style={{ height: '200px', objectPosition: 'top' }}
              />
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ background: 'rgba(11,17,32,0.9)' }}
              >
                <div>
                  <p className="text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: 'var(--cyan)' }}>
                    Product Range
                  </p>
                  <p className="text-[13px] font-semibold text-white mt-0.5">
                    30+ SKUs Across 5 Categories
                  </p>
                </div>
                <button
                  onClick={() => scrollTo('products')}
                  className="text-[11px] font-bold uppercase tracking-wider px-4 py-2 transition-colors"
                  style={{ color: 'var(--cyan)', border: '1px solid rgba(0,168,198,0.4)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--cyan)'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--cyan)'
                  }}
                >
                  View All
                </button>
              </div>
            </div>

            {/* Inline stats */}
            <div
              className="grid grid-cols-3 divide-x"
              style={{ borderColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {[
                { val: '10+', label: 'Years' },
                { val: '36', label: 'States' },
                { val: '30+', label: 'Products' },
              ].map((s) => (
                <div key={s.label} className="px-5 py-4 text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <p
                    className="text-[1.5rem] font-black leading-none"
                    style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
                  >
                    {s.val}
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.12em] uppercase mt-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tagline rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center gap-6 mt-14 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <span
            className="text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            We Don&apos;t Compete — We Lead
          </span>
          <span
            className="flex-1 h-px"
            style={{ background: 'rgba(255,255,255,0.08)' }}
            aria-hidden="true"
          />
          <span
            className="text-[11px] font-semibold"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Est. 2014 &mdash; Ogidi, Anambra
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('trust-stats')}
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 cursor-pointer z-20 group"
        aria-label="Scroll down"
      >
        <span
          className="text-[9px] tracking-[0.2em] uppercase font-bold transition-colors"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          <ChevronDown size={18} strokeWidth={2} />
        </motion.div>
      </motion.button>
    </section>
  )
}
