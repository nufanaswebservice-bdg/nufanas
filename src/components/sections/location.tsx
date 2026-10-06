"use client";

import { motion } from "framer-motion";
import { MapPin, Video, MessageCircle } from "lucide-react";
import { NAP, ENTITIES } from "@/lib/constants";

export function LocationSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-4">Area Layanan</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Melayani Bisnis di{" "}
            <span className="gradient-text">Seluruh Indonesia</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kantor kami berbasis di Bandung, namun seluruh proses — konsultasi,
            desain, development, hingga serah terima — dapat dilakukan 100%
            remote untuk client di semua kota di Indonesia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map kantor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-slate-200 h-[320px] lg:h-auto shadow-sm"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1!2d${NAP.geo.longitude}!3d${NAP.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sid!2sid!4v1`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kantor Nufanas — Jasa Pembuatan Website & Aplikasi"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-5 card">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-slate-900">Kantor Pusat</h3>
                  <p className="text-sm text-slate-600">
                    {NAP.address.street}, {NAP.address.city},{" "}
                    {NAP.address.region} {NAP.address.postalCode}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Senin–Jumat 09:00–18:00 WIB · Sabtu 09:00–15:00 WIB
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 card">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Video size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-slate-900">100% Remote-Friendly</h3>
                  <p className="text-sm text-slate-600">
                    Meeting via Zoom/Google Meet, update progress via WhatsApp,
                    dan demo hasil kerja secara berkala.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 card">
                <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-slate-900">Respon Cepat</h3>
                  <p className="text-sm text-slate-600">
                    WhatsApp {NAP.phone} — biasanya membalas dalam beberapa
                    menit di jam kerja.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-slate-900 text-sm">
                Kota yang Kami Layani
              </h4>
              <div className="flex flex-wrap gap-2">
                {ENTITIES.areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
