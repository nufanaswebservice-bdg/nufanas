import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Tips, Tutorial & Insight Seputar Website dan SEO",
  description:
    "Baca artikel terbaru tentang web development, SEO, digital marketing, dan tips bisnis online. Konten berkualitas dari tim Nufanas Bandung.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

const articles = [
  {
    slug: "jasa-pembuatan-website-bandung-panduan-lengkap",
    title: "Jasa Pembuatan Website Bandung: Panduan Lengkap 2024",
    excerpt:
      "Panduan lengkap memilih jasa pembuatan website terbaik di Bandung. Tips, harga, dan rekomendasi untuk bisnis Anda.",
    category: "Website",
    date: "2024-12-01",
    readTime: "8 menit",
  },
  {
    slug: "cara-meningkatkan-seo-website-bisnis-lokal",
    title: "Cara Meningkatkan SEO Website untuk Bisnis Lokal Bandung",
    excerpt:
      "Strategi SEO lokal yang terbukti efektif untuk mendominasi pencarian Google di area Bandung dan Jawa Barat.",
    category: "SEO",
    date: "2024-11-15",
    readTime: "10 menit",
  },
  {
    slug: "website-company-profile-pentingnya-untuk-bisnis",
    title: "Website Company Profile: Mengapa Penting untuk Bisnis?",
    excerpt:
      "Alasan mengapa setiap bisnis perlu memiliki website company profile profesional dan bagaimana cara membuatnya.",
    category: "Tips",
    date: "2024-11-01",
    readTime: "6 menit",
  },
  {
    slug: "next-js-vs-wordpress-mana-yang-lebih-baik",
    title: "Next.js vs WordPress: Mana yang Lebih Baik untuk Website Bisnis?",
    excerpt:
      "Perbandingan lengkap Next.js dan WordPress dari segi performa, SEO, keamanan, dan biaya maintenance.",
    category: "Tutorial",
    date: "2024-10-20",
    readTime: "12 menit",
  },
  {
    slug: "panduan-memilih-domain-website-bisnis",
    title: "Panduan Memilih Domain untuk Website Bisnis",
    excerpt:
      "Tips memilih nama domain yang tepat untuk bisnis Anda. Ekstensi .com, .co.id, atau .id? Simak rekomendasinya.",
    category: "Tips",
    date: "2024-10-05",
    readTime: "5 menit",
  },
  {
    slug: "optimasi-kecepatan-website-core-web-vitals",
    title: "Optimasi Kecepatan Website: Panduan Core Web Vitals",
    excerpt:
      "Cara mengoptimasi Core Web Vitals website Anda untuk mendapatkan skor Lighthouse 100 dan ranking lebih baik di Google.",
    category: "Tutorial",
    date: "2024-09-20",
    readTime: "15 menit",
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-2 block">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Insight &{" "}
              <span className="gradient-text">Artikel Terbaru</span>
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Tips, tutorial, dan insight seputar web development, SEO, dan
              digital marketing dari tim Nufanas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-xs font-medium text-primary mb-3 px-2.5 py-1 bg-primary/10 rounded-full w-fit">
                  {article.category}
                </span>
                <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-sm text-muted mb-4 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(article.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
