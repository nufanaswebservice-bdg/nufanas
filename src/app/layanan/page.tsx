import { Metadata } from "next";
import Link from "next/link";
import { ALL_SERVICES, SERVICE_CATEGORIES, SEO_SERVICE, SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Layanan - Jasa Website, Aplikasi, Software & Digital Marketing Bandung",
  description:
    "Layanan lengkap jasa pembuatan website, aplikasi mobile, web application, enterprise software, custom software, AI automation, SEO, dan digital marketing di Bandung.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/layanan`,
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
              Layanan Digital Agency & Software House
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Jasa Website, Aplikasi &{" "}
              <span className="gradient-text">Software Development</span>
            </h1>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Nufanas menyediakan layanan digital lengkap: website development,
              mobile app, web application, enterprise software, UI/UX design,
              SEO, AI automation, dan digital marketing untuk bisnis di Bandung.
            </p>
          </div>

          {/* Category Sections */}
          {SERVICE_CATEGORIES.map((category) => {
            const categoryServices = ALL_SERVICES.filter(
              (s) => s.category === category.slug
            );
            // Add SEO service to seo category
            const services =
              category.slug === "seo"
                ? [SEO_SERVICE, ...categoryServices]
                : categoryServices;

            if (services.length === 0) return null;

            return (
              <div key={category.slug} className="mb-16">
                <h2 className="text-2xl font-bold mb-2 text-slate-900">
                  {category.title}
                </h2>
                <p className="text-slate-600 mb-6">
                  {category.description}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/layanan/${service.slug}`}
                      className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="font-semibold mb-1 text-sm group-hover:text-primary transition-colors text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-primary">
                          {service.price}
                        </span>
                        <span className="text-xs text-slate-400 group-hover:text-primary transition-colors">
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
