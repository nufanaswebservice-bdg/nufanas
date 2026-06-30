"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-10" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blob" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6"
            >
              <Star size={14} className="fill-primary" />
              <span>Digital Agency & Software House #1 di Bandung</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance text-slate-900 dark:text-white">
              Jasa Pembuatan{" "}
              <span className="gradient-text">Website & Aplikasi</span>{" "}
              Profesional di{" "}
              <span className="gradient-text">Bandung</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-8 leading-relaxed">
              Nufanas membantu bisnis di Bandung membangun website, mobile app,
              web application, custom software, dan solusi AI. Dari startup
              hingga enterprise — kami wujudkan produk digital berkualitas tinggi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 h-14 px-8 rounded-xl gradient-primary text-white font-semibold text-base hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Konsultasi Gratis
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 h-14 px-8 rounded-xl border border-slate-300 dark:border-slate-600 font-semibold text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                <Play size={18} />
                Lihat Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
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
                  <p className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Card - App mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 right-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                  <div className="h-4 bg-primary/20 rounded w-1/2" />
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">📱💻</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="h-8 bg-primary/20 rounded" />
                    <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Mobile App */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 left-0 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Mobile App</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Android & iOS</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Enterprise */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 -right-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">🏢</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Enterprise</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">ERP · CRM · HRIS</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Dipercaya oleh 200+ bisnis di Bandung dan seluruh Indonesia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
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
                className="text-sm font-medium text-slate-500 dark:text-slate-400"
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
