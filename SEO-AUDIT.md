# SEO & UX Audit — nufanas.com (Phase 1)

Audit date: 2026-10-06
Stack: Next.js 16 (App Router, `output: standalone`), TailwindCSS 4, framer-motion, Docker on VPS behind nginx (`getlumora-nginx` container).

---

## 1. Current Architecture

```
/
├── /layanan                    (index: 46 layanan, semua ber-slug *-bandung)
│   └── /layanan/[slug]         (46 halaman — template tunggal, near-duplicate)
├── /jasa-pembuatan-website     (pillar — baru, nasional)
├── /jasa-pembuatan-aplikasi    (pillar — baru, nasional)
├── /portfolio + /portfolio/[id] (12 item)
├── /harga
├── /blog + /blog/[slug]        (49 artikel — konten template, 4 slug mengandung "bandung")
├── /tentang, /kontak
├── /feed.xml
```

## 2. Current SEO Problems

1. **Positioning lokal-berlebih**: brand, title, H1, meta, schema, footer, testimonial semuanya "Bandung". `SITE_CONFIG.keywords` 100% berisi `*-bandung`.
2. **Keyword cannibalization + thin content masif**: 46 halaman `/layanan/*-bandung` dirender dari SATU template dengan konten hampir identik (hanya title/price/icon beda). Google akan melihat ini sebagai doorway/near-duplicate pages.
3. **Structured data salah target**: `ProfessionalService.areaServed = City: Bandung`; `Service.areaServed = City: Bandung` di semua halaman layanan.
4. **Hero berat**: `<video autoplay>` 4MB sebagai background + elemen video kedua di kartu preview → LCP tinggi, bandwidth boros, CLS risk.
5. **Broken UI classes**: `hover:bg-slate-100:bg-slate-800` (sintaks rusak) di navbar; `.dark` theme mendefinisikan warna yang sama dengan light → dark mode toggle tidak berfungsi.
6. **Dead links**: footer menautkan `/privacy-policy` dan `/terms` → 404.
7. **Copy inkonsisten**: FAQ menanyakan "di luar Bandung?" — menegaskan positioning lokal. `ENTITIES.areas` = daftar kecamatan Bandung.
8. **manifest.json** masih "Jasa Pembuatan Website Profesional Bandung".
9. **feed.xml** hardcode 3 artikel lama (slug & judul mengandung Bandung).
10. **Gambar**: PNG 100KB–1.8MB (promo1.png 1.8MB), navbar/footer pakai `<img>` mentah.
11. Blog: 4 slug mengandung `-bandung`; judul-judul menargetkan Bandung.
12. Sitemap menyertakan `apple-icon.png`/`icon.png` (minor).

## 3. URL Migration Plan (301/308 via `redirects()` di next.config)

### Halaman layanan kota → nasional

| Old (Bandung slug) | New destination |
|---|---|
| /layanan/jasa-website-bandung | /jasa-pembuatan-website |
| /layanan/jasa-pembuatan-website-bandung | /jasa-pembuatan-website |
| /layanan/web-developer-bandung | /jasa-pembuatan-website |
| /layanan/web-design-bandung | /layanan/website-custom |
| /layanan/website-company-profile-bandung | /layanan/website-company-profile |
| /layanan/website-umkm-bandung | /layanan/website-umkm |
| /layanan/website-toko-online-bandung | /layanan/website-ecommerce |
| /layanan/website-furniture-bandung | /layanan/website-ecommerce |
| /layanan/landing-page-bandung | /layanan/landing-page |
| /layanan/website-hotel-bandung | /layanan/website-booking |
| /layanan/website-rental-mobil-bandung | /layanan/website-booking |
| /layanan/website-travel-bandung | /layanan/website-booking |
| /layanan/website-klinik-bandung | /layanan/website-booking |
| /layanan/website-kontraktor-bandung | /layanan/website-company-profile |
| /layanan/website-industri-bandung | /layanan/website-company-profile |
| /layanan/website-sekolah-bandung | /layanan/website-custom |
| /layanan/website-cafe-bandung | /layanan/website-custom |
| /layanan/website-properti-bandung | /layanan/website-custom |
| /layanan/jasa-pembuatan-aplikasi-bandung | /jasa-pembuatan-aplikasi |
| /layanan/jasa-aplikasi-android-bandung | /layanan/aplikasi-android |
| /layanan/jasa-aplikasi-ios-bandung | /layanan/aplikasi-ios |
| /layanan/jasa-aplikasi-mobile-bandung | /layanan/aplikasi-mobile |
| /layanan/jasa-web-application-bandung | /layanan/web-application |
| /layanan/jasa-marketplace-bandung | /layanan/web-application |
| /layanan/jasa-dashboard-bandung | /layanan/web-application |
| /layanan/jasa-custom-software-bandung | /layanan/custom-software |
| /layanan/jasa-saas-bandung | /layanan/custom-software |
| /layanan/jasa-sistem-informasi-bandung | /layanan/sistem-informasi |
| /layanan/jasa-erp-bandung | /layanan/sistem-informasi |
| /layanan/jasa-crm-bandung | /layanan/sistem-informasi |
| /layanan/jasa-hris-bandung | /layanan/sistem-informasi |
| /layanan/jasa-aplikasi-rumah-sakit-bandung | /layanan/sistem-informasi |
| /layanan/jasa-pos-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-aplikasi-kasir-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-aplikasi-inventory-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-aplikasi-klinik-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-aplikasi-sekolah-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-aplikasi-hotel-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-aplikasi-cafe-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-aplikasi-restoran-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-aplikasi-rental-mobil-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-aplikasi-travel-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-aplikasi-properti-bandung | /layanan/aplikasi-bisnis |
| /layanan/jasa-seo-bandung | /layanan/jasa-seo |

### Blog slug rename (4 URL)

| Old | New |
|---|---|
| /blog/jasa-pembuatan-website-bandung-panduan-lengkap | /blog/jasa-pembuatan-website-panduan-lengkap |
| /blog/jasa-pembuatan-aplikasi-android-bandung | /blog/jasa-pembuatan-aplikasi-android |
| /blog/jasa-seo-bandung-apa-yang-didapat | /blog/jasa-seo-panduan-lengkap |
| /blog/software-house-bandung-cara-memilih | /blog/cara-memilih-software-house |

Semua via `permanent: true` (308 ≈ 301 untuk Google). Tidak ada halaman yang dihapus tanpa redirect.

## 4. Keyword Architecture

| Intent | Target keyword | URL |
|---|---|---|
| Brand/home | jasa pembuatan website, jasa website, jasa pembuatan aplikasi | / |
| Pillar | jasa pembuatan website (profesional/custom) | /jasa-pembuatan-website |
| Pillar | jasa pembuatan aplikasi, jasa aplikasi, custom software | /jasa-pembuatan-aplikasi |
| Sub | website company profile | /layanan/website-company-profile |
| Sub | website umkm | /layanan/website-umkm |
| Sub | website e-commerce / toko online | /layanan/website-ecommerce |
| Sub | website custom | /layanan/website-custom |
| Sub | jasa web application | /layanan/web-application |
| Sub | website booking/reservasi | /layanan/website-booking |
| Sub | landing page | /layanan/landing-page |
| Sub | jasa aplikasi android | /layanan/aplikasi-android |
| Sub | jasa aplikasi ios | /layanan/aplikasi-ios |
| Sub | jasa aplikasi mobile | /layanan/aplikasi-mobile |
| Sub | aplikasi bisnis | /layanan/aplikasi-bisnis |
| Sub | custom software development | /layanan/custom-software |
| Sub | sistem informasi / ERP / CRM | /layanan/sistem-informasi |
| Sub | aplikasi AI | /layanan/aplikasi-ai |
| Sub | jasa seo | /layanan/jasa-seo |
| Support | harga, portfolio, blog, tentang, faq, kontak | /harga /portfolio /blog /tentang /faq /kontak |

## 5. New Sitemap Structure

Sesuai IA baru — tanpa halaman kota. `/layanan/[slug]` menghasilkan 15 halaman nasional; pillar & halaman statis tetap. `next-sitemap` auto-generate; tambah exclude `*.png`.

## 6. Internal Linking Strategy

- Homepage → 2 pillar + top sub-services (cards & sections).
- Navbar mega-menu → 2 grup: Pembuatan Website (7 link), Pembuatan Aplikasi (7 link), + SEO.
- Pillar → semua sub-service relevan; sub-service → pillar (breadcrumb + inline link).
- `/layanan` index → 2 grup kategori nasional.
- Footer → pillar, sub-services utama, FAQ, legal.
- Blog → CTA + link ke pillar relevan (relatedArticles di pillar tetap).
- Breadcrumb schema di semua halaman dalam.

## 7. UI Redesign Strategy

- **Arah**: premium SaaS — light, banyak whitespace, tipografi kuat (Plus Jakarta Sans), aksen indigo→violet, glassmorphism halus (navbar, chips), card rounded-2xl dengan border tipis + shadow lembut, grid-pattern/blur glow background.
- **Hero**: tanpa video 4MB → mockup browser CSS + screenshot project asli (`next/image`, priority), badge "Software House untuk Bisnis Indonesia", H1 nasional, dual CTA (Konsultasi + Portfolio), stat bar.
- **Navbar**: glass fixed, mega dropdown 2 kolom, CTA WhatsApp; hapus theme toggle yang rusak (site light-only).
- Sections: spacing konsisten `py-20/24`, eyebrow label, icon tile gradient.
- Hapus `PromoPopup` timing agresif? → tetap ada tapi tetap ringan; gambar promo di-`next/image`.
- Fix class rusak (`hover:bg-slate-100:bg-slate-800`), hapus dark-mode mati.

## 8. Image Strategy

- Gunakan screenshot project asli (bukan stock Unsplash) di hero/portfolio.
- `next/image` untuk semua (AVIF/WebP auto), `sizes`, `width/height` eksplisit, alt deskriptif ("Screenshot dashboard aplikasi X"), lazy default, `priority` hanya LCP.
- 4 item portfolio demo dengan gambar Unsplash dihapus — tersisa 8 project real dengan screenshot lokal.
- `images.remotePatterns` wildcard dihapus (tidak ada remote image tersisa).
- Filename deskriptif dipertahankan; og-image tetap.

## 9. Video Strategy

- Hapus video autoplay 4MB dari hero (LCP).
- Video showcase opsional lazy di section portfolio (poster + play button, `preload="none"`).

## 10. Structured Data Strategy

- `Organization` (@id `/#organization`): areaServed `Country: Indonesia`, simpan alamat kantor nyata (E-E-A-T).
- `ProfessionalService` → pertahankan entity lokal kantor tetapi `areaServed: Country Indonesia`.
- `Service` per halaman: `areaServed: Country Indonesia`, `serviceType` sesuai.
- `BreadcrumbList` semua halaman dalam; `FAQPage` di halaman yang punya FAQ; `Article` di blog; `WebSite` global.
- GEO: FAQ + speakable selectors, jawaban langsung (answer-first paragraphs), entity konsisten.

---

# PHASE 2 — IMPLEMENTED

## P2.1 — National service architecture (canonical `/jasa-*`)

Primary pillars (diperkuat — pricing, proses, teknologi, SEO/security/performance, maintenance, portfolio, FAQ, CTA):
- `/jasa-pembuatan-website` — H1 "Jasa Pembuatan Website Profesional & Custom"
- `/jasa-pembuatan-aplikasi` — H1 "Jasa Pembuatan Aplikasi Android, iOS & Custom"

10 supporting pages baru, masing-masing konten unik via `src/components/services/service-detail.tsx`:
`/jasa-website-company-profile`, `/jasa-website-ecommerce`, `/jasa-website-custom`,
`/jasa-web-application`, `/jasa-aplikasi-android`, `/jasa-aplikasi-ios`,
`/jasa-aplikasi-mobile`, `/jasa-pembuatan-aplikasi-bisnis`, `/jasa-custom-software`,
`/jasa-pembuatan-sistem-informasi`.

Tetap di `/layanan/*` (topik berbeda, tidak overlap): `/layanan/jasa-seo`,
`/layanan/website-umkm`, `/layanan/website-booking`, `/layanan/landing-page`,
`/layanan/aplikasi-ai`.

## P2.2 — URL migration (308 permanent, verified)

`/layanan/website-company-profile` → `/jasa-website-company-profile`,
`/layanan/website-ecommerce` → `/jasa-website-ecommerce`,
`/layanan/website-custom` → `/jasa-website-custom`,
`/layanan/web-application` → `/jasa-web-application`,
`/layanan/aplikasi-android` → `/jasa-aplikasi-android`,
`/layanan/aplikasi-ios` → `/jasa-aplikasi-ios`,
`/layanan/aplikasi-mobile` → `/jasa-aplikasi-mobile`,
`/layanan/aplikasi-bisnis` → `/jasa-pembuatan-aplikasi-bisnis`,
`/layanan/custom-software` → `/jasa-custom-software`,
`/layanan/sistem-informasi` → `/jasa-pembuatan-sistem-informasi`.

## P2.3 — Internal linking

- `constants.ts`: setiap service punya field `path` kanonik — satu sumber kebenaran untuk URL.
- Homepage: `PillarsSection` (2 pillar + sub-service links) + `PortfolioPreviewSection`.
- Navbar mega-menu, footer, `/layanan` index, pillar pages, industries chips → semua pakai `/jasa-*`.
- Related-services di `[slug]` dan service-detail pakai `path`.

## P2.4 — Structured data

`generatePillarServiceSchema` (path-based) dipakai semua halaman `/jasa-*`; schema `Service` lama yang masih mengacu `/layanan/custom-software` dikoreksi ke `/jasa-custom-software`.

## P2.5 — Verification results (local standalone)

- `tsc --noEmit`: clean. `eslint`: clean. `next build`: 94 pages OK, postbuild sitemap OK.
- Sitemap: 86 URL, 0 referensi kota, semua `/jasa-*` masuk.
- Routes: semua `/jasa-*` 200; 10 legacy `/layanan/<slug>` → 308 ke `/jasa-*`.
- `/robots.txt`, `/sitemap.xml` 200 di standalone (Docker menyalin `public/` postbuild ke image runner).

---

# PHASE 3 — IMPLEMENTED

## P3.1 — Portfolio architecture

- `/portfolio` grid: 7 filter kategori (`Website, Web Application, Mobile Application,
  E-Commerce, Custom Software, AI, Business System`) dengan jumlah project per kategori
  dan empty state honest (tidak ada project palsu) + CTA WhatsApp.
- Item bisa multi-kategori (`categories[]`), misal NuViral = Web Application + AI.

## P3.2 — Case study template `/portfolio/[slug]`

Section: breadcrumb → header (kategori, hasil, client type, "Built by Nufanas") →
browser mockup (screenshot asli) → CTA → Kebutuhan Bisnis → Tujuan → Tantangan Teknis →
Solusi + Fitur → Preview Responsif (browser + phone mockup) → Video (conditional) →
How We Built This (arsitektur + stack) → Proses Development → Hasil (hanya jika ada
data nyata) → Related Services → Project Terkait → CTA.

Konten hanya dari data nyata: fitur, stack, dan hasil yang sudah ada — tanpa
statistik/testimonial/timeline yang dikarang. Field opsional (`video`, `result`)
hanya dirender bila datanya ada.

## P3.3 — Slug & image renames

- Slug deskriptif sesuai project nyata: `nuviral-ai-studio`, `kaosdn99-ecommerce`,
  `bimbel-kedinasan-online`, `lcc-surabaya`, `teman-sejiwa`, `queenmassage`,
  `portal-agatha`, `pena-sakti`. 8 slug lama → 308 ke slug baru.
- Image rename deskriptif: `nufanas-project-*.png`, `nufanas-logo.png`,
  `nufanas-promo-banner.png`. Alt text deskriptif per project (`imageAlt`).
- Redirect chain diperbaiki: legacy `*-bandung` slugs kini langsung ke `/jasa-*`
  (bukan lewat `/layanan/*` yang ikut redirect).

## P3.4 — Visual & video

- `BrowserMockup` + `PhoneMockup` membungkus screenshot asli (bukan stock).
- `VideoShowcase`: controls, `preload="none"`, poster, captions — reusable;
  `VideoObject` schema hanya dirender bila `item.video` ada.
- Schema `WebPage` + `CreativeWork` + `ImageObject` per case study.

## P3.5 — Verification

- `tsc` clean, `eslint` clean, build OK — 8 case study SSG.
- Local: semua `/portfolio/<new-slug>` 200; 8 old slugs → 308; legacy bandung
  → direct `/jasa-*` (no chain). Sitemap: 86 URL, hanya slug baru.

---

# PHASE 4 — TOPICAL AUTHORITY & PEOPLE-FIRST CONTENT

Status: **selesai diimplementasikan** (2026-10-06).

## P4.1 — Temuan kunci audit blog

Semua 50 artikel lama hanya memiliki metadata — body dirender oleh `generateContent()`
di `src/app/blog/[slug]/page.tsx`, template identik untuk setiap artikel dengan
klaim tanpa dasar: "revenue 2-3x lipat", "300+ project", harga generik. Ini klasifikasi
**AI-like repetitive content** — seluruh fungsi generator dihapus dan digantikan
konten unik per artikel.

## P4.2 — Klasifikasi artikel (50 → 42)

**B. Rewrite (34)** — slug dipertahankan, konten ditulis ulang penuh dari
pengalaman project nyata:

| Cluster | Artikel (slug) |
|---|---|
| Website (5) | jasa-pembuatan-website-panduan-lengkap, website-company-profile-pentingnya-untuk-bisnis, cara-membuat-website-toko-online, manfaat-website-untuk-umkm, perbedaan-website-dan-landing-page |
| Aplikasi (11) | biaya-pembuatan-aplikasi-mobile-2025, jasa-pembuatan-aplikasi-android, cara-membuat-aplikasi-kasir-untuk-bisnis, aplikasi-inventory-management-panduan, erp-system-panduan-lengkap-untuk-bisnis, apa-itu-crm-dan-manfaatnya, hris-system-manajemen-sdm-modern, saas-development-panduan-membangun-produk, aplikasi-sekolah-e-learning-fitur-penting, cara-membuat-marketplace-online |
| Teknologi (10) | next-js-vs-wordpress-mana-yang-lebih-baik, flutter-vs-react-native-mana-yang-terbaik, kotlin-vs-java-untuk-android-development, docker-kubernetes-untuk-deployment-aplikasi, optimasi-kecepatan-website-core-web-vitals, cara-optimasi-gambar-website-untuk-seo, pentingnya-ssl-untuk-website-bisnis, cara-memilih-hosting-terbaik-indonesia, cara-setup-google-analytics-4, cara-membuat-sitemap-xml-website |
| Bisnis (4) | mengapa-bisnis-perlu-web-application, digital-agency-vs-freelancer-mana-yang-dipilih, cara-memilih-software-house, ui-ux-design-meningkatkan-conversion-rate, panduan-memilih-domain-website-bisnis |
| Pemasaran (8) | apa-itu-seo-dan-manfaatnya-untuk-bisnis, jasa-seo-panduan-lengkap, local-seo-checklist-bisnis-lokal, cara-meningkatkan-traffic-website-organik, google-ads-vs-meta-ads-mana-yang-lebih-efektif, schema-markup-meningkatkan-ctr-google, geo-optimasi-ai-search-panduan-2025, ai-automation-untuk-bisnis-2025 |

**A. Artikel baru (4)** — mengisi gap cluster + memperbaiki redirect target 404:
`biaya-pembuatan-website`, `kapan-bisnis-membutuhkan-aplikasi`,
`custom-software-vs-saas`, `panduan-website-per-industri`,
`cara-memilih-software-house` (slug baru; redirect legacy
`software-house-bandung-cara-memilih` kini valid).

**C/D. Merge → 308 redirect (13)** — di `BLOG_REDIRECTS` (src/lib/blog-data.ts):

| Slug lama (dihapus) | Tujuan | Alasan |
|---|---|---|
| website-klinik-fitur-yang-wajib-ada | panduan-website-per-industri | topik tipis, digabung per-industri |
| website-hotel-meningkatkan-direct-booking | panduan-website-per-industri | idem |
| website-rental-mobil-fitur-dan-tips | panduan-website-per-industri | idem |
| website-cafe-restoran-meningkatkan-pelanggan | panduan-website-per-industri | idem |
| website-properti-fitur-dan-strategi-seo | panduan-website-per-industri | idem |
| cara-membuat-website-sekolah-yang-informatif | panduan-website-per-industri | idem |
| cara-meningkatkan-seo-website-bisnis-lokal | local-seo-checklist-bisnis-lokal | duplikat local SEO |
| cara-optimasi-google-my-business | local-seo-checklist-bisnis-lokal | duplikat local SEO |
| content-marketing-strategi-untuk-website-bisnis | cara-meningkatkan-traffic-website-organik | overlap topik |
| strategi-digital-marketing-untuk-umkm | cara-meningkatkan-traffic-website-organik | overlap topik |
| chatgpt-untuk-bisnis-use-case-dan-implementasi | ai-automation-untuk-bisnis-2025 | duplikat AI-bisnis |
| responsive-design-pentingnya-untuk-mobile | ui-ux-design-meningkatkan-conversion-rate | dicakup artikel UX |
| tren-website-2025-yang-wajib-diketahui | /blog | thin listicle, outdated |

## P4.3 — Content clusters (4 + SEO)

```
Cluster Website   (7 artikel)  → pillar /jasa-pembuatan-website
Cluster Aplikasi  (12)         → pillar /jasa-pembuatan-aplikasi
Cluster Teknologi (10)         → pillar /tentang (keahlian tim)
Cluster Bisnis    (5)          → pillar /harga
Cluster Pemasaran (8)          → pillar /layanan/jasa-seo
```

Setiap artikel punya satu `intent` primer (informational / commercial).

## P4.4 — People-first signals

- Intro answer-first + `keyTakeaways` per artikel (GEO-friendly).
- Harga nyata dari `/harga` (bukan rentang generik).
- Referensi project nyata: NuViral (SaaS), KaosDN99 (e-commerce),
  Bimbel Kedinasan (e-learning), Portal Agatha (sistem informasi),
  Teman Sejiwa (web app booking).
- Framework keputusan, tabel perbandingan, pros/kontra — bukan listicle generik.
- Author page `/penulis/tim-nufanas`: role, expertise stack nyata, project
  nyata dari portfolio — tanpa kredensial karangan. `ProfilePage` schema.

## P4.5 — Internal link graph

```
Blog artikel ──(relatedServices)──▶ /jasa-* pages
     │                                    │
     └──(relatedPortfolio)──▶ /portfolio/* ──(relatedServices)──▶ /jasa-*
     │                                    │
/jasa-pembuatan-website ◀──(relatedArticles)── jasa-* & /layanan/[slug]
     └──▶ /blog index (cluster sections link ke pillar masing-masing)
```

- Artikel → layanan: blok "Layanan Terkait" + link kontekstual di body.
- Artikel → portfolio: blok "Project Terkait" + anchor natural di body.
- Pillar `/jasa-*` → artikel: `relatedArticles` (diperbarui ke slug baru).
- Portfolio → layanan: blok Related Services (Phase 3).
- `/blog` index: artikel dikelompokkan per cluster dengan link ke pillar.

## P4.6 — Breadcrumbs

- Artikel: Beranda > Blog > [Cluster] > Judul — visible + BreadcrumbList schema.
- Penulis: Beranda > Blog > Tim Nufanas.
- Layanan: Beranda > Layanan > [Service] (sudah ada sejak Phase 2).

## P4.7 — Indexation & crawl report

| Item | Status |
|---|---|
| Blog article pages | Indexable — 42 artikel unik, server-rendered |
| `/penulis/[slug]` | Indexable — 1 author page |
| Tag/filter pages | Tidak dibuat — tag hanya label visual (no URL) |
| Category pill lama | Dihapus — diganti cluster sections, tanpa URL filter |
| feed.xml | Hanya 42 artikel kurasi (top 20) |
| sitemap-articles.xml | Hanya artikel valid; `lastmod` = `updated` |
| Slug dihapus | 13 × 308 ke target kanonik — bukan 404 |
| Canonical | Self-referencing di semua artikel |
| Schema | Article + BreadcrumbList + FAQPage (conditional) + ProfilePage |
| Boilerplate palsu | `generateContent` dihapus; klaim "300+ project"/"2-3x" hilang dari codebase |

## P4.8 — Verification

- `tsc` clean, `eslint` clean, `next build` OK (42 blog SSG + 1 penulis).
- Local: semua route artikel/penulis 200; 13 redirect merge + legacy → 308.
- Konten artikel berisi harga nyata, breadcrumb visible, author link, schema.
- Slug terhapus tidak ada di sitemap; tidak ada referensi slug lama di src/.
