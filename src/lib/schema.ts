import { SITE_CONFIG, NAP } from "./constants";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: NAP.name,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/images/nufanas-logo.png`,
      width: 512,
      height: 512,
    },
    image: SITE_CONFIG.ogImage,
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.city,
      addressRegion: NAP.address.region,
      postalCode: NAP.address.postalCode,
      addressCountry: NAP.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    telephone: NAP.phone,
    email: NAP.email,
    sameAs: Object.values(NAP.socialMedia),
    openingHoursSpecification: NAP.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: NAP.name,
    image: SITE_CONFIG.ogImage,
    url: SITE_CONFIG.url,
    telephone: NAP.phone,
    email: NAP.email,
    priceRange: "Rp 1.500.000 - Rp 50.000.000",
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.city,
      addressRegion: NAP.address.region,
      postalCode: NAP.address.postalCode,
      addressCountry: NAP.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    openingHoursSpecification: NAP.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Digital Agency",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa Pembuatan Website",
            description:
              "Jasa pembuatan website profesional dan custom untuk bisnis di seluruh Indonesia",
            url: `${SITE_CONFIG.url}/jasa-pembuatan-website`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa Pembuatan Aplikasi",
            description:
              "Jasa pembuatan aplikasi Android, iOS, mobile, dan web application custom",
            url: `${SITE_CONFIG.url}/jasa-pembuatan-aplikasi`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "Pengembangan software custom: sistem informasi, ERP, CRM, dan platform SaaS",
            url: `${SITE_CONFIG.url}/jasa-custom-software`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa SEO",
            description:
              "Optimasi mesin pencari untuk meningkatkan ranking website di Google Indonesia",
            url: `${SITE_CONFIG.url}/layanan/jasa-seo`,
          },
        },
      ],
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: "id-ID",
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  };
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
  price?: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_CONFIG.url}/layanan/${service.slug}/#service`,
    name: service.title,
    description: service.description,
    url: `${SITE_CONFIG.url}/layanan/${service.slug}`,
    provider: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    serviceType: service.serviceType || "Web Development",
  };
}

export function generatePillarServiceSchema(service: {
  title: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_CONFIG.url}${service.path}/#service`,
    name: service.title,
    description: service.description,
    url: `${SITE_CONFIG.url}${service.path}`,
    provider: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    serviceType: service.serviceType,
  };
}

export function generateCaseStudySchema(project: {
  title: string;
  description: string;
  slug: string;
  image: string;
  imageAlt: string;
  video?: {
    src: string;
    poster: string;
    title: string;
    description: string;
    duration?: string;
    uploadDate?: string;
  };
}) {
  const pageUrl = `${SITE_CONFIG.url}/portfolio/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: `${project.title} — Portfolio Nufanas`,
    description: project.description,
    isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
    about: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: pageUrl,
      creator: { "@id": `${SITE_CONFIG.url}/#organization` },
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}${project.image}`,
      caption: project.imageAlt,
    },
    ...(project.video && {
      video: {
        "@type": "VideoObject",
        name: project.video.title,
        description: project.video.description,
        thumbnailUrl: `${SITE_CONFIG.url}${project.video.poster}`,
        contentUrl: `${SITE_CONFIG.url}${project.video.src}`,
        uploadDate: project.video.uploadDate,
        duration: project.video.duration,
      },
    }),
    inLanguage: "id-ID",
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_CONFIG.url}/blog/${article.slug}/#article`,
    headline: article.title,
    description: article.description,
    url: `${SITE_CONFIG.url}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.author,
      url: `${SITE_CONFIG.url}/tentang`,
    },
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    image: article.image || SITE_CONFIG.ogImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${article.slug}`,
    },
    inLanguage: "id-ID",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article .summary", "article .key-takeaways"],
    },
  };
}
