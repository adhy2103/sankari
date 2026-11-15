import { notFound } from 'next/navigation'
import ProgrammeDetail from '@/components/dance/ProgrammeDetail'
import { ALL_PROGRAMMES } from '@/lib/config'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  const danceProgrammes = ALL_PROGRAMMES.filter((p) => p.type === 'dance')
  return danceProgrammes.map((programme) => ({
    slug: programme.slug,
  }))
}

export function generateMetadata({ params }: PageProps) {
  const programme = ALL_PROGRAMMES.find((p) => p.slug === params.slug && p.type === 'dance')
  if (!programme) return {}
  return {
    title: `${programme.name} | Sankara Kayika Kalamandalam`,
    description: programme.intro,
  }
}

export default function DanceDetailPage({ params }: PageProps) {
  const programme = ALL_PROGRAMMES.find((p) => p.slug === params.slug && p.type === 'dance')

  if (!programme) {
    notFound()
  }

  return <ProgrammeDetail programme={programme as any} />
}
