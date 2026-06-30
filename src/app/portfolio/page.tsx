import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio - Hasil Karya Website Terbaik Kami",
  description:
    "Lihat portfolio website yang telah kami buat untuk berbagai bisnis di Bandung. Company profile, e-commerce, landing page, dan web application.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/portfolio`,
  },
};

const portfolioItems = [
  {
    title: "PT Maju Bersama",
    category: "Company Profile",
    description:
      "Website company profile modern untuk perusahaan logistik di Bandung. Clean design dengan animasi smooth.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    result: "Traffic naik 300% dalam 3 bulan",
  },
  {
    title: "Klinik Sehat Bandung",
    category: "Website Klinik",
    description:
      "Website klinik dengan sistem appointment online dan informasi dokter. SEO lokal terintegrasi.",
    tech: ["Next.js", "Supabase", "TailwindCSS"],
    result: "50+ pasien baru/bulan dari Google",
  },
  {
    title: "Hotel Dago Suites",
    category: "Website Hotel",
    description:
      "Website hotel premium dengan booking system, gallery, dan integrasi OTA. Multi-language support.",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    result: "Booking langsung naik 200%",
  },
  {
    title: "Toko Gadget Online",
    category: "E-Commerce",
    description:
      "E-commerce full-featured dengan product catalog, cart, checkout, dan payment gateway.",
    tech: ["Next.js", "Prisma", "Midtrans"],
    result: "Revenue naik 150% dalam 6 bulan",
  },
  {
    title: "SMA Prestasi Bandung",
    category: "Website Sekolah",
    description:
      "Website sekolah informatif dengan PPDB online, gallery, dan berita sekolah. Mobile-first design.",
    tech: ["Next.js", "TailwindCSS", "CMS"],
    result: "Pendaftar PPDB online naik 400%",
  },
  {
    title: "Cafe Kopi Nusantara",
    category: "Website Cafe",
    description:
      "Website cafe dengan menu digital, reservasi online, dan integrasi Google Maps. Desain aesthetic.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    result: "Reservasi online naik 250%",
  },
];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hasil Karya{" "}
              <span className="gradient-text">Terbaik Kami</span>
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Beberapa project terbaik yang telah kami selesaikan untuk bisnis di
              Bandung dan seluruh Indonesia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:shadow-xl transition-all"
              >
                {/* Placeholder for screenshot */}
                <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 mb-5 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/20">
                    {item.title.charAt(0)}
                  </span>
                </div>

                <span className="text-xs font-medium text-primary px-2.5 py-1 bg-primary/10 rounded-full">
                  {item.category}
                </span>

                <h2 className="text-lg font-semibold mt-3 mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-muted mb-4">{item.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                    📈 {item.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted mb-4">
              Tertarik membuat website seperti ini untuk bisnis Anda?
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl gradient-primary text-white font-medium hover:shadow-lg transition-all"
            >
              Konsultasi Gratis
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
