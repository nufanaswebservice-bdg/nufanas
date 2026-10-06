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
