"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl"
            aria-label="Nufanas - Beranda"
          >
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <span className="gradient-text">Nufanas</span>
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
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors rounded-lg hover:bg-slate-100:bg-slate-800"
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </Link>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-2"
                      >
                        {NAVIGATION.services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:text-primary hover:bg-slate-50:bg-slate-700 rounded-lg transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors rounded-lg hover:bg-slate-100:bg-slate-800"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100:bg-slate-800 transition-colors"
                aria-label="Toggle tema"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <Link
              href="/kontak"
              className="hidden lg:inline-flex h-10 px-5 items-center justify-center rounded-lg gradient-primary text-white text-sm font-medium hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              Konsultasi Gratis
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100:bg-slate-800"
              aria-label="Toggle menu"
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
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-4 space-y-1">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50:bg-slate-800 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/kontak"
                onClick={() => setIsMobileOpen(false)}
                className="block text-center mt-4 px-4 py-3 gradient-primary text-white font-medium rounded-lg"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
