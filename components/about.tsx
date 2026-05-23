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
    accent: 'var(--cyan)',
  },
  {
    title: 'Hygienic Production',
    desc: '100% virgin wood pulp. ISO-standard manufacturing practices.',
    accent: 'var(--cyan)',
  },
  {
    title: 'Quality Assurance',
    desc: 'Rigorous testing at every stage of our production process.',
    accent: 'var(--cyan)',
  },
  {
    title: 'Community Impact',
    desc: 'Empowering local employment and nurturing hygiene awareness.',
    accent: 'var(--cyan)',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 overflow-hidden relative"
      style={{ background: 'var(--off-white)' }}
    />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 relative z-10">

        {/* TOP: Split layout with more breathing room */}
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center mb-32 md:mb-40">

          {/* Left — imagery composition */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image with editorial treatment */}
            <div
              className="relative overflow-hidden rounded-3xl aspect-[4/5]"
              style={{ 
                boxShadow: '0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.03)' 
              }}
            >
              <img
                src={PRODUCTION_IMG}
                alt="SylFlora production floor with workers"
                className="w-full h-full object-cover"
              />
              {/* Cinematic overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.05) 40%, transparent 100%)',
                }}
              />
            </div>

            {/* Floating Google Maps-style business card — refined glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-4 md:-right-10 bottom-16 z-20"
              style={{
                filter:
                  'drop-shadow(0 20px 56px rgba(15,23,42,0.25)) drop-shadow(0 8px 16px rgba(15,23,42,0.12))',
              }}
            >
              <div
                className="w-[220px] md:w-[260px] rounded-[20px] overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(234,230,224,0.8)',
                }}
              >
                {/* Factory thumbnail */}
                <div className="h-[100px] md:h-[120px] overflow-hidden">
                  <img
                    src={FACTORY_IMG}
                    alt="SylFlora Industries Ltd factory building"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Card body */}
                <div className="px-4 pb-4 pt-3">
                  <p
                    className="text-[14px] font-extrabold leading-tight"
                    style={{ fontFamily: 'var(--font-display)', color: '#0F172A' }}
                  >
                    SylFlora Industries Ltd
                  </p>
                  <p className="text-[11px] mt-1" style={{ color: '#6B7280' }}>
                    Manufacturer &middot; Ogidi, Anambra
                  </p>
                  {/* Stars */}
                  <div className="flex items-center gap-1.5 mt-2.5">
                    <span className="text-[13px] font-bold" style={{ color: '#0F172A' }}>4.0</span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={11}
                          fill={s <= 4 ? '#F59E0B' : 'none'}
                          stroke={s <= 4 ? '#F59E0B' : '#D1D5DB'}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <span className="text-[11px]" style={{ color: '#9CA3AF' }}>(48)</span>
                  </div>
                  {/* Status */}
                  <div
                    className="flex items-center justify-between mt-3 pt-3"
                    style={{ borderTop: '1px solid #F3F4F6' }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ background: '#2D8A5A' }} />
                      <span className="text-[11px] font-semibold" style={{ color: '#2D8A5A' }}>Open</span>
                      <span className="text-[11px]" style={{ color: '#9CA3AF' }}>&middot; until 6pm</span>
                    </div>
                    <MapPin size={12} style={{ color: '#9CA3AF' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating "since" badge — refined */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="absolute -left-4 md:-left-10 top-16 rounded-2xl px-6 py-5"
              style={{
                background: '#0F172A',
                boxShadow: '0 12px 40px rgba(15,23,42,0.25)',
              }}
            >
              <p
                className="text-[32px] md:text-[36px] font-black leading-none"
                style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
              >
                2014
              </p>
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mt-1.5" style={{ color: '#6B7280' }}>
                Founded
              </p>
            </motion.div>
          </motion.div>

          {/* Right — storytelling with editorial typography */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div>
              <p className="tag-cyan mb-5">
                <span className="rule-cyan" aria-hidden="true" />
                Our Story
              </p>
              <h2
                className="text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] font-black leading-[1.0] tracking-[-0.025em] text-balance"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
              >
                Built for Scale.
                <br />
                <span style={{ color: 'var(--cyan)' }}>Made with Care.</span>
              </h2>
            </div>

            <p className="text-[17px] leading-[1.75]" style={{ color: '#4F4945' }}>
              We started with a simple belief: every family deserves access to premium hygiene products without compromise. In 2014, we built our first production line in Anambra State. Today, millions rely on SylFlora.
            </p>

            <p className="text-[17px] leading-[1.75]" style={{ color: '#4F4945' }}>
              Every product uses 100% virgin wood pulp. We don&apos;t cut corners. We don&apos;t settle. And we never will. That commitment is why distributors across 36 states trust us to show up, deliver quality, and care about the families using our products.
            </p>

            {/* Quote — refined editorial styling */}
            <div
              className="border-l-[3px] pl-6 py-2 mt-2"
              style={{ borderColor: 'var(--cyan)' }}
            >
              <p className="text-[16px] italic leading-[1.7]" style={{ color: '#6B7280' }}>
                &ldquo;To actualize the true human nature through unremitting creativity &mdash; deciphering
                the existing human problems and imminent threats to existence.&rdquo;
              </p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase mt-3" style={{ color: '#A69D93' }}>
                Mission Statement
              </p>
            </div>
          </motion.div>
        </div>

        {/* PILLARS — refined with varied accents */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.6 }}
                className="group flex flex-col gap-4 p-7 rounded-2xl transition-all duration-500"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #EAE6E0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = p.accent + '40'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.02)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = '#EAE6E0'
                }}
              >
                <div
                  className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                  style={{ background: p.accent }}
                />
                <h3
                  className="text-[16px] font-bold leading-tight"
                  style={{ color: '#0F172A' }}
                >
                  {p.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: '#6B7280' }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* COMMUNITY IMAGE — cinematic with overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-20 md:mt-28 relative overflow-hidden rounded-[2rem]"
          style={{ 
            height: '460px', 
            boxShadow: '0 32px 80px rgba(0,0,0,0.12)' 
          }}
        >
          <img
            src={CHILDREN_IMG}
            alt="SylFlora community event — school children receiving hygiene products"
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0 flex items-end p-10 md:p-14"
            style={{
              background:
                'linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.3) 45%, transparent 100%)',
            }}
          >
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 flex items-center gap-3"
              style={{ color: 'var(--cyan)' }}
            >
              <span className="w-6 h-px" style={{ background: 'var(--cyan)' }} />
                Community Impact
              </p>
              <p
                className="text-[1.5rem] md:text-[2rem] font-black leading-[1.15] text-balance max-w-xl"
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
