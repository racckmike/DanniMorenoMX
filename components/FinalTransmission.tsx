"use client";

import { useEffect, useRef, useState } from "react";
import { artist } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { SystemText } from "./SystemText";

const LINKS = [
  { label: "INSTAGRAM", href: artist.instagram },
  { label: "SPOTIFY", href: artist.spotify },
  { label: "APPLE MUSIC", href: artist.appleMusic },
  { label: "YOUTUBE", href: artist.youtube },
  { label: "TIKTOK", href: artist.tiktok },
];

export function FinalTransmission() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <section
      id="transmission"
      ref={ref}
      className="relative flex min-h-[90svh] flex-col items-center justify-center gap-12 overflow-hidden bg-void px-5 py-24 text-center md:px-8"
    >
      <div
        aria-hidden
        className="h-px bg-paper transition-all duration-700 ease-out"
        style={{ width: revealed ? "100%" : "0%", maxWidth: "560px" }}
      />

      <div
        className="transition-opacity duration-700"
        style={{ opacity: revealed ? 1 : 0, transitionDelay: revealed ? "300ms" : "0ms" }}
      >
        <h2 className="font-display text-[20vw] leading-[0.82] text-paper sm:text-[13vw] md:text-[9vw]">
          DANNI
          <br />
          MORENO
        </h2>

        <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:mt-16">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="system-label text-xs text-paper/70 transition-colors hover:text-signal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="mt-16 flex flex-col items-center gap-2">
          <SystemText className="text-paper/40">TRANSMISSION ENDED</SystemText>
          <SystemText className="text-paper/40">STOP {"■"}</SystemText>
        </div>
      </div>
    </section>
  );
}
