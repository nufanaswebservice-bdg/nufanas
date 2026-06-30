import { Metadata } from "next";
import { SITE_CONFIG, NAP } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "@/components/forms/contact-form";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontak - Konsultasi Gratis Jasa Website Bandung",
  description:
    "Hubungi Nufanas untuk konsultasi gratis jasa pembuatan website di Bandung. Respon cepat via WhatsApp. Kantor: Jl. Cihampelas, Bandung.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/kontak`,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Kontak", href: "/kontak" },
        ])}
      />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-2 block">
              Hubungi Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Konsultasi <span className="gradient-text">Gratis</span>
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Ceritakan kebutuhan website bisnis Anda. Tim kami siap membantu
              menemukan solusi terbaik tanpa commitment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Alamat Kantor</h3>
                    <p className="text-sm text-muted">
                      {NAP.address.street}
                      <br />
                      {NAP.address.city}, {NAP.address.region}{" "}
                      {NAP.address.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${NAP.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-500 hover:underline"
                    >
                      {NAP.phone}
                    </a>
                    <p className="text-xs text-muted mt-1">
                      Respon cepat dalam 5 menit
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${NAP.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {NAP.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Jam Operasional</h3>
                    <p className="text-sm text-muted">
                      Senin - Jumat: 09:00 - 18:00 WIB
                      <br />
                      Sabtu: 09:00 - 15:00 WIB
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-[250px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1!2d${NAP.geo.longitude}!3d${NAP.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sid!2sid!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Lokasi Nufanas Digital Agency"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200">
              <h2 className="text-xl font-bold mb-6">Kirim Pesan</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
