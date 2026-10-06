import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Harga Jasa Pembuatan Website & Aplikasi — Paket Transparan",
  description:
    "Harga jasa pembuatan website mulai Rp 1.500.000 dan aplikasi mulai Rp 15.000.000. Termasuk domain, hosting, SSL, dan SEO. Melayani seluruh Indonesia.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/harga`,
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Harga", href: "/harga" },
        ])}
      />

      <div className="pt-20">
        <PricingSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
}
