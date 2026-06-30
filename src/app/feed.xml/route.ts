import { SITE_CONFIG } from "@/lib/constants";

const articles = [
  {
    slug: "jasa-pembuatan-website-bandung-panduan-lengkap",
    title: "Jasa Pembuatan Website Bandung: Panduan Lengkap 2024",
    description:
      "Panduan lengkap memilih jasa pembuatan website terbaik di Bandung.",
    date: "2024-12-01",
  },
  {
    slug: "cara-meningkatkan-seo-website-bisnis-lokal",
    title: "Cara Meningkatkan SEO Website untuk Bisnis Lokal Bandung",
    description:
      "Strategi SEO lokal yang terbukti efektif untuk bisnis di Bandung.",
    date: "2024-11-15",
  },
  {
    slug: "website-company-profile-pentingnya-untuk-bisnis",
    title: "Website Company Profile: Mengapa Penting untuk Bisnis?",
    description:
      "Alasan mengapa setiap bisnis perlu memiliki website company profile.",
    date: "2024-11-01",
  },
];

export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} - Blog</title>
    <link>${SITE_CONFIG.url}</link>
    <description>${SITE_CONFIG.description}</description>
    <language>id</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_CONFIG.url}/feed.xml" rel="self" type="application/rss+xml"/>
    ${articles
      .map(
        (article) => `
    <item>
      <title>${article.title}</title>
      <link>${SITE_CONFIG.url}/blog/${article.slug}</link>
      <description>${article.description}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${SITE_CONFIG.url}/blog/${article.slug}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
