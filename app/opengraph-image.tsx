import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { artist } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#242033";
const CREAM = "#fff0db";
const PINK = "#f43f91";
const BUBBLEGUM = "#ff9bcb";
const BLUE = "#3188c9";
const TURQUOISE = "#79c9ce";

export default async function OpengraphImage() {
  const [photo, anton] = await Promise.all([
    readFile(join(process.cwd(), "assets/og-photo.jpg")),
    readFile(join(process.cwd(), "assets/Anton-Regular.ttf")),
  ]);
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
          background: CREAM,
        }}
      >
        {/* printed halftone field */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage: `radial-gradient(${INK} 1.4px, transparent 1.6px)`,
            backgroundSize: "12px 12px",
            opacity: 0.2,
          }}
        />

        {/* diagonal speed lines, top left */}
        <div
          style={{
            position: "absolute",
            top: -40,
            left: -60,
            width: 420,
            height: 220,
            display: "flex",
            transform: "rotate(-20deg)",
            backgroundImage: `repeating-linear-gradient(90deg, ${PINK} 0 10px, transparent 10px 26px)`,
            opacity: 0.85,
          }}
        />

        {/* turquoise triangle behind the photo */}
        <div
          style={{
            position: "absolute",
            right: 300,
            top: 118,
            width: 0,
            height: 0,
            display: "flex",
            borderLeft: "150px solid transparent",
            borderRight: "150px solid transparent",
            borderBottom: `240px solid ${TURQUOISE}`,
          }}
        />

        {/* the photo, in a cream print border with a hard pink shadow */}
        <div
          style={{
            position: "absolute",
            right: 56,
            top: 64,
            width: 360,
            height: 502,
            display: "flex",
            background: CREAM,
            padding: 12,
            boxShadow: `14px 14px 0 ${PINK}`,
            border: `4px solid ${INK}`,
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={336}
            height={478}
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
        </div>

        {/* type block */}
        <div
          style={{
            position: "absolute",
            left: 64,
            top: 112,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              background: PINK,
              color: CREAM,
              fontSize: 21,
              letterSpacing: 4,
              padding: "10px 18px",
              marginBottom: 48,
              border: `3px solid ${INK}`,
              boxShadow: `6px 6px 0 ${INK}`,
              transform: "rotate(-1.5deg)",
            }}
          >
            {roles}
          </div>

          {/* layered pop title: blue and bubblegum offsets under the cream */}
          <div style={{ display: "flex", position: "relative", height: 272, width: 640 }}>
            {[
              { x: 14, y: 14, color: BLUE },
              { x: 7, y: 7, color: BUBBLEGUM },
              { x: 0, y: 0, color: INK },
            ].map((layer) => (
              <div
                key={layer.color}
                style={{
                  position: "absolute",
                  left: layer.x,
                  top: layer.y,
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Anton",
                  fontSize: 122,
                  lineHeight: 0.86,
                  color: layer.color,
                  letterSpacing: 1,
                }}
              >
                <div style={{ display: "flex" }}>DANNI</div>
                <div style={{ display: "flex" }}>MORENO</div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 18,
              color: INK,
              fontSize: 22,
              letterSpacing: 6,
            }}
          >
            {artist.city.toUpperCase()}
          </div>
        </div>

        {/* checkerboard corner */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 14,
            width: 300,
            height: 44,
            display: "flex",
            backgroundImage: `linear-gradient(45deg, ${INK} 25%, transparent 25%, transparent 75%, ${INK} 75%), linear-gradient(45deg, ${INK} 25%, transparent 25%, transparent 75%, ${INK} 75%)`,
            backgroundSize: "22px 22px",
            backgroundPosition: "0 0, 11px 11px",
            opacity: 0.3,
          }}
        />

        {/* broadcast colour bars, top and bottom */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 16, display: "flex" }}>
          {[PINK, BUBBLEGUM, TURQUOISE, BLUE].map((c) => (
            <div key={c} style={{ flex: 1, background: c, display: "flex" }} />
          ))}
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 16, display: "flex" }}>
          {[BLUE, TURQUOISE, BUBBLEGUM, PINK].map((c) => (
            <div key={c} style={{ flex: 1, background: c, display: "flex" }} />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: anton, weight: 400, style: "normal" }],
    },
  );
}
