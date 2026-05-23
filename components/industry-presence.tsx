'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Award, Globe2, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

// Trade fair and industry presence images
const TRADEFAIR_IMAGES = [
  {
    src: '/images/Tradefair-industry-presence/Tradefair1.JPG',
    caption: 'ONICCIMA Trade Fair 2024',
    type: 'Exhibition',
  },
  {
    src: '/images/Tradefair-industry-presence/Tradefair2.PNG',
    caption: 'Product Showcase Event',
    type: 'Showcase',
  },
  {
    src: '/images/Tradefair-industry-presence/Tradefair3.PNG',
    caption: 'Industry Exhibition Stand',
    type: 'Exhibition',
  },
  {
    src: '/images/Tradefair-industry-presence/Tradefair4.JPG',
    caption: 'Trade Fair Booth',
    type: 'Exhibition',
  },
  {
    src: '/images/Tradefair-industry-presence/Tradefair5.JPG',
    caption: 'Customer Engagement',
    type: 'Networking',
  },
  {
    src: '/images/Tradefair-industry-presence/Tradefair6.PNG',
    caption: 'Product Display',
    type: 'Showcase',
  },
  {
    src: '/images/Tradefair-industry-presence/Tradefair7.PNG',
    caption: 'Industry Awards Ceremony',
    type: 'Recognition',
  },
  {
    src: '/images/Tradefair-industry-presence/Tradefair8.JPG',
    caption: 'Exhibition Visitors',
    type: 'Networking',
  },
  {
    src: '/images/Tradefair-industry-presence/Tradefair9.PNG',
    caption: 'Trade Fair Presentation',
    type: 'Exhibition',
  },
]

const RECOGNITION_IMG = '/images/recognition/Recognition.PNG'
const COMMUNITY_IMPACT = '/images/comunity-impact/Communityimpact.PNG'

const stats = [
  { icon: Award, value: '15+', label: 'Industry Awards', desc: 'Recognition for excellence' },
  { icon: Globe2, value: '50+', label: 'Trade Fairs', desc: 'National & international' },
  { icon: Users, value: '10K+', label: 'B2B Connections', desc: 'Partners & distributors' },
]

export default function IndustryPresence() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [currentSlide, setCurrentSlide] = useState(0)

  const slidesPerView = 3
  const maxSlide = TRADEFAIR_IMAGES.length - slidesPerView

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0))

  return (
    <section
      id="presence"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.18em] uppercase mb-5" style={{ color: 'var(--green)' }}>
            <span className="w-10 h-0.5 rounded" style={{ background: 'var(--green)' }} aria-hidden="true" />
            Industry Presence
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              className="text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] font-black leading-[1.0] tracking-[-0.025em] text-balance"
              style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
            >
              Building Trust Through
              <br />
              <span style={{ color: 'var(--green)' }}>Real-World Presence</span>
            </h2>
            <p
              className="text-[15px] leading-relaxed max-w-md"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              From trade fairs to industry awards, SylFlora maintains an active presence in 
              Nigeria&apos;s commercial landscape — connecting with partners and earning recognition.
            </p>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex items-center gap-5 p-7 transition-colors duration-300 hover:bg-white/[0.02]"
                style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(27,122,76,0.1)', border: '1px solid rgba(27,122,76,0.2)' }}
                >
                  <Icon size={22} style={{ color: 'var(--green)' }} />
                </div>
                <div>
                  <p className="text-[2rem] font-black text-white leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </p>
                  <p className="text-[12px] font-bold text-white/80 mt-1">{stat.label}</p>
                  <p className="text-[11px] text-white/40 mt-0.5">{stat.desc}</p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Main Editorial Layout */}
        <div className="grid grid-cols-12 gap-4 mb-4">
          {/* Featured Large Image - Recognition/Award */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="col-span-12 lg:col-span-7 relative overflow-hidden group"
            style={{ height: '420px' }}
          >
            <Image
              src={RECOGNITION_IMG}
              alt="SylFlora Industries receiving ONICCIMA Award for Best Tissue & Serviette Producer"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.9) 0%, rgba(8,13,24,0.3) 40%, transparent 70%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                <Award size={14} style={{ color: 'var(--green)' }} />
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--green)' }}>
                  Award Recognition
                </p>
              </div>
              <h3 className="text-[22px] md:text-[26px] font-black text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                ONICCIMA Award 2024
              </h3>
              <p className="text-[13px] text-white/60 mt-2 max-w-md">
                Recognized as the Best Tissue & Serviette Producer at the Onitsha Chamber of 
                Commerce, Industry, Mines and Agriculture annual awards.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stacked */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            {/* Trade Fair Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative overflow-hidden group flex-1"
              style={{ minHeight: '200px' }}
            >
              <Image
                src={TRADEFAIR_IMAGES[0].src}
                alt="SylFlora exhibition booth at trade fair"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.85) 0%, transparent 60%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--green)' }}>
                  Exhibition
                </p>
                <p className="text-[15px] font-bold text-white">Trade Fair Presence</p>
              </div>
            </motion.div>

            {/* Community Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="relative overflow-hidden group flex-1"
              style={{ minHeight: '200px' }}
            >
              <Image
                src={COMMUNITY_IMPACT}
                alt="SylFlora community impact and social responsibility initiatives"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.85) 0%, transparent 60%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--blue-light)' }}>
                  Community
                </p>
                <p className="text-[15px] font-bold text-white">Social Impact Initiatives</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Gallery with Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12"
        >
          {/* Gallery Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: 'var(--green)' }}>
                Photo Gallery
              </p>
              <h3 className="text-[1.25rem] font-black text-white mt-1" style={{ fontFamily: 'var(--font-display)' }}>
                Trade Fairs & Exhibitions
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="w-10 h-10 flex items-center justify-center transition-all duration-300 disabled:opacity-30"
                style={{ 
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#FFFFFF',
                }}
                aria-label="Previous images"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= maxSlide}
                className="w-10 h-10 flex items-center justify-center transition-all duration-300 disabled:opacity-30"
                style={{ 
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#FFFFFF',
                }}
                aria-label="Next images"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Gallery Slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {TRADEFAIR_IMAGES.slice(currentSlide, currentSlide + slidesPerView).map((image, i) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="relative overflow-hidden group"
                    style={{ height: '240px' }}
                  >
                    <Image
                      src={image.src}
                      alt={image.caption}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.9) 0%, rgba(8,13,24,0.2) 50%, transparent 70%)' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-[9px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--green)' }}>
                        {image.type}
                      </p>
                      <p className="text-[13px] font-bold text-white">{image.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: currentSlide === i ? 'var(--green)' : 'rgba(255,255,255,0.2)',
                  transform: currentSlide === i ? 'scale(1.2)' : 'scale(1)',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-[14px] text-white/50 mb-6 max-w-lg mx-auto">
            Interested in partnering with a trusted industry leader? Join our growing network of 
            distributors and retailers across Nigeria and West Africa.
          </p>
          <button
            onClick={() => document.getElementById('distributor')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300"
            style={{ background: 'var(--green)', color: '#FFFFFF' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--green-light)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--green)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Become a Distributor
            <span aria-hidden="true">&rarr;</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
