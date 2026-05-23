'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MessageCircle, ArrowRight, Package, Store, Truck, Building2 } from 'lucide-react'

const regions = [
  'All 36 Nigerian States + FCT',
  'Ghana',
  'Cameroon',
  'Togo',
  'Benin Republic',
  'International',
]

const partnerTypes = [
  { icon: Store, label: 'Supermarkets' },
  { icon: Package, label: 'Wholesalers' },
  { icon: Truck, label: 'Distributors' },
  { icon: Building2, label: 'Retailers' },
]

const advantages = [
  'Competitive wholesale margins',
  'Consistent nationwide supply',
  'Dedicated account manager',
  'Direct factory pricing',
  'Flexible order quantities',
  'Nationwide logistics support',
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
      className="relative overflow-hidden"
      style={{ background: 'var(--dark-bg)' }}
    >
      {/* Top cyan rule */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'var(--cyan)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-24 md:py-32">

        {/* Partner type strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {partnerTypes.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-5 py-3"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Icon size={14} style={{ color: 'var(--cyan)' }} aria-hidden="true" />
              <span
                className="text-[11px] font-bold tracking-[0.12em] uppercase"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — messaging */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <div>
              <p className="tag-cyan mb-5" style={{ color: 'var(--cyan)' }}>
                <span className="rule-cyan" aria-hidden="true" />
                Distribution Network
              </p>
              <h2
                className="text-[2.5rem] md:text-[3rem] xl:text-[3.25rem] font-black leading-[1.0] tracking-[-0.025em] text-balance"
                style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
              >
                Partner With a Trusted
                <br />
                <span style={{ color: 'var(--cyan)' }}>Hygiene Manufacturer</span>
              </h2>
            </div>

            <p className="text-[16px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Join our growing network of distributors carrying SylFlora products to millions
              of Nigerian and West African households. Competitive margins, reliable supply
              chains, and dedicated account support from our Anambra production facility.
            </p>

            {/* Advantages grid */}
            <div className="grid grid-cols-2 gap-3">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.45 }}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{ background: 'var(--cyan)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-[12px] font-semibold"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {adv}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Active regions */}
            <div>
              <p
                className="text-[10px] font-bold tracking-[0.15em] uppercase mb-4"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                Active Distribution Zones
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1.5 text-[10px] font-semibold tracking-wide"
                    style={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct contacts */}
            <div className="flex flex-col gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <p
                className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                Direct Sales Contacts
              </p>
              {[
                {
                  href: 'https://wa.me/2348035429082',
                  Icon: MessageCircle,
                  label: 'WhatsApp Sales',
                  value: '+234 803 542 9082',
                  iconColor: '#25D366',
                },
                {
                  href: 'tel:+2348035429082',
                  Icon: Phone,
                  label: 'Call Us',
                  value: '+234 803 542 9082 / 08161425922',
                  iconColor: 'var(--cyan)',
                },
                {
                  href: 'mailto:info@sylflora.com',
                  Icon: Mail,
                  label: 'Email',
                  value: 'info@sylflora.com',
                  iconColor: 'var(--cyan)',
                },
              ].map(({ href, Icon, label, value, iconColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 group transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,168,198,0.35)'
                    e.currentTarget.style.background = 'rgba(0,168,198,0.05)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <Icon size={16} style={{ color: iconColor }} aria-hidden="true" />
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-white">{label}</p>
                    <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{value}</p>
                  </div>
                  <ArrowRight size={14} className="shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--cyan)' }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="p-8 md:p-10"
              style={{
                background: 'var(--dark-elevated)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-6 py-16 text-center"
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center"
                    style={{ background: 'rgba(0,168,198,0.1)', border: '1px solid rgba(0,168,198,0.3)' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="var(--cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      Inquiry Received
                    </h3>
                    <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Our sales team will contact you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-[20px] font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      Distributor Inquiry
                    </h3>
                    <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      Fill in this form and our team will be in touch.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                        { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+234 ...' },
                      ].map((field) => (
                        <div key={field.id} className="flex flex-col gap-1.5">
                          <label
                            htmlFor={field.id}
                            className="text-[10px] font-bold tracking-[0.12em] uppercase"
                            style={{ color: 'rgba(255,255,255,0.35)' }}
                          >
                            {field.label}
                          </label>
                          <input
                            id={field.id}
                            type={field.type}
                            required
                            placeholder={field.placeholder}
                            suppressHydrationWarning
                            className="w-full px-4 py-3.5 text-[13px] focus:outline-none transition-colors"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: '#FFFFFF',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-[10px] font-bold tracking-[0.12em] uppercase"
                        style={{ color: 'rgba(255,255,255,0.35)' }}
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        suppressHydrationWarning
                        className="w-full px-4 py-3.5 text-[13px] focus:outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="region"
                        className="text-[10px] font-bold tracking-[0.12em] uppercase"
                        style={{ color: 'rgba(255,255,255,0.35)' }}
                      >
                        Distribution Region
                      </label>
                      <select
                        id="region"
                        required
                        suppressHydrationWarning
                        className="w-full px-4 py-3.5 text-[13px] focus:outline-none transition-colors"
                        style={{
                          background: 'rgba(11,17,32,0.9)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.7)',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--cyan)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      >
                        <option value="">Select your region</option>
                        {regions.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="text-[10px] font-bold tracking-[0.12em] uppercase"
                        style={{ color: 'rgba(255,255,255,0.35)' }}
                      >
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Tell us about your business..."
                        suppressHydrationWarning
                        className="w-full px-4 py-3.5 text-[13px] focus:outline-none transition-colors resize-none"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <button
                      type="submit"
                      suppressHydrationWarning
                      className="w-full py-4 text-[12px] font-bold uppercase tracking-[0.1em] mt-1 transition-all duration-300"
                      style={{ background: 'var(--cyan)', color: '#FFFFFF' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--cyan-light)'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--cyan)'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      Submit Distributor Inquiry &rarr;
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
