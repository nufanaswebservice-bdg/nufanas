import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG, NAP, NAVIGATION } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1220] text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/nufanas-logo.png"
                alt="Nufanas — Jasa Pembuatan Website & Aplikasi"
                width={140}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Jasa pembuatan website dan aplikasi custom untuk bisnis di seluruh
              Indonesia — website, aplikasi mobile, web application, dan custom
              software dengan desain premium dan fondasi SEO yang kuat.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>
                  {NAP.address.street}, {NAP.address.city},{" "}
                  {NAP.address.region} {NAP.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-primary shrink-0" />
                <a href={`tel:${NAP.phone}`} className="hover:text-primary transition-colors">
                  {NAP.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-primary shrink-0" />
                <a href={`mailto:${NAP.email}`} className="hover:text-primary transition-colors">
                  {NAP.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-primary shrink-0" />
                <span>Senin - Jumat: 09:00 - 18:00 WIB</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Layanan</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/jasa-pembuatan-website" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  Jasa Pembuatan Website
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-aplikasi" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  Jasa Pembuatan Aplikasi
                </Link>
              </li>
              <li>
                <Link href="/jasa-website-ecommerce" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  Website E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/jasa-web-application" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  Web Application
                </Link>
              </li>
              <li>
                <Link href="/jasa-aplikasi-mobile" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  Aplikasi Mobile
                </Link>
              </li>
              <li>
                <Link href="/jasa-custom-software" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-sistem-informasi" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  Sistem Informasi
                </Link>
              </li>
              <li>
                <Link href="/layanan/jasa-seo" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  Jasa SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Menu</h3>
            <ul className="space-y-2.5">
              {NAVIGATION.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="font-semibold text-white mb-4">Area Layanan</h3>
            <p className="text-xs text-slate-500 mb-3">
              Melayani seluruh Indonesia — konsultasi & pengerjaan 100% bisa
              remote.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Seluruh Indonesia",
                "Jakarta",
                "Surabaya",
                "Bandung",
                "Medan",
                "Semarang",
                "Yogyakarta",
                "Makassar",
                "Bali",
                "Palembang",
                "Balikpapan",
                "Batam",
              ].map((area) => (
                <span
                  key={area}
                  className="text-xs px-2.5 py-1 bg-slate-800 rounded-full text-slate-400"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved. Jasa
            Pembuatan Website & Aplikasi untuk Bisnis Indonesia.
          </p>
          <div className="flex items-center gap-4">
            {Object.entries(NAP.socialMedia).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary transition-colors text-sm capitalize"
                aria-label={`Follow kami di ${platform}`}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
