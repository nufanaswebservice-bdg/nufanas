import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";
import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Portfolio Nufanas";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((p) => ({ id: p.id }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PORTFOLIO_ITEMS.find((p) => p.id === id);
  if (!project) {
    return createOgImage({ title: "Portfolio Nufanas" });
  }
  return createOgImage({
    title: project.title,
    eyebrow: project.categories[0],
    subtitle: `${project.tagline} — Case study oleh Nufanas`,
  });
}
