"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { Eye, ExternalLink, TrendingUp, MessageCircle } from "lucide-react";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/lib/portfolio-data";
import { NAP } from "@/lib/constants";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) =>
          item.categories.includes(activeCategory)
        );

  const countFor = (cat: string) =>
    cat === "All"
      ? PORTFOLIO_ITEMS.length
      : PORTFOLIO_ITEMS.filter((i) => i.categories.includes(cat)).length;

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {PORTFOLIO_CATEGORIES.map((category) => {
          const count = countFor(category);
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? "gradient-primary text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
              <span
                className={`ml-1.5 text-xs ${
                  activeCategory === category ? "text-white/70" : "text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filteredItems.length > 0 ? (
        <m.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <m.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/portfolio/${item.id}`}
                  className="group block h-full rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl overflow-hidden transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-medium">
                        <Eye size={16} />
                        Lihat Case Study
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-xs font-medium text-primary px-2.5 py-1 bg-primary/10 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                      {item.tagline}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-500"
                        >
                          {t}
                        </span>
                      ))}
                      {item.tech.length > 3 && (
                        <span className="text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-500">
                          +{item.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Result */}
                    {item.result && (
                      <div className="pt-3 border-t border-slate-100">
                        <p className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
                          <TrendingUp size={12} />
                          {item.result}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      ) : (
        /* Honest empty state — no fake projects */
        <div className="text-center py-16 rounded-2xl border border-dashed border-slate-300 bg-slate-50">
          <p className="text-slate-600 mb-2">
            Case study untuk kategori{" "}
            <span className="font-semibold">{activeCategory}</span> belum
            dipublikasikan.
          </p>
          <p className="text-sm text-slate-500 mb-6">
            Punya project di kategori ini? Diskusikan dengan tim kami.
          </p>
          <a
            href={`https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
              `Halo Nufanas, saya ingin diskusi project ${activeCategory}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl gradient-primary text-white text-sm font-medium hover:shadow-lg transition-all"
          >
            <MessageCircle size={16} />
            Diskusikan Project
          </a>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-slate-600 mb-4">
          Tertarik membuat project seperti ini untuk bisnis Anda?
        </p>
        <Link
          href="/kontak"
          className="inline-flex items-center gap-2 h-12 px-8 rounded-xl gradient-primary text-white font-medium hover:shadow-lg transition-all"
        >
          Konsultasi Gratis
          <ExternalLink size={16} />
        </Link>
      </div>
    </>
  );
}
