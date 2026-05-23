'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

type Category = 'All' | 'Toilet Tissue' | 'Facial Tissue' | 'Handkerchiefs' | 'Diapers' | 'Uncle Bruno'

const categories: Category[] = [
  'All',
  'Toilet Tissue',
  'Facial Tissue',
  'Handkerchiefs',
  'Diapers',
  'Uncle Bruno',
]

interface Product {
  name: string
  category: Exclude<Category, 'All'>
  src: string
  featured?: boolean
}

const products: Product[] = [
  {
    name: 'Royal Flora',
    category: 'Toilet Tissue',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/65c79c3e-4e71-47fd-b7b5-4785d0a19606.jpeg',
    featured: true,
  },
  {
    name: 'Soft Flora',
    category: 'Toilet Tissue',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3ced33a6-b641-4221-81cf-6028947bebe3.jpeg',
  },
  {
    name: 'Morning Flora',
    category: 'Toilet Tissue',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0deb3869-95b9-4f4c-8d9e-8475fb7dd6e0.jpeg',
  },
  {
    name: 'Ultra Soft',
    category: 'Facial Tissue',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7b68f9ec-3114-4f6e-bfb4-4a1ea49b5b07.jpeg',
    featured: true,
  },
  {
    name: 'Daily Flora',
    category: 'Facial Tissue',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ae53f1b1-cfd5-4f23-a869-f89a555e367f.jpeg',
  },
  {
    name: 'Teal Box',
    category: 'Facial Tissue',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6661fa1e-f15c-43af-b2b7-0b8c3ab32982.jpeg',
  },
  {
    name: 'Pink Box',
    category: 'Facial Tissue',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1787dc60-9e8a-4039-b7ce-abb6dc701e10.jpeg',
  },
  {
    name: 'Green Pack',
    category: 'Handkerchiefs',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7a90b507-9de3-47fe-b569-32d4eff2aa4f.jpeg',
  },
  {
    name: 'Teal Pack',
    category: 'Handkerchiefs',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cffa708e-0036-4b7d-b73a-e53209c7606d.jpeg',
  },
  {
    name: 'Orange Pack',
    category: 'Handkerchiefs',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/646dfaca-2ede-4191-9b9b-3e843a17adf1.jpeg',
  },
  {
    name: 'Large (Pink)',
    category: 'Diapers',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b50b37d0-3a78-4d0d-9531-eed7687cbc6a.jpeg',
    featured: true,
  },
  {
    name: 'Medium (Teal)',
    category: 'Diapers',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d2ca6aeb-6bb6-4646-a0e0-23ffbef08caa.jpeg',
  },
  {
    name: 'Purple',
    category: 'Uncle Bruno',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/89880d4c-b09a-4019-856a-72b7bcb1e6f4.jpeg',
  },
  {
    name: 'Black',
    category: 'Uncle Bruno',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7f915b92-e428-4a8a-a5f3-94ebf1022322.jpeg',
  },
  {
    name: 'Teal',
    category: 'Uncle Bruno',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8196c764-bf8c-4c80-8b4f-5982ad82c4a6.jpeg',
  },
  {
    name: 'Coral',
    category: 'Uncle Bruno',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1b6795d1-9d04-46d1-93af-ca6e9f340dd4.jpeg',
  },
]

export default function Products() {
  const [active, setActive] = useState<Category>('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)
  
  // Separate featured and regular products for "All" view
  const featuredProducts = filtered.filter(p => p.featured)
  const regularProducts = filtered.filter(p => !p.featured)

  return (
    <section
      id="products"
      ref={ref}
      className="py-28 md:py-36 lg:py-44 relative overflow-hidden"
      style={{ background: '#F9F9F8' }}
    >
      {/* Subtle ambient gradient */}
      <div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ 
          background: 'radial-gradient(circle, rgba(45,138,90,0.02) 0%, transparent 60%)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 relative z-10">
        {/* Header — more editorial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p
            className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 flex items-center justify-center gap-4"
            style={{ color: '#2D8A5A' }}
          >
            <span className="h-px w-10" style={{ background: '#2D8A5A' }} />
            Premium Hygiene Products
            <span className="h-px w-10" style={{ background: '#2D8A5A' }} />
          </p>
          <h2
            className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-black leading-[1.02] tracking-[-0.03em] text-balance"
            style={{ fontFamily: 'var(--font-display)', color: '#1A1410' }}
          >
            Our Products
          </h2>
          <p className="mt-6 text-[17px] max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B6560' }}>
            Crafted with pure 100% virgin wood pulp. Soft, strong, reliable. Products you can trust for every moment.
          </p>
        </motion.div>

        {/* Category filter pills — refined */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex justify-center gap-3 flex-wrap mb-16"
        >
          {categories.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-6 py-3 text-[12px] font-semibold rounded-full transition-all duration-400 uppercase tracking-[0.08em] min-h-[48px]"
                style={{
                  background: isActive ? '#0F172A' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#4B5563',
                  border: isActive ? '1px solid #0F172A' : '1px solid #E5E7EB',
                  boxShadow: isActive ? '0 4px 12px rgba(15,23,42,0.15)' : 'none',
                }}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>

        {/* Product grid with hierarchy */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Featured products row (when showing All) */}
            {active === 'All' && featuredProducts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
                {featuredProducts.map((product, i) => (
                  <motion.article
                    key={`featured-${product.name}-${product.category}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group"
                  >
                    <div
                      className="relative overflow-hidden rounded-3xl aspect-[4/5] transition-all duration-500"
                      style={{
                        background: '#FFFFFF',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1)'
                        e.currentTarget.style.transform = 'translateY(-4px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <img
                        src={product.src}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Featured badge */}
                      <div 
                        className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
                        style={{ 
                          background: 'rgba(255,255,255,0.95)', 
                          backdropFilter: 'blur(8px)',
                          color: '#2D8A5A'
                        }}
                      >
                        Featured
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3
                        className="text-[17px] font-bold leading-tight"
                        style={{ color: '#0F172A' }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-[13px] mt-1.5" style={{ color: '#9CA3AF' }}>
                        {product.category}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Regular products grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {(active === 'All' ? regularProducts : filtered).map((product, i) => (
                <motion.article
                  key={`${product.name}-${product.category}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: (active === 'All' ? 0.2 : 0) + i * 0.03, 
                    duration: 0.5, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="group"
                >
                  <div
                    className="relative overflow-hidden rounded-2xl aspect-square transition-all duration-500"
                    style={{
                      background: '#FFFFFF',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
                      e.currentTarget.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <img
                      src={product.src}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <h3
                      className="text-[15px] font-bold leading-tight"
                      style={{ color: '#0F172A' }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[12px] mt-1" style={{ color: '#9CA3AF' }}>
                      {product.category}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
