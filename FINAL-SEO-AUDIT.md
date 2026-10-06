# FINAL SEO AUDIT — nufanas.com

Final production audit (Phase 5). Semua klaim di bawah berbasis verifikasi aktual terhadap build produksi dan live site — bukan asumsi. Tanggal audit: lihat commit Phase 5.

> Disclaimer: audit ini memastikan situs **secara teknis kuat, relevan, dan authoritative** untuk bersaing di query target. Tidak ada jaminan ranking — keputusan ranking sepenuhnya di Google.

---

## 1. Before/After Architecture

| | Before | After |
|---|---|---|
| Positioning | Bandung-focused agency | **National technology partner** — "bisnis di seluruh Indonesia" |
| Service URLs | `/layanan/*-bandung` (45 slug geo) | 12 `/jasa-*` nasional + 5 `/layanan/*` non-geo |
| Homepage | Video hero berat, generik | H1 nasional, 2 pillar section, portfolio preview, struktur 13-section |
| Blog | 50 artikel template identik (`generateContent()`), klaim palsu | **42 artikel unik** terkurasi dalam 5 cluster topik |
| Portfolio | Grid + halaman detail dangkal | 8 case study lengkap (masalah→solusi→stack→hasil) |
| Author | Tidak ada | `/penulis/tim-nufanas` + author box di semua artikel |
| OG images | File statis 404 | Dynamic `next/og` per route type |

## 2. URLs Changed

- 45 slug `*-bandung`/`cimahi`/dst → padanan nasional (308)
- 10 `/layanan/<slug>` → `/jasa-*` (308)
- 8 slug portfolio lama → slug deskriptif (308)
- 13 artikel blog → target kanonik (308)

## 3. Redirects

Semua redirect = **308 permanent** (Next.js `permanent: true`), diverifikasi live. Kategori:

- Geo-legacy → nasional: `/layanan/jasa-pembuatan-website-bandung` → `/jasa-pembuatan-website` (dan 44 sejenis)
- Service migration: `/layanan/website-custom` → `/jasa-website-custom` (10 total)
- Blog merge: 6 artikel industri → `/blog/panduan-website-per-industri`; 5 duplikat SEO/marketing → artikel kanonik; `tren-website-*` → `/blog`
- Portfolio: `nuviral` → `nuviral-ai-studio` (8 total)
- Redirect chains diperbaiki — legacy geo langsung ke target final, tanpa hop ganda
- `www.nufanas.com` → `https://nufanas.com` (host redirect, Phase 5)

## 4. Pages Removed

Tidak ada halaman dihapus tanpa redirect. Artikel blog yang di-merge tetap resolve via 308 ke target kanonik.

## 5. Pages Consolidated

- 6 artikel industri tipis → `panduan-website-per-industri`
- 2 artikel local SEO → `local-seo-checklist-bisnis-lokal`
- 3 artikel marketing duplikat → `cara-meningkatkan-traffic-website-organik`
- 1 duplikat AI → `ai-automation-untuk-bisnis-2025`
- `responsive-design-*` → `ui-ux-design-meningkatkan-conversion-rate`

## 6. New Pages

- 12 `/jasa-*` service pages (2 pillar + 10 sub-service)
- `/penulis/tim-nufanas` (author profile + ProfilePage schema)
- 5 artikel baru: `biaya-pembuatan-website`, `kapan-bisnis-membutuhkan-aplikasi`, `custom-software-vs-saas`, `panduan-website-per-industri`, `cara-memilih-software-house`
- `/sitemap-articles.xml` (route khusus artikel)
- Dynamic OG/Twitter image routes: artikel, case study, 2 pillar

## 7. Keyword Map

Lihat `SEO-KEYWORD-MAP.md`. Ringkasan: `jasa pembuatan website`→pillar website, `jasa pembuatan aplikasi`→pillar aplikasi, `custom software`→`/jasa-custom-software`. Satu intent primer per halaman; blog menarget informational, service menarget commercial.

## 8. Internal Linking

- Single source of truth: field `path` per service di `constants.ts`
- Navbar mega-menu 2 pilar, footer, homepage pillars → `/jasa-*`
- Pillar → sub-services + portfolio + artikel terkait
- Artikel → layanan (blok + kontekstual) → portfolio → kembali ke layanan
- Case study → layanan relevan per jenis project
- Audit crawl internal: **0 broken link, 0 orphan** — semua 42 artikel terlink dari `/blog` hub + cross-links artikel

## 9. Structured Data

Diverifikasi valid JSON-LD di HTML render:

| Schema | Lokasi | Catatan |
|---|---|---|
| Organization | Semua halaman | `sameAs` hanya profil yang terverifikasi 200 (IG, LinkedIn, FB, X, GitHub org) |
| ProfessionalService | Semua halaman | `areaServed: Indonesia`, NAP nyata |
| WebSite | Semua halaman | — |
| WebPage + CreativeWork | Case study | Data project nyata |
| Service | Halaman layanan | Path-based, `areaServed: Indonesia` |
| BreadcrumbList | Artikel, case study | Konsisten dengan breadcrumb visual |
| Article | 42 artikel | Author → `/penulis/tim-nufanas` |
| FAQPage | Homepage, artikel ber-FAQ | Hanya emit jika data FAQ ada |
| VideoObject | Case study ber-video | Kondisional — emit hanya jika `video` ada |
| ImageObject | Case study | Screenshot project nyata |

**Tidak ada** review/rating/statistik palsu di schema. Social URL mati (`github.com/nufanas`, `youtube.com/@nufanas` → 404) diperbaiki/dihapus.

## 10. Image SEO

- Semua screenshot project di-rename deskriptif: `nufanas-project-<nama>.png`
- Alt text per-project menjelaskan konten aktual
- `next/image` di seluruh situs → AVIF/WebP otomatis, responsive `srcset`/`sizes`
- Format dikonfigurasi di `next.config.ts`: `["image/avif", "image/webp"]`
- `sizes` prop tepat per layout (hero 560px, grid 33vw/50vw/100vw)
- `ImageObject` schema untuk screenshot case study

## 11. Video SEO

- Komponen `VideoShowcase` reusable: `controls`, `preload="none"`, poster, captions support — tidak autoplay bersuara
- `VideoObject` schema emit kondisional (hanya saat metadata video nyata tersedia)
- Saat ini belum ada file video di `public/` — komponen & schema siap; tidak ada VideoObject palsu yang di-emit

## 12. Performance Optimization

| Area | Implementasi |
|---|---|
| JS | `gsap` (dead dep) dihapus; framer-motion → `LazyMotion domMax` + `m` di 17 komponen (bundle lebih kecil) |
| CSS | Tailwind 4 + `optimizeCss` experimental |
| Fonts | `next/font/google` → self-hosted WOFF2, `display: swap`, preload otomatis |
| Images | Next Image + AVIF/WebP + responsive sizes |
| Third-party | GA4 via `next/script` `afterInteractive` |
| CLS | Promo popup delay 5s, fixed overlay (tanpa layout shift); dimensi gambar eksplisit |
| LCP | Hero image `priority` (preload); tidak ada autoplay video hero |
| TTFB | 86+ halaman fully static (SSG), standalone Docker di VPS |

**Catatan jujur:** field CWV (LCP/INP/CLS real-user) belum diukur — perlu PageSpeed Insights/CrUX pasca-deploy. Lab-proxy diperiksa: tidak ada render-blocking ketiga, tidak ada animasi JS berat di hero.

## 13. Indexation Map

Semua halaman: `index` default (tidak ada `noindex` di mana pun), canonical self-referencing apex, konten SSR penuh, 200.

| URL | Index? | Canonical | Sitemap? | Internal links? | Status |
|---|---|---|---|---|---|
| `/` | index | self | sitemap-0 | nav, semua halaman | 200 |
| `/jasa-pembuatan-website` | index | self | sitemap-0 | nav, footer, pillar, 7 artikel | 200 |
| `/jasa-pembuatan-aplikasi` | index | self | sitemap-0 | nav, footer, pillar, 12 artikel | 200 |
| 10× `/jasa-*` sub-service | index | self | sitemap-0 | pillar, layanan index | 200 |
| 5× `/layanan/*` non-geo | index | self | sitemap-0 | layanan index, footer | 200 |
| `/portfolio` | index | self | sitemap-0 | nav, footer, homepage | 200 |
| 8× `/portfolio/<slug>` | index | self | sitemap-0 | portfolio grid, related | 200 |
| `/blog` | index | self | sitemap-0 | nav, footer | 200 |
| 42× `/blog/<slug>` | index | self | **sitemap-articles** | blog hub, cross-links | 200 |
| `/penulis/tim-nufanas` | index | self | sitemap-0 | semua artikel | 200 |
| `/tentang`, `/kontak`, `/harga`, `/faq`, `/layanan` | index | self | sitemap-0 | nav/footer | 200 |
| `/privacy-policy`, `/terms` | index | self | sitemap-0 | footer | 200 |
| `/feed.xml` | n/a (XML) | — | tidak (exclude) | — | 200 |
| `/sitemap-articles.xml` | n/a | — | di robots.txt | — | 200 |
| OG/Twitter image routes | n/a (image) | — | tidak (exclude) | metadata | 200 |
| Legacy geo/service/blog/portfolio URLs | — | — | tidak | — | 308 → kanonik |
| Route tidak dikenal | — | — | tidak | — | 404 + not-found page |
| `www.nufanas.com/*` | — | — | — | — | 301 → apex (deploy pending) |

**Sitemap hygiene:** `sitemap-0.xml` = 36 URL konten; artikel hanya di `sitemap-articles.xml` (duplikasi antar-sitemap dihilangkan); OG-image/icon/feed routes di-exclude.

## 14. Technical SEO (Verified Live)

| Check | Result |
|---|---|
| HTTP → HTTPS | ✅ 301 |
| `www` → apex | ✅ fix ditambahkan (verifikasi pasca-deploy) |
| Trailing slash | ✅ 308 → slashless |
| Uppercase URL | ✅ 404 |
| `?param` | ✅ 200, canonical → clean URL |
| robots.txt | ✅ allow all kecuali `/admin`,`/api`; 2 sitemap |
| Canonical | ✅ self-referencing di semua halaman |
| 404 | ✅ custom not-found + status 404 |
| 410 | N/A — semua URL lama di-308, bukan dihapus |
| Broken links | ✅ 0 (crawl internal) |
| Orphan pages | ✅ 0 |
| SSR | ✅ konten utama di HTML mentah semua route type |

## 15. Content Quality

- `generateContent()` boilerplate **dihapus total** — 0 klaim palsu ("300+ project", "revenue 2-3x") di codebase
- 42 artikel: intro answer-first, key takeaways, section unik, FAQ nyata, tabel perbandingan, harga real dari `/harga`, referensi project nyata
- Case study: hanya data project aktual — `result`/`video`/`testimonial` kondisional, tidak ada statistik karangan
- Author page tanpa kredensial fiktif

## 16. Remaining Risks

1. **Field CWV belum terukur** — perlu PageSpeed Insights + CrUX monitoring pasca-deploy
2. **De-indexing URL lama** — 60+ URL redirect perlu waktu Google konsolidasi sinyal; pantau Search Console
3. **Screenshot mobile** di phone-mockup adalah crop desktop — screenshot mobile nyata akan lebih kuat
4. **Belum ada video project** — VideoShowcase siap, tinggal upload `.mp4` nyata
5. **`www` redirect di level Next.js** — jika nginx tidak meneruskan host, perlu server block di nginx (verifikasi pasca-deploy)
6. **Social profiles** — beberapa profil (FB/X) perlu diverifikasi pemiliknya secara berkala; mati = keluarkan dari `sameAs`

## 17. Recommended Next Steps

1. Submit ulang `sitemap.xml` + `sitemap-articles.xml` di Search Console
2. Jalankan PageSpeed Insights di 5 route type (home, pillar, case study, artikel, kontak) — ukur LCP/INP/CLS field
3. Monitor coverage report 4–8 minggu untuk konsolidasi redirect
4. Upload video walkthrough project nyata → aktifkan VideoObject
5. Tambah screenshot mobile nyata per case study
6. Review berkala `sameAs` social profiles (kuartalan)
