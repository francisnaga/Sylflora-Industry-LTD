'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
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
  {
    name: 'SylFlora Toilet Tissue (Blue)',
    category: 'Toilet Tissue',
    src: '/images/products/remote-tissue/remote-tissue-1.jpg',
  },
  {
    name: 'SylFlora Toilet Tissue (Red)',
    category: 'Toilet Tissue',
    src: '/images/products/remote-tissue/remote-tissue-2.jpg',
  },
  {
    name: 'SylFlora Toilet Tissue (Yellow)',
    category: 'Toilet Tissue',
    src: '/images/products/remote-tissue/remote-tissue-3.jpg',
  },
  {
    name: 'SylFlora Toilet Tissue (Orange)',
    category: 'Toilet Tissue',
    src: '/images/products/remote-tissue/remote-tissue-4.jpg',
  },
  {
    name: 'White Flora Bathroom Tissue (Blue)',
    category: 'Toilet Tissue',
    src: '/images/products/remote-tissue/remote-tissue-5.png',
  },
  {
    name: 'White Flora Bathroom Tissue (Green)',
    category: 'Toilet Tissue',
    src: '/images/products/remote-tissue/remote-tissue-6.png',
  },
  {
    name: 'Golden Flora Restroom Tissue',
    category: 'Toilet Tissue',
    src: '/images/products/remote-tissue/remote-tissue-7.jpg',
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
  // Uncle Bruno Collection
  {
    name: 'Uncle Bruno Classic',
    category: 'Handkerchiefs',
    src: '/images/products/Unclebruno-facialtissue.JPG',
  },
  {
    name: 'Uncle Bruno Premium',
    category: 'Handkerchiefs',
    src: '/images/products/Uncle Bruno-facialtissue2.JPG',
  },
  {
    name: 'Uncle Bruno Pocket',
    category: 'Handkerchiefs',
    src: '/images/products/Uncle_bruno_facialtissue.JPG',
  },
  {
    name: 'Uncle Bruno Box',
    category: 'Handkerchiefs',
    src: '/images/products/Uncle_bruno_facialtissue1.JPG',
  },
]

const categoryMeta: Record<Exclude<Category, 'All'>, { focus: string; useCase: string }> = {
  'Toilet Tissue': {
    focus: 'High-capacity rolls and household tissue formats',
    useCase: 'Retail, hospitality, and institutional washrooms',
  },
  'Facial Tissue': {
    focus: 'Soft facial and table tissue options in boxed and portable formats',
    useCase: 'Daily-use consumer and office environments',
  },
  Serviettes: {
    focus: 'Disposable service solutions for hospitality and food service',
    useCase: 'Hotels, restaurants, catering, and events',
  },
  Diapers: {
    focus: 'Comfort-focused baby care products in multiple sizes',
    useCase: 'Retail, wholesale, and family health channels',
  },
  Handkerchiefs: {
    focus: 'Pocket and travel-friendly tissue formats',
    useCase: 'Convenience retail and on-the-go consumer needs',
  },
}

export default function Products() {
  const [active, setActive] = useState<Category>('All')
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768)
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)

    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  const familyGroups = useMemo(() => (
    categories
      .filter((category) => category !== 'All')
      .map((category) => ({
        name: category,
        items: products.filter((product) => product.category === category),
      }))
  ), [])

  const groupedProducts = useMemo(() => {
    if (active === 'All' && isMobile) {
      return []
    }

    if (active === 'All') {
      return familyGroups
    }

    return [
      {
        name: active,
        items: products.filter((product) => product.category === active),
      },
    ]
  }, [active, familyGroups, isMobile])

  const handleFamilySelect = (category: Exclude<Category, 'All'>) => {
    setActive(category)

    if (typeof window === 'undefined') {
      return
    }

    window.setTimeout(() => {
      document.getElementById(`family-${category}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 30)
  }

  const handleBackToAll = () => {
    setActive('All')

    if (typeof window === 'undefined') {
      return
    }

    window.setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 30)
  }

  const mobilePreviewCards = isMobile && active === 'All'

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
          className="hidden md:flex items-center gap-2 flex-wrap mb-12"
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
                  background: isActive ? 'var(--blue)' : 'transparent',
                  color: isActive ? '#FFFFFF' : 'var(--neutral-500)',
                  border: isActive ? '1px solid var(--blue)' : '1px solid var(--neutral-300)',
                }}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>

        {mobilePreviewCards && (
          <div className="space-y-3 mb-8">
            {familyGroups.map((group, index) => (
              <motion.button
                key={group.name}
                type="button"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                onClick={() => handleFamilySelect(group.name as Exclude<Category, 'All'>)}
                className="w-full text-left rounded-[1.35rem] border p-4 shadow-[0_16px_40px_rgba(10,22,40,0.08)] transition-transform duration-300 active:scale-[0.99]"
                style={{
                  background: 'linear-gradient(180deg, rgba(248,250,252,0.96), #FFFFFF)',
                  borderColor: 'var(--neutral-200)',
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: 'var(--green)' }}>
                      Product family
                    </p>
                    <h3
                      className="text-[1.08rem] font-black leading-tight"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
                    >
                      {group.name}
                    </h3>
                    <p className="text-[12px] mt-2 leading-relaxed" style={{ color: 'var(--neutral-500)' }}>
                      {categoryMeta[group.name as Exclude<Category, 'All'>].focus}
                    </p>
                  </div>
                  <span
                    className="shrink-0 px-3 py-1 text-[10px] font-bold uppercase rounded-full"
                    style={{ background: 'rgba(21, 101, 192, 0.12)', color: 'var(--blue)' }}
                  >
                    Open
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {group.items.slice(0, 2).map((product) => (
                    <div
                      key={product.name}
                      className="overflow-hidden rounded-[1rem] border"
                      style={{ background: 'var(--neutral-100)', borderColor: 'rgba(221,228,235,0.9)' }}
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={product.src}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {isMobile && active !== 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <button
              type="button"
              onClick={handleBackToAll}
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300"
              style={{ background: 'var(--navy)', color: '#FFFFFF' }}
            >
              ← Back to families
            </button>
          </motion.div>
        )}

        {/* Product catalog */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-12">
              {groupedProducts.map((group, index) => (
                <motion.section
                  key={group.name}
                  id={`family-${group.name}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.75rem] p-5 md:p-6 shadow-[0_20px_48px_rgba(10,22,40,0.08)]"
                  style={{ background: 'linear-gradient(180deg, rgba(248,250,252,0.95), #FFFFFF)', border: '1px solid var(--neutral-200)' }}
                >
                  <div className="mb-6">
                    <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-2" style={{ color: 'var(--green)' }}>
                      Product family
                    </p>
                    <h3
                      className="text-[1.4rem] md:text-[1.65rem] font-black"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
                    >
                      {group.name}
                    </h3>
                    <p className="text-[13px] mt-2 max-w-2xl" style={{ color: 'var(--neutral-500)' }}>
                      {categoryMeta[group.name as Exclude<Category, 'All'>].focus}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {group.items.map((product, itemIndex) => (
                      <motion.article
                        key={`${group.name}-${product.name}`}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: itemIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="group"
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
                          {product.featured && (
                            <div
                              className="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-bold tracking-[0.12em] uppercase"
                              style={{ background: 'var(--green)', color: '#FFFFFF' }}
                            >
                              Featured
                            </div>
                          )}
                        </div>
                        <div className="pt-3 pb-1">
                          <h4 className="text-[13px] font-bold" style={{ color: 'var(--navy)' }}>
                            {product.name}
                          </h4>
                          <p className="text-[11px] mt-1" style={{ color: 'var(--neutral-400)' }}>
                            {product.category}
                          </p>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.section>
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
