"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Code,
  Terminal,
  Palette,
  Building,
  ShoppingCart,
  MousePointer,
  Search,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe size={24} />,
  code: <Code size={24} />,
  terminal: <Terminal size={24} />,
  palette: <Palette size={24} />,
  building: <Building size={24} />,
  shoppingCart: <ShoppingCart size={24} />,
  mousePointer: <MousePointer size={24} />,
  search: <Search size={24} />,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solusi Digital Lengkap untuk{" "}
            <span className="gradient-text">Bisnis Anda</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Dari pembuatan website hingga SEO dan digital marketing, kami
            menyediakan layanan lengkap untuk membantu bisnis Anda tumbuh secara
            online di Bandung dan seluruh Indonesia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(0, 8).map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/layanan/${service.slug}`}
                className="group block h-full p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  {iconMap[service.icon] || <Globe size={24} />}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-muted mb-4 line-clamp-3">
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
