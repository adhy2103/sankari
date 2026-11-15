import DanceCategoryPage from '@/components/dance/DanceCategoryPage'
import { DANCE_PROGRAMMES } from '@/lib/config'

export const metadata = {
  title: 'Group Dances | Sankara Kayika Kalamandalam',
  description:
    'Experience traditional Kerala group dances: Thiruvathira, Oppana, Margamkali, and Sanghanritham.',
}

export default function GroupDancesPage() {
  return (
    <DanceCategoryPage
      category={DANCE_PROGRAMMES.groupDances}
      bgImage="https://images.unsplash.com/photo-1619641618895-6b78cca0b6b1?w=1920&q=80"
    />
  )
}
