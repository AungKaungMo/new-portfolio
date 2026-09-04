import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#5b8ce8",
          borderRadius: 14,
          color: "#ffffff",
          display: "flex",
          fontSize: 42,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.08em",
          paddingRight: 3,
          width: "100%",
        }}
      >
        A
      </div>
    ),
    size,
  );
}
