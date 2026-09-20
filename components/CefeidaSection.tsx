"use client";

import { useState } from "react";
import Image from "next/image";
import { cefeida } from "@/lib/data";
import { SystemText, RecDot } from "./SystemText";

const ACCENT_BG: Record<string, string> = {
  signal: "bg-signal/25",
  magenta: "bg-magenta/25",
  cobalt: "bg-cobalt/30",
  violet: "bg-violet/35",
};

const ACCENT_TEXT: Record<string, string> = {
  signal: "text-signal",
  magenta: "text-magenta",
  cobalt: "text-cobalt",
  violet: "text-[#b98bff]",
};

export function CefeidaSection() {
  const [active, setActive] = useState(0);
  const track = cefeida.tracks[active];

  return (
    <section
      id="cefeida"
      className="relative overflow-hidden bg-cosmic-deep px-5 py-24 md:px-8 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 0%, var(--color-magenta) 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, var(--color-cobalt) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 md:mb-16">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/graphics/sparkle.png" alt="" aria-hidden width={16} height={16} className="opacity-90" />
              <SystemText className="text-signal">{cefeida.type} — {cefeida.year}</SystemText>
              <Image src="/graphics/sparkle.png" alt="" aria-hidden width={16} height={16} className="opacity-90" />
            </div>
            <h2 className="mt-2 font-display text-[16vw] leading-[0.85] text-paper sm:text-[10vw] md:text-[7vw]">
              CEFEIDA
            </h2>
          </div>
          <a
            href={cefeida.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="system-label rounded-full border border-paper/40 px-5 py-2.5 text-xs text-paper transition-colors hover:border-paper"
          >
            ESCUCHAR EN SPOTIFY ↗
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="order-2 md:order-1 md:col-span-7">
            <ol className="divide-y divide-paper/10 border-y border-paper/10">
              {cefeida.tracks.map((t, i) => (
                <li key={t.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-center gap-4 py-4 text-left transition-colors md:py-5 ${
                      active === i ? ACCENT_TEXT[t.accent] : "text-paper hover:text-paper/70"
                    }`}
                  >
                    <span className="system-label w-8 shrink-0 text-xs text-paper/40">
                      {String(t.index).padStart(2, "0")}
                    </span>
                    <span className="font-display flex-1 text-2xl leading-none sm:text-3xl md:text-4xl">
                      {t.title}
                    </span>
                    {active === i && (
                      <span aria-hidden className="hidden sm:inline">
                        <RecDot />
                      </span>
                    )}
                    <span className="system-label shrink-0 text-xs text-paper/40">
                      {t.duration}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <p className="system-label mt-4 text-[11px] text-paper/40">
              {cefeida.totalDuration} TOTAL — {cefeida.credit}
            </p>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <div className="sticky top-24">
              <a
                href={track.spotifyTrackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square w-full overflow-hidden"
              >
                <Image
                  key={track.title}
                  src={track.cover}
                  alt={`${track.title} — Danni Moreno`}
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className={`absolute inset-0 mix-blend-color ${ACCENT_BG[track.accent]}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <SystemText className="text-paper">
                    PISTA {String(track.index).padStart(2, "0")} / 07
                  </SystemText>
                  <SystemText className="text-paper">{track.duration}</SystemText>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
