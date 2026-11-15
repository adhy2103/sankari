import DanceCategoryPage from '@/components/dance/DanceCategoryPage'
import { DANCE_PROGRAMMES } from '@/lib/config'

export const metadata = {
  title: 'Indian Classical Dances | Sankara Kayika Kalamandalam',
  description:
    'Master the 8 revered Indian classical dance traditions: Bharatanatyam, Kuchipudi, Mohiniyattam, Kathakali, Kathak, Manipuri, Sattriya, and Odissi.',
}

export default function IndianClassicalPage() {
  return (
    <DanceCategoryPage
      category={DANCE_PROGRAMMES.indianClassical}
      bgImage="https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=1920&q=80"
    />
  )
}
