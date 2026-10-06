export const SITE_CONFIG = {
  name: "Nufanas",
  title: "Nufanas — Jasa Pembuatan Website & Aplikasi Custom",
  description:
    "Nufanas adalah jasa pembuatan website dan aplikasi custom untuk bisnis di seluruh Indonesia. Website company profile, toko online, web application, aplikasi mobile Android & iOS, hingga custom software — dibangun cepat, aman, dan SEO-friendly.",
  url: "https://nufanas.com",
  ogImage: "https://nufanas.com/opengraph-image",
  locale: "id_ID",
  language: "id",
  creator: "Nufanas — Software House Indonesia",
  keywords: [
    "jasa pembuatan website",
    "jasa website",
    "jasa pembuatan website profesional",
    "jasa pembuatan website custom",
    "jasa pembuatan aplikasi",
    "jasa aplikasi",
    "jasa pembuatan aplikasi custom",
    "jasa aplikasi mobile",
    "jasa web application",
    "custom software development",
    "software house indonesia",
    "web developer indonesia",
  ],
} as const;

export const NAP = {
  name: "Nufanas — Software House & Digital Agency",
  address: {
    street: "Jl. Cihampelas No. 160",
    city: "Bandung",
    region: "Jawa Barat",
    postalCode: "40131",
    country: "ID",
  },
  phone: "+6285724623601",
  whatsapp: "6285724623601",
  email: "nufanaswebservice@gmail.com",
  website: "https://nufanas.com",
  geo: {
    latitude: -6.8957,
    longitude: 107.6068,
  },
  openingHours: [
    { day: "Monday", open: "09:00", close: "18:00" },
    { day: "Tuesday", open: "09:00", close: "18:00" },
    { day: "Wednesday", open: "09:00", close: "18:00" },
    { day: "Thursday", open: "09:00", close: "18:00" },
    { day: "Friday", open: "09:00", close: "18:00" },
    { day: "Saturday", open: "09:00", close: "15:00" },
  ],
  socialMedia: {
    instagram: "https://instagram.com/nufanas",
    linkedin: "https://linkedin.com/company/nufanas",
    facebook: "https://facebook.com/nufanas",
    twitter: "https://twitter.com/nufanas",
    github: "https://github.com/nufanaswebservice-bdg",
  },
} as const;

// ==========================================
// SERVICE CATEGORIES (2 pillars + supporting)
// ==========================================
export const SERVICE_CATEGORIES = [
  {
    slug: "website-development",
    title: "Jasa Pembuatan Website",
    shortTitle: "Website",
    description:
      "Jasa pembuatan website profesional dan custom untuk bisnis di seluruh Indonesia — company profile, UMKM, e-commerce, hingga web application.",
    icon: "globe",
    pillar: "/jasa-pembuatan-website",
  },
  {
    slug: "mobile-app-development",
    title: "Jasa Pembuatan Aplikasi",
    shortTitle: "Aplikasi",
    description:
      "Jasa pembuatan aplikasi Android, iOS, dan aplikasi mobile cross-platform dengan Flutter, React Native, Kotlin, dan Swift.",
    icon: "smartphone",
    pillar: "/jasa-pembuatan-aplikasi",
  },
  {
    slug: "web-application",
    path: "/jasa-web-application",
    title: "Web Application & Sistem Informasi",
    shortTitle: "Web App",
    description:
      "Jasa pembuatan web application, sistem informasi, dashboard, dan platform SaaS untuk otomasi proses bisnis.",
    icon: "layoutDashboard",
    pillar: "/jasa-pembuatan-aplikasi",
  },
  {
    slug: "custom-software",
    path: "/jasa-custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    description:
      "Jasa pengembangan software custom yang dirancang mengikuti alur kerja unik bisnis Anda — bukan software jadi.",
    icon: "code",
    pillar: "/jasa-pembuatan-aplikasi",
  },
  {
    slug: "seo",
    title: "SEO & Optimasi Digital",
    shortTitle: "SEO",
    description:
      "Jasa SEO untuk meningkatkan ranking website di Google dan visibilitas di AI Search (GEO).",
    icon: "search",
    pillar: "/layanan/jasa-seo",
  },
] as const;

// ==========================================
// WEBSITE SERVICES (national)
// ==========================================
export const WEBSITE_SERVICES = [
  {
    slug: "website-company-profile",
    path: "/jasa-website-company-profile",
    title: "Jasa Pembuatan Website Company Profile",
    shortTitle: "Website Company Profile",
    description:
      "Jasa pembuatan website company profile profesional untuk membangun kredibilitas perusahaan — profil bisnis, layanan, tim, portfolio, dan kontak dalam satu situs yang bekerja 24 jam.",
    icon: "building",
    price: "Mulai Rp 3.500.000",
    category: "website-development",
    serviceType: "Website Development",
  },
  {
    slug: "website-umkm",
    path: "/layanan/website-umkm",
    title: "Jasa Pembuatan Website UMKM",
    shortTitle: "Website UMKM",
    description:
      "Paket website terjangkau untuk UMKM di seluruh Indonesia: katalog produk, tombol WhatsApp, peta lokasi, dan halaman promo yang mudah dikelola.",
    icon: "store",
    price: "Mulai Rp 1.500.000",
    category: "website-development",
    serviceType: "Website Development",
  },
  {
    slug: "website-ecommerce",
    path: "/jasa-website-ecommerce",
    title: "Jasa Pembuatan Website E-Commerce & Toko Online",
    shortTitle: "Website E-Commerce",
    description:
      "Jasa pembuatan website e-commerce dan toko online dengan katalog produk, keranjang, checkout multi-payment gateway, ongkir otomatis, dan order tracking.",
    icon: "shoppingCart",
    price: "Mulai Rp 8.000.000",
    category: "website-development",
    serviceType: "E-Commerce Development",
  },
  {
    slug: "website-custom",
    path: "/jasa-website-custom",
    title: "Jasa Pembuatan Website Custom",
    shortTitle: "Website Custom",
    description:
      "Jasa pembuatan website custom dari nol sesuai kebutuhan spesifik bisnis Anda — bukan template. Desain, fitur, dan alur disesuaikan dengan proses bisnis.",
    icon: "code",
    price: "Mulai Rp 5.000.000",
    category: "website-development",
    serviceType: "Website Development",
  },
  {
    slug: "web-application",
    path: "/jasa-web-application",
    title: "Jasa Pembuatan Web Application",
    shortTitle: "Web Application",
    description:
      "Jasa pembuatan web application dengan login, database, dashboard, dan logika bisnis kompleks — sistem informasi, portal, dan platform berbasis web.",
    icon: "layoutDashboard",
    price: "Mulai Rp 20.000.000",
    category: "web-application",
    serviceType: "Web Application Development",
  },
  {
    slug: "website-booking",
    path: "/layanan/website-booking",
    title: "Jasa Pembuatan Website Booking & Reservasi",
    shortTitle: "Website Booking",
    description:
      "Jasa pembuatan website booking online untuk hotel, rental, travel, klinik, dan jasa jadwal — ketersediaan real-time, pembayaran online, dan manajemen reservasi.",
    icon: "calendarCheck",
    price: "Mulai Rp 7.000.000",
    category: "website-development",
    serviceType: "Website Development",
  },
  {
    slug: "landing-page",
    path: "/layanan/landing-page",
    title: "Jasa Pembuatan Landing Page",
    shortTitle: "Landing Page",
    description:
      "Jasa pembuatan landing page high-converting untuk campaign, lead generation, dan promosi produk — cepat, fokus, dan terukur.",
    icon: "mousePointer",
    price: "Mulai Rp 2.500.000",
    category: "website-development",
    serviceType: "Website Development",
  },
] as const;

// ==========================================
// APP SERVICES (national)
// ==========================================
export const APP_SERVICES = [
  {
    slug: "aplikasi-android",
    path: "/jasa-aplikasi-android",
    title: "Jasa Pembuatan Aplikasi Android",
    shortTitle: "Aplikasi Android",
    description:
      "Jasa pembuatan aplikasi Android native (Kotlin) atau cross-platform (Flutter/React Native) hingga publish ke Google Play Store.",
    icon: "smartphone",
    price: "Mulai Rp 20.000.000",
    category: "mobile-app-development",
    serviceType: "Mobile App Development",
  },
  {
    slug: "aplikasi-ios",
    path: "/jasa-aplikasi-ios",
    title: "Jasa Pembuatan Aplikasi iOS",
    shortTitle: "Aplikasi iOS",
    description:
      "Jasa pembuatan aplikasi iPhone dan iPad dengan Swift atau cross-platform — satu codebase bisa sekaligus menghasilkan versi Android.",
    icon: "smartphone",
    price: "Mulai Rp 25.000.000",
    category: "mobile-app-development",
    serviceType: "Mobile App Development",
  },
  {
    slug: "aplikasi-mobile",
    path: "/jasa-aplikasi-mobile",
    title: "Jasa Pembuatan Aplikasi Mobile",
    shortTitle: "Aplikasi Mobile",
    description:
      "Jasa pembuatan aplikasi mobile cross-platform untuk Android dan iOS sekaligus — lebih hemat biaya dan waktu dibanding dua codebase terpisah.",
    icon: "smartphone",
    price: "Mulai Rp 25.000.000",
    category: "mobile-app-development",
    serviceType: "Mobile App Development",
  },
  {
    slug: "aplikasi-bisnis",
    path: "/jasa-pembuatan-aplikasi-bisnis",
    title: "Jasa Pembuatan Aplikasi Bisnis",
    shortTitle: "Aplikasi Bisnis",
    description:
      "Jasa pembuatan aplikasi operasional bisnis: kasir/POS, inventory, booking, manajemen pelanggan, dan aplikasi internal perusahaan.",
    icon: "briefcase",
    price: "Mulai Rp 15.000.000",
    category: "mobile-app-development",
    serviceType: "Business App Development",
  },
  {
    slug: "custom-software",
    path: "/jasa-custom-software",
    title: "Jasa Custom Software Development",
    shortTitle: "Custom Software",
    description:
      "Jasa pengembangan software custom yang mengikuti proses bisnis Anda — sistem internal, platform SaaS, marketplace, hingga integrasi API kompleks.",
    icon: "code",
    price: "Mulai Rp 30.000.000",
    category: "custom-software",
    serviceType: "Custom Software Development",
  },
  {
    slug: "sistem-informasi",
    path: "/jasa-pembuatan-sistem-informasi",
    title: "Jasa Pembuatan Sistem Informasi",
    shortTitle: "Sistem Informasi",
    description:
      "Jasa pembuatan sistem informasi manajemen terintegrasi: ERP, CRM, HRIS, SIMRS, dan sistem enterprise untuk efisiensi operasional.",
    icon: "database",
    price: "Mulai Rp 25.000.000",
    category: "web-application",
    serviceType: "Enterprise Software",
  },
  {
    slug: "aplikasi-ai",
    path: "/layanan/aplikasi-ai",
    title: "Jasa Pembuatan Aplikasi AI",
    shortTitle: "Aplikasi AI",
    description:
      "Jasa pembuatan aplikasi berbasis AI: content generation, chatbot cerdas, image/video AI, dan otomasi menggunakan model AI terkini.",
    icon: "brain",
    price: "Mulai Rp 50.000.000",
    category: "custom-software",
    serviceType: "AI Development",
  },
] as const;

// Combined all services
export const ALL_SERVICES = [...WEBSITE_SERVICES, ...APP_SERVICES] as const;

// SEO service (national)
export const SEO_SERVICE = {
  slug: "jasa-seo",
  path: "/layanan/jasa-seo",
  title: "Jasa SEO Profesional",
  shortTitle: "Jasa SEO",
  description:
    "Jasa SEO untuk meningkatkan ranking website di Google Indonesia — technical SEO, on-page, konten, dan optimasi AI Search (GEO).",
  icon: "search",
  price: "Mulai Rp 3.000.000/bulan",
  category: "seo",
  serviceType: "SEO",
} as const;

// City names are kept only as factual coverage chips, not SEO targets.
export const ENTITIES = {
  coverage:
    "Jakarta, Surabaya, Bandung, Medan, Semarang, Yogyakarta, Makassar, Denpasar, Palembang, Balikpapan, dan seluruh kota di Indonesia",
  areas: [
    "Seluruh Indonesia",
    "Jakarta",
    "Surabaya",
    "Bandung",
    "Medan",
    "Semarang",
    "Yogyakarta",
    "Makassar",
    "Denpasar",
    "Palembang",
    "Balikpapan",
    "Bogor",
    "Bekasi",
    "Tangerang",
    "Malang",
    "Batam",
  ],
} as const;

export const NAVIGATION = {
  main: [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Harga", href: "/harga" },
    { label: "Blog", href: "/blog" },
    { label: "Tentang", href: "/tentang" },
    { label: "Kontak", href: "/kontak" },
  ],
  serviceGroups: [
    {
      label: "Jasa Pembuatan Website",
      href: "/jasa-pembuatan-website",
      items: [
        { label: "Website Company Profile", href: "/jasa-website-company-profile" },
        { label: "Website UMKM", href: "/layanan/website-umkm" },
        { label: "Website E-Commerce", href: "/jasa-website-ecommerce" },
        { label: "Website Custom", href: "/jasa-website-custom" },
        { label: "Web Application", href: "/jasa-web-application" },
        { label: "Website Booking", href: "/layanan/website-booking" },
        { label: "Landing Page", href: "/layanan/landing-page" },
      ],
    },
    {
      label: "Jasa Pembuatan Aplikasi",
      href: "/jasa-pembuatan-aplikasi",
      items: [
        { label: "Aplikasi Android", href: "/jasa-aplikasi-android" },
        { label: "Aplikasi iOS", href: "/jasa-aplikasi-ios" },
        { label: "Aplikasi Mobile", href: "/jasa-aplikasi-mobile" },
        { label: "Aplikasi Bisnis", href: "/jasa-pembuatan-aplikasi-bisnis" },
        { label: "Custom Software", href: "/jasa-custom-software" },
        { label: "Sistem Informasi", href: "/jasa-pembuatan-sistem-informasi" },
        { label: "Aplikasi AI", href: "/layanan/aplikasi-ai" },
      ],
    },
    {
      label: "Layanan Lainnya",
      href: "/layanan",
      items: [{ label: "Jasa SEO", href: "/layanan/jasa-seo" }],
    },
  ],
} as const;

export const TECHNOLOGIES = [
  { name: "Flutter", category: "Mobile", slug: "flutter" },
  { name: "React Native", category: "Mobile", slug: "react-native" },
  { name: "Kotlin", category: "Mobile", slug: "kotlin" },
  { name: "Swift", category: "Mobile", slug: "swift" },
  { name: "Next.js", category: "Frontend", slug: "nextjs" },
  { name: "React", category: "Frontend", slug: "react" },
  { name: "Node.js", category: "Backend", slug: "nodejs" },
  { name: "NestJS", category: "Backend", slug: "nestjs" },
  { name: "Laravel", category: "Backend", slug: "laravel" },
  { name: "Python", category: "Backend", slug: "python" },
  { name: "Go", category: "Backend", slug: "go" },
  { name: "Java", category: "Backend", slug: "java" },
  { name: "PostgreSQL", category: "Database", slug: "postgresql" },
  { name: "MySQL", category: "Database", slug: "mysql" },
  { name: "MongoDB", category: "Database", slug: "mongodb" },
  { name: "Redis", category: "Cache", slug: "redis" },
  { name: "Docker", category: "DevOps", slug: "docker" },
  { name: "Kubernetes", category: "DevOps", slug: "kubernetes" },
  { name: "AWS", category: "Cloud", slug: "aws" },
  { name: "Google Cloud", category: "Cloud", slug: "google-cloud" },
  { name: "Vercel", category: "Hosting", slug: "vercel" },
  { name: "Supabase", category: "BaaS", slug: "supabase" },
  { name: "Firebase", category: "BaaS", slug: "firebase" },
  { name: "Prisma", category: "ORM", slug: "prisma" },
] as const;
