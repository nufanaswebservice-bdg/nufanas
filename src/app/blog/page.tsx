import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_ARTICLES, BLOG_CLUSTERS, type BlogCluster } from "@/lib/blog-data";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Panduan Website, Aplikasi & Teknologi untuk Bisnis",
  description:
    "Panduan praktis seputar pembuatan website, aplikasi, custom software, dan teknologi — ditulis dari pengalaman project nyata oleh tim Nufanas.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },

  openGraph: {
    title: "Blog — Panduan Website, Aplikasi & Teknologi | Nufanas",
    description:
      "Panduan praktis seputar pembuatan website, aplikasi, custom software, dan teknologi — ditulis dari pengalaman project nyata.",
    url: `${SITE_CONFIG.url}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Panduan Website, Aplikasi & Teknologi | Nufanas",
    description:
      "Panduan praktis seputar pembuatan website, aplikasi, custom software, dan teknologi — ditulis dari pengalaman project nyata.",
  },
};

const CLUSTER_ORDER: BlogCluster[] = [
  "website",
  "aplikasi",
  "teknologi",
  "bisnis",
  "pemasaran",
];

export default function BlogPage() {
  const byCluster = CLUSTER_ORDER.map((cluster) => ({
    cluster,
    meta: BLOG_CLUSTERS[cluster],
    articles: BLOG_ARTICLES.filter((a) => a.cluster === cluster).sort(
      (a, b) => (b.updated || b.date).localeCompare(a.updated || a.date),
    ),
  })).filter((g) => g.articles.length > 0);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Panduan & <span className="gradient-text">Insight</span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Panduan praktis tentang website, aplikasi, dan teknologi bisnis —
              ditulis dari pengalaman project nyata, bukan teori.
            </p>
          </div>

          {byCluster.map(({ cluster, meta, articles }) => (
            <section key={cluster} className="mb-16 last:mb-0">
              <div className="flex items-end justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {meta.label}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    {articles.length} artikel
                  </p>
                </div>
                <Link
                  href={meta.pillar.href}
                  className="group hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all shrink-0"
                >
                  {meta.pillar.label}
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 text-slate-900">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-100">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(article.updated || article.date).toLocaleDateString(
                          "id-ID",
                          { day: "numeric", month: "short", year: "numeric" },
                        )}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href={meta.pillar.href}
                className="sm:hidden mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                {meta.pillar.label}
                <ArrowRight size={14} />
              </Link>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
