'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

// --- Golden ornament SVG ---
const GoldOrnament = () => (
  <svg
    className="mx-auto my-6 w-48 opacity-80"
    viewBox="0 0 200 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="0" y1="15" x2="70" y2="15" stroke="#C5A059" strokeWidth="0.5" />
    <circle cx="80" cy="15" r="3" fill="#C5A059" />
    <circle cx="100" cy="15" r="6" fill="none" stroke="#C5A059" strokeWidth="1" />
    <path
      d="M100 9 L103 13 L100 11 L97 13 Z M100 21 L103 17 L100 19 L97 17 Z"
      fill="#C5A059"
    />
    <circle cx="120" cy="15" r="3" fill="#C5A059" />
    <line x1="130" y1="15" x2="200" y2="15" stroke="#C5A059" strokeWidth="0.5" />
  </svg>
);

// --- Floating particles (static positions seeded to avoid hydration mismatch) ---
const particles = [
  { left: '8%', top: '15%', size: 4, delay: 0, slow: false },
  { left: '15%', top: '70%', size: 2, delay: 1.5, slow: true },
  { left: '23%', top: '35%', size: 3, delay: 0.8, slow: false },
  { left: '30%', top: '85%', size: 5, delay: 2.2, slow: true },
  { left: '42%', top: '20%', size: 2, delay: 0.3, slow: false },
  { left: '50%', top: '65%', size: 4, delay: 1.1, slow: false },
  { left: '58%', top: '10%', size: 6, delay: 1.8, slow: true },
  { left: '65%', top: '50%', size: 2, delay: 0.6, slow: false },
  { left: '72%', top: '78%', size: 3, delay: 2.5, slow: true },
  { left: '78%', top: '30%', size: 5, delay: 0.4, slow: false },
  { left: '85%', top: '60%', size: 2, delay: 1.3, slow: true },
  { left: '90%', top: '18%', size: 4, delay: 0.9, slow: false },
  { left: '94%', top: '80%', size: 3, delay: 2.0, slow: false },
  { left: '5%', top: '90%', size: 6, delay: 1.6, slow: true },
  { left: '55%', top: '40%', size: 2, delay: 0.2, slow: false },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=1920&q=80"
          alt="Bharatanatyam dancer performing classical Indian dance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark cinematic overlay */}
      <div className="hero-overlay absolute inset-0 z-10" aria-hidden="true" />

      {/* Floating golden particles */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-antique-gold/30 ${p.slow ? 'animate-float-slow' : 'animate-float'}`}
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top decorative gold line */}
        <motion.div variants={itemVariants} className="w-32 h-px bg-antique-gold/60 mb-10" />

        {/* Academy name */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-7xl md:text-9xl text-antique-gold tracking-widest text-shadow-gold leading-none"
        >
          SANKARA
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-heading text-3xl md:text-5xl text-warm-ivory tracking-widest leading-snug mt-2"
        >
          KAYIKA KALAMANDALAM
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="font-body text-sm md:text-base tracking-[0.5em] text-antique-gold/80 uppercase mt-3"
        >
          Dance &amp; Music Academy
        </motion.p>

        {/* Gold ornament */}
        <motion.div variants={itemVariants}>
          <GoldOrnament />
        </motion.div>

        {/* Tagline */}
        <motion.h2
          variants={itemVariants}
          className="font-heading text-2xl md:text-4xl text-warm-ivory italic"
        >
          Where Tradition Meets Expression.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-sandalwood/90 text-sm md:text-base max-w-2xl mx-auto mt-5 leading-relaxed"
        >
          A sanctuary for the arts, where classical forms breathe anew through dedicated
          practice, passionate mentorship, and the timeless spirit of Indian cultural heritage.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <Link href="/dance" className="btn-ghost-gold">
            Explore Our Programmes
          </Link>
          <Link href="/admissions" className="btn-gold">
            Join Our Academy
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-antique-gold/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2, duration: 1 }, y: { repeat: Infinity, duration: 1.6, ease: 'easeInOut', delay: 2 } }}
        aria-hidden="true"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
