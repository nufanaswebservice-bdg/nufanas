"use client";

import { m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";

const featured = PORTFOLIO_ITEMS.slice(0, 4);

export function PortfolioPreviewSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="eyebrow mb-4">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 text-balance">
              Project Nyata,{" "}
              <span className="gradient-text">Hasil Terukur</span>
            </h2>
            <p className="text-slate-600 max-w-xl">
              Beberapa website dan aplikasi yang kami bangun untuk client di
              berbagai industri — beserta dampaknya pada bisnis mereka.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all shrink-0"
          >
            Lihat Semua Portfolio <ArrowRight size={15} />
          </Link>
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((item, i) => (
            <m.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                href={`/portfolio/${item.id}`}
                className="group block h-full card card-hover overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-wide">
                    {item.categories[0]}
                  </span>
                  <h3 className="font-semibold text-slate-900 mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  {item.result && (
                    <p className="flex items-center gap-1.5 text-xs text-slate-500">
                      <TrendingUp size={12} className="text-green-600" />
                      {item.result}
                    </p>
                  )}
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
