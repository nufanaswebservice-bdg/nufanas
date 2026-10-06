export interface CaseStudyVideo {
  src: string;
  poster: string;
  title: string;
  description: string;
  /** ISO 8601 duration, e.g. "PT1M30S" */
  duration?: string;
  /** ISO date, e.g. "2026-01-15" */
  uploadDate?: string;
  captions?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  /** Filter categories (multi). First = primary badge. */
  categories: string[];
  tagline: string;
  description: string;
  clientType: string;
  /** Kebutuhan bisnis yang harus dipenuhi project (diturunkan dari fitur nyata). */
  businessNeeds: string[];
  /** Tujuan project. */
  objectives: string[];
  /** Tantangan teknis dari lingkup nyata (fitur + stack). */
  challenges: string[];
  /** Ringkasan solusi yang dibangun. */
  solution: string;
  /** "How We Built This" — peran tiap teknologi dalam arsitektur. */
  architecture: { title: string; description: string }[];
  tech: string[];
  features: string[];
  previewUrl: string;
  image: string;
  imageAlt: string;
  result?: string;
  relatedServices: { href: string; label: string }[];
  video?: CaseStudyVideo;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "nuviral-ai-studio",
    title: "NuViral AI Creative Studio",
    categories: ["Web Application", "AI"],
    tagline: "Platform AI all-in-one untuk kreator konten",
    description:
      "Platform AI all-in-one untuk kreator konten. 9 tools dalam 1 dashboard: AI Video Generator, Text to Image, Text to Music, Voice Clone, 3D Generation, Sound Effects, dan lainnya. Digunakan oleh 50.000+ kreator untuk menghasilkan 2 juta+ video.",
    clientType: "Platform SaaS / AI creative tools",
    businessNeeds: [
      "Menyatukan banyak AI tools (video, image, music, voice, 3D) dalam satu dashboard",
      "Generasi konten AI yang memakan waktu (video/3D) harus berjalan asynchronous",
      "Akses API untuk tim dan integrasi multi-platform",
    ],
    objectives: [
      "Satu dashboard untuk 9 AI tools tanpa berpindah platform",
      "Pipeline generasi konten yang stabil untuk job berat seperti video",
      "Kolaborasi tim dan API access untuk integrasi eksternal",
    ],
    challenges: [
      "Mengorkestrasi banyak AI provider (fal.ai, Kling, MiniMax, Hunyuan3D) dengan API dan format output berbeda",
      "Job generasi video/3D berjalan lama — butuh antrian asynchronous dan status tracking agar UI tetap responsif",
      "Menjaga konsistensi UX di 9 tools yang punya parameter input sangat berbeda",
    ],
    solution:
      "Web application dengan dashboard terpadu: setiap AI tool dibungkus dalam modul dengan input form konsisten, job berat diproses asynchronous, dan hasilnya tersimpan di library pengguna. Disediakan juga API access untuk tim.",
    architecture: [
      {
        title: "Frontend: Next.js + React + TailwindCSS",
        description:
          "App Router untuk routing dashboard, Server Components untuk data awal, dan client components untuk form generasi interaktif.",
      },
      {
        title: "AI providers: fal.ai, Kling, MiniMax, Hunyuan3D",
        description:
          "Layer integrasi per provider untuk menormalkan request/response — video via Kling, image via Flux, music via MiniMax, 3D via Hunyuan3D.",
      },
      {
        title: "Async job pipeline",
        description:
          "Generasi video/3D dieksekusi sebagai background job; UI menampilkan status progres dan notifikasi saat hasil siap.",
      },
      {
        title: "API access & team collaboration",
        description:
          "Endpoint API untuk integrasi eksternal dan fitur kolaborasi tim dalam satu workspace.",
      },
    ],
    tech: ["Next.js", "React", "TailwindCSS", "AI/ML", "fal.ai", "Kling"],
    features: [
      "AI Video Generator (Kling 3.0 Pro)",
      "Text to Image (Flux Pro Ultra)",
      "Text to Music (MiniMax)",
      "Voice Clone & Text to Speech",
      "3D Model Generation (Hunyuan3D)",
      "Sound Effects Generator",
      "AI Chat Assistant",
      "Multi-platform auto publish",
      "Team collaboration & API access",
    ],
    previewUrl: "https://www.nuviral.cloud/",
    image: "/images/nufanas-project-nuviral-ai-studio.png",
    imageAlt:
      "Dashboard NuViral AI Creative Studio — platform AI all-in-one untuk kreator konten, dibangun oleh Nufanas",
    result: "50K+ kreator aktif, 2M+ video dibuat",
    relatedServices: [
      { href: "/jasa-web-application", label: "Jasa Web Application" },
      { href: "/jasa-custom-software", label: "Custom Software Development" },
      { href: "/layanan/aplikasi-ai", label: "Jasa Aplikasi AI" },
    ],
  },
  {
    id: "kaosdn99-ecommerce",
    title: "KaosDN99 - E-Commerce T-Shirt",
    categories: ["E-Commerce", "Website"],
    tagline: "E-commerce premium untuk brand streetwear",
    description:
      "Website e-commerce premium untuk brand streetwear KaosDN99. Fitur lengkap: katalog produk, flash sale, custom order, wishlist, cart, checkout multi-payment (BCA, BNI, BRI, GoPay, QRIS), dan order tracking.",
    clientType: "Brand fashion / streetwear (direct-to-consumer)",
    businessNeeds: [
      "Katalog produk dengan filter kategori untuk koleksi streetwear",
      "Flash sale dan limited edition drop sebagai strategi penjualan",
      "Custom order — pembeli bisa pesan desain sendiri",
      "Pembayaran lengkap: transfer bank, e-wallet, dan QRIS",
    ],
    objectives: [
      "Menjual langsung ke konsumen tanpa marketplace fee",
      "Mendukung model rilis limited edition dan flash sale",
      "Alur custom order yang jelas dari desain sampai pembayaran",
    ],
    challenges: [
      "Sinkronisasi status pembayaran dari banyak channel (BCA, BNI, BRI, GoPay, QRIS) via webhook Midtrans",
      "Flash sale memerlukan stok dan waktu mulai/selesai yang akurat agar tidak oversell",
      "Alur custom order berbeda dari checkout reguler — perlu state tambahan untuk brief desain",
    ],
    solution:
      "Storefront e-commerce dengan Next.js: katalog + filter, sistem flash sale, cart dan wishlist, checkout terintegrasi Midtrans untuk semua channel pembayaran, order tracking, dan akun pelanggan.",
    architecture: [
      {
        title: "Storefront: Next.js + TailwindCSS",
        description:
          "SSR untuk halaman produk agar cepat dan SEO-friendly; komponen interaktif untuk cart, wishlist, dan custom order.",
      },
      {
        title: "Database: PostgreSQL",
        description:
          "Menyimpan produk, stok flash sale, order, dan akun pelanggan dengan relasi yang konsisten.",
      },
      {
        title: "Pembayaran: Midtrans",
        description:
          "Satu integrasi untuk BCA, BNI, BRI, GoPay, dan QRIS; webhook memperbarui status order otomatis.",
      },
      {
        title: "Deployment: Vercel",
        description:
          "Deploy otomatis dengan edge network — storefront tetap cepat saat traffic flash sale naik.",
      },
    ],
    tech: ["Next.js", "TailwindCSS", "PostgreSQL", "Midtrans", "Vercel"],
    features: [
      "Katalog produk dengan filter kategori",
      "Flash sale & limited edition system",
      "Custom order desain sendiri",
      "Wishlist & shopping cart",
      "Checkout multi-payment gateway",
      "Order tracking & customer account",
    ],
    previewUrl: "https://www.kaosdn99.com/",
    image: "/images/nufanas-project-kaosdn99-ecommerce.png",
    imageAlt:
      "Halaman utama e-commerce KaosDN99 — toko online streetwear dengan katalog dan flash sale, dibangun oleh Nufanas",
    result: "10K+ customers, rating 4.9",
    relatedServices: [
      { href: "/jasa-website-ecommerce", label: "Jasa Website E-Commerce" },
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
    ],
  },
  {
    id: "bimbel-kedinasan-online",
    title: "Bimbel Kedinasan Online",
    categories: ["Website", "Web Application"],
    tagline: "Platform bimbel online untuk persiapan sekolah kedinasan",
    description:
      "Website platform bimbingan belajar online khusus persiapan masuk sekolah kedinasan (IPDN, PKN STAN, STIS, STIN, STTD, dan lainnya). Fitur e-learning, tryout online, materi video, dan pendaftaran siswa baru.",
    clientType: "Lembaga pendidikan / bimbingan belajar",
    businessNeeds: [
      "Menjual paket program bimbel melalui landing page yang meyakinkan",
      "Pendaftaran siswa baru secara online tanpa proses manual",
      "E-learning: video materi dan tryout online dengan scoring",
    ],
    objectives: [
      "Mengubah pengunjung menjadi pendaftar melalui landing page yang fokus",
      "Digitalisasi pendaftaran dan pembelian paket program",
      "Menyediakan tryout online dengan penilaian otomatis",
    ],
    challenges: [
      "Tryout online memerlukan timer, penyimpanan jawaban, dan scoring otomatis yang akurat",
      "Konten e-learning (video, materi) harus ter-gate per paket program siswa",
      "Halaman marketing harus tetap cepat meski platform punya banyak fitur dinamis",
    ],
    solution:
      "Website marketing + platform belajar dalam satu aplikasi: landing page high-converting, sistem pendaftaran online, e-learning dengan video materi, tryout online dengan scoring, dan halaman paket/pricing.",
    architecture: [
      {
        title: "Frontend: Next.js + TailwindCSS",
        description:
          "Landing page di-render server untuk kecepatan dan SEO; area siswa (materi, tryout) sebagai halaman dinamis terproteksi.",
      },
      {
        title: "Backend: Node.js + PostgreSQL",
        description:
          "API untuk pendaftaran, manajemen paket, materi, dan mesin tryout (soal, jawaban, scoring).",
      },
      {
        title: "Tryout engine",
        description:
          "Timer sesi, penyimpanan jawaban per soal, dan perhitungan skor otomatis saat sesi selesai.",
      },
      {
        title: "Content gating",
        description:
          "Akses materi dan tryout diverifikasi berdasarkan paket aktif siswa.",
      },
    ],
    tech: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
    features: [
      "Landing page high-converting",
      "Sistem pendaftaran siswa online",
      "E-learning & video materi",
      "Tryout online & scoring",
      "Paket program & pricing",
      "Testimoni alumni & success rate",
    ],
    previewUrl: "https://bimbelkedinasanonline.com/",
    image: "/images/nufanas-project-bimbel-kedinasan.png",
    imageAlt:
      "Website Bimbel Kedinasan Online — platform bimbel dengan tryout online dan e-learning, dibangun oleh Nufanas",
    result: "Pendaftaran siswa naik 300%",
    relatedServices: [
      { href: "/jasa-website-company-profile", label: "Jasa Website Company Profile" },
      { href: "/jasa-web-application", label: "Jasa Web Application" },
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
    ],
  },
  {
    id: "lcc-surabaya",
    title: "LCC Surabaya - English Course",
    categories: ["Website"],
    tagline: "Website lembaga kursus bahasa Inggris",
    description:
      "Website lembaga kursus bahasa Inggris profesional di Surabaya. Menampilkan program kursus, jadwal kelas, pendaftaran online, testimoni siswa, dan informasi pengajar native speaker.",
    clientType: "Lembaga kursus / pendidikan non-formal",
    businessNeeds: [
      "Menampilkan program dan jadwal kelas dengan jelas",
      "Pendaftaran kursus secara online",
      "Kredibilitas lewat profil pengajar dan testimoni siswa",
    ],
    objectives: [
      "Memudahkan calon siswa memahami program dan mendaftar",
      "Mengurangi pendaftaran manual lewat form online",
      "Membangun trust lewat konten edukasi dan testimoni",
    ],
    challenges: [
      "Struktur program bervariasi (reguler, private, corporate) — perlu arsitektur konten yang fleksibel",
      "Jadwal kelas harus mudah diperbarui tanpa menyentuh kode",
      "Blog/tips bahasa Inggris menjadi kanal SEO untuk akuisisi organik",
    ],
    solution:
      "Website company profile + pendaftaran online: halaman program per kategori kelas, jadwal, profil pengajar, testimoni, dan blog untuk konten edukasi SEO.",
    architecture: [
      {
        title: "Frontend: Next.js + TailwindCSS",
        description:
          "Static generation untuk halaman marketing agar load cepat dan ranking SEO baik.",
      },
      {
        title: "Backend ringan: Node.js",
        description:
          "API untuk form pendaftaran dan manajemen data jadwal/program.",
      },
      {
        title: "SEO architecture",
        description:
          "Struktur halaman per program + blog edukasi sebagai kanal akuisisi organik jangka panjang.",
      },
    ],
    tech: ["Next.js", "TailwindCSS", "Vercel", "Node.js"],
    features: [
      "Halaman program & kelas",
      "Pendaftaran online",
      "Jadwal & calendar kelas",
      "Profil pengajar",
      "Testimoni siswa",
      "Blog & tips bahasa Inggris",
    ],
    previewUrl: "https://lccsurabaya.id/",
    image: "/images/nufanas-project-lcc-surabaya.png",
    imageAlt:
      "Website LCC Surabaya — lembaga kursus bahasa Inggris dengan program kelas dan pendaftaran online, dibangun oleh Nufanas",
    result: "Pendaftaran online naik 200%",
    relatedServices: [
      { href: "/jasa-website-company-profile", label: "Jasa Website Company Profile" },
      { href: "/layanan/website-booking", label: "Jasa Website Booking" },
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
    ],
  },
  {
    id: "teman-sejiwa",
    title: "Teman Sejiwa - Konseling Online",
    categories: ["Web Application"],
    tagline: "Platform konseling psikologi online",
    description:
      "Platform konseling psikologi online yang menghubungkan klien dengan psikolog profesional. Fitur booking sesi, konsultasi chat/video, jurnal mood, dan konten edukasi kesehatan mental.",
    clientType: "Healthtech / layanan konseling psikologi",
    businessNeeds: [
      "Menghubungkan klien dengan psikolog profesional secara online",
      "Booking sesi konseling dengan jadwal psikolog",
      "Konsultasi real-time via chat dan video call",
      "Konten edukasi kesehatan mental dan jurnal mood untuk klien",
    ],
    objectives: [
      "Akses konseling tanpa batasan lokasi",
      "Proses booking → sesi → follow-up dalam satu platform",
      "Dashboard admin untuk mengelola psikolog, sesi, dan reporting",
    ],
    challenges: [
      "Video call konsultasi memerlukan koneksi WebRTC yang stabil dan penanganan jadwal ulang",
      "Data konseling bersifat sensitif — akses harus dibatasi ketat per peran (klien, psikolog, admin)",
      "Booking harus mencegah double-booking pada slot jadwal psikolog",
    ],
    solution:
      "Web application konseling: booking sesi per psikolog, konsultasi via chat dan video call (WebRTC), jurnal mood dan self-assessment untuk klien, konten edukasi, plus dashboard admin untuk operasional.",
    architecture: [
      {
        title: "Frontend: Next.js + TailwindCSS",
        description:
          "Halaman publik (profil psikolog, konten edukasi) di-render server; area klien/psikolog sebagai aplikasi terproteksi.",
      },
      {
        title: "Backend: Node.js + PostgreSQL",
        description:
          "API untuk booking, profil, jurnal, dan reporting; relasi data klien–psikolog–sesi terjaga konsistensinya.",
      },
      {
        title: "Real-time: WebRTC",
        description:
          "Video call peer-to-peer untuk sesi konsultasi langsung di browser tanpa instalasi.",
      },
      {
        title: "Role-based access",
        description:
          "Tiga peran (klien, psikolog, admin) dengan scope data masing-masing untuk menjaga privasi sesi.",
      },
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "WebRTC", "TailwindCSS"],
    features: [
      "Booking sesi konseling online",
      "Video call & chat konsultasi",
      "Profil psikolog & rating",
      "Jurnal mood & self-assessment",
      "Konten edukasi mental health",
      "Dashboard admin & reporting",
    ],
    previewUrl: "https://www.temansejiwa.com/",
    image: "/images/nufanas-project-teman-sejiwa.png",
    imageAlt:
      "Platform Teman Sejiwa — aplikasi konseling psikologi online dengan booking sesi dan video call, dibangun oleh Nufanas",
    result: "Membantu 1000+ klien konseling",
    relatedServices: [
      { href: "/jasa-web-application", label: "Jasa Web Application" },
      { href: "/jasa-pembuatan-aplikasi", label: "Jasa Pembuatan Aplikasi" },
      { href: "/layanan/website-booking", label: "Jasa Website Booking" },
    ],
  },
  {
    id: "queenmassage",
    title: "QueenMassage - Pijat Panggilan Bandung",
    categories: ["Website"],
    tagline: "Website booking layanan pijat panggilan",
    description:
      "Website layanan pijat panggilan profesional di Bandung. Fitur booking online, katalog layanan massage, pricing packages, area layanan, testimoni, dan integrasi WhatsApp untuk pemesanan cepat.",
    clientType: "Jasa layanan panggilan / home service",
    businessNeeds: [
      "Katalog 13+ jenis layanan massage dengan harga jelas",
      "Booking cepat — mayoritas pelanggan datang dari mobile",
      "Paket harga (Basic/Premium/Royal) untuk upsell",
      "Pemesanan langsung via WhatsApp",
    ],
    objectives: [
      "Mengubah kunjungan menjadi booking via CTA WhatsApp yang selalu terlihat",
      "Menampilkan area layanan dan paket harga secara transparan",
      "Membangun trust lewat testimoni pelanggan",
    ],
    challenges: [
      "Mayoritas traffic mobile — keputusan desain diprioritaskan untuk layar kecil",
      "Alur booking dibuat sesingkat mungkin: pilih layanan → paket → WhatsApp",
      "Animasi (Framer Motion) harus halus tanpa mengorbankan kecepatan load",
    ],
    solution:
      "Website booking mobile-first: katalog layanan lengkap, paket harga berjenjang, informasi area layanan, testimoni, dan integrasi WhatsApp sebagai kanal pemesanan utama.",
    architecture: [
      {
        title: "Frontend: Next.js + TailwindCSS",
        description:
          "Static generation untuk kecepatan maksimal di jaringan mobile.",
      },
      {
        title: "Interaksi: Framer Motion",
        description:
          "Animasi scroll dan micro-interaction ringan — menghormati prefers-reduced-motion.",
      },
      {
        title: "Conversion path: WhatsApp",
        description:
          "CTA WhatsApp dengan pesan pre-filled per layanan, memangkas friction pemesanan.",
      },
    ],
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
    features: [
      "Booking sistem online",
      "Katalog 13+ jenis layanan massage",
      "Pricing packages (Basic/Premium/Royal)",
      "Area layanan seluruh Bandung",
      "Testimoni pelanggan",
      "WhatsApp integration",
    ],
    previewUrl: "https://queenmassage.vercel.app/",
    image: "/images/nufanas-project-queenmassage-booking.png",
    imageAlt:
      "Website QueenMassage — layanan pijat panggilan dengan katalog layanan dan booking via WhatsApp, dibangun oleh Nufanas",
    result: "500+ pelanggan puas, rating 4.9",
    relatedServices: [
      { href: "/layanan/website-booking", label: "Jasa Website Booking" },
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
    ],
  },
  {
    id: "portal-agatha",
    title: "Portal Agatha - Sistem Informasi Lingkungan",
    categories: ["Business System", "Custom Software", "Web Application"],
    tagline: "Sistem informasi manajemen komunitas",
    description:
      "Sistem informasi manajemen lingkungan gereja untuk Lingkungan Agatha. Portal digital untuk pengurus dan umat dengan fitur verifikasi data, manajemen anggota, dan koordinasi kegiatan komunitas.",
    clientType: "Organisasi komunitas / keagamaan",
    businessNeeds: [
      "Digitalisasi data umat yang sebelumnya terpencar",
      "Alur verifikasi data agar informasi anggota selalu valid",
      "Portal untuk pengurus mengelola anggota dan kegiatan",
    ],
    objectives: [
      "Satu sumber data anggota yang terverifikasi",
      "Koordinasi kegiatan komunitas lewat sistem informasi",
      "Dashboard admin untuk pengurus",
    ],
    challenges: [
      "Data anggota datang dari banyak sumber — perlu alur verifikasi sebelum masuk sistem",
      "Pengurus dan umat punya hak akses berbeda terhadap data",
      "Aplikasi harus tetap sederhana untuk pengguna non-teknis",
    ],
    solution:
      "Sistem informasi berbasis web dengan Laravel + MySQL: portal pengurus, verifikasi data umat, manajemen anggota, informasi kegiatan, dan dashboard admin — responsif untuk akses dari ponsel.",
    architecture: [
      {
        title: "Backend: Laravel + MySQL",
        description:
          "MVC klasik untuk CRUD anggota, verifikasi, dan kegiatan; MySQL sebagai database relasional.",
      },
      {
        title: "Frontend: TailwindCSS",
        description:
          "Antarmuka sederhana dan responsif untuk pengurus maupun umat.",
      },
      {
        title: "Verifikasi workflow",
        description:
          "Data baru/perubahan masuk status pending hingga diverifikasi pengurus.",
      },
    ],
    tech: ["PHP", "MySQL", "TailwindCSS", "Laravel"],
    features: [
      "Portal pengurus lingkungan",
      "Verifikasi data umat",
      "Manajemen anggota komunitas",
      "Sistem informasi kegiatan",
      "Dashboard admin",
      "Responsive mobile-friendly",
    ],
    previewUrl: "https://portalagatha.id/",
    image: "/images/nufanas-project-portal-agatha.png",
    imageAlt:
      "Portal Agatha — sistem informasi manajemen komunitas dengan verifikasi data dan dashboard admin, dibangun oleh Nufanas",
    result: "Digitalisasi data umat lingkungan",
    relatedServices: [
      { href: "/jasa-pembuatan-sistem-informasi", label: "Jasa Pembuatan Sistem Informasi" },
      { href: "/jasa-custom-software", label: "Custom Software Development" },
      { href: "/jasa-web-application", label: "Jasa Web Application" },
    ],
  },
  {
    id: "pena-sakti",
    title: "Pena Sakti - Portal Media Online",
    categories: ["Website", "Web Application"],
    tagline: "Portal berita digital dengan CMS",
    description:
      "Portal media online dan berita digital Pena Sakti. Website berita modern dengan sistem manajemen konten, kategori berita, pencarian, dan tampilan responsif untuk pembaca di seluruh Indonesia.",
    clientType: "Media online / portal berita",
    businessNeeds: [
      "Publikasi berita multi-kategori dengan ritme tinggi",
      "CMS agar redaksi bisa menulis tanpa bantuan developer",
      "Pencarian artikel cepat untuk pembaca",
      "Siap SEO dan Google News untuk distribusi organik",
    ],
    objectives: [
      "Redaksi mandiri menerbitkan konten lewat CMS",
      "Pembaca menemukan artikel lewat kategori dan pencarian real-time",
      "Tampilan mobile-first untuk pembaca yang dominan dari ponsel",
    ],
    challenges: [
      "Konten bertambah terus — struktur kategori dan URL harus scalable untuk SEO",
      "Pencarian real-time harus tetap cepat seiring jumlah artikel bertambah",
      "Kesiapan Google News menuntut markup dan struktur artikel yang rapi",
    ],
    solution:
      "Portal berita dengan CMS: publikasi multi-kategori, pencarian artikel real-time, layout responsif mobile-first, optimasi SEO termasuk struktur yang siap untuk Google News, dan social sharing.",
    architecture: [
      {
        title: "Frontend: Next.js + TailwindCSS",
        description:
          "Halaman artikel di-render server — penting untuk SEO dan kecepatan baca di mobile.",
      },
      {
        title: "Backend: Node.js + PostgreSQL",
        description:
          "CMS untuk redaksi (artikel, kategori, publikasi) dan API pencarian untuk pembaca.",
      },
      {
        title: "SEO & Google News readiness",
        description:
          "Struktur URL bersih, metadata per artikel, dan markup yang sesuai standar konten berita.",
      },
    ],
    tech: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
    features: [
      "Portal berita multi-kategori",
      "Content Management System",
      "Pencarian artikel real-time",
      "Responsive & mobile-first",
      "SEO optimized untuk Google News",
      "Social media sharing",
    ],
    previewUrl: "https://penasakti.com/",
    image: "/images/nufanas-project-pena-sakti.png",
    imageAlt:
      "Portal Pena Sakti — media online dengan CMS, kategori berita, dan pencarian real-time, dibangun oleh Nufanas",
    result: "Portal media aktif & SEO-ready",
    relatedServices: [
      { href: "/jasa-website-custom", label: "Jasa Website Custom" },
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
      { href: "/layanan/jasa-seo", label: "Jasa SEO" },
    ],
  },
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Website",
  "Web Application",
  "Mobile Application",
  "E-Commerce",
  "Custom Software",
  "AI",
  "Business System",
] as const;
