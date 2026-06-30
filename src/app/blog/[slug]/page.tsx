import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_ARTICLES } from "@/lib/blog-data";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from "@/lib/schema";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

function getArticle(slug: string) {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

function generateContent(article: NonNullable<ReturnType<typeof getArticle>>) {
  const keyword = article.tags[0] || article.title.toLowerCase();
  return {
    intro: `${article.title} adalah topik yang sering dicari oleh pebisnis dan profesional di Indonesia. Dalam artikel ini, kami membahas secara mendalam tentang ${keyword} — mulai dari pengertian dasar, manfaat, cara implementasi, hingga tips praktis yang bisa langsung Anda terapkan. Artikel ini dirancang untuk membantu Anda memahami konsep ${keyword} secara menyeluruh dan membuat keputusan yang tepat untuk bisnis Anda.`,
    sections: [
      {
        title: `Apa Itu ${article.tags[0] ? article.tags[0].charAt(0).toUpperCase() + article.tags[0].slice(1) : article.category}?`,
        content: `${article.description} Pemahaman yang benar tentang ${keyword} akan membantu Anda mengambil langkah strategis yang tepat. Di era digital saat ini, setiap bisnis — baik skala kecil maupun besar — perlu memahami pentingnya ${keyword} untuk bertahan dan berkembang di pasar yang semakin kompetitif.`,
      },
      {
        title: `Mengapa ${article.category} Penting untuk Bisnis?`,
        content: `Investasi dalam ${keyword} bukan lagi pilihan, melainkan keharusan. Bisnis yang mengadopsi ${keyword} secara konsisten menunjukkan pertumbuhan revenue 2-3x lipat dibanding kompetitor. Beberapa alasan utama pentingnya ${keyword}: meningkatkan visibilitas online, membangun kepercayaan pelanggan, otomasi proses bisnis, dan menghasilkan leads secara konsisten.`,
      },
      {
        title: "Langkah-Langkah Implementasi",
        content: `Untuk mengimplementasikan ${keyword} secara efektif, ikuti langkah-langkah berikut: 1) Analisis kebutuhan bisnis Anda, 2) Riset kompetitor dan market, 3) Tentukan budget dan timeline, 4) Pilih partner atau vendor yang tepat, 5) Eksekusi dengan monitoring berkala, 6) Evaluasi dan optimasi berkelanjutan. Setiap langkah memerlukan perhatian khusus untuk memastikan hasil yang optimal.`,
      },
      {
        title: "Tips dan Best Practice",
        content: `Berdasarkan pengalaman kami menangani 300+ project, berikut tips yang bisa Anda terapkan: Fokus pada kualitas, bukan kuantitas. Pastikan user experience menjadi prioritas utama. Lakukan testing secara menyeluruh sebelum launch. Pantau performa secara berkala menggunakan analytics. Iterasi dan improve berdasarkan data, bukan asumsi.`,
      },
      {
        title: "Estimasi Biaya dan Timeline",
        content: `Biaya untuk ${keyword} bervariasi tergantung kompleksitas dan scope. Untuk skala kecil, budget mulai dari Rp 800.000 - Rp 5.000.000. Skala menengah Rp 5.000.000 - Rp 25.000.000. Enterprise Rp 25.000.000+. Timeline rata-rata 2-12 minggu tergantung project. Nufanas menyediakan konsultasi gratis untuk estimasi yang lebih akurat.`,
      },
    ],
    faqs: [
      { question: `Berapa biaya ${keyword}?`, answer: `Biaya ${keyword} di Nufanas mulai dari Rp 800.000 untuk paket dasar hingga puluhan juta untuk project enterprise. Hubungi kami untuk konsultasi gratis dan estimasi akurat sesuai kebutuhan Anda.` },
      { question: `Berapa lama proses ${keyword}?`, answer: `Proses ${keyword} rata-rata memakan waktu 2-12 minggu tergantung kompleksitas. Kami memberikan timeline yang jelas di awal project dan update progress secara berkala.` },
      { question: `Apakah Nufanas melayani di luar Bandung?`, answer: `Ya! Meskipun kantor kami di Bandung, kami melayani client dari seluruh Indonesia. Komunikasi bisa dilakukan secara online via WhatsApp, Zoom, atau Google Meet.` },
      { question: `Apa garansi yang diberikan?`, answer: `Semua project Nufanas memiliki garansi maintenance minimal 30 hari. Paket Professional dan Enterprise mendapatkan garansi hingga 12 bulan. Kami juga menyediakan paket maintenance bulanan.` },
    ],
    keyTakeaways: [
      `${article.tags[0] ? article.tags[0].charAt(0).toUpperCase() + article.tags[0].slice(1) : article.category} adalah investasi penting untuk pertumbuhan bisnis digital`,
      "Pilih partner yang berpengalaman dan memiliki portofolio yang relevan",
      "Fokus pada kualitas dan user experience, bukan hanya harga murah",
      "Lakukan riset dan perencanaan matang sebelum memulai project",
      "Monitoring dan optimasi berkelanjutan adalah kunci kesuksesan jangka panjang",
    ],
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const content = generateContent(article);
  const relatedArticles = BLOG_ARTICLES.filter(
    (a) => a.slug !== slug && a.category === article.category
  ).slice(0, 4);

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Beranda", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: article.title, href: `/blog/${slug}` },
      ])} />
      <JsonLd data={generateArticleSchema({
        title: article.title,
        description: article.description,
        slug: article.slug,
        datePublished: article.date,
        dateModified: article.date,
        author: article.author,
      })} />
      <JsonLd data={generateFAQSchema(content.faqs)} />

      <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary mb-6">
            <ArrowLeft size={16} /> Kembali ke Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
              {article.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-slate-600 mb-4">{article.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><User size={14} />{article.author}</span>
              <span className="flex items-center gap-1"><Calendar size={14} />{new Date(article.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{article.readTime}</span>
            </div>
          </header>

          {/* Key Takeaways */}
          <section className="mb-10 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="text-lg font-bold text-slate-900 mb-3">📋 Key Takeaways</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {content.keyTakeaways.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
          </section>

          {/* Content */}
          <div className="prose prose-slate max-w-none mb-10">
            <p className="lead">{content.intro}</p>
            {content.sections.map((section, i) => (
              <div key={i}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ</h2>
            <div className="space-y-4">
              {content.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-white border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-10 p-8 rounded-2xl gradient-primary text-white text-center">
            <h2 className="text-xl font-bold mb-2">Butuh Bantuan Profesional?</h2>
            <p className="text-white/80 mb-4 text-sm">Konsultasi gratis dengan tim Nufanas untuk project Anda.</p>
            <Link href="/kontak" className="inline-flex items-center h-10 px-6 rounded-lg bg-white text-primary font-medium text-sm">
              Konsultasi Gratis
            </Link>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {article.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                <Tag size={10} />{tag}
              </span>
            ))}
          </div>

          {/* Related */}
          {relatedArticles.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Artikel Terkait</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedArticles.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} className="p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition-all">
                    <h3 className="font-semibold text-sm text-slate-900 mb-1 line-clamp-2">{related.title}</h3>
                    <p className="text-xs text-slate-500">{related.category} · {related.readTime}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
