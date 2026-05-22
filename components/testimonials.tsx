'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const events = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3371fa78-3d22-4bcf-879e-b90b9ec078cb.jpeg',
    alt: 'SylFlora Industries booth at evening exhibition',
    label: 'Lagos International Trade Fair',
    year: '2023',
    caption: 'SylFlora Industries commanded a prominent booth presence, showcasing the full product range to thousands of visitors.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5a600641-bd86-4d75-b0f7-614f36e6b2d5.jpeg',
    alt: 'Staff and visitors at SylFlora trade fair booth',
    label: 'Product Launch & Trade Exhibition',
    year: '2022',
    caption: 'Launching new product lines to distributors, retailers, and media at a major West African trade event.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/200817a6-7ac6-4951-9ae4-1a225d912015.jpeg',
    alt: 'Full SylFlora product banner display at exhibition',
    label: 'National Exhibition — Product Showcase',
    year: '2022',
    caption: 'A comprehensive display of tissue papers, diapers, and hygiene products drew significant distributor interest.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cbaa9ed5-e7c8-491d-86e3-6fefd1347ea5.jpeg',
    alt: 'Customers purchasing SylFlora products at booth',
    label: 'Consumer Trade Event — Lagos',
    year: '2021',
    caption: 'Directly engaging consumers built brand trust and drove immediate retail demand for SylFlora lines.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4df946e4-435b-49df-a7df-c0a4aa84c541.jpeg',
    alt: 'SylFlora brand ambassador at exhibition entrance',
    label: 'Trade Fair — Brand Activation',
    year: '2021',
    caption: 'Brand ambassadors represented SylFlora with pride, distributing samples and product information to the public.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0a09fb95-a90a-421e-b28a-63675d33e199.jpeg',
    alt: 'SylFlora mascot promotion at outdoor trade fair',
    label: 'Outdoor Exhibition — Street Activation',
    year: '2020',
    caption: 'An energetic mascot activation drew crowds and created memorable brand moments at a high-traffic event.',
  },
]

export default function IndustryPresence() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + events.length) % events.length)
  const next = () => setActive((a) => (a + 1) % events.length)

  const current = events[active]

  return (
    <section
      ref={ref}
      id="presence"
      className="section-padding"
      style={{ background: '#0A0D12' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 xl:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p
              className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4"
              style={{ color: '#3FAF75' }}
            >
              Industry Presence
            </p>
            <h2
              className="text-[2.4rem] md:text-[3rem] xl:text-[3.5rem] font-black leading-[1.05] tracking-[-0.025em] text-balance"
              style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
            >
              Where Innovation
              <br />
              Meets Industry
            </h2>
          </div>
          <p
            className="text-[15px] leading-relaxed max-w-xs"
            style={{ color: '#6B7280' }}
          >
            SylFlora has established a commanding presence at Nigeria&apos;s most prestigious
            trade exhibitions and business events.
          </p>
        </motion.div>

        {/* Main featured image carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden mb-8"
          style={{ height: '480px' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={current.src}
                alt={current.alt}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(10,13,18,0.85) 0%, rgba(10,13,18,0.2) 40%, transparent 100%)',
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10">
            <motion.div
              key={`caption-${active}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(63,175,117,0.2)', color: '#3FAF75' }}
                >
                  {current.year}
                </span>
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {current.label}
                </span>
              </div>
              <p
                className="text-[16px] md:text-[18px] leading-relaxed max-w-2xl"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                {current.caption}
              </p>
            </motion.div>
          </div>

          {/* Arrow controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-10 pointer-events-none">
            <button
              onClick={prev}
              className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#FFFFFF',
              }}
              aria-label="Previous image"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#FFFFFF',
              }}
              aria-label="Next image"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {events.map((event, i) => (
            <button
              key={event.label}
              onClick={() => setActive(i)}
              className="relative shrink-0 overflow-hidden rounded-xl transition-all duration-300"
              style={{
                width: '100px',
                height: '68px',
                opacity: i === active ? 1 : 0.45,
                outline: i === active ? '2px solid #3FAF75' : '2px solid transparent',
                outlineOffset: '2px',
              }}
              aria-label={`View image: ${event.label}`}
            >
              <img
                src={event.src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Bottom credibility bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-between gap-6 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-[14px]" style={{ color: '#6B7280' }}>
            Proudly exhibited at Nigeria&apos;s major trade events since 2017.
          </p>
          <div className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: '#3FAF75' }}
            />
            <span className="text-[13px] font-semibold" style={{ color: '#FFFFFF' }}>
              Lagos International Trade Fair
            </span>
            <span style={{ color: '#4B5563' }}>·</span>
            <span className="text-[13px] font-semibold" style={{ color: '#FFFFFF' }}>
              West African Trade Exhibition
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
