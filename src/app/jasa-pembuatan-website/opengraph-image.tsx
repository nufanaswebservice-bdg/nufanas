import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return createOgImage({
    title: "Jasa Pembuatan Website Profesional & Custom",
    eyebrow: "Layanan Website",
    subtitle:
      "Company profile, e-commerce, UMKM, landing page & web application — untuk bisnis di seluruh Indonesia.",
  });
}
