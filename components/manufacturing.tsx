'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cog, ShieldCheck, BarChart3, Globe2, Truck, Award } from 'lucide-react'
import Image from 'next/image'

// Local manufacturing images
const FACTORY_MAIN = '/images/manufacturing/Factorymain-image.JPG'
const PRODUCTION_LINE_1 = '/images/manufacturing/Factoryproductionline.JPG'
const PRODUCTION_LINE_2 = '/images/manufacturing/Factoryproductionline2.JPG'
const PRODUCTION_LINE_3 = '/images/manufacturing/Factoryproductionline3.PNG'
const PRODUCTION_LINE_4 = '/images/manufacturing/Factoryproductionline4.PNG'
const VEHICLE_IMG = '/images/manufacturing/Factoryvehicle.JPG'
const PACKAGING_1 = '/images/packaging/Packaging.PNG'
const PACKAGING_2 = '/images/packaging/Packaging2.PNG'

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
    icon: Truck,
    title: 'Distribution Ready',
    desc: 'Warehousing and logistics infrastructure built for nationwide and West African supply.',
    num: '05',
  },
  {
    icon: Award,
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
          <p className="tag-green mb-5">
            <span className="rule-green" aria-hidden="true" />
            Inside Our Production Process
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] font-black leading-[1.0] tracking-[-0.025em] text-balance"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
            >
              Industrial-Scale
              <br />
              <span style={{ color: 'var(--green)' }}>Manufacturing Operations</span>
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
          style={{ height: '500px' }}
        >
          <Image
            src={FACTORY_MAIN}
            alt="SylFlora Industries Ltd — Nurturing a Hygienic Generation. Factory building, Ogidi Anambra State"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(8,13,24,0.85) 0%, rgba(8,13,24,0.2) 40%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          {/* Factory label */}
          <div className="absolute bottom-0 left-0 right-0 px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p
                className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2"
                style={{ color: 'var(--green)' }}
              >
                Main Facility
              </p>
              <p
                className="text-[20px] md:text-[26px] font-black text-white leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SylFlora Industries Ltd
              </p>
              <p className="text-[13px] text-white/60 mt-1">
                Ogidi, Anambra State — Est. 2014
              </p>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2.5 self-start md:self-auto"
              style={{ background: 'rgba(27,122,76,0.15)', border: '1px solid rgba(27,122,76,0.4)' }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: 'var(--green)' }}
                aria-hidden="true"
              />
              <span
                className="text-[11px] font-bold tracking-[0.12em] uppercase"
                style={{ color: 'var(--green)' }}
              >
                Operational
              </span>
            </div>
          </div>
        </motion.div>

        {/* Production Line Gallery — Asymmetrical Editorial Layout */}
        <div className="grid grid-cols-12 gap-4 mb-4">
          {/* Large production image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="col-span-12 md:col-span-7 relative overflow-hidden group"
            style={{ height: '320px' }}
          >
            <Image
              src={PRODUCTION_LINE_1}
              alt="High-speed tissue production line at SylFlora factory"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.8) 0%, transparent 50%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--green)' }}>
                Production Floor
              </p>
              <p className="text-[15px] font-bold text-white">
                High-Speed Tissue Manufacturing
              </p>
            </div>
          </motion.div>

          {/* Vertical stack */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="relative overflow-hidden group flex-1"
              style={{ minHeight: '152px' }}
            >
              <Image
                src={PRODUCTION_LINE_2}
                alt="Paper rolling machinery in operation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.75) 0%, transparent 60%)' }}
              >
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-white">Rolling Equipment</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative overflow-hidden group flex-1"
              style={{ minHeight: '152px' }}
            >
              <Image
                src={PRODUCTION_LINE_3}
                alt="Industrial slitting and cutting station"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.75) 0%, transparent 60%)' }}
              >
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-white">Slitting Station</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second row — 3 images */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="relative overflow-hidden group"
            style={{ height: '200px' }}
          >
            <Image
              src={PRODUCTION_LINE_4}
              alt="Quality control and inspection area"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
              style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.75) 0%, transparent 60%)' }}
            >
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-white">Quality Control</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative overflow-hidden group"
            style={{ height: '200px' }}
          >
            <Image
              src={PACKAGING_1}
              alt="Product packaging line"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
              style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.75) 0%, transparent 60%)' }}
            >
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-white">Packaging Line</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="relative overflow-hidden group"
            style={{ height: '200px' }}
          >
            <Image
              src={PACKAGING_2}
              alt="Finished products packaging station"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
              style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.75) 0%, transparent 60%)' }}
            >
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-white">Finished Goods</p>
            </div>
          </motion.div>
        </div>

        {/* Brand Presence / Vehicle Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative overflow-hidden mb-20"
          style={{ height: '280px' }}
        >
          <Image
            src={VEHICLE_IMG}
            alt="SylFlora branded delivery vehicle — We Don't Compete, We Lead"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div
            className="absolute inset-0 flex items-center px-8 md:px-14"
            style={{
              background: 'linear-gradient(to right, rgba(8,13,24,0.9) 0%, rgba(8,13,24,0.6) 40%, transparent 70%)',
            }}
          >
            <div className="max-w-md">
              <p
                className="text-[10px] font-bold tracking-[0.18em] uppercase mb-3"
                style={{ color: 'var(--green)' }}
              >
                National Distribution Network
              </p>
              <p
                className="text-[2rem] md:text-[2.5rem] font-black text-white leading-[1.1] text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                We Don&apos;t Compete.
                <br />
                <span style={{ color: 'var(--green)' }}>We Lead.</span>
              </p>
              <p className="text-[13px] text-white/50 mt-4 leading-relaxed">
                Fleet of branded vehicles delivering across all 36 Nigerian states and West African markets.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Capabilities grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-10"
          >
            <p className="tag-green mb-3">
              <span className="rule-green" aria-hidden="true" />
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
                  transition={{ delay: 0.6 + i * 0.07, duration: 0.5 }}
                  className="group flex flex-col gap-4 p-7 transition-colors duration-300 border-b border-r"
                  style={{
                    borderColor: 'var(--neutral-200)',
                    background: '#FFFFFF',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--blue-light)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF'
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.background = 'var(--blue-light)'
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.background = 'var(--blue-light)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={18}
                      className="transition-colors duration-300 group-hover:text-[var(--green)]"
                      style={{ color: 'var(--neutral-400)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-[10px] font-bold tracking-[0.15em] transition-colors duration-300 group-hover:text-[var(--green)]"
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
