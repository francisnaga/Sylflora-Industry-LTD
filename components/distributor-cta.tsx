'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MessageCircle, ArrowRight, MapPin, Globe2 } from 'lucide-react'

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
      className="py-24 md:py-32 bg-[#0D0F14] overflow-hidden relative"
    >
      {/* Gold glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#C6A969]/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#C6A969]/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — messaging */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#C6A969] uppercase mb-4">
                Distribution Network
              </p>
              <h2
                className="text-[2.4rem] md:text-[3.2rem] font-extrabold text-white leading-tight tracking-tight text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Partner With A Trusted Hygiene Manufacturer
              </h2>
            </div>
            <p className="text-[16px] text-[#9CA3AF] leading-relaxed">
              Join our growing network of distributors carrying SylFlora products to millions of
              Nigerian and West African households. We offer competitive margins, dedicated support,
              and reliable supply chains from our Anambra production facility.
            </p>

            {/* Active regions */}
            <div>
              <p className="text-[11px] font-semibold text-[#C6A969] tracking-widest uppercase mb-4 flex items-center gap-2">
                <Globe2 size={13} />
                Active Distribution Zones
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1.5 rounded-full border border-[#2A2F3A] bg-[#161A22] text-[11px] font-medium text-[#D1D5DB]"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact options */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/2347036606036"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#161A22] border border-[#2A2F3A] hover:border-[#C6A969]/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                  <MessageCircle size={16} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white group-hover:text-[#C6A969] transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-[11px] text-[#6B7280]">+234 703 660 6036</p>
                </div>
                <ArrowRight size={14} className="text-[#6B7280] ml-auto group-hover:text-[#C6A969] transition-colors" />
              </a>
              <a
                href="tel:+2347036606036"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#161A22] border border-[#2A2F3A] hover:border-[#C6A969]/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#C6A969]/15 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#C6A969]" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white group-hover:text-[#C6A969] transition-colors">
                    Call Us
                  </p>
                  <p className="text-[11px] text-[#6B7280]">+234 703 660 6036</p>
                </div>
                <ArrowRight size={14} className="text-[#6B7280] ml-auto group-hover:text-[#C6A969] transition-colors" />
              </a>
              <a
                href="mailto:info@sylflora.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#161A22] border border-[#2A2F3A] hover:border-[#C6A969]/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#3B82F6]/15 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white group-hover:text-[#C6A969] transition-colors">
                    Email
                  </p>
                  <p className="text-[11px] text-[#6B7280]">info@sylflora.com</p>
                </div>
                <ArrowRight size={14} className="text-[#6B7280] ml-auto group-hover:text-[#C6A969] transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-8 md:p-10 rounded-3xl bg-[#161A22] border border-[#2A2F3A]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-5 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C6A969]/15 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="#C6A969" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-[20px] font-extrabold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Inquiry Received
                    </h3>
                    <p className="text-[14px] text-[#9CA3AF] mt-2">
                      Our team will be in touch with you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <>
                  <h3
                    className="text-[20px] font-extrabold text-white mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Distributor Inquiry
                  </h3>
                  <p className="text-[13px] text-[#6B7280] mb-7">
                    Fill out this form and our team will contact you.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[11px] font-semibold text-[#9CA3AF] tracking-wide uppercase">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          suppressHydrationWarning
                          className="w-full px-4 py-3 rounded-xl bg-[#0D0F14] border border-[#2A2F3A] text-[14px] text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#C6A969]/60 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-[11px] font-semibold text-[#9CA3AF] tracking-wide uppercase">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+234 ..."
                          suppressHydrationWarning
                          className="w-full px-4 py-3 rounded-xl bg-[#0D0F14] border border-[#2A2F3A] text-[14px] text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#C6A969]/60 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[11px] font-semibold text-[#9CA3AF] tracking-wide uppercase">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        suppressHydrationWarning
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0F14] border border-[#2A2F3A] text-[14px] text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#C6A969]/60 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="region" className="text-[11px] font-semibold text-[#9CA3AF] tracking-wide uppercase">
                        Distribution Region
                      </label>
                      <select
                        id="region"
                        required
                        suppressHydrationWarning
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0F14] border border-[#2A2F3A] text-[14px] text-[#D1D5DB] focus:outline-none focus:border-[#C6A969]/60 transition-colors"
                      >
                        <option value="">Select your region</option>
                        {regions.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[11px] font-semibold text-[#9CA3AF] tracking-wide uppercase">
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Tell us about your business..."
                        suppressHydrationWarning
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0F14] border border-[#2A2F3A] text-[14px] text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#C6A969]/60 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      suppressHydrationWarning
                      className="w-full py-4 rounded-xl bg-[#C6A969] text-[#111827] text-[14px] font-bold tracking-wide hover:bg-[#DFC490] transition-colors mt-1"
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
