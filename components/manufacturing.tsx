'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FACTORY_MAIN = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66e1bef6-8355-4606-a861-6076ec220833.jpeg'

const galleryItems = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6cacf79a-d3ae-4e16-97a7-4883632b7d6e.jpeg',
    alt: 'High precision paper maker with Sylflora Technology branding',
    caption: 'High Precision Paper Maker',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c5d8dd0e-3ac2-4847-b465-733eedf447ae.jpeg',
    alt: 'Industrial slitting machine for tissue production',
    caption: 'Industrial Slitting Equipment',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00e25102-7119-467e-ac3e-4487beb113b4.jpeg',
    alt: 'Aerial view of SylFlora industrial campus',
    caption: 'Production Campus',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8e9ebcf8-bee0-4f45-8b2d-023a0603ce10.jpeg',
    alt: 'Production floor with workers at SylFlora facility',
    caption: 'Production Floor',
  },
]

const capabilities = [
  {
    title: 'Virgin Pulp Manufacturing',
    desc: '100% virgin wood pulp used across all product lines.',
    num: '01',
  },
  {
    title: 'Advanced Machinery',
    desc: 'High-precision, computer-controlled production equipment.',
    num: '02',
  },
  {
    title: 'Quality Control',
    desc: 'ISO-standard testing at every stage of the production cycle.',
    num: '03',
  },
  {
    title: 'Scale & Reliability',
    desc: 'Capacity to serve national and international demand.',
    num: '04',
  },
]

export default function Manufacturing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      id="manufacturing"
      ref={ref}
      className="section-padding"
      style={{ background: '#FAFAF8' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 xl:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p
            className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4"
            style={{ color: '#3FAF75' }}
          >
            Production Excellence
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-[2.4rem] md:text-[3rem] xl:text-[3.5rem] font-black leading-[1.05] tracking-[-0.025em] text-balance"
              style={{ fontFamily: 'var(--font-display)', color: '#0F172A' }}
            >
              Inside Our
              <br />
              Production Process
            </h2>
            <p
              className="text-[16px] leading-relaxed max-w-sm"
              style={{ color: '#6B7280' }}
            >
              A state-of-the-art manufacturing campus in Anambra State, built for
              precision, scale, and world-class hygiene standards.
            </p>
          </div>
        </motion.div>

        {/* ── MAIN FACTORY IMAGE with floating card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-5 rounded-3xl overflow-hidden"
          style={{ height: '420px', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
        >
          <img
            src={FACTORY_MAIN}
            alt="SylFlora Industry LTD factory building — Nurturing a Hygienic Generation"
            className="w-full h-full object-cover object-center"
          />
          {/* Depth overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.05) 40%, rgba(15,23,42,0.35) 100%)',
            }}
          />

          {/* Est. badge bottom-right */}
          <div className="absolute bottom-6 right-6">
            <p className="text-[11px] font-bold tracking-widest uppercase text-white/70">
              Est. 2014 &mdash; Anambra State, Nigeria
            </p>
          </div>
        </motion.div>

        {/* ── SECONDARY GALLERY (4 smaller images) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-xl group"
              style={{ height: '160px' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.7), transparent)' }}
              >
                <p className="text-[11px] font-semibold text-white">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <p
                className="text-[10px] font-bold tracking-[0.14em] uppercase"
                style={{ color: '#D9D3CB' }}
              >
                {cap.num}
              </p>
              <h3
                className="text-[16px] font-bold leading-snug"
                style={{ color: '#0F172A' }}
              >
                {cap.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: '#6B7280' }}>
                {cap.desc}
              </p>
              <div
                className="h-px w-12"
                style={{ background: '#E5E7EB' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
