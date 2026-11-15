'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  overlayColor?: 'maroon' | 'dark'
}

function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <div className="h-px w-16 bg-antique-gold/60" />
      <svg
        width="32"
        height="20"
        viewBox="0 0 32 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 2C16 2 10 8 10 13C10 16.3137 12.6863 19 16 19C19.3137 19 22 16.3137 22 13C22 8 16 2 16 2Z"
          fill="#C5A059"
          opacity="0.9"
        />
        <path
          d="M16 6C16 6 7 10 5 15C3.5 18 6 20 9 18C12 16 16 10 16 6Z"
          fill="#C5A059"
          opacity="0.6"
        />
        <path
          d="M16 6C16 6 25 10 27 15C28.5 18 26 20 23 18C20 16 16 10 16 6Z"
          fill="#C5A059"
          opacity="0.6"
        />
        <path
          d="M16 10C16 10 11 11 9 14"
          stroke="#C5A059"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M16 10C16 10 21 11 23 14"
          stroke="#C5A059"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle cx="16" cy="13" r="2" fill="#C5A059" opacity="0.4" />
      </svg>
      <div className="h-px w-16 bg-antique-gold/60" />
    </div>
  )
}

function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  const crumbs = [
    { label: 'Home', href: '/' },
    ...segments.map((seg, i) => ({
      label: seg
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' '),
      href: '/' + segments.slice(0, i + 1).join('/'),
    })),
  ]

  return (
    <nav
      aria-label="Breadcrumb"
      className="absolute top-4 left-0 right-0 flex justify-center"
    >
      <ol className="flex items-center gap-1.5 text-xs text-warm-ivory/70">
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            {i < crumbs.length - 1 ? (
              <>
                <Link
                  href={crumb.href}
                  className="hover:text-antique-gold transition-colors"
                >
                  {crumb.label}
                </Link>
                <span className="text-antique-gold/60">›</span>
              </>
            ) : (
              <span className="text-antique-gold font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  overlayColor = 'maroon',
}: PageHeroProps) {
  const overlayClass =
    overlayColor === 'maroon'
      ? 'bg-royal-maroon/70'
      : 'bg-deep-brown/80'

  return (
    <section className="relative w-full h-80 md:h-96 overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClass} hero-overlay`} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <Breadcrumb />

        <h1 className="font-heading text-5xl md:text-6xl text-warm-ivory leading-tight tracking-wide">
          {title}
        </h1>

        <LotusDivider />

        {subtitle && (
          <p className="mt-4 text-antique-gold italic text-lg md:text-xl font-body tracking-wide max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
