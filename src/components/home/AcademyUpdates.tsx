import Link from 'next/link';
import { CalendarDays, Camera, Award, ArrowRight } from 'lucide-react';
export default function AcademyUpdates() {
 const items = [
  {title:'Class schedules',text:'Explore our programmes and enquire about available batches.',href:'/schedule',Icon:CalendarDays},
  {title:'Performances & gallery',text:'Discover dance and music moments as our gallery grows.',href:'/gallery',Icon:Camera},
  {title:'Academy achievements',text:'Verified awards and achievements will be showcased when available.',href:'/achievements',Icon:Award},
 ];
 return <section className="bg-royal-maroon py-20 md:py-28 text-warm-ivory border-y border-antique-gold/40"><div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="text-center mb-12"><p className="uppercase tracking-[.3em] text-antique-gold text-xs mb-3">Beyond the classroom</p><h2 className="font-heading text-4xl md:text-5xl text-antique-gold">Discover Our Academy</h2></div><div className="grid gap-6 md:grid-cols-3">{items.map(({title,text,href,Icon})=><Link key={href} href={href} className="group border border-antique-gold/35 bg-white/5 p-8 hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-antique-gold"><Icon className="h-8 w-8 text-antique-gold mb-5" aria-hidden="true"/><h3 className="font-heading text-2xl mb-3">{title}</h3><p className="text-sandalwood/90 text-sm leading-relaxed mb-6">{text}</p><span className="inline-flex items-center gap-2 text-antique-gold text-sm">Explore <ArrowRight size={16}/></span></Link>)}</div></div></section>
}
