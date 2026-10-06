"use client";

import { m } from "framer-motion";
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

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-24 relative" id="layanan">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-4">Layanan Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-balance">
            Solusi Digital End-to-End untuk{" "}
            <span className="gradient-text">Bisnis Anda</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dari website company profile hingga aplikasi mobile dan custom
            software — satu tim untuk seluruh kebutuhan digital bisnis Anda di
            mana pun di Indonesia.
          </p>
        </m.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_CATEGORIES.map((service, index) => (
            <m.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={service.pillar}
                className="group block h-full p-6 card card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  {iconMap[service.icon] || <Globe size={24} />}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Selengkapnya <ArrowRight size={14} />
                </div>
              </Link>
            </m.div>
          ))}

          {/* CTA card mengisi grid ke-6 */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Link
              href="/kontak"
              className="group block h-full p-6 rounded-2xl gradient-primary text-white transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                <ArrowRight size={24} />
              </div>
              <h3 className="font-semibold mb-2">Kebutuhan Khusus?</h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Ceritakan ide Anda — kami bantu wujudkan dengan estimasi biaya
                dan timeline yang transparan.
              </p>
              <div className="flex items-center gap-1 text-sm font-medium">
                Konsultasi Gratis <ArrowRight size={14} />
              </div>
            </Link>
          </m.div>
        </div>
      </div>
    </section>
  );
}
