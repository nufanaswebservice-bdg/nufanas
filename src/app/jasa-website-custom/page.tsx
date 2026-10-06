import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ServiceDetail,
  ServicePageContent,
} from "@/components/services/service-detail";

const content: ServicePageContent = {
  path: "/jasa-website-custom",
  heading: "Jasa Pembuatan Website Custom",
  eyebrow: "Website Custom",
  intro:
    "Website yang dibangun dari nol mengikuti kebutuhan bisnis Anda — bukan template yang dipaksakan. Ketika alur kerja, fitur, atau pengalaman pengguna yang Anda butuhkan tidak ada di solusi jadi, website custom adalah jawabannya.",
  highlights: [
    "Desain dan fitur 100% mengikuti proses bisnis Anda",
    "Bukan WordPress/template — dibangun dengan Next.js modern",
    "Skalabel: mudah ditambah fitur seiring bisnis berkembang",
    "Source code menjadi milik Anda sepenuhnya",
    "Performa dan SEO superior dibanding website template",
  ],
  priceLabel: "Mulai Rp 5.000.000",
  serviceType: "Website Development",

  problem: {
    title: "Kapan Website Template Tidak Cukup",
    paragraphs: [
      "Template dan page builder cocok untuk kebutuhan standar. Tapi ketika bisnis Anda punya alur unik — misalnya sistem booking dengan aturan khusus, kalkulator harga dinamis, portal member dengan level berbeda, atau integrasi ke sistem internal — template mulai menghambat.",
      "Tanda-tanda Anda butuh website custom: tim sering bekerja manual karena website tidak bisa mengakomodasi proses, plugin template yang ditumpuk membuat website lambat dan rentan, atau Anda ingin pengalaman pengguna yang berbeda dari kompetitor.",
    ],
  },
  forWhom: {
    title: "Layanan Ini Cocok Untuk",
    items: [
      "Bisnis dengan proses atau penawaran yang tidak standar",
      "Startup yang membangun produk digital atau MVP platform",
      "Perusahaan yang websitenya menjadi channel revenue utama",
      "Brand yang butuh pengalaman visual dan interaksi berbeda",
      "Organisasi dengan kebutuhan portal member atau komunitas",
      "Bisnis yang frustrasi dengan batasan WordPress/page builder",
    ],
  },
  features: [
    {
      title: "Discovery & Arsitektur",
      description:
        "Kami petakan kebutuhan bisnis, alur pengguna, dan struktur data terlebih dahulu — bukan langsung coding.",
    },
    {
      title: "UI/UX Design Khusus",
      description:
        "Wireframe dan mockup desain dibuat khusus untuk brand Anda, dengan approval sebelum development.",
    },
    {
      title: "Fitur Sesuai Kebutuhan",
      description:
        "Booking engine, portal member, kalkulator, sistem voting, integrasi API — apapun yang dibutuhkan proses bisnis Anda.",
    },
    {
      title: "Kepemilikan Penuh",
      description:
        "Source code diserahkan penuh setelah pelunasan — Anda tidak terkunci pada vendor mana pun.",
    },
    {
      title: "Integrasi Sistem",
      description:
        "Hubungkan website dengan CRM, ERP, payment gateway, atau sistem internal melalui API.",
    },
    {
      title: "Dokumentasi & Handover",
      description:
        "Dokumentasi teknis dan training untuk tim internal Anda agar bisa mengelola dan mengembangkan sistem.",
    },
  ],
  approach: {
    title: "Pendekatan Development Kami",
    paragraphs: [
      "Proses dimulai dari discovery workshop: kami gali kebutuhan, target pengguna, dan metrik keberhasilan project. Outputnya adalah dokumen scope yang disepakati bersama — jelas fitur apa saja yang masuk dan estimasi biayanya.",
      "Development dilakukan bertahap dengan milestone yang bisa Anda review. Kami menggunakan Next.js dan TypeScript untuk codebase yang maintainable, ditambah automated testing untuk fitur kritikal.",
      "Setelah launch, kami tidak menghilang — tersedia masa garansi dan paket maintenance untuk pengembangan berkelanjutan.",
    ],
  },
  tech: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Docker"],
  examples: [
    {
      title: "NuViral — Platform AI Creative Studio",
      description:
        "Platform SaaS dengan 9 AI tools dalam satu dashboard, sistem subscription, dan manajemen tim — contoh website custom kompleks yang kami bangun.",
    },
    {
      title: "Teman Sejiwa — Platform Konseling",
      description:
        "Platform booking sesi konseling dengan video call, jurnal mood, dan sistem rating psikolog — fitur yang mustahil dibuat dengan template.",
    },
    {
      title: "Use case: Portal Member Komunitas",
      description:
        "Portal dengan level keanggotaan, konten eksklusif per tier, dan event RSVP — menggantikan pengelolaan manual via spreadsheet.",
    },
  ],
  advantages: [
    "Fitur dan alur persis seperti yang bisnis Anda butuhkan",
    "Performa jauh lebih cepat dibanding website template berat",
    "Tidak ada batasan plugin — semua bisa dibuat",
    "Keamanan lebih baik: tidak bergantung pada plugin pihak ketiga yang rentan",
    "Mudah dikembangkan bertahap mengikuti pertumbuhan bisnis",
  ],
  limitations: [
    "Biaya awal lebih tinggi dibanding website template",
    "Timeline lebih panjang karena dibangun dari nol",
    "Memerlukan keterlibatan Anda di fase discovery dan review",
  ],
  pricing: {
    range: "Rp 5.000.000 – Rp 50.000.000+",
    factors: [
      "Kompleksitas fitur dan jumlah custom logic",
      "Jumlah tipe pengguna dan level akses",
      "Integrasi dengan sistem eksternal",
      "Tingkat kustomisasi desain dan animasi",
      "Volume konten dan kebutuhan migrasi data",
    ],
  },
  faqs: [
    {
      question: "Apa bedanya website custom dengan website biasa?",
      answer:
        "Website biasa biasanya dibangun dari template atau CMS jadi seperti WordPress — cepat dan murah, tapi terbatas pada apa yang template sediakan. Website custom dibangun dari nol mengikuti kebutuhan spesifik Anda: fitur, alur, dan desain sepenuhnya bisa ditentukan.",
    },
    {
      question: "Apakah saya harus tahu teknis untuk memesan website custom?",
      answer:
        "Tidak. Tugas kami menerjemahkan kebutuhan bisnis Anda menjadi solusi teknis. Anda cukup menjelaskan masalah dan tujuan — kami yang merancang arsitektur, memilih teknologi, dan menjelaskan opsi dengan bahasa sederhana.",
    },
    {
      question: "Berapa lama pembuatan website custom?",
      answer:
        "Tergantung kompleksitas: website custom sederhana 4-6 minggu, platform dengan fitur kompleks 2-4 bulan. Kami memberikan timeline detail di proposal setelah sesi discovery.",
    },
    {
      question: "Bagaimana jika di tengah jalan ada perubahan kebutuhan?",
      answer:
        "Wajar terjadi. Kami bekerja dengan sistem milestone — perubahan kecil bisa diakomodasi di sprint berjalan, perubahan besar akan kami estimasi ulang biaya dan timelinenya untuk Anda setujui dulu.",
    },
    {
      question: "Apakah website custom bisa dikembangkan developer lain nanti?",
      answer:
        "Ya. Kami menulis kode dengan standar industri, struktur yang rapi, dan dokumentasi. Source code menjadi milik Anda sepenuhnya — tim internal atau vendor lain bisa melanjutkan pengembangan.",
    },
  ],

  pillar: { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
  relatedServices: [
    { href: "/jasa-web-application", label: "Jasa Web Application" },
    { href: "/jasa-website-company-profile", label: "Website Company Profile" },
    { href: "/jasa-custom-software", label: "Custom Software" },
    { href: "/layanan/website-booking", label: "Website Booking" },
  ],
  relatedPortfolio: [
    { href: "/portfolio/saas-dashboard", label: "NuViral AI Studio" },
    { href: "/portfolio/clinic-management", label: "Teman Sejiwa" },
  ],
  relatedArticles: [
    {
      href: "/blog/jasa-pembuatan-website-panduan-lengkap",
      label: "Jasa Pembuatan Website: Panduan Lengkap",
    },
    {
      href: "/blog/cara-memilih-software-house",
      label: "Cara Memilih Software House yang Tepat",
    },
  ],
};

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Custom dari Nol | Nufanas",
  description:
    "Jasa pembuatan website custom: desain & fitur mengikuti proses bisnis Anda, bukan template. Next.js, source code milik Anda. Mulai Rp 5 juta.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/jasa-website-custom`,
  },
  openGraph: {
    title: "Jasa Pembuatan Website Custom dari Nol | Nufanas",
    description:
      "Website yang dibangun dari nol mengikuti kebutuhan bisnis Anda — fitur, alur, dan desain sepenuhnya custom.",
    url: `${SITE_CONFIG.url}/jasa-website-custom`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetail content={content} />;
}
