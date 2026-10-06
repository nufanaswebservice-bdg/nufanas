import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import {
  getArticleBySlug,
  getRelatedArticles,
  BLOG_ARTICLES,
  BLOG_CLUSTERS,
  AUTHORS,
} from "@/lib/blog-data";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFAQSchema,
} from "@/lib/schema";
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  Tag,
  ArrowRight,
  FolderOpen,
} from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const author = AUTHORS[article.author];
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updated || article.date,
      authors: [author?.name || "Tim Nufanas"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const cluster = BLOG_CLUSTERS[article.cluster];
  const author = AUTHORS[article.author];
  const related = getRelatedArticles(article, 4);

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: cluster.label, href: "/blog" },
          { name: article.title, href: `/blog/${slug}` },
        ])}
      />
      <JsonLd
        data={generateArticleSchema({
          title: article.title,
          description: article.description,
          slug: article.slug,
          datePublished: article.date,
          dateModified: article.updated || article.date,
          author: author?.name || "Tim Nufanas",
          authorUrl: author ? `${SITE_CONFIG.url}/penulis/${author.slug}` : undefined,
        })}
      />
      {article.faqs && article.faqs.length > 0 && (
        <JsonLd data={generateFAQSchema(article.faqs)} />
      )}

      <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-slate-400" />
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-slate-400" />
                <span className="text-slate-400">{cluster.label}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-slate-400" />
                <span className="text-slate-900 font-medium line-clamp-1">
                  {article.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
              <FolderOpen size={12} />
              {cluster.label}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="summary text-lg text-slate-600 mb-5">
              {article.description}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
              <Link
                href={`/penulis/${author?.slug}`}
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <User size={14} />
                {author?.name || "Tim Nufanas"}
              </Link>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(article.date)}
                {article.updated && article.updated !== article.date && (
                  <span className="text-slate-400">
                    (diperbarui {formatDate(article.updated)})
                  </span>
                )}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>
          </header>

          {/* Intro */}
          <p className="lead text-lg text-slate-700 mb-8">{article.intro}</p>

          {/* Key Takeaways */}
          {article.keyTakeaways.length > 0 && (
            <section className="key-takeaways mb-10 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Ringkasan Singkat
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {article.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="text-primary font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Body */}
          <div className="prose prose-slate max-w-none mb-10">
            {article.sections.map((section, i) => (
              <section key={i}>
                <h2>{section.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: section.body }} />
              </section>
            ))}
          </div>

          {/* FAQ */}
          {article.faqs && article.faqs.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Pertanyaan Umum
              </h2>
              <div className="space-y-4">
                {article.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-white border border-slate-200"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related services */}
          {article.relatedServices && article.relatedServices.length > 0 && (
            <section className="mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Layanan Terkait
              </h2>
              <ul className="space-y-2.5">
                {article.relatedServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-sm font-medium text-slate-800 hover:text-primary transition-colors"
                    >
                      {link.label}
                      <ArrowRight
                        size={14}
                        className="text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Related portfolio */}
          {article.relatedPortfolio && article.relatedPortfolio.length > 0 && (
            <section className="mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Project Terkait
              </h2>
              <ul className="space-y-2.5">
                {article.relatedPortfolio.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-sm font-medium text-slate-800 hover:text-primary transition-colors"
                    >
                      {link.label}
                      <ArrowRight
                        size={14}
                        className="text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CTA */}
          <section className="mb-10 p-8 rounded-2xl gradient-primary text-white text-center">
            <h2 className="text-xl font-bold mb-2">
              Butuh Bantuan untuk Project Anda?
            </h2>
            <p className="text-white/80 mb-4 text-sm">
              Konsultasi gratis dengan tim Nufanas — tanpa komitmen.
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center h-10 px-6 rounded-lg bg-white text-primary font-medium text-sm"
            >
              Konsultasi Gratis
            </Link>
          </section>

          {/* Author box */}
          {author && (
            <section className="mb-10 p-6 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Ditulis oleh</p>
                  <Link
                    href={`/penulis/${author.slug}`}
                    className="font-semibold text-slate-900 hover:text-primary transition-colors"
                  >
                    {author.name}
                  </Link>
                  <p className="text-xs text-slate-500 mb-2">{author.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Artikel Terkait
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition-all"
                  >
                    <h3 className="font-semibold text-sm text-slate-900 mb-1 line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {BLOG_CLUSTERS[rel.cluster].label} · {rel.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
