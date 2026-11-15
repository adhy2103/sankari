import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProgrammesSection from '@/components/home/ProgrammesSection';
import AcademyUpdates from '@/components/home/AcademyUpdates';

export const metadata = {
  title: 'Sankara Kayika Kalamandalam — Dance & Music Academy',
  description:
    'A premier Indian classical dance and music academy dedicated to preserving India\'s rich cultural heritage through Bharatanatyam, Mohiniyattam, Kathakali, and more.',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProgrammesSection />
      <AcademyUpdates />
    </main>
  );
}
