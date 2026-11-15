'use client';

import Image from 'next/image';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';

const stats = [
  { target: 16, label: 'Dance Forms' },
  { target: 7, label: 'Musical Instruments' },
  { target: 23, label: 'Programmes' },
];

const GoldCornerOrnament = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const transforms: Record<string, string> = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0 rotate-90',
    bl: 'bottom-0 left-0 -rotate-90',
    br: 'bottom-0 right-0 rotate-180',
  };
  return (
    <svg
      className={`absolute ${transforms[position]} w-10 h-10`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 38 L2 2 L38 2" stroke="#C5A059" strokeWidth="2" fill="none" />
      <circle cx="2" cy="2" r="2" fill="#C5A059" />
    </svg>
  );
};

export default function AboutSection() {
  return (
    <section className="relative bg-warm-ivory paper-texture py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal direction="up" className="text-center mb-4">
          <h2 className="section-heading text-royal-maroon">
            Rooted in Tradition. Inspired by Art.
          </h2>
        </ScrollReveal>

        {/* Lotus divider */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="lotus-divider">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path
                d="M16 2 C16 2 10 8 16 14 C22 8 16 2 16 2Z M16 14 C8 14 2 16 2 16 C2 16 8 22 16 16 C24 22 30 16 30 16 C30 16 24 14 16 14Z M16 30 C16 30 22 24 16 18 C10 24 16 30 16 30Z"
                fill="#C5A059"
                opacity="0.8"
              />
            </svg>
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-6">
          {/* Image column */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
              {/* Gold border frame */}
              <div className="relative m-6">
                {/* Offset gold frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-antique-gold/50 z-0" />
                {/* Corner ornaments */}
                <div className="relative z-10">
                  <GoldCornerOrnament position="tl" />
                  <GoldCornerOrnament position="tr" />
                  <GoldCornerOrnament position="bl" />
                  <GoldCornerOrnament position="br" />
                  <div className="relative h-[480px] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1619641618895-6b78cca0b6b1?w=800&q=80"
                      alt="Classical Indian dancer in performance"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    {/* Subtle vignette */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(36,21,16,0.2)]" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text column */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="flex flex-col gap-6 relative">
              {/* Decorative large quote mark */}
              <span
                className="font-heading text-[120px] text-antique-gold/10 leading-none select-none absolute -top-8 -left-4 pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p className="font-body text-deep-brown/80 text-base md:text-lg leading-relaxed relative z-10">
                Sankara Kayika Kalamandalam is an academy dedicated to preserving India's rich
                cultural heritage through the timeless arts of classical dance and music.
              </p>

              <div className="w-12 h-px bg-antique-gold/50" />

              <p className="font-body text-deep-brown/80 text-base md:text-lg leading-relaxed">
                We nurture artistic talent, encourage creativity, and inspire individuals of all
                ages to discover their potential through movement, rhythm, and melody.
              </p>

              <p className="font-body text-deep-brown/80 text-base md:text-lg leading-relaxed">
                Rooted in the authentic traditions of Kerala and Indian classical arts, our
                academy provides a welcoming and inspiring environment where students learn from
                experienced mentors.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        <ScrollReveal direction="up" delay={0.4} className="mt-20">
          <div className="relative border border-antique-gold/20 bg-warm-ivory/50 py-10 px-6">
            {/* Top gold accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-antique-gold" />

            <div className="grid grid-cols-3 divide-x divide-antique-gold/30">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center gap-2 px-4 text-center"
                >
                  <AnimatedCounter target={stat.target} duration={2000} />
                  <p className="font-body text-xs md:text-sm text-royal-maroon tracking-widest uppercase font-semibold mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom gold accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-antique-gold" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
