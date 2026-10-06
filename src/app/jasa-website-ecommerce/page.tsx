import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ServiceDetail,
  ServicePageContent,
} from "@/components/services/service-detail";

const content: ServicePageContent = {
  path: "/jasa-website-ecommerce",
  heading: "Jasa Pembuatan Website E-Commerce & Toko Online",
  eyebrow: "E-Commerce",
  intro:
    "Toko online yang Anda miliki sepenuhnya — bukan sekadar lapak di marketplace. Nufanas membangun website e-commerce dengan katalog produk, payment gateway, ongkir otomatis, dan order management agar bisnis Anda bisa jualan 24 jam tanpa potongan komisi platform.",
  highlights: [
    "Katalog produk, cart, dan checkout yang cepat",
    "Payment gateway: QRIS, transfer bank, e-wallet, kartu",
    "Ongkir otomatis (JNE, J&T, SiCepat, GoSend, dll)",
    "Dashboard order, stok, dan laporan penjualan",
    "Bebas komisi marketplace — margin tetap milik Anda",
  ],
  priceLabel: "Mulai Rp 8.000.000",
  serviceType: "E-Commerce Development",

  problem: {
    title: "Kenapa Bisnis Butuh Toko Online Sendiri",
    paragraphs: [
      "Berjualan hanya di marketplace berarti Anda menyewa lapak orang lain: komisi 5-15% per transaksi, persaingan harga brutal, dan data pelanggan yang tidak pernah benar-benar menjadi milik Anda. Ketika marketplace mengubah aturan atau menaikkan biaya, bisnis Anda ikut terdampak.",
      "Website e-commerce sendiri mengubah itu: margin penuh di tangan Anda, data pelanggan tersimpan untuk remarketing, dan brand Anda yang diingat — bukan platformnya.",
    ],
  },
  forWhom: {
    title: "Layanan Ini Cocok Untuk",
    items: [
      "Brand dan produsen yang ingin punya channel D2C (direct-to-consumer)",
      "Toko retail yang ingin jualan online tanpa komisi marketplace",
      "UMKM yang sudah punya pelanggan dan ingin scale up",
      "Bisnis dengan produk kustom yang sulit distandardisasi di marketplace",
      "Distributor yang butuh katalog online + pemesanan B2B",
      "Fashion brand, F&B, dan produk kreatif",
    ],
  },
  features: [
    {
      title: "Katalog & Manajemen Produk",
      description:
        "Produk dengan varian (ukuran, warna), stok otomatis, kategori bertingkat, dan pencarian cepat.",
    },
    {
      title: "Checkout & Payment Gateway",
      description:
        "Midtrans/Xendit — QRIS, virtual account semua bank, GoPay, OVO, DANA, dan kartu kredit dalam satu integrasi.",
    },
    {
      title: "Ongkir Otomatis",
      description:
        "Kalkulasi ongkir real-time dari berbagai kurir. Mendukung kode pos hingga kecamatan di seluruh Indonesia.",
    },
    {
      title: "Order Management Dashboard",
        description:
        "Status pesanan, resi, notifikasi WhatsApp/email ke pelanggan, dan laporan penjualan per periode.",
    },
    {
      title: "Promo & Flash Sale",
      description:
        "Kupon diskon, flash sale dengan countdown, harga grosir bertingkat, dan program poin pelanggan.",
    },
    {
      title: "SEO & Performa",
      description:
        "Halaman produk terindeks Google dengan schema Product — pelanggan bisa menemukan produk Anda lewat pencarian.",
    },
  ],
  approach: {
    title: "Bagaimana Kami Mengerjakannya",
    paragraphs: [
      "Kami mulai dari memetakan alur belanja ideal untuk produk Anda: bagaimana pelanggan menemukan produk, membandingkan, membayar, dan menerima update pengiriman. Setiap hambatan di alur ini adalah potensi kehilangan penjualan.",
      "Stack yang kami gunakan — Next.js untuk storefront yang cepat, payment gateway resmi dengan settlement otomatis, dan dashboard admin yang bisa dioperasikan staf non-teknis.",
      "Setelah launch, kami dampingi fase awal: training tim Anda mengelola produk dan pesanan, plus masa garansi untuk perbaikan bug.",
    ],
  },
  tech: [
    "Next.js",
    "PostgreSQL",
    "Midtrans/Xendit",
    "RajaOngkir/Biteship",
    "TailwindCSS",
    "Redis",
  ],
  examples: [
    {
      title: "KaosDN99 — E-Commerce Streetwear",
      description:
        "Toko online brand streetwear dengan katalog produk, flash sale, custom order, wishlist, dan checkout multi-payment — melayani 10K+ customer.",
    },
    {
      title: "Use case: Distributor B2B",
      description:
        "Katalog online dengan harga khusus member, minimum order, dan purchase order — memangkas proses pemesanan manual via chat.",
    },
    {
      title: "Use case: F&B Pre-Order",
      description:
        "Sistem pre-order dengan jadwal produksi, slot pengiriman terbatas, dan pembayaran DP otomatis.",
    },
  ],
  advantages: [
    "Tanpa potongan komisi platform — margin 100% milik Anda",
    "Data pelanggan (email, WA, riwayat belanja) menjadi aset remarketing",
    "Brand building: pelanggan mengingat nama toko Anda",
    "Produk bisa ditemukan lewat Google — sumber traffic gratis jangka panjang",
    "Fleksibel menentukan promo, bundling, dan kebijakan sendiri",
  ],
  limitations: [
    "Berbeda dengan marketplace, Anda perlu mendatangkan traffic sendiri (SEO, iklan, sosmed)",
    "Memerlukan komitmen operasional: balas chat, proses pesanan, update stok",
    "Biaya awal lebih tinggi dibanding buka lapak gratis di marketplace — tapi ROI jangka panjang lebih baik",
  ],
  pricing: {
    range: "Rp 8.000.000 – Rp 40.000.000",
    factors: [
      "Jumlah produk dan kompleksitas varian",
      "Integrasi payment gateway dan kurir",
      "Fitur promo, membership, dan poin loyalitas",
      "Kebutuhan multi-warehouse atau multi-seller",
      "Desain custom vs pengembangan dari basis yang ada",
    ],
  },
  faqs: [
    {
      question: "Apakah toko online saya bisa terhubung dengan marketplace?",
      answer:
        "Bisa. Kami dapat mengintegrasikan sinkronisasi produk dan pesanan dengan marketplace seperti Tokopedia atau Shopee melalui middleware/API, sehingga Anda mengelola semuanya dari satu dashboard.",
    },
    {
      question: "Payment gateway apa saja yang didukung?",
      answer:
        "Kami umumnya menggunakan Midtrans atau Xendit yang sudah mencakup QRIS, virtual account semua bank besar, e-wallet (GoPay, OVO, DANA, ShopeePay), dan kartu kredit — cukup satu integrasi untuk semua metode.",
    },
    {
      question: "Apakah pelanggan bisa bayar COD?",
      answer:
        "Bisa. Kami dapat mengaktifkan opsi COD untuk area tertentu, atau COD melalui kurir yang mendukung seperti J&T dan SiCepat.",
    },
    {
      question: "Bagaimana dengan keamanan transaksi?",
      answer:
        "Semua pembayaran diproses oleh payment gateway resmi berlisensi Bank Indonesia — data kartu tidak pernah menyentuh server Anda. Kami juga menerapkan SSL, proteksi fraud dasar, dan validasi order otomatis.",
    },
    {
      question: "Apakah bisa mulai dari katalog sederhana dulu?",
      answer:
        "Sangat bisa. Banyak client kami mulai dari katalog + checkout WhatsApp dulu, lalu upgrade ke payment gateway penuh setelah volume penjualan tumbuh. Arsitektur kami mendukung upgrade bertahap.",
    },
  ],

  pillar: { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
  relatedServices: [
    { href: "/jasa-website-custom", label: "Jasa Website Custom" },
    { href: "/jasa-web-application", label: "Jasa Web Application" },
    { href: "/layanan/website-umkm", label: "Website UMKM" },
    { href: "/layanan/jasa-seo", label: "Jasa SEO" },
  ],
  relatedPortfolio: [
    { href: "/portfolio/kaosdn99-ecommerce", label: "KaosDN99 E-Commerce" },
  ],
  relatedArticles: [
    {
      href: "/blog/jasa-pembuatan-website-panduan-lengkap",
      label: "Jasa Pembuatan Website: Panduan Lengkap",
    },
  ],
};

export const metadata: Metadata = {
  title: "Jasa Website E-Commerce & Toko Online | Nufanas",
  description:
    "Jasa pembuatan website e-commerce dan toko online: payment gateway, ongkir otomatis, order management. Tanpa komisi marketplace. Mulai Rp 8 juta.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/jasa-website-ecommerce`,
  },
  openGraph: {
    title: "Jasa Website E-Commerce & Toko Online | Nufanas",
    description:
      "Toko online yang Anda miliki sepenuhnya — payment gateway, ongkir otomatis, dan dashboard order lengkap.",
    url: `${SITE_CONFIG.url}/jasa-website-ecommerce`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetail content={content} />;
}
