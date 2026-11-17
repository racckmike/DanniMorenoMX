import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { artist } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/photos/hero-studio.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  // Roles come from the data layer so this card can't drift from the site.
  const roles = artist.roles.join(" · ").toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#242033",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, objectFit: "cover", objectPosition: "56% 15%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(36,32,51,0.94) 12%, rgba(36,32,51,0.18) 58%, rgba(244,63,145,0.28) 100%)",
            display: "flex",
          }}
        />

        {/* broadcast colour bar, same as the site header */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 14, display: "flex" }}>
          <div style={{ flex: 1, background: "#f43f91" }} />
          <div style={{ flex: 1, background: "#ff9bcb" }} />
          <div style={{ flex: 1, background: "#79c9ce" }} />
          <div style={{ flex: 1, background: "#3188c9" }} />
        </div>

        <div
          style={{
            position: "absolute",
            left: 56,
            bottom: 52,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#f43f91",
              color: "#fff0db",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 5,
              padding: "10px 20px",
              marginBottom: 18,
            }}
          >
            {roles}
          </div>
          <div
            style={{
              display: "flex",
              color: "#fff0db",
              fontSize: 118,
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
