import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ServiceDetail,
  ServicePageContent,
} from "@/components/services/service-detail";

const content: ServicePageContent = {
  path: "/jasa-pembuatan-aplikasi-bisnis",
  heading: "Jasa Pembuatan Aplikasi Bisnis & Operasional",
  eyebrow: "Aplikasi Bisnis",
  intro:
    "Aplikasi untuk menjalankan operasional bisnis sehari-hari: kasir/POS, inventory, booking, manajemen pelanggan, hingga aplikasi internal karyawan. Fokusnya satu — menghemat waktu tim Anda dan mengurangi kesalahan manual.",
  highlights: [
    "POS/kasir, inventory, booking, dan aplikasi internal",
    "Alur kerja mengikuti SOP bisnis Anda, bukan sebaliknya",
    "Bisa web-based, mobile, atau keduanya",
    "Data operasional terpusat dan real-time",
    "Training tim sampai bisa digunakan sehari-hari",
  ],
  priceLabel: "Mulai Rp 15.000.000",
  serviceType: "Business Application Development",

  problem: {
    title: "Operasional Manual Menghambat Pertumbuhan",
    paragraphs: [
      "Rekap penjualan di buku atau Excel, stok dihitung manual, booking dicatat di WhatsApp, laporan dibuat setiap akhir bulan dengan susah payah. Cara ini bekerja saat bisnis kecil — tapi menjadi bottleneck saat volume tumbuh.",
      "Aplikasi bisnis mengubah proses tersebut menjadi otomatis: transaksi langsung mengurangi stok, booking masuk otomatis ke jadwal, dan owner bisa memantau bisnis dari HP kapan saja.",
    ],
  },
  forWhom: {
    title: "Layanan Ini Cocok Untuk",
    items: [
      "Retail, cafe, dan restoran yang butuh POS/kasir custom",
      "Distributor dan gudang dengan manajemen stok multi-lokasi",
      "Klinik, salon, barbershop, dan jasa appointment",
      "Rental mobil/alat dengan tracking armada dan booking",
      "Sekolah, kursus, dan yayasan dengan administrasi siswa",
      "Perusahaan yang software jadinya tidak cocok dengan SOP internal",
    ],
  },
  features: [
    {
      title: "Aplikasi Kasir / POS",
      description:
        "Point of sale dengan struk, laporan penjualan, manajemen shift, dan integrasi printer thermal — bisa offline lalu sync.",
    },
    {
      title: "Inventory & Stok",
      description:
        "Stok real-time, notifikasi stok minimum, mutasi antar gudang/cabang, dan laporan barang masuk-keluar.",
    },
    {
      title: "Booking & Scheduling",
      description:
        "Kalender booking dengan slot ketersediaan, reminder otomatis via WhatsApp, dan pembayaran DP.",
    },
    {
      title: "CRM Sederhana",
      description:
        "Database pelanggan, riwayat transaksi, dan follow-up reminder — retensi pelanggan tanpa software mahal.",
    },
    {
      title: "Laporan Otomatis",
      description:
        "Penjualan harian/bulanan, produk terlaris, performa cabang — tersaji tanpa harus rekap manual.",
    },
    {
      title: "Multi-Role Access",
      description:
        "Owner, manager, kasir, dan staff masing-masing hanya mengakses fitur yang relevan dengan tugasnya.",
    },
  ],
  approach: {
    title: "Kami Mulai dari Proses Bisnis Anda",
    paragraphs: [
      "Sebelum menulis kode, kami pelajari bagaimana bisnis Anda berjalan hari ini: siapa input apa, di mana data sering salah, dan laporan apa yang dibutuhkan owner. Aplikasi kemudian dirancang mengikuti SOP tersebut — bukan memaksa tim Anda menyesuaikan software.",
      "Kami prioritaskan kemudahan penggunaan. Aplikasi bisnis gagal biasanya bukan karena fitur kurang, tapi karena staff enggan memakainya. UI kami dibuat sesederhana mungkin — mayoritas pengguna bisa operasional setelah training singkat.",
      "Deployment fleksibel: web-based untuk akses dari komputer kasir dan HP owner, atau aplikasi mobile jika tim lapangan butuh input langsung dari lapangan.",
    ],
  },
  tech: [
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Flutter (opsional)",
    "Docker",
    "VPS/Cloud",
  ],
  examples: [
    {
      title: "Use case: POS Cafe/Restoran",
      description:
        "Kasir dengan menu, meja, split bill, dan laporan per kategori — terhubung ke dapur dan owner dashboard secara real-time.",
    },
    {
      title: "Use case: Inventory Multi-Cabang",
      description:
        "Stok terpusat untuk beberapa cabang dengan mutasi barang, stock opname, dan alert barang hampir habis.",
    },
    {
      title: "Use case: Aplikasi Booking Klinik",
      description:
        "Pasien booking jadwal dokter online, reminder WhatsApp H-1, dan rekam antrian — mengurangi no-show dan admin manual.",
    },
  ],
  advantages: [
    "Menghemat jam kerja manual setiap hari",
    "Data operasional akurat dan bisa dicek real-time",
    "Mengurangi human error di pencatatan dan perhitungan",
    "Owner bisa memantau bisnis dari mana saja",
    "Dirancang sesuai SOP — tidak dipaksa mengikuti software jadi",
  ],
  limitations: [
    "Memerlukan komitmen tim untuk input data dengan disiplin",
    "Ada masa adaptasi 1-2 minggu saat awal pemakaian",
    "Perubahan SOP besar di kemudian hari mungkin perlu penyesuaian sistem",
  ],
  pricing: {
    range: "Rp 15.000.000 – Rp 60.000.000",
    factors: [
      "Jumlah modul (kasir, stok, booking, HR, dll)",
      "Jumlah cabang dan pengguna",
      "Integrasi hardware (printer thermal, barcode scanner, cash drawer)",
      "Mode offline vs selalu online",
      "Migrasi data dari sistem lama (Excel/software sebelumnya)",
    ],
  },
  faqs: [
    {
      question: "Apakah aplikasi kasir bisa jalan tanpa internet?",
      answer:
        "Bisa. Kami bisa membangun mode offline-first: transaksi tetap jalan saat internet mati dan otomatis sinkronisasi saat koneksi kembali — penting untuk toko dengan koneksi tidak stabil.",
    },
    {
      question: "Apakah bisa integrasi dengan printer dan barcode scanner?",
      answer:
        "Bisa. Kami mendukung printer thermal (ESC/POS), barcode scanner, dan cash drawer. Untuk web-based POS, kami sarankan hardware dengan driver standar agar kompatibel.",
    },
    {
      question: "Bagaimana jika staff saya tidak tech-savvy?",
      answer:
        "Itu pertimbangan utama kami saat mendesain. UI dibuat sangat sederhana — tombol besar, bahasa Indonesia, alur minimal. Kami juga sertakan training dan panduan video untuk tim Anda.",
    },
    {
      question: "Apakah data dari Excel lama bisa dipindahkan?",
      answer:
        "Bisa. Migrasi data produk, pelanggan, dan stok dari Excel/spreadsheet ke sistem baru termasuk dalam scope umum project.",
    },
    {
      question: "Bisakah sistem berkembang seiring cabang bertambah?",
      answer:
        "Ya, arsitektur yang kami bangun mendukung multi-cabang dan multi-user dari awal — menambah cabang baru tinggal konfigurasi, bukan development ulang.",
    },
  ],

  pillar: {
    href: "/jasa-pembuatan-aplikasi",
    label: "Jasa Pembuatan Aplikasi",
  },
  relatedServices: [
    {
      href: "/jasa-pembuatan-sistem-informasi",
      label: "Sistem Informasi",
    },
    { href: "/jasa-custom-software", label: "Custom Software" },
    { href: "/jasa-aplikasi-mobile", label: "Aplikasi Mobile" },
    { href: "/layanan/website-booking", label: "Website Booking" },
  ],
  relatedPortfolio: [
    { href: "/portfolio/pos-system", label: "Portal Agatha" },
  ],
};

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Bisnis & Kasir | Nufanas",
  description:
    "Jasa pembuatan aplikasi bisnis: POS/kasir, inventory, booking, CRM. Alur sesuai SOP perusahaan Anda. Untuk UMKM & enterprise. Mulai Rp 15 juta.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/jasa-pembuatan-aplikasi-bisnis`,
  },
  openGraph: {
    title: "Jasa Pembuatan Aplikasi Bisnis & Kasir | Nufanas",
    description:
      "Aplikasi operasional bisnis: kasir, stok, booking — mengikuti SOP Anda, bukan sebaliknya.",
    url: `${SITE_CONFIG.url}/jasa-pembuatan-aplikasi-bisnis`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetail content={content} />;
}
