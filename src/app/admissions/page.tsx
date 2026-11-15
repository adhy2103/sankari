import { Suspense } from 'react'
import PageHero from '@/components/ui/PageHero'
import AdmissionForm from '@/components/admissions/AdmissionForm'
import { Sparkles, Calendar, BookOpen, Heart } from 'lucide-react'

export const metadata = {
  title: 'Admissions | Sankara Kayika Kalamandalam',
  description:
    'Join Sankara Kayika Kalamandalam. Enrol in 23 distinct programmes across Indian classical dance, group forms, modern styles, and musical instruments.',
}

export default function AdmissionsPage() {
  const steps = [
    {
      num: '01',
      title: 'Submit Online Enquiry',
      desc: 'Fill out the form with student details and select your desired dance form or musical instrument.',
    },
    {
      num: '02',
      title: 'Counselor Consultation',
      desc: 'Our faculty coordinator connects with you to discuss batches, timings, and suitable syllabus levels.',
    },
    {
      num: '03',
      title: 'Orientation & Induction',
      desc: 'Attend your welcome session, receive training guidelines, and embark on your journey in the performing arts.',
    },
  ]

  return (
    <main>
      <PageHero
        title="Online Admissions"
        subtitle="Embark on Your Journey in Indian Performing Arts"
        backgroundImage="https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=1920&q=80"
        overlayColor="maroon"
      />

      <section className="bg-warm-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Steps Banner */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-antique-gold text-xs font-semibold tracking-widest uppercase">
                Admissions Process
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-royal-maroon mt-1">
                How to Join the Academy
              </h2>
              <div className="h-0.5 w-16 bg-antique-gold mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((st, i) => (
                <div
                  key={i}
                  className="bg-white p-8 border border-antique-gold/30 rounded-sm relative shadow-xs"
                >
                  <span className="font-heading text-5xl text-antique-gold/40 font-bold block mb-4">
                    {st.num}
                  </span>
                  <h3 className="font-heading text-2xl text-royal-maroon mb-2">
                    {st.title}
                  </h3>
                  <p className="text-deep-brown/70 text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <Suspense
            fallback={
              <div className="p-12 text-center text-royal-maroon">
                Loading admissions form...
              </div>
            }
          >
            <AdmissionForm />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
