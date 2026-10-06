import { Metadata } from "next";
import Link from "next/link";
import { NAP, SITE_CONFIG } from "@/lib/constants";
import { CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terima Kasih — Pesan Anda Sudah Kami Terima",
  description:
    "Terima kasih telah menghubungi Nufanas. Tim kami akan segera merespons pesan Anda.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/terima-kasih`,
  },
};

export default function ThankYouPage() {
  return (
    <section className="pt-40 pb-32 min-h-[70vh] flex items-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={44} className="text-green-600" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Terima Kasih!
        </h1>
        <p className="text-muted text-lg mb-3">
          Pesan Anda sudah kami terima. WhatsApp seharusnya sudah terbuka di tab
          baru — silakan kirim pesan yang sudah terisi otomatis.
        </p>
        <p className="text-sm text-muted mb-10">
          Jika WhatsApp tidak terbuka, klik tombol di bawah untuk chat langsung
          dengan tim kami.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
              "Halo Nufanas, saya baru saja mengisi form kontak di website."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={16} />
            Chat WhatsApp
          </a>
          <Link href="/" className="btn-secondary">
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
