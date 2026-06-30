import { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Layanan Jasa Website & Digital Marketing Bandung",
  description:
    "Layanan lengkap jasa pembuatan website, web design, SEO, dan digital marketing di Bandung. Mulai dari website UMKM hingga enterprise.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/layanan`,
  },
  openGraph: {
    title: "Layanan Jasa Website & Digital Marketing Bandung | Nufanas",
    description:
      "Layanan lengkap jasa pembuatan website, web design, SEO, dan digital marketing di Bandung.",
    url: `${SITE_CONFIG.url}/layanan`,
  },
};

export default function LayananPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
        ])}
      />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-2 block">
              Layanan Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jasa Pembuatan Website &{" "}
              <span className="gradient-text">Digital Marketing</span>
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Solusi digital lengkap untuk bisnis di Bandung dan Jawa Barat.
              Dari website hingga SEO, kami membantu bisnis Anda tumbuh online.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/layanan/${service.slug}`}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-muted mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {service.price}
                  </span>
                  <span className="text-xs text-muted group-hover:text-primary transition-colors">
                    Selengkapnya →
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
