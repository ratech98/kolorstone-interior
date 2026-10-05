# Kolorstones Home Interiors (Next.js)

Next.js 16 (App Router) + React 19 + TypeScript. Fully static (SSG), so pages load fast and are easy for Google and AI crawlers to read.

## Run it
```bash
npm install
cp .env.example .env.local      # then set NEXT_PUBLIC_SITE_URL to your real domain
npm run dev                     # http://localhost:3000
npm run build && npm start
```
Deploy on Vercel (recommended): import the repo, add the same env vars, done.

## What is in the SEO setup
- Pages: home, 14 location pages `/interior-designers/<town>` (Thanjavur, Trichy, Kumbakonam, Pattukkottai, Mannargudi, Pudukkottai, Tiruvarur, Mayiladuthurai, Karur, Perambalur, Ariyalur, Thiruvaiyaru, Orathanadu, Vallam) and 4 service pages `/services/<service>`.
- Per-page title, description, canonical, Open Graph; auto-generated OG image, icon, manifest.
- JSON-LD: LocalBusiness (with `areaServed`), WebSite, Service, FAQPage, BreadcrumbList.
- `/sitemap.xml`, `/robots.txt` (search and AI crawlers explicitly allowed), `/llms.txt` for AI assistants.
- `next/image` (AVIF/WebP, lazy loading, priority hero), `next/font`, no render-blocking CSS/JS.

## Edit before launch (important)
1. `src/lib/site.ts`: set `email`, `geo` (lat/lng from Google Maps), `googleMapsUrl`, `openingHours`.
2. `.env.local`: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GSC_VERIFICATION`.
3. `src/lib/data.ts`: replace Unsplash photos with your real project photos; add REAL client reviews to `REVIEWS` (section appears automatically).
4. `src/lib/locations.ts`: add real local details per town (completed projects, landmarks). Unique content per page is what keeps these pages from being treated as thin or duplicate.
5. Add your own photos to `public/` and update `next.config.mjs` `remotePatterns` once Unsplash is no longer used.

## Ranking checklist (things code cannot do)
- Claim and fully fill your **Google Business Profile** (category: Interior Designer; add Thanjavur + service areas; photos weekly; collect genuine reviews). This drives "near me" and map-pack results more than anything on the website.
- Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Keep your name, address and phone identical on the site, GBP, Instagram, JustDial, Sulekha, IndiaMART, etc.
- Earn real local links (vendor partners, builders, local news, directories).
