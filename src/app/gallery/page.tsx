import PageHero from '@/components/ui/PageHero'
import GalleryGrid, { GalleryItem } from '@/components/gallery/GalleryGrid'
import { Info } from 'lucide-react'

export const metadata = {
  title: 'Gallery | Sankara Kayika Kalamandalam',
  description:
    'Moments of grace, rhythm, and devotion. Browse our visual gallery spanning classical dances, group performances, modern fitness, and musical recitals.',
}

export default function GalleryPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=1000&q=80',
      alt: 'Bharatanatyam Recital',
      category: 'Indian Classical Dance',
      title: 'Devotional Abhinaya in Bharatanatyam',
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1536504552153-f5bce20c78a1?w=1000&q=80',
      alt: 'Kathakali Performer',
      category: 'Indian Classical Dance',
      title: 'Vibrant Expressions of Kathakali',
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1619641618895-6b78cca0b6b1?w=1000&q=80',
      alt: 'Mohiniyattam Performance',
      category: 'Indian Classical Dance',
      title: 'Graceful Swings of Mohiniyattam',
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1601315379734-425a2b728d0a?w=1000&q=80',
      alt: 'Traditional Kerala Group Dance',
      category: 'Group Dance',
      title: 'Thiruvathirakali Ensemble',
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=1000&q=80',
      alt: 'Contemporary Dance Stage',
      category: 'Contemporary',
      title: 'Contemporary Choreography in Flight',
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80',
      alt: 'Zumba Fitness Session',
      category: 'Zumba',
      title: 'Energetic Zumba Movement Session',
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1000&q=80',
      alt: 'Veena Recital',
      category: 'Music',
      title: 'Resonance of the Sacred Veena',
    },
    {
      id: '8',
      src: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=1000&q=80',
      alt: 'Violin Practice',
      category: 'Music',
      title: 'Acoustic Violin Recital',
    },
    {
      id: '9',
      src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1000&q=80',
      alt: 'Guitar Class',
      category: 'Music',
      title: 'Acoustic String Training',
    },
    {
      id: '10',
      src: 'https://images.unsplash.com/photo-1580835239846-5bb9c5a1a4e0?w=1000&q=80',
      alt: 'Annual Stage Showcase',
      category: 'Stage Performances',
      title: 'Annual Academy Stage Showcase',
    },
    {
      id: '11',
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&q=80',
      alt: 'Cultural Fest Event',
      category: 'Cultural Events',
      title: 'Kerala Heritage Cultural Festival',
    },
    {
      id: '12',
      src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1000&q=80',
      alt: 'Studio Practice Session',
      category: 'Practice Sessions',
      title: 'Dedicated Studio Rehearsals',
    },
    {
      id: '13',
      src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=1000&q=80',
      alt: 'Bollywood Choreography',
      category: 'Bollywood',
      title: 'High-Spirited Bollywood Dance Choreography',
    },
    {
      id: '14',
      src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1000&q=80',
      alt: 'Cinematic Dance Routine',
      category: 'Cinematic',
      title: 'Dynamic Cinematic Routine',
    },
    {
      id: '15',
      src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1000&q=80',
      alt: 'Student Honors',
      category: 'Achievements',
      title: 'Student Arangetram Felicitation',
    },
  ]

  return (
    <main>
      <PageHero
        title="Academy Gallery"
        subtitle="Moments of Grace, Rhythm & Artistry"
        backgroundImage="https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=1920&q=80"
        overlayColor="maroon"
      />

      <section className="bg-warm-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Note Banner */}
          <div className="bg-white border-l-4 border-antique-gold p-4 mb-12 flex items-center gap-3 text-sm text-deep-brown/80 shadow-xs">
            <Info className="w-5 h-5 text-antique-gold shrink-0" />
            <span>
              <strong>Note on Gallery Imagery:</strong> Photographs displayed represent the art forms, performance aesthetics, and curriculum styles taught at Sankara Kayika Kalamandalam. Live academy session captures are updated regularly.
            </span>
          </div>

          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </main>
  )
}
