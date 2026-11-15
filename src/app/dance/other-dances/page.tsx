import DanceCategoryPage from '@/components/dance/DanceCategoryPage'
import { DANCE_PROGRAMMES } from '@/lib/config'

export const metadata = {
  title: 'Other Dances & Fitness | Sankara Kayika Kalamandalam',
  description:
    'Vibrant contemporary dance styles including Cinematic, Bollywood, Contemporary, and Zumba dance fitness.',
}

export default function OtherDancesPage() {
  return (
    <DanceCategoryPage
      category={DANCE_PROGRAMMES.otherDances}
      bgImage="https://images.unsplash.com/photo-1547153760-18fc86324498?w=1920&q=80"
    />
  )
}
