'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
  title: string
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null)

  const categories = [
    'All',
    'Indian Classical Dance',
    'Group Dance',
    'Cinematic',
    'Bollywood',
    'Contemporary',
    'Zumba',
    'Music',
    'Stage Performances',
    'Cultural Events',
    'Practice Sessions',
    'Achievements',
  ]

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory)

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-xs ${
              selectedCategory === cat
                ? 'bg-royal-maroon text-antique-gold border border-antique-gold shadow-md'
                : 'bg-white text-deep-brown/80 border border-antique-gold/30 hover:border-antique-gold'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="group relative h-80 bg-deep-brown rounded-sm overflow-hidden border border-antique-gold/30 cursor-pointer shadow-sm hover:border-antique-gold hover:shadow-gold transition-all"
              onClick={() => setActiveImage(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 via-deep-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-antique-gold text-xs font-semibold tracking-widest uppercase mb-1">
                  {item.category}
                </span>
                <h4 className="font-heading text-xl text-warm-ivory mb-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-sandalwood/90">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to view full photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-warm-ivory/80 hover:text-antique-gold transition-colors p-2"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-warm-ivory">
              <span className="text-antique-gold text-xs uppercase tracking-widest block mb-1">
                {activeImage.category}
              </span>
              <h3 className="font-heading text-2xl text-warm-ivory">
                {activeImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
