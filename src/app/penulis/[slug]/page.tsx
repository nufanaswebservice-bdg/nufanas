import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { AUTHORS, BLOG_ARTICLES, BLOG_CLUSTERS } from "@/lib/blog-data";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  User,
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.values(AUTHORS).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = AUTHORS[slug];
  if (!author) return {};
  return {
    title: `${author.name} — ${author.role}`,
    description: author.bio,
    alternates: { canonical: `${SITE_CONFIG.url}/penulis/${slug}` },
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = AUTHORS[slug];
  if (!author) notFound();

  const articles = BLOG_ARTICLES.filter((a) => a.author === author.slug).sort(
    (a, b) => (b.updated || b.date).localeCompare(a.updated || a.date),
  );
  const projects = PORTFOLIO_ITEMS.filter((p) =>
    author.projectSlugs.includes(p.id),
  );

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: author.name, href: `/penulis/${slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
            description: author.bio,
            worksFor: { "@id": `${SITE_CONFIG.url}/#organization` },
            knowsAbout: author.expertise,
          },
        }}
      />

      <article className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <span className="text-slate-900 font-medium">{author.name}</span>
              </li>
            </ol>
          </nav>

          {/* Profile header */}
          <header className="mb-12 flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <User size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-1">
                {author.name}
              </h1>
              <p className="text-primary font-medium mb-3">{author.role}</p>
              <p className="text-slate-600 leading-relaxed">{author.bio}</p>
            </div>
          </header>

          {/* Expertise */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Keahlian</h2>
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Project yang Dikerjakan
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/portfolio/${project.id}`}
                    className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-sm text-slate-900 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink
                        size={14}
                        className="text-slate-400 shrink-0 mt-0.5"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 mb-2">
                      {project.categories.join(" · ")}
                    </p>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {project.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Articles */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Artikel oleh {author.name} ({articles.length})
            </h2>
            <div className="space-y-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition-all"
                >
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-slate-900 group-hover:text-primary transition-colors line-clamp-1">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                      <span>{BLOG_CLUSTERS[article.cluster].label}</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={10} />
                        {new Date(
                          article.updated || article.date,
                        ).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-slate-300 group-hover:text-primary shrink-0 transition-colors"
                  />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
