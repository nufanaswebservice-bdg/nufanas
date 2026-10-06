import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

interface OgProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
}

export function createOgImage({ title, eyebrow, subtitle }: OgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b1220 0%, #1e1b4b 60%, #4c1d95 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            N
          </div>
          <span style={{ fontSize: 32, fontWeight: 700 }}>Nufanas</span>
          {eyebrow && (
            <span
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#a5b4fc",
                marginLeft: 12,
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid #6366f1",
              }}
            >
              {eyebrow}
            </span>
          )}
        </div>
        <div
          style={{
            fontSize: title.length > 60 ? 44 : 56,
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 24,
            display: "-webkit-box",
            overflow: "hidden",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 26, color: "#c7d2fe" }}>
          {subtitle ||
            "Jasa Pembuatan Website & Aplikasi Custom untuk bisnis di seluruh Indonesia."}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
