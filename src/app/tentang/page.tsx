import { Metadata } from "next";
import { SITE_CONFIG, NAP } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Award, Users, Target, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Nufanas - Digital Agency Bandung",
  description:
    "Nufanas adalah digital agency profesional di Bandung yang berdiri sejak 2019. Fokus pada jasa pembuatan website, SEO, dan digital marketing.",
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

      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-2 block">
              Tentang Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Agency{" "}
              <span className="gradient-text">Bandung</span> yang Anda Percaya
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Nufanas adalah digital agency yang berdiri di Bandung sejak 2019.
              Kami fokus membantu bisnis lokal dan nasional membangun kehadiran
              digital yang kuat.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "200+", label: "Project" },
              { value: "150+", label: "Client" },
              { value: "5+", label: "Tahun" },
              { value: "4.9", label: "Rating" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
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
                  "Menjadi digital agency terpercaya #1 di Bandung yang dikenal karena kualitas, inovasi, dan hasil nyata.",
              },
              {
                icon: <Users size={24} />,
                title: "Tim",
                description:
                  "Tim profesional yang terdiri dari web developer, UI/UX designer, SEO specialist, dan digital marketer berpengalaman.",
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
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
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
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2>Cerita Kami</h2>
            <p>
              Nufanas didirikan pada tahun 2019 di Bandung dengan satu tujuan
              sederhana: membantu bisnis lokal memiliki website yang profesional
              tanpa harus membayar mahal. Dimulai dari sebuah tim kecil, kami
              terus berkembang berkat kepercayaan client.
            </p>
            <p>
              Saat ini, Nufanas telah menangani lebih dari 200 project dari
              berbagai industri: mulai dari UMKM, klinik, sekolah, hotel, hingga
              perusahaan manufaktur. Kami bangga menjadi bagian dari pertumbuhan
              digital bisnis-bisnis di Bandung dan Jawa Barat.
            </p>
            <p>
              Yang membedakan Nufanas dari agency lain adalah pendekatan kami yang
              fokus pada hasil. Bukan hanya membuat website yang cantik, tapi
              website yang benar-benar menghasilkan pelanggan baru melalui Google
              dan platform digital lainnya.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
