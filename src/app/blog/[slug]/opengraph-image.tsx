import {
  BLOG_ARTICLES,
  getArticleBySlug,
  BLOG_CLUSTERS,
  AUTHORS,
} from "@/lib/blog-data";
import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Blog Nufanas";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return BLOG_ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return createOgImage({ title: "Blog Nufanas" });
  }
  return createOgImage({
    title: article.title,
    eyebrow: BLOG_CLUSTERS[article.cluster].label,
    subtitle: `Oleh ${AUTHORS[article.author]?.name || "Tim Nufanas"} · ${article.readTime} baca`,
  });
}
