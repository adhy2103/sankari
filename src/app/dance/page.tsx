import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import { DANCE_PROGRAMMES } from '@/lib/config'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Dance Programmes | Sankara Kayika Kalamandalam',
  description:
    'Explore 16 dance forms across Indian Classical Dances, Traditional Kerala Group Dances, and Contemporary styles at Sankara Kayika Kalamandalam.',
}

export default function DanceOverviewPage() {
  const categories = [
    {
      data: DANCE_PROGRAMMES.indianClassical,
      href: '/dance/indian-classical',
      image:
        'https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=1200&q=80',
    },
    {
      data: DANCE_PROGRAMMES.groupDances,
      href: '/dance/group-dances',
      image:
        'https://images.unsplash.com/photo-1619641618895-6b78cca0b6b1?w=1200&q=80',
    },
    {
      data: DANCE_PROGRAMMES.otherDances,
      href: '/dance/other-dances',
      image:
        'https://images.unsplash.com/photo-1547153760-18fc86324498?w=1200&q=80',
    },
  ]

  return (
    <main>
      <PageHero
        title="The Art of Dance"
        subtitle="16 Sacred, Traditional & Contemporary Dance Forms"
        backgroundImage="https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=1920&q=80"
        overlayColor="maroon"
      />

      <section className="bg-warm-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-royal-maroon mb-4">
              Tradition in Motion
            </h2>
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="h-px flex-1 bg-antique-gold/40 max-w-24" />
              <span className="text-antique-gold text-xl">✦</span>
              <div className="h-px flex-1 bg-antique-gold/40 max-w-24" />
            </div>
            <p className="text-deep-brown/80 font-body text-base md:text-lg leading-relaxed">
              From ancient temple sanctums to modern stage expressions, our comprehensive
              curriculum honors authentic technique, spiritual expression, and artistic joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group bg-white border border-antique-gold/30 rounded-sm shadow-card hover:shadow-gold transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.data.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-antique-gold text-deep-brown px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-xs">
                    {cat.data.count} Programmes
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl text-royal-maroon mb-3">
                      {cat.data.title}
                    </h3>
                    <p className="text-deep-brown/70 text-sm leading-relaxed mb-6">
                      {cat.data.description}
                    </p>
                  </div>

                  <Link
                    href={cat.href}
                    className="inline-flex items-center justify-between w-full py-3 px-4 border border-antique-gold text-royal-maroon hover:bg-royal-maroon hover:text-warm-ivory transition-colors duration-300 font-semibold text-sm tracking-wider uppercase"
                  >
                    <span>Explore All {cat.data.count}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
