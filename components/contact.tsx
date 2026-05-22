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
    color: '#2D8A5A',
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
      className="py-28 md:py-36 lg:py-44 relative overflow-hidden"
      style={{ background: '#0F172A' }}
    >
      {/* Ambient gradient */}
      <div 
        className="absolute top-0 left-1/2 w-[800px] h-[600px] rounded-full pointer-events-none -translate-x-1/2"
        style={{ 
          background: 'radial-gradient(ellipse, rgba(45,138,90,0.06) 0%, transparent 60%)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-12"
          >
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-4"
                style={{ color: '#4FA870' }}
              >
                <span className="h-px w-10" style={{ background: '#4FA870' }} />
                Get In Touch
              </p>
              <h2
                className="text-[2.75rem] md:text-[3.25rem] font-black leading-[1.02] tracking-[-0.03em] text-balance"
                style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
              >
                Let&apos;s build something
                <br />
                <span style={{ color: '#4FA870' }}>together.</span>
              </h2>
              <p
                className="mt-6 text-[17px] leading-[1.75]"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                Whether you&apos;re a distributor, retailer, or buyer — we&apos;d love
                to hear from you. Reach out through any channel below.
              </p>
            </div>

            {/* Contact methods — refined cards */}
            <div className="flex flex-col gap-4">
              {contactMethods.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-5 p-5 rounded-2xl transition-all duration-400"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {label}
                    </span>
                    <span className="text-[16px] font-semibold" style={{ color: '#FFFFFF' }}>
                      {value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Addresses — cleaner layout */}
            <div className="flex flex-col gap-8 pt-4">
              <div className="flex gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(45,138,90,0.1)' }}
                >
                  <MapPin size={16} style={{ color: '#4FA870' }} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    Factory
                  </p>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    Phase II, Block 39 Plot 10, Unique Estate Nkwelle Ogidi,
                    <br />Idemili North LGA, Anambra State
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(47,128,237,0.1)' }}
                >
                  <MapPin size={16} style={{ color: '#2F80ED' }} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
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
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-[2rem] p-10 md:p-12"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.15)'
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-6 py-20 text-center"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(63,175,117,0.12)' }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="#4FA870" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-[24px] font-black text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Message Sent
                    </h3>
                    <p className="text-[15px] mt-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Our team will get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <>
                  <h3
                    className="text-[22px] font-black mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
                  >
                    Send a Message
                  </h3>
                  <p className="text-[14px] mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    We respond to all inquiries within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="c-name" className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Name
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full px-5 py-4 rounded-xl text-[14px] focus:outline-none transition-colors"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: '#FFFFFF',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = 'rgba(79,168,112,0.5)')}
                          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="c-phone" className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Phone
                        </label>
                        <input
                          id="c-phone"
                          type="tel"
                          placeholder="+234 ..."
                          className="w-full px-5 py-4 rounded-xl text-[14px] focus:outline-none transition-colors"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: '#FFFFFF',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = 'rgba(79,168,112,0.5)')}
                          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-email" className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Email
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-5 py-4 rounded-xl text-[14px] focus:outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(79,168,112,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-subject" className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Subject
                      </label>
                      <select
                        id="c-subject"
                        required
                        className="w-full px-5 py-4 rounded-xl text-[14px] focus:outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.7)',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(79,168,112,0.5)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                      >
                        <option value="" style={{ background: '#0F172A' }}>Select subject</option>
                        <option value="distribution" style={{ background: '#0F172A' }}>Distribution Inquiry</option>
                        <option value="product" style={{ background: '#0F172A' }}>Product Information</option>
                        <option value="bulk" style={{ background: '#0F172A' }}>Bulk Order</option>
                        <option value="other" style={{ background: '#0F172A' }}>Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-message" className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Message
                      </label>
                      <textarea
                        id="c-message"
                        required
                        rows={4}
                        placeholder="Tell us how we can help..."
                        className="w-full px-5 py-4 rounded-xl text-[14px] focus:outline-none transition-colors resize-none"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(79,168,112,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-[14px] font-bold tracking-wide mt-2 transition-all duration-300"
                      style={{ 
                        background: '#2D8A5A', 
                        color: '#FFFFFF',
                        boxShadow: '0 4px 12px rgba(45,138,90,0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#248C52'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#2D8A5A'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
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
