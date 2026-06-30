import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata: Metadata = {
  title: "Portfolio - Hasil Karya Website & Aplikasi Terbaik",
  description:
    "Lihat portfolio website, aplikasi mobile, web application, dan enterprise software yang telah kami buat untuk bisnis di Bandung dan Indonesia.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
        ])}
      />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-2 block">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Hasil Karya{" "}
              <span className="gradient-text">Terbaik Kami</span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Project website, aplikasi mobile, dan enterprise software yang
              telah kami selesaikan untuk bisnis di Bandung dan seluruh Indonesia.
              Klik untuk melihat preview.
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
