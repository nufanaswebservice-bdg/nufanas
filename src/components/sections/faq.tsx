"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { generateFAQSchema } from "@/lib/schema";

const faqs = [
  {
    question: "Berapa biaya jasa pembuatan website di Bandung?",
    answer:
      "Biaya pembuatan website di Nufanas mulai dari Rp 1.500.000 untuk website UMKM sederhana hingga Rp 50.000.000+ untuk web application enterprise. Harga tergantung kompleksitas fitur, jumlah halaman, dan kebutuhan khusus. Kami menyediakan konsultasi gratis untuk estimasi biaya yang akurat.",
  },
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer:
      "Waktu pengerjaan website di Nufanas rata-rata 2-4 minggu untuk website company profile, 4-8 minggu untuk e-commerce, dan 8-12 minggu untuk web application custom. Timeline disesuaikan dengan kompleksitas project dan kecepatan feedback client.",
  },
  {
    question: "Apakah website sudah termasuk SEO?",
    answer:
      "Ya, semua website yang kami buat sudah termasuk SEO on-page dasar: meta title, meta description, heading structure, image alt text, schema markup, sitemap, dan robots.txt. Untuk SEO lanjutan dan link building, tersedia paket terpisah mulai Rp 3.000.000/bulan.",
  },
  {
    question: "Apakah website responsive dan mobile-friendly?",
    answer:
      "100% responsive dan mobile-first. Semua website kami dibangun dengan pendekatan mobile-first sehingga tampil sempurna di semua perangkat: smartphone, tablet, laptop, dan desktop. Kami juga memastikan Core Web Vitals hijau di Google.",
  },
  {
    question: "Apakah bisa request revisi desain?",
    answer:
      "Tentu. Paket Starter mendapat 2x revisi, paket Professional mendapat unlimited revisi, dan paket Enterprise mendapat unlimited revisi plus dedicated project manager. Kami berkomitmen sampai Anda puas dengan hasilnya.",
  },
  {
    question: "Teknologi apa yang digunakan untuk membuat website?",
    answer:
      "Kami menggunakan teknologi modern: Next.js, React, TypeScript, dan TailwindCSS untuk frontend. Untuk backend, kami menggunakan Node.js, PostgreSQL, dan berbagai headless CMS. Teknologi ini memastikan website cepat, aman, dan mudah di-maintenance.",
  },
  {
    question: "Apakah ada garansi setelah website jadi?",
    answer:
      "Ya, semua paket kami termasuk garansi: Starter 30 hari, Professional 90 hari, dan Enterprise 12 bulan. Selama masa garansi, kami memperbaiki bug dan error tanpa biaya tambahan. Kami juga menyediakan paket maintenance bulanan.",
  },
  {
    question: "Bagaimana cara memulai project website?",
    answer:
      "Sangat mudah! 1) Hubungi kami via WhatsApp atau form kontak, 2) Konsultasi gratis untuk memahami kebutuhan Anda, 3) Kami kirimkan proposal dan estimasi, 4) Setelah deal, project dimulai. Tidak ada commitment sampai Anda yakin.",
  },
  {
    question: "Apakah melayani client di luar Bandung?",
    answer:
      "Ya, kami melayani client dari seluruh Indonesia. Meskipun kantor kami di Bandung, semua komunikasi bisa dilakukan secara online via WhatsApp, Zoom, atau Google Meet. Banyak client kami dari Jakarta, Surabaya, dan kota lain yang puas dengan layanan remote kami.",
  },
  {
    question: "Apakah website bisa muncul di Google AI Overview dan ChatGPT?",
    answer:
      "Ya! Kami mengoptimasi website dengan teknik GEO (Generative Engine Optimization) agar muncul di Google AI Overview, ChatGPT, Gemini, Perplexity, dan Claude. Ini termasuk speakable schema, FAQ schema, structured content, dan entity optimization.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="faq">
      <JsonLd data={generateFAQSchema(faqs)} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan yang Sering{" "}
            <span className="gradient-text">Ditanyakan</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Temukan jawaban untuk pertanyaan umum tentang jasa pembuatan website
            di Bandung.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-sm pr-4 text-slate-900 dark:text-white">
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
                    <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
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
