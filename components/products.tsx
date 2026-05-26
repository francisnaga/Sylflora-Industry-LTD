'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

interface ProductCard {
  family: 'toilet-tissue' | 'facial-tissue' | 'serviettes' | 'diapers' | 'handkerchief'
  name: string
  category: string
  src: string
  description: string
  accent: string
}

interface FamilyContent {
  title: string
  intro: string
  products: ProductCard[]
}

const showcaseProducts: ProductCard[] = [
  {
    family: 'toilet-tissue',
    name: 'Royal Flora',
    category: 'Toilet Tissue',
    src: '/images/products/Royal_flora_tissue.JPG',
    description: 'Soft, elevated, and built to feel premium in everyday use.',
    accent: 'Featured',
  },
  {
    family: 'facial-tissue',
    name: 'SylFlora Facial Tissue',
    category: 'Facial Tissue',
    src: '/images/products/Sylflora_facialandtabletissue.JPG',
    description: 'Designed for a cleaner shelf presence and a calmer, more refined feel.',
    accent: 'Signature',
  },
  {
    family: 'serviettes',
    name: 'SylFlora Serviette',
    category: 'Serviettes',
    src: '/images/products/Sylflora_serviette.JPG',
    description: 'A polished hospitality format with quiet confidence and strong visual balance.',
    accent: 'Curated',
  },
  {
    family: 'diapers',
    name: 'SylFlora Baby Diapers',
    category: 'Diapers',
    src: '/images/products/Sylflora_babydiapers1.JPG',
    description: 'A calm, trust-led presentation for a more premium baby care story.',
    accent: 'New Focus',
  },
  {
    family: 'handkerchief',
    name: 'SylFlora Tissue Handkerchief',
    category: 'Handkerchief',
    src: '/images/products/Sylflora_tissuehandkerchief.PNG',
    description: 'A softer finishing touch that brings a more complete premium household story to the showcase.',
    accent: 'New',
  },
]

const familyGroups: Record<ProductCard['family'], FamilyContent> = {
  'toilet-tissue': {
    title: 'Toilet Tissue',
    intro: 'A refined family of household formats, selected to feel understated, dependable, and premium.',
    products: [
      {
        family: 'toilet-tissue',
        name: 'Royal Flora',
        category: 'Toilet Tissue',
        src: '/images/products/Royal_flora_tissue.JPG',
        description: 'Premium finish and strong shelf presence for everyday homes.',
        accent: 'Hero',
      },
      {
        family: 'toilet-tissue',
        name: 'Soft Flora',
        category: 'Toilet Tissue',
        src: '/images/products/Soft_flora_tissuepaper.JPG',
        description: 'A smooth, reliable option with a clean and modern composition.',
        accent: 'Core',
      },
      {
        family: 'toilet-tissue',
        name: 'Morning Flora',
        category: 'Toilet Tissue',
        src: '/images/products/Morning_flora_softtissue.JPG',
        description: 'Approachable and refined, with a clear visual identity across the line.',
        accent: 'Fresh',
      },
      {
        family: 'toilet-tissue',
        name: 'Daily Flora',
        category: 'Toilet Tissue',
        src: '/images/products/Daily_flora_tissuepaper.PNG',
        description: 'A dependable everyday format kept deliberately calm and understated.',
        accent: 'Essential',
      },
    ],
  },
  'facial-tissue': {
    title: 'Facial Tissue',
    intro: 'A quieter facial tissue family designed to communicate softness, cleanliness, and confidence.',
    products: [
      {
        family: 'facial-tissue',
        name: 'SylFlora Facial Tissue',
        category: 'Facial Tissue',
        src: '/images/products/Sylflora_facialandtabletissue.JPG',
        description: 'The signature line, elevated with a restrained and polished presentation.',
        accent: 'Signature',
      },
      {
        family: 'facial-tissue',
        name: 'SylFlora Facial Box',
        category: 'Facial Tissue',
        src: '/images/products/Sylflora_facialandtabletissue1.JPG',
        description: 'A boxed format with a cleaner, more premium shelf-ready feel.',
        accent: 'Presentation',
      },
      {
        family: 'facial-tissue',
        name: 'Daily Flora Facial',
        category: 'Facial Tissue',
        src: '/images/products/Dailyflora_facialandtabletissue.JPG',
        description: 'A familiar everyday option presented with softer visual emphasis.',
        accent: 'Daily',
      },
      {
        family: 'facial-tissue',
        name: 'SylFlora Premium',
        category: 'Facial Tissue',
        src: '/images/products/Sylflora_facialandtabletissue3.JPG',
        description: 'A more elevated facial tissue option with a stronger premium finish.',
        accent: 'Premium',
      },
    ],
  },
  serviettes: {
    title: 'Serviettes',
    intro: 'Hospitality-focused serviettes with a calmer visual language and more deliberate spacing.',
    products: [
      {
        family: 'serviettes',
        name: 'SylFlora Serviette',
        category: 'Serviettes',
        src: '/images/products/Sylflora_serviette.JPG',
        description: 'A polished core format for hotels, restaurants, and premium service settings.',
        accent: 'Core',
      },
      {
        family: 'serviettes',
        name: 'Daily Flora Serviette',
        category: 'Serviettes',
        src: '/images/products/Daily_flora_serviette.JPG',
        description: 'A clean and practical option with a more considered visual balance.',
        accent: 'Commercial',
      },
      {
        family: 'serviettes',
        name: 'Soft Flora Serviette',
        category: 'Serviettes',
        src: '/images/products/Softflora_serviette1.JPG',
        description: 'A softer, more tactile note for a refined hospitality presentation.',
        accent: 'Soft Touch',
      },
      {
        family: 'serviettes',
        name: 'SylFlora Premium Serviette',
        category: 'Serviettes',
        src: '/images/products/Sylflora_serviette4.JPG',
        description: 'A more elevated serviette line with sharper visual restraint.',
        accent: 'Premium',
      },
    ],
  },
  diapers: {
    title: 'Diapers',
    intro: 'A calm baby care selection that balances comfort, trust, and a cleaner premium tone.',
    products: [
      {
        family: 'diapers',
        name: 'SylFlora Baby Diapers',
        category: 'Diapers',
        src: '/images/products/Sylflora_babydiapers1.JPG',
        description: 'A signature line presented with a confident, reassuring visual language.',
        accent: 'Core',
      },
      {
        family: 'diapers',
        name: 'SylFlora Diapers Pack',
        category: 'Diapers',
        src: '/images/products/Sylflora_babydiapers2.JPG',
        description: 'A practical family pack with a calmer, more editorial presence.',
        accent: 'Retail Ready',
      },
      {
        family: 'diapers',
        name: 'SylFlora Premium Diapers',
        category: 'Diapers',
        src: '/images/products/Sylflora_babydiapers3.JPG',
        description: 'An elevated format with lighter visual treatment and stronger polish.',
        accent: 'Premium',
      },
      {
        family: 'diapers',
        name: 'Baby Diapers Box',
        category: 'Diapers',
        src: '/images/products/Babydiapers.PNG',
        description: 'A bulk-ready presentation kept intentionally composed and quiet.',
        accent: 'Boxed',
      },
    ],
  },
  handkerchief: {
    title: 'Handkerchief',
    intro: 'A refined tissue handkerchief range that adds a softer, more complete finishing touch to the SylFlora offer.',
    products: [
      {
        family: 'handkerchief',
        name: 'SylFlora Tissue Handkerchief',
        category: 'Handkerchief',
        src: '/images/products/Sylflora_tissuehandkerchief.PNG',
        description: 'A premium tissue handkerchief option with a clean, polished visual presentation.',
        accent: 'Signature',
      },
      {
        family: 'handkerchief',
        name: 'SylFlora Tissue Handkerchief Pack',
        category: 'Handkerchief',
        src: '/images/products/Sylflora_tissuehandkerchief1.PNG',
        description: 'A packaged offering designed to feel discreet, luxurious, and highly presentable.',
        accent: 'Pack',
      },
      {
        family: 'handkerchief',
        name: 'SylFlora Tissue Handkerchief Specialty',
        category: 'Handkerchief',
        src: '/images/products/Sylflora_tissuehandkerchief2.PNG',
        description: 'A refined variant with a more editorial finish and a premium shelf-ready look.',
        accent: 'Specialty',
      },
    ],
  },
}

export default function Products() {
  const [selectedFamily, setSelectedFamily] = useState<ProductCard['family'] | null>(null)

  const activeFamily = selectedFamily ? familyGroups[selectedFamily] : null

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="tag-green mb-5">
            <span className="rule-green" aria-hidden="true" />
            Editorial Product Showcase
          </p>
          <h2
            className="text-[2.6rem] md:text-[3.2rem] xl:text-[3.6rem] font-black leading-[0.95] tracking-[-0.03em]"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
          >
            Our Product Range
          </h2>
          <p
            className="mt-5 text-[15px] md:text-[16px] leading-relaxed max-w-2xl"
            style={{ color: 'var(--neutral-500)' }}
          >
            100% virgin wood pulp. Manufactured to strict hygiene standards. Available to distributors, wholesalers, and retailers nationwide.
          </p>
        </motion.div>

        <div
          className="mt-12 h-px"
          style={{ background: 'var(--neutral-200)' }}
          aria-hidden="true"
        />

        <AnimatePresence mode="wait">
          {activeFamily ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                <div className="max-w-2xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--green)' }}>
                    Product family
                  </p>
                  <h3
                    className="mt-2 text-[1.85rem] md:text-[2.1rem] font-black leading-[0.98]"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
                  >
                    {activeFamily.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--neutral-500)' }}>
                    {activeFamily.intro}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedFamily(null)}
                  className="self-start sm:self-auto px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300"
                  style={{ background: 'rgba(15,23,42,0.96)', color: '#FFFFFF' }}
                >
                  ? Back
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {activeFamily.products.map((product, index) => (
                  <motion.article
                    key={product.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="group"
                  >
                    <div className="overflow-hidden rounded-[1.5rem] bg-[#f8fafc] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative aspect-[4/5] flex items-center justify-center"
                      >
                        <Image
                          src={product.src}
                          alt={product.name}
                          fill
                          className="object-contain"
                          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        />
                      </motion.div>
                      <div className="px-4 pt-4 pb-5">
                        {/* Accent pill removed as requested */}
                        <h4
                          className="mt-3 text-[1.02rem] font-black leading-tight"
                          style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
                        >
                          {product.name}
                        </h4>
                        <p
                          className="mt-2 text-[13px] leading-relaxed"
                          style={{ color: 'var(--neutral-500)' }}
                        >
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="showcase"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                {showcaseProducts.slice(0, 1).map((product, index) => (
                  <motion.button
                    key={product.name}
                    type="button"
                    onClick={() => setSelectedFamily(product.family)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -3 }}
                    className="relative overflow-hidden rounded-[1.75rem] min-h-[500px] text-left"
                    style={{
                      background: 'linear-gradient(180deg, rgba(248,250,252,0.98), #FFFFFF)',
                      boxShadow: '0 24px 60px rgba(15, 23, 42, 0.08)',
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.012 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={product.src}
                        alt={product.name}
                        fill
                        priority
                        className="object-cover"
                        sizes="(min-width: 1024px) 55vw, 100vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,13,24,0.04) 0%, rgba(8,13,24,0.34) 100%)' }} />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      {/* Removed accent pill as requested */}
                      <p
                        className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: 'rgba(255,255,255,0.84)' }}
                      >
                        {product.category}
                      </p>
                      <h3
                        className="mt-2 text-[2rem] md:text-[2.4rem] font-black leading-[0.94]"
                        style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
                      >
                        {product.name}
                      </h3>
                      <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.88)' }}>
                        {product.description}
                      </p>
                    </div>
                  </motion.button>
                ))}

                <div className="grid gap-4">
                  {showcaseProducts.slice(1).map((product, index) => (
                    <motion.button
                      key={product.name}
                      type="button"
                      onClick={() => setSelectedFamily(product.family)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.08 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -3 }}
                      className="relative overflow-hidden rounded-[1.5rem] text-left"
                      style={{
                        background: 'linear-gradient(180deg, rgba(248,250,252,0.98), #FFFFFF)',
                        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
                      }}
                    >
                      <div className="grid md:grid-cols-[0.9fr_1.1fr] min-h-[190px]">
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="relative min-h-[180px] md:min-h-full flex items-center justify-center bg-[#f8fafc]"
                        >
                          <Image
                            src={product.src}
                            alt={product.name}
                            fill
                            className="object-contain"
                            sizes="(min-width: 1024px) 22vw, 100vw"
                          />
                        </motion.div>
                        <div className="p-5 md:p-6 flex flex-col justify-center">
                          {/* Removed accent pill as requested */}
                          <p
                            className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em]"
                            style={{ color: 'var(--neutral-500)' }}
                          >
                            {product.category}
                          </p>
                          <h3
                            className="mt-2 text-[1.2rem] font-black leading-tight"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
                          >
                            {product.name}
                          </h3>
                          <p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'var(--neutral-500)' }}>
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Brand note section removed as requested */}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 p-7 md:p-8"
          style={{ background: 'var(--navy)' }}
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
