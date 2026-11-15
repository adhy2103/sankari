# Sankara Kayika Kalamandalam — Dance & Music Academy

A production-ready website for **Sankara Kayika Kalamandalam**, an academy dedicated to Indian classical dance and music arts, built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

Instagram: [@sankara.kayikakalamandalam](https://www.instagram.com/sankara.kayikakalamandalam/)

---

## 🌟 Academy Programmes (23 Total)

### Indian Classical Dances (8)
1. **Bharatanatyam** — Ancient temple dance of Tamil Nadu
2. **Kuchipudi** — Classical dance-drama from Andhra Pradesh
3. **Mohiniyattam** — Enchanting, lyrical dance of Kerala
4. **Kathakali** — Dramatic dance-theatre of Kerala
5. **Kathak** — Court dance of Northern India with intricate footwork & spins
6. **Manipuri** — Devotional, gentle dance of Manipur
7. **Sattriya** — Monastic classical dance from Assam
8. **Odissi** — Sculptural classical temple dance of Odisha

### Group Dances (4)
1. **Thiruvathira** — Traditional Kerala women's festival dance
2. **Oppana** — Celebratory bridal dance of Kerala Mappila tradition
3. **Margamkali** — Traditional dance of Kerala Syrian Christian heritage
4. **Sanghanritham** — Synchronized ensemble choreography

### Other Dances & Fitness (4)
1. **Cinematic** — Expressive film choreography & stage storytelling
2. **Bollywood** — High-energy Indian popular dance
3. **Contemporary** — Fluid movement, floor work & creative expression
4. **Zumba** — "Move. Dance. Energize." dance-based cardio fitness

### String Instruments (7)
1. **Veena** — Sacred Saraswati Veena of Carnatic classical music
2. **Violin** — Carnatic classical & Western violin training
3. **Guitar** — Acoustic fingerstyle, pop & classical foundations
4. **Electric Guitar** — Tone crafting, blues, rock & contemporary lead
5. **Bass Guitar** — Rhythmic groove, timing & ensemble basslines
6. **Sitar** — Hindustani classical raga, meend & sitar traditions
7. **Ukulele** — Joyful, beginner-friendly acoustic string introduction

---

## 🎨 Design System & Heritage Theme

- **Royal Maroon**: `#641C28`
- **Antique Gold**: `#C5A059`
- **Warm Ivory**: `#FFF8EC`
- **Sandalwood Beige**: `#E8D9BD`
- **Deep Brown**: `#241510`
- **Typography**: Cormorant Garamond (Headings), Poppins (Body Text), Noto Serif Malayalam (Optional Malayalam content)
- **Aesthetic Elements**: Kerala mural motifs, brass oil lamp warm lighting, golden ornamental dividers, subtle paper textures, lotus watermarks, and smooth cinematic transitions.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation

```bash
# Clone or navigate to the project directory
cd sankara-kayika-kalamandalam

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Configuration & Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Configure your academy details:

```env
# Academy Contact Info
NEXT_PUBLIC_ACADEMY_NAME="Sankara Kayika Kalamandalam"
NEXT_PUBLIC_ACADEMY_PHONE="+91 98765 43210"
NEXT_PUBLIC_ACADEMY_WHATSAPP="919876543210"  # Format: CountryCode + Number (no +)
NEXT_PUBLIC_ACADEMY_EMAIL="contact@sankarakalamandalam.org"
NEXT_PUBLIC_ACADEMY_ADDRESS="Kerala, India"
NEXT_PUBLIC_ACADEMY_MAPS_URL="https://www.google.com/maps/embed?..."

# Supabase (Online Admissions Database)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Supabase Table Setup (Optional)

Run the following SQL in your Supabase SQL editor:

```sql
create table admission_enquiries (
  id bigint generated always as identity primary key,
  student_name text not null,
  age integer not null,
  gender text,
  parent_guardian_name text,
  phone text not null,
  email text not null,
  programme_category text not null,
  preferred_programme text not null,
  previous_experience text,
  preferred_batch text,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

---

## 📁 Project Structure

```
sankara-kayika-kalamandalam/
├── public/                 # Static assets & textures
├── src/
│   ├── app/
│   │   ├── page.tsx               # Cinematic Homepage
│   │   ├── about/page.tsx         # Our Story & Philosophy
│   │   ├── dance/
│   │   │   ├── page.tsx           # Dance Overview
│   │   │   ├── indian-classical/  # 8 Classical Forms
│   │   │   ├── group-dances/      # 4 Kerala Group Dances
│   │   │   ├── other-dances/      # 4 Modern Styles
│   │   │   ├── zumba/             # Dedicated Zumba Experience
│   │   │   └── [slug]/            # Individual Dance Detail Pages
│   │   ├── music/
│   │   │   ├── page.tsx           # Music Overview
│   │   │   ├── string-instruments/# 7 String Instruments
│   │   │   └── [slug]/            # Individual Instrument Pages
│   │   ├── mentors/page.tsx       # Faculty Profiles
│   │   ├── gallery/page.tsx       # Filterable Multimedia Gallery
│   │   ├── admissions/page.tsx    # Online Registration & Admissions
│   │   ├── contact/page.tsx       # Contact, Map & Direct Messaging
│   │   ├── privacy/page.tsx       # Privacy Policy
│   │   └── api/admissions/route.ts# Admissions API Endpoint
│   ├── components/
│   │   ├── layout/                # Navbar, Footer
│   │   ├── home/                  # Hero, About, Programmes, Testimonials
│   │   ├── dance/                 # DanceCard, CategoryPage, ProgrammeDetail
│   │   ├── music/                 # MusicCard, InstrumentDetail
│   │   ├── admissions/            # Dynamic AdmissionForm, SuccessModal
│   │   ├── gallery/               # GalleryGrid & Lightbox
│   │   ├── mentors/               # MentorCard
│   │   └── ui/                    # Logo, PageHero, WhatsApp, Counter
│   └── lib/
│       ├── config.ts              # Central Academy Configuration
│       ├── supabase.ts            # Supabase Client
│       └── utils.ts               # Shared Utilities
└── tailwind.config.js             # Brand Color Palette & Fonts
```

---

## 🚢 Production Build & Deployment

```bash
# Build the production bundle
npm run build

# Start production server
npm start
```

Deployable to [Vercel](https://vercel.com/) with zero configuration. Simply connect the repository and add the environment variables in the Vercel dashboard.

---

© Sankara Kayika Kalamandalam. Preserving Heritage. Inspiring Generations.
