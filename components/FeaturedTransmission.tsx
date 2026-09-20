"use client";

import { useState } from "react";
import Image from "next/image";
import { videos, youtubeThumb } from "@/lib/data";
import { RecDot, SystemText } from "./SystemText";

export function FeaturedTransmission() {
  const [playing, setPlaying] = useState(false);
  const video = videos.pecar;

  return (
    <section className="relative flex min-h-[80svh] w-full items-center justify-center overflow-hidden bg-wine">
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          data-cursor="PLAY"
          className="group absolute inset-0 h-full w-full"
          aria-label={`Reproducir ${video.title}`}
        >
          <Image
            src={youtubeThumb(video.youtubeId)}
            alt={video.title}
            fill
            sizes="100vw"
            className="object-cover opacity-70 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-wine/40 to-void/60" />

          <div className="relative z-10 flex h-full flex-col items-start justify-end px-5 pb-20 md:px-12 md:pb-28">
            <RecDot className="mb-4" />
            <SystemText className="mb-2 text-paper/70">
              FEATURED TRANSMISSION
            </SystemText>
            <h2 className="font-display text-[20vw] leading-[0.82] text-paper sm:text-[13vw] md:text-[10vw]">
              PECAR
            </h2>
            <span className="system-label mt-6 flex items-center gap-3 rounded-full border border-paper/60 px-6 py-3 text-xs text-paper">
              PLAY {"▶"}
            </span>
          </div>
        </button>
      ) : (
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
}
