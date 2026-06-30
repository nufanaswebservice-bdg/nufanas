import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ALL_SERVICES, SEO_SERVICE, SITE_CONFIG, ENTITIES, TECHNOLOGIES } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

const allServicesWithSeo = [...ALL_SERVICES, SEO_SERVICE];

function getService(slug: string) {
  return allServicesWithSeo.find((s) => s.slug === slug);
}

export async function generateStaticParams() {
  return allServicesWithSeo.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} | Terpercaya & Berpengalaman`,
    description: service.description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/layanan/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Nufanas Digital Agency & Software House`,
      description: service.description,
      url: `${SITE_CONFIG.url}/layanan/${slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const isAppService = slug.includes("aplikasi") || slug.includes("erp") || slug.includes("crm") || slug.includes("hris") || slug.includes("pos") || slug.includes("saas") || slug.includes("marketplace") || slug.includes("dashboard") || slug.includes("sistem-informasi") || slug.includes("custom-software") || slug.includes("web-application");

  const faqs = [
    {
      question: `Berapa biaya ${service.title.toLowerCase()}?`,
      answer: `Biaya ${service.title.toLowerCase()} di Nufanas ${service.price}. Harga disesuaikan dengan kompleksitas fitur, integrasi, dan kebutuhan bisnis Anda. Hubungi kami untuk konsultasi gratis dan estimasi akurat.`,
    },
    {
      question: `Berapa lama pengerjaan ${service.shortTitle.toLowerCase()}?`,
      answer: `Rata-rata pengerjaan ${service.shortTitle.toLowerCase()} memakan waktu ${isAppService ? "2-6 bulan" : "2-6 minggu"} tergantung kompleksitas. Kami memberikan timeline yang jelas di awal project.`,
    },
    {
      question: `Teknologi apa yang digunakan untuk ${service.shortTitle.toLowerCase()}?`,
      answer: `Kami menggunakan teknologi terkini: ${isAppService ? "Flutter, React Native, Kotlin, Swift untuk mobile. Next.js, NestJS, Laravel untuk web. PostgreSQL, MongoDB untuk database." : "Next.js, React, TailwindCSS untuk frontend. Node.js, NestJS untuk backend. PostgreSQL untuk database."} Semua dipilih berdasarkan kebutuhan project Anda.`,
    },
    {
      question: `Apakah ada garansi setelah ${service.shortTitle.toLowerCase()} selesai?`,
      answer: `Ya, semua project kami memiliki garansi maintenance: minimal 3 bulan untuk perbaikan bug. Paket Enterprise mendapatkan support hingga 12 bulan. Kami juga menyediakan paket maintenance bulanan.`,
    },
    {
      question: `Apakah bisa konsultasi dulu sebelum memulai project?`,
      answer: `Tentu! Kami menyediakan konsultasi gratis tanpa commitment. Ceritakan kebutuhan Anda dan tim kami akan memberikan rekomendasi terbaik beserta estimasi biaya dan timeline.`,
    },
    {
      question: `Area mana saja yang dilayani?`,
      answer: `Kami melayani client di seluruh Bandung, Cimahi, Jawa Barat, dan seluruh Indonesia. Konsultasi bisa dilakukan tatap muka atau remote via WhatsApp dan video call.`,
    },
  ];

  const relatedServices = allServicesWithSeo
    .filter((s) => s.slug !== slug && s.category === service.category)
    .slice(0, 4);

  const otherServices = allServicesWithSeo
    .filter((s) => s.slug !== slug && s.category !== service.category)
    .slice(0, 4);

  return (
    <>
      <JsonLd data={generateServiceSchema(service)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
          { name: service.title, href: `/layanan/${slug}` },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-primary">Beranda</Link></li>
              <li>/</li>
              <li><Link href="/layanan" className="hover:text-primary">Layanan</Link></li>
              <li>/</li>
              <li className="text-slate-900 font-medium">{service.shortTitle}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              {service.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {service.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-2xl font-bold text-primary">
                {service.price}
              </span>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl gradient-primary text-white font-medium hover:shadow-lg transition-all"
              >
                Konsultasi Gratis
              </Link>
              <a
                href={`https://wa.me/6285603768433?text=${encodeURIComponent(`Halo Nufanas, saya tertarik dengan ${service.title}. Bisa konsultasi?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-green-500 text-green-600 font-medium hover:bg-green-50:bg-green-900/20 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </header>

          {/* Key Takeaways */}
          <section className="mb-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="text-lg font-bold mb-3 text-slate-900">📋 Ringkasan Layanan</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✅ {isAppService ? "Aplikasi native & cross-platform berkualitas tinggi" : "Desain premium, responsive, dan mobile-first"}</li>
              <li>✅ {isAppService ? "UI/UX design khusus sesuai brand Anda" : "SEO on-page terintegrasi dari awal"}</li>
              <li>✅ {isAppService ? "Backend scalable & secure" : "Performa cepat dengan skor Lighthouse tinggi"}</li>
              <li>✅ {isAppService ? "Testing menyeluruh sebelum launch" : "Support teknis setelah website launch"}</li>
              <li>✅ Melayani area Bandung, Cimahi, Jawa Barat & seluruh Indonesia</li>
              <li>✅ Garansi maintenance & support pasca-launch</li>
            </ul>
          </section>

          {/* Main Content */}
          <section className="prose prose-slate max-w-none mb-12">
            <h2>Mengapa Memilih {service.title}?</h2>
            <p>
              Di era digital saat ini, memiliki {isAppService ? "aplikasi" : "website"} yang profesional bukan lagi
              pilihan, melainkan keharusan. {service.title} dari Nufanas dirancang
              khusus untuk membantu bisnis di Bandung dan Jawa Barat {isAppService ? "mengotomasi operasional dan meningkatkan produktivitas" : "tampil profesional di internet dan mendapatkan lebih banyak pelanggan"}.
            </p>
            <p>
              Tim kami yang berpengalaman menggunakan teknologi terkini untuk membangun {isAppService ? "software" : "website"} yang tidak
              hanya fungsional, tetapi juga {isAppService ? "scalable, secure, dan user-friendly" : "cepat, aman, dan mudah ditemukan di mesin pencari"}.
            </p>

            <h2>Apa yang Anda Dapatkan?</h2>
            <ul>
              {isAppService ? (
                <>
                  <li>UI/UX design custom sesuai kebutuhan bisnis</li>
                  <li>Development dengan clean code dan best practices</li>
                  <li>Backend API yang scalable dan secure</li>
                  <li>Database architecture yang optimal</li>
                  <li>Testing: unit test, integration test, UAT</li>
                  <li>Deployment ke production (Play Store/App Store/Cloud)</li>
                  <li>Dokumentasi teknis lengkap</li>
                  <li>Training untuk tim Anda</li>
                  <li>Garansi maintenance pasca-launch</li>
                </>
              ) : (
                <>
                  <li>Desain UI/UX premium sesuai brand Anda</li>
                  <li>Website responsive di semua perangkat</li>
                  <li>Optimasi SEO on-page dan technical SEO</li>
                  <li>Integrasi Google Analytics dan Search Console</li>
                  <li>Schema markup untuk rich snippets di Google</li>
                  <li>SSL dan proteksi keamanan</li>
                  <li>Loading time di bawah 2 detik</li>
                  <li>Support teknis pasca-launch</li>
                </>
              )}
            </ul>

            <h2>Teknologi yang Kami Gunakan</h2>
            <p>
              Kami memilih teknologi berdasarkan kebutuhan spesifik project Anda:
            </p>
            <ul>
              {isAppService ? (
                <>
                  <li><strong>Mobile:</strong> Flutter, React Native, Kotlin, Swift</li>
                  <li><strong>Backend:</strong> Node.js, NestJS, Laravel, Python, Go</li>
                  <li><strong>Database:</strong> PostgreSQL, MySQL, MongoDB, Redis</li>
                  <li><strong>Cloud:</strong> AWS, Google Cloud, Vercel, Docker</li>
                  <li><strong>DevOps:</strong> CI/CD, Docker, Kubernetes</li>
                </>
              ) : (
                <>
                  <li><strong>Frontend:</strong> Next.js, React, TailwindCSS</li>
                  <li><strong>Backend:</strong> Node.js, NestJS, Laravel</li>
                  <li><strong>Database:</strong> PostgreSQL, Supabase</li>
                  <li><strong>Hosting:</strong> Vercel, AWS</li>
                </>
              )}
            </ul>

            <h2>Proses Pengerjaan</h2>
            <ol>
              <li><strong>Discovery & Konsultasi</strong> — Memahami kebutuhan dan goals bisnis</li>
              <li><strong>Planning & Architecture</strong> — Merancang solusi teknis terbaik</li>
              <li><strong>UI/UX Design</strong> — Wireframe dan mockup untuk approval</li>
              <li><strong>Development</strong> — Coding dengan standar kualitas tinggi</li>
              <li><strong>Testing & QA</strong> — Testing menyeluruh sebelum launch</li>
              <li><strong>Deployment</strong> — Go live dan monitoring</li>
              <li><strong>Maintenance</strong> — Support dan perbaikan pasca-launch</li>
            </ol>

            <h2>Area Layanan</h2>
            <p>
              Kami melayani {service.shortTitle.toLowerCase()} untuk bisnis di
              seluruh wilayah: {ENTITIES.areas.join(", ")}. Konsultasi bisa dilakukan
              tatap muka di kantor kami atau remote via WhatsApp dan video call.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">
              FAQ — {service.title}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white border border-slate-200"
                >
                  <h3 className="font-semibold mb-2 text-slate-900">{faq.question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12 p-8 rounded-2xl gradient-primary text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Siap Memulai Project?</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Konsultasi gratis tanpa commitment. Ceritakan kebutuhan Anda dan dapatkan estimasi harga dalam 24 jam.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kontak" className="h-11 px-6 rounded-lg bg-white text-primary font-medium inline-flex items-center hover:bg-white/90 transition-all">
                Request Proposal
              </Link>
              <a href="https://wa.me/6285603768433" target="_blank" rel="noopener noreferrer" className="h-11 px-6 rounded-lg border border-white/30 text-white font-medium inline-flex items-center hover:bg-white/10 transition-all">
                WhatsApp Sekarang
              </a>
            </div>
          </section>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Layanan Terkait</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedServices.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/layanan/${related.slug}`}
                    className="p-5 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition-all"
                  >
                    <h3 className="font-semibold mb-1 text-sm text-slate-900">{related.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{related.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Other Services */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Layanan Lainnya</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/layanan/${other.slug}`}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition-all"
                >
                  <h3 className="font-semibold mb-1 text-sm text-slate-900">{other.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{other.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
