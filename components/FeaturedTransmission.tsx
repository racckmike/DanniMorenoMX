"use client";

import { useState } from "react";
import Image from "next/image";
import { videos, youtubeThumb } from "@/lib/data";
import { RecDot, SystemText } from "./SystemText";

export function FeaturedTransmission() {
  const [playing, setPlaying] = useState(false);
  const video = videos.pecar;

  return (
    <section className="relative w-full overflow-hidden bg-plum px-5 py-20 md:px-8 md:py-28">
      <div aria-hidden className="halftone pointer-events-none absolute inset-0 text-paper" />

      <div className="relative mx-auto max-w-4xl">
        <SystemText className="banner-label mb-5 inline-block text-[10px]">
          TRANSMISIÓN DESTACADA
        </SystemText>
        <h2 className="pop-title-light mb-8 font-display text-[18vw] leading-[0.82] text-paper sm:text-[12vw] md:mb-10 md:text-[6vw]">
          PECAR
        </h2>

        {/* A real television set: the video plays inside the screen. */}
        <div className="crt-frame">
          <div className="crt-screen aspect-video">
            {!playing ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 h-full w-full"
                aria-label={`Reproducir ${video.title}`}
              >
                <Image
                  src={youtubeThumb(video.youtubeId)}
                  alt={video.title}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="system-label sticker absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border-2 border-void bg-signal px-5 py-2.5 text-[11px] text-paper transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-1/2">
                  REPRODUCIR {"\u25B6"}
                </span>
              </button>
            ) : (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* bezel furniture */}
          <div className="absolute bottom-3 left-6 flex items-center gap-2">
            <RecDot />
            <SystemText className="text-[9px] text-void/70">CANAL 07</SystemText>
          </div>
          <div className="absolute bottom-3 right-6 flex items-center gap-2" aria-hidden>
            <span className="crt-knob" />
            <span className="crt-knob" />
          </div>
        </div>
      </div>
    </section>
  );
}
