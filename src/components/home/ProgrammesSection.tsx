'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface Programme {
  image: string;
  title: string;
  count: string;
  description: string;
  href: string;
}

const programmes: Programme[] = [
  {
    image: 'https://images.unsplash.com/photo-1583147610148-4d5b6a0a6f9b?w=600&q=80',
    title: 'Indian Classical Dances',
    count: '8 Programmes',
    description:
      'Immerse yourself in sacred art forms passed down through generations — Bharatanatyam, Kathakali, Mohiniyattam, and more.',
    href: '/dance/indian-classical',
  },
  {
    image: 'https://images.unsplash.com/photo-1619641618895-6b78cca0b6b1?w=600&q=80',
    title: 'Group Dances',
    count: '4 Programmes',
    description:
      'Celebrate Kerala\'s most beloved traditional group dance forms — Thiruvathira, Oppana, Margamkali, and Sanghanritham.',
    href: '/dance/group-dances',
  },
  {
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80',
    title: 'Other Dances',
    count: '4 Programmes',
    description:
      'Express yourself through vibrant contemporary styles — Cinematic, Bollywood, Contemporary, and Zumba fitness.',
    href: '/dance/other-dances',
  },
  {
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&q=80',
    title: 'String Instruments',
    count: '7 Programmes',
    description:
      'From the sacred Veena to the modern Guitar — master the art of melody across classical Indian and Western traditions.',
    href: '/music/string-instruments',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

function ProgrammeCard({ programme, index }: { programme: Programme; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group premium-card overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Gold top accent */}
      <div className="h-[3px] bg-antique-gold w-full flex-shrink-0" />

      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <Image
          src={programme.image}
          alt={programme.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <p className="font-body text-xs text-antique-gold tracking-widest uppercase font-semibold">
          {programme.count}
        </p>

        <h3 className="font-heading text-2xl text-royal-maroon leading-snug">
          {programme.title}
        </h3>

        <p className="font-body text-sm text-deep-brown/80 leading-relaxed flex-1">
          {programme.description}
        </p>

        <Link
          href={programme.href}
          className="btn-ghost-gold self-start mt-2 text-xs px-4 py-2"
          aria-label={`Explore ${programme.title}`}
        >
          Explore →
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProgrammesSection() {
  return (
    <section
      className="relative py-24 md:py-36"
      style={{ backgroundColor: 'rgba(232,217,189,0.3)' }}
    >
      {/* Background mandala hint */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Ccircle cx='100' cy='100' r='90' stroke='%23C5A059' stroke-width='1' fill='none'/%3E%3Ccircle cx='100' cy='100' r='70' stroke='%23C5A059' stroke-width='1' fill='none'/%3E%3Ccircle cx='100' cy='100' r='50' stroke='%23C5A059' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
          backgroundSize: '300px 300px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="section-heading text-royal-maroon">Our Programmes</h2>
        </div>

        <div className="text-center mb-14">
          <p className="section-subheading">Discover Your Art Form</p>
          {/* Ornamental divider */}
          <div className="ornamental-divider max-w-xs mx-auto mt-6">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#C5A059" aria-hidden="true">
              <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" />
            </svg>
          </div>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programmes.map((prog, i) => (
            <ProgrammeCard key={prog.href} programme={prog} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
