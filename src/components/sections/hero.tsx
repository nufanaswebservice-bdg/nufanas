"use client";

import { m } from "framer-motion";
import { ArrowRight, Star, MessageCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NAP } from "@/lib/constants";

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Halo Nufanas, saya ingin konsultasi jasa pembuatan website/aplikasi."
)}`;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
      {/* Background dekoratif ringan */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <div className="eyebrow mb-5 sm:mb-6">
              <Star size={12} className="fill-primary" />
              Software House untuk Bisnis Indonesia
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] mb-4 sm:mb-6 text-slate-900 text-balance">
              Jasa Pembuatan{" "}
              <span className="gradient-text">Website & Aplikasi Custom</span>{" "}
              untuk Bisnis Indonesia
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-7 sm:mb-9 leading-relaxed max-w-xl">
              Nufanas membangun website, aplikasi mobile, web application, dan
              custom software untuk bisnis di seluruh Indonesia — dari UMKM
              hingga enterprise. Desain premium, performa cepat, dan fondasi
              SEO yang benar sejak hari pertama.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-xl gradient-primary text-white font-semibold text-sm sm:text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                Konsultasi Gratis
                <ArrowRight size={16} />
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-white border border-slate-200 font-semibold text-sm sm:text-base text-slate-800 hover:border-green-500 hover:text-green-600 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle size={16} />
                Chat WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-2 sm:gap-6 pt-6 border-t border-slate-200/80">
              {[
                { value: "300+", label: "Project" },
                { value: "200+", label: "Client" },
                { value: "5+", label: "Tahun" },
                { value: "34", label: "Provinsi" },
              ].map((stat, i) => (
                <m.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="text-center sm:text-left"
                >
                  <p className="text-lg sm:text-2xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-sm text-slate-500">
                    {stat.label}
                  </p>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Right — browser mockup dengan screenshot project asli */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="browser-frame relative">
              <div className="browser-bar">
                <span className="browser-dot bg-red-400" />
                <span className="browser-dot bg-yellow-400" />
                <span className="browser-dot bg-green-400" />
                <span className="ml-3 flex-1 h-6 rounded-md bg-white border border-slate-200 text-[10px] text-slate-400 flex items-center px-3 truncate">
                  nuviral.cloud — AI Creative Studio
                </span>
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/nufanas-project-nuviral-ai-studio.png"
                  alt="Screenshot NuViral AI Creative Studio — platform web application yang dibangun Nufanas"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>

            {/* Floating glass chips */}
            <m.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-4 sm:-left-4 glass-light rounded-xl shadow-lg p-3 sm:p-4 border border-slate-200/60"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    Mobile & Web
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    Android · iOS · Web App
                  </p>
                </div>
              </div>
            </m.div>

            <m.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-4 right-4 sm:-right-4 glass-light rounded-xl shadow-lg p-3 sm:p-4 border border-slate-200/60"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">⚡</span>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    Performa
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    Cepat & SEO-Ready
                  </p>
                </div>
              </div>
            </m.div>
          </m.div>
        </div>

        {/* Trusted By */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-14 sm:mt-20 text-center"
        >
          <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">
            Dipercaya 200+ bisnis di seluruh Indonesia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-60">
            {[
              "NuViral",
              "KaosDN99",
              "Teman Sejiwa",
              "Pena Sakti",
              "Portal Agatha",
              "Bimbel Kedinasan",
            ].map((company) => (
              <span
                key={company}
                className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wide"
              >
                {company}
              </span>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
