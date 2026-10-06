import type { NextConfig } from "next";

// Old city-targeted service slugs → national equivalents (308 permanent)
const LEGACY_SERVICE_REDIRECTS: Record<string, string> = {
  "jasa-website-bandung": "/jasa-pembuatan-website",
  "jasa-pembuatan-website-bandung": "/jasa-pembuatan-website",
  "web-developer-bandung": "/jasa-pembuatan-website",
  "web-design-bandung": "/layanan/website-custom",
  "website-company-profile-bandung": "/layanan/website-company-profile",
  "website-umkm-bandung": "/layanan/website-umkm",
  "website-toko-online-bandung": "/layanan/website-ecommerce",
  "website-furniture-bandung": "/layanan/website-ecommerce",
  "landing-page-bandung": "/layanan/landing-page",
  "website-hotel-bandung": "/layanan/website-booking",
  "website-rental-mobil-bandung": "/layanan/website-booking",
  "website-travel-bandung": "/layanan/website-booking",
  "website-klinik-bandung": "/layanan/website-booking",
  "website-kontraktor-bandung": "/layanan/website-company-profile",
  "website-industri-bandung": "/layanan/website-company-profile",
  "website-sekolah-bandung": "/layanan/website-custom",
  "website-cafe-bandung": "/layanan/website-custom",
  "website-properti-bandung": "/layanan/website-custom",
  "jasa-pembuatan-aplikasi-bandung": "/jasa-pembuatan-aplikasi",
  "jasa-aplikasi-android-bandung": "/layanan/aplikasi-android",
  "jasa-aplikasi-ios-bandung": "/layanan/aplikasi-ios",
  "jasa-aplikasi-mobile-bandung": "/layanan/aplikasi-mobile",
  "jasa-web-application-bandung": "/layanan/web-application",
  "jasa-marketplace-bandung": "/layanan/web-application",
  "jasa-dashboard-bandung": "/layanan/web-application",
  "jasa-custom-software-bandung": "/layanan/custom-software",
  "jasa-saas-bandung": "/layanan/custom-software",
  "jasa-sistem-informasi-bandung": "/layanan/sistem-informasi",
  "jasa-erp-bandung": "/layanan/sistem-informasi",
  "jasa-crm-bandung": "/layanan/sistem-informasi",
  "jasa-hris-bandung": "/layanan/sistem-informasi",
  "jasa-aplikasi-rumah-sakit-bandung": "/layanan/sistem-informasi",
  "jasa-pos-bandung": "/layanan/aplikasi-bisnis",
  "jasa-aplikasi-kasir-bandung": "/layanan/aplikasi-bisnis",
  "jasa-aplikasi-inventory-bandung": "/layanan/aplikasi-bisnis",
  "jasa-aplikasi-klinik-bandung": "/layanan/aplikasi-bisnis",
  "jasa-aplikasi-sekolah-bandung": "/layanan/aplikasi-bisnis",
  "jasa-aplikasi-hotel-bandung": "/layanan/aplikasi-bisnis",
  "jasa-aplikasi-cafe-bandung": "/layanan/aplikasi-bisnis",
  "jasa-aplikasi-restoran-bandung": "/layanan/aplikasi-bisnis",
  "jasa-aplikasi-rental-mobil-bandung": "/layanan/aplikasi-bisnis",
  "jasa-aplikasi-travel-bandung": "/layanan/aplikasi-bisnis",
  "jasa-aplikasi-properti-bandung": "/layanan/aplikasi-bisnis",
  "jasa-seo-bandung": "/layanan/jasa-seo",
};

const LEGACY_BLOG_REDIRECTS: Record<string, string> = {
  "jasa-pembuatan-website-bandung-panduan-lengkap":
    "/blog/jasa-pembuatan-website-panduan-lengkap",
  "jasa-pembuatan-aplikasi-android-bandung":
    "/blog/jasa-pembuatan-aplikasi-android",
  "jasa-seo-bandung-apa-yang-didapat": "/blog/jasa-seo-panduan-lengkap",
  "software-house-bandung-cara-memilih": "/blog/cara-memilih-software-house",
};

// Layanan yang sekarang punya dedicated page /jasa-* (Phase 2)
const LAYANAN_TO_JASA: Record<string, string> = {
  "website-company-profile": "/jasa-website-company-profile",
  "website-ecommerce": "/jasa-website-ecommerce",
  "website-custom": "/jasa-website-custom",
  "web-application": "/jasa-web-application",
  "aplikasi-android": "/jasa-aplikasi-android",
  "aplikasi-ios": "/jasa-aplikasi-ios",
  "aplikasi-mobile": "/jasa-aplikasi-mobile",
  "aplikasi-bisnis": "/jasa-pembuatan-aplikasi-bisnis",
  "custom-software": "/jasa-custom-software",
  "sistem-informasi": "/jasa-pembuatan-sistem-informasi",
};

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    // Parent folder has its own lockfile + src/proxy.ts; pin root to this project
    root: __dirname,
  },
  async redirects() {
    return [
      ...Object.entries(LAYANAN_TO_JASA).map(([slug, destination]) => ({
        source: `/layanan/${slug}`,
        destination,
        permanent: true,
      })),
      ...Object.entries(LEGACY_SERVICE_REDIRECTS).map(([slug, destination]) => ({
        source: `/layanan/${slug}`,
        destination,
        permanent: true,
      })),
      ...Object.entries(LEGACY_BLOG_REDIRECTS).map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
