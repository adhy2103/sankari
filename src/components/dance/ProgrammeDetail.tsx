'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'

interface DanceProgramme {
  name: string
  slug: string
  origin?: string
  image: string
  intro: string
  benefits: string[]
  objectives: string[]
  category: string
  categorySlug: string
  type: string
}

interface ProgrammeDetailProps {
  programme: DanceProgramme
}

export default function ProgrammeDetail({ programme }: ProgrammeDetailProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_ACADEMY_WHATSAPP
  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to enquire about the ${programme.name} programme at Sankara Kayika Kalamandalam.`
  )
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`

  return (
    <main>
      <PageHero
        title={programme.name}
        subtitle={
          programme.origin
            ? `Origin: ${programme.origin} · ${programme.category}`
            : programme.category
        }
        backgroundImage={programme.image}
        overlayColor="maroon"
      />

      {/* Two-column layout */}
      <section className="bg-warm-ivory py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image with gold frame */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="relative">
                {/* Gold frame effect */}
                <div className="absolute -inset-3 border-2 border-antique-gold/40 rounded-xl pointer-events-none z-10" />
                <div className="absolute -inset-1.5 border border-antique-gold/20 rounded-xl pointer-events-none z-10" />

                <div className="relative h-96 md:h-[480px] rounded-lg overflow-hidden">
                  <Image
                    src={programme.image}
                    alt={programme.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  {programme.origin && (
                    <span className="bg-antique-gold text-deep-brown text-xs font-semibold px-3 py-1.5 rounded-full font-body tracking-wide">
                      {programme.origin}
                    </span>
                  )}
                  <span className="bg-royal-maroon/90 text-warm-ivory text-xs font-semibold px-3 py-1.5 rounded-full font-body tracking-wide">
                    {programme.category}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="space-y-7"
            >
              <div>
                <h1 className="font-heading text-4xl md:text-5xl text-royal-maroon leading-tight mb-4">
                  {programme.name}
                </h1>
                <p className="text-deep-brown/80 font-body text-base leading-relaxed">
                  {programme.intro}
                </p>
              </div>

              {/* Learning Objectives */}
              <div>
                <h2 className="font-heading text-2xl text-royal-maroon mb-4">
                  Learning Objectives
                </h2>
                <ol className="space-y-2.5">
                  {programme.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-sm text-deep-brown/80">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-antique-gold/20 text-antique-gold font-semibold text-xs flex items-center justify-center mt-0.5 border border-antique-gold/40">
                        {i + 1}
                      </span>
                      {obj}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-heading text-2xl text-royal-maroon mb-4">
                  Benefits
                </h2>
                <ul className="space-y-2.5">
                  {programme.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-sm text-deep-brown/80">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-antique-gold mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule placeholder */}
              <div className="bg-sandalwood/40 border border-antique-gold/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-antique-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-heading text-lg text-royal-maroon">Class Schedule, Fees &amp; Batch Details</h3>
                </div>
                <p className="font-body text-sm text-deep-brown/70">
                  Contact us for current timings, batch availability, and fee structure. Our team will guide you to the right batch for your age and experience level.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold font-body transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire via WhatsApp
                </a>
                <Link
                  href={`/admissions?programme=${encodeURIComponent(programme.name)}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-antique-gold hover:bg-antique-gold/90 text-deep-brown font-semibold font-body transition-colors duration-200"
                >
                  Apply for Admission
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission enquiry card at bottom */}
      <section className="bg-warm-ivory pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-royal-maroon/5 border border-antique-gold/40 rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 2C20 2 12 10 12 16C12 19.3137 15.6863 22 20 22C24.3137 22 28 19.3137 28 16C28 10 20 2 20 2Z" fill="#C5A059" opacity="0.7"/>
                <path d="M20 7C20 7 10 12 8 18" stroke="#C5A059" strokeWidth="1.5" opacity="0.4"/>
                <path d="M20 7C20 7 30 12 32 18" stroke="#C5A059" strokeWidth="1.5" opacity="0.4"/>
              </svg>
            </div>
            <h3 className="font-heading text-3xl text-royal-maroon mb-3">
              Interested in {programme.name}?
            </h3>
            <p className="font-body text-deep-brown/70 mb-2 text-base leading-relaxed">
              Join our {programme.name} programme today. Limited seats available.
            </p>
            <p className="font-body text-deep-brown/60 text-sm mb-6">
              Contact us for more details on batch timings, fee structure, and enrollment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold font-body transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                href={`/admissions?programme=${encodeURIComponent(programme.name)}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-antique-gold hover:bg-antique-gold/90 text-deep-brown font-semibold font-body transition-colors duration-200"
              >
                Apply Now →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
