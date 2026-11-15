import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import MusicCard from '@/components/music/MusicCard'
import { MUSIC_PROGRAMMES } from '@/lib/config'
import { ArrowRight, Music2 } from 'lucide-react'

export const metadata = {
  title: 'Music Programmes | Sankara Kayika Kalamandalam',
  description:
    'The Art of Melody. Every String Tells a Story. Master classical Indian and modern Western string instruments at Sankara Kayika Kalamandalam.',
}

export default function MusicOverviewPage() {
  const instruments = MUSIC_PROGRAMMES.stringInstruments.items

  return (
    <main>
      <PageHero
        title="The Art of Melody"
        subtitle="Every String Tells a Story"
        backgroundImage="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1920&q=80"
        overlayColor="maroon"
      />

      {/* Quote / Heritage Note */}
      <section className="bg-sandalwood/20 py-16 px-4 border-b border-antique-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-antique-gold" />
            <Music2 className="w-6 h-6 text-antique-gold" />
            <div className="h-px w-16 bg-antique-gold" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl text-royal-maroon italic mb-4 leading-relaxed">
            “Every String Tells a Story.”
          </h2>
          <p className="text-deep-brown/80 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From the meditative resonant gamakas of the ancient Saraswati Veena to the expressive chords of the modern guitar, our academy unites the timeless discipline of Indian music with contemporary Western versatility.
          </p>
        </div>
      </section>

      {/* String Instruments Featured Category */}
      <section className="bg-warm-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-antique-gold text-xs font-semibold tracking-widest uppercase">
                Curriculum
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-royal-maroon mt-1">
                String Instruments
              </h2>
            </div>
            <Link
              href="/music/string-instruments"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-royal-maroon font-semibold text-sm tracking-wider uppercase hover:text-antique-gold transition-colors"
            >
              <span>View All 7 Instruments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instruments.map((inst) => (
              <MusicCard key={inst.slug} instrument={inst} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
