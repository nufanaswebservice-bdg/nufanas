import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ServiceDetail,
  ServicePageContent,
} from "@/components/services/service-detail";

const content: ServicePageContent = {
  path: "/jasa-custom-software",
  heading: "Jasa Custom Software Development",
  eyebrow: "Custom Software",
  intro:
    "Software yang dirancang khusus mengikuti cara bisnis Anda bekerja — bukan sebaliknya. Untuk proses yang terlalu unik untuk software jadi, atau produk digital yang menjadi lini bisnis tersendiri, custom software adalah investasi jangka panjang.",
  highlights: [
    "Sistem mengikuti proses bisnis Anda, bukan template vendor",
    "Kepemilikan source code & IP penuh setelah pelunasan",
    "Arsitektur scalable untuk pertumbuhan jangka panjang",
    "Cocok untuk produk SaaS, platform internal, atau sistem enterprise",
    "Tim dedicated: developer, designer, PM, dan QA",
  ],
  priceLabel: "Mulai Rp 30.000.000",
  serviceType: "Custom Software Development",

  problem: {
    title: "Kapan Software Jadi Tidak Cukup",
    paragraphs: [
      "Software jadi seperti ERP atau SaaS berlangganan bagus untuk proses standar. Tapi ketika Anda harus mengubah cara kerja untuk menyesuaikan software, membayar lisensi untuk 80% fitur yang tidak dipakai, atau kebutuhan Anda tidak ada di pasaran — custom software menjadi lebih ekonomis dalam jangka panjang.",
      "Kasus lain: Anda membangun produk digital yang akan dijual ke customer (platform, marketplace, SaaS). Di sini software bukan hanya alat bantu — ia adalah bisnisnya. Kualitas, kepemilikan kode, dan kemampuan iterasi menentukan hidup-mati produk.",
    ],
  },
  forWhom: {
    title: "Layanan Ini Cocok Untuk",
    items: [
      "Founder yang membangun produk SaaS atau platform digital",
      "Perusahaan dengan proses bisnis unik yang tidak ada di software jadi",
      "Enterprise yang butuh sistem terintegrasi lintas departemen",
      "Bisnis yang kelelahan membayar lisensi software yang tidak optimal",
      "Startup yang butuh tim engineering tanpa membangun tim internal dulu",
      "Perusahaan dengan kebutuhan integrasi sistem yang kompleks",
    ],
  },
  features: [
    {
      title: "Product Discovery",
      description:
        "Workshop untuk memetakan kebutuhan, prioritas fitur, dan metrik keberhasilan — menghasilkan roadmap dan scope yang jelas.",
    },
    {
      title: "Arsitektur Scalable",
      description:
        "Desain sistem yang siap tumbuh: modular, API-first, dan documented — menambah fitur baru tidak berarti menulis ulang.",
    },
    {
      title: "Iterasi Agile",
      description:
        "Sprint 2 mingguan dengan demo — Anda melihat progress nyata dan mengarahkan prioritas, bukan menunggu di akhir.",
    },
    {
      title: "Quality Assurance",
      description:
        "Code review, automated testing untuk logika kritikal, dan QA manual sebelum setiap release.",
    },
    {
      title: "DevOps & Deployment",
      description:
        "CI/CD pipeline, environment staging-production, monitoring, dan infrastruktur cloud yang dikelola dengan baik.",
    },
    {
      title: "Dokumentasi & Handover",
      description:
        "Dokumentasi arsitektur, API, dan panduan operasional — tim internal Anda bisa melanjutkan tanpa tergantung kami.",
    },
  ],
  approach: {
    title: "Bagaimana Kami Bekerja",
    paragraphs: [
      "Kami tidak langsung coding. Fase discovery memetakan masalah, pengguna, dan scope MVP — sering kali menghasilkan rekomendasi membangun lebih sedikit dari yang Anda bayangkan, agar value terbukti dulu sebelum investasi besar.",
      "Development berjalan dalam sprint dengan demo reguler. Komunikasi via channel dedicated (Slack/WhatsApp group) dan project management board yang bisa Anda pantau kapan saja.",
      "Setelah launch, hubungan berlanjut sesuai kebutuhan: paket maintenance, retainer development untuk fitur baru, atau handover penuh ke tim internal Anda.",
    ],
  },
  tech: [
    "TypeScript",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS/GCP",
  ],
  examples: [
    {
      title: "NuViral — SaaS AI Creative Studio",
      description:
        "Platform SaaS multi-tenant dengan 9 AI tools, subscription billing, dan API access — dibangun dari nol hingga melayani puluhan ribu pengguna.",
    },
    {
      title: "Portal Agatha — Sistem Informasi Komunitas",
      description:
        "Sistem manajemen anggota dan kegiatan untuk organisasi — menggantikan proses administrasi manual dengan portal digital.",
    },
    {
      title: "Use case: Integrasi Sistem Enterprise",
      description:
        "Middleware yang menghubungkan ERP, e-commerce, dan logistik — data mengalir otomatis antar sistem yang sebelumnya terpisah.",
    },
  ],
  advantages: [
    "Fitur persis sesuai kebutuhan — tidak membayar yang tidak dipakai",
    "Kepemilikan kode dan data penuh — tidak terkunci vendor",
    "Keunggulan kompetitif: software jadi identitas digital unik Anda",
    "Biaya jangka panjang sering lebih rendah dari lisensi berulang",
    "Fleksibel pivot dan iterasi mengikuti feedback pengguna",
  ],
  limitations: [
    "Investasi awal lebih besar dibanding software berlangganan",
    "Butuh waktu — MVP biasanya 2-4 bulan, bukan hitungan hari",
    "Memerlukan keterlibatan stakeholder untuk requirement & review",
    "Maintenance berkelanjutan tetap dibutuhkan seperti produk digital lain",
  ],
  pricing: {
    range: "Rp 30.000.000 – Rp 200.000.000+",
    factors: [
      "Scope MVP vs full product",
      "Kompleksitas logika bisnis dan integrasi",
      "Jumlah platform (web, mobile, API)",
      "Kebutuhan infrastruktur dan skala pengguna",
      "Tingkat compliance/security yang diperlukan",
    ],
  },
  faqs: [
    {
      question: "Bagaimana proses memulai custom software project?",
      answer:
        "Dimulai dari sesi discovery gratis: ceritakan masalah atau ide produk Anda. Kami susun proposal berisi scope, arsitektur, timeline, dan estimasi biaya — Anda putuskan untuk lanjut atau tidak tanpa komitmen.",
    },
    {
      question: "Apakah saya bisa menghentikan project di tengah?",
      answer:
        "Bisa, per milestone. Karena development berjalan iteratif, Anda selalu memegang versi terakhir yang berfungsi dan dokumentasi — tidak ada lock-in yang memaksa Anda melanjutkan.",
    },
    {
      question: "Bagaimana memastikan software tidak 'nyangkut' di vendor?",
      answer:
        "Source code tersimpan di repository Anda sejak hari pertama, dokumentasi lengkap, dan kami menulis kode dengan standar industri. Pasca pelunasan, seluruh IP adalah milik Anda.",
    },
    {
      question: "Apakah Nufanas bisa menjadi tim tech untuk startup saya?",
      answer:
        "Ya, model retainer/tim dedicated tersedia — kami berfungsi sebagai CTO-as-a-service atau tim engineering Anda sampai siap membangun tim internal. Beberapa client kami menggunakan model ini.",
    },
    {
      question: "Bagaimana dengan NDA dan kerahasiaan ide?",
      answer:
        "Kami terbiasa menandatangani NDA sebelum diskusi detail. Ide dan data Anda dijaga kerahasiaannya sebagai bagian dari kontrak kerja sama standar kami.",
    },
  ],

  pillar: {
    href: "/jasa-pembuatan-aplikasi",
    label: "Jasa Pembuatan Aplikasi",
  },
  relatedServices: [
    { href: "/jasa-web-application", label: "Web Application" },
    {
      href: "/jasa-pembuatan-sistem-informasi",
      label: "Sistem Informasi",
    },
    { href: "/layanan/aplikasi-ai", label: "Aplikasi AI" },
    { href: "/jasa-aplikasi-mobile", label: "Aplikasi Mobile" },
  ],
  relatedPortfolio: [
    { href: "/portfolio/saas-dashboard", label: "NuViral AI" },
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
  title: "Jasa Custom Software Development Indonesia | Nufanas",
  description:
    "Jasa custom software development untuk bisnis di Indonesia: SaaS, platform internal, sistem enterprise. Source code milik Anda. Mulai Rp 30 juta.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/jasa-custom-software`,
  },
  openGraph: {
    title: "Jasa Custom Software Development Indonesia | Nufanas",
    description:
      "Software yang dirancang mengikuti cara bisnis Anda bekerja — bukan sebaliknya. Kepemilikan kode penuh.",
    url: `${SITE_CONFIG.url}/jasa-custom-software`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetail content={content} />;
}
