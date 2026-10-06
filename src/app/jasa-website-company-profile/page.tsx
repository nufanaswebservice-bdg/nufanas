import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ServiceDetail,
  ServicePageContent,
} from "@/components/services/service-detail";

const content: ServicePageContent = {
  path: "/jasa-website-company-profile",
  heading: "Jasa Pembuatan Website Company Profile",
  eyebrow: "Website Company Profile",
  intro:
    "Website company profile adalah representasi resmi perusahaan Anda di internet — tempat calon klien, investor, dan mitra memverifikasi kredibilitas bisnis Anda sebelum menghubungi. Nufanas membangun company profile yang profesional, cepat, dan mudah ditemukan di Google.",
  highlights: [
    "Desain premium yang mencerminkan identitas brand perusahaan",
    "Struktur halaman lengkap: profil, layanan, tim, portfolio, kontak",
    "SEO on-page & schema Organization sejak awal",
    "CMS admin untuk update konten tanpa coding",
    "Melayani perusahaan di seluruh Indonesia — proses 100% bisa remote",
  ],
  priceLabel: "Mulai Rp 3.500.000",
  serviceType: "Website Development",

  problem: {
    title: "Masalah yang Sering Terjadi",
    paragraphs: [
      "Banyak perusahaan masih mengandalkan brosur PDF atau halaman media sosial sebagai satu-satunya representasi digital. Akibatnya, calon klien yang mencari nama perusahaan di Google tidak menemukan bukti kredibilitas — atau justru menemukan website usang yang merusak kesan pertama.",
      "Masalah lain: website company profile yang dibuat asal-asalan dengan template gratisan sering lambat, tidak mobile-friendly, dan sulit ditemukan di Google. Padahal website perusahaan seharusnya bekerja 24 jam sebagai sales representative pertama Anda.",
    ],
  },
  forWhom: {
    title: "Layanan Ini Cocok Untuk",
    items: [
      "Perusahaan yang ingin tampil kredibel di hadapan klien dan investor",
      "Bisnis B2B yang sales cycle-nya dimulai dari riset online",
      "Kontraktor, manufaktur, dan konsultan yang butuh portfolio proyek",
      "Perusahaan yang sedang rebranding atau baru didirikan",
      "Lembaga dan yayasan yang membutuhkan transparansi publik",
      "UMKM yang ingin naik kelas dan terlihat lebih profesional",
    ],
  },
  features: [
    {
      title: "Desain Custom Sesuai Brand",
      description:
        "Bukan template pasaran — desain dibuat mengikuti brand guideline, warna, dan karakter perusahaan Anda.",
    },
    {
      title: "Struktur Halaman Lengkap",
      description:
        "Beranda, tentang kami, layanan, portfolio/proyek, tim, karier, berita, dan kontak — disusun untuk kebutuhan B2B.",
    },
    {
      title: "CMS Admin Panel",
      description:
        "Update berita, portfolio, dan konten halaman sendiri melalui dashboard admin tanpa harus menghubungi developer.",
    },
    {
      title: "SEO On-Page & Schema",
      description:
        "Meta tag, struktur heading, schema Organization, sitemap, dan kecepatan loading dioptimasi sejak development.",
    },
    {
      title: "Multi-Bahasa (Opsional)",
      description:
        "Versi Indonesia dan Inggris untuk perusahaan yang melayani klien internasional.",
    },
    {
      title: "Integrasi Kontak & Maps",
      description:
        "Form kontak, tombol WhatsApp, Google Maps, dan tautan media sosial resmi perusahaan.",
    },
  ],
  approach: {
    title: "Bagaimana Kami Mengerjakannya",
    paragraphs: [
      "Kami memulai dengan sesi discovery untuk memahami positioning perusahaan: siapa target klien Anda, apa yang ingin mereka ketahui, dan pesan utama yang harus disampaikan dalam 10 detik pertama kunjungan.",
      "Desain dibuat sebagai mockup untuk disetujui sebelum masuk development. Setelah itu kami bangun dengan Next.js — website Anda mendapatkan skor performa tinggi, SEO-friendly secara teknis, dan mudah dikembangkan di masa depan.",
      "Sebelum launch, kami lakukan quality check di berbagai perangkat, pasang analytics, dan serahkan akses CMS beserta panduan penggunaan untuk tim Anda.",
    ],
  },
  tech: ["Next.js", "React", "TailwindCSS", "Node.js", "PostgreSQL", "Vercel"],
  examples: [
    {
      title: "Bimbel Kedinasan Online",
      description:
        "Platform bimbingan belajar kedinasan dengan halaman program, pendaftaran siswa online, dan testimoni — pendaftaran naik 300% setelah redesign.",
    },
    {
      title: "Pena Sakti",
      description:
        "Portal media online dengan CMS internal, multi-kategori berita, dan struktur SEO-ready untuk Google News.",
    },
    {
      title: "LCC Surabaya",
      description:
        "Website lembaga kursus bahasa Inggris — profil program, jadwal kelas, pendaftaran online, dan profil pengajar.",
    },
  ],
  advantages: [
    "Kesan profesional yang meningkatkan kepercayaan calon klien",
    "Mudah ditemukan saat orang mencari nama perusahaan Anda",
    "Sentral informasi resmi: portfolio, sertifikasi, dan kontak",
    "Mengurangi beban tim sales dalam menjelaskan profil perusahaan",
    "Fondasi untuk strategi digital marketing jangka panjang",
  ],
  limitations: [
    "Website company profile bersifat informatif — jika butuh transaksi atau booking, Anda memerlukan fitur tambahan",
    "Perlu update konten berkala agar tidak terlihat usang",
    "Traffic organik membutuhkan waktu 3-6 bulan untuk tumbuh signifikan",
  ],
  pricing: {
    range: "Rp 3.500.000 – Rp 15.000.000",
    factors: [
      "Jumlah halaman dan kedalaman struktur konten",
      "Tingkat kustomisasi desain (template adaptif vs desain dari nol)",
      "Kebutuhan multi-bahasa",
      "Integrasi CMS dan fitur admin",
      "Integrasi pihak ketiga (CRM, email marketing, dsb)",
    ],
  },
  faqs: [
    {
      question: "Apa perbedaan website company profile dan landing page?",
      answer:
        "Company profile adalah website multi-halaman yang merepresentasikan seluruh perusahaan — profil, layanan, tim, dan portfolio. Landing page adalah halaman tunggal yang fokus pada satu campaign atau penawaran. Untuk citra perusahaan jangka panjang, company profile adalah fondasi yang tepat.",
    },
    {
      question: "Berapa lama pembuatan website company profile?",
      answer:
        "Rata-rata 2-4 minggu dari desain hingga live, tergantung jumlah halaman, kesiapan materi konten (logo, foto, teks), dan kecepatan proses review dari tim Anda.",
    },
    {
      question: "Apakah saya bisa update konten sendiri?",
      answer:
        "Bisa. Setiap website company profile yang kami buat dilengkapi CMS admin panel agar tim Anda dapat memperbarui berita, portfolio, dan konten halaman tanpa coding.",
    },
    {
      question: "Apakah website langsung muncul di Google?",
      answer:
        "Website akan terindeks Google dalam beberapa hari setelah launch. Namun ranking untuk kata kunci kompetitif memerlukan waktu dan strategi SEO berkelanjutan — fondasi SEO teknis sudah kami siapkan sejak awal.",
    },
    {
      question: "Bisakah menambahkan fitur di kemudian hari?",
      answer:
        "Tentu. Arsitektur yang kami bangun modular — Anda bisa menambah fitur seperti blog, karier, sistem rekrutmen, atau bahkan e-commerce di kemudian hari tanpa membangun ulang dari nol.",
    },
  ],

  pillar: { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
  relatedServices: [
    { href: "/jasa-website-custom", label: "Jasa Website Custom" },
    { href: "/jasa-website-ecommerce", label: "Jasa Website E-Commerce" },
    { href: "/layanan/website-umkm", label: "Website UMKM" },
    { href: "/layanan/jasa-seo", label: "Jasa SEO" },
  ],
  relatedPortfolio: [
    { href: "/portfolio/bimbel-kedinasan-online", label: "Bimbel Kedinasan" },
    { href: "/portfolio/pena-sakti", label: "Pena Sakti" },
    { href: "/portfolio/lcc-surabaya", label: "LCC Surabaya" },
  ],
  relatedArticles: [
    {
      href: "/blog/jasa-pembuatan-website-panduan-lengkap",
      label: "Jasa Pembuatan Website: Panduan Lengkap",
    },
    {
      href: "/blog/website-company-profile-pentingnya-untuk-bisnis",
      label: "Pentingnya Website Company Profile untuk Bisnis",
    },
  ],
};

export const metadata: Metadata = {
  title: "Jasa Website Company Profile Profesional | Nufanas",
  description:
    "Jasa pembuatan website company profile profesional untuk perusahaan di seluruh Indonesia. Desain custom, CMS admin, SEO-friendly. Mulai Rp 3,5 juta.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/jasa-website-company-profile`,
  },
  openGraph: {
    title: "Jasa Website Company Profile Profesional | Nufanas",
    description:
      "Website company profile yang membangun kredibilitas perusahaan Anda — desain custom, CMS, dan SEO-ready.",
    url: `${SITE_CONFIG.url}/jasa-website-company-profile`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetail content={content} />;
}
