'use client'

import PageHero from '@/components/ui/PageHero'
import DanceCard from '@/components/dance/DanceCard'

interface DanceItem {
  name: string
  slug: string
  origin: string
  image: string
  intro: string
  benefits: string[]
  objectives: string[]
}

interface DanceCategory {
  title: string
  slug: string
  count: number
  description: string
  items: DanceItem[]
}

interface DanceCategoryPageProps {
  category: DanceCategory
  bgImage: string
}

export default function DanceCategoryPage({
  category,
  bgImage,
}: DanceCategoryPageProps) {
  return (
    <main>
      <PageHero
        title={category.title}
        subtitle={`${category.count} Programmes Available`}
        backgroundImage={bgImage}
        overlayColor="maroon"
      />

      {/* Intro Section */}
      <section className="bg-warm-ivory py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 bg-antique-gold/40 max-w-24" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#C5A059"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <polygon points="10,1 12.9,7.6 20,8.2 14.5,13.1 16.2,20 10,16.3 3.8,20 5.5,13.1 0,8.2 7.1,7.6" />
            </svg>
            <div className="h-px flex-1 bg-antique-gold/40 max-w-24" />
          </div>
          <p className="text-deep-brown/80 font-body text-lg leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Dance Cards Grid */}
      <section className="bg-sandalwood/30 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item) => (
              <DanceCard
                key={item.slug}
                item={item}
                categorySlug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
