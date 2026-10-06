import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ServiceDetail,
  ServicePageContent,
} from "@/components/services/service-detail";

const content: ServicePageContent = {
  path: "/jasa-aplikasi-ios",
  heading: "Jasa Pembuatan Aplikasi iOS",
  eyebrow: "Aplikasi iOS",
  intro:
    "Aplikasi iPhone dan iPad untuk bisnis yang menargetkan segmen pengguna Apple — dengan Swift native atau cross-platform yang tetap terasa seperti aplikasi iOS sesungguhnya. Kami dampingi hingga lolos review App Store.",
  highlights: [
    "Swift native atau Flutter/React Native cross-platform",
    "Desain mengikuti Apple Human Interface Guidelines",
    "Proses submit & review App Store kami dampingi",
    "Face ID, Apple Pay, Sign in with Apple, dan fitur iOS lainnya",
    "TestFlight beta testing sebelum rilis publik",
  ],
  priceLabel: "Mulai Rp 25.000.000",
  serviceType: "iOS App Development",

  problem: {
    title: "Tantangan Khusus Platform iOS",
    paragraphs: [
      "Pengguna iOS di Indonesia jumlahnya lebih kecil dari Android, tapi secara demografi mereka adalah segmen dengan daya beli tinggi — penting untuk brand premium, fintech, e-commerce menengah ke atas, dan layanan subscription.",
      "Tantangannya: Apple terkenal ketat dalam review aplikasi. Guideline UI, privasi, dan kualitas yang tidak dipenuhi membuat aplikasi ditolak berulang kali. Developer tanpa pengalaman App Store sering terjebak berminggu-minggu di tahap ini.",
    ],
  },
  forWhom: {
    title: "Layanan Ini Cocok Untuk",
    items: [
      "Brand yang menargetkan segmen pengguna premium",
      "Startup dengan model subscription atau in-app purchase",
      "Perusahaan yang aplikasi Android-nya sudah ada dan ingin ekspansi",
      "Bisnis yang klien korporatnya mayoritas pengguna iPhone",
      "Produk yang memerlukan fitur Apple (Apple Pay, HealthKit, dll)",
      "Perusahaan enterprise dengan kebijakan device iPhone",
    ],
  },
  features: [
    {
      title: "UI Native iOS",
      description:
        "Antarmuka yang terasa natural di iPhone — navigasi, gesture, dan animasi mengikuti ekspektasi pengguna Apple.",
    },
    {
      title: "Integrasi Ekosistem Apple",
      description:
        "Face ID/Touch ID, Sign in with Apple, Apple Pay, push notification APNs, dan integrasi perangkat Apple lainnya.",
    },
    {
      title: "In-App Purchase & Subscription",
      description:
        "Monetisasi via StoreKit — subscription, consumable, atau non-consumable purchase sesuai model bisnis Anda.",
    },
    {
      title: "TestFlight Beta Testing",
      description:
        "Distribusi versi beta ke tim Anda dan tester terbatas sebelum rilis publik — masalah ketahuan lebih awal.",
    },
    {
      title: "App Store Optimization",
      description:
        "Metadata, screenshot, dan deskripsi store listing dioptimasi agar aplikasi mudah ditemukan di App Store.",
    },
    {
      title: "Backend & API",
      description:
        "Backend yang sama bisa melayani aplikasi Android dan web — satu infrastruktur untuk semua platform.",
    },
  ],
  approach: {
    title: "Pendekatan Development Kami",
    paragraphs: [
      "Kami mulai dengan menentukan pendekatan teknis: Swift native untuk performa dan integrasi Apple terdalam, atau Flutter/React Native jika Anda juga butuh versi Android dengan satu codebase.",
      "Sepanjang development, kami uji di device iPhone dan iPad nyata — bukan hanya simulator. Sebelum submit, kami lakukan pre-review terhadap checklist App Store untuk meminimalkan penolakan.",
      "Review Apple biasanya memakan waktu 1-3 hari. Jika ada rejection, kami tangani perbaikannya sampai aplikasi Anda live di App Store.",
    ],
  },
  tech: ["Swift", "SwiftUI", "Flutter", "React Native", "Firebase", "Node.js"],
  examples: [
    {
      title: "Use case: Aplikasi Membership Premium",
      description:
        "Aplikasi iOS untuk brand premium dengan konten eksklusif, subscription via in-app purchase, dan integrasi Apple Pay.",
    },
    {
      title: "Use case: Aplikasi Internal Enterprise",
        description:
        "Aplikasi karyawan untuk perusahaan dengan fleet iPhone — approval, task management, dan notifikasi via Apple Business Manager.",
    },
    {
      title: "Use case: Companion App untuk Platform Web",
        description:
        "Versi iOS dari web application yang sudah ada — menggunakan backend API yang sama, fokus pada pengalaman mobile.",
    },
  ],
  advantages: [
    "Menjangkau segmen pengguna dengan daya beli tinggi",
    "Ekosistem pembayaran Apple mempermudah monetisasi",
    "Standar privasi Apple meningkatkan kepercayaan pengguna",
    "Fragmentasi device kecil — testing lebih terkontrol",
    "Presence di App Store menambah kredibilitas brand",
  ],
  limitations: [
    "Review App Store lebih ketat — timeline submit bisa lebih panjang",
    "Biaya Apple Developer $99/tahun diperlukan untuk publish",
    "In-app purchase dikenakan komisi Apple 15-30%",
    "Untuk mayoritas pasar Indonesia, Android biasanya prioritas pertama",
  ],
  pricing: {
    range: "Rp 25.000.000 – Rp 90.000.000",
    factors: [
      "Native Swift vs cross-platform",
      "Kompleksitas fitur dan integrasi Apple services",
      "Kebutuhan in-app purchase atau subscription",
      "Dukungan iPad dan orientation",
      "Backend, admin panel, dan integrasi API",
    ],
  },
  faqs: [
    {
      question: "Kenapa aplikasi iOS biasanya lebih mahal dari Android?",
      answer:
        "Beberapa faktor: standar review Apple lebih ketat sehingga butuh polish lebih, tooling dan device testing iOS lebih mahal, dan pasar developer iOS lebih terbatas. Namun dengan Flutter/React Native, selisih biayanya bisa diminimalkan.",
    },
    {
      question: "Apakah saya perlu akun Apple Developer sendiri?",
      answer:
        "Ya, disarankan — akun Apple Developer Program ($99/tahun) atas nama perusahaan Anda memastikan kepemilikan penuh atas aplikasi. Kami bantu proses pendaftaran dan submitnya.",
    },
    {
      question: "Apakah bisa publish ke App Store dan Play Store sekaligus?",
      answer:
        "Bisa dengan pendekatan cross-platform (Flutter/React Native) — satu codebase untuk dua platform. Ini biasanya pilihan paling efisien untuk bisnis yang menargetkan kedua pasar.",
    },
    {
      question: "Bagaimana jika aplikasi ditolak Apple?",
      answer:
        "Kami dampingi sampai lolos — termasuk bagian dari scope. Pre-review checklist internal kami meminimalkan risiko rejection. Jika ditolak, kami perbaiki dan resubmit tanpa biaya tambahan.",
    },
    {
      question: "Berapa lama proses review App Store?",
      answer:
        "Normalnya 24-48 jam, tapi bisa lebih lama untuk aplikasi pertama atau kategori tertentu (fintech, health). Kami menyertakan buffer waktu ini dalam estimasi timeline project.",
    },
  ],

  pillar: {
    href: "/jasa-pembuatan-aplikasi",
    label: "Jasa Pembuatan Aplikasi",
  },
  relatedServices: [
    { href: "/jasa-aplikasi-android", label: "Jasa Aplikasi Android" },
    { href: "/jasa-aplikasi-mobile", label: "Aplikasi Mobile Cross-Platform" },
    { href: "/jasa-custom-software", label: "Custom Software" },
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
  title: "Jasa Pembuatan Aplikasi iOS & iPhone | Nufanas",
  description:
    "Jasa pembuatan aplikasi iOS untuk bisnis — Swift native atau cross-platform, dampingi hingga lolos review App Store. Mulai Rp 25 juta.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/jasa-aplikasi-ios`,
  },
  openGraph: {
    title: "Jasa Pembuatan Aplikasi iOS & iPhone | Nufanas",
    description:
      "Aplikasi iPhone dan iPad untuk bisnis Anda — dari development hingga live di App Store.",
    url: `${SITE_CONFIG.url}/jasa-aplikasi-ios`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetail content={content} />;
}
