import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ArrowLeft, ExternalLink, Check, Monitor } from "lucide-react";

type Props = {
  params: Promise<{ id: string }>;
};

function getPortfolioItem(id: string) {
  return PORTFOLIO_ITEMS.find((item) => item.id === id);
}

export async function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = getPortfolioItem(id);
  if (!item) return {};

  return {
    title: `${item.title} - Portfolio | Nufanas`,
    description: item.description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/portfolio/${id}`,
    },
    openGraph: {
      title: `${item.title} - Portfolio Nufanas`,
      description: item.description,
      url: `${SITE_CONFIG.url}/portfolio/${id}`,
      images: [{ url: item.image, width: 1200, height: 630 }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params;
  const item = getPortfolioItem(id);

  if (!item) {
    notFound();
  }

  const relatedItems = PORTFOLIO_ITEMS.filter(
    (p) => p.id !== id && p.category === item.category
  ).slice(0, 3);

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
          { name: item.title, href: `/portfolio/${id}` },
        ])}
      />

      <article className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke Portfolio
          </Link>

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                {item.category}
              </span>
              {item.result && (
                <span className="text-xs font-medium text-green-600 px-3 py-1 bg-green-50 rounded-full">
                  📈 {item.result}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              {item.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </header>

          {/* Preview Image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-8">
            <Image
              src={item.image}
              alt={`Preview ${item.title}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={item.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl gradient-primary text-white font-medium hover:shadow-lg transition-all"
            >
              <Monitor size={18} />
              Live Preview
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border border-slate-300 text-slate-700 font-medium hover:border-primary hover:text-primary transition-all"
            >
              <ExternalLink size={18} />
              Buat Project Serupa
            </Link>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Fitur Utama
              </h2>
              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <Check
                      size={16}
                      className="text-green-500 mt-0.5 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Teknologi
              </h2>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Tertarik dengan project ini?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Kami bisa membuat project serupa atau lebih baik untuk bisnis
                  Anda. Konsultasi gratis!
                </p>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  Hubungi Kami →
                </Link>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedItems.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Project Serupa
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedItems.map((related) => (
                  <Link
                    key={related.id}
                    href={`/portfolio/${related.id}`}
                    className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-slate-900 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {related.category}
                      </p>
                    </div>
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
