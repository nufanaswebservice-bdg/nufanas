"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/60" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-w-0"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm text-primary mb-6 max-w-full"
            >
              <Star size={14} className="fill-primary shrink-0" />
              <span className="truncate">Digital Agency & Software House #1 di Bandung</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-slate-900">
              Jasa Pembuatan{" "}
              <span className="gradient-text">Website & Aplikasi</span>{" "}
              Profesional di{" "}
              <span className="gradient-text">Bandung</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Nufanas membantu bisnis di Bandung membangun website, mobile app,
              web application, custom software, dan solusi AI. Dari startup
              hingga enterprise — kami wujudkan produk digital berkualitas tinggi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-xl gradient-primary text-white font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Konsultasi Gratis
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-xl border border-slate-300 font-semibold text-sm sm:text-base text-slate-900 hover:bg-white hover:shadow-md transition-all"
              >
                <Play size={18} />
                Lihat Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              {[
                { value: "300+", label: "Project Selesai" },
                { value: "200+", label: "Client Puas" },
                { value: "5+", label: "Tahun Pengalaman" },
                { value: "4.9", label: "Rating Google" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <p className="text-xl sm:text-2xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Video Preview Card (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  🎬 Showreel
                </span>
                <span className="text-white text-xs bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  Nufanas Studio
                </span>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-0 bg-white rounded-xl shadow-lg p-4 border border-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">✓</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Mobile & Web</p>
                  <p className="text-sm font-semibold text-slate-900">Android · iOS · Web</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge Right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-4 right-0 bg-white rounded-xl shadow-lg p-4 border border-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">🏢</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Enterprise</p>
                  <p className="text-sm font-semibold text-slate-900">ERP · CRM · HRIS</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 sm:mt-20 text-center"
        >
          <p className="text-sm text-slate-500 mb-4 sm:mb-6">
            Dipercaya oleh 200+ bisnis di Bandung dan seluruh Indonesia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-60">
            {[
              "PT Maju Bersama",
              "CV Teknologi Nusantara",
              "Klinik Sehat Bandung",
              "Hotel Dago Suites",
              "RS Borromeus",
              "Universitas Telkom",
            ].map((company) => (
              <span
                key={company}
                className="text-xs sm:text-sm font-medium text-slate-500"
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
