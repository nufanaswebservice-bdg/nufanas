/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nufanas.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    "/admin/*",
    "/api/*",
    "/apple-icon.png",
    "/icon.png",
    "/opengraph-image",
    "/twitter-image",
    "*/opengraph-image",
    "*/twitter-image",
    "/feed.xml",
    "/sitemap-articles.xml",
    "/manifest.json",
    "/terima-kasih",
    // Blog articles are covered by sitemap-articles.xml (avoid duplication)
    "/blog/*",
  ],
  robotsTxtOptions: {
    additionalSitemaps: ["https://nufanas.com/sitemap-articles.xml"],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
    ],
  },
};
