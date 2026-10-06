import { Metadata } from "next";
import { SITE_CONFIG, NAP } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Award, Users, Target, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Nufanas — Software House Indonesia",
  description:
    "Nufanas adalah software house yang melayani jasa pembuatan website dan aplikasi custom untuk bisnis di seluruh Indonesia sejak 2019.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/tentang`,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Tentang", href: "/tentang" },
        ])}
      />

      <section className="pt-28 sm:pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4">Tentang Kami</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 text-balance">
              Software House yang{" "}
              <span className="gradient-text">Dipercaya Bisnis Indonesia</span>
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Nufanas adalah software house yang berdiri sejak 2019. Kami
              membantu bisnis di seluruh Indonesia membangun website, aplikasi,
              dan custom software yang menghasilkan.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "300+", label: "Project" },
              { value: "200+", label: "Client" },
              { value: "5+", label: "Tahun" },
              { value: "4.9", label: "Rating" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 card"
              >
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: <Target size={24} />,
                title: "Misi",
                description:
                  "Membantu 1000+ bisnis di Indonesia memiliki kehadiran digital yang profesional dan menghasilkan revenue.",
              },
              {
                icon: <Lightbulb size={24} />,
                title: "Visi",
                description:
                  "Menjadi software house terpercaya di Indonesia yang dikenal karena kualitas, inovasi, dan hasil nyata.",
              },
              {
                icon: <Users size={24} />,
                title: "Tim",
                description:
                  "Tim in-house yang terdiri dari web developer, mobile developer, UI/UX designer, dan SEO specialist berpengalaman.",
              },
              {
                icon: <Award size={24} />,
                title: "Komitmen",
                description:
                  "Kami berkomitmen memberikan kualitas terbaik, komunikasi transparan, dan hasil yang terukur untuk setiap client.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 card card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="prose prose-slate max-w-none">
            <h2>Cerita Kami</h2>
            <p>
              Nufanas didirikan pada tahun 2019 dengan satu tujuan sederhana:
              membantu bisnis memiliki website yang profesional tanpa harus
              membayar mahal. Dimulai dari sebuah tim kecil, kami terus
              berkembang berkat kepercayaan client.
            </p>
            <p>
              Saat ini, Nufanas telah menangani lebih dari 300 project dari
              berbagai industri: mulai dari UMKM, klinik, sekolah, hotel, hingga
              perusahaan manufaktur — dikerjakan untuk klien di berbagai kota di
              Indonesia, mayoritas melalui kolaborasi remote yang terstruktur.
            </p>
            <p>
              Yang membedakan Nufanas dari agency lain adalah pendekatan kami yang
              fokus pada hasil. Bukan hanya membuat website yang cantik, tapi
              website dan aplikasi yang benar-benar menghasilkan pelanggan baru
              melalui Google dan platform digital lainnya.
            </p>
            <p>
              Kantor pusat kami berada di {NAP.address.street},{" "}
              {NAP.address.city} — dan kami melayani seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
