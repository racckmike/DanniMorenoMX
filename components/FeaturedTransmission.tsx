"use client";

import { useState } from "react";
import Image from "next/image";
import { videos, youtubeThumb } from "@/lib/data";
import { RecDot, SystemText } from "./SystemText";

export function FeaturedTransmission() {
  const [playing, setPlaying] = useState(false);
  const video = videos.pecar;

  return (
    <section className="relative flex min-h-[72svh] w-full items-center justify-center overflow-hidden bg-magenta">
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
            sizes="100vw"
            className="object-cover opacity-90 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-magenta/30 to-void/40" />

          <div className="relative z-10 flex h-full flex-col items-start justify-end px-5 pb-16 md:px-12 md:pb-24">
            <RecDot className="mb-4" />
            <SystemText className="mb-2 text-paper/80">
              TRANSMISIÓN DESTACADA
            </SystemText>
            <h2 className="font-display text-[20vw] leading-[0.82] text-paper sm:text-[13vw] md:text-[10vw]">
              PECAR
            </h2>
            <span className="system-label mt-6 flex items-center gap-3 rounded-full border border-paper/70 px-6 py-3 text-xs text-paper">
              REPRODUCIR {"▶"}
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
