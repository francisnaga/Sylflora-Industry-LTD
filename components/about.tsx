'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'

// Production/facility images
const PRODUCTION_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8e9ebcf8-bee0-4f45-8b2d-023a0603ce10.jpeg'
const FACTORY_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66e1bef6-8355-4606-a861-6076ec220833.jpeg'
const CHILDREN_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/75099d0c-86bd-43de-9ea3-1b2701fe2dbc.jpeg'

const pillars = [
  {
    title: 'Nationwide Distribution',
    desc: 'Trusted across all 36 states, FCT, and 4 West African countries.',
    color: '#3FAF75',
  },
  {
    title: 'Hygienic Production',
    desc: '100% virgin wood pulp. ISO-standard manufacturing practices.',
    color: '#2F80ED',
  },
  {
    title: 'Quality Assurance',
    desc: 'Rigorous testing at every stage of our production process.',
    color: '#3FAF75',
  },
  {
    title: 'Community Impact',
    desc: 'Empowering local employment and nurturing hygiene awareness.',
    color: '#2F80ED',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding overflow-hidden"
      style={{ background: '#FFFCF9' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 xl:px-12">

        {/* ── TOP: Split layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center mb-24 md:mb-32">

          {/* Left — imagery composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image — overflow-hidden on this inner div only */}
            <div
              className="relative overflow-hidden rounded-2xl aspect-[4/5]"
              style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.1)' }}
            >
              <img
                src={PRODUCTION_IMG}
                alt="SylFlora production floor with workers"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(15,23,42,0.3) 0%, transparent 50%)',
                }}
              />
            </div>

            {/* Floating Google Maps-style business card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-4 md:-right-8 bottom-12 z-20"
              style={{
                filter:
                  'drop-shadow(0 16px 48px rgba(15,23,42,0.22)) drop-shadow(0 4px 12px rgba(15,23,42,0.12))',
              }}
            >
              <div
                className="w-[200px] md:w-[240px] rounded-[16px] overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(234,230,224,0.9)',
                }}
              >
                {/* Factory thumbnail */}
                <div className="h-[90px] md:h-[108px] overflow-hidden">
                  <img
                    src={FACTORY_IMG}
                    alt="SylFlora Industries Ltd factory building"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Card body */}
                <div className="px-3.5 pb-3.5 pt-2.5">
                  <p
                    className="text-[13px] font-extrabold leading-tight"
                    style={{ fontFamily: 'var(--font-display)', color: '#0F172A' }}
                  >
                    SylFlora Industries Ltd
                  </p>
                  <p className="text-[10px] mt-0.5" style={{ color: '#6B7280' }}>
                    Manufacturer &middot; Ogidi, Anambra
                  </p>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[12px] font-bold" style={{ color: '#0F172A' }}>4.0</span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={10}
                          fill={s <= 4 ? '#F59E0B' : 'none'}
                          stroke={s <= 4 ? '#F59E0B' : '#D1D5DB'}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <span className="text-[10px]" style={{ color: '#9CA3AF' }}>(48)</span>
                  </div>
                  {/* Status */}
                  <div
                    className="flex items-center justify-between mt-2 pt-2"
                    style={{ borderTop: '1px solid #F3F4F6' }}
                  >
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#3FAF75' }} />
                      <span className="text-[10px] font-semibold" style={{ color: '#3FAF75' }}>Open</span>
                      <span className="text-[10px]" style={{ color: '#9CA3AF' }}>&middot; until 6pm</span>
                    </div>
                    <MapPin size={11} style={{ color: '#9CA3AF' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating "since" badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -left-4 md:-left-8 top-12 rounded-2xl px-5 py-4"
              style={{
                background: '#0F172A',
                boxShadow: '0 8px 32px rgba(15,23,42,0.2)',
              }}
            >
              <p
                className="text-[28px] font-black leading-none"
                style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
              >
                2014
              </p>
              <p className="text-[11px] font-semibold tracking-widest uppercase mt-1" style={{ color: '#9CA3AF' }}>
                Founded
              </p>
            </motion.div>
          </motion.div>

          {/* Right — storytelling */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-7 order-1 lg:order-2"
          >
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5"
                style={{ color: '#2D8A5A' }}
              >
                Our Story
              </p>
              <h2
                className="text-[2.4rem] md:text-[3rem] xl:text-[3.5rem] font-black leading-[1.05] tracking-[-0.025em] text-balance"
                style={{ fontFamily: 'var(--font-display)', color: '#0F172A' }}
              >
                Built for scale.
                <br />
                Made with care.
              </h2>
            </div>

            <p className="text-[17px] leading-relaxed" style={{ color: '#4F4945' }}>
              We started with a simple belief: every family deserves access to premium hygiene products without compromise. In 2014, we built our first production line in Anambra State. Today, millions rely on SylFlora.
            </p>

            <p className="text-[17px] leading-relaxed" style={{ color: '#4F4945' }}>
              Every product uses 100% virgin wood pulp. We don&apos;t cut corners. We don&apos;t settle. And we never will. That commitment is why distributors across 36 states trust us to show up, deliver quality, and care about the families using our products.
            </p>

            {/* Quote */}
            <div
              className="border-l-2 pl-5 py-1"
              style={{ borderColor: '#3FAF75' }}
            >
              <p className="text-[15px] italic leading-relaxed" style={{ color: '#6B7280' }}>
                &ldquo;To actualize the true human nature through unremitting creativity &mdash; deciphering
                the existing human problems and imminent threats to existence.&rdquo;
              </p>
              <p className="text-[12px] font-semibold mt-2" style={{ color: '#9CA3AF' }}>
                Mission Statement
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM: Pillars ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="group flex flex-col gap-3 p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: '#F9F9F8',
                  border: '1px solid #F0F0EE',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFFFFF'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F9F9F8'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: p.color }}
                />
                <h3
                  className="text-[15px] font-bold leading-tight"
                  style={{ color: '#0F172A' }}
                >
                  {p.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: '#6B7280' }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Community image ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 md:mt-24 relative overflow-hidden rounded-3xl"
          style={{ height: '400px', boxShadow: '0 24px 64px rgba(0,0,0,0.1)' }}
        >
          <img
            src={CHILDREN_IMG}
            alt="SylFlora community event — school children receiving hygiene products"
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0 flex items-end p-8 md:p-12"
            style={{
              background:
                'linear-gradient(to top, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.2) 50%, transparent 100%)',
            }}
          >
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-2"
                style={{ color: '#3FAF75' }}
              >
                Community Impact
              </p>
              <p
                className="text-[22px] md:text-[28px] font-black leading-tight text-balance"
                style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
              >
                Nurturing hygiene awareness,<br className="hidden md:block" /> one generation at a time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
