import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";
import { NAP } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generatePillarServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

export interface ServicePageContent {
  /** canonical path, e.g. /jasa-website-custom */
  path: string;
  /** H1 halaman */
  heading: string;
  /** label kecil di atas H1 */
  eyebrow: string;
  /** paragraf pembuka di bawah H1 (answer-first) */
  intro: string;
  /** 4-5 poin ringkas keunggulan */
  highlights: string[];
  /** estimasi harga singkat, e.g. "Mulai Rp 5.000.000" */
  priceLabel: string;
  serviceType: string;

  problem: { title: string; paragraphs: string[] };
  /** siapa yang cocok memakai layanan ini */
  forWhom: { title: string; items: string[] };
  features: { title: string; description: string }[];
  /** perbedaan/cara kerja spesifik layanan ini */
  approach: { title: string; paragraphs: string[] };
  tech: string[];
  /** contoh nyata / use case */
  examples: { title: string; description: string }[];
  advantages: string[];
  limitations: string[];
  pricing: { range: string; factors: string[] };
  faqs: { question: string; answer: string }[];

  /** internal links */
  pillar: { href: string; label: string };
  relatedServices: { href: string; label: string }[];
  relatedPortfolio?: { href: string; label: string }[];
  relatedArticles?: { href: string; label: string }[];
}

export function ServiceDetail({ content }: { content: ServicePageContent }) {
  const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
    `Halo Nufanas, saya tertarik dengan ${content.heading}. Bisa konsultasi?`
  )}`;

  return (
    <>
      <JsonLd
        data={generatePillarServiceSchema({
          title: content.heading,
          description: content.intro,
          serviceType: content.serviceType,
          path: content.path,
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
          { name: content.heading, href: content.path },
        ])}
      />
      <JsonLd data={generateFAQSchema(content.faqs)} />

      <article className="pt-28 sm:pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href={content.pillar.href} className="hover:text-primary">
                  {content.pillar.label}
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-900 font-medium">{content.heading}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <span className="eyebrow mb-4">{content.eyebrow}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-slate-900 text-balance">
              {content.heading}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {content.intro}
            </p>
            <ul className="space-y-2 mb-8">
              {content.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <CheckCircle2
                    size={16}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-2xl font-bold text-primary">
                {content.priceLabel}
              </span>
              <Link href="/kontak" className="btn-primary">
                Konsultasi Gratis <ArrowRight size={16} />
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-green-500 text-green-600 text-sm font-semibold hover:bg-green-50 transition-all"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </header>

          {/* Problem */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              {content.problem.title}
            </h2>
            {content.problem.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </section>

          {/* For whom */}
          <section className="mb-14 p-6 rounded-2xl bg-primary-soft border border-primary/15">
            <h2 className="text-xl font-bold mb-4 text-slate-900">
              {content.forWhom.title}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {content.forWhom.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <CheckCircle2
                    size={15}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Features */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">
              Apa yang Anda Dapatkan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.features.map((f) => (
                <div key={f.title} className="p-5 card">
                  <h3 className="font-semibold mb-2 text-slate-900">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mb-14 prose">
            <h2>{content.approach.title}</h2>
            {content.approach.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {/* Tech */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              Teknologi yang Digunakan
            </h2>
            <div className="flex flex-wrap gap-2">
              {content.tech.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Examples */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">
              Contoh Implementasi
            </h2>
            <div className="space-y-4">
              {content.examples.map((ex) => (
                <div key={ex.title} className="p-5 card">
                  <h3 className="font-semibold mb-1.5 text-slate-900">
                    {ex.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ex.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages vs Limitations */}
          <section className="mb-14 grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
              <h2 className="text-lg font-bold mb-4 text-slate-900">
                Keunggulan
              </h2>
              <ul className="space-y-2.5">
                {content.advantages.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-green-600 mt-0.5 shrink-0"
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200">
              <h2 className="text-lg font-bold mb-4 text-slate-900">
                Perlu Dipertimbangkan
              </h2>
              <ul className="space-y-2.5">
                {content.limitations.map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <AlertTriangle
                      size={15}
                      className="text-amber-600 mt-0.5 shrink-0"
                    />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-14 p-6 card">
            <h2 className="text-xl font-bold mb-2 text-slate-900">
              Estimasi Biaya
            </h2>
            <p className="text-2xl font-bold text-primary mb-4">
              {content.pricing.range}
            </p>
            <p className="text-sm text-slate-600 mb-3">
              Faktor yang memengaruhi harga akhir:
            </p>
            <ul className="space-y-2">
              {content.pricing.factors.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <span className="text-primary mt-1">•</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4">
              Harga transparan disepakati di proposal sebelum project dimulai —
              tanpa biaya tersembunyi.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">
              Pertanyaan Umum
            </h2>
            <div className="space-y-4">
              {content.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-5 rounded-xl bg-white border border-slate-200"
                >
                  <h3 className="font-semibold mb-2 text-slate-900 text-sm">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-14 p-8 rounded-2xl gradient-primary text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Siap Memulai Project?</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm">
              Konsultasi gratis tanpa komitmen — ceritakan kebutuhan Anda dan
              dapatkan estimasi biaya serta timeline dalam 24 jam.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/kontak"
                className="h-11 px-6 rounded-lg bg-white text-primary font-semibold text-sm inline-flex items-center hover:bg-white/90 transition-all"
              >
                Request Proposal
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 rounded-lg border border-white/30 text-white font-semibold text-sm inline-flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                <MessageCircle size={16} /> WhatsApp Sekarang
              </a>
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-xl font-bold mb-5 text-slate-900">
              Jelajahi Lebih Lanjut
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {content.relatedServices.map((r) => (
                <Link key={r.href} href={r.href} className="p-5 card card-hover">
                  <span className="font-semibold text-sm text-slate-900 flex items-center gap-1.5">
                    {r.label} <ArrowRight size={14} className="text-primary" />
                  </span>
                </Link>
              ))}
            </div>
            {content.relatedPortfolio && content.relatedPortfolio.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Portfolio terkait:
                </p>
                <div className="flex flex-wrap gap-2">
                  {content.relatedPortfolio.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {content.relatedArticles && content.relatedArticles.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Baca juga:
                </p>
                <ul className="space-y-1.5">
                  {content.relatedArticles.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className="text-sm text-primary hover:underline"
                      >
                        {a.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
      </article>
    </>
  );
}
