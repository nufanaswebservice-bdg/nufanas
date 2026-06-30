export const SITE_CONFIG = {
  name: "Nufanas",
  title: "Nufanas - Jasa Pembuatan Website Profesional Bandung",
  description:
    "Nufanas adalah digital agency di Bandung yang menyediakan jasa pembuatan website profesional, SEO, dan digital marketing untuk bisnis Anda. Desain premium, performa cepat, dan siap ranking Google.",
  url: "https://nufanas.com",
  ogImage: "https://nufanas.com/images/og-image.jpg",
  locale: "id_ID",
  language: "id",
  creator: "Nufanas Digital Agency",
  keywords: [
    "jasa website bandung",
    "jasa pembuatan website bandung",
    "web developer bandung",
    "web design bandung",
    "digital agency bandung",
    "jasa seo bandung",
    "website company profile bandung",
    "website toko online bandung",
    "landing page bandung",
    "website umkm bandung",
  ],
} as const;

export const NAP = {
  name: "Nufanas Digital Agency",
  address: {
    street: "Jl. Cihampelas No. 160",
    city: "Bandung",
    region: "Jawa Barat",
    postalCode: "40131",
    country: "ID",
  },
  phone: "+6282216667733",
  whatsapp: "6282216667733",
  email: "hello@nufanas.com",
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
    youtube: "https://youtube.com/@nufanas",
    github: "https://github.com/nufanas",
  },
} as const;

export const SERVICES = [
  {
    slug: "jasa-website-bandung",
    title: "Jasa Website Bandung",
    shortTitle: "Website Bandung",
    description:
      "Jasa pembuatan website profesional di Bandung dengan desain premium, performa cepat, dan SEO-ready untuk bisnis Anda.",
    icon: "globe",
    price: "Mulai Rp 3.500.000",
  },
  {
    slug: "jasa-pembuatan-website-bandung",
    title: "Jasa Pembuatan Website Bandung",
    shortTitle: "Pembuatan Website",
    description:
      "Layanan pembuatan website custom dari nol untuk perusahaan dan bisnis di Bandung. Full responsive dan mobile-first.",
    icon: "code",
    price: "Mulai Rp 5.000.000",
  },
  {
    slug: "web-developer-bandung",
    title: "Web Developer Bandung",
    shortTitle: "Web Developer",
    description:
      "Tim web developer berpengalaman di Bandung siap membangun website modern dengan teknologi terkini.",
    icon: "terminal",
    price: "Mulai Rp 7.500.000",
  },
  {
    slug: "web-design-bandung",
    title: "Web Design Bandung",
    shortTitle: "Web Design",
    description:
      "Jasa web design premium di Bandung. UI/UX modern yang meningkatkan conversion rate bisnis Anda.",
    icon: "palette",
    price: "Mulai Rp 4.000.000",
  },
  {
    slug: "website-company-profile-bandung",
    title: "Website Company Profile Bandung",
    shortTitle: "Company Profile",
    description:
      "Jasa pembuatan website company profile profesional di Bandung untuk meningkatkan kredibilitas perusahaan.",
    icon: "building",
    price: "Mulai Rp 3.500.000",
  },
  {
    slug: "website-toko-online-bandung",
    title: "Website Toko Online Bandung",
    shortTitle: "Toko Online",
    description:
      "Pembuatan website toko online dan e-commerce di Bandung. Lengkap dengan payment gateway dan dashboard admin.",
    icon: "shoppingCart",
    price: "Mulai Rp 8.000.000",
  },
  {
    slug: "landing-page-bandung",
    title: "Landing Page Bandung",
    shortTitle: "Landing Page",
    description:
      "Jasa pembuatan landing page high-converting di Bandung untuk campaign iklan dan lead generation.",
    icon: "mousePointer",
    price: "Mulai Rp 2.500.000",
  },
  {
    slug: "jasa-seo-bandung",
    title: "Jasa SEO Bandung",
    shortTitle: "SEO",
    description:
      "Layanan SEO profesional di Bandung untuk meningkatkan ranking website di Google dan mendatangkan traffic organik.",
    icon: "search",
    price: "Mulai Rp 3.000.000/bulan",
  },
  {
    slug: "website-umkm-bandung",
    title: "Website UMKM Bandung",
    shortTitle: "Website UMKM",
    description:
      "Jasa pembuatan website murah untuk UMKM di Bandung. Paket lengkap dengan domain, hosting, dan SSL.",
    icon: "store",
    price: "Mulai Rp 1.500.000",
  },
  {
    slug: "website-sekolah-bandung",
    title: "Website Sekolah Bandung",
    shortTitle: "Website Sekolah",
    description:
      "Jasa pembuatan website sekolah dan lembaga pendidikan di Bandung. Informatif, modern, dan mudah dikelola.",
    icon: "graduationCap",
    price: "Mulai Rp 3.000.000",
  },
  {
    slug: "website-klinik-bandung",
    title: "Website Klinik Bandung",
    shortTitle: "Website Klinik",
    description:
      "Pembuatan website klinik dan rumah sakit di Bandung. Profesional dan sesuai standar kesehatan digital.",
    icon: "heart",
    price: "Mulai Rp 4.500.000",
  },
  {
    slug: "website-cafe-bandung",
    title: "Website Cafe Bandung",
    shortTitle: "Website Cafe",
    description:
      "Jasa pembuatan website cafe dan restoran di Bandung. Tampilan menarik dengan menu digital dan reservasi online.",
    icon: "coffee",
    price: "Mulai Rp 3.000.000",
  },
  {
    slug: "website-hotel-bandung",
    title: "Website Hotel Bandung",
    shortTitle: "Website Hotel",
    description:
      "Pembuatan website hotel dan penginapan di Bandung. Booking system, gallery, dan integrasi OTA.",
    icon: "bed",
    price: "Mulai Rp 7.000.000",
  },
  {
    slug: "website-rental-mobil-bandung",
    title: "Website Rental Mobil Bandung",
    shortTitle: "Website Rental Mobil",
    description:
      "Jasa pembuatan website rental mobil di Bandung. Sistem booking online dan katalog kendaraan lengkap.",
    icon: "car",
    price: "Mulai Rp 5.000.000",
  },
  {
    slug: "website-travel-bandung",
    title: "Website Travel Bandung",
    shortTitle: "Website Travel",
    description:
      "Pembuatan website travel dan tour di Bandung. Paket wisata, booking, dan payment gateway terintegrasi.",
    icon: "plane",
    price: "Mulai Rp 6.000.000",
  },
  {
    slug: "website-kontraktor-bandung",
    title: "Website Kontraktor Bandung",
    shortTitle: "Website Kontraktor",
    description:
      "Jasa pembuatan website kontraktor dan konstruksi di Bandung. Portfolio proyek dan lead generation.",
    icon: "hardHat",
    price: "Mulai Rp 4.000.000",
  },
  {
    slug: "website-properti-bandung",
    title: "Website Properti Bandung",
    shortTitle: "Website Properti",
    description:
      "Pembuatan website properti dan real estate di Bandung. Listing property dengan filter dan peta interaktif.",
    icon: "home",
    price: "Mulai Rp 8.000.000",
  },
  {
    slug: "website-furniture-bandung",
    title: "Website Furniture Bandung",
    shortTitle: "Website Furniture",
    description:
      "Jasa pembuatan website furniture dan interior di Bandung. Katalog produk dengan 3D viewer.",
    icon: "sofa",
    price: "Mulai Rp 5.000.000",
  },
  {
    slug: "website-industri-bandung",
    title: "Website Industri Bandung",
    shortTitle: "Website Industri",
    description:
      "Pembuatan website industri dan manufaktur di Bandung. Company profile, katalog produk, dan B2B features.",
    icon: "factory",
    price: "Mulai Rp 6.000.000",
  },
] as const;

export const ENTITIES = {
  areas: [
    "Bandung",
    "Kota Bandung",
    "Jawa Barat",
    "Cimahi",
    "Lembang",
    "Soreang",
    "Rancaekek",
    "Cileunyi",
    "Dayeuhkolot",
    "Majalaya",
    "Buah Batu",
    "Antapani",
    "Setiabudi",
    "Pasteur",
    "Dago",
    "Ujung Berung",
    "Lengkong",
    "Batununggal",
    "Kopo",
    "Cibiru",
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
  services: [
    { label: "Website Company Profile", href: "/layanan/website-company-profile-bandung" },
    { label: "Website Toko Online", href: "/layanan/website-toko-online-bandung" },
    { label: "Landing Page", href: "/layanan/landing-page-bandung" },
    { label: "Jasa SEO", href: "/layanan/jasa-seo-bandung" },
    { label: "Website UMKM", href: "/layanan/website-umkm-bandung" },
    { label: "Web Design", href: "/layanan/web-design-bandung" },
  ],
} as const;
