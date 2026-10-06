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
  { icon: <Building size={20} />, name: "Company Profile", href: "/layanan/website-company-profile" },
  { icon: <ShoppingBag size={20} />, name: "E-Commerce", href: "/layanan/website-ecommerce" },
  { icon: <Heart size={20} />, name: "Klinik & RS", href: "/layanan/website-booking" },
  { icon: <GraduationCap size={20} />, name: "Sekolah", href: "/layanan/website-custom" },
  { icon: <Coffee size={20} />, name: "Cafe & Restoran", href: "/layanan/aplikasi-bisnis" },
  { icon: <Hotel size={20} />, name: "Hotel", href: "/layanan/website-booking" },
  { icon: <Car size={20} />, name: "Rental Mobil", href: "/layanan/website-booking" },
  { icon: <Plane size={20} />, name: "Travel & Tour", href: "/layanan/website-booking" },
  { icon: <Hammer size={20} />, name: "Kontraktor", href: "/layanan/website-company-profile" },
  { icon: <Home size={20} />, name: "Properti", href: "/layanan/website-custom" },
  { icon: <Factory size={20} />, name: "Manufaktur", href: "/layanan/sistem-informasi" },
  { icon: <Truck size={20} />, name: "Logistik", href: "/layanan/aplikasi-bisnis" },
  { icon: <CreditCard size={20} />, name: "POS & Kasir", href: "/layanan/aplikasi-bisnis" },
  { icon: <BarChart3 size={20} />, name: "ERP & CRM", href: "/layanan/sistem-informasi" },
];

export function IndustriesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-4">Industri & Solusi</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Website & Aplikasi untuk Berbagai{" "}
            <span className="gradient-text">Industri</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kami berpengalaman membangun website, mobile app, dan enterprise
            software untuk berbagai industri di seluruh Indonesia.
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
                href={industry.href}
                className="group flex flex-col items-center gap-3 p-4 card card-hover"
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
