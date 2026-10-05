import { ImageResponse } from "next/og";

export const alt =
  "Kolorstones Home Interiors | Interior Designers in Thanjavur & Trichy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 80,
        background: "#14120f",
        color: "#faf7f2",
      }}
    >
      <div
        style={{
          fontSize: 28,
          letterSpacing: 6,
          color: "#b08d57",
          textTransform: "uppercase",
        }}
      >
        Interior Designers
      </div>
      <div style={{ fontSize: 84, marginTop: 16, lineHeight: 1.05 }}>
        Kolorstones Home Interiors
      </div>
      <div style={{ fontSize: 34, marginTop: 24, color: "#cfc7b9" }}>
        Thanjavur · Trichy · Kumbakonam · Pattukkottai
      </div>
    </div>,
    size,
  );
}
