"use client";

import { motion } from "framer-motion";
import { MessageSquare, Pencil, Code, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <MessageSquare size={24} />,
    title: "Konsultasi & Analisis",
    description:
      "Kami memahami kebutuhan bisnis Anda, target market, dan goals yang ingin dicapai melalui website.",
  },
  {
    step: "02",
    icon: <Pencil size={24} />,
    title: "Desain UI/UX",
    description:
      "Tim designer membuat wireframe dan mockup premium yang sesuai brand identity bisnis Anda.",
  },
  {
    step: "03",
    icon: <Code size={24} />,
    title: "Development",
    description:
      "Developer membangun website dengan teknologi modern, clean code, dan struktur SEO yang optimal.",
  },
  {
    step: "04",
    icon: <Rocket size={24} />,
    title: "Launch & Optimasi",
    description:
      "Website diluncurkan setelah testing menyeluruh. Dilanjutkan optimasi SEO dan monitoring performa.",
  },
];

export function ProcessSection() {
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
            Proses Kerja
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bagaimana Kami{" "}
            <span className="gradient-text">Bekerja</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Proses yang transparan dan terstruktur untuk memastikan website Anda
            selesai tepat waktu dengan kualitas terbaik.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-6">
                <div className="text-primary">{step.icon}</div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-primary text-white text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
