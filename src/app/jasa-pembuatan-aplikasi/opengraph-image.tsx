import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return createOgImage({
    title: "Jasa Pembuatan Aplikasi & Custom Software",
    eyebrow: "Layanan Aplikasi",
    subtitle:
      "Android, iOS, mobile app, sistem informasi & custom software — untuk bisnis di seluruh Indonesia.",
  });
}
