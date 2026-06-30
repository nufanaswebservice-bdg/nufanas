"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building,
  ShoppingBag,
  GraduationCap,
  Heart,
  Coffee,
  Hotel,
  Car,
  Plane,
  Hammer,
  Home,
  Sofa,
  Factory,
} from "lucide-react";

const industries = [
  { icon: <Building size={20} />, name: "Company Profile", slug: "website-company-profile-bandung" },
  { icon: <ShoppingBag size={20} />, name: "Toko Online", slug: "website-toko-online-bandung" },
  { icon: <GraduationCap size={20} />, name: "Sekolah", slug: "website-sekolah-bandung" },
  { icon: <Heart size={20} />, name: "Klinik & RS", slug: "website-klinik-bandung" },
  { icon: <Coffee size={20} />, name: "Cafe & Restoran", slug: "website-cafe-bandung" },
  { icon: <Hotel size={20} />, name: "Hotel", slug: "website-hotel-bandung" },
  { icon: <Car size={20} />, name: "Rental Mobil", slug: "website-rental-mobil-bandung" },
  { icon: <Plane size={20} />, name: "Travel & Tour", slug: "website-travel-bandung" },
  { icon: <Hammer size={20} />, name: "Kontraktor", slug: "website-kontraktor-bandung" },
  { icon: <Home size={20} />, name: "Properti", slug: "website-properti-bandung" },
  { icon: <Sofa size={20} />, name: "Furniture", slug: "website-furniture-bandung" },
  { icon: <Factory size={20} />, name: "Industri", slug: "website-industri-bandung" },
];

export function IndustriesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            Industri
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Website untuk Berbagai{" "}
            <span className="gradient-text">Industri</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Kami berpengalaman membangun website untuk berbagai jenis bisnis di
            Bandung dan Jawa Barat.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/layanan/${industry.slug}`}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">
                  {industry.icon}
                </div>
                <span className="text-xs font-medium text-center text-slate-700 dark:text-slate-200">
                  {industry.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
