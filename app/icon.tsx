import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2138e0",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#f7efe0",
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: -1,
          }}
        >
          DM
        </div>
      </div>
    ),
    { ...size },
  );
}
