'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const controls = animate(0, to, {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
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
    desc: 'Manufacturing premium hygiene products since 2014',
    featured: true,
  },
  {
    value: 36,
    suffix: '',
    label: 'States Covered',
    desc: 'Nationwide distribution network',
    featured: false,
  },
  {
    value: 4,
    suffix: '',
    label: 'Countries',
    desc: 'West African market presence',
    featured: false,
  },
  {
    value: 30,
    suffix: '+',
    label: 'Product Lines',
    desc: '100% virgin wood pulp quality',
    featured: false,
  },
]

export default function TrustStats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      id="trust-stats"
      ref={ref}
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Subtle background accent */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(45,138,90,0.03) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 relative z-10">

        {/* Eyebrow with refined styling */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5 mb-20"
        >
          <span
            className="h-px w-16"
            style={{ background: 'linear-gradient(to right, #2D8A5A, transparent)' }}
          />
          <span
            className="text-[11px] font-semibold tracking-[0.2em] uppercase"
            style={{ color: '#2D8A5A' }}
          >
            Our Reach
          </span>
        </motion.div>

        {/* Asymmetric grid - featured stat on left, others stacked on right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Featured stat - takes dominant space */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex flex-col gap-4">
              {/* Giant number */}
              <div
                className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-[-0.04em]"
                style={{ 
                  fontFamily: 'var(--font-display)', 
                  color: '#0F172A',
                }}
              >
                <Counter to={stats[0].value} suffix={stats[0].suffix} />
              </div>
              {/* Label */}
              <h3
                className="text-[1.5rem] md:text-[1.75rem] font-bold leading-tight tracking-[-0.02em]"
                style={{ color: '#0F172A' }}
              >
                {stats[0].label}
              </h3>
              {/* Description */}
              <p className="text-[15px] leading-relaxed max-w-[280px]" style={{ color: '#6B7280' }}>
                {stats[0].desc}
              </p>
              {/* Accent line */}
              <div
                className="mt-4 h-1 w-16 rounded-full"
                style={{ background: 'linear-gradient(to right, #2D8A5A, #4FA870)' }}
              />
            </div>
          </motion.div>

          {/* Other stats - grid on the right */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-10">
              {stats.slice(1).map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.15 + i * 0.1, 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="flex flex-col gap-3 p-6 rounded-2xl transition-all duration-500"
                  style={{
                    background: 'rgba(249,249,248,0.6)',
                    border: '1px solid rgba(234,230,224,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.06)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(249,249,248,0.6)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {/* Number */}
                  <div
                    className="text-[3rem] md:text-[3.5rem] font-black leading-none tracking-[-0.03em]"
                    style={{ fontFamily: 'var(--font-display)', color: '#0F172A' }}
                  >
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>
                  {/* Label */}
                  <p
                    className="text-[14px] font-bold leading-snug"
                    style={{ color: '#0F172A' }}
                  >
                    {stat.label}
                  </p>
                  {/* Description */}
                  <p className="text-[12px] leading-relaxed" style={{ color: '#9CA3AF' }}>
                    {stat.desc}
                  </p>
                  {/* Subtle accent */}
                  <div
                    className="mt-1 h-0.5 w-8 rounded-full"
                    style={{ background: '#2D8A5A' }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
