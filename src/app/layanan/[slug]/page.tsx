import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, SITE_CONFIG, NAP, ENTITIES } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} | Jasa Website Terpercaya`,
    description: service.description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/layanan/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Nufanas Digital Agency Bandung`,
      description: service.description,
      url: `${SITE_CONFIG.url}/layanan/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const faqs = [
    {
      question: `Berapa biaya ${service.title.toLowerCase()}?`,
      answer: `Biaya ${service.title.toLowerCase()} di Nufanas ${service.price}. Harga disesuaikan dengan kompleksitas fitur dan kebutuhan bisnis Anda. Hubungi kami untuk konsultasi gratis dan penawaran terbaik.`,
    },
    {
      question: `Berapa lama pengerjaan ${service.shortTitle.toLowerCase()}?`,
      answer: `Rata-rata pengerjaan ${service.shortTitle.toLowerCase()} memakan waktu 2-6 minggu tergantung kompleksitas. Kami berkomitmen menyelesaikan project tepat waktu tanpa mengorbankan kualitas.`,
    },
    {
      question: `Apakah ${service.shortTitle.toLowerCase()} sudah termasuk SEO?`,
      answer: `Ya, semua layanan kami sudah termasuk optimasi SEO on-page dasar: meta title, meta description, heading structure, schema markup, sitemap, dan robots.txt. Untuk SEO lanjutan tersedia paket terpisah.`,
    },
    {
      question: `Apakah bisa revisi desain ${service.shortTitle.toLowerCase()}?`,
      answer: `Tentu. Kami memberikan revisi sesuai paket yang dipilih. Paket Professional dan Enterprise mendapatkan unlimited revisi sampai Anda puas dengan hasilnya.`,
    },
    {
      question: `Area mana saja yang dilayani untuk ${service.shortTitle.toLowerCase()}?`,
      answer: `Kami melayani klien di seluruh Bandung, Cimahi, Lembang, dan sekitarnya. Bahkan klien dari luar kota juga bisa menggunakan layanan kami secara remote melalui WhatsApp dan video call.`,
    },
  ];

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

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
            <ol className="flex items-center gap-2 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/layanan" className="hover:text-primary">
                  Layanan
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">{service.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              {service.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl font-bold text-primary">
                {service.price}
              </span>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl gradient-primary text-white font-medium hover:shadow-lg transition-all"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </header>

          {/* Key Takeaways */}
          <section className="mb-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="text-lg font-bold mb-3">📋 Ringkasan Layanan</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>✅ Desain premium, responsive, dan mobile-first</li>
              <li>✅ SEO on-page terintegrasi dari awal</li>
              <li>✅ Performa cepat dengan skor Lighthouse tinggi</li>
              <li>✅ Support teknis setelah website launch</li>
              <li>✅ Melayani area Bandung, Cimahi, dan Jawa Barat</li>
            </ul>
          </section>

          {/* Main Content */}
          <section className="prose prose-slate dark:prose-invert max-w-none mb-12">
            <h2>Mengapa Memilih {service.title}?</h2>
            <p>
              Di era digital saat ini, memiliki website yang profesional bukan lagi
              pilihan, melainkan keharusan. {service.title} dari Nufanas dirancang
              khusus untuk membantu bisnis di Bandung dan Jawa Barat tampil
              profesional di internet dan mendapatkan lebih banyak pelanggan melalui
              Google.
            </p>
            <p>
              Tim kami yang berpengalaman menggunakan teknologi terkini seperti
              Next.js, React, dan TailwindCSS untuk membangun website yang tidak
              hanya indah dipandang, tetapi juga cepat, aman, dan mudah ditemukan di
              mesin pencari.
            </p>

            <h2>Apa yang Anda Dapatkan?</h2>
            <ul>
              <li>Desain UI/UX premium yang sesuai dengan brand Anda</li>
              <li>Website responsive yang tampil sempurna di semua perangkat</li>
              <li>Optimasi SEO on-page dan technical SEO</li>
              <li>Integrasi Google Analytics dan Search Console</li>
              <li>Schema markup untuk rich snippets di Google</li>
              <li>Keamanan SSL dan proteksi DDoS</li>
              <li>Loading time di bawah 2 detik</li>
              <li>Support teknis pasca-launch</li>
            </ul>

            <h2>Proses Pengerjaan</h2>
            <ol>
              <li>
                <strong>Konsultasi Gratis</strong> — Kami memahami kebutuhan dan
                goals bisnis Anda
              </li>
              <li>
                <strong>Proposal & Estimasi</strong> — Timeline, budget, dan scope
                yang jelas
              </li>
              <li>
                <strong>Desain</strong> — Wireframe dan mockup untuk approval
              </li>
              <li>
                <strong>Development</strong> — Coding dengan standar terbaik
              </li>
              <li>
                <strong>Testing</strong> — QA menyeluruh sebelum launch
              </li>
              <li>
                <strong>Launch</strong> — Go live dan monitoring
              </li>
            </ol>

            <h2>Area Layanan</h2>
            <p>
              Kami melayani {service.shortTitle.toLowerCase()} untuk bisnis di
              seluruh wilayah Bandung dan sekitarnya termasuk:{" "}
              {ENTITIES.areas.join(", ")}. Konsultasi bisa dilakukan secara
              tatap muka di kantor kami atau secara online via WhatsApp dan video
              call.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              FAQ — {service.title}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Services */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Layanan Terkait</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/layanan/${related.slug}`}
                  className="p-5 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/30 transition-all"
                >
                  <h3 className="font-semibold mb-1 text-sm">
                    {related.title}
                  </h3>
                  <p className="text-xs text-muted line-clamp-2">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
