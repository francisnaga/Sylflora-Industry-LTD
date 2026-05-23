'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

// Award image
const AWARD_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5654-sMRNMsOVFdN6ZZRMlbJUoccXvysix2.jpeg'
// Market stall / distribution photo
const MARKET_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5651-MXOPw2ZccvT7Lf879XxCuj1IIs8bh1.jpeg'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, to, suffix])

  return <span ref={ref} className="tabular-nums">0{suffix}</span>
}

const stats = [
  { value: 10, suffix: '+', label: 'Years Manufacturing', sub: 'Est. 2014, Ogidi Anambra' },
  { value: 36, suffix: '', label: 'States Covered', sub: 'All 36 states + FCT' },
  { value: 4, suffix: '', label: 'West African Countries', sub: 'Nigeria, Ghana, Cameroon, Togo' },
  { value: 30, suffix: '+', label: 'Product Lines', sub: '100% virgin wood pulp' },
]

const credentials = [
  'ONICCIMA Award of Excellence 2024',
  'Best Tissue & Serviette Producer of the Year',
  'ISO-Standard Manufacturing Facility',
  'Nationwide & West African Distribution Network',
]

export default function TrustStats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      id="trust-stats"
      ref={ref}
      className="py-0 relative overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(to right, transparent, var(--cyan), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-1.5 px-6 md:px-8 py-10 md:py-12 group"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <div
                className="text-[3rem] md:text-[3.75rem] font-black leading-none tracking-[-0.03em]"
                style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
              >
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p
                className="text-[13px] md:text-[14px] font-bold"
                style={{ color: 'var(--cyan)' }}
              >
                {stat.label}
              </p>
              <p
                className="text-[11px] leading-snug"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Award + credibility row */}
        <div
          className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.07)' }}
        >
          {/* Award image panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="relative overflow-hidden"
            style={{ height: '280px' }}
          >
            <img
              src={AWARD_IMG}
              alt="ONICCIMA Award of Excellence — SylFlora Industries Ltd, Best Tissue & Serviette Producer 2024"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0 flex items-end p-7"
              style={{
                background: 'linear-gradient(to top, rgba(8,13,24,0.92) 0%, rgba(8,13,24,0.4) 45%, transparent 100%)',
              }}
            >
              <div>
                <p
                  className="text-[10px] font-bold tracking-[0.15em] uppercase mb-2"
                  style={{ color: 'var(--cyan)' }}
                >
                  Recognition
                </p>
                <p
                  className="text-[16px] md:text-[18px] font-black leading-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Best Tissue & Serviette
                  <br />Producer of the Year &mdash; 2024
                </p>
              </div>
            </div>
          </motion.div>

          {/* Credentials list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex flex-col justify-center px-7 md:px-10 py-10 gap-5"
          >
            <div className="mb-2">
              <p className="tag-cyan mb-3">
                <span className="rule-cyan" aria-hidden="true" />
                Operational Credibility
              </p>
              <h2
                className="text-[1.5rem] md:text-[1.75rem] font-black leading-tight"
                style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
              >
                Built on Proven Performance
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {credentials.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.5 }}
                  className="flex items-start gap-3 text-[13px] leading-snug"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: 'var(--cyan)' }}
                    aria-hidden="true"
                  />
                  {c}
                </motion.li>
              ))}
            </ul>

            {/* Distribution photo thumbnail */}
            <div className="mt-2 overflow-hidden" style={{ height: '80px' }}>
              <img
                src={MARKET_IMG}
                alt="SylFlora products at a large distribution market"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
