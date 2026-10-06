import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ServiceDetail,
  ServicePageContent,
} from "@/components/services/service-detail";

const content: ServicePageContent = {
  path: "/jasa-aplikasi-mobile",
  heading: "Jasa Pembuatan Aplikasi Mobile (Android & iOS)",
  eyebrow: "Aplikasi Mobile",
  intro:
    "Satu codebase untuk Android dan iOS sekaligus — dengan Flutter atau React Native. Pendekatan cross-platform memangkas biaya dan waktu development hingga 40% dibanding membangun dua aplikasi native terpisah, tanpa mengorbankan kualitas.",
  highlights: [
    "Satu codebase → rilis di Play Store dan App Store",
    "Hemat 30-40% dibanding dua aplikasi native terpisah",
    "Flutter (Dart) atau React Native sesuai kebutuhan",
    "Performa mendekati native untuk mayoritas use case",
    "Update fitur cukup sekali untuk kedua platform",
  ],
  priceLabel: "Mulai Rp 25.000.000",
  serviceType: "Mobile App Development",

  problem: {
    title: "Dilema Membangun Dua Aplikasi Sekaligus",
    paragraphs: [
      "Pengguna Indonesia terbagi antara Android (mayoritas) dan iOS (segmen premium). Membangun aplikasi native untuk keduanya berarti dua codebase, dua tim, dan biaya hampir dua kali lipat — belum lagi maintenance ganda setiap kali ada perubahan fitur.",
      "Teknologi cross-platform modern seperti Flutter telah matang: performa mendekati native, akses fitur device lengkap, dan digunakan oleh aplikasi besar seperti Google Pay dan Alibaba. Untuk mayoritas aplikasi bisnis, ini adalah pilihan paling rasional.",
    ],
  },
  forWhom: {
    title: "Layanan Ini Cocok Untuk",
    items: [
      "Startup yang ingin launch di dua platform dengan budget efisien",
      "Bisnis yang butuh aplikasi customer-facing sekaligus internal",
      "Perusahaan yang ingin MVP cepat untuk validasi pasar",
      "Brand dengan pengguna terbagi Android dan iOS",
      "Bisnis yang menginginkan satu tim untuk maintenance jangka panjang",
      "Project dengan fitur yang tidak memerlukan integrasi device terdalam",
    ],
  },
  features: [
    {
      title: "Dual Platform Sekaligus",
      description:
        "Satu codebase Flutter/React Native menghasilkan aplikasi Android dan iOS — UI konsisten, biaya efisien.",
    },
    {
      title: "Fitur Mobile Lengkap",
      description:
        "Push notification, kamera, GPS, biometric login, QR scanner, offline mode, dan deep linking.",
    },
    {
      title: "Backend & Admin Panel",
      description:
        "API backend dan dashboard admin untuk mengelola konten dan pengguna kedua platform dari satu tempat.",
    },
    {
      title: "Publish Kedua Store",
      description:
        "Kami urus submit ke Google Play Store dan Apple App Store sampai aplikasi Anda tersedia untuk publik.",
    },
    {
      title: "Analytics & Crash Reporting",
      description:
        "Firebase Analytics dan Crashlytics terpasang — Anda tahu bagaimana pengguna memakai aplikasi dan di mana bug terjadi.",
    },
    {
      title: "Over-the-Air Update",
      description:
        "Kemampuan update konten dan perbaikan UI tertentu tanpa harus menunggu review store.",
    },
  ],
  approach: {
    title: "Flutter atau React Native?",
    paragraphs: [
      "Keduanya matang dan battle-tested. Flutter unggul dalam performa rendering dan konsistensi UI antar platform — pilihan utama kami untuk aplikasi baru. React Native cocok jika tim Anda sudah familiar dengan ekosistem JavaScript/React.",
      "Kapan pun memungkinkan kami sarankan cross-platform. Native hanya kami rekomendasikan jika aplikasi Anda memerlukan hal spesifik: game berat, AR kompleks, integrasi hardware dalam, atau UI yang harus 100% native feel.",
      "Proses kami: prototype desain → development bertahap dengan build internal mingguan → beta testing via TestFlight/Play Internal → submit kedua store → garansi bug fixing.",
    ],
  },
  tech: ["Flutter", "Dart", "React Native", "Firebase", "Node.js", "PostgreSQL"],
  examples: [
    {
      title: "Use case: Aplikasi Delivery & Tracking",
      description:
        "Aplikasi customer + aplikasi kurir dalam satu codebase — real-time tracking, notifikasi status, dan rating setelah pengiriman.",
    },
    {
      title: "Use case: Aplikasi Komunitas & Event",
      description:
        "Feed, event RSVP, chat grup, dan notifikasi untuk komunitas — rilis di dua platform dengan satu budget.",
    },
    {
      title: "Use case: Aplikasi Edukasi & Kursus",
      description:
        "Video materi, kuis, progress tracking, dan sertifikat — mirip platform e-learning yang telah kami bangun di versi web.",
    },
  ],
  advantages: [
    "Satu tim, satu codebase, satu biaya maintenance",
    "Rilis serentak di Android dan iOS",
    "Fitur baru dan bug fix cukup dikerjakan sekali",
    "Iterasi cepat — ideal untuk startup yang masih mencari product-market fit",
    "Performa modern mendekati native untuk mayoritas use case",
  ],
  limitations: [
    "Untuk aplikasi sangat berat (game 3D, AR intensif) native tetap lebih optimal",
    "Ukuran aplikasi sedikit lebih besar dibanding native murni",
    "Fitur sangat spesifik platform kadang perlu kode native tambahan",
    "Update framework mengikuti roadmap Flutter/React Native",
  ],
  pricing: {
    range: "Rp 25.000.000 – Rp 90.000.000",
    factors: [
      "Kompleksitas fitur dan jumlah layar",
      "Kebutuhan backend, admin panel, dan API",
      "Integrasi pihak ketiga (payment, maps, chat)",
      "Fitur device yang dibutuhkan (GPS, kamera, biometric)",
      "In-app purchase atau payment gateway",
    ],
  },
  faqs: [
    {
      question: "Apakah aplikasi cross-platform kualitasnya setara native?",
      answer:
        "Untuk 90% aplikasi bisnis — ya. Flutter mengkompilasi ke kode native dan pengguna umumnya tidak bisa membedakan. Perbedaan baru terasa pada kasus ekstrem: game 3D, video processing berat, atau animasi sangat kompleks.",
    },
    {
      question: "Lebih baik Flutter atau React Native?",
      answer:
        "Keduanya valid. Flutter cenderung lebih stabil performanya dan menjadi default kami untuk project baru. React Native cocok jika Anda sudah punya tim JavaScript atau ingin share logic dengan website React yang sudah ada.",
    },
    {
      question: "Berapa lama pembuatan aplikasi mobile?",
      answer:
        "MVP dengan fitur inti: 8-10 minggu. Aplikasi dengan fitur lengkap (payment, chat, tracking): 3-5 bulan. Satu codebase cross-platform menghemat sekitar 30-40% waktu dibanding dua project native.",
    },
    {
      question: "Apakah bisa mulai Android dulu, iOS menyusul?",
      answer:
        "Bisa dan sering kami sarankan untuk validasi. Dengan cross-platform, menambah platform kedua nanti tidak memerlukan rebuild — cukup build dan submit ke App Store.",
    },
    {
      question: "Siapa yang memiliki source code aplikasi?",
      answer:
        "Anda. Setelah pelunasan, seluruh source code, akun store, dan dokumentasi diserahkan — Anda bebas melanjutkan dengan tim internal atau vendor lain.",
    },
  ],

  pillar: {
    href: "/jasa-pembuatan-aplikasi",
    label: "Jasa Pembuatan Aplikasi",
  },
  relatedServices: [
    { href: "/jasa-aplikasi-android", label: "Aplikasi Android" },
    { href: "/jasa-aplikasi-ios", label: "Aplikasi iOS" },
    {
      href: "/jasa-pembuatan-aplikasi-bisnis",
      label: "Aplikasi Bisnis",
    },
    { href: "/jasa-web-application", label: "Web Application" },
  ],
  relatedArticles: [
    {
      href: "/blog/jasa-pembuatan-aplikasi-android",
      label: "Panduan Memilih Vendor Aplikasi",
    },
  ],
};

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Mobile Android & iOS | Nufanas",
  description:
    "Jasa pembuatan aplikasi mobile cross-platform: satu codebase untuk Android & iOS dengan Flutter/React Native. Hemat hingga 40%. Mulai Rp 25 juta.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/jasa-aplikasi-mobile`,
  },
  openGraph: {
    title: "Jasa Pembuatan Aplikasi Mobile Android & iOS | Nufanas",
    description:
      "Satu codebase untuk dua platform — Flutter/React Native, rilis di Play Store dan App Store sekaligus.",
    url: `${SITE_CONFIG.url}/jasa-aplikasi-mobile`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetail content={content} />;
}
