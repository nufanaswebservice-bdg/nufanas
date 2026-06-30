"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Promo 🔥",
    price: "800",
    period: "ribu",
    description: "Promo spesial! Website profesional dengan harga terjangkau. Penawaran terbatas!",
    features: [
      "Website 3 halaman",
      "Desain responsive",
      "Domain .com 1 tahun",
      "Hosting 1 tahun",
      "SSL Certificate",
      "WhatsApp button",
      "Mobile friendly",
      "Revisi 1x",
      "Support 14 hari",
    ],
    popular: false,
    promo: true,
    cta: "Ambil Promo",
  },
  {
    name: "Starter",
    price: "3.5",
    period: "juta",
    description: "Cocok untuk UMKM dan bisnis kecil yang baru mulai online",
    features: [
      "Website 5 halaman",
      "Desain responsive",
      "Domain + Hosting 1 tahun",
      "SSL Certificate",
      "SEO dasar on-page",
      "WhatsApp integration",
      "Google Analytics setup",
      "Revisi 2x",
      "Support 30 hari",
    ],
    popular: false,
    promo: false,
    cta: "Pilih Paket",
  },
  {
    name: "Professional",
    price: "7.5",
    period: "juta",
    description: "Untuk bisnis yang serius ingin tampil profesional dan ranking di Google",
    features: [
      "Website 10+ halaman",
      "Custom UI/UX design",
      "CMS (Content Management)",
      "SEO lengkap on-page + technical",
      "Google Search Console setup",
      "Schema markup",
      "Blog system",
      "Lead form + CRM integration",
      "Speed optimization",
      "Revisi unlimited",
      "Support 90 hari",
    ],
    popular: true,
    promo: false,
    cta: "Pilih Paket",
  },
  {
    name: "Enterprise",
    price: "15",
    period: "juta+",
    description: "Solusi lengkap untuk perusahaan besar dengan kebutuhan khusus",
    features: [
      "Website unlimited halaman",
      "Custom web application",
      "E-commerce / Booking system",
      "Multi-language support",
      "Advanced SEO + Local SEO",
      "AI Search optimization (GEO)",
      "Payment gateway integration",
      "API integration",
      "Dashboard admin custom",
      "Priority support 12 bulan",
      "Monthly maintenance",
      "Dedicated project manager",
    ],
    popular: false,
    promo: false,
    cta: "Hubungi Kami",
  },
];

export function PricingSection() {
  return (
    <section className="py-24" id="harga">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            Harga Transparan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Paket Harga{" "}
            <span className="gradient-text">Jasa Website Bandung</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Harga terjangkau dengan kualitas premium. Semua paket sudah termasuk
            domain, hosting, SSL, dan SEO dasar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "bg-white border-primary shadow-lg scale-[1.02]"
                  : plan.promo
                  ? "bg-gradient-to-br from-orange-50 to-red-50 border-orange-300 shadow-md"
                  : "bg-white border-slate-200 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-white text-xs font-medium flex items-center gap-1">
                  <Star size={12} className="fill-white" />
                  Paling Populer
                </div>
              )}
              {plan.promo && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-500 text-white text-xs font-bold flex items-center gap-1">
                  🔥 PROMO TERBATAS
                </div>
              )}

              <h3 className="text-xl font-bold mb-1 text-slate-900">{plan.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-slate-500">Rp</span>
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-500">/{plan.period}</span>
              </div>

              <Link
                href="/kontak"
                className={`block w-full text-center py-3 rounded-xl font-medium transition-all ${
                  plan.popular
                    ? "gradient-primary text-white hover:shadow-lg"
                    : plan.promo
                    ? "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg"
                    : "border border-slate-300 text-slate-900 hover:border-primary hover:text-primary"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-green-500 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
