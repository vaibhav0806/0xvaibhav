import { ImageResponse } from "next/og";

export const alt = "Vaibhav Pandey, Backend Engineer and Infrastructure Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#090a0a",
        color: "#ececea",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -280,
          right: -80,
          display: "flex",
          width: 760,
          height: 760,
          borderRadius: 999,
          background: "#29312d",
          opacity: 0.62,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 250,
          bottom: -470,
          display: "flex",
          width: 780,
          height: 780,
          borderRadius: 999,
          background: "#161b19",
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "72px 82px 68px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              padding: "9px 14px 8px",
              background: "#e7a536",
              color: "#111212",
              fontFamily: "monospace",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            0XVAIBHAV.COM
          </div>
          <div style={{ display: "flex", color: "#a5a8a3", fontSize: 22 }}>
            Vaibhav Pandey
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", fontSize: 70, fontWeight: 650, letterSpacing: -4 }}>
            Backend Engineer
          </div>
          <div
            style={{
              display: "flex",
              color: "#969994",
              fontFamily: "monospace",
              fontSize: 59,
              fontWeight: 500,
              letterSpacing: -4,
            }}
          >
            &amp; Infrastructure Builder.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#a5a8a3",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>Secure, scalable backend systems and AI infrastructure.</div>
          <div style={{ display: "flex", fontFamily: "monospace", fontSize: 19 }}>
            Go / Node.js / Python
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
