'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cog, ShieldCheck, BarChart3, Globe2 } from 'lucide-react'

const FACTORY_MAIN = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66e1bef6-8355-4606-a861-6076ec220833.jpeg'
const MACHINE_1 = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6cacf79a-d3ae-4e16-97a7-4883632b7d6e.jpeg'
const MACHINE_2 = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c5d8dd0e-3ac2-4847-b465-733eedf447ae.jpeg'
const CAMPUS_AERIAL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00e25102-7119-467e-ac3e-4487beb113b4.jpeg'
const VEHICLE_IMG = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5639-x2hwxIN2lbXJLILGyeMXXfmHXEw2Bl.jpeg'

const capabilities = [
  {
    icon: Cog,
    title: 'Virgin Pulp Manufacturing',
    desc: '100% virgin wood pulp used across all product lines — no recycled filler material.',
    num: '01',
  },
  {
    icon: Cog,
    title: 'Advanced Machinery',
    desc: 'High-precision, computer-controlled production equipment from leading manufacturers.',
    num: '02',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'Rigorous ISO-standard testing at every stage of the production cycle.',
    num: '03',
  },
  {
    icon: BarChart3,
    title: 'Production Scale',
    desc: 'Capacity to serve national retail demand and international export requirements.',
    num: '04',
  },
  {
    icon: Globe2,
    title: 'Distribution Ready',
    desc: 'Warehousing and logistics infrastructure built for nationwide and West African supply.',
    num: '05',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Operations',
    desc: 'ONICCIMA-recognized facility with award-winning production standards.',
    num: '06',
  },
]

export default function Manufacturing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      id="manufacturing"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'var(--off-white)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="tag-cyan mb-5">
            <span className="rule-cyan" aria-hidden="true" />
            Production Infrastructure
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] font-black leading-[1.0] tracking-[-0.025em] text-balance"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
            >
              Industrial-Scale
              <br />
              <span style={{ color: 'var(--cyan)' }}>Manufacturing Operations</span>
            </h2>
            <p
              className="text-[15px] leading-relaxed max-w-md"
              style={{ color: 'var(--neutral-500)' }}
            >
              A state-of-the-art manufacturing campus in Anambra State, Nigeria. Built for
              precision, scale, and world-class hygiene production standards.
            </p>
          </div>
        </motion.div>

        {/* MAIN FACTORY — full-width cinematic banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="relative overflow-hidden mb-4"
          style={{ height: '460px' }}
        >
          <img
            src={FACTORY_MAIN}
            alt="SylFlora Industries Ltd — Nurturing a Hygienic Generation. Factory building, Ogidi Anambra State"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(8,13,24,0.7) 0%, rgba(8,13,24,0.1) 50%, transparent 100%)',
            }}
            aria-hidden="true"
          />
          {/* Factory label */}
          <div className="absolute bottom-0 left-0 right-0 px-8 py-6 flex items-end justify-between">
            <div>
              <p
                className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1"
                style={{ color: 'var(--cyan)' }}
              >
                Main Facility
              </p>
              <p
                className="text-[18px] md:text-[22px] font-black text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SylFlora Industries Ltd — Ogidi, Anambra State
              </p>
            </div>
            <div
              className="hidden md:flex items-center gap-2 px-4 py-2"
              style={{ background: 'rgba(0,168,198,0.15)', border: '1px solid rgba(0,168,198,0.3)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--cyan)' }}
                aria-hidden="true"
              />
              <span
                className="text-[11px] font-bold tracking-[0.12em] uppercase"
                style={{ color: 'var(--cyan)' }}
              >
                Est. 2014 &mdash; Active
              </span>
            </div>
          </div>
        </motion.div>

        {/* Secondary gallery — 3-column grid */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { src: MACHINE_1, alt: 'High precision paper-making machinery — SylFlora Technology', label: 'Paper Making' },
            { src: MACHINE_2, alt: 'Industrial tissue slitting and cutting machine', label: 'Slitting Equipment' },
            { src: CAMPUS_AERIAL, alt: 'Aerial view of SylFlora industrial production campus', label: 'Production Campus' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
              className="relative overflow-hidden group img-reveal cursor-default"
              style={{ height: '160px' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.8) 0%, transparent 60%)' }}
              >
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-white">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vehicle / brand presence */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative overflow-hidden mb-16"
          style={{ height: '220px' }}
        >
          <img
            src={VEHICLE_IMG}
            alt="SylFlora branded vehicle — We Don't Compete, We Lead"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div
            className="absolute inset-0 flex items-center px-8 md:px-14"
            style={{
              background: 'linear-gradient(to right, rgba(8,13,24,0.85) 0%, rgba(8,13,24,0.5) 50%, transparent 80%)',
            }}
          >
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2"
                style={{ color: 'var(--cyan)' }}
              >
                Brand Operations
              </p>
              <p
                className="text-[1.5rem] md:text-[2rem] font-black text-white text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                We Don&apos;t Compete.
                <br />We Lead.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Capabilities grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mb-10"
          >
            <p className="tag-cyan mb-3">
              <span className="rule-cyan" aria-hidden="true" />
              Core Capabilities
            </p>
            <h3
              className="text-[1.5rem] md:text-[1.75rem] font-black"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
            >
              What Our Facility Delivers
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l"
            style={{ borderColor: 'var(--neutral-200)' }}
          >
            {capabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.5 }}
                  className="group flex flex-col gap-4 p-7 transition-colors duration-300 border-b border-r"
                  style={{
                    borderColor: 'var(--neutral-200)',
                    background: '#FFFFFF',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--navy)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={18}
                      className="transition-colors duration-300 group-hover:text-[var(--cyan)]"
                      style={{ color: 'var(--neutral-400)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-[10px] font-bold tracking-[0.15em] transition-colors duration-300 group-hover:text-[var(--cyan)]"
                      style={{ color: 'var(--neutral-300)' }}
                    >
                      {cap.num}
                    </span>
                  </div>
                  <h3
                    className="text-[15px] font-bold leading-snug transition-colors duration-300 group-hover:text-white"
                    style={{ color: 'var(--navy)' }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.6)]"
                    style={{ color: 'var(--neutral-500)' }}
                  >
                    {cap.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
