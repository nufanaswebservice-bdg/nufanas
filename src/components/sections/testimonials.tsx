"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Rizky",
    role: "CEO, PT Maju Bersama",
    content:
      "Nufanas membantu kami membangun website company profile yang profesional. Dalam 3 bulan, website kami sudah muncul di halaman pertama Google untuk keyword target.",
    rating: 5,
    location: "Bandung",
  },
  {
    name: "Siti Nurhaliza",
    role: "Owner, Klinik Sehat Bandung",
    content:
      "Pelayanan sangat profesional dan responsif. Website klinik kami sekarang mendatangkan 50+ pasien baru setiap bulan dari Google. Sangat recommended!",
    rating: 5,
    location: "Bandung",
  },
  {
    name: "Budi Santoso",
    role: "Marketing Director, Hotel Dago Suites",
    content:
      "Tim Nufanas sangat mengerti kebutuhan bisnis hotel. Website baru kami loading cepat, desain premium, dan booking langsung meningkat 200%.",
    rating: 5,
    location: "Dago, Bandung",
  },
  {
    name: "Dewi Anggraeni",
    role: "Founder, Cafe Kopi Nusantara",
    content:
      "Dari yang tadinya hanya punya Instagram, sekarang cafe kami punya website lengkap dengan menu digital dan reservasi online. Omset naik signifikan!",
    rating: 5,
    location: "Setiabudi, Bandung",
  },
  {
    name: "Hendra Wijaya",
    role: "Director, CV Teknologi Nusantara",
    content:
      "Website e-commerce kami dibangun dengan fitur lengkap dan performa luar biasa. Loading cepat, SEO bagus, dan customer experience yang optimal.",
    rating: 5,
    location: "Cimahi",
  },
  {
    name: "Ratna Sari",
    role: "Kepala Sekolah, SMA Prestasi Bandung",
    content:
      "Website sekolah kami sekarang informatif dan mudah dikelola. Pendaftaran siswa baru online berjalan lancar. Terima kasih Nufanas!",
    rating: 5,
    location: "Antapani, Bandung",
  },
];

export function TestimonialsSection() {
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
            Testimoni Client
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa Kata{" "}
            <span className="gradient-text">Client Kami</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Lebih dari 150 bisnis di Bandung dan Jawa Barat sudah mempercayakan
            pembuatan website mereka kepada Nufanas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all"
            >
              <Quote size={20} className="text-primary/30 mb-4" />
              <p className="text-sm text-muted mb-4 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
