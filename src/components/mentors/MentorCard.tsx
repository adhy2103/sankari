import Image from 'next/image'
import { User, Award, BookOpen } from 'lucide-react'

export interface MentorProps {
  name: string
  role: string
  specialization: string
  qualifications: string
  experience: string
  biography: string
  image?: string
}

export default function MentorCard({ mentor }: { mentor: MentorProps }) {
  return (
    <div className="bg-white border border-antique-gold/30 rounded-sm shadow-card hover:shadow-gold hover:border-antique-gold transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative h-64 bg-sandalwood/30 flex items-center justify-center overflow-hidden">
        {mentor.image ? (
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="w-28 h-28 rounded-full border-2 border-antique-gold bg-warm-ivory flex items-center justify-center text-royal-maroon/50 shadow-inner">
            <User className="w-14 h-14 text-antique-gold" />
          </div>
        )}
        <div className="absolute top-3 right-3 bg-royal-maroon text-antique-gold text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-xs">
          {mentor.specialization}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-2xl text-royal-maroon mb-1">
            {mentor.name}
          </h3>
          <p className="text-antique-gold text-sm font-semibold tracking-wide mb-4">
            {mentor.role}
          </p>

          <div className="space-y-2 mb-4 text-xs text-deep-brown/80 border-y border-antique-gold/20 py-3">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-antique-gold shrink-0" />
              <span><strong>Qualifications:</strong> {mentor.qualifications}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-antique-gold shrink-0" />
              <span><strong>Experience:</strong> {mentor.experience}</span>
            </div>
          </div>

          <p className="text-deep-brown/70 text-xs leading-relaxed italic">
            {mentor.biography}
          </p>
        </div>

        <div className="mt-4 pt-3 text-[11px] text-deep-brown/40 border-t border-antique-gold/10 text-center">
          Profile placeholder • Official credentials provided on request
        </div>
      </div>
    </div>
  )
}
