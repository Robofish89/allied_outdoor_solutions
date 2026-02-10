import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Allied Outdoor Solutions — AI Strategy Showcase";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#2C2C2C",
          padding: "60px",
        }}
      >
        {/* Top decorative bar */}
        <div
          style={{
            display: "flex",
            width: "120px",
            height: "4px",
            backgroundColor: "#B8860B",
            marginBottom: "40px",
          }}
        />

        {/* Main title */}
        <div
          style={{
            display: "flex",
            fontSize: "52px",
            fontFamily: "Georgia, serif",
            color: "#F5F0EB",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Allied Outdoor Solutions
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            fontFamily: "system-ui, sans-serif",
            color: "#B8860B",
            textAlign: "center",
            marginBottom: "48px",
            letterSpacing: "2px",
          }}
        >
          10 AI-Powered Solutions
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            width: "80px",
            height: "2px",
            backgroundColor: "#F5F0EB",
            opacity: 0.3,
            marginBottom: "32px",
          }}
        />

        {/* Author */}
        <div
          style={{
            display: "flex",
            fontSize: "18px",
            fontFamily: "system-ui, sans-serif",
            color: "#F5F0EB",
            opacity: 0.7,
            letterSpacing: "1px",
          }}
        >
          by Gerhard van den Heever
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
