import { ImageResponse } from "next/og";

export const alt = "0xvaibhav.com, Backend Engineer and Infrastructure Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "68px 78px",
        background: "#0a0b0b",
        color: "#f0f0ed",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          border: "1px solid #242624",
          padding: "42px 46px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 10, height: 10, background: "#e7a536" }} />
          <div
            style={{
              display: "flex",
              color: "#b6b8b4",
              fontFamily: "monospace",
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: 1.5,
            }}
          >
            0xvaibhav.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 650, letterSpacing: -4 }}>
            Backend Engineer
          </div>
          <div
            style={{
              display: "flex",
              color: "#b6b8b4",
              fontFamily: "monospace",
              fontSize: 46,
              letterSpacing: -1.5,
            }}
          >
            &amp; Infrastructure Builder.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#868983",
            fontFamily: "monospace",
            fontSize: 19,
          }}
        >
          AI infrastructure / distributed systems / developer tooling
        </div>
      </div>
    </div>,
    size,
  );
}
