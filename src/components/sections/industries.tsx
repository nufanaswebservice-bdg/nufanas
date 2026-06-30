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
  Factory,
  Truck,
  CreditCard,
  BarChart3,
} from "lucide-react";

const industries = [
  { icon: <Building size={20} />, name: "Company Profile", slug: "website-company-profile-bandung" },
  { icon: <ShoppingBag size={20} />, name: "E-Commerce", slug: "website-toko-online-bandung" },
  { icon: <Heart size={20} />, name: "Klinik & RS", slug: "jasa-aplikasi-klinik-bandung" },
  { icon: <GraduationCap size={20} />, name: "Sekolah", slug: "jasa-aplikasi-sekolah-bandung" },
  { icon: <Coffee size={20} />, name: "Cafe & Restoran", slug: "jasa-aplikasi-cafe-bandung" },
  { icon: <Hotel size={20} />, name: "Hotel", slug: "jasa-aplikasi-hotel-bandung" },
  { icon: <Car size={20} />, name: "Rental Mobil", slug: "jasa-aplikasi-rental-mobil-bandung" },
  { icon: <Plane size={20} />, name: "Travel & Tour", slug: "jasa-aplikasi-travel-bandung" },
  { icon: <Hammer size={20} />, name: "Kontraktor", slug: "website-kontraktor-bandung" },
  { icon: <Home size={20} />, name: "Properti", slug: "jasa-aplikasi-properti-bandung" },
  { icon: <Factory size={20} />, name: "Manufaktur", slug: "website-industri-bandung" },
  { icon: <Truck size={20} />, name: "Logistik", slug: "jasa-custom-software-bandung" },
  { icon: <CreditCard size={20} />, name: "POS & Kasir", slug: "jasa-pos-bandung" },
  { icon: <BarChart3 size={20} />, name: "ERP & CRM", slug: "jasa-erp-bandung" },
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
            Industri & Solusi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Website & Aplikasi untuk Berbagai{" "}
            <span className="gradient-text">Industri</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kami berpengalaman membangun website, mobile app, dan enterprise
            software untuk berbagai industri di Bandung dan seluruh Indonesia.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <Link
                href={`/layanan/${industry.slug}`}
                className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="text-slate-500 group-hover:text-primary transition-colors">
                  {industry.icon}
                </div>
                <span className="text-xs font-medium text-center text-slate-700">
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
