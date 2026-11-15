import Link from 'next/link';
import { Instagram } from 'lucide-react';
import Logo from '@/components/ui/Logo';

// ─── Decorative lotus SVG ─────────────────────────────────────────────────────

function LotusDecoration() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity: 0.07 }}
    >
      {/* Outer ring */}
      <circle cx="70" cy="70" r="66" stroke="#C5A059" strokeWidth="1" />
      <circle cx="70" cy="70" r="52" stroke="#C5A059" strokeWidth="0.75" />
      <circle cx="70" cy="70" r="38" stroke="#C5A059" strokeWidth="0.75" />

      {/* Petals — 8-fold symmetry */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <ellipse
            key={i}
            cx="70"
            cy="70"
            rx="8"
            ry="24"
            fill="#C5A059"
            transform={`rotate(${angle} 70 70) translate(0 -24)`}
          />
        );
      })}

      {/* Inner circle */}
      <circle cx="70" cy="70" r="10" fill="#C5A059" />

      {/* Spokes */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x2 = 70 + 60 * Math.sin(rad);
        const y2 = 70 - 60 * Math.cos(rad);
        return (
          <line
            key={i}
            x1="70"
            y1="70"
            x2={x2}
            y2={y2}
            stroke="#C5A059"
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

const programmes = [
  { label: 'Bharatanatyam', href: '/dance/bharatanatyam' },
  { label: 'Mohiniyattam', href: '/dance/mohiniyattam' },
  { label: 'Kathakali', href: '/dance/kathakali' },
  { label: 'Veena', href: '/music/veena' },
  { label: 'Violin', href: '/music/violin' },
  { label: 'Guitar', href: '/music/guitar' },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-royal-maroon text-warm-ivory overflow-hidden">
      {/* Top ornamental gold border */}
      <div className="h-px w-full bg-antique-gold/40" />

      {/* Decorative lotus — top-right corner */}
      <div className="pointer-events-none absolute right-0 top-0 select-none">
        <LotusDecoration />
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Logo size="md" />
            <p className="font-body text-sm leading-relaxed text-warm-ivory/70">
              An academy dedicated to preserving India&rsquo;s rich cultural
              heritage through the timeless arts of classical dance and music.
            </p>
            <a
              href="https://instagram.com/sankara.kayikakalamandalam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-antique-gold/40 text-antique-gold transition-colors duration-200 hover:bg-antique-gold hover:text-deep-brown"
            >
              <Instagram size={16} />
            </a>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold tracking-wide text-antique-gold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-warm-ivory/70 transition-colors duration-150 hover:text-antique-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programmes */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold tracking-wide text-antique-gold">
              Programmes
            </h3>
            <ul className="flex flex-col gap-2">
              {programmes.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="font-body text-sm text-warm-ivory/70 transition-colors duration-150 hover:text-antique-gold"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold tracking-wide text-antique-gold">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 font-body text-sm text-warm-ivory/70">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <span>
                  {process.env.NEXT_PUBLIC_ACADEMY_PHONE ?? (
                    <em className="text-warm-ivory/40">Ask us for details</em>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✉</span>
                <span>
                  {process.env.NEXT_PUBLIC_ACADEMY_EMAIL ?? (
                    <em className="text-warm-ivory/40">Ask us for details</em>
                  )}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={14} className="shrink-0" />
                <a
                  href="https://instagram.com/sankara.kayikakalamandalam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-antique-gold"
                >
                  @sankara.kayikakalamandalam
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-antique-gold/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="font-body text-xs text-warm-ivory/50">
            &copy; {currentYear} Sankara Kayika Kalamandalam. All rights reserved.{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-2 hover:text-antique-gold"
            >
              Privacy Policy
            </Link>
          </p>
          <p className="font-heading text-sm italic text-antique-gold/70">
            Preserving Heritage. Inspiring Generations.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
