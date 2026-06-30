"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { NAP, ENTITIES } from "@/lib/constants";

export function LocationSection() {
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
            Lokasi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Melayani Bisnis di{" "}
            <span className="gradient-text">Bandung & Sekitarnya</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Kantor kami berlokasi strategis di pusat Kota Bandung. Kami melayani
            bisnis di seluruh Bandung Raya dan Jawa Barat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 h-[400px]"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1!2d${NAP.geo.longitude}!3d${NAP.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sid!2sid!4v1`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Nufanas Digital Agency Bandung"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                {NAP.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-2">
                {NAP.address.street}
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {NAP.address.city}, {NAP.address.region}{" "}
                {NAP.address.postalCode}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong>Jam Operasional:</strong> Senin - Jumat: 09:00 - 18:00
                WIB | Sabtu: 09:00 - 15:00 WIB
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Area Layanan</h4>
              <div className="flex flex-wrap gap-2">
                {ENTITIES.areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
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
