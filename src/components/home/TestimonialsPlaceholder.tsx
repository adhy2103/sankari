// Testimonials section — placeholder for future content
// Will be populated with real student testimonials from the CMS

export default function TestimonialsPlaceholder() {
  return (
    <section className="relative bg-royal-maroon py-24 md:py-36 overflow-hidden">
      {/* Decorative gold top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-antique-gold/30" />

      {/* Background lotus watermark */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <svg width="600" height="600" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 10 C100 10 60 50 100 90 C140 50 100 10 100 10Z 
               M100 90 C40 90 10 100 10 100 C10 100 40 140 100 110 
               C160 140 190 100 190 100 C190 100 160 90 100 90Z 
               M100 190 C100 190 140 150 100 110 C60 150 100 190 100 190Z"
            fill="#C5A059"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h2 className="section-heading text-antique-gold mb-4">Words from Our Students</h2>
        <p className="section-subheading text-sandalwood/70 mb-16">
          Voices of transformation
        </p>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-antique-gold/20 p-8 rounded-sm bg-white/5 backdrop-blur-xs"
            >
              <div className="font-heading text-5xl text-antique-gold/30 mb-4">&ldquo;</div>
              <div className="h-4 bg-antique-gold/10 rounded mb-3 w-full" />
              <div className="h-4 bg-antique-gold/10 rounded mb-3 w-5/6 mx-auto" />
              <div className="h-4 bg-antique-gold/10 rounded mb-6 w-4/6 mx-auto" />
              <div className="w-12 h-12 rounded-full bg-antique-gold/20 mx-auto mb-3" />
              <div className="h-3 bg-antique-gold/10 rounded w-24 mx-auto" />
            </div>
          ))}
        </div>

        <p className="mt-12 font-body text-sandalwood/40 text-sm tracking-widest uppercase">
          Testimonials coming soon
        </p>
      </div>

      {/* Decorative gold bottom border */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-antique-gold/30" />
    </section>
  );
}
