'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'

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

      </div>
    </section>
  )
}
