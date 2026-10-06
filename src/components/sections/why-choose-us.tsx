"use client";

import { m } from "framer-motion";
import {
  Zap,
  Shield,
  TrendingUp,
  Headphones,
  Rocket,
  Award,
} from "lucide-react";

const reasons = [
  {
    icon: <Zap size={24} />,
    title: "Performa Cepat",
    description:
      "Website dan aplikasi dengan skor Lighthouse tinggi dan Core Web Vitals hijau — pengalaman pengguna yang mulus.",
  },
  {
    icon: <Shield size={24} />,
    title: "Keamanan Terjamin",
    description:
      "SSL, proteksi server, dan update keamanan rutin. Data bisnis dan pelanggan Anda aman bersama kami.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "SEO & GEO Terintegrasi",
    description:
      "Struktur SEO teknis sejak development — siap ranking di Google dan terbaca oleh AI Search seperti ChatGPT & Gemini.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Support Responsif",
    description:
      "Tim support yang sigap via WhatsApp di jam kerja. Konsultasi dan koordinasi project bisa 100% remote.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Teknologi Modern",
    description:
      "Next.js, React, Flutter, Node.js, dan PostgreSQL. Stack modern yang cepat, aman, dan mudah dikembangkan.",
  },
  {
    icon: <Award size={24} />,
    title: "Berpengalaman",
    description:
      "300+ project untuk UMKM, startup, dan enterprise di berbagai kota di Indonesia.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-4">Mengapa Nufanas</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Partner Digital yang{" "}
            <span className="gradient-text">Bisa Diandalkan</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Desain rapi, performa kencang, dan struktur SEO yang terukur untuk
            bisnis di seluruh Indonesia — dikerjakan tim in-house dengan proses
            yang transparan.
          </p>
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <m.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-7 card card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">{reason.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
