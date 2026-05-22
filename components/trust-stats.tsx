'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const controls = animate(0, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, to, suffix])

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  )
}

const stats = [
  {
    value: 10,
    suffix: '+',
    label: 'Years of Excellence',
    desc: 'Manufacturing since 2014',
  },
  {
    value: 36,
    suffix: '',
    label: 'States Covered',
    desc: 'Nationwide distribution network',
  },
  {
    value: 4,
    suffix: '',
    label: 'Countries',
    desc: 'West African market presence',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Product Lines',
    desc: '100% virgin wood pulp quality',
  },
]

export default function TrustStats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      id="trust-stats"
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 xl:px-12">

        {/* Subtle divider label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="h-px flex-1 max-w-[60px]"
            style={{ background: '#E5E7EB' }}
          />
          <span
            className="text-[11px] font-semibold tracking-[0.14em] uppercase"
            style={{ color: '#9CA3AF' }}
          >
            Our Reach
          </span>
          <span
            className="h-px flex-1 max-w-[60px]"
            style={{ background: '#E5E7EB' }}
          />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2"
            >
              {/* Number */}
              <div
                className="text-[3.5rem] md:text-[4rem] font-black leading-none tracking-[-0.03em]"
                style={{ fontFamily: 'var(--font-display)', color: '#0F172A' }}
              >
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              {/* Label */}
              <p
                className="text-[14px] font-semibold leading-snug"
                style={{ color: '#0F172A' }}
              >
                {stat.label}
              </p>
              {/* Description */}
              <p className="text-[12px] leading-relaxed" style={{ color: '#9CA3AF' }}>
                {stat.desc}
              </p>
              {/* Accent line */}
              <div
                className="mt-2 h-0.5 w-8 rounded-full"
                style={{ background: '#3FAF75' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
