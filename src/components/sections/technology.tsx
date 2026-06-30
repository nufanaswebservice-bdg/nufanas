"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/constants";

export function TechnologySection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Teknologi{" "}
            <span className="gradient-text">Modern & Terpercaya</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kami menggunakan teknologi terkini untuk membangun website, mobile
            app, dan enterprise software dengan performa tinggi dan scalability
            yang baik.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECHNOLOGIES.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-5 rounded-xl bg-white border border-slate-200 text-center hover:border-primary/30 hover:shadow-md transition-all cursor-default"
            >
              <p className="font-semibold text-sm mb-1 text-slate-900">{tech.name}</p>
              <p className="text-xs text-slate-500">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
