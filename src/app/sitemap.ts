import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
 const site = process.env.NEXT_PUBLIC_SITE_URL;
 if (!site) return [];
 return ['','/about','/dance','/music','/gallery','/mentors','/admissions','/contact','/schedule','/achievements','/privacy'].map(path=>({url:`${site.replace(/\/$/,'')}${path}`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:path===''?1:0.6}));
}
