import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateBreadcrumbSchema,
  generateCaseStudySchema,
} from "@/lib/schema";
import { BrowserMockup } from "@/components/portfolio/browser-mockup";
import { PhoneMockup } from "@/components/portfolio/phone-mockup";
import { VideoShowcase } from "@/components/portfolio/video-showcase";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Monitor,
  Check,
  Target,
  AlertTriangle,
  Lightbulb,
  Layers,
  Building2,
  TrendingUp,
  Code2,
} from "lucide-react";

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
    title: `${item.title} — Case Study | Nufanas`,
    description: item.tagline + ". " + item.description.slice(0, 120),
    alternates: {
      canonical: `${SITE_CONFIG.url}/portfolio/${id}`,
    },
    openGraph: {
      title: `${item.title} — Case Study | Nufanas`,
      description: item.tagline,
      url: `${SITE_CONFIG.url}/portfolio/${id}`,
      images: [{ url: item.image, width: 1200, height: 630, alt: item.imageAlt }],
    },
  };
}

const PROCESS_STEPS = [
  "Discovery & requirement analysis",
  "UI/UX design & wireframe",
  "Development & integrasi",
  "Testing & quality assurance",
  "Deployment & go-live",
  "Maintenance & support",
];

export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params;
  const item = getPortfolioItem(id);

  if (!item) {
    notFound();
  }

  const relatedItems = PORTFOLIO_ITEMS.filter(
    (p) =>
      p.id !== id && p.categories.some((c) => item.categories.includes(c))
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
      <JsonLd
        data={generateCaseStudySchema({
          title: item.title,
          description: item.description,
          slug: item.id,
          image: item.image,
          imageAlt: item.imageAlt,
          video: item.video,
        })}
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

          {/* ============ 1. HEADER / OVERVIEW ============ */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {item.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 rounded-full"
                >
                  {cat}
                </span>
              ))}
              {item.result && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 px-3 py-1 bg-green-50 rounded-full">
                  <TrendingUp size={12} />
                  {item.result}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              {item.title}
            </h1>
            <p className="text-lg text-primary font-medium mb-4">
              {item.tagline}
            </p>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Building2 size={15} className="text-slate-400" />
                {item.clientType}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Code2 size={15} className="text-slate-400" />
                Built by{" "}
                <Link
                  href="/tentang"
                  className="font-medium text-primary hover:underline"
                >
                  Nufanas
                </Link>
              </span>
            </div>
          </header>

          {/* ============ 2. DESKTOP PREVIEW (browser mockup) ============ */}
          <div className="mb-8">
            <BrowserMockup
              src={item.image}
              alt={item.imageAlt}
              url={item.previewUrl}
              priority
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href={item.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl gradient-primary text-white font-medium hover:shadow-lg transition-all"
            >
              <Monitor size={18} />
              Lihat Website Live
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border border-slate-300 text-slate-700 font-medium hover:border-primary hover:text-primary transition-all"
            >
              <ExternalLink size={18} />
              Buat Project Serupa
            </Link>
          </div>

          {/* ============ 3. KEBUTUHAN & TUJUAN ============ */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                <Layers size={18} className="text-primary" />
                Kebutuhan Bisnis
              </h2>
              <ul className="space-y-3">
                {item.businessNeeds.map((need) => (
                  <li
                    key={need}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {need}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                <Target size={18} className="text-primary" />
                Tujuan Project
              </h2>
              <ul className="space-y-3">
                {item.objectives.map((obj) => (
                  <li
                    key={obj}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ============ 4. TANTANGAN & SOLUSI ============ */}
          <div className="mb-14">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-5">
              <AlertTriangle size={20} className="text-amber-500" />
              Tantangan Teknis
            </h2>
            <div className="grid sm:grid-cols-1 gap-3 mb-8">
              {item.challenges.map((ch) => (
                <div
                  key={ch}
                  className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-100 text-sm text-slate-700"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {ch}
                </div>
              ))}
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-4">
              <Lightbulb size={20} className="text-primary" />
              Solusi yang Kami Bangun
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {item.solution}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {item.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 text-sm text-slate-700"
                >
                  <Check
                    size={16}
                    className="text-green-500 mt-0.5 shrink-0"
                  />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* ============ 5. RESPONSIVE PREVIEW ============ */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Preview Responsif
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Screenshot asli project — tampilan desktop dan mobile.
            </p>
            <div className="grid md:grid-cols-[1fr_240px] gap-6 items-start">
              <BrowserMockup
                src={item.image}
                alt={`${item.imageAlt} — tampilan desktop`}
                url={item.previewUrl}
              />
              <PhoneMockup
                src={item.image}
                alt={`${item.imageAlt} — tampilan mobile`}
              />
            </div>
          </div>

          {/* ============ 6. VIDEO SHOWCASE (only if real video) ============ */}
          {item.video && (
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Video Walkthrough
              </h2>
              <VideoShowcase video={item.video} heading={item.video.title} />
            </div>
          )}

          {/* ============ 7. HOW WE BUILT THIS ============ */}
          <div className="mb-14">
            <span className="eyebrow mb-3">Behind the Build</span>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              How We Built This
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Keputusan arsitektur dan teknologi di balik project ini.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {item.architecture.map((arch) => (
                <div
                  key={arch.title}
                  className="p-5 rounded-2xl bg-white border border-slate-200"
                >
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                    {arch.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {arch.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-3 text-sm">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ============ 8. DEVELOPMENT PROCESS ============ */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Proses Development
            </h2>
            <ol className="relative border-l-2 border-slate-200 space-y-6 ml-3">
              {PROCESS_STEPS.map((step, i) => (
                <li key={step} className="pl-6 relative">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full gradient-primary border-2 border-white shadow" />
                  <span className="text-xs font-semibold text-primary">
                    Tahap {i + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-800">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* ============ 9. RESULTS (only real) ============ */}
          {item.result && (
            <div className="mb-14 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-violet-500/5 border border-primary/10">
              <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-2">
                <TrendingUp size={18} className="text-green-600" />
                Hasil Project
              </h2>
              <p className="text-slate-700 font-medium">{item.result}</p>
            </div>
          )}

          {/* ============ 10. RELATED SERVICES ============ */}
          <div className="mb-14 p-6 rounded-2xl bg-white border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Butuh solusi serupa?
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Project ini dibangun dengan layanan Nufanas berikut:
            </p>
            <div className="flex flex-wrap gap-3">
              {item.relatedServices.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/5 border border-primary/10 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                >
                  {svc.label}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* ============ 11. RELATED PROJECTS ============ */}
          {relatedItems.length > 0 && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Project Terkait
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
                        alt={related.imageAlt}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-slate-900 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {related.categories.join(" · ")}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ============ 12. CTA ============ */}
          <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-primary to-violet-600 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">
              Built by Nufanas
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Siap Membangun Project Anda?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Ceritakan kebutuhan bisnis Anda — kami bantu wujudkan menjadi
              website atau aplikasi yang bekerja untuk Anda.
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-white text-primary font-semibold hover:shadow-lg transition-all"
            >
              Konsultasi Gratis
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
