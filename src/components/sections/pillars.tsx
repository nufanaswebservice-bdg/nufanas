"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: <Globe size={28} />,
    title: "Jasa Pembuatan Website",
    description:
      "Website profesional yang bekerja 24 jam untuk bisnis Anda — dari company profile hingga e-commerce dan web application.",
    href: "/jasa-pembuatan-website",
    links: [
      { label: "Website Company Profile", href: "/jasa-website-company-profile" },
      { label: "Website E-Commerce", href: "/jasa-website-ecommerce" },
      { label: "Website Custom", href: "/jasa-website-custom" },
      { label: "Web Application", href: "/jasa-web-application" },
      { label: "Website UMKM", href: "/layanan/website-umkm" },
      { label: "Website Booking", href: "/layanan/website-booking" },
    ],
    price: "Mulai Rp 1.500.000",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Jasa Pembuatan Aplikasi",
    description:
      "Aplikasi mobile Android & iOS, sistem informasi, dan custom software untuk mengotomasi dan men-scale operasional bisnis Anda.",
    href: "/jasa-pembuatan-aplikasi",
    links: [
      { label: "Aplikasi Android", href: "/jasa-aplikasi-android" },
      { label: "Aplikasi iOS", href: "/jasa-aplikasi-ios" },
      { label: "Aplikasi Mobile", href: "/jasa-aplikasi-mobile" },
      { label: "Aplikasi Bisnis", href: "/jasa-pembuatan-aplikasi-bisnis" },
      { label: "Custom Software", href: "/jasa-custom-software" },
      { label: "Sistem Informasi", href: "/jasa-pembuatan-sistem-informasi" },
    ],
    price: "Mulai Rp 15.000.000",
  },
];

export function PillarsSection() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-4">Layanan Utama</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-balance">
            Dua Keahlian Inti,{" "}
            <span className="gradient-text">Satu Tim Terpercaya</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Apa pun kebutuhan digital bisnis Anda — website yang menjual atau
            aplikasi yang mengotomasi — tim yang sama menanganinya dengan
            standar yang sama.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-7 sm:p-9 card card-hover flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary text-white flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {pillar.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                {pillar.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-700 hover:text-primary inline-flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowRight size={13} className="text-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-200/80">
                <span className="text-sm font-semibold text-primary">
                  {pillar.price}
                </span>
                <Link
                  href={pillar.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
                >
                  Pelajari Layanan <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
