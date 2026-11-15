import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { Check, Flame, Heart, Activity, Sparkles, MessageCircle } from 'lucide-react'
import { ACADEMY_CONFIG } from '@/lib/config'
import { formatWhatsAppUrl } from '@/lib/utils'

export const metadata = {
  title: 'Zumba Fitness | Sankara Kayika Kalamandalam',
  description:
    'Move. Dance. Energize. Experience an exhilarating dance-fitness journey at Sankara Kayika Kalamandalam.',
}

export default function ZumbaPage() {
  const whatsappUrl = formatWhatsAppUrl(
    ACADEMY_CONFIG.contact.whatsapp,
    'Hello, I would like to enquire about joining the Zumba fitness classes at Sankara Kayika Kalamandalam.'
  )

  const highlights = [
    {
      icon: Flame,
      title: 'Dance-Based Fitness',
      description: 'Burn calories and tone your entire body through exhilarating dance movements.',
    },
    {
      icon: Activity,
      title: 'High-Energy Music & Movement',
      description: 'Infectious rhythms and dynamic choreographies that keep your spirits elevated.',
    },
    {
      icon: Heart,
      title: 'Fun Group Workouts',
      description: 'An uplifting, supportive environment where everyone moves at their own comfort level.',
    },
    {
      icon: Sparkles,
      title: 'Coordination & Endurance',
      description: 'Boost cardiovascular health, balance, motor coordination, and stamina week after week.',
    },
  ]

  const benefits = [
    'Complete full-body cardiovascular workout',
    'Stress relief and mood enhancement through joyful dancing',
    'Improves muscular tone, posture, and core strength',
    'Accessible for both beginners and experienced movers',
    'Engaging fusion of world rhythms and energetic choreography',
  ]

  return (
    <main>
      <PageHero
        title="Move. Dance. Energize."
        subtitle="Zumba Dance Fitness Experience"
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        overlayColor="maroon"
      />

      <section className="bg-warm-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block bg-antique-gold/20 text-royal-maroon text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-4 rounded-xs">
                Other Dances • Dance Fitness
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-royal-maroon mb-6 leading-tight">
                Dance Your Way to Fitness & Vitality
              </h2>
              <p className="text-deep-brown/80 font-body text-base md:text-lg leading-relaxed mb-6">
                At Sankara Kayika Kalamandalam, Zumba brings the pure joy of celebration to personal wellness. Our sessions blend high-energy world rhythms with easy-to-follow, exhilarating choreography that turns fitness into an eagerly anticipated daily celebration.
              </p>
              <p className="text-deep-brown/80 font-body text-base leading-relaxed mb-8">
                Whether you want to build stamina, lose weight, relieve everyday stress, or simply dance to invigorating melodies in a welcoming community, our classes provide the ideal balance of rhythm and vitality.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/admissions?programme=Zumba"
                  className="btn-gold"
                >
                  Join Zumba Classes
                </Link>
                {ACADEMY_CONFIG.contact.whatsapp && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white font-body font-semibold text-sm tracking-widest uppercase hover:bg-emerald-800 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire on WhatsApp
                  </a>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[480px] w-full rounded-sm overflow-hidden border-2 border-antique-gold shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80"
                  alt="Zumba Dance Fitness"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-warm-ivory">
                  <p className="font-heading text-2xl text-antique-gold italic">
                    “Every beat is an invitation to move.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="bg-white p-6 border border-antique-gold/30 rounded-sm shadow-sm hover:border-antique-gold transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-royal-maroon/10 flex items-center justify-center text-royal-maroon mb-4">
                    <Icon className="w-6 h-6 text-antique-gold" />
                  </div>
                  <h3 className="font-heading text-xl text-royal-maroon mb-2">
                    {item.title}
                  </h3>
                  <p className="text-deep-brown/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Benefits & Note */}
          <div className="bg-white border border-antique-gold/40 p-8 md:p-12 rounded-sm shadow-card">
            <h3 className="font-heading text-3xl text-royal-maroon mb-6">
              Class Benefits & Structure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-antique-gold/20 flex items-center justify-center text-royal-maroon shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-royal-maroon" />
                    </div>
                    <span className="text-deep-brown/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
              <div className="bg-sandalwood/20 p-6 border-l-2 border-antique-gold">
                <h4 className="font-heading text-xl text-royal-maroon mb-2">
                  Batch Availability
                </h4>
                <p className="text-deep-brown/70 text-sm leading-relaxed mb-4">
                  Beginner-friendly class options are offered across morning and evening slots, subject to academy schedule confirmation.
                </p>
                <p className="text-xs text-deep-brown/60 italic">
                  Note: Class schedules, trainer assignments, and batch timings are confirmed upon enquiry with academy administration.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-antique-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-heading text-xl text-royal-maroon">Ready to experience the energy?</p>
                <p className="text-sm text-deep-brown/70">Reserve your trial session or enquire about upcoming batches.</p>
              </div>
              <Link href="/admissions?programme=Zumba" className="btn-gold shrink-0">
                Register for Admission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
