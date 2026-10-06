import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ServiceDetail,
  ServicePageContent,
} from "@/components/services/service-detail";

const content: ServicePageContent = {
  path: "/jasa-web-application",
  heading: "Jasa Pembuatan Web Application",
  eyebrow: "Web Application",
  intro:
    "Web application adalah software yang berjalan di browser — dengan login, database, dashboard, dan logika bisnis. Dari sistem internal perusahaan hingga platform SaaS yang Anda jual sebagai produk, kami membangunnya end-to-end.",
  highlights: [
    "Akses dari mana saja — cukup browser, tanpa install",
    "Multi-user dengan role & permission yang detail",
    "Dashboard, reporting, dan otomasi proses bisnis",
    "Arsitektur scalable — dari puluhan hingga ribuan user",
    "Bisa menjadi produk SaaS yang Anda monetisasi",
  ],
  priceLabel: "Mulai Rp 20.000.000",
  serviceType: "Web Application Development",

  problem: {
    title: "Kenapa Bisnis Bermigrasi ke Web Application",
    paragraphs: [
      "Banyak perusahaan masih menjalankan operasional dengan spreadsheet yang dikirim bolak-balik lewat email, atau software desktop jadul yang hanya bisa diakses dari satu komputer kantor. Data tersebar, tidak real-time, dan rawan hilang.",
      "Web application memusatkan data dan proses di satu platform yang bisa diakses tim dari mana saja — dengan kontrol akses, audit trail, dan otomasi yang menghemat jam kerja manual setiap hari.",
    ],
  },
  forWhom: {
    title: "Layanan Ini Cocok Untuk",
    items: [
      "Perusahaan yang butuh sistem internal (approval, tracking, reporting)",
      "Startup yang membangun platform atau produk SaaS",
      "Bisnis yang proses operasionalnya masih manual/spreadsheet",
      "Organisasi dengan tim lapangan yang butuh akses mobile",
      "Perusahaan yang ingin dashboard data real-time lintas cabang",
      "Founder yang ingin membangun MVP untuk validasi pasar",
    ],
  },
  features: [
    {
      title: "Auth & Role Management",
      description:
        "Login aman, role & permission granular — admin, manager, staff, atau client masing-masing hanya melihat yang relevan.",
    },
    {
      title: "Dashboard & Reporting",
      description:
        "Visualisasi data real-time: grafik, tabel filter, export Excel/PDF, dan KPI yang bisa dipantau sekilas.",
    },
    {
      title: "Workflow & Otomasi",
      description:
        "Approval berjenjang, notifikasi otomatis, status tracking, dan alur kerja yang mengikuti SOP perusahaan Anda.",
    },
    {
      title: "API & Integrasi",
      description:
        "REST API untuk integrasi dengan sistem lain — accounting, payment, WhatsApp, atau aplikasi mobile.",
    },
    {
      title: "Responsive di Semua Device",
      description:
        "Berjalan optimal di desktop dan mobile browser — tim lapangan bisa input data langsung dari HP.",
    },
    {
      title: "Backup & Keamanan",
      description:
        "Backup database otomatis, enkripsi, audit log, dan praktik keamanan standar industri.",
    },
  ],
  approach: {
    title: "Pendekatan Development Kami",
    paragraphs: [
      "Web application dimulai dari pemahaman proses bisnis, bukan dari teknologi. Kami petakan siapa melakukan apa, data apa yang mengalir, dan di mana bottleneck terjadi — lalu merancang sistem yang menghilangkan friksi tersebut.",
      "Kami bangun dengan arsitektur API-first: backend NestJS/Laravel, frontend Next.js, dan database PostgreSQL. Struktur ini memungkinkan web app Anda berkembang — misalnya menambah aplikasi mobile nanti tanpa membangun ulang backend.",
      "Development dibagi milestone dengan demo berkala, sehingga Anda melihat progress nyata dan bisa memberi feedback sejak awal.",
    ],
  },
  tech: [
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS/GCP",
  ],
  examples: [
    {
      title: "Portal Agatha — Sistem Informasi Lingkungan",
      description:
        "Web application untuk pengelolaan data umat, verifikasi, dan koordinasi kegiatan — digitalisasi administrasi komunitas.",
    },
    {
      title: "NuViral — SaaS AI Platform",
      description:
        "Platform SaaS multi-tenant dengan subscription billing, manajemen tim, dan integrasi 9 AI service — contoh web app yang menjadi produk bisnis.",
    },
    {
      title: "Use case: Sistem Approval Internal",
        description:
        "Web app untuk pengajuan cuti, reimbursement, dan PO dengan approval berjenjang — memangkas proses email/chat manual.",
    },
  ],
  advantages: [
    "Satu platform untuk seluruh tim — data terpusat dan real-time",
    "Tidak perlu install: cukup browser, bisa diakses dari mana saja",
    "Mengotomasi pekerjaan repetitif dan mengurangi human error",
    "Lebih hemat daripada membangun aplikasi desktop + mobile terpisah",
    "Bisa dikembangkan menjadi produk SaaS yang menghasilkan revenue",
  ],
  limitations: [
    "Memerlukan koneksi internet (kecuali dibangun dengan offline-mode khusus)",
    "Untuk fitur hardware-intensive (print langsung, akses kamera kompleks) lebih terbatas dibanding native app",
    "Timeline development lebih panjang dibanding website informasi biasa",
  ],
  pricing: {
    range: "Rp 20.000.000 – Rp 100.000.000+",
    factors: [
      "Jumlah modul dan kompleksitas logika bisnis",
      "Jumlah role pengguna dan tingkat permission",
      "Kebutuhan reporting, export, dan visualisasi data",
      "Integrasi dengan sistem eksternal (API pihak ketiga)",
      "Kebutuhan multi-tenant untuk model SaaS",
    ],
  },
  faqs: [
    {
      question: "Apa bedanya web application dengan website biasa?",
      answer:
        "Website biasa bersifat informatif — pengunjung membaca konten. Web application bersifat interaktif — pengguna login, menginput data, dan menjalankan proses bisnis. Contoh: website = brosur online, web app = sistem kasir, dashboard manajemen, atau portal member.",
    },
    {
      question: "Apakah web app bisa berjalan offline?",
      answer:
        "Bisa dibuat dengan teknologi Progressive Web App (PWA) yang menyimpan data lokal dan sinkronisasi saat online kembali. Cocok untuk tim lapangan dengan sinyal tidak stabil — kami bisa evaluasi apakah kebutuhan Anda memerlukannya.",
    },
    {
      question: "Bagaimana keamanan data di web application?",
      answer:
        "Kami menerapkan enkripsi HTTPS, password hashing, proteksi SQL injection/XSS, role-based access control, audit log, dan backup otomatis. Untuk kebutuhan compliance khusus (misalnya data medis), kami bisa menyesuaikan standar keamanannya.",
    },
    {
      question: "Bisakah web app saya jadi aplikasi mobile juga?",
      answer:
        "Bisa melalui dua jalur: PWA (web app yang bisa di-install di HP seperti aplikasi) atau membangun aplikasi mobile yang terhubung ke API backend yang sama. Kami akan rekomendasikan jalur paling efisien untuk use case Anda.",
    },
    {
      question: "Berapa lama development web application?",
      answer:
        "MVP dengan fitur inti: 6-10 minggu. Platform kompleks dengan banyak modul: 3-6 bulan. Kami selalu sarankan mulai dari scope inti, launch, lalu iterasi berdasarkan feedback pengguna nyata.",
    },
  ],

  pillar: {
    href: "/jasa-pembuatan-aplikasi",
    label: "Jasa Pembuatan Aplikasi",
  },
  relatedServices: [
    { href: "/jasa-custom-software", label: "Custom Software" },
    {
      href: "/jasa-pembuatan-sistem-informasi",
      label: "Sistem Informasi",
    },
    { href: "/jasa-website-custom", label: "Website Custom" },
    { href: "/jasa-aplikasi-mobile", label: "Aplikasi Mobile" },
  ],
  relatedPortfolio: [
    { href: "/portfolio/pos-system", label: "Portal Agatha" },
    { href: "/portfolio/saas-dashboard", label: "NuViral AI" },
    { href: "/portfolio/clinic-management", label: "Teman Sejiwa" },
  ],
  relatedArticles: [
    {
      href: "/blog/cara-memilih-software-house",
      label: "Cara Memilih Software House yang Tepat",
    },
  ],
};

export const metadata: Metadata = {
  title: "Jasa Pembuatan Web Application & Sistem | Nufanas",
  description:
    "Jasa pembuatan web application: sistem internal, dashboard, portal, platform SaaS. Multi-user, API, reporting. Untuk bisnis di seluruh Indonesia.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/jasa-web-application`,
  },
  openGraph: {
    title: "Jasa Pembuatan Web Application & Sistem | Nufanas",
    description:
      "Software berbasis browser untuk bisnis Anda — login, database, dashboard, dan otomasi proses. Akses dari mana saja.",
    url: `${SITE_CONFIG.url}/jasa-web-application`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetail content={content} />;
}
