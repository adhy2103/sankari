'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface DanceItem {
  name: string
  slug: string
  origin: string
  image: string
  intro: string
  benefits: string[]
  objectives: string[]
}

interface DanceCardProps {
  item: DanceItem
  categorySlug: string
}

export default function DanceCard({ item, categorySlug }: DanceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-antique-gold/20 border border-transparent hover:border-antique-gold/40 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gold top-left decorative corner */}
        <div className="absolute top-0 left-0 w-8 h-8 z-10 pointer-events-none">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L32 0 L0 32 Z" fill="#C5A059" opacity="0.85" />
          </svg>
        </div>

        {/* Origin tag - top right */}
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-antique-gold/90 text-deep-brown text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide font-body">
            {item.origin}
          </span>
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="font-heading text-2xl text-royal-maroon mb-2 leading-tight">
          {item.name}
        </h3>

        <p className="text-sm text-deep-brown/80 font-body leading-relaxed line-clamp-2 mb-5">
          {item.intro}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            href={`/dance/${item.slug}`}
            className="flex-1 text-center text-sm font-semibold font-body py-2 px-3 rounded-lg border-2 border-royal-maroon text-royal-maroon hover:bg-royal-maroon hover:text-warm-ivory transition-all duration-200"
          >
            Learn More
          </Link>
          <Link
            href={`/admissions?programme=${encodeURIComponent(item.name)}`}
            className="flex-1 text-center text-sm font-semibold font-body py-2 px-3 rounded-lg bg-antique-gold text-deep-brown hover:bg-antique-gold/90 transition-all duration-200"
          >
            Join Class
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
