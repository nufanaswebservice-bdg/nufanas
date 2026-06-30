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
      url: `${SITE_CONFIG.url}/images/logo-nufanas.png`,
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
    telephone: NAP.phone,
    email: NAP.email,
    sameAs: Object.values(NAP.socialMedia),
    openingHoursSpecification: NAP.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
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
      "@type": "City",
      name: "Bandung",
      containedInPlace: {
        "@type": "State",
        name: "Jawa Barat",
      },
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
              "Pembuatan website profesional untuk bisnis di Bandung dan Jawa Barat",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa SEO",
            description:
              "Optimasi mesin pencari untuk meningkatkan ranking website di Google",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description:
              "Strategi pemasaran digital termasuk Google Ads, Meta Ads, dan branding",
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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
      "@type": "City",
      name: "Bandung",
    },
    serviceType: "Web Development",
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
