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
    id: "hotel-booking",
    title: "Hotel Booking Platform",
    category: "Website Hotel",
    description:
      "Website hotel premium dengan booking system real-time, room gallery, virtual tour, dan integrasi channel manager.",
    tech: ["Next.js", "Supabase", "TailwindCSS", "Stripe"],
    features: [
      "Real-time room availability",
      "Online booking & payment",
      "Room gallery & virtual tour",
      "Multi-language (ID/EN)",
      "Review & rating system",
      "Channel manager integration",
    ],
    previewUrl: "https://hotel-booking-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    result: "Booking langsung naik 200%",
  },
  {
    id: "school-portal",
    title: "School Management Portal",
    category: "Web Application",
    description:
      "Portal manajemen sekolah dengan PPDB online, e-learning, absensi digital, raport online, dan komunikasi orang tua.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    features: [
      "PPDB online",
      "E-learning & LMS",
      "Digital attendance",
      "Online report cards",
      "Parent communication",
      "Finance management",
    ],
    previewUrl: "https://school-portal-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    result: "Pendaftar PPDB online naik 400%",
  },
  {
    id: "pos-system",
    title: "POS & Inventory System",
    category: "Enterprise",
    description:
      "Sistem Point of Sale dan inventory management untuk retail dan F&B. Multi-outlet, multi-user, dan real-time sync.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Point of Sale terminal",
      "Inventory tracking",
      "Multi-outlet support",
      "Sales analytics",
      "Employee management",
      "Receipt printer integration",
    ],
    previewUrl: "https://pos-system-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&q=80&w=800",
    result: "Digunakan 15+ outlet di Bandung",
  },
  {
    id: "travel-marketplace",
    title: "Travel Marketplace",
    category: "Marketplace",
    description:
      "Platform marketplace travel dengan paket wisata, booking hotel, tiket transportasi, dan review traveler. Multi-vendor support.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Midtrans", "AWS"],
    features: [
      "Tour package listing",
      "Hotel & transport booking",
      "Multi-vendor dashboard",
      "Payment gateway",
      "Review & rating",
      "Itinerary builder",
    ],
    previewUrl: "https://travel-marketplace-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
    result: "GMV Rp 500jt+ dalam 6 bulan",
  },
  {
    id: "landing-page-startup",
    title: "Startup Landing Page",
    category: "Landing Page",
    description:
      "Landing page high-converting untuk startup dan SaaS product. Animasi premium, social proof, dan CTA yang optimal.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    features: [
      "Animated hero section",
      "Feature showcase",
      "Pricing table",
      "Testimonials carousel",
      "FAQ accordion",
      "Newsletter signup",
    ],
    previewUrl: "https://startup-landing-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    result: "Conversion rate 12%",
  },
  {
    id: "crm-dashboard",
    title: "CRM Dashboard",
    category: "Enterprise",
    description:
      "Customer Relationship Management system dengan pipeline management, contact database, email automation, dan sales analytics.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "SendGrid"],
    features: [
      "Sales pipeline (Kanban)",
      "Contact management",
      "Email automation",
      "Task & calendar",
      "Sales forecasting",
      "Team collaboration",
    ],
    previewUrl: "https://crm-dashboard-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    result: "Close rate naik 35%",
  },
  {
    id: "property-listing",
    title: "Property Listing Platform",
    category: "Website Properti",
    description:
      "Platform listing properti dengan peta interaktif, filter advanced, virtual tour 360°, dan kalkulasi KPR. Responsive design.",
    tech: ["Next.js", "TailwindCSS", "Mapbox", "Supabase"],
    features: [
      "Interactive map search",
      "Advanced property filters",
      "Virtual tour 360°",
      "KPR calculator",
      "Agent profile",
      "Saved searches & alerts",
    ],
    previewUrl: "https://property-listing-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    result: "Lead properti naik 180%",
  },
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Company Profile",
  "E-Commerce",
  "Web Application",
  "Mobile App",
  "Enterprise",
  "Marketplace",
  "Landing Page",
  "Website Hotel",
  "Website Properti",
] as const;
