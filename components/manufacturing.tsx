'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FACTORY_MAIN = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66e1bef6-8355-4606-a861-6076ec220833.jpeg'

const galleryItems = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6cacf79a-d3ae-4e16-97a7-4883632b7d6e.jpeg',
    alt: 'High precision paper maker with Sylflora Technology branding',
    caption: 'High Precision Paper Maker',
    span: 'col-span-1',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c5d8dd0e-3ac2-4847-b465-733eedf447ae.jpeg',
    alt: 'Industrial slitting machine for tissue production',
    caption: 'Industrial Slitting Equipment',
    span: 'col-span-1',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00e25102-7119-467e-ac3e-4487beb113b4.jpeg',
    alt: 'Aerial view of SylFlora industrial campus',
    caption: 'Production Campus',
    span: 'col-span-1 md:col-span-2',
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
      className="py-28 md:py-36 lg:py-44 relative"
      style={{ background: '#FAFAF8' }}
    >
      {/* Subtle ambient */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(47,128,237,0.02) 0%, transparent 60%)',
          transform: 'translate(30%, -30%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 relative z-10">

        {/* Header — editorial asymmetric layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p
            className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-4"
            style={{ color: '#2D8A5A' }}
          >
            <span className="h-px w-10" style={{ background: '#2D8A5A' }} />
            Production Excellence
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              className="text-[2.75rem] md:text-[3.25rem] xl:text-[3.75rem] font-black leading-[1.02] tracking-[-0.03em] text-balance"
              style={{ fontFamily: 'var(--font-display)', color: '#0F172A' }}
            >
              Inside Our
              <br />
              <span style={{ color: '#2F80ED' }}>Production Process</span>
            </h2>
            <p
              className="text-[16px] leading-relaxed max-w-md lg:pb-2"
              style={{ color: '#6B7280' }}
            >
              A state-of-the-art manufacturing campus in Anambra State, built for
              precision, scale, and world-class hygiene standards.
            </p>
          </div>
        </motion.div>

        {/* MAIN FACTORY IMAGE — cinematic treatment */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6 rounded-[2rem] overflow-hidden"
          style={{ 
            height: '500px', 
            boxShadow: '0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.03)' 
          }}
        >
          <img
            src={FACTORY_MAIN}
            alt="SylFlora Industry LTD factory building — Nurturing a Hygienic Generation"
            className="w-full h-full object-cover object-center"
          />
          {/* Cinematic depth overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.03) 40%, rgba(15,23,42,0.4) 100%)',
            }}
          />

          {/* Est. badge — refined placement */}
          <div className="absolute bottom-8 right-8">
            <p 
              className="text-[11px] font-bold tracking-[0.15em] uppercase"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Est. 2014 &mdash; Anambra State, Nigeria
            </p>
          </div>
          
          {/* Subtle vignette corners */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.15) 100%)'
            }}
          />
        </motion.div>

        {/* SECONDARY GALLERY — varied sizes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-2xl group ${item.span}`}
              style={{ height: '180px' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5"
                style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 60%)' }}
              >
                <p className="text-[12px] font-semibold text-white">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities grid — refined with numbers */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                className="flex flex-col gap-4 group"
              >
                <p
                  className="text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300"
                  style={{ color: '#D9D3CB' }}
                >
                  {cap.num}
                </p>
                <h3
                  className="text-[17px] font-bold leading-snug"
                  style={{ color: '#0F172A' }}
                >
                  {cap.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: '#6B7280' }}>
                  {cap.desc}
                </p>
                <div
                  className="h-px w-12 transition-all duration-500 group-hover:w-20"
                  style={{ background: '#2D8A5A' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
