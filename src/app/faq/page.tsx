import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, NAP } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { HOME_FAQS } from "@/lib/faq-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Pertanyaan Seputar Jasa Pembuatan Website & Aplikasi",
  description:
    "Jawaban lengkap tentang biaya, timeline, proses, dan layanan jasa pembuatan website dan aplikasi custom Nufanas untuk bisnis di seluruh Indonesia.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/faq`,
  },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "FAQ", href: "/faq" },
        ])}
      />
      <JsonLd data={generateFAQSchema(HOME_FAQS)} />

      <section className="pt-28 sm:pt-32 pb-24 bg-slate-50/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="eyebrow mb-4">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 text-balance">
              Pertanyaan yang Sering{" "}
              <span className="gradient-text">Ditanyakan</span>
            </h1>
            <p className="text-muted max-w-xl mx-auto">
              Jawaban untuk pertanyaan umum tentang jasa pembuatan website dan
              aplikasi custom di Nufanas.
            </p>
          </div>

          <div className="space-y-4">
            {HOME_FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl bg-white border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-sm text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-primary shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-14 text-center rounded-2xl bg-white border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Masih ada pertanyaan lain?
            </h2>
            <p className="text-sm text-muted mb-6">
              Tim kami siap membantu — konsultasi gratis tanpa komitmen.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
                  "Halo Nufanas, saya ingin konsultasi tentang project saya."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Chat WhatsApp <ArrowRight size={16} />
              </a>
              <Link href="/kontak" className="btn-secondary">
                Halaman Kontak
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
