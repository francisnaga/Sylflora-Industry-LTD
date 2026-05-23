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

// Product category highlights using real uploaded images
const ecosystemCategories = [
  {
    name: 'Toilet Tissue',
    desc: 'Premium 300-sheet rolls in multiple plies. Soft, strong, and hygienic.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5653-e0XGqCAhykuvSTDYNvLPIDRsZvcLxl.png',
    count: '8 SKUs',
    color: 'var(--cyan)',
  },
  {
    name: 'Serviettes & Napkins',
    desc: 'Table napkins and serviettes for hospitality and everyday use.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5642-v5dcrdhMk5R9uc4i5u8CUFWSjmjECt.jpeg',
    count: '5 SKUs',
    color: '#22A063',
  },
  {
    name: 'Facial Tissue',
    desc: 'Soft facial tissues in pocket packs and box formats.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5636-c0KeKWmhrFC4iQxZZiiS5UlGWB4hLN.jpeg',
    count: '6 SKUs',
    color: 'var(--cyan)',
  },
  {
    name: 'Baby Diapers',
    desc: 'SylFlora premium diapers — ultra-soft, high absorbency, baby-safe.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5648-5AoxXWJXgP7bPop7zbOIYOHmMCTSwi.png',
    count: '4 sizes',
    color: '#22A063',
  },
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
    name: 'Size 4 Maxi',
    category: 'Diapers',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5648-5AoxXWJXgP7bPop7zbOIYOHmMCTSwi.png',
    featured: true,
  },
  {
    name: 'Size 2 Mini',
    category: 'Diapers',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5647-aW5DHX4eYig8e6Y9F6M9lPSHD1zKfp.png',
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
  const featuredProducts = filtered.filter((p) => p.featured)
  const regularProducts = filtered.filter((p) => !p.featured)

  return (
    <section
      id="products"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="tag-cyan mb-5">
            <span className="rule-cyan" aria-hidden="true" />
            Product Ecosystem
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] font-black leading-[1.0] tracking-[-0.025em] text-balance"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
            >
              Our Product Range
            </h2>
            <p
              className="text-[15px] leading-relaxed max-w-md"
              style={{ color: 'var(--neutral-500)' }}
            >
              100% virgin wood pulp. Manufactured to strict hygiene standards. Available to
              distributors, wholesalers, and retailers nationwide.
            </p>
          </div>
        </motion.div>

        {/* Category feature cards — 4 main categories */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {ecosystemCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.6 }}
              className="group cursor-pointer overflow-hidden img-reveal"
              style={{
                border: '1px solid var(--neutral-200)',
              }}
              onClick={() => setActive(cat.name.includes('Serviette') ? 'Handkerchiefs' : cat.name as Category)}
            >
              <div className="overflow-hidden" style={{ height: '160px' }}>
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div
                className="p-5 transition-colors duration-300"
                style={{ background: '#FFFFFF' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p
                    className="text-[10px] font-bold tracking-[0.15em] uppercase"
                    style={{ color: cat.color }}
                  >
                    {cat.count}
                  </p>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--cyan)' }}
                  >
                    View &rarr;
                  </span>
                </div>
                <h3
                  className="text-[15px] font-bold leading-snug"
                  style={{ color: 'var(--navy)' }}
                >
                  {cat.name}
                </h3>
                <p
                  className="text-[12px] mt-1.5 leading-snug"
                  style={{ color: 'var(--neutral-500)' }}
                >
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          className="h-px mb-14"
          style={{ background: 'var(--neutral-200)' }}
          aria-hidden="true"
        />

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2 flex-wrap mb-12"
          role="group"
          aria-label="Filter products by category"
        >
          {categories.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300"
                style={{
                  background: isActive ? 'var(--navy)' : 'transparent',
                  color: isActive ? '#FFFFFF' : 'var(--neutral-500)',
                  border: isActive ? '1px solid var(--navy)' : '1px solid var(--neutral-300)',
                }}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured row */}
            {active === 'All' && featuredProducts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {featuredProducts.map((product, i) => (
                  <motion.article
                    key={`featured-${product.name}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="group cursor-pointer"
                  >
                    <div
                      className="relative overflow-hidden aspect-[4/5] img-reveal"
                      style={{ background: 'var(--neutral-100)' }}
                    >
                      <img
                        src={product.src}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-bold tracking-[0.12em] uppercase"
                        style={{ background: 'var(--cyan)', color: '#FFFFFF' }}
                      >
                        Featured
                      </div>
                    </div>
                    <div
                      className="px-1 pt-4 pb-2 flex items-center justify-between"
                      style={{ borderBottom: '1px solid var(--neutral-200)' }}
                    >
                      <div>
                        <h3 className="text-[15px] font-bold" style={{ color: 'var(--navy)' }}>
                          {product.name}
                        </h3>
                        <p className="text-[11px] mt-0.5" style={{ color: 'var(--neutral-400)' }}>
                          {product.category}
                        </p>
                      </div>
                      <span
                        className="text-[10px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: 'var(--cyan)' }}
                      >
                        Inquire
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Regular grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {(active === 'All' ? regularProducts : filtered).map((product, i) => (
                <motion.article
                  key={`${product.name}-${product.category}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (active === 'All' ? 0.15 : 0) + i * 0.03,
                    duration: 0.45,
                  }}
                  className="group cursor-pointer"
                >
                  <div
                    className="relative overflow-hidden aspect-square img-reveal"
                    style={{ background: 'var(--neutral-100)' }}
                  >
                    <img
                      src={product.src}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-3 pb-2">
                    <h3 className="text-[13px] font-bold" style={{ color: 'var(--navy)' }}>
                      {product.name}
                    </h3>
                    <p className="text-[11px] mt-0.5" style={{ color: 'var(--neutral-400)' }}>
                      {product.category}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 p-7 md:p-8"
          style={{
            background: 'var(--navy)',
          }}
        >
          <div>
            <p
              className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1"
              style={{ color: 'var(--cyan)' }}
            >
              Wholesale & Distribution
            </p>
            <p className="text-[17px] font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Looking to stock SylFlora products?
            </p>
          </div>
          <button
            onClick={() => document.getElementById('distributor')?.scrollIntoView({ behavior: 'smooth' })}
            className="shrink-0 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 whitespace-nowrap"
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
            Contact Our Sales Team &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  )
}
