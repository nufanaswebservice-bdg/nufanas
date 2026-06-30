"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAP } from "@/lib/constants";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const message = encodeURIComponent(
    "Halo Nufanas, saya tertarik dengan jasa pembuatan website. Bisa konsultasi gratis?"
  );
  const whatsappUrl = `https://wa.me/${NAP.whatsapp}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 w-72 rounded-2xl bg-white dark:bg-slate-800 shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="bg-green-500 p-4 text-white">
              <p className="font-semibold">Nufanas Digital Agency</p>
              <p className="text-sm opacity-90">
                Biasanya membalas dalam beberapa menit
              </p>
            </div>
            <div className="p-4">
              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 mb-3">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Halo! 👋 Ada yang bisa kami bantu? Konsultasi website gratis!
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg transition-colors"
                aria-label="Chat via WhatsApp"
              >
                Mulai Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center transition-colors"
        aria-label={isOpen ? "Tutup chat WhatsApp" : "Buka chat WhatsApp"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
