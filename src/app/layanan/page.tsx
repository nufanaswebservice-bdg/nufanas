import { Metadata } from "next";
import Link from "next/link";
import { ALL_SERVICES, SEO_SERVICE, SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Globe, Smartphone, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan — Jasa Pembuatan Website, Aplikasi & Custom Software",
  description:
    "Layanan lengkap Nufanas: jasa pembuatan website, aplikasi mobile Android & iOS, web application, custom software, sistem informasi, aplikasi AI, dan SEO — untuk bisnis di seluruh Indonesia.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/layanan`,
  },

  openGraph: {
    title: "Layanan — Jasa Pembuatan Website, Aplikasi & Custom Software | Nufanas",
    description:
      "Layanan lengkap Nufanas: jasa pembuatan website, aplikasi mobile, web application, custom software, sistem informasi, dan SEO.",
    url: `${SITE_CONFIG.url}/layanan`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan — Jasa Pembuatan Website, Aplikasi & Custom Software | Nufanas",
    description:
      "Layanan lengkap Nufanas: jasa pembuatan website, aplikasi mobile, web application, custom software, sistem informasi, dan SEO.",
  },
};

const groups = [
  {
    title: "Jasa Pembuatan Website",
    description:
      "Website profesional dan custom — dari company profile hingga web application.",
    icon: <Globe size={22} />,
    pillar: { href: "/jasa-pembuatan-website", label: "Lihat Jasa Pembuatan Website" },
    categories: ["website-development", "web-application"],
  },
  {
    title: "Jasa Pembuatan Aplikasi",
    description:
      "Aplikasi Android, iOS, mobile cross-platform, aplikasi bisnis, dan custom software.",
    icon: <Smartphone size={22} />,
    pillar: { href: "/jasa-pembuatan-aplikasi", label: "Lihat Jasa Pembuatan Aplikasi" },
    categories: ["mobile-app-development", "custom-software"],
  },
];

export default function LayananPage() {
  const seoServices = [SEO_SERVICE];

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
        ])}
      />

      <section className="pt-28 sm:pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="eyebrow mb-4">Layanan Nufanas</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 text-balance">
              Jasa Pembuatan Website, Aplikasi &{" "}
              <span className="gradient-text">Custom Software</span>
            </h1>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Layanan digital end-to-end untuk bisnis di seluruh Indonesia:
              website development, aplikasi mobile, web application, dan
              enterprise software.
            </p>
          </div>

          {/* Pillar groups */}
          {groups.map((group) => {
            const services = ALL_SERVICES.filter((s) =>
              group.categories.includes(s.category)
            );
            return (
              <div key={group.title} className="mb-16">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {group.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {group.title}
                  </h2>
                </div>
                <p className="text-slate-600 mb-6">
                  {group.description}{" "}
                  <Link
                    href={group.pillar.href}
                    className="font-medium text-primary hover:underline"
                  >
                    {group.pillar.label} →
                  </Link>
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.path}
                      className="group p-5 card card-hover"
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

          {/* SEO & other */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Search size={22} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                SEO & Optimasi Digital
              </h2>
            </div>
            <p className="text-slate-600 mb-6">
              Maksimalkan visibilitas website Anda di Google dan AI Search.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {seoServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.path}
                  className="group p-5 card card-hover"
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
        </div>
      </section>
    </>
  );
}
