import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ServiceDetail,
  ServicePageContent,
} from "@/components/services/service-detail";

const content: ServicePageContent = {
  path: "/jasa-aplikasi-android",
  heading: "Jasa Pembuatan Aplikasi Android",
  eyebrow: "Aplikasi Android",
  intro:
    "Aplikasi Android untuk bisnis Anda — dari konsep hingga rilis di Google Play Store. Kami membangun dengan Kotlin native atau Flutter cross-platform, disesuaikan dengan budget dan kebutuhan performa aplikasi Anda.",
  highlights: [
    "Native Kotlin atau Flutter sesuai kebutuhan",
    "Desain mengikuti Material Design guidelines",
    "Proses publish ke Google Play Store sampai selesai",
    "Integrasi backend, notifikasi, dan fitur device",
    "Garansi bug fixing pasca-rilis",
  ],
  priceLabel: "Mulai Rp 20.000.000",
  serviceType: "Mobile App Development",

  problem: {
    title: "Kenapa Android Dulu?",
    paragraphs: [
      "Android menguasai lebih dari 80% pasar smartphone Indonesia. Jika target pengguna Anda adalah masyarakat luas — dari karyawan lapangan hingga pelanggan retail — Android adalah platform yang tidak bisa dilewatkan.",
      "Tantangannya: membuat aplikasi Android yang baik bukan sekadar membungkus website. Pengguna berekspektasi aplikasi yang cepat, hemat kuota, bekerja offline, dan mengikuti standar navigasi Android. Aplikasi yang dibuat asal cepat mendapat rating buruk dan di-uninstall.",
    ],
  },
  forWhom: {
    title: "Layanan Ini Cocok Untuk",
    items: [
      "Bisnis yang pelanggannya mayoritas pengguna Android",
      "Perusahaan dengan tim lapangan yang butuh aplikasi internal",
      "Startup yang membangun produk mobile-first untuk pasar Indonesia",
      "Brand yang ingin channel loyalitas via aplikasi (poin, promo, order)",
      "Perusahaan yang butuh aplikasi dengan akses fitur device (kamera, GPS, Bluetooth)",
      "Bisnis yang websitenya sudah jalan dan siap naik ke level aplikasi",
    ],
  },
  features: [
    {
      title: "UI/UX Material Design",
      description:
        "Antarmuka mengikuti pedoman Android — familiar untuk pengguna, cepat dipahami, dan nyaman dipakai sehari-hari.",
    },
    {
      title: "Push Notification",
      description:
        "Notifikasi promo, status pesanan, atau reminder via Firebase Cloud Messaging — channel engagement paling efektif.",
    },
    {
      title: "Fitur Device Lengkap",
      description:
        "Kamera, GPS/maps, Bluetooth, fingerprint, QR scanner, dan sensor lain sesuai kebutuhan aplikasi Anda.",
    },
    {
      title: "Mode Offline",
      description:
        "Data tersimpan lokal dan sinkronisasi saat online — penting untuk tim lapangan dengan sinyal tidak stabil.",
    },
    {
      title: "Publish ke Play Store",
      description:
        "Kami urus sampai tuntas: asset store listing, screenshot, review policy, hingga aplikasi tersedia untuk di-download.",
    },
    {
      title: "Backend & Admin Panel",
      description:
        "API dan dashboard admin untuk mengelola konten, pengguna, dan data aplikasi tanpa perlu update di Play Store.",
    },
  ],
  approach: {
    title: "Native vs Cross-Platform — Kami Bantu Pilih",
    paragraphs: [
      "Jika aplikasi Anda memerlukan performa maksimal atau integrasi device yang dalam, Kotlin native adalah pilihan tepat. Jika Anda juga ingin versi iOS nanti dengan budget efisien, Flutter memungkinkan satu codebase untuk dua platform.",
      "Kami tidak memaksakan teknologi — di sesi konsultasi kami jelaskan trade-off masing-masing pendekatan untuk kasus spesifik Anda, termasuk estimasi biaya dan timeline yang realistis.",
      "Setelah development, aplikasi melalui tahap testing di berbagai device dan versi Android, UAT bersama tim Anda, lalu proses review Play Store yang kami dampingi sampai approved.",
    ],
  },
  tech: ["Kotlin", "Flutter", "React Native", "Firebase", "Node.js", "PostgreSQL"],
  examples: [
    {
      title: "Use case: Aplikasi Tim Lapangan",
      description:
        "Aplikasi untuk sales/kurir/teknisi dengan GPS tracking, foto bukti pekerjaan, dan form offline — data langsung masuk ke dashboard kantor.",
    },
    {
      title: "Use case: Aplikasi Loyalitas Retail",
      description:
        "Pelanggan mengumpulkan poin, mendapat promo eksklusif, dan order ulang dari aplikasi — meningkatkan repeat order tanpa biaya iklan.",
    },
    {
      title: "Use case: Aplikasi Booking Layanan",
      description:
        "Booking jadwal, pembayaran DP, tracking status pekerjaan, dan review — seperti yang kami bangun untuk layanan berbasis appointment.",
    },
  ],
  advantages: [
    "Menjangkau pasar smartphone terbesar di Indonesia",
    "Presence permanen di HP pelanggan — brand selalu terlihat",
    "Push notification = channel marketing gratis setelah install",
    "Akses fitur device penuh untuk pengalaman yang lebih kaya",
    "Kepercayaan pengguna lebih tinggi pada aplikasi official",
  ],
  limitations: [
    "Biaya lebih tinggi dibanding website — ada biaya development + maintenance",
    "Pengguna harus download dulu — perlu strategi untuk mendorong install",
    "Play Store review bisa memakan waktu beberapa hari",
    "Update perlu melewati proses review store (berbeda dengan web yang langsung live)",
  ],
  pricing: {
    range: "Rp 20.000.000 – Rp 80.000.000",
    factors: [
      "Kompleksitas fitur (login, payment, maps, chat, dll)",
      "Native Kotlin vs cross-platform Flutter",
      "Kebutuhan backend dan admin panel",
      "Integrasi pihak ketiga (payment, shipping, dsb)",
      "Jumlah layar dan kedalaman desain UI/UX",
    ],
  },
  faqs: [
    {
      question: "Berapa biaya pembuatan aplikasi Android?",
      answer:
        "Aplikasi sederhana (informasi, katalog, booking) mulai Rp 20 juta. Aplikasi dengan fitur kompleks (payment, chat, tracking real-time) Rp 40-80 juta. Konsultasi gratis untuk estimasi akurat sesuai fitur yang Anda butuhkan.",
    },
    {
      question: "Apakah sekaligus bisa dibuat versi iOS?",
      answer:
        "Bisa — dengan Flutter atau React Native, satu codebase menghasilkan aplikasi Android dan iOS sekaligus, biasanya menambah 30-50% dari biaya satu platform. Jauh lebih hemat dibanding dua project native terpisah.",
    },
    {
      question: "Apakah akun Google Play Console termasuk?",
      answer:
        "Akun Google Play Console ($25 sekali bayar ke Google) biasanya atas nama client agar Anda memiliki kepemilikan penuh. Kami bantu proses pendaftaran hingga publish.",
    },
    {
      question: "Berapa lama aplikasi Android selesai?",
      answer:
        "Aplikasi sederhana 6-8 minggu, aplikasi kompleks 3-5 bulan — termasuk testing dan proses review Play Store. Timeline detail kami sertakan di proposal.",
    },
    {
      question: "Bagaimana update aplikasi setelah rilis?",
      answer:
        "Update minor (bug fix, konten) bisa kami kerjakan dalam paket maintenance. Update besar (fitur baru) diestimasi per scope. Konfigurasi yang sering berubah kami tempatkan di admin panel agar tidak perlu update aplikasi.",
    },
  ],

  pillar: {
    href: "/jasa-pembuatan-aplikasi",
    label: "Jasa Pembuatan Aplikasi",
  },
  relatedServices: [
    { href: "/jasa-aplikasi-ios", label: "Jasa Aplikasi iOS" },
    { href: "/jasa-aplikasi-mobile", label: "Aplikasi Mobile Cross-Platform" },
    {
      href: "/jasa-pembuatan-aplikasi-bisnis",
      label: "Aplikasi Bisnis",
    },
    { href: "/jasa-web-application", label: "Web Application" },
  ],
  relatedArticles: [
    {
      href: "/blog/jasa-pembuatan-aplikasi-android",
      label: "Panduan Memilih Vendor Aplikasi Android",
    },
  ],
};

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Android Profesional | Nufanas",
  description:
    "Jasa pembuatan aplikasi Android untuk bisnis — Kotlin native atau Flutter, sampai publish di Play Store. Konsultasi gratis. Mulai Rp 20 juta.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/jasa-aplikasi-android`,
  },
  openGraph: {
    title: "Jasa Pembuatan Aplikasi Android Profesional | Nufanas",
    description:
      "Aplikasi Android bisnis Anda dari konsep hingga rilis di Play Store — native atau cross-platform.",
    url: `${SITE_CONFIG.url}/jasa-aplikasi-android`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetail content={content} />;
}
