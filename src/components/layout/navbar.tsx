"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Globe,
  Smartphone,
  Search,
  MessageCircle,
} from "lucide-react";
import { NAVIGATION, NAP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const groupIcons = [Globe, Smartphone, Search];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
    "Halo Nufanas, saya ingin konsultasi jasa pembuatan website/aplikasi."
  )}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileOpen
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl"
            aria-label="Nufanas - Beranda"
          >
            <Image
              src="/images/nufanas-logo.png"
              alt="Nufanas — Jasa Pembuatan Website & Aplikasi"
              width={140}
              height={36}
              className="h-8 sm:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION.main.map((item) =>
              item.label === "Layanan" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors rounded-lg hover:bg-slate-100"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        isServicesOpen && "rotate-180"
                      )}
                    />
                  </Link>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5"
                      >
                        <div className="grid grid-cols-3 gap-5">
                          {NAVIGATION.serviceGroups.map((group, gi) => {
                            const Icon = groupIcons[gi] || Globe;
                            return (
                              <div key={group.label}>
                                <Link
                                  href={group.href}
                                  className="flex items-center gap-2 px-2 mb-2 text-[13px] font-semibold text-slate-900 hover:text-primary"
                                >
                                  <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                    <Icon size={14} />
                                  </span>
                                  {group.label}
                                </Link>
                                <ul className="space-y-0.5">
                                  {group.items.map((service) => (
                                    <li key={service.href}>
                                      <Link
                                        href={service.href}
                                        className="block px-2 py-1.5 text-[13px] text-slate-600 hover:text-primary hover:bg-primary-soft rounded-md transition-colors"
                                      >
                                        {service.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <p className="text-xs text-slate-500">
                            Melayani bisnis di seluruh Indonesia
                          </p>
                          <Link
                            href="/layanan"
                            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                          >
                            Semua layanan <ArrowRight size={12} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors rounded-lg hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex h-10 px-4 items-center justify-center gap-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:border-green-500 hover:text-green-600 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <Link
              href="/kontak"
              className="hidden lg:inline-flex h-10 px-5 items-center justify-center rounded-lg gradient-primary text-white text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Konsultasi Gratis
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {NAVIGATION.main.map((item) =>
                item.label === "Layanan" ? (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg"
                    >
                      {item.label}
                    </Link>
                    <div className="ml-2 border-l border-slate-200 pl-2 space-y-1">
                      {NAVIGATION.serviceGroups.map((group, gi) => (
                        <div key={group.label}>
                          <button
                            onClick={() =>
                              setOpenMobileGroup(openMobileGroup === gi ? null : gi)
                            }
                            className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-primary rounded-lg"
                            aria-expanded={openMobileGroup === gi}
                          >
                            {group.label}
                            <ChevronDown
                              size={14}
                              className={cn(
                                "transition-transform",
                                openMobileGroup === gi && "rotate-180"
                              )}
                            />
                          </button>
                          {openMobileGroup === gi && (
                            <div className="ml-4 space-y-0.5 pb-2">
                              {group.items.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block px-4 py-2 text-sm text-slate-600 hover:text-primary rounded-lg"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-3 grid grid-cols-2 gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-green-500 text-green-600 font-medium rounded-lg text-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <Link
                  href="/kontak"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center px-4 py-3 gradient-primary text-white font-medium rounded-lg text-sm"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
