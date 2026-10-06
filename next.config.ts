import type { NextConfig } from "next";

// Old city-targeted service slugs → national equivalents (308 permanent)
const LEGACY_SERVICE_REDIRECTS: Record<string, string> = {
  "jasa-website-bandung": "/jasa-pembuatan-website",
  "jasa-pembuatan-website-bandung": "/jasa-pembuatan-website",
  "web-developer-bandung": "/jasa-pembuatan-website",
  "web-design-bandung": "/jasa-website-custom",
  "website-company-profile-bandung": "/jasa-website-company-profile",
  "website-umkm-bandung": "/layanan/website-umkm",
  "website-toko-online-bandung": "/jasa-website-ecommerce",
  "website-furniture-bandung": "/jasa-website-ecommerce",
  "landing-page-bandung": "/layanan/landing-page",
  "website-hotel-bandung": "/layanan/website-booking",
  "website-rental-mobil-bandung": "/layanan/website-booking",
  "website-travel-bandung": "/layanan/website-booking",
  "website-klinik-bandung": "/layanan/website-booking",
  "website-kontraktor-bandung": "/jasa-website-company-profile",
  "website-industri-bandung": "/jasa-website-company-profile",
  "website-sekolah-bandung": "/jasa-website-custom",
  "website-cafe-bandung": "/jasa-website-custom",
  "website-properti-bandung": "/jasa-website-custom",
  "jasa-pembuatan-aplikasi-bandung": "/jasa-pembuatan-aplikasi",
  "jasa-aplikasi-android-bandung": "/jasa-aplikasi-android",
  "jasa-aplikasi-ios-bandung": "/jasa-aplikasi-ios",
  "jasa-aplikasi-mobile-bandung": "/jasa-aplikasi-mobile",
  "jasa-web-application-bandung": "/jasa-web-application",
  "jasa-marketplace-bandung": "/jasa-web-application",
  "jasa-dashboard-bandung": "/jasa-web-application",
  "jasa-custom-software-bandung": "/jasa-custom-software",
  "jasa-saas-bandung": "/jasa-custom-software",
  "jasa-sistem-informasi-bandung": "/jasa-pembuatan-sistem-informasi",
  "jasa-erp-bandung": "/jasa-pembuatan-sistem-informasi",
  "jasa-crm-bandung": "/jasa-pembuatan-sistem-informasi",
  "jasa-hris-bandung": "/jasa-pembuatan-sistem-informasi",
  "jasa-aplikasi-rumah-sakit-bandung": "/jasa-pembuatan-sistem-informasi",
  "jasa-pos-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-aplikasi-kasir-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-aplikasi-inventory-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-aplikasi-klinik-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-aplikasi-sekolah-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-aplikasi-hotel-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-aplikasi-cafe-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-aplikasi-restoran-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-aplikasi-rental-mobil-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-aplikasi-travel-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-aplikasi-properti-bandung": "/jasa-pembuatan-aplikasi-bisnis",
  "jasa-seo-bandung": "/layanan/jasa-seo",
};

// Portfolio slug renames (Phase 3 — descriptive slugs matching real projects)
const PORTFOLIO_REDIRECTS: Record<string, string> = {
  "saas-dashboard": "nuviral-ai-studio",
  "ecommerce-modern": "kaosdn99-ecommerce",
  "company-profile-premium": "bimbel-kedinasan-online",
  "restaurant-app": "lcc-surabaya",
  "clinic-management": "teman-sejiwa",
  "school-portal": "queenmassage",
  "pos-system": "portal-agatha",
  "travel-marketplace": "pena-sakti",
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
      ...Object.entries(PORTFOLIO_REDIRECTS).map(([slug, destination]) => ({
        source: `/portfolio/${slug}`,
        destination: `/portfolio/${destination}`,
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
