export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  previewUrl: string;
  image: string;
  result?: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "saas-dashboard",
    title: "NuViral AI Creative Studio",
    category: "Web Application",
    description:
      "Platform AI all-in-one untuk kreator konten. 9 tools dalam 1 dashboard: AI Video Generator, Text to Image, Text to Music, Voice Clone, 3D Generation, Sound Effects, dan lainnya. Digunakan oleh 50.000+ kreator untuk menghasilkan 2 juta+ video.",
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
    image: "/images/opensas1.png",
    result: "50K+ kreator aktif, 2M+ video dibuat",
  },
  {
    id: "ecommerce-modern",
    title: "KaosDN99 - E-Commerce T-Shirt",
    category: "E-Commerce",
    description:
      "Website e-commerce premium untuk brand streetwear KaosDN99. Fitur lengkap: katalog produk, flash sale, custom order, wishlist, cart, checkout multi-payment (BCA, BNI, BRI, GoPay, QRIS), dan order tracking.",
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
    image: "/images/marketplace1.png",
    result: "10K+ customers, rating 4.9",
  },
  {
    id: "company-profile-premium",
    title: "Bimbel Kedinasan Online",
    category: "Company Profile",
    description:
      "Website platform bimbingan belajar online khusus persiapan masuk sekolah kedinasan (IPDN, PKN STAN, STIS, STIN, STTD, dan lainnya). Fitur e-learning, tryout online, materi video, dan pendaftaran siswa baru.",
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
    image: "/images/bimbel1.png",
    result: "Pendaftaran siswa naik 300%",
  },
  {
    id: "restaurant-app",
    title: "LCC Surabaya - English Course",
    category: "Company Profile",
    description:
      "Website lembaga kursus bahasa Inggris profesional di Surabaya. Menampilkan program kursus, jadwal kelas, pendaftaran online, testimoni siswa, dan informasi pengajar native speaker.",
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
    image: "/images/lccsby1.png",
    result: "Pendaftaran online naik 200%",
  },
  {
    id: "clinic-management",
    title: "Teman Sejiwa - Konseling Online",
    category: "Web Application",
    description:
      "Platform konseling psikologi online yang menghubungkan klien dengan psikolog profesional. Fitur booking sesi, konsultasi chat/video, jurnal mood, dan konten edukasi kesehatan mental.",
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
    image: "/images/teman1.png",
    result: "Membantu 1000+ klien konseling",
  },
  {
    id: "school-portal",
    title: "QueenMassage - Pijat Panggilan Bandung",
    category: "Company Profile",
    description:
      "Website layanan pijat panggilan profesional di Bandung. Fitur booking online, katalog layanan massage, pricing packages, area layanan, testimoni, dan integrasi WhatsApp untuk pemesanan cepat.",
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
    image: "/images/queen.png",
    result: "500+ pelanggan puas, rating 4.9",
  },
  {
    id: "pos-system",
    title: "Portal Agatha - Sistem Informasi Lingkungan",
    category: "Web Application",
    description:
      "Sistem informasi manajemen lingkungan gereja untuk Lingkungan Agatha. Portal digital untuk pengurus dan umat dengan fitur verifikasi data, manajemen anggota, dan koordinasi kegiatan komunitas.",
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
    image: "/images/portal.png",
    result: "Digitalisasi data umat lingkungan",
  },
  {
    id: "travel-marketplace",
    title: "Pena Sakti - Portal Media Online",
    category: "Company Profile",
    description:
      "Portal media online dan berita digital Pena Sakti. Website berita modern dengan sistem manajemen konten, kategori berita, pencarian, dan tampilan responsif untuk pembaca di seluruh Indonesia.",
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
    image: "/images/pena.png",
    result: "Portal media aktif & SEO-ready",
  },
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Company Profile",
  "E-Commerce",
  "Web Application",
] as const;
