'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import SuccessModal from '@/components/admissions/SuccessModal'
import { ACADEMY_CONFIG } from '@/lib/config'
import { formatWhatsAppUrl } from '@/lib/utils'
import { MessageCircle, Send, AlertCircle, Loader2 } from 'lucide-react'

const PROGRAMMES_BY_CATEGORY: Record<string, string[]> = {
  'Indian Classical Dances': [
    'Bharatanatyam',
    'Kuchipudi',
    'Mohiniyattam',
    'Kathakali',
    'Kathak',
    'Manipuri',
    'Sattriya',
    'Odissi',
  ],
  'Group Dances': [
    'Thiruvathira',
    'Oppana',
    'Margamkali',
    'Sanghanritham',
  ],
  'Other Dances': [
    'Cinematic',
    'Bollywood',
    'Contemporary',
    'Zumba',
  ],
  'String Instruments': [
    'Veena',
    'Violin',
    'Guitar',
    'Electric Guitar',
    'Bass Guitar',
    'Sitar',
    'Ukulele',
  ],
}

export default function AdmissionForm() {
  const searchParams = useSearchParams()
  const initialProg = searchParams.get('programme') || ''

  // Infer category from initialProg if present
  let initialCategory = 'Indian Classical Dances'
  if (initialProg) {
    for (const [cat, progs] of Object.entries(PROGRAMMES_BY_CATEGORY)) {
      if (progs.some((p) => p.toLowerCase() === initialProg.toLowerCase())) {
        initialCategory = cat
        break
      }
    }
  }

  const [category, setCategory] = useState<string>(initialCategory)
  const [preferredProgramme, setPreferredProgramme] = useState<string>(
    initialProg || PROGRAMMES_BY_CATEGORY[initialCategory][0]
  )

  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    gender: '',
    parentGuardianName: '',
    phone: '',
    email: '',
    previousExperience: 'No prior experience (Beginner)',
    preferredBatch: 'Flexible / As per availability',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successInfo, setSuccessInfo] = useState<{
    studentName: string
    programme: string
    enquiryId?: string
  } | null>(null)

  // Update programme choices when category changes
  const handleCategoryChange = (newCat: string) => {
    setCategory(newCat)
    const available = PROGRAMMES_BY_CATEGORY[newCat] || []
    setPreferredProgramme(available[0] || '')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)
    setLoading(true)

    try {
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          category,
          preferredProgramme,
        }),
      })

      const result = await res.json()

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit enquiry.')
      }

      setSuccessInfo({
        studentName: formData.studentName,
        programme: preferredProgramme,
        enquiryId: result.enquiryId,
      })

      // Reset form
      setFormData({
        studentName: '',
        age: '',
        gender: '',
        parentGuardianName: '',
        phone: '',
        email: '',
        previousExperience: 'No prior experience (Beginner)',
        preferredBatch: 'Flexible / As per availability',
        message: '',
      })
    } catch (err: any) {
      setErrorMessage(err.message || 'Network error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const whatsappDirectUrl = formatWhatsAppUrl(
    ACADEMY_CONFIG.contact.whatsapp,
    `Hello, I would like to enquire about admission for ${preferredProgramme} at Sankara Kayika Kalamandalam.`
  )

  return (
    <div className="bg-white border-2 border-antique-gold/40 p-6 md:p-10 rounded-sm shadow-card relative">
      <div className="mb-8">
        <span className="text-antique-gold text-xs uppercase tracking-widest font-semibold block">
          Online Registration
        </span>
        <h2 className="font-heading text-3xl md:text-4xl text-royal-maroon mt-1">
          Admission Enquiry Form
        </h2>
        <div className="h-0.5 w-16 bg-antique-gold mt-2 mb-4" />
        <p className="text-deep-brown/70 text-sm">
          Select your desired discipline and submit your details. Our admissions counselor will connect with you to guide the next steps.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-600 flex items-start gap-3 text-red-800 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Age */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
              Student Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="studentName"
              required
              value={formData.studentName}
              onChange={handleChange}
              placeholder="e.g. Ananya Nair"
              className="w-full px-4 py-3 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/30 text-deep-brown text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="age"
              required
              min={3}
              max={99}
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g. 12"
              className="w-full px-4 py-3 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/30 text-deep-brown text-sm"
            />
          </div>
        </div>

        {/* Gender & Parent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
              Gender (Optional)
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/30 text-deep-brown text-sm"
            >
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
              Parent / Guardian Name (If Applicable)
            </label>
            <input
              type="text"
              name="parentGuardianName"
              value={formData.parentGuardianName}
              onChange={handleChange}
              placeholder="Parent or Guardian"
              className="w-full px-4 py-3 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/30 text-deep-brown text-sm"
            />
          </div>
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="w-full px-4 py-3 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/30 text-deep-brown text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/30 text-deep-brown text-sm"
            />
          </div>
        </div>

        {/* Dynamic Category & Programme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-sandalwood/20 p-5 border border-antique-gold/30">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
              Programme Category <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-3 border border-antique-gold/60 focus:border-antique-gold focus:outline-none bg-white text-deep-brown text-sm font-medium"
            >
              {Object.keys(PROGRAMMES_BY_CATEGORY).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
              Preferred Programme <span className="text-red-500">*</span>
            </label>
            <select
              value={preferredProgramme}
              onChange={(e) => setPreferredProgramme(e.target.value)}
              className="w-full px-4 py-3 border border-antique-gold/60 focus:border-antique-gold focus:outline-none bg-white text-deep-brown text-sm font-medium"
            >
              {(PROGRAMMES_BY_CATEGORY[category] || []).map((prog) => (
                <option key={prog} value={prog}>
                  {prog}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Previous Experience & Preferred Batch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
              Prior Experience Level
            </label>
            <select
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/30 text-deep-brown text-sm"
            >
              <option value="No prior experience (Beginner)">
                No prior experience (Beginner)
              </option>
              <option value="Basic fundamentals / 1-2 years">
                Basic fundamentals (1–2 years)
              </option>
              <option value="Intermediate / 3-5 years">
                Intermediate (3–5 years)
              </option>
              <option value="Advanced / Pre-Arangetram">
                Advanced / Pre-Arangetram
              </option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
              Preferred Batch Timing
            </label>
            <select
              name="preferredBatch"
              value={formData.preferredBatch}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/30 text-deep-brown text-sm"
            >
              <option value="Morning Batch">Morning Batch</option>
              <option value="Evening Batch">Evening Batch</option>
              <option value="Weekend Batch">Weekend Batch</option>
              <option value="Flexible / As per availability">
                Flexible / As per availability
              </option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-royal-maroon mb-2">
            Additional Notes or Queries (Optional)
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your learning goals or specific scheduling requests..."
            className="w-full px-4 py-3 border border-antique-gold/40 focus:border-antique-gold focus:outline-none bg-warm-ivory/30 text-deep-brown text-sm"
          />
        </div>

        {/* Submit */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto btn-maroon flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Admission Enquiry</span>
              </>
            )}
          </button>

          {ACADEMY_CONFIG.contact.whatsapp && (
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white font-body font-semibold text-sm tracking-widest uppercase transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire via WhatsApp</span>
            </a>
          )}
        </div>
      </form>

      <SuccessModal
        isOpen={Boolean(successInfo)}
        onClose={() => setSuccessInfo(null)}
        studentName={successInfo?.studentName || ''}
        programme={successInfo?.programme || ''}
        enquiryId={successInfo?.enquiryId}
      />
    </div>
  )
}
