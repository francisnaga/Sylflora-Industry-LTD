'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Award } from 'lucide-react'
import Image from 'next/image'

// Local product images for hero composition
const HERO_PRODUCTS = {
  main: '/images/products/Sylflora_products.JPG',
  tissue: '/images/products/Royal_flora_tissue.JPG',
  facial: '/images/products/Sylflora_facialandtabletissue.JPG',
  diaper: '/images/products/Sylflora_babydiapers1.JPG',
  serviette: '/images/products/Sylflora_serviette.JPG',
}

// Factory background
const FACTORY_IMG = '/images/manufacturing/Factorymain-image.JPG'

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
        <Image
          src={FACTORY_IMG}
          alt=""
          fill
          priority
          className="object-cover object-center"
          style={{ transform: 'scale(1.15)' }}
        />
      </motion.div>

      {/* Dark industrial overlay — layered for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
          style={{
            background: 'rgba(21,101,192,0.12)', // project blue
            border: '1px solid rgba(21,101,192,0.3)',
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

      {/* Floating product composition - right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none z-[5]">
        {/* Main product - large */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: 20 }}
          animate={mounted ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[320px] h-[320px]"
          style={{
            right: '8%',
            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))',
          }}
        >
          <Image
            src={HERO_PRODUCTS.main}
            alt="SylFlora product range"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Floating tissue - top right */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -5 }}
          animate={mounted ? { opacity: 0.9, y: 0, rotate: 8 } : {}}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-24 right-[15%] w-[140px] h-[140px]"
          style={{
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.35))',
          }}
        >
          <Image
            src={HERO_PRODUCTS.tissue}
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Floating facial tissue - bottom left */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 20 }}
          animate={mounted ? { opacity: 0.85, x: 0, y: 0, rotate: -6 } : {}}
          transition={{ duration: 1.1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-16 left-[-60px] w-[120px] h-[120px]"
          style={{
            filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.3))',
          }}
        >
          <Image
            src={HERO_PRODUCTS.facial}
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Floating diaper - far right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={mounted ? { opacity: 0.75, x: 0, rotate: 12 } : {}}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[60%] right-[-40px] w-[100px] h-[100px]"
          style={{
            filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.25))',
          }}
        >
          <Image
            src={HERO_PRODUCTS.diaper}
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 xl:px-16 pb-20 md:pb-28 pt-24 md:pt-28"
      >
        {/* Award badge — real credibility signal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 mb-10 px-4 py-2.5 rounded"
          style={{
            background: 'rgba(27,122,76,0.12)',
            border: '1px solid rgba(27,122,76,0.3)',
          }}
        >
          <Award size={14} style={{ color: 'var(--blue)' }} aria-hidden="true" />
          <span
            className="text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{ color: 'var(--blue)' }}
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
              <span style={{ color: 'var(--green)' }}>Hygiene</span>
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
                  background: 'var(--green)',
                  color: '#FFFFFF',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--green-light)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--green)'
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
                  border: '1px solid rgba(21,101,192,0.45)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--blue)'
                  e.currentTarget.style.color = 'var(--blue)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(21,101,192,0.45)'
                  e.currentTarget.style.color = '#FFFFFF'
                }}
              >
                Contact Sales
              </button>
            </motion.div>
          </div>

          {/* Right — stats strip + product image on mobile/tablet */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex xl:hidden flex-col gap-6 self-end"
          >
            {/* Product range card - for lg screens only, xl uses floating composition */}
            <div
              className="overflow-hidden"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="relative h-[200px]">
                <Image
                  src={HERO_PRODUCTS.main}
                  alt="Full SylFlora product range — tissue papers, serviettes, baby diapers"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ background: 'rgba(11,17,32,0.9)' }}
              >
                <div>
                  <p className="text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: 'var(--green)' }}>
                    Product Range
                  </p>
                  <p className="text-[13px] font-semibold text-white mt-0.5">
                    30+ SKUs Across 5 Categories
                  </p>
                </div>
                <button
                  onClick={() => scrollTo('products')}
                  className="text-[11px] font-bold uppercase tracking-wider px-4 py-2 transition-colors"
                  style={{ color: 'var(--green)', border: '1px solid rgba(27,122,76,0.4)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--green)'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--green)'
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

          {/* XL screens - stats only (products are floating) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden xl:flex flex-col gap-6 self-end"
          >
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
