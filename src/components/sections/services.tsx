"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Building,
  Code,
  Palette,
  Search,
  Brain,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe size={24} />,
  smartphone: <Smartphone size={24} />,
  layoutDashboard: <LayoutDashboard size={24} />,
  building: <Building size={24} />,
  code: <Code size={24} />,
  palette: <Palette size={24} />,
  search: <Search size={24} />,
  brain: <Brain size={24} />,
  megaphone: <Megaphone size={24} />,
};

const categoryLinks: Record<string, string> = {
  "website-development": "/layanan/jasa-website-bandung",
  "mobile-app-development": "/layanan/jasa-pembuatan-aplikasi-bandung",
  "web-application": "/layanan/jasa-web-application-bandung",
  "enterprise-software": "/layanan/jasa-erp-bandung",
  "custom-software": "/layanan/jasa-custom-software-bandung",
  "ui-ux-design": "/layanan/web-design-bandung",
  "seo": "/layanan/jasa-seo-bandung",
  "ai-automation": "/layanan/jasa-aplikasi-ai-bandung",
  "digital-marketing": "/layanan",
};

export function ServicesSection() {
  return (
    <section className="py-24 relative" id="layanan">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Solusi Digital Lengkap untuk{" "}
            <span className="gradient-text">Bisnis Anda</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dari website dan mobile app hingga enterprise software dan AI —
            kami menyediakan layanan end-to-end untuk transformasi digital bisnis
            Anda di Bandung.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={categoryLinks[service.slug] || "/layanan"}
                className="group block h-full p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  {iconMap[service.icon] || <Globe size={24} />}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Selengkapnya <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
          >
            Lihat Semua Layanan
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
