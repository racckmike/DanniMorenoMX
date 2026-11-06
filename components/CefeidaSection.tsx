"use client";

import { useState } from "react";
import Image from "next/image";
import { cefeida } from "@/lib/data";
import { SystemText, RecDot } from "./SystemText";

export function CefeidaSection() {
  const [active, setActive] = useState(0);
  const track = cefeida.tracks[active];

  return (
    <section
      id="cefeida"
      className="relative overflow-hidden bg-paper px-5 py-24 md:px-8 md:py-36"
    >
      <div aria-hidden className="halftone pointer-events-none absolute inset-0 text-signal" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 md:mb-16">
          <div>
            <SystemText className="banner-label inline-block text-[10px]">{cefeida.type} — {cefeida.year}</SystemText>
            <h2 className="pop-title mt-2 font-display text-[16vw] leading-[0.85] text-void sm:text-[10vw] md:text-[7vw]">
              CEFEIDA
            </h2>
          </div>
          <a
            href={cefeida.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="system-label sticker rounded-full border-2 border-void bg-cyan px-5 py-2.5 text-xs text-void transition-transform hover:-translate-y-0.5"
          >
            ESCUCHAR EN SPOTIFY ↗
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="order-2 md:order-1 md:col-span-7">
            <ol className="sticker divide-y-2 divide-dotted divide-void/30 border-2 border-void bg-paper">
              {cefeida.tracks.map((t, i) => (
                <li key={t.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-center gap-4 py-4 text-left transition-colors md:py-5 ${
                      active === i ? "text-signal" : "text-void hover:text-void/60"
                    }`}
                  >
                    <span className="system-label w-8 shrink-0 text-xs text-void/40">
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
                    <span className="system-label shrink-0 text-xs text-void/40">
                      {t.duration}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <p className="system-label mt-4 text-[11px] text-void/40">
              {cefeida.totalDuration} TOTAL — {cefeida.credit}
            </p>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <div className="sticky top-24">
              <a
                href={track.spotifyTrackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square w-full"
              >
                {/* the record slipping out of its sleeve */}
                <span
                  aria-hidden
                  className="vinyl spin-slow absolute right-[-14%] top-1/2 h-[82%] w-[82%] -translate-y-1/2"
                />
                <span className="sticker relative block h-full w-full overflow-hidden border-2 border-void">
                <Image
                  key={track.title}
                  src={track.cover}
                  alt={`${track.title} — Danni Moreno`}
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-void/75 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <SystemText className="text-[10px] text-paper">
                    PISTA {String(track.index).padStart(2, "0")} / 07
                  </SystemText>
                  <SystemText className="text-[10px] text-paper">{track.duration}</SystemText>
                </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
