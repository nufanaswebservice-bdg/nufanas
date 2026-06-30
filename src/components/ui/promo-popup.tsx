"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAP } from "@/lib/constants";

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("promo-dismissed");
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("promo-dismissed", "true");
  };

  const handleCTA = () => {
    const message = encodeURIComponent(
      "Halo Nufanas, saya tertarik dengan promo pembuatan website Rp 800.000. Bisa info lebih lanjut?"
    );
    window.open(`https://wa.me/${NAP.whatsapp}?text=${message}`, "_blank");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Tutup"
            >
              <X size={18} />
            </button>

            {/* Promo Image */}
            <img
              src="/images/promo1.png"
              alt="Promo Pembuatan Website Rp 800.000"
              className="w-full h-auto"
            />

            {/* CTA */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                🔥 Promo Website Hanya Rp 800.000!
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Dapatkan website profesional untuk bisnis Anda dengan harga spesial. Penawaran terbatas!
              </p>
              <button
                onClick={handleCTA}
                className="w-full h-12 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg transition-all"
              >
                Chat WhatsApp Sekarang
              </button>
              <button
                onClick={handleClose}
                className="mt-2 text-xs text-slate-400 hover:text-slate-600"
              >
                Nanti saja
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
