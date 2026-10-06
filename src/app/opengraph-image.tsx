import { ImageResponse } from "next/og";

export const alt = "Nufanas — Jasa Pembuatan Website & Aplikasi Custom";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "linear-gradient(135deg, #0b1220 0%, #1e1b4b 60%, #4c1d95 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
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
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Jasa Pembuatan Website &amp; Aplikasi Custom
        </div>
        <div style={{ fontSize: 28, color: "#c7d2fe" }}>
          Untuk bisnis di seluruh Indonesia — cepat, aman, SEO-friendly.
        </div>
      </div>
    ),
    size
  );
}
