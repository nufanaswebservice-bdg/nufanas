"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { generateFAQSchema } from "@/lib/schema";
import { HOME_FAQS } from "@/lib/faq-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24 bg-slate-50/60" id="faq">
      <JsonLd data={generateFAQSchema(HOME_FAQS)} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Pertanyaan yang Sering{" "}
            <span className="gradient-text">Ditanyakan</span>
          </h2>
          <p className="text-slate-600">
            Jawaban untuk pertanyaan umum tentang jasa pembuatan website dan
            aplikasi di Nufanas.
          </p>
        </motion.div>

        <div className="space-y-3">
          {HOME_FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="rounded-xl bg-white border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-sm pr-4 text-slate-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus size={18} className="text-primary shrink-0" />
                ) : (
                  <Plus size={18} className="text-slate-400 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
