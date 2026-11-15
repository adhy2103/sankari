'use client'

import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import { ACADEMY_CONFIG } from '@/lib/config'
import { formatWhatsAppUrl } from '@/lib/utils'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
  Send,
  CheckCircle2,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const whatsappUrl = formatWhatsAppUrl(
    ACADEMY_CONFIG.contact.whatsapp,
    'Hello, I would like to enquire about Sankara Kayika Kalamandalam.'
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setErrorMessage('')
    try {
      const response = await fetch('/api/contact', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(formData)})
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.error || 'Could not send your message.')
      setSubmitted(true)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to send your message.')
    } finally { setSubmitting(false) }
  }

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="We Welcome Your Questions & Enquiries"
        backgroundImage="https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=1920&q=80"
        overlayColor="maroon"
      />

      <section className="bg-warm-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <span className="text-antique-gold text-xs uppercase tracking-widest font-semibold">
                  Get in Touch
                </span>
                <h2 className="font-heading text-4xl text-royal-maroon mt-1 mb-4">
                  Visit or Connect With Our Academy
                </h2>
                <p className="text-deep-brown/80 font-body text-base leading-relaxed">
                  We are delighted to welcome prospective students, art lovers, and guardians. Reach out to schedule a visit or enquire about any of our 23 programmes.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="bg-white p-5 border border-antique-gold/30 rounded-sm flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-royal-maroon/10 flex items-center justify-center text-royal-maroon shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-antique-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-royal-maroon font-semibold">
                      Academy Address
                    </h3>
                    <p className="text-sm text-deep-brown/75 leading-relaxed mt-0.5">
                      {ACADEMY_CONFIG.contact.address || 'Please contact us for directions.'}
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="bg-white p-5 border border-antique-gold/30 rounded-sm flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-royal-maroon/10 flex items-center justify-center text-royal-maroon shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-antique-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-royal-maroon font-semibold">
                      Telephone & WhatsApp
                    </h3>
                    <p className="text-sm text-deep-brown/75 mt-0.5">
                      {ACADEMY_CONFIG.contact.phone ? `Phone: ${ACADEMY_CONFIG.contact.phone}` : 'Please enquire using our contact form.'}
                    </p>
                    {ACADEMY_CONFIG.contact.whatsapp && (
                      <p className="text-sm text-emerald-800 font-medium mt-1">
                        WhatsApp: +{ACADEMY_CONFIG.contact.whatsapp}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-5 border border-antique-gold/30 rounded-sm flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-royal-maroon/10 flex items-center justify-center text-royal-maroon shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-antique-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-royal-maroon font-semibold">
                      Email Address
                    </h3>
                    <p className="text-sm text-deep-brown/75 mt-0.5">
                      {ACADEMY_CONFIG.contact.email || 'Please use the enquiry form.'}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-white p-5 border border-antique-gold/30 rounded-sm flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-royal-maroon/10 flex items-center justify-center text-royal-maroon shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-antique-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-royal-maroon font-semibold">
                      Hours of Operation
                    </h3>
                    <p className="text-sm text-deep-brown/75 mt-0.5">
                      {ACADEMY_CONFIG.contact.openingHours || 'Contact us for current timings.'}
                    </p>
                  </div>
                </div>

                {/* Instagram Social Card */}
                <a
                  href={ACADEMY_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-royal-maroon text-warm-ivory p-5 border border-antique-gold rounded-sm flex items-center justify-between hover:bg-maroon-dark transition-colors shadow-md block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-antique-gold/20 flex items-center justify-center text-antique-gold">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-warm-ivory">
                        Follow Our Journey
                      </h4>
                      <p className="text-xs text-antique-gold">
                        @sankara.kayikakalamandalam
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-antique-gold border border-antique-gold/40 px-3 py-1 rounded-xs">
                    View Instagram →
                  </span>
                </a>
              </div>

              {/* Map embed / Placeholder */}
              <div className="bg-white border border-antique-gold/40 p-2 rounded-sm overflow-hidden h-64 relative shadow-inner flex items-center justify-center text-center">
                {ACADEMY_CONFIG.contact.mapsUrl ? (
                  <iframe
                    src={ACADEMY_CONFIG.contact.mapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Academy Location"
                  />
                ) : (
                  <div className="p-6 text-center text-deep-brown/60">
                    <MapPin className="w-8 h-8 text-antique-gold mx-auto mb-2" />
                    <p className="font-heading text-lg text-royal-maroon">
                      Google Maps Location
                    </p>
                    <p className="text-xs mt-1">
                      Contact the academy to request directions.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white border-2 border-antique-gold/40 p-8 md:p-10 rounded-sm shadow-card">
              <span className="text-antique-gold text-xs uppercase tracking-widest font-semibold block">
                Direct Message
              </span>
              <h3 className="font-heading text-3xl text-royal-maroon mt-1 mb-2">
                Send Us a Note
              </h3>
              <p className="text-deep-brown/70 text-sm mb-6">
                Fill in your enquiry details and we will respond via phone or email.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-500 p-8 rounded-sm text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-2xl text-emerald-900">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    Thank you, {formData.name}. We have received your message and will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
                    }}
                    className="btn-ghost-gold mt-4 text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && <p role="alert" className="border border-red-300 bg-red-50 text-red-800 p-3 text-sm">{errorMessage}</p>}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sreekanth Menon"
                      className="w-full px-4 py-2.5 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/20 text-sm text-deep-brown"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-4 py-2.5 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/20 text-sm text-deep-brown"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/20 text-sm text-deep-brown"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Batch Timings / Fee Structure"
                      className="w-full px-4 py-2.5 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/20 text-sm text-deep-brown"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your enquiry or question..."
                      className="w-full px-4 py-2.5 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/20 text-sm text-deep-brown"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-maroon flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                    {ACADEMY_CONFIG.contact.whatsapp && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white transition-colors text-xs uppercase font-semibold tracking-wider"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat via WhatsApp</span>
                      </a>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
