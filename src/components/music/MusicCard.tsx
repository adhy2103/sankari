'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Instrument {
  name: string
  slug: string
  type: string
  image: string
  intro: string
  benefits: string[]
  objectives: string[]
}

interface MusicCardProps {
  instrument: Instrument
}

export default function MusicCard({ instrument }: MusicCardProps) {
  const isClassical = instrument.type.toLowerCase().includes('classical')

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-xl overflow-hidden border border-sandalwood bg-warm-ivory shadow-md hover:shadow-2xl hover:border-antique-gold transition-all duration-400"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={instrument.image}
          alt={instrument.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/50 via-transparent to-transparent" />

        {/* Type Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
              isClassical
                ? 'bg-royal-maroon/80 text-antique-gold border border-antique-gold/30'
                : 'bg-deep-brown/80 text-antique-gold border border-antique-gold/30'
            }`}
          >
            {instrument.type}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 bg-gradient-to-b from-warm-ivory to-sandalwood/30">
        {/* Decorative music motif */}
        <div className="flex items-center gap-2 mb-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="text-antique-gold flex-shrink-0"
          >
            <path
              d="M6 12V3l8-2v9"
              stroke="#C5A059"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="4" cy="12" r="2" fill="#C5A059" opacity="0.8" />
            <circle cx="12" cy="10" r="2" fill="#C5A059" opacity="0.8" />
          </svg>
          <div className="h-px flex-1 bg-antique-gold/30" />
        </div>

        <h3 className="font-heading text-2xl text-royal-maroon leading-tight mb-2">
          {instrument.name}
        </h3>

        <p className="font-body text-sm text-deep-brown/80 leading-relaxed line-clamp-2 flex-1 mb-4">
          {instrument.intro}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/music/${instrument.slug}`}
            className="flex-1 text-center text-sm font-body font-semibold py-2.5 px-3 rounded-lg bg-royal-maroon text-warm-ivory hover:bg-antique-gold hover:text-deep-brown transition-colors duration-300"
          >
            Learn More
          </Link>
          <Link
            href={`/admissions?programme=${encodeURIComponent(instrument.name)}`}
            className="flex-1 text-center text-sm font-body font-semibold py-2.5 px-3 rounded-lg border border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-deep-brown transition-colors duration-300"
          >
            Join Class
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
