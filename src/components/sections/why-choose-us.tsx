"use client";

import { motion } from "framer-motion";
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
      "Website dengan skor Lighthouse 100 dan Core Web Vitals hijau. Loading di bawah 1 detik.",
  },
  {
    icon: <Shield size={24} />,
    title: "Keamanan Terjamin",
    description:
      "SSL, firewall, dan update keamanan rutin. Data bisnis Anda aman bersama kami.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "SEO Terintegrasi",
    description:
      "Struktur SEO dari awal. Otomatis siap ranking di Google dan AI Search.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Support 24/7",
    description:
      "Tim support yang responsif via WhatsApp. Masalah selesai dalam hitungan jam.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Teknologi Modern",
    description:
      "Next.js, React, TypeScript, dan TailwindCSS. Teknologi terbaru untuk hasil terbaik.",
  },
  {
    icon: <Award size={24} />,
    title: "Berpengalaman",
    description:
      "200+ project selesai untuk berbagai industri di Bandung dan Jawa Barat.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            Mengapa Nufanas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dipercaya untuk Website yang{" "}
            <span className="gradient-text">Serius</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Desain rapi, performa kencang, dan struktur SEO yang terukur untuk
            bisnis di Bandung, Jawa Barat, dan seluruh Indonesia.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{reason.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
