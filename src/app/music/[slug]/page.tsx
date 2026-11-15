import { notFound } from 'next/navigation'
import InstrumentDetail from '@/components/music/InstrumentDetail'
import { MUSIC_PROGRAMMES } from '@/lib/config'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return MUSIC_PROGRAMMES.stringInstruments.items.map((item) => ({
    slug: item.slug,
  }))
}

export function generateMetadata({ params }: PageProps) {
  const instrument = MUSIC_PROGRAMMES.stringInstruments.items.find(
    (i) => i.slug === params.slug
  )
  if (!instrument) return {}
  return {
    title: `${instrument.name} Classes | Sankara Kayika Kalamandalam`,
    description: instrument.intro,
  }
}

export default function InstrumentDetailPage({ params }: PageProps) {
  const instrument = MUSIC_PROGRAMMES.stringInstruments.items.find(
    (i) => i.slug === params.slug
  )

  if (!instrument) {
    notFound()
  }

  return <InstrumentDetail instrument={instrument} />
}
