import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/photos/hero-cdmx.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0b0b14",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(11,11,20,0.92) 10%, rgba(11,11,20,0.15) 55%, rgba(33,56,224,0.35) 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 56,
            bottom: 48,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#ff2f96",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            CEFEIDA · CANTAUTORA · PRODUCTORA
          </div>
          <div
            style={{
              display: "flex",
              color: "#f7efe0",
              fontSize: 112,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 0.95,
            }}
          >
            DANNI MORENO
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
