import { Metadata } from "next";
import { SITE_CONFIG, NAP } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Syarat dan ketentuan layanan jasa pembuatan website dan aplikasi Nufanas — ruang lingkup, pembayaran, hak kekayaan intelektual, dan garansi.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Terms of Service", href: "/terms" },
        ])}
      />

      <section className="pt-28 sm:pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="eyebrow mb-4">Legal</span>
            <h1 className="text-4xl font-bold mb-4 text-slate-900">
              Terms of Service
            </h1>
            <p className="text-muted">Terakhir diperbarui: Januari 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2>1. Ruang Lingkup Layanan</h2>
            <p>
              Nufanas menyediakan jasa pembuatan website, aplikasi mobile, web
              application, dan custom software untuk bisnis di seluruh Indonesia.
              Ruang lingkup pekerjaan, fitur, timeline, dan biaya untuk setiap
              project disepakati secara tertulis melalui proposal atau kontrak
              sebelum pengerjaan dimulai.
            </p>

            <h2>2. Pembayaran</h2>
            <ul>
              <li>
                Project dimulai setelah pembayaran uang muka (DP) sesuai
                kesepakatan dalam proposal diterima.
              </li>
              <li>
                Pelunasan dilakukan sebelum website/aplikasi di-deploy ke
                production atau serah terima penuh.
              </li>
              <li>
                Harga yang tercantum di website adalah estimasi awal dan dapat
                berubah sesuai ruang lingkup final yang disepakati.
              </li>
            </ul>

            <h2>3. Revisi dan Perubahan</h2>
            <p>
              Jumlah revisi mengikuti paket yang dipilih. Permintaan perubahan di
              luar ruang lingkup yang disepakati (scope change) dapat dikenakan
              biaya tambahan yang dikomunikasikan terlebih dahulu.
            </p>

            <h2>4. Hak Kekayaan Intelektual</h2>
            <p>
              Setelah pelunasan penuh, hak atas hasil pekerjaan (kode sumber,
              desain) berpindah kepada client, kecuali komponen pihak ketiga
              (library, framework, lisensi) yang tetap mengikuti lisensi
              masing-masing. Nufanas berhak menampilkan hasil pekerjaan dalam
              portfolio kecuali disepakati lain.
            </p>

            <h2>5. Garansi dan Maintenance</h2>
            <p>
              Setiap project mencakup masa garansi perbaikan bug sesuai paket.
              Garansi tidak mencakup kerusakan akibat perubahan yang dilakukan
              pihak lain, serangan keamanan di luar kendali wajar, atau
              penyalahgunaan sistem. Layanan maintenance berkelanjutan tersedia
              sebagai paket terpisah.
            </p>

            <h2>6. Tanggung Jawab Client</h2>
            <p>
              Client bertanggung jawab menyediakan konten (teks, gambar, logo)
              yang tidak melanggar hak cipta pihak ketiga, serta memberikan
              feedback dan persetujuan dalam waktu yang wajar agar timeline
              project tidak terhambat.
            </p>

            <h2>7. Batasan Tanggung Jawab</h2>
            <p>
              Nufanas tidak bertanggung jawab atas kerugian tidak langsung yang
              timbul dari penggunaan layanan, termasuk namun tidak terbatas pada
              kehilangan data, downtime pihak ketiga (hosting, payment gateway),
              atau perubahan algoritma mesin pencari.
            </p>

            <h2>8. Pembatalan</h2>
            <p>
              Pembatalan project oleh client setelah pengerjaan dimulai: DP yang
              sudah dibayarkan tidak dapat dikembalikan dan berfungsi sebagai
              kompensasi pekerjaan yang telah dilakukan.
            </p>

            <h2>9. Kontak</h2>
            <p>Untuk pertanyaan mengenai syarat dan ketentuan ini:</p>
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
