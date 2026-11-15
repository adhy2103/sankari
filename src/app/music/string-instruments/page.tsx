import PageHero from '@/components/ui/PageHero'
import MusicCard from '@/components/music/MusicCard'
import { MUSIC_PROGRAMMES } from '@/lib/config'

export const metadata = {
  title: 'String Instruments | Sankara Kayika Kalamandalam',
  description:
    'Comprehensive training in 7 string instruments: Veena, Violin, Guitar, Electric Guitar, Bass Guitar, Sitar, and Ukulele.',
}

export default function StringInstrumentsPage() {
  const instruments = MUSIC_PROGRAMMES.stringInstruments.items
  const classical = instruments.filter(
    (i) => i.type.includes('Classical') || i.type.includes('Indian')
  )
  const contemporary = instruments.filter(
    (i) => !i.type.includes('Classical') && !i.type.includes('Indian')
  )

  return (
    <main>
      <PageHero
        title="String Instruments"
        subtitle="7 Sacred & Contemporary Instruments"
        backgroundImage="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1920&q=80"
        overlayColor="maroon"
      />

      <section className="bg-warm-ivory py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Classical Indian Section */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-antique-gold text-xs font-semibold tracking-widest uppercase">
                Sacred Tradition
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-royal-maroon mt-1 mb-3">
                Indian Classical Instruments
              </h2>
              <div className="h-0.5 w-16 bg-antique-gold mx-auto" />
              <p className="text-deep-brown/70 text-sm mt-3">
                Rooted in centuries-old traditions of Raga, Tala, and devotion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classical.map((inst) => (
                <MusicCard key={inst.slug} instrument={inst} />
              ))}
            </div>
          </div>

          {/* Western / Contemporary Section */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-antique-gold text-xs font-semibold tracking-widest uppercase">
                Global Versatility
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-royal-maroon mt-1 mb-3">
                Western & Contemporary Instruments
              </h2>
              <div className="h-0.5 w-16 bg-antique-gold mx-auto" />
              <p className="text-deep-brown/70 text-sm mt-3">
                From acoustic resonance to electric amplification and popular melody.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contemporary.map((inst) => (
                <MusicCard key={inst.slug} instrument={inst} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
