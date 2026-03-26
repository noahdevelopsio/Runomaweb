import { ImageResponse } from "next/og";

export const alt = "RUNOMA - AI Creative Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f1923",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* SVG Group Scaled Up & Centered */}
          <svg
            viewBox="0 0 360 250"
            width="540"
            height="375"
            style={{ display: "flex" }}
          >
            {/* Top Diamond */}
            <path fill="#7cb49a" d="M 180 45 L 210 75 L 180 105 L 150 75 Z" />
            {/* Bottom Left Diamond */}
            <path fill="#f0f4f8" d="M 148 77 L 178 107 L 148 137 L 118 107 Z" />
            {/* Bottom Right Diamond */}
            <path fill="#f0f4f8" d="M 212 77 L 242 107 L 212 137 L 182 107 Z" />
            
            {/* Text Elements */}
            <text
              x="180"
              y="190"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="32"
              fontWeight="600"
              fill="#f0f4f8"
              letterSpacing="8"
            >
              RUNOMA
            </text>
            <text
              x="180"
              y="235"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#7cb49a"
              letterSpacing="4"
            >
              AI CREATIVE STUDIO
            </text>
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
