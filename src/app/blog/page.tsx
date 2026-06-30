import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "@/lib/blog-data";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Tips, Tutorial & Insight Seputar Website, Aplikasi dan SEO",
  description:
    "Baca artikel terbaru tentang web development, mobile app, SEO, digital marketing, AI, dan tips bisnis online. Konten berkualitas dari tim Nufanas.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Beranda", href: "/" },
        { name: "Blog", href: "/blog" },
      ])} />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-2 block">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Insight & <span className="gradient-text">Artikel Terbaru</span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Tips, tutorial, dan insight seputar web development, mobile app,
              SEO, AI, dan digital marketing dari tim Nufanas.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {BLOG_CATEGORIES.map((cat) => (
              <span key={cat} className="px-3 py-1.5 text-xs font-medium bg-white border border-slate-200 rounded-full text-slate-600">
                {cat}
              </span>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-xs font-medium text-primary mb-3 px-2.5 py-1 bg-primary/10 rounded-full w-fit">
                  {article.category}
                </span>
                <h2 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 text-slate-900">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">
                  {article.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(article.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
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
