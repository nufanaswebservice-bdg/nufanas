import { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Code,
  Cloud,
  BarChart,
  Store,
  Brain,
  Building,
  ArrowRight,
  Check,
} from "lucide-react";
import { SITE_CONFIG, NAP } from "@/lib/constants";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateBreadcrumbSchema,
  generatePillarServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

const PAGE_URL = `${SITE_CONFIG.url}/jasa-pembuatan-aplikasi`;

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Profesional & Custom untuk Bisnis",
  description:
    "Nufanas menyediakan jasa pembuatan aplikasi profesional: aplikasi Android, iOS, mobile, web application, sistem informasi, SaaS, dan custom software. Melayani seluruh Indonesia.",
  keywords: [
    "jasa pembuatan aplikasi",
    "jasa pembuatan aplikasi profesional",
    "jasa pembuatan aplikasi custom",
    "jasa aplikasi android",
    "jasa aplikasi mobile",
    "jasa aplikasi web",
    "software development",
    "custom software",
    "software house",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Jasa Pembuatan Aplikasi Profesional & Custom untuk Bisnis | Nufanas",
    description:
      "Jasa pembuatan aplikasi Android, iOS, mobile, web application, sistem informasi, SaaS, dan custom software untuk bisnis Anda.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Aplikasi Profesional | Nufanas",
    description:
      "Jasa pembuatan aplikasi Android, iOS, web application, sistem informasi, dan custom software.",
  },
};

const appTypes = [
  {
    icon: <Smartphone size={22} />,
    title: "Aplikasi Android",
    description:
      "Aplikasi Android native (Kotlin) atau cross-platform (Flutter/React Native) yang di-publish ke Google Play Store dengan performa optimal.",
    href: "/layanan/jasa-aplikasi-android-bandung",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Aplikasi iOS",
    description:
      "Aplikasi iPhone dan iPad dengan Swift atau cross-platform — satu codebase yang juga menghasilkan versi Android sekaligus.",
    href: "/layanan/jasa-aplikasi-ios-bandung",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Aplikasi Mobile Cross-Platform",
    description:
      "Flutter atau React Native untuk menjangkau pengguna Android dan iOS sekaligus — lebih hemat biaya dan waktu dibanding dua codebase terpisah.",
    href: "/layanan/jasa-aplikasi-mobile-bandung",
  },
  {
    icon: <Globe size={22} />,
    title: "Web Application",
    description:
      "Aplikasi berbasis web yang berjalan di browser: sistem informasi, portal, dan platform dengan login, database, dan dashboard.",
    href: "/layanan/jasa-web-application-bandung",
  },
  {
    icon: <Building size={22} />,
    title: "Aplikasi Bisnis & Sistem Informasi",
    description:
      "Sistem informasi manajemen untuk mengotomasi proses operasional: data terpusat, laporan otomatis, dan alur kerja yang jelas.",
    href: "/layanan/jasa-sistem-informasi-bandung",
  },
  {
    icon: <Code size={22} />,
    title: "Aplikasi & Software Custom",
    description:
      "Software yang dirancang khusus mengikuti proses bisnis Anda — bukan memaksa bisnis menyesuaikan software jadi.",
    href: "/layanan/jasa-custom-software-bandung",
  },
  {
    icon: <Cloud size={22} />,
    title: "Platform SaaS",
    description:
      "Produk Software as a Service multi-tenant: subscription, billing, onboarding pengguna, dan arsitektur yang siap scale.",
    href: "/layanan/jasa-saas-bandung",
  },
  {
    icon: <BarChart size={22} />,
    title: "Dashboard & Admin System",
    description:
      "Dashboard analytics dan business intelligence: visualisasi data real-time, reporting, dan monitoring operasional dalam satu layar.",
    href: "/layanan/jasa-dashboard-bandung",
  },
  {
    icon: <Store size={22} />,
    title: "Marketplace & Platform E-Commerce",
    description:
      "Platform marketplace multi-vendor atau aplikasi e-commerce custom dengan payment gateway, split payment, dan manajemen vendor.",
    href: "/layanan/jasa-marketplace-bandung",
  },
  {
    icon: <Brain size={22} />,
    title: "Aplikasi Berbasis AI",
    description:
      "Aplikasi dengan fitur AI: content generation, chatbot, image/video AI, dan otomasi cerdas menggunakan model AI terkini.",
    href: "/layanan/jasa-aplikasi-ai-bandung",
  },
];

const otherAppTypes = [
  { label: "ERP", href: "/layanan/jasa-erp-bandung" },
  { label: "CRM", href: "/layanan/jasa-crm-bandung" },
  { label: "HRIS", href: "/layanan/jasa-hris-bandung" },
  { label: "POS", href: "/layanan/jasa-pos-bandung" },
  { label: "aplikasi kasir", href: "/layanan/jasa-aplikasi-kasir-bandung" },
  { label: "aplikasi inventory", href: "/layanan/jasa-aplikasi-inventory-bandung" },
  { label: "aplikasi klinik", href: "/layanan/jasa-aplikasi-klinik-bandung" },
  { label: "aplikasi sekolah", href: "/layanan/jasa-aplikasi-sekolah-bandung" },
  { label: "aplikasi hotel", href: "/layanan/jasa-aplikasi-hotel-bandung" },
  { label: "aplikasi travel", href: "/layanan/jasa-aplikasi-travel-bandung" },
];

const portfolioIds = [
  "saas-dashboard",
  "clinic-management",
  "pos-system",
  "crm-dashboard",
  "ecommerce-modern",
];

const relatedArticles = [
  {
    slug: "biaya-pembuatan-aplikasi-mobile-2025",
    title: "Biaya Pembuatan Aplikasi Mobile: Panduan Lengkap",
  },
  {
    slug: "jasa-pembuatan-aplikasi-android-bandung",
    title: "Jasa Pembuatan Aplikasi Android: Panduan Memilih Vendor",
  },
  {
    slug: "flutter-vs-react-native-mana-yang-terbaik",
    title: "Flutter vs React Native: Mana yang Terbaik?",
  },
  {
    slug: "saas-development-panduan-membangun-produk",
    title: "SaaS Development: Panduan Membangun Produk SaaS",
  },
  {
    slug: "mengapa-bisnis-perlu-web-application",
    title: "Mengapa Bisnis Perlu Web Application?",
  },
  {
    slug: "kotlin-vs-java-untuk-android-development",
    title: "Kotlin vs Java untuk Android Development",
  },
];

const faqs = [
  {
    question: "Berapa biaya pembuatan aplikasi di Nufanas?",
    answer:
      "Biaya sangat bergantung pada jenis dan kompleksitas aplikasi. Dari daftar layanan kami: aplikasi kasir mulai Rp 10.000.000, aplikasi mobile/web application mulai Rp 15.000.000-20.000.000, aplikasi Android mulai Rp 20.000.000, dan platform SaaS atau sistem enterprise mulai Rp 50.000.000 ke atas. Estimasi pasti diberikan setelah analisis kebutuhan — konsultasi awal gratis.",
  },
  {
    question: "Berapa lama proses pembuatan aplikasi?",
    answer:
      "Aplikasi sederhana (MVP) umumnya 1-2 bulan. Aplikasi dengan backend, integrasi API, dan dashboard admin sekitar 2-4 bulan. Sistem enterprise atau platform SaaS bisa 3-6 bulan lebih. Kami biasa memecah project besar menjadi beberapa fase agar versi pertama bisa rilis lebih cepat.",
  },
  {
    question: "Apakah Nufanas bisa membuat aplikasi Android?",
    answer:
      "Ya. Kami membangun aplikasi Android dengan Kotlin untuk native, atau Flutter/React Native bila Anda juga membutuhkan versi iOS dari codebase yang sama. Termasuk proses publish ke Google Play Store.",
  },
  {
    question: "Apakah bisa membuat aplikasi mobile untuk Android dan iOS sekaligus?",
    answer:
      "Bisa. Dengan Flutter atau React Native, satu codebase menghasilkan aplikasi untuk Android dan iOS — biaya dan waktu pengembangan lebih efisien dibanding membangun dua aplikasi native terpisah.",
  },
  {
    question: "Apakah bisa membuat aplikasi berbasis web (web application)?",
    answer:
      "Ya — ini salah satu layanan inti kami. Web application berjalan di browser tanpa perlu install: sistem informasi, portal internal, dashboard, hingga platform SaaS. Contohnya Portal Agatha dan platform konseling Teman Sejiwa di portfolio kami.",
  },
  {
    question: "Apakah aplikasi bisa terhubung dengan API atau sistem yang sudah ada?",
    answer:
      "Bisa. Kami berpengalaman mengintegrasikan REST API internal maupun pihak ketiga: payment gateway, WhatsApp API, layanan logistik, Google Maps, hingga sinkronisasi dengan sistem lama perusahaan Anda.",
  },
  {
    question: "Apakah bisa integrasi payment gateway?",
    answer:
      "Bisa. Kami mengintegrasikan payment gateway Indonesia seperti Midtrans, Xendit, dan iPaymu — mencakup transfer bank, e-wallet, QRIS, hingga split payment untuk marketplace.",
  },
  {
    question: "Apakah bisa membuat dashboard admin untuk aplikasi?",
    answer:
      "Ya. Hampir semua aplikasi yang kami bangun disertai panel admin: manajemen pengguna, konten, transaksi, laporan, dan monitoring — dengan role & permission sesuai struktur organisasi Anda.",
  },
  {
    question: "Apakah aplikasi bisa dikembangkan bertahap (MVP dulu)?",
    answer:
      "Bisa — dan kami merekomendasikannya untuk aplikasi baru. Mulai dari MVP dengan fitur inti, validasi ke pengguna, lalu kembangkan bertahap per fase. Ini mengurangi risiko dan mempercepat time-to-market.",
  },
  {
    question: "Apakah Nufanas menyediakan maintenance aplikasi?",
    answer:
      "Ya. Setiap project mendapat garansi perbaikan bug minimal 3 bulan setelah launch. Tersedia juga paket maintenance bulanan untuk update, monitoring, backup, dan pengembangan fitur lanjutan.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analisis Kebutuhan",
    description:
      "Memahami masalah bisnis yang ingin diselesaikan, pengguna aplikasi, fitur inti, dan batasan teknis — outputnya dokumen requirement yang jelas.",
  },
  {
    step: "02",
    title: "Arsitektur Sistem",
    description:
      "Merancang arsitektur aplikasi: pembagian frontend/backend, struktur API, integrasi, dan pilihan teknologi yang sesuai skala project.",
  },
  {
    step: "03",
    title: "Desain UI/UX",
    description:
      "Wireframe dan mockup antarmuka untuk tiap layar utama. User flow diuji dulu di level desain sebelum masuk coding.",
  },
  {
    step: "04",
    title: "Desain Database",
    description:
      "Struktur tabel, relasi, dan indexing dirancang untuk kebutuhan data aplikasi Anda — fondasi yang menentukan performa jangka panjang.",
  },
  {
    step: "05",
    title: "Development",
    description:
      "Pengembangan fitur per sprint dengan review berkala — Anda bisa memantau progres dan memberi feedback di tiap iterasi.",
  },
  {
    step: "06",
    title: "Integrasi API",
    description:
      "Menghubungkan aplikasi dengan payment gateway, notifikasi, WhatsApp, email, dan layanan pihak ketiga lainnya.",
  },
  {
    step: "07",
    title: "Testing & QA",
    description:
      "Uji fungsional per fitur, uji di berbagai perangkat, security check dasar, dan User Acceptance Test bersama Anda.",
  },
  {
    step: "08",
    title: "Deployment",
    description:
      "Rilis ke production: publish ke Play Store/App Store untuk aplikasi mobile, atau deploy ke cloud/VPS untuk web application.",
  },
  {
    step: "09",
    title: "Maintenance & Iterasi",
    description:
      "Garansi bug fix pasca-launch, monitoring performa, dan pengembangan fitur lanjutan berdasarkan feedback pengguna nyata.",
  },
];

export default function JasaPembuatanAplikasiPage() {
  const portfolioItems = PORTFOLIO_ITEMS.filter((item) =>
    portfolioIds.includes(item.id)
  );

  return (
    <>
      <JsonLd
        data={generatePillarServiceSchema({
          title: "Jasa Pembuatan Aplikasi Profesional",
          description:
            "Layanan pembuatan aplikasi profesional dan custom untuk bisnis: aplikasi Android, iOS, mobile, web application, sistem informasi, SaaS, dan custom software. Melayani seluruh Indonesia.",
          path: "/jasa-pembuatan-aplikasi",
          serviceType: "Application Development",
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
          { name: "Jasa Pembuatan Aplikasi", href: "/jasa-pembuatan-aplikasi" },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="pt-32 pb-24">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/layanan" className="hover:text-primary">
                  Layanan
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-900 font-medium">
                Jasa Pembuatan Aplikasi
              </li>
            </ol>
          </nav>

          <header className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-slate-900 leading-tight">
              Jasa Pembuatan Aplikasi{" "}
              <span className="gradient-text">Profesional</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Nufanas adalah software house yang menyediakan{" "}
              <strong>jasa pembuatan aplikasi</strong> untuk bisnis di seluruh
              Indonesia — aplikasi mobile Android & iOS, web application,
              sistem informasi, dashboard, platform SaaS, hingga custom
              software yang mengikuti alur kerja perusahaan Anda.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Dari aplikasi sederhana sampai sistem enterprise dengan
              integrasi API dan payment gateway — dikerjakan tim developer
              in-house dengan proses yang transparan. Konsultasi kebutuhan
              gratis, tanpa komitmen.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl gradient-primary text-white font-medium hover:shadow-lg transition-all"
              >
                Konsultasikan Kebutuhan Aplikasi
              </Link>
              <a
                href={`https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
                  "Halo Nufanas, saya ingin konsultasi jasa pembuatan aplikasi."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-green-500 text-green-600 font-medium hover:bg-green-50 transition-all"
              >
                WhatsApp Kami
              </a>
            </div>
          </header>

          {/* Key takeaways */}
          <section className="mb-16 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="text-lg font-bold mb-4 text-slate-900">
              Yang Anda Dapatkan dari Jasa Pembuatan Aplikasi Nufanas
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Aplikasi Android, iOS, cross-platform, dan web application
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Backend API & database yang scalable dan aman
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Integrasi payment gateway, WhatsApp, dan API pihak ketiga
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Dashboard admin untuk mengelola data dan pengguna
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Development bertahap: bisa mulai dari MVP
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Garansi bug fix & opsi maintenance pasca-launch
              </li>
            </ul>
          </section>
        </div>

        {/* App types */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-3 text-slate-900">
              Jenis Aplikasi yang Kami Bangun
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Setiap jenis aplikasi punya pendekatan teknis dan biaya yang
              berbeda. Berikut kategori yang paling sering kami kerjakan.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {appTypes.map((type) => (
                <Link
                  key={type.title}
                  href={type.href}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    {type.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-slate-900 group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {type.description}
                  </p>
                </Link>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-6">
              Kami juga membangun sistem{" "}
              {otherAppTypes.map((item, i) => (
                <span key={item.href}>
                  <Link href={item.href} className="text-primary hover:underline">
                    {item.label}
                  </Link>
                  {i < otherAppTypes.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* Technology */}
        <section className="mb-16 bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-3 text-slate-900">
              Teknologi Pengembangan Aplikasi
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Stack dipilih berdasarkan kebutuhan project: target platform,
              skala pengguna, dan rencana pengembangan jangka panjang.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  Flutter, Kotlin & Swift
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Untuk aplikasi mobile: Flutter/React Native saat
                  cross-platform lebih efisien, Kotlin/Swift saat performa
                  native jadi prioritas.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  Next.js & React
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Untuk web application dan dashboard: interface yang cepat
                  dan interaktif dengan rendering server-side saat dibutuhkan
                  SEO.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  Node.js, NestJS & Laravel
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Backend API yang terstruktur: autentikasi, role &
                  permission, logika bisnis, dan integrasi pihak ketiga —
                  dibangun dengan framework production-grade.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  PostgreSQL, MongoDB & Redis
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Database relasional untuk data transaksional, document store
                  untuk data fleksibel, dan cache untuk performa — sesuai
                  karakter data aplikasi Anda.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  Payment Gateway & Integrasi
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Midtrans, Xendit, iPaymu untuk pembayaran; WhatsApp API,
                  email transactional, dan layanan pihak ketiga lainnya sesuai
                  kebutuhan.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  Docker, VPS & Cloud
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deployment ter-container ke VPS atau cloud (AWS, GCP) dengan
                  Nginx, SSL, dan monitoring — aplikasi tetap berjalan stabil
                  saat pengguna bertambah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-3 text-slate-900">
              Proses Pengembangan Aplikasi
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Dikerjakan per tahap dengan review berkala — Anda selalu tahu
              progres dan bisa mengoreksi arah sejak awal.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {processSteps.map((p) => (
                <div
                  key={p.step}
                  className="p-6 rounded-2xl bg-white border border-slate-200"
                >
                  <span className="text-sm font-bold text-primary">
                    {p.step}
                  </span>
                  <h3 className="font-semibold mt-1 mb-2 text-slate-900">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="mb-16 bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-3 text-slate-900">
              Contoh Aplikasi yang Pernah Kami Bangun
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Project nyata dari portfolio kami — klik untuk melihat detail
              fitur dan teknologinya.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {portfolioItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/portfolio/${item.id}`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <span className="text-xs font-medium text-primary">
                    {item.category}
                  </span>
                  <h3 className="font-semibold mt-1 mb-2 text-slate-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-3">
                    {item.description}
                  </p>
                  {item.result && (
                    <p className="text-xs text-slate-500">
                      Hasil: {item.result}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:underline"
            >
              Lihat semua portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Why + Pricing */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                  Kenapa Memilih Nufanas?
                </h2>
                <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>
                      <strong>Tim developer in-house</strong> — project
                      dikerjakan tim kami sendiri, bukan dilempar ke freelancer
                      pihak ketiga.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>
                      <strong>Pengalaman lintas platform</strong> — mobile,
                      web application, hingga sistem enterprise dengan
                      integrasi kompleks.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>
                      <strong>Arsitektur yang bisa berkembang</strong> —
                      aplikasi dibangun agar mudah ditambah fitur, bukan
                      ditulis ulang saat bisnis tumbuh.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>
                      <strong>Proses transparan</strong> — estimasi biaya dan
                      timeline tertulis di awal, review progres per sprint.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>
                      <strong>Support pasca-launch</strong> — garansi bug fix
                      dan opsi maintenance bulanan, termasuk update OS dan
                      perbaikan keamanan.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                  Berapa Biaya Pembuatan Aplikasi?
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Biaya ditentukan oleh platform target, jumlah fitur,
                  kompleksitas backend, integrasi (payment, API, sistem
                  existing), dan kebutuhan maintenance. Gambaran paket layanan
                  kami:
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li>• Aplikasi kasir — mulai Rp 10.000.000</li>
                  <li>• Aplikasi mobile/web app — mulai Rp 15.000.000</li>
                  <li>• Aplikasi Android — mulai Rp 20.000.000</li>
                  <li>• Aplikasi iOS — mulai Rp 25.000.000</li>
                  <li>• Custom software — mulai Rp 30.000.000</li>
                  <li>• Platform SaaS — mulai Rp 100.000.000</li>
                </ul>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Estimasi pasti diberikan tertulis setelah konsultasi —
                  gratis dan tanpa komitmen. Lihat juga halaman{" "}
                  <Link href="/harga" className="text-primary hover:underline">
                    harga
                  </Link>{" "}
                  untuk detail paket.
                </p>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl gradient-primary text-white font-medium hover:shadow-lg transition-all"
                >
                  Request Penawaran <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Area + Bandung differentiation */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200">
              <h2 className="text-xl font-bold mb-3 text-slate-900">
                Melayani Pembuatan Aplikasi di Seluruh Indonesia
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kami berbasis di Bandung dan mengerjakan project aplikasi
                untuk klien di seluruh Indonesia secara remote — koordinasi
                via WhatsApp, meeting online, dan tools project management.
                Untuk kebutuhan lokal, lihat halaman{" "}
                <Link
                  href="/layanan/jasa-pembuatan-aplikasi-bandung"
                  className="text-primary hover:underline"
                >
                  jasa pembuatan aplikasi Bandung
                </Link>
                . Sedangkan untuk kebutuhan website bisnis, tersedia layanan{" "}
                <Link
                  href="/jasa-pembuatan-website"
                  className="text-primary hover:underline"
                >
                  jasa pembuatan website
                </Link>{" "}
                kami.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">
              Pertanyaan Seputar Jasa Pembuatan Aplikasi
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white border border-slate-200"
                >
                  <h3 className="font-semibold mb-2 text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">
              Bacaan Terkait
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="p-4 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-primary/50 hover:text-primary transition-all"
                >
                  {a.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-2xl gradient-primary text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Siap Membangun Aplikasi Anda?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Ceritakan ide atau kebutuhan aplikasi Anda — kami balas dengan
                rekomendasi teknis, estimasi biaya, dan timeline dalam 24 jam.
                Gratis dan tanpa komitmen.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontak"
                  className="h-12 px-8 rounded-xl bg-white text-primary font-medium inline-flex items-center hover:bg-white/90 transition-all"
                >
                  Konsultasikan Kebutuhan Aplikasi
                </Link>
                <a
                  href={`https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
                    "Halo Nufanas, saya ingin tanya-tanya jasa pembuatan aplikasi."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-8 rounded-xl border border-white/30 text-white font-medium inline-flex items-center hover:bg-white/10 transition-all"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
