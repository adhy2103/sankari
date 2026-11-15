'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'
import MusicCard from '@/components/music/MusicCard'
import { MUSIC_PROGRAMMES } from '@/lib/config'

interface Instrument {
  name: string
  slug: string
  type: string
  image: string
  intro: string
  benefits: string[]
  objectives: string[]
}

interface InstrumentDetailProps {
  instrument: Instrument
}

// Music staff SVG background pattern
function MusicStaffBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="0"
          y1={`${20 + i * 8}%`}
          x2="100%"
          y2={`${20 + i * 8}%`}
          stroke="#C5A059"
          strokeWidth="1"
        />
      ))}
      <text x="5%" y="30%" fontSize="48" fill="#C5A059" opacity="0.4">
        𝄞
      </text>
      <text x="88%" y="55%" fontSize="32" fill="#C5A059" opacity="0.3">
        ♩
      </text>
      <text x="45%" y="75%" fontSize="28" fill="#C5A059" opacity="0.25">
        ♪
      </text>
    </svg>
  )
}

export default function InstrumentDetail({ instrument }: InstrumentDetailProps) {
  const isClassical = instrument.type.toLowerCase().includes('classical')
  const allInstruments = MUSIC_PROGRAMMES.stringInstruments.items
  const related = allInstruments
    .filter((i) => i.slug !== instrument.slug)
    .slice(0, 3)

  const whatsappBase = process.env.NEXT_PUBLIC_ACADEMY_WHATSAPP
  const whatsappMsg = `Hello, I would like to enquire about ${instrument.name} classes at Sankara Kayika Kalamandalam.`
  const whatsappUrl = whatsappBase
    ? `https://wa.me/${whatsappBase}?text=${encodeURIComponent(whatsappMsg)}`
    : '#'

  return (
    <>
      <PageHero
        title={instrument.name}
        subtitle={instrument.type}
        backgroundImage={instrument.image}
      />

      {/* Main Content */}
      <section className="relative bg-warm-ivory py-16 overflow-hidden">
        <MusicStaffBg />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Gold-framed image */}
              <div className="relative w-full max-w-sm mx-auto">
                {/* Outer decorative border */}
                <div className="absolute -inset-3 border-2 border-antique-gold/40 rounded-2xl" />
                {/* Inner border */}
                <div className="absolute -inset-1.5 border border-antique-gold/60 rounded-xl" />
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={instrument.image}
                    alt={instrument.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/30 to-transparent" />
                </div>
              </div>

              {/* Type Badge */}
              <div
                className={`px-5 py-2 rounded-full border text-sm font-body font-semibold tracking-widest uppercase ${
                  isClassical
                    ? 'bg-royal-maroon/10 border-royal-maroon/30 text-royal-maroon'
                    : 'bg-sandalwood/50 border-antique-gold/40 text-deep-brown'
                }`}
              >
                {instrument.type}
              </div>

              {/* Music Note Decoration */}
              <div className="flex items-center gap-4 text-antique-gold">
                <div className="h-px w-16 bg-antique-gold/40" />
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path
                    d="M16 32V10l16-4v22"
                    stroke="#C5A059"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="32" r="4" fill="#C5A059" opacity="0.9" />
                  <circle cx="28" cy="28" r="4" fill="#C5A059" opacity="0.9" />
                </svg>
                <div className="h-px w-16 bg-antique-gold/40" />
              </div>

              {/* Info Box */}
              <div className="w-full max-w-sm bg-sandalwood/40 border border-antique-gold/30 rounded-xl p-5">
                <h4 className="font-heading text-lg text-royal-maroon mb-2">
                  Class Schedule &amp; Fees
                </h4>
                <p className="font-body text-sm text-deep-brown/80 leading-relaxed">
                  Please contact us for current batch timings, fees, and availability.
                  Beginner, intermediate, and advanced batches available, subject to confirmation.
                </p>
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-7"
            >
              {/* Instrument Name & Type */}
              <div>
                <p className="font-body text-xs text-antique-gold uppercase tracking-widest mb-2">
                  {instrument.type}
                </p>
                <h2 className="font-heading text-5xl text-royal-maroon leading-tight">
                  {instrument.name}
                </h2>
                <div className="mt-3 h-0.5 w-20 bg-antique-gold/60 rounded-full" />
              </div>

              {/* Introduction */}
              <p className="font-body text-base text-deep-brown/90 leading-relaxed">
                {instrument.intro}
              </p>

              {/* What You Will Learn */}
              <div>
                <h3 className="font-heading text-2xl text-royal-maroon mb-4">
                  What You Will Learn
                </h3>
                <ol className="space-y-3">
                  {instrument.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-heading text-lg text-antique-gold font-bold leading-tight min-w-[1.5rem] mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-body text-sm text-deep-brown/85 leading-relaxed">
                        {obj}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="font-heading text-2xl text-royal-maroon mb-4">Benefits</h3>
                <ul className="space-y-2.5">
                  {instrument.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <circle cx="10" cy="10" r="9" stroke="#C5A059" strokeWidth="1.5" />
                        <path
                          d="M6 10l3 3 5-5"
                          stroke="#C5A059"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-body text-sm text-deep-brown/85 leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-green-600 hover:bg-green-700 text-white font-body font-semibold text-sm transition-colors duration-300 shadow-md"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Enquiry
                </a>
                <Link
                  href={`/admissions?programme=${encodeURIComponent(instrument.name)}`}
                  className="flex items-center justify-center py-3 px-6 rounded-xl bg-antique-gold hover:bg-royal-maroon text-deep-brown hover:text-warm-ivory font-body font-semibold text-sm transition-colors duration-300 shadow-md"
                >
                  Apply for Admission
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Enquiry Banner */}
      <section className="bg-warm-ivory py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-royal-maroon/5 border border-antique-gold/40 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="18" r="17" stroke="#C5A059" strokeWidth="1.5" />
                <path d="M12 20V12l12-3v8" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="20" r="2.5" fill="#C5A059" />
                <circle cx="22" cy="17" r="2.5" fill="#C5A059" />
              </svg>
            </div>
            <h3 className="font-heading text-3xl text-royal-maroon mb-3">
              Begin Your Musical Journey
            </h3>
            <p className="font-body text-deep-brown/80 max-w-xl mx-auto text-sm leading-relaxed mb-6">
              Take the first step towards mastering the {instrument.name}. Our experienced mentors
              welcome students of all ages and skill levels — from complete beginners to those
              seeking to refine their advanced technique.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`/admissions?programme=${encodeURIComponent(instrument.name)}`}
                className="inline-block py-3 px-8 bg-royal-maroon text-warm-ivory font-body font-semibold text-sm rounded-xl hover:bg-antique-gold hover:text-deep-brown transition-colors duration-300"
              >
                Apply for Admission
              </Link>
              <Link
                href="/contact"
                className="inline-block py-3 px-8 border border-antique-gold text-antique-gold font-body font-semibold text-sm rounded-xl hover:bg-antique-gold hover:text-deep-brown transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Instruments */}
      {related.length > 0 && (
        <section className="bg-sandalwood/20 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <p className="font-body text-xs text-antique-gold uppercase tracking-widest mb-2">
                Continue Exploring
              </p>
              <h3 className="font-heading text-4xl text-royal-maroon">
                You might also like...
              </h3>
              <div className="mt-3 mx-auto h-0.5 w-16 bg-antique-gold/50 rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((inst) => (
                <MusicCard key={inst.slug} instrument={inst} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
