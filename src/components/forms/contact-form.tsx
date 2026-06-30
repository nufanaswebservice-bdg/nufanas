"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { NAP } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon minimal 10 digit"),
  service: z.string().min(1, "Pilih layanan"),
  budget: z.string().optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);

    // Redirect to WhatsApp with form data
    const message = encodeURIComponent(
      `Halo Nufanas!\n\nNama: ${data.name}\nEmail: ${data.email}\nTelepon: ${data.phone}\nLayanan: ${data.service}\nBudget: ${data.budget || "Belum ditentukan"}\n\nPesan:\n${data.message}`
    );
    window.open(`https://wa.me/${NAP.whatsapp}?text=${message}`, "_blank");

    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Nama Lengkap *
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          placeholder="Masukkan nama Anda"
          className="w-full h-11 px-4 rounded-lg border border-slate-300 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email *
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="email@example.com"
            className="w-full h-11 px-4 rounded-lg border border-slate-300 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
            WhatsApp / Telepon *
          </label>
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            placeholder="08xxxxxxxxxx"
            className="w-full h-11 px-4 rounded-lg border border-slate-300 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium mb-1.5"
          >
            Layanan yang Dibutuhkan *
          </label>
          <select
            {...register("service")}
            id="service"
            className="w-full h-11 px-4 rounded-lg border border-slate-300 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Pilih layanan</option>
            <option value="Website Company Profile">
              Website Company Profile
            </option>
            <option value="Website Toko Online">Website Toko Online</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Website UMKM">Website UMKM</option>
            <option value="Web Application">Web Application</option>
            <option value="Jasa SEO">Jasa SEO</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Lainnya">Lainnya</option>
          </select>
          {errors.service && (
            <p className="text-xs text-red-500 mt-1">
              {errors.service.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-1.5">
            Budget (opsional)
          </label>
          <select
            {...register("budget")}
            id="budget"
            className="w-full h-11 px-4 rounded-lg border border-slate-300 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Pilih range budget</option>
            <option value="< Rp 3 juta">&lt; Rp 3 juta</option>
            <option value="Rp 3-5 juta">Rp 3-5 juta</option>
            <option value="Rp 5-10 juta">Rp 5-10 juta</option>
            <option value="Rp 10-25 juta">Rp 10-25 juta</option>
            <option value="Rp 25-50 juta">Rp 25-50 juta</option>
            <option value="> Rp 50 juta">&gt; Rp 50 juta</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Detail Kebutuhan *
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          placeholder="Ceritakan kebutuhan website Anda..."
          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {isSuccess && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
          Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 rounded-xl gradient-primary text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send size={18} />
            Kirim Pesan
          </>
        )}
      </button>
    </form>
  );
}
