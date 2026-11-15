import PageHero from '@/components/ui/PageHero'
import { ACADEMY_CONFIG } from '@/lib/config'

export const metadata = {
  title: 'Privacy Policy | Sankara Kayika Kalamandalam',
  description: 'Privacy Policy and data protection terms for Sankara Kayika Kalamandalam.',
}

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        title="Privacy Policy"
        subtitle="Our Commitment to Your Privacy"
        backgroundImage="https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=1920&q=80"
        overlayColor="maroon"
      />

      <section className="bg-warm-ivory py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 border border-antique-gold/30 rounded-sm shadow-card space-y-8 text-deep-brown/85 font-body leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="font-heading text-3xl text-royal-maroon mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit an admission enquiry or contact request on the Sankara Kayika Kalamandalam website, we collect personal information you voluntarily provide, including student name, age, phone number, email address, parent/guardian details, and programme preferences.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-royal-maroon mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              The information you provide is utilized strictly for evaluating admission requests, batch scheduling, communications regarding classes, fee structures, and academy announcements. We do not sell, rent, or lease student information to any third parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-royal-maroon mb-3">
              3. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard administrative and technical safeguards to secure your personal data against unauthorized access, disclosure, or alteration.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-royal-maroon mb-3">
              4. Media & Photography Notice
            </h2>
            <p>
              Photographs, visual artworks, and performance recordings from academy events or stage presentations are displayed with cultural pride and student consent. If you wish to request the removal of any personal likeness, please reach out to our administration.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-royal-maroon mb-3">
              5. Contacting the Academy
            </h2>
            <p>
              If you have any questions or concerns regarding this privacy policy, please contact us directly at {ACADEMY_CONFIG.contact.email} or visit our academy.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
