import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ServiceDetail,
  ServicePageContent,
} from "@/components/services/service-detail";

const content: ServicePageContent = {
  path: "/jasa-pembuatan-sistem-informasi",
  heading: "Jasa Pembuatan Sistem Informasi",
  eyebrow: "Sistem Informasi",
  intro:
    "Sistem informasi yang menyatukan data dan proses perusahaan — dari ERP, CRM, HRIS, hingga sistem untuk klinik dan sekolah. Satu platform terpusat menggantikan spreadsheet, chat tercecer, dan laporan manual.",
  highlights: [
    "ERP, CRM, HRIS, dan sistem industri spesifik",
    "Data terpusat — satu sumber kebenaran untuk seluruh tim",
    "Modul bertahap: mulai dari yang paling dibutuhkan",
    "Role & permission detail untuk setiap departemen",
    "Laporan otomatis untuk pengambilan keputusan",
  ],
  priceLabel: "Mulai Rp 25.000.000",
  serviceType: "Enterprise Software Development",

  problem: {
    title: "Tanda Perusahaan Anda Butuh Sistem Informasi",
    paragraphs: [
      "Ketika data penjualan ada di satu Excel, data pelanggan di kepala sales, dan laporan harus direkap manual setiap bulan — perusahaan beroperasi dengan informasi yang tidak sinkron. Keputusan dibuat berdasarkan data yang sudah basi.",
      "Sistem informasi memusatkan semuanya: setiap transaksi, setiap interaksi pelanggan, dan setiap proses terekam di satu platform. Owner dan manager melihat kondisi bisnis real-time, bukan menunggu rekap mingguan.",
    ],
  },
  forWhom: {
    title: "Layanan Ini Cocok Untuk",
    items: [
      "Perusahaan yang operasionalnya tersebar di banyak spreadsheet",
      "Bisnis multi-cabang yang butuh kontrol terpusat",
      "Klinik dan faskes yang butuh sistem antrian & rekam medis",
      "Sekolah dan lembaga pendidikan (SIM akademik)",
      "Perusahaan dengan tim sales yang perlu pipeline tracking",
      "HR yang mengelola absensi, cuti, dan payroll manual",
    ],
  },
  features: [
    {
      title: "ERP (Enterprise Resource Planning)",
      description:
        "Integrasi purchasing, inventory, produksi, dan finance dalam satu sistem — proses ujung-ke-ujung yang terhubung.",
    },
    {
      title: "CRM (Customer Relationship Management)",
      description:
        "Pipeline penjualan, riwayat interaksi pelanggan, follow-up reminder, dan laporan performa tim sales.",
    },
    {
      title: "HRIS (Human Resource Information System)",
      description:
        "Database karyawan, absensi, pengajuan cuti, payroll, dan evaluasi performa dalam satu platform.",
    },
    {
      title: "Sistem Industri Spesifik",
      description:
        "SIMRS untuk klinik/rumah sakit, sistem akademik untuk sekolah, manajemen properti untuk developer — disesuaikan regulasi dan alur industri Anda.",
    },
    {
      title: "Dashboard & Business Intelligence",
      description:
        "KPI real-time, grafik tren, dan drill-down data — pengambilan keputusan berbasis data bukan feeling.",
    },
    {
      title: "Approval & Workflow Engine",
      description:
        "Pengajuan dan persetujuan berjenjang sesuai struktur organisasi — PO, reimbursement, cuti, dan lainnya otomatis mengalir.",
    },
  ],
  approach: {
    title: "Implementasi Bertahap, Bukan Big Bang",
    paragraphs: [
      "Kegagalan proyek sistem informasi paling sering terjadi karena mencoba mengubah semuanya sekaligus. Pendekatan kami berbeda: mulai dari modul yang paling dibutuhkan (pilot), stabilkan adopsi, lalu tambah modul berikutnya.",
      "Kami petakan proses yang ada dulu — termasuk 'cara tidak resmi' yang tim Anda lakukan untuk menyelesaikan pekerjaan. Sistem yang baik mengakomodasi realitas operasional, bukan idealisasi proses di atas kertas.",
      "Migrasi data dari Excel/sistem lama, training per departemen, dan pendampingan go-live adalah bagian dari implementasi — bukan add-on berbayar terpisah.",
    ],
  },
  tech: [
    "Next.js",
    "NestJS / Laravel",
    "PostgreSQL",
    "Redis",
    "Docker",
    "VPS/Cloud Private",
  ],
  examples: [
    {
      title: "Portal Agatha — Sistem Informasi Organisasi",
      description:
        "Portal pengelolaan data anggota, verifikasi, dan koordinasi kegiatan untuk komunitas — digitalisasi administrasi yang sebelumnya manual.",
    },
    {
      title: "Use case: SIM Klinik",
      description:
        "Pendaftaran pasien, antrian, rekam medis elektronik, resep, dan laporan kunjungan — terintegrasi dari front desk hingga kasir.",
    },
    {
      title: "Use case: CRM untuk Tim Sales",
      description:
        "Tracking lead dari masuk hingga closing, follow-up reminder, dan funnel report — tidak ada lagi lead yang 'hilang' karena lupa follow-up.",
    },
  ],
  advantages: [
    "Satu platform menggantikan banyak tools dan spreadsheet",
    "Visibilitas real-time atas seluruh operasional",
    "Audit trail lengkap — setiap perubahan tercatat siapa dan kapan",
    "Skalabel: menambah cabang atau departemen tinggal konfigurasi",
    "Data perusahaan tetap milik Anda — tidak ada vendor lock-in",
  ],
  limitations: [
    "Implementasi memerlukan perubahan kebiasaan kerja tim — butuh sponsorship manajemen",
    "Timeline lebih panjang karena melibatkan banyak stakeholder",
    "Data legacy yang berantakan perlu dibersihkan saat migrasi",
  ],
  pricing: {
    range: "Rp 25.000.000 – Rp 150.000.000+",
    factors: [
      "Jumlah modul dan kompleksitas alur approval",
      "Jumlah departemen, role, dan pengguna",
      "Migrasi data dari sistem lama",
      "Integrasi dengan software lain (accounting, payroll)",
      "Kebutuhan deployment on-premise vs cloud",
    ],
  },
  faqs: [
    {
      question: "Apa bedanya sistem informasi custom dengan ERP jadi seperti SAP/Odoo?",
      answer:
        "ERP jadi powerful tapi mahal lisensinya dan sering memaksa Anda mengubah proses bisnis mengikuti software. Sistem informasi custom dirancang mengikuti SOP Anda — biasanya lebih tepat untuk perusahaan menengah dengan proses spesifik, tanpa biaya lisensi tahunan per user.",
    },
    {
      question: "Berapa lama implementasi sistem informasi?",
      answer:
        "Modul pertama biasanya live dalam 8-12 minggu. Implementasi penuh bertahap 3-9 bulan tergantung jumlah modul — kami selalu mulai dari quick win agar tim Anda merasakan manfaat lebih awal.",
    },
    {
      question: "Apakah bisa on-premise (server kantor sendiri)?",
      answer:
        "Bisa. Kami mendukung deployment cloud (AWS/GCP/VPS), on-premise, atau hybrid — tergantung kebijakan data dan infrastruktur perusahaan Anda.",
    },
    {
      question: "Bagaimana keamanan data perusahaan?",
      answer:
        "Role-based access control, enkripsi, audit log, backup terjadwal, dan opsi deployment di server yang sepenuhnya Anda kontrol. Untuk data sensitif seperti rekam medis, kami menerapkan standar keamanan tambahan.",
    },
    {
      question: "Bagaimana jika proses bisnis kami berubah?",
      answer:
        "Sistem dirancang modular — mengubah alur approval, menambah field, atau menambah modul adalah pekerjaan konfigurasi/development ringan, bukan rebuild. Tersedia paket maintenance untuk perubahan berkelanjutan.",
    },
  ],

  pillar: {
    href: "/jasa-pembuatan-aplikasi",
    label: "Jasa Pembuatan Aplikasi",
  },
  relatedServices: [
    { href: "/jasa-custom-software", label: "Custom Software" },
    { href: "/jasa-web-application", label: "Web Application" },
    {
      href: "/jasa-pembuatan-aplikasi-bisnis",
      label: "Aplikasi Bisnis",
    },
    { href: "/layanan/aplikasi-ai", label: "Aplikasi AI" },
  ],
  relatedPortfolio: [
    { href: "/portfolio/pos-system", label: "Portal Agatha" },
  ],
  relatedArticles: [
    {
      href: "/blog/cara-memilih-software-house",
      label: "Cara Memilih Software House yang Tepat",
    },
  ],
};

export const metadata: Metadata = {
  title: "Jasa Pembuatan Sistem Informasi Perusahaan | Nufanas",
  description:
    "Jasa pembuatan sistem informasi: ERP, CRM, HRIS, SIM klinik & sekolah. Data terpusat, laporan otomatis. Untuk bisnis Indonesia. Mulai Rp 25 juta.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/jasa-pembuatan-sistem-informasi`,
  },
  openGraph: {
    title: "Jasa Pembuatan Sistem Informasi Perusahaan | Nufanas",
    description:
      "Satu platform terpusat untuk data dan proses perusahaan — ERP, CRM, HRIS, dan sistem industri spesifik.",
    url: `${SITE_CONFIG.url}/jasa-pembuatan-sistem-informasi`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetail content={content} />;
}
