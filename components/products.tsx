'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Category = 'All' | 'Toilet Tissue' | 'Facial Tissue' | 'Serviettes' | 'Diapers' | 'Handkerchiefs'

const categories: Category[] = [
  'All',
  'Toilet Tissue',
  'Facial Tissue',
  'Serviettes',
  'Diapers',
  'Handkerchiefs',
]

// Product category highlights using local images
const ecosystemCategories = [
  {
    name: 'Toilet Tissue',
    desc: 'Premium 300-sheet rolls in multiple plies. Soft, strong, and hygienic.',
    img: '/images/products/Royal_flora_tissue.JPG',
    count: '8 SKUs',
    color: 'var(--green)',
  },
  {
    name: 'Serviettes',
    desc: 'Table napkins and serviettes for hospitality and everyday use.',
    img: '/images/products/Sylflora_serviette.JPG',
    count: '5 SKUs',
    color: 'var(--blue)',
  },
  {
    name: 'Facial Tissue',
    desc: 'Soft facial tissues in pocket packs and box formats.',
    img: '/images/products/Sylflora_facialandtabletissue.JPG',
    count: '6 SKUs',
    color: 'var(--green)',
  },
  {
    name: 'Diapers',
    desc: 'SylFlora premium diapers — ultra-soft, high absorbency, baby-safe.',
    img: '/images/products/Sylflora_babydiapers1.JPG',
    count: '4 sizes',
    color: 'var(--blue)',
  },
]

interface Product {
  name: string
  category: Exclude<Category, 'All'>
  src: string
  featured?: boolean
}

const products: Product[] = [
  // Toilet Tissue
  {
    name: 'Royal Flora',
    category: 'Toilet Tissue',
    src: '/images/products/Royal_flora_tissue.JPG',
    featured: true,
  },
  {
    name: 'Soft Flora',
    category: 'Toilet Tissue',
    src: '/images/products/Soft_flora_tissuepaper.JPG',
  },
  {
    name: 'Morning Flora',
    category: 'Toilet Tissue',
    src: '/images/products/Morning_flora_softtissue.JPG',
  },
  {
    name: 'Daily Flora',
    category: 'Toilet Tissue',
    src: '/images/products/Daily_flora_tissuepaper.PNG',
  },
  {
    name: 'Blessed Flora',
    category: 'Toilet Tissue',
    src: '/images/products/Blessed_flora_tissuepaper.PNG',
  },
  // Facial Tissue
  {
    name: 'SylFlora Facial Tissue',
    category: 'Facial Tissue',
    src: '/images/products/Sylflora_facialandtabletissue.JPG',
    featured: true,
  },
  {
    name: 'SylFlora Facial Box',
    category: 'Facial Tissue',
    src: '/images/products/Sylflora_facialandtabletissue1.JPG',
  },
  {
    name: 'Daily Flora Facial',
    category: 'Facial Tissue',
    src: '/images/products/Dailyflora_facialandtabletissue.JPG',
  },
  {
    name: 'SylFlora Premium',
    category: 'Facial Tissue',
    src: '/images/products/Sylflora_facialandtabletissue3.JPG',
  },
  {
    name: 'SylFlora Cube',
    category: 'Facial Tissue',
    src: '/images/products/Sylflora_facialandtabletissue4.JPG',
  },
  {
    name: 'SylFlora Compact',
    category: 'Facial Tissue',
    src: '/images/products/Sylflora_facialandtabletissue5.JPG',
  },
  // Serviettes
  {
    name: 'SylFlora Serviette',
    category: 'Serviettes',
    src: '/images/products/Sylflora_serviette.JPG',
    featured: true,
  },
  {
    name: 'Daily Flora Serviette',
    category: 'Serviettes',
    src: '/images/products/Daily_flora_serviette.JPG',
  },
  {
    name: 'Soft Flora Serviette',
    category: 'Serviettes',
    src: '/images/products/Softflora_serviette1.JPG',
  },
  {
    name: 'SylFlora Premium Serviette',
    category: 'Serviettes',
    src: '/images/products/Sylflora_serviette4.JPG',
  },
  {
    name: 'Daily Flora Green',
    category: 'Serviettes',
    src: '/images/products/Dailyflora_serviette.JPG',
  },
  {
    name: 'Sylflora Napkin',
    category: 'Serviettes',
    src: '/images/products/Sylflora-Serviette.JPG',
  },
  // Diapers
  {
    name: 'SylFlora Baby Diapers',
    category: 'Diapers',
    src: '/images/products/Sylflora_babydiapers1.JPG',
    featured: true,
  },
  {
    name: 'SylFlora Diapers Pack',
    category: 'Diapers',
    src: '/images/products/Sylflora_babydiapers2.JPG',
  },
  {
    name: 'SylFlora Premium Diapers',
    category: 'Diapers',
    src: '/images/products/Sylflora_babydiapers3.JPG',
  },
  {
    name: 'Baby Diapers Box',
    category: 'Diapers',
    src: '/images/products/Babydiapers.PNG',
  },
  {
    name: 'SylFlora Diapers Range',
    category: 'Diapers',
    src: '/images/products/Sylflora_baby_diapers.PNG',
  },
  // Handkerchiefs
  {
    name: 'SylFlora Pocket Tissue',
    category: 'Handkerchiefs',
    src: '/images/products/Pocket_tissue.JPG',
    featured: true,
  },
  {
    name: 'Tissue Handkerchief',
    category: 'Handkerchiefs',
    src: '/images/products/Sylflora_tissuehandkerchief.PNG',
  },
  {
    name: 'Pocket Pack Green',
    category: 'Handkerchiefs',
    src: '/images/products/Sylflora_tissuehandkerchief1.PNG',
  },
  {
    name: 'Pocket Pack Blue',
    category: 'Handkerchiefs',
    src: '/images/products/Sylflora_tissuehandkerchief2.PNG',
  },
  {
    name: 'Pocket Tissue Teal',
    category: 'Handkerchiefs',
    src: '/images/products/Pocket tissue.PNG',
  },
  // Uncle Bruno Collection
  {
    name: 'Uncle Bruno Facial',
    category: 'Facial Tissue',
    src: '/images/products/Uncle_bruno_facialtissue.JPG',
  },
  {
    name: 'Uncle Bruno Box',
    category: 'Facial Tissue',
    src: '/images/products/Uncle_bruno_facialtissue1.JPG',
  },
  {
    name: 'Uncle Bruno Premium',
    category: 'Facial Tissue',
    src: '/images/products/Uncle Bruno-facialtissue2.JPG',
  },
  {
    name: 'Uncle Bruno Classic',
    category: 'Facial Tissue',
    src: '/images/products/Unclebruno-facialtissue.JPG',
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
          <p className="tag-green mb-5">
            <span className="rule-green" aria-hidden="true" />
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
              onClick={() => setActive(cat.name as Category)}
            >
              <div className="overflow-hidden relative" style={{ height: '180px' }}>
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                    style={{ color: 'var(--green)' }}
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
            {featuredProducts.length > 0 && (
              <div className={`grid gap-4 mb-4 ${featuredProducts.length === 1 ? 'grid-cols-1 md:grid-cols-2' : featuredProducts.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
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
                      <Image
                        src={product.src}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <div
                        className="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-bold tracking-[0.12em] uppercase"
                        style={{ background: 'var(--green)', color: '#FFFFFF' }}
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
                        style={{ color: 'var(--green)' }}
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
              {regularProducts.map((product, i) => (
                <motion.article
                  key={`${product.name}-${product.category}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (featuredProducts.length > 0 ? 0.15 : 0) + i * 0.03,
                    duration: 0.45,
                  }}
                  className="group cursor-pointer"
                >
                  <div
                    className="relative overflow-hidden aspect-square img-reveal"
                    style={{ background: 'var(--neutral-100)' }}
                  >
                    <Image
                      src={product.src}
                      alt={product.name}
                      fill
                      className="object-cover"
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
              style={{ color: 'var(--green)' }}
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
            style={{ background: 'var(--green)', color: '#FFFFFF' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--green-light)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--green)'
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
