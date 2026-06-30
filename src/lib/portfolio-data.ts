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
    title: "SaaS Dashboard Pro",
    category: "Web Application",
    description:
      "Dashboard SaaS premium dengan analytics real-time, manajemen user, billing system, dan reporting otomatis. Desain modern dan performa cepat.",
    tech: ["Next.js", "React", "TailwindCSS", "Supabase", "Chart.js"],
    features: [
      "Real-time analytics dashboard",
      "User management & roles",
      "Subscription billing",
      "Dark/Light mode",
      "Responsive design",
      "Export PDF & CSV",
    ],
    previewUrl: "https://saas-dashboard-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    result: "Digunakan oleh 3 startup di Bandung",
  },
  {
    id: "ecommerce-modern",
    title: "E-Commerce Modern",
    category: "E-Commerce",
    description:
      "Website toko online modern dengan fitur lengkap: product catalog, cart, checkout, payment gateway Midtrans, dan dashboard admin.",
    tech: ["Next.js", "TailwindCSS", "Prisma", "PostgreSQL", "Midtrans"],
    features: [
      "Product catalog dengan filter",
      "Shopping cart & wishlist",
      "Checkout multi-payment",
      "Order tracking",
      "Admin dashboard",
      "SEO optimized",
    ],
    previewUrl: "https://ecommerce-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    result: "Revenue client naik 150%",
  },
  {
    id: "company-profile-premium",
    title: "Company Profile Premium",
    category: "Company Profile",
    description:
      "Website company profile premium dengan animasi smooth, parallax effect, dan desain yang memukau. Cocok untuk perusahaan besar.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS", "GSAP"],
    features: [
      "Hero section dengan video background",
      "Smooth scroll animations",
      "Team & about section",
      "Service showcase",
      "Contact form",
      "Google Maps integration",
    ],
    previewUrl: "https://company-profile-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    result: "Traffic naik 300% dalam 3 bulan",
  },
  {
    id: "restaurant-app",
    title: "Restaurant & Cafe App",
    category: "Mobile App",
    description:
      "Aplikasi restoran dan cafe dengan menu digital, order online, reservasi meja, dan loyalty program. Cross-platform Android & iOS.",
    tech: ["Flutter", "Firebase", "Node.js", "Stripe"],
    features: [
      "Digital menu dengan foto",
      "Online ordering & delivery",
      "Table reservation",
      "Loyalty points system",
      "Push notifications",
      "Admin panel",
    ],
    previewUrl: "https://restaurant-app-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    result: "Order online naik 250%",
  },
  {
    id: "clinic-management",
    title: "Clinic Management System",
    category: "Enterprise",
    description:
      "Sistem manajemen klinik lengkap dengan rekam medis elektronik, appointment booking, billing, dan laporan operasional.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    features: [
      "Electronic medical records",
      "Appointment scheduling",
      "Patient portal",
      "Billing & invoicing",
      "Pharmacy management",
      "Analytics & reporting",
    ],
    previewUrl: "https://clinic-system-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    result: "50+ pasien baru/bulan dari Google",
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
