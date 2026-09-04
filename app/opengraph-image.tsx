import { ImageResponse } from "next/og";

export const alt = "Aung Kaung Moe — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d10",
          color: "#e8e8ea",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#5b8ce8",
            height: 8,
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />

        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          AKM<span style={{ color: "#5b8ce8" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#9db8f2",
              fontSize: 24,
              letterSpacing: "0.08em",
              marginBottom: 24,
              textTransform: "uppercase",
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Aung Kaung Moe
          </div>
          <div
            style={{
              color: "#c2c2c8",
              fontSize: 32,
              lineHeight: 1.35,
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            Building intuitive SaaS products, scalable web applications, and
            AI-powered workflows.
          </div>
        </div>

        <div style={{ color: "#9a9aa2", display: "flex", fontSize: 22 }}>
          TypeScript · React · Next.js · Node.js · Python
        </div>
      </div>
    ),
    size,
  );
}
