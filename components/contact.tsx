'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+234 703 660 6036',
    href: 'https://wa.me/2347036606036',
    color: '#25D366',
  },
  {
    icon: Phone,
    label: 'Call',
    value: '+234 703 660 6036',
    href: 'tel:+2347036606036',
    color: '#2F80ED',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@sylflora.com',
    href: 'mailto:info@sylflora.com',
    color: '#3FAF75',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding"
      style={{ background: '#0F172A' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4"
                style={{ color: '#3FAF75' }}
              >
                Get In Touch
              </p>
              <h2
                className="text-[2.4rem] md:text-[3rem] font-black leading-[1.05] tracking-[-0.025em] text-balance"
                style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
              >
                Let&apos;s build something
                <br />
                together.
              </h2>
              <p
                className="mt-5 text-[16px] leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                Whether you&apos;re a distributor, retailer, or buyer — we&apos;d love
                to hear from you. Reach out through any channel below.
              </p>
            </div>

            {/* Contact methods */}
            <div className="flex flex-col gap-3">
              {contactMethods.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {label}
                    </span>
                    <span className="text-[15px] font-semibold" style={{ color: '#FFFFFF' }}>
                      {value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Addresses */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: '#3FAF75' }} />
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    Factory
                  </p>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    Phase II, Block 39 Plot 10, Unique Estate Nkwelle Ogidi,
                    <br />Idemili North LGA, Anambra State
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: '#2F80ED' }} />
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    Admin Office
                  </p>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    Plot 3, Surulere Industrial Road,
                    <br />Off Acme, Ikeja, Lagos State
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(63,175,117,0.15)' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="#3FAF75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-[22px] font-black text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Message Sent
                    </h3>
                    <p className="text-[14px] mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Our team will get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <>
                  <h3
                    className="text-[20px] font-black mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
                  >
                    Send a Message
                  </h3>
                  <p className="text-[13px] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    We respond to all inquiries within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="c-name" className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Name
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3.5 rounded-xl text-[14px] placeholder:opacity-30 focus:outline-none transition-colors"
                          style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#FFFFFF',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = 'rgba(63,175,117,0.5)')}
                          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="c-phone" className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Phone
                        </label>
                        <input
                          id="c-phone"
                          type="tel"
                          placeholder="+234 ..."
                          className="w-full px-4 py-3.5 rounded-xl text-[14px] placeholder:opacity-30 focus:outline-none transition-colors"
                          style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#FFFFFF',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = 'rgba(63,175,117,0.5)')}
                          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-email" className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Email
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3.5 rounded-xl text-[14px] placeholder:opacity-30 focus:outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(63,175,117,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-subject" className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Subject
                      </label>
                      <select
                        id="c-subject"
                        required
                        className="w-full px-4 py-3.5 rounded-xl text-[14px] focus:outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.7)',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(63,175,117,0.5)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      >
                        <option value="" style={{ background: '#0F172A' }}>Select subject</option>
                        <option value="distribution" style={{ background: '#0F172A' }}>Distribution Inquiry</option>
                        <option value="product" style={{ background: '#0F172A' }}>Product Information</option>
                        <option value="bulk" style={{ background: '#0F172A' }}>Bulk Order</option>
                        <option value="other" style={{ background: '#0F172A' }}>Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-message" className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Message
                      </label>
                      <textarea
                        id="c-message"
                        required
                        rows={4}
                        placeholder="Tell us how we can help..."
                        className="w-full px-4 py-3.5 rounded-xl text-[14px] placeholder:opacity-30 focus:outline-none transition-colors resize-none"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(63,175,117,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-[14px] font-bold tracking-wide mt-1 transition-all duration-300"
                      style={{ background: '#3FAF75', color: '#FFFFFF' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#2D8A5A')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = '#3FAF75')}
                    >
                      Send Message
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
