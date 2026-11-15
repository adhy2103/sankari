import PageHero from '@/components/ui/PageHero'
import MentorCard, { MentorProps } from '@/components/mentors/MentorCard'

export const metadata = {
  title: 'Our Mentors | Sankara Kayika Kalamandalam',
  description:
    'Meet the dedicated faculty guiding students in classical dance, traditional group forms, contemporary movement, and music at Sankara Kayika Kalamandalam.',
}

export default function MentorsPage() {
  const classicalMentors: MentorProps[] = [
    {
      name: 'Faculty Member',
      role: 'Senior Classical Dance Guru',
      specialization: 'Bharatanatyam & Mohiniyattam',
      qualifications: 'Vidwan / MFA in Performing Arts [Placeholder]',
      experience: '15+ Years of Pedagogy [Placeholder]',
      biography:
        'Devoted to upholding the pure traditional lineage of Bharatanatyam and Kerala Mohiniyattam with deep emphasis on Bhava, Raga, and Tala.',
    },
    {
      name: 'Faculty Member',
      role: 'Classical Dance Guru',
      specialization: 'Kathakali & Kuchipudi',
      qualifications: 'Postgraduate in Classical Dance [Placeholder]',
      experience: '12+ Years [Placeholder]',
      biography:
        'Experienced in the rigorous abhinaya traditions of Kathakali and the lyrical dramatic storytelling of Kuchipudi.',
    },
  ]

  const groupDanceMentors: MentorProps[] = [
    {
      name: 'Faculty Member',
      role: 'Traditional Dance Specialist',
      specialization: 'Thiruvathira & Margamkali',
      qualifications: 'Diploma in Folk & Heritage Arts [Placeholder]',
      experience: '10+ Years [Placeholder]',
      biography:
        'Specializing in Kerala festival choreography and synchronized cultural ensemble formations with deep community spirit.',
    },
    {
      name: 'Faculty Member',
      role: 'Heritage Dance Instructor',
      specialization: 'Oppana & Sanghanritham',
      qualifications: 'Kerala Folklore Academy Honors [Placeholder]',
      experience: '8+ Years [Placeholder]',
      biography:
        'Dedicated to traditional rhythmic clapping sequences, celebratory bridal songs, and synchronized group harmony.',
    },
  ]

  const modernMentors: MentorProps[] = [
    {
      name: 'Faculty Member',
      role: 'Contemporary & Cinematic Choreographer',
      specialization: 'Cinematic & Contemporary',
      qualifications: 'Professional Choreography Certification [Placeholder]',
      experience: '9+ Years [Placeholder]',
      biography:
        'Bridging the visual storytelling of Indian cinema with contemporary fluid movement and stage presentation.',
    },
    {
      name: 'Faculty Member',
      role: 'Dance Fitness Instructor',
      specialization: 'Zumba & Bollywood Fitness',
      qualifications: 'Group Fitness & Movement Specialist [Placeholder]',
      experience: '6+ Years [Placeholder]',
      biography:
        'Fostering high-energy, fun-filled dance fitness sessions that encourage cardiovascular endurance and joyful movement for all ages.',
    },
  ]

  const musicMentors: MentorProps[] = [
    {
      name: 'Faculty Member',
      role: 'Classical String Maestro',
      specialization: 'Veena & Sitar',
      qualifications: 'Ganabhooshanam in Carnatic Music [Placeholder]',
      experience: '18+ Years [Placeholder]',
      biography:
        'Guiding students through the sacred gamakas of Saraswati Veena and the subtle microtones and meends of the Sitar.',
    },
    {
      name: 'Faculty Member',
      role: 'String Instruments Instructor',
      specialization: 'Violin, Guitar & Ukulele',
      qualifications: 'Trinity College Graded Certification [Placeholder]',
      experience: '10+ Years [Placeholder]',
      biography:
        'Specializing in dual classical and contemporary acoustic string instruction, notation reading, and improvisational accompaniment.',
    },
  ]

  return (
    <main>
      <PageHero
        title="Our Revered Mentors"
        subtitle="Guided by Passion. Rooted in Discipline."
        backgroundImage="https://images.unsplash.com/photo-1536504552153-f5bce20c78a1?w=1920&q=80"
        overlayColor="maroon"
      />

      <section className="bg-warm-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Classical Dance */}
          <div>
            <div className="mb-8">
              <span className="text-antique-gold text-xs uppercase tracking-widest font-semibold">
                Faculty
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-royal-maroon mt-1">
                Classical Dance Mentors
              </h2>
              <div className="h-0.5 w-16 bg-antique-gold mt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {classicalMentors.map((m, idx) => (
                <MentorCard key={idx} mentor={m} />
              ))}
            </div>
          </div>

          {/* Group Dance */}
          <div>
            <div className="mb-8">
              <span className="text-antique-gold text-xs uppercase tracking-widest font-semibold">
                Faculty
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-royal-maroon mt-1">
                Group Dance Mentors
              </h2>
              <div className="h-0.5 w-16 bg-antique-gold mt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {groupDanceMentors.map((m, idx) => (
                <MentorCard key={idx} mentor={m} />
              ))}
            </div>
          </div>

          {/* Modern & Fitness */}
          <div>
            <div className="mb-8">
              <span className="text-antique-gold text-xs uppercase tracking-widest font-semibold">
                Faculty
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-royal-maroon mt-1">
                Modern Dance & Fitness Instructors
              </h2>
              <div className="h-0.5 w-16 bg-antique-gold mt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modernMentors.map((m, idx) => (
                <MentorCard key={idx} mentor={m} />
              ))}
            </div>
          </div>

          {/* Music */}
          <div>
            <div className="mb-8">
              <span className="text-antique-gold text-xs uppercase tracking-widest font-semibold">
                Faculty
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-royal-maroon mt-1">
                Music Mentors
              </h2>
              <div className="h-0.5 w-16 bg-antique-gold mt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {musicMentors.map((m, idx) => (
                <MentorCard key={idx} mentor={m} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
