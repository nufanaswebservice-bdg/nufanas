"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { NAP } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Siap Membangun Website Impian Anda?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Konsultasi gratis tanpa commitment. Tim kami siap membantu Anda
            merencanakan website terbaik untuk bisnis di Bandung dan sekitarnya.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              Konsultasi Gratis
              <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${NAP.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
            >
              <Phone size={18} />
              WhatsApp Sekarang
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
