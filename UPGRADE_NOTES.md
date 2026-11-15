# Sankara website upgrade — November 2026

## Completed
- Replaced zero-first animated counters with server-rendered, immediately accurate 16 / 7 / 23 totals.
- Replaced empty, fake testimonial skeletons with useful schedule, gallery, and achievement navigation.
- Added schedule and achievements pages without inventing dates, prizes, or class availability.
- Removed environment-configuration instructions and invented contact placeholders from public pages.
- Fixed contact form: sends requests to a real API endpoint and displays errors when not configured.
- Fixed admission endpoint: no more fake success when the database is disconnected; validates age.
- Switched enquiry persistence to a server-only Supabase service-role client.
- Added SQL for protected enquiry tables, sitemap, robots, and optional site URL.
- Kept all 23 programmes (including Zumba), existing design and Netlify-ready Next.js source.

## Required setup before launch
1. Configure Netlify environment variables from `.env.local.example` (never upload secret `.env` values to public repositories). Set `NEXT_PUBLIC_SUPABASE_URL` and **server-only** `SUPABASE_SERVICE_ROLE_KEY`.
2. Run `supabase-schema.sql` in your own Supabase project's SQL editor. Restrict access to enrolment information; server-only service-role credentials must remain secret.
3. Enter real academy phone, WhatsApp (digits with country code), email, address and opening hours. These have intentionally not been fabricated.
4. Set `NEXT_PUBLIC_SITE_URL` to your real public domain, including `https://` for sitemap generation.
5. Check admissions and contact form submissions after deployment. Test on mobile and check Netlify function logs.
6. Replace stock photos with permission-cleared academy images and supply authentic instructor details, reviews, achievements and timetables.

## Known limitations
- Trial classes are *not* advertised as available because this has not been confirmed.
- Contact and admission requests return a clear error until a real database is configured.
- No domain, SMS or WhatsApp messaging service was purchased or configured.
- Real-time integration/deployed production testing requires your Netlify and Supabase access.
