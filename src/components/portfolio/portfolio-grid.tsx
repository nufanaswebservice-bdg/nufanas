"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ExternalLink } from "lucide-react";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/lib/portfolio-data";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {PORTFOLIO_CATEGORIES.map((category) => (
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
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/portfolio/${item.id}`}
                className="group block rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Portfolio ${item.title} - ${item.category}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-medium">
                      <Eye size={16} />
                      Lihat Preview
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-medium text-primary px-2.5 py-1 bg-primary/10 rounded-full">
                    {item.category}
                  </span>

                  <h2 className="text-lg font-semibold mt-3 mb-2 text-slate-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {item.description}
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
                      <p className="text-xs text-green-600 font-medium">
                        📈 {item.result}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
