import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { ACADEMY_CONFIG } from '@/lib/config'
import { Award, Compass, HeartHandshake, Sparkles, MessageCircle } from 'lucide-react'
import { formatWhatsAppUrl } from '@/lib/utils'

export const metadata = {
  title: 'About Us | Sankara Kayika Kalamandalam',
  description:
    'Rooted in Tradition. Inspired by Art. Learn about Sankara Kayika Kalamandalam, an academy devoted to authentic Indian dance and music.',
}

export default function AboutPage() {
  const whatsappUrl = formatWhatsAppUrl(
    ACADEMY_CONFIG.contact.whatsapp,
    'Hello, I would like to learn more about Sankara Kayika Kalamandalam.'
  )

  const coreValues = [
    {
      icon: Compass,
      title: 'Cultural Preservation',
      desc: 'Honoring centuries of sacred dance and music traditions through disciplined practice and deep cultural respect.',
    },
    {
      icon: Sparkles,
      title: 'Artistic Excellence',
      desc: 'Nurturing creative expression and technical mastery under the patient guidance of devoted mentors.',
    },
    {
      icon: HeartHandshake,
      title: 'Welcoming Community',
      desc: 'Providing an inspiring, encouraging sanctuary for learners of all ages and backgrounds to discover the arts.',
    },
  ]

  return (
    <main>
      <PageHero
        title="Our Story & Philosophy"
        subtitle="Rooted in Tradition. Inspired by Art."
        backgroundImage="https://images.unsplash.com/photo-1619641618895-6b78cca0b6b1?w=1920&q=80"
        overlayColor="maroon"
      />

      {/* Main Philosophy Section */}
      <section className="bg-warm-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="relative h-[520px] w-full rounded-sm overflow-hidden border-2 border-antique-gold shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=1200&q=80"
                  alt="Traditional Indian Dance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-royal-maroon border-2 border-antique-gold p-6 hidden md:flex flex-col justify-center items-center text-center shadow-lg">
                <p className="font-heading text-3xl text-antique-gold font-bold">23</p>
                <p className="text-xs uppercase tracking-widest text-warm-ivory mt-1">
                  Artistic Programmes
                </p>
              </div>
            </div>

            <div>
              <span className="text-antique-gold text-xs font-semibold tracking-widest uppercase">
                Welcome to the Academy
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-royal-maroon mt-2 mb-6 leading-tight">
                {ACADEMY_CONFIG.about.heading}
              </h2>
              <p className="text-deep-brown/85 font-body text-base md:text-lg leading-relaxed mb-6">
                {ACADEMY_CONFIG.about.description}
              </p>
              <p className="text-deep-brown/85 font-body text-base leading-relaxed mb-8">
                {ACADEMY_CONFIG.about.description2}
              </p>

              <div className="pt-6 border-t border-antique-gold/30 flex flex-wrap gap-4">
                <Link href="/admissions" className="btn-gold">
                  Join Our Academy
                </Link>
                {ACADEMY_CONFIG.contact.whatsapp && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-700 text-emerald-800 font-body font-semibold text-sm tracking-widest uppercase hover:bg-emerald-700 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Three Numerical Highlights */}
          <div className="bg-royal-maroon text-warm-ivory py-16 px-8 rounded-sm shadow-card border border-antique-gold mb-24">
            <div className="text-center mb-10">
              <span className="text-antique-gold text-xs uppercase tracking-widest">
                Our Breadth of Offerings
              </span>
              <h3 className="font-heading text-3xl md:text-4xl text-warm-ivory mt-1">
                A Comprehensive Performing Arts Sanctuary
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-antique-gold/30">
              <div className="pt-6 md:pt-0">
                <div className="font-heading text-6xl md:text-7xl text-antique-gold font-light mb-2">
                  <AnimatedCounter target={16} />
                </div>
                <p className="font-body text-lg uppercase tracking-wider text-warm-ivory">
                  Dance Forms
                </p>
                <p className="text-xs text-sandalwood/70 mt-2">
                  Classical, Folk, Traditional Group & Contemporary
                </p>
              </div>

              <div className="pt-6 md:pt-0">
                <div className="font-heading text-6xl md:text-7xl text-antique-gold font-light mb-2">
                  <AnimatedCounter target={7} />
                </div>
                <p className="font-body text-lg uppercase tracking-wider text-warm-ivory">
                  Musical Instruments
                </p>
                <p className="text-xs text-sandalwood/70 mt-2">
                  Sacred Indian Classical & Modern Western Strings
                </p>
              </div>

              <div className="pt-6 md:pt-0">
                <div className="font-heading text-6xl md:text-7xl text-antique-gold font-light mb-2">
                  <AnimatedCounter target={23} />
                </div>
                <p className="font-body text-lg uppercase tracking-wider text-warm-ivory">
                  Total Programmes
                </p>
                <p className="text-xs text-sandalwood/70 mt-2">
                  Carefully structured curricula for every aspiration
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-antique-gold text-xs font-semibold tracking-widest uppercase">
                Guiding Principles
              </span>
              <h3 className="font-heading text-3xl md:text-4xl text-royal-maroon mt-1 mb-4">
                What Inspires Us
              </h3>
              <div className="h-0.5 w-16 bg-antique-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((val, idx) => {
                const Icon = val.icon
                return (
                  <div
                    key={idx}
                    className="bg-white p-8 border border-antique-gold/30 rounded-sm shadow-sm hover:border-antique-gold hover:shadow-gold transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-royal-maroon/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-antique-gold" />
                    </div>
                    <h4 className="font-heading text-2xl text-royal-maroon mb-3">
                      {val.title}
                    </h4>
                    <p className="text-deep-brown/70 text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
