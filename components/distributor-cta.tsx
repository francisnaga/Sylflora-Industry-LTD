'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MessageCircle, ArrowRight, Globe2 } from 'lucide-react'

const regions = [
  'All 36 Nigerian States + FCT',
  'Ghana',
  'Cameroon',
  'Togo',
  'Benin Republic',
  'International — Open',
]

export default function DistributorCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="distributor"
      ref={ref}
      className="py-28 md:py-36 lg:py-44 bg-[#0D0F14] overflow-hidden relative"
    >
      {/* Refined ambient glows */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,169,105,0.08) 0%, transparent 60%)' }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,169,105,0.05) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-start">

          {/* Left — messaging */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <div>
              <p 
                className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-4"
                style={{ color: '#C8A969' }}
              >
                <span className="h-px w-10" style={{ background: '#C8A969' }} />
                Distribution Network
              </p>
              <h2
                className="text-[2.75rem] md:text-[3.25rem] font-black leading-[1.02] tracking-[-0.03em] text-balance"
                style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
              >
                Partner With A Trusted
                <br />
                <span style={{ color: '#C8A969' }}>Hygiene Manufacturer</span>
              </h2>
            </div>
            <p className="text-[17px] leading-[1.75]" style={{ color: '#9CA3AF' }}>
              Join our growing network of distributors carrying SylFlora products to millions of
              Nigerian and West African households. We offer competitive margins, dedicated support,
              and reliable supply chains from our Anambra production facility.
            </p>

            {/* Active regions */}
            <div>
              <p 
                className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-5 flex items-center gap-2"
                style={{ color: '#C8A969' }}
              >
                <Globe2 size={13} />
                Active Distribution Zones
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <span
                    key={r}
                    className="px-4 py-2 rounded-full text-[11px] font-medium transition-colors duration-300"
                    style={{ 
                      border: '1px solid #2A2F3A', 
                      background: '#161A22', 
                      color: '#D1D5DB' 
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact options — refined cards */}
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/2347036606036"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-400 group"
                style={{
                  background: '#161A22',
                  border: '1px solid #2A2F3A',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,169,105,0.4)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2A2F3A'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(37,211,102,0.12)' }}
                >
                  <MessageCircle size={18} style={{ color: '#25D366' }} />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold text-white group-hover:text-[#C8A969] transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-[12px]" style={{ color: '#6B7280' }}>+234 703 660 6036</p>
                </div>
                <ArrowRight size={16} className="text-[#4B5563] group-hover:text-[#C8A969] transition-colors" />
              </a>
              <a
                href="tel:+2347036606036"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-400 group"
                style={{
                  background: '#161A22',
                  border: '1px solid #2A2F3A',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,169,105,0.4)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2A2F3A'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(200,169,105,0.12)' }}
                >
                  <Phone size={18} style={{ color: '#C8A969' }} />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold text-white group-hover:text-[#C8A969] transition-colors">
                    Call Us
                  </p>
                  <p className="text-[12px]" style={{ color: '#6B7280' }}>+234 703 660 6036</p>
                </div>
                <ArrowRight size={16} className="text-[#4B5563] group-hover:text-[#C8A969] transition-colors" />
              </a>
              <a
                href="mailto:info@sylflora.com"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-400 group"
                style={{
                  background: '#161A22',
                  border: '1px solid #2A2F3A',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,169,105,0.4)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2A2F3A'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(59,130,246,0.12)' }}
                >
                  <Mail size={18} style={{ color: '#3B82F6' }} />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold text-white group-hover:text-[#C8A969] transition-colors">
                    Email
                  </p>
                  <p className="text-[12px]" style={{ color: '#6B7280' }}>info@sylflora.com</p>
                </div>
                <ArrowRight size={16} className="text-[#4B5563] group-hover:text-[#C8A969] transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div 
              className="p-10 md:p-12 rounded-[2rem]"
              style={{
                background: '#161A22',
                border: '1px solid #2A2F3A',
                boxShadow: '0 24px 64px rgba(0,0,0,0.2)'
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-6 py-16 text-center"
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(200,169,105,0.12)' }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="#C8A969" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-[22px] font-black text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Inquiry Received
                    </h3>
                    <p className="text-[15px] mt-3" style={{ color: '#9CA3AF' }}>
                      Our team will be in touch with you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <>
                  <h3
                    className="text-[22px] font-black text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Distributor Inquiry
                  </h3>
                  <p className="text-[14px] mb-8" style={{ color: '#6B7280' }}>
                    Fill out this form and our team will contact you.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#6B7280' }}>
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          suppressHydrationWarning
                          className="w-full px-5 py-4 rounded-xl text-[14px] transition-colors focus:outline-none"
                          style={{
                            background: '#0D0F14',
                            border: '1px solid #2A2F3A',
                            color: '#FFFFFF',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = 'rgba(200,169,105,0.5)')}
                          onBlur={(e) => (e.target.style.borderColor = '#2A2F3A')}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#6B7280' }}>
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+234 ..."
                          suppressHydrationWarning
                          className="w-full px-5 py-4 rounded-xl text-[14px] transition-colors focus:outline-none"
                          style={{
                            background: '#0D0F14',
                            border: '1px solid #2A2F3A',
                            color: '#FFFFFF',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = 'rgba(200,169,105,0.5)')}
                          onBlur={(e) => (e.target.style.borderColor = '#2A2F3A')}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#6B7280' }}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        suppressHydrationWarning
                        className="w-full px-5 py-4 rounded-xl text-[14px] transition-colors focus:outline-none"
                        style={{
                          background: '#0D0F14',
                          border: '1px solid #2A2F3A',
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(200,169,105,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = '#2A2F3A')}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="region" className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#6B7280' }}>
                        Distribution Region
                      </label>
                      <select
                        id="region"
                        required
                        suppressHydrationWarning
                        className="w-full px-5 py-4 rounded-xl text-[14px] transition-colors focus:outline-none"
                        style={{
                          background: '#0D0F14',
                          border: '1px solid #2A2F3A',
                          color: '#D1D5DB',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(200,169,105,0.5)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#2A2F3A')}
                      >
                        <option value="">Select your region</option>
                        {regions.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#6B7280' }}>
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Tell us about your business..."
                        suppressHydrationWarning
                        className="w-full px-5 py-4 rounded-xl text-[14px] transition-colors focus:outline-none resize-none"
                        style={{
                          background: '#0D0F14',
                          border: '1px solid #2A2F3A',
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(200,169,105,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = '#2A2F3A')}
                      />
                    </div>
                    <button
                      type="submit"
                      suppressHydrationWarning
                      className="w-full py-4 rounded-xl text-[14px] font-bold tracking-wide transition-all duration-300 mt-2"
                      style={{ 
                        background: '#C8A969', 
                        color: '#111827',
                        boxShadow: '0 4px 12px rgba(200,169,105,0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#DFC490'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#C8A969'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
