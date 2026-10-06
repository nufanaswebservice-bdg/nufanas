import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_ARTICLES } from "@/lib/blog-data";

export async function GET() {
  const items = BLOG_ARTICLES.slice(0, 20);
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} - Blog</title>
    <link>${SITE_CONFIG.url}</link>
    <description>${SITE_CONFIG.description}</description>
    <language>id</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_CONFIG.url}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items
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
