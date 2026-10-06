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
    location: "Jakarta",
  },
  {
    name: "Siti Nurhaliza",
    role: "Owner, Klinik Sehat",
    content:
      "Pelayanan sangat profesional dan responsif meskipun seluruh proses berjalan remote. Website klinik kami sekarang mendatangkan pasien baru setiap bulan dari Google.",
    rating: 5,
    location: "Surabaya",
  },
  {
    name: "Budi Santoso",
    role: "Marketing Director, Hotel Dago Suites",
    content:
      "Tim Nufanas sangat mengerti kebutuhan bisnis hotel. Website baru kami loading cepat, desain premium, dan direct booking meningkat signifikan.",
    rating: 5,
    location: "Bandung",
  },
  {
    name: "Dewi Anggraeni",
    role: "Founder, Kopi Nusantara",
    content:
      "Dari yang tadinya hanya punya Instagram, sekarang kami punya website lengkap dengan menu digital dan reservasi online. Omset naik signifikan!",
    rating: 5,
    location: "Yogyakarta",
  },
  {
    name: "Hendra Wijaya",
    role: "Director, CV Teknologi Nusantara",
    content:
      "Website e-commerce kami dibangun dengan fitur lengkap dan performa luar biasa. Loading cepat, SEO bagus, dan customer experience yang optimal.",
    rating: 5,
    location: "Semarang",
  },
  {
    name: "Ratna Sari",
    role: "Kepala Sekolah, SMA Prestasi",
    content:
      "Website sekolah kami sekarang informatif dan mudah dikelola. Pendaftaran siswa baru online berjalan lancar. Terima kasih Nufanas!",
    rating: 5,
    location: "Medan",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-4">Testimoni Client</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Apa Kata{" "}
            <span className="gradient-text">Client Kami</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Bisnis dari berbagai kota di Indonesia mempercayakan pembuatan
            website dan aplikasi mereka kepada Nufanas.
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
              className="p-6 card card-hover"
            >
              <Quote size={20} className="text-primary/30 mb-4" />
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
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
                  <p className="text-xs text-slate-500">
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
