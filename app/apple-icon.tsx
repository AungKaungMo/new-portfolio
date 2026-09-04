import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#5b8ce8",
          borderRadius: 40,
          color: "#ffffff",
          display: "flex",
          fontSize: 118,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.08em",
          paddingRight: 8,
          width: "100%",
        }}
      >
        A
      </div>
    ),
    size,
  );
}
