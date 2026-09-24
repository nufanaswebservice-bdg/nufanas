import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Store,
  Building,
  Users,
  GraduationCap,
  Plane,
  Car,
  Code,
  LayoutDashboard,
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

const PAGE_URL = `${SITE_CONFIG.url}/jasa-pembuatan-website`;

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional & Custom untuk Bisnis",
  description:
    "Nufanas menyediakan jasa pembuatan website profesional: company profile, toko online, website UMKM, landing page, dan web application custom. Desain responsive, cepat, dan SEO-friendly. Melayani seluruh Indonesia.",
  keywords: [
    "jasa pembuatan website",
    "jasa website",
    "jasa pembuatan website profesional",
    "jasa pembuatan website custom",
    "web development",
    "website company profile",
    "website ecommerce",
    "website umkm",
    "jasa pembuatan website indonesia",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Jasa Pembuatan Website Profesional & Custom untuk Bisnis | Nufanas",
    description:
      "Jasa pembuatan website profesional: company profile, toko online, UMKM, landing page, dan web application custom. Responsive, cepat, SEO-friendly.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Profesional | Nufanas",
    description:
      "Jasa pembuatan website profesional: company profile, toko online, UMKM, landing page, dan web application custom.",
  },
};

const websiteTypes = [
  {
    icon: <Building size={22} />,
    title: "Website Company Profile",
    description:
      "Website resmi perusahaan untuk membangun kredibilitas: profil bisnis, layanan, tim, portfolio, dan kontak. Wajah digital perusahaan Anda yang bekerja 24 jam.",
    href: "/layanan/website-company-profile-bandung",
  },
  {
    icon: <Store size={22} />,
    title: "Website UMKM",
    description:
      "Paket website terjangkau untuk usaha kecil dan menengah: katalog produk, tombol WhatsApp, peta lokasi, dan halaman promo yang mudah dikelola.",
    href: "/layanan/website-umkm-bandung",
  },
  {
    icon: <ShoppingCart size={22} />,
    title: "Website E-Commerce / Toko Online",
    description:
      "Toko online dengan katalog produk, keranjang belanja, checkout multi-payment gateway, ongkir otomatis, dan order tracking untuk pelanggan.",
    href: "/layanan/website-toko-online-bandung",
  },
  {
    icon: <Globe size={22} />,
    title: "Website Corporate & Industri",
    description:
      "Website korporat dan manufaktur dengan struktur halaman lengkap: tentang perusahaan, lini bisnis, sertifikasi, karier, dan investor relations.",
    href: "/layanan/website-industri-bandung",
  },
  {
    icon: <Users size={22} />,
    title: "Website Organisasi & Komunitas",
    description:
      "Portal untuk yayasan, komunitas, dan organisasi: manajemen anggota, agenda kegiatan, galeri, donasi, dan pengumuman resmi.",
    href: "/layanan/jasa-web-application-bandung",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Website Sekolah & Pendidikan",
    description:
      "Website sekolah dan lembaga kursus: profil program, pendaftaran online (PPDB), berita kegiatan, e-learning, dan portal informasi siswa.",
    href: "/layanan/website-sekolah-bandung",
  },
  {
    icon: <Plane size={22} />,
    title: "Website Travel & Tour",
    description:
      "Website agen travel dengan katalog paket wisata, itinerary, booking form, galeri destinasi, dan testimoni peserta tour.",
    href: "/layanan/website-travel-bandung",
  },
  {
    icon: <Car size={22} />,
    title: "Website Otomotif & Rental",
    description:
      "Website rental mobil dan bisnis otomotif: katalog armada, harga sewa, booking online, syarat rental, dan integrasi WhatsApp.",
    href: "/layanan/website-rental-mobil-bandung",
  },
  {
    icon: <Code size={22} />,
    title: "Website Custom",
    description:
      "Website yang dibangun dari nol sesuai kebutuhan spesifik bisnis Anda — bukan template. Desain, fitur, dan alur disesuaikan dengan proses bisnis.",
    href: "/layanan/jasa-pembuatan-website-bandung",
  },
  {
    icon: <LayoutDashboard size={22} />,
    title: "Web Application",
    description:
      "Aplikasi berbasis web dengan login, database, dashboard, dan logika bisnis kompleks — bukan sekadar website tampilan.",
    href: "/layanan/jasa-web-application-bandung",
  },
];

const otherWebsiteTypes = [
  { label: "website hotel", href: "/layanan/website-hotel-bandung" },
  { label: "website klinik", href: "/layanan/website-klinik-bandung" },
  { label: "website cafe & restoran", href: "/layanan/website-cafe-bandung" },
  { label: "website kontraktor", href: "/layanan/website-kontraktor-bandung" },
  { label: "website properti", href: "/layanan/website-properti-bandung" },
  { label: "website furniture", href: "/layanan/website-furniture-bandung" },
  { label: "landing page", href: "/layanan/landing-page-bandung" },
];

const portfolioIds = [
  "ecommerce-modern",
  "company-profile-premium",
  "restaurant-app",
  "travel-marketplace",
  "school-portal",
  "clinic-management",
];

const relatedArticles = [
  {
    slug: "jasa-pembuatan-website-bandung-panduan-lengkap",
    title: "Jasa Pembuatan Website Bandung: Panduan Lengkap",
  },
  {
    slug: "next-js-vs-wordpress-mana-yang-lebih-baik",
    title: "Next.js vs WordPress: Mana yang Lebih Baik?",
  },
  {
    slug: "cara-membuat-website-toko-online",
    title: "Cara Membuat Website Toko Online yang Menghasilkan",
  },
  {
    slug: "manfaat-website-untuk-umkm",
    title: "10 Manfaat Website untuk UMKM di Era Digital",
  },
  {
    slug: "responsive-design-pentingnya-untuk-mobile",
    title: "Responsive Design: Mengapa Website Harus Mobile-Friendly?",
  },
  {
    slug: "optimasi-kecepatan-website-core-web-vitals",
    title: "Optimasi Kecepatan Website: Panduan Core Web Vitals",
  },
];

const faqs = [
  {
    question: "Berapa biaya jasa pembuatan website di Nufanas?",
    answer:
      "Biaya tergantung jenis dan kompleksitas website. Sebagai gambaran dari daftar layanan kami: website UMKM mulai Rp 1.500.000, company profile mulai Rp 3.500.000, website custom mulai Rp 5.000.000, dan toko online mulai Rp 8.000.000. Harga final ditentukan setelah kami memahami kebutuhan Anda — konsultasi dan penawaran tidak dipungut biaya.",
  },
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Landing page dan website sederhana umumnya selesai dalam 1-3 minggu. Website company profile dan toko online sekitar 2-6 minggu. Web application atau sistem custom dengan banyak integrasi bisa memakan waktu 1-3 bulan. Timeline detail selalu kami sampaikan di awal project setelah requirement disepakati.",
  },
  {
    question: "Apakah website bisa dibuat custom, bukan template?",
    answer:
      "Ya. Sebagian besar project kami dibangun custom — desain UI/UX dibuat khusus untuk brand Anda dan fitur dikembangkan sesuai alur bisnis, bukan memakai template jadi. Untuk budget terbatas kami juga bisa menyesuaikan solusi agar tetap efisien.",
  },
  {
    question: "Apakah website responsive di HP dan tablet?",
    answer:
      "Ya. Semua website yang kami bangun menggunakan pendekatan mobile-first dan responsive — tampilan menyesuaikan layar HP, tablet, dan desktop. Ini penting karena mayoritas pengguna internet Indonesia mengakses web lewat smartphone.",
  },
  {
    question: "Teknologi apa yang digunakan untuk membuat website?",
    answer:
      "Untuk website modern kami umumnya menggunakan Next.js, React, TypeScript, dan TailwindCSS, dengan backend Node.js atau Laravel serta database PostgreSQL/MySQL bila dibutuhkan. Teknologi dipilih berdasarkan kebutuhan project — bukan sekadar mengikuti tren.",
  },
  {
    question: "Apakah website bisa terintegrasi dengan API atau sistem lain?",
    answer:
      "Bisa. Kami berpengalaman mengintegrasikan payment gateway, API ongkir/logistik, WhatsApp, Google Maps, email service, hingga API internal perusahaan dan sistem pihak ketiga lainnya.",
  },
  {
    question: "Apakah website e-commerce bisa dibuat custom?",
    answer:
      "Bisa. Kami membangun toko online custom dengan katalog produk, keranjang, checkout multi-payment (transfer bank, e-wallet, QRIS), order tracking, dan panel admin — contohnya pada project KaosDN99 di portfolio kami.",
  },
  {
    question: "Apakah Nufanas menyediakan maintenance website?",
    answer:
      "Ya. Setiap project mendapat garansi perbaikan bug minimal 3 bulan, dan tersedia paket maintenance bulanan untuk update konten, backup, monitoring, dan improvement berkelanjutan.",
  },
  {
    question: "Apakah website dibuat dengan fondasi SEO-friendly?",
    answer:
      "Ya. Kami menerapkan technical SEO sejak development: HTML semantik, metadata lengkap, canonical URL, sitemap XML, structured data, optimasi gambar, dan kecepatan loading. Ini membangun fondasi yang baik untuk SEO — meski perlu dicatat ranking di Google juga dipengaruhi konten dan faktor eksternal lainnya.",
  },
  {
    question: "Apakah Nufanas melayani pembuatan website di luar Bandung?",
    answer:
      "Ya. Kami berbasis di Bandung tetapi melayani klien di seluruh Indonesia — Jakarta, Surabaya, dan kota lainnya. Konsultasi dan koordinasi project dapat dilakukan remote via WhatsApp dan video call.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Konsultasi",
    description:
      "Diskusi awal gratis via WhatsApp atau meeting untuk memahami tujuan website, target pengunjung, dan referensi yang Anda sukai.",
  },
  {
    step: "02",
    title: "Analisis Kebutuhan",
    description:
      "Kami memetakan fitur yang dibutuhkan, jumlah halaman, integrasi, dan estimasi biaya serta timeline secara transparan.",
  },
  {
    step: "03",
    title: "Struktur & Konten",
    description:
      "Menyusun sitemap dan arsitektur informasi: halaman apa saja yang ada, hierarki konten, dan alur pengunjung menuju konversi.",
  },
  {
    step: "04",
    title: "Desain UI/UX",
    description:
      "Wireframe dan mockup desain dibuat sesuai identitas brand Anda. Revisi dilakukan sampai desain disetujui sebelum masuk development.",
  },
  {
    step: "05",
    title: "Development",
    description:
      "Desain diimplementasikan menjadi website dengan clean code, responsive, dan teroptimasi sejak awal.",
  },
  {
    step: "06",
    title: "Integrasi",
    description:
      "Menghubungkan website dengan payment gateway, WhatsApp, email, analytics, Search Console, dan API lain yang dibutuhkan.",
  },
  {
    step: "07",
    title: "Testing",
    description:
      "Uji fungsional, tampilan di berbagai perangkat dan browser, kecepatan loading, serta review konten sebelum go-live.",
  },
  {
    step: "08",
    title: "Deployment",
    description:
      "Website di-deploy ke server production dengan SSL aktif, domain tersambung, dan sitemap tersubmit ke Google.",
  },
  {
    step: "09",
    title: "Maintenance & Support",
    description:
      "Garansi perbaikan bug pasca-launch dan opsi paket maintenance untuk update rutin, backup, dan pengembangan lanjutan.",
  },
];

export default function JasaPembuatanWebsitePage() {
  const portfolioItems = PORTFOLIO_ITEMS.filter((item) =>
    portfolioIds.includes(item.id)
  );

  return (
    <>
      <JsonLd
        data={generatePillarServiceSchema({
          title: "Jasa Pembuatan Website Profesional",
          description:
            "Layanan pembuatan website profesional dan custom untuk bisnis: company profile, toko online, UMKM, landing page, dan web application. Melayani seluruh Indonesia.",
          path: "/jasa-pembuatan-website",
          serviceType: "Website Development",
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
          { name: "Jasa Pembuatan Website", href: "/jasa-pembuatan-website" },
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
                Jasa Pembuatan Website
              </li>
            </ol>
          </nav>

          <header className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-slate-900 leading-tight">
              Jasa Pembuatan Website{" "}
              <span className="gradient-text">Profesional</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Nufanas adalah software house yang menyediakan{" "}
              <strong>jasa pembuatan website</strong> untuk bisnis dan
              organisasi di seluruh Indonesia — mulai dari company profile,
              website UMKM, toko online, landing page, hingga web application
              custom dengan database dan integrasi API.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Setiap website kami bangun responsive di semua perangkat, cepat
              diakses, dan disusun di atas fondasi technical SEO yang benar —
              bukan sekadar tampilan bagus. Konsultasi kebutuhan Anda gratis,
              tanpa komitmen.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl gradient-primary text-white font-medium hover:shadow-lg transition-all"
              >
                Konsultasikan Kebutuhan Website
              </Link>
              <a
                href={`https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
                  "Halo Nufanas, saya ingin konsultasi jasa pembuatan website."
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
              Yang Anda Dapatkan dari Jasa Pembuatan Website Nufanas
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Desain custom sesuai brand, bukan template pasaran
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Responsive & mobile-first di semua ukuran layar
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Fondasi technical SEO: metadata, canonical, sitemap, schema
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Teknologi modern (Next.js/React) untuk performa cepat
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Integrasi payment gateway, WhatsApp, API, dan analytics
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                Garansi bug fix & opsi maintenance pasca-launch
              </li>
            </ul>
          </section>
        </div>

        {/* Website types */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-3 text-slate-900">
              Jenis Website yang Kami Bangun
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Kebutuhan setiap bisnis berbeda. Berikut kategori website yang
              paling sering kami kerjakan — masing-masing dengan pendekatan
              fitur dan struktur yang sesuai tujuannya.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {websiteTypes.map((type) => (
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
              Kami juga mengerjakan{" "}
              {otherWebsiteTypes.map((item, i) => (
                <span key={item.href}>
                  <Link href={item.href} className="text-primary hover:underline">
                    {item.label}
                  </Link>
                  {i < otherWebsiteTypes.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* Custom website */}
        <section className="mb-16 bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">
                Butuh Website dengan Fitur Khusus?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tidak semua kebutuhan bisa dijawab website standar. Sebagai
                software house, kami juga membangun website dan sistem web
                custom yang mengikuti alur kerja bisnis Anda — bukan
                sebaliknya.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Contoh yang bisa kami bangun: dashboard admin dengan role &
                permission, sistem booking/reservasi online, membership area,
                autentikasi pengguna, integrasi payment gateway (Midtrans,
                Xendit, iPaymu), integrasi API pihak ketiga, aplikasi
                berbasis database, panel admin untuk mengelola konten,
                katalog e-commerce custom, hingga otomasi proses bisnis yang
                sebelumnya dikerjakan manual.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/layanan/jasa-pembuatan-website-bandung"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-primary/50 transition-all"
                >
                  Website Custom <ArrowRight size={14} />
                </Link>
                <Link
                  href="/layanan/jasa-web-application-bandung"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-primary/50 transition-all"
                >
                  Web Application <ArrowRight size={14} />
                </Link>
                <Link
                  href="/layanan/jasa-custom-software-bandung"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-primary/50 transition-all"
                >
                  Custom Software <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-3 text-slate-900">
              Teknologi yang Kami Gunakan
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Kami memilih teknologi berdasarkan kebutuhan project — tujuannya
              website yang cepat, aman, dan mudah dikembangkan di kemudian
              hari.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  Next.js & React
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Framework modern untuk website yang cepat dan SEO-friendly.
                  Konten di-render di server sehingga mudah di-crawl Google
                  dan terasa instan bagi pengunjung. Website ini sendiri
                  dibangun dengan Next.js.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  TypeScript & TailwindCSS
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Kode yang lebih aman dan maintainable, dengan sistem desain
                  konsisten sehingga tampilan rapi di semua halaman dan mudah
                  dikembangkan.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  Node.js & Laravel
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Untuk website yang butuh backend: REST API, autentikasi,
                  logika bisnis, dan panel admin — dibangun dengan framework
                  yang teruji di production.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  PostgreSQL & MySQL
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Database relasional untuk data produk, transaksi, member,
                  dan konten dinamis — dengan struktur yang dirancang untuk
                  performa dan pertumbuhan data.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  Docker & VPS/Cloud
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deployment ke VPS atau cloud menggunakan container Docker
                  dan reverse proxy Nginx dengan SSL — website Anda tidak
                  bergantung pada satu platform hosting.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900">
                  Integrasi API
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Payment gateway (Midtrans, iPaymu), WhatsApp, Google Maps,
                  email transactional, dan API internal — website terhubung
                  dengan sistem yang bisnis Anda pakai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive + SEO */}
        <section className="mb-16 bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-3 text-slate-900">
              Responsive, Cepat, dan SEO-Friendly
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Website yang baik harus bisa diakses nyaman di HP dan ditemukan
              di mesin pencari. Dua hal ini kami tangani di level teknis
              sejak baris kode pertama.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Mobile-first & responsive
                </h3>
                <p className="leading-relaxed">
                  Layout dirancang dari layar kecil terlebih dahulu lalu
                  diperluas ke desktop. Mayoritas traffic web Indonesia datang
                  dari smartphone — website yang tidak mobile-friendly
                  kehilangan sebagian besar calon pelanggannya.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Konten yang bisa di-crawl
                </h3>
                <p className="leading-relaxed">
                  HTML semantik dengan konten utama yang di-render di server,
                  heading hierarchy yang logis (H1–H3), dan internal link yang
                  crawlable — sehingga Google memahami struktur dan topik
                  website Anda.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Technical SEO lengkap
                </h3>
                <p className="leading-relaxed">
                  Title dan meta description per halaman, canonical URL,
                  Open Graph, sitemap XML, robots.txt yang benar, dan
                  structured data (Organization, BreadcrumbList, Service,
                  FAQ) — fondasi yang benar sebelum strategi konten dimulai.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Performa & kecepatan
                </h3>
                <p className="leading-relaxed">
                  Optimasi gambar (WebP/AVIF), lazy loading, caching, dan
                  struktur URL yang bersih. Website cepat bukan hanya baik
                  untuk SEO — pengunjung tidak suka menunggu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-3 text-slate-900">
              Proses Pembuatan Website
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Alur kerja yang jelas sejak awal — Anda selalu tahu project
              sedang di tahap apa.
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
              Contoh Website yang Pernah Kami Bangun
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Beberapa project nyata dari portfolio kami — klik untuk melihat
              detail fitur dan teknologinya.
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

        {/* Why Nufanas + Pricing */}
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
                      <strong>Software house, bukan sekadar jasa website</strong>
                      {" "}— tim kami developer, sehingga fitur kompleks seperti
                      integrasi API, sistem booking, atau dashboard custom bisa
                      dikerjakan in-house.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>
                      <strong>Teknologi modern yang terukur</strong> — stack
                      yang kami pakai adalah stack yang sama dengan product
                      kami sendiri dan client production.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>
                      <strong>SEO diperhatikan sejak development</strong> —
                      struktur, metadata, dan schema disiapkan agar website
                      siap bersaing di pencarian.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>
                      <strong>Dokumentasi & support jelas</strong> — garansi
                      bug fix pasca-launch dan opsi maintenance bulanan, jadi
                      website tidak ditinggal begitu saja setelah live.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>
                      <strong>Melayani seluruh Indonesia</strong> — berbasis di
                      Bandung, terbiasa bekerja remote dengan klien dari
                      berbagai kota.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                  Berapa Biaya Pembuatan Website?
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Harga bergantung pada jenis website, jumlah halaman, fitur
                  custom, integrasi yang dibutuhkan (payment, API, database),
                  serta kebutuhan maintenance. Gambaran paket layanan kami:
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li>• Website UMKM — mulai Rp 1.500.000</li>
                  <li>• Landing page — mulai Rp 2.500.000</li>
                  <li>• Website company profile — mulai Rp 3.500.000</li>
                  <li>• Website custom — mulai Rp 5.000.000</li>
                  <li>• Website toko online — mulai Rp 8.000.000</li>
                </ul>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Estimasi pasti selalu kami berikan tertulis setelah
                  konsultasi — tanpa biaya dan tanpa komitmen. Lihat juga
                  halaman <Link href="/harga" className="text-primary hover:underline">harga</Link> untuk
                  detail paket.
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
                Melayani Pembuatan Website di Seluruh Indonesia
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kantor kami berada di Bandung, namun project dikerjakan remote
                untuk klien di Jakarta, Surabaya, Yogyakarta, Medan, Bali, dan
                kota lainnya. Khusus untuk kebutuhan lokal, kami memiliki
                halaman{" "}
                <Link
                  href="/layanan/jasa-pembuatan-website-bandung"
                  className="text-primary hover:underline"
                >
                  jasa pembuatan website Bandung
                </Link>{" "}
                dengan layanan tatap muka. Untuk kebutuhan aplikasi mobile dan
                sistem, lihat juga layanan{" "}
                <Link
                  href="/jasa-pembuatan-aplikasi"
                  className="text-primary hover:underline"
                >
                  jasa pembuatan aplikasi
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
              Pertanyaan Seputar Jasa Pembuatan Website
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
                Siap Membangun Website Anda?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Ceritakan kebutuhan website Anda — kami balas dengan
                rekomendasi solusi, estimasi biaya, dan timeline dalam 24 jam.
                Gratis dan tanpa komitmen.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontak"
                  className="h-12 px-8 rounded-xl bg-white text-primary font-medium inline-flex items-center hover:bg-white/90 transition-all"
                >
                  Konsultasikan Kebutuhan Website
                </Link>
                <a
                  href={`https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
                    "Halo Nufanas, saya ingin tanya-tanya jasa pembuatan website."
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
