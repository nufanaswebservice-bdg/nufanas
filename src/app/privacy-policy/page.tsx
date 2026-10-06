import { Metadata } from "next";
import { SITE_CONFIG, NAP } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kebijakan privasi Nufanas mengenai pengumpulan, penggunaan, dan perlindungan data pengguna website nufanas.com.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy" },
        ])}
      />

      <section className="pt-28 sm:pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="eyebrow mb-4">Legal</span>
            <h1 className="text-4xl font-bold mb-4 text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-muted">
              Terakhir diperbarui: Januari 2025
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2>1. Informasi yang Kami Kumpulkan</h2>
            <p>
              Nufanas (&quot;kami&quot;) mengumpulkan informasi yang Anda berikan
              secara langsung melalui form kontak, WhatsApp, atau email, seperti
              nama, alamat email, nomor telepon, nama bisnis, dan detail kebutuhan
              project Anda.
            </p>
            <p>
              Kami juga mengumpulkan data penggunaan website secara otomatis
              melalui tools analitik (Google Analytics) untuk memahami bagaimana
              pengunjung berinteraksi dengan website kami.
            </p>

            <h2>2. Penggunaan Informasi</h2>
            <p>Informasi yang kami kumpulkan digunakan untuk:</p>
            <ul>
              <li>Merespons pertanyaan dan permintaan konsultasi Anda</li>
              <li>Menyusun proposal dan estimasi project</li>
              <li>Menjalankan dan mengelola project yang disepakati</li>
              <li>Mengirimkan update terkait layanan kami (dengan persetujuan)</li>
              <li>Menganalisis dan meningkatkan kualitas website dan layanan</li>
            </ul>

            <h2>3. Perlindungan Data</h2>
            <p>
              Kami menerapkan langkah keamanan teknis dan organisasi yang wajar
              untuk melindungi informasi Anda dari akses, penggunaan, atau
              pengungkapan yang tidak sah. Data project client dijaga kerahasiaannya
              dan tidak dibagikan kepada pihak ketiga tanpa persetujuan.
            </p>

            <h2>4. Berbagi Informasi</h2>
            <p>
              Kami tidak menjual atau menyewakan data pribadi Anda. Informasi
              hanya dapat dibagikan kepada pihak ketiga yang membantu operasional
              kami (misalnya penyedia hosting atau layanan email) dengan kewajiban
              menjaga kerahasiaan yang sama.
            </p>

            <h2>5. Cookie</h2>
            <p>
              Website kami menggunakan cookie untuk keperluan analitik dan
              fungsionalitas dasar. Anda dapat mengatur browser untuk menolak
              cookie, namun beberapa fitur website mungkin tidak berfungsi
              optimal.
            </p>

            <h2>6. Hak Anda</h2>
            <p>
              Anda berhak meminta akses, koreksi, atau penghapusan data pribadi
              Anda yang kami simpan. Silakan hubungi kami untuk permintaan
              tersebut.
            </p>

            <h2>7. Perubahan Kebijakan</h2>
            <p>
              Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan
              akan diumumkan di halaman ini dengan tanggal pembaruan terbaru.
            </p>

            <h2>8. Kontak</h2>
            <p>
              Untuk pertanyaan mengenai kebijakan privasi ini, hubungi kami:
            </p>
            <ul>
              <li>Email: {NAP.email}</li>
              <li>WhatsApp: {NAP.phone}</li>
              <li>
                Alamat: {NAP.address.street}, {NAP.address.city},{" "}
                {NAP.address.region} {NAP.address.postalCode}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
