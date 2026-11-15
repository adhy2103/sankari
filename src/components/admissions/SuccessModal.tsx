'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle, X } from 'lucide-react'
import { ACADEMY_CONFIG } from '@/lib/config'
import { formatWhatsAppUrl } from '@/lib/utils'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  studentName: string
  programme: string
  enquiryId?: string
}

export default function SuccessModal({
  isOpen,
  onClose,
  studentName,
  programme,
  enquiryId,
}: SuccessModalProps) {
  if (!isOpen) return null

  const whatsappUrl = formatWhatsAppUrl(
    ACADEMY_CONFIG.contact.whatsapp,
    `Hello, I have submitted an admission enquiry for ${studentName} for the ${programme} programme (Ref: ${enquiryId || 'Online'}). I would like to follow up.`
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-warm-ivory border-2 border-antique-gold max-w-lg w-full p-8 rounded-sm shadow-2xl relative text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-deep-brown/60 hover:text-royal-maroon transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 mx-auto flex items-center justify-center text-emerald-700 mb-6 shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-antique-gold text-xs uppercase tracking-widest font-semibold block mb-1">
          Submission Confirmed
        </span>
        <h3 className="font-heading text-3xl text-royal-maroon mb-3">
          Admission Enquiry Received
        </h3>

        <div className="bg-white p-4 border border-antique-gold/30 rounded-xs mb-6 text-sm text-deep-brown/85 text-left space-y-2">
          <p>
            <strong>Student Name:</strong> {studentName}
          </p>
          <p>
            <strong>Selected Programme:</strong> {programme}
          </p>
          {enquiryId && (
            <p className="text-xs text-deep-brown/60">
              <strong>Reference ID:</strong> {enquiryId}
            </p>
          )}
        </div>

        <p className="text-sm text-deep-brown/80 leading-relaxed mb-6">
          Thank you for choosing Sankara Kayika Kalamandalam. Our admissions team will review your application and contact you promptly with batch schedules, fee structure, and orientation details.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {ACADEMY_CONFIG.contact.whatsapp && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors rounded-xs"
            >
              <MessageCircle className="w-4 h-4" />
              Quick WhatsApp Confirmation
            </a>
          )}
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-royal-maroon text-royal-maroon hover:bg-royal-maroon hover:text-warm-ivory text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  )
}
