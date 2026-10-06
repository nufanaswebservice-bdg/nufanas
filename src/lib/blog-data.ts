export interface BlogSection {
  title: string;
  /** HTML content — rendered inside .prose */
  body: string;
}

export type BlogCluster =
  | "website"
  | "aplikasi"
  | "teknologi"
  | "bisnis"
  | "pemasaran";

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  cluster: BlogCluster;
  /** Primary search intent — one per article */
  intent: "informational" | "commercial" | "transactional";
  date: string;
  updated?: string;
  readTime: string;
  author: string;
  tags: string[];
  /** Answer-first intro paragraph(s) */
  intro: string;
  keyTakeaways: string[];
  sections: BlogSection[];
  faqs?: { question: string; answer: string }[];
  relatedServices?: { href: string; label: string }[];
  relatedPortfolio?: { href: string; label: string }[];
}

export const BLOG_CATEGORIES = [
  "Website",
  "Aplikasi",
  "Teknologi",
  "Bisnis",
  "SEO & Marketing",
] as const;

export const BLOG_CLUSTERS: Record<
  BlogCluster,
  { label: string; pillar: { href: string; label: string } }
> = {
  website: {
    label: "Website",
    pillar: { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
  },
  aplikasi: {
    label: "Aplikasi & Software",
    pillar: {
      href: "/jasa-pembuatan-aplikasi",
      label: "Jasa Pembuatan Aplikasi",
    },
  },
  teknologi: {
    label: "Teknologi",
    pillar: { href: "/tentang", label: "Tentang Nufanas" },
  },
  bisnis: {
    label: "Bisnis",
    pillar: { href: "/harga", label: "Harga & Paket" },
  },
  pemasaran: {
    label: "SEO & Marketing",
    pillar: { href: "/layanan/jasa-seo", label: "Jasa SEO" },
  },
};

import { WEBSITE_ARTICLES } from "./blog/cluster-website";
import { APLIKASI_ARTICLES } from "./blog/cluster-aplikasi";
import { TEKNOLOGI_ARTICLES } from "./blog/cluster-teknologi";
import { BISNIS_ARTICLES } from "./blog/cluster-bisnis";
import { PEMASARAN_ARTICLES } from "./blog/cluster-pemasaran";

export const BLOG_ARTICLES: BlogArticle[] = [
  ...WEBSITE_ARTICLES,
  ...APLIKASI_ARTICLES,
  ...TEKNOLOGI_ARTICLES,
  ...BISNIS_ARTICLES,
  ...PEMASARAN_ARTICLES,
];

export function getArticleBySlug(slug: string) {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: BlogArticle, limit = 3) {
  return BLOG_ARTICLES.filter(
    (a) => a.slug !== article.slug && a.cluster === article.cluster,
  )
    .sort((a, b) => (b.updated || b.date).localeCompare(a.updated || a.date))
    .slice(0, limit);
}

export interface AuthorProfile {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  /** Portfolio project slugs the team built */
  projectSlugs: string[];
}

export const AUTHORS: Record<string, AuthorProfile> = {
  "tim-nufanas": {
    slug: "tim-nufanas",
    name: "Tim Nufanas",
    role: "Web & App Development Team",
    bio: "Tim developer Nufanas yang mengerjakan website, web application, dan aplikasi mobile untuk bisnis di seluruh Indonesia. Artikel ditulis dari pengalaman langsung mengerjakan project client dan produk sendiri.",
    expertise: [
      "Next.js & React",
      "Node.js & TypeScript",
      "PostgreSQL & desain database",
      "Flutter & React Native",
      "Docker & deployment VPS",
      "Technical SEO & Core Web Vitals",
    ],
    projectSlugs: [
      "nuviral-ai-studio",
      "kaosdn99-ecommerce",
      "bimbel-kedinasan-online",
      "lcc-surabaya",
      "teman-sejiwa",
      "queenmassage",
      "portal-agatha",
      "pena-sakti",
    ],
  },
};

/**
 * Blog content audit (Phase 4): artikel lama yang di-merge/dihapus.
 * Key = slug lama, value = tujuan redirect permanen.
 */
export const BLOG_REDIRECTS: Record<string, string> = {
  // Artikel industri → digabung ke panduan-website-per-industri
  "website-klinik-fitur-yang-wajib-ada":
    "/blog/panduan-website-per-industri",
  "website-hotel-meningkatkan-direct-booking":
    "/blog/panduan-website-per-industri",
  "website-rental-mobil-fitur-dan-tips":
    "/blog/panduan-website-per-industri",
  "website-cafe-restoran-meningkatkan-pelanggan":
    "/blog/panduan-website-per-industri",
  "website-properti-fitur-dan-strategi-seo":
    "/blog/panduan-website-per-industri",
  "cara-membuat-website-sekolah-yang-informatif":
    "/blog/panduan-website-per-industri",
  // Duplikat SEO/marketing → digabung ke artikel kanonik
  "cara-meningkatkan-seo-website-bisnis-lokal":
    "/blog/local-seo-checklist-bisnis-lokal",
  "cara-optimasi-google-my-business":
    "/blog/local-seo-checklist-bisnis-lokal",
  "content-marketing-strategi-untuk-website-bisnis":
    "/blog/cara-meningkatkan-traffic-website-organik",
  "strategi-digital-marketing-untuk-umkm":
    "/blog/cara-meningkatkan-traffic-website-organik",
  "chatgpt-untuk-bisnis-use-case-dan-implementasi":
    "/blog/ai-automation-untuk-bisnis-2025",
  "responsive-design-pentingnya-untuk-mobile":
    "/blog/ui-ux-design-meningkatkan-conversion-rate",
  // Thin/outdated → dihapus
  "tren-website-2025-yang-wajib-diketahui": "/blog",
};
