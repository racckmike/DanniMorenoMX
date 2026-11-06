"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { artist } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { RecDot } from "./SystemText";

export function HeroTransmission() {
  const reduced = usePrefersReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [glitchTop, setGlitchTop] = useState<number | null>(null);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setOffset({ x: (e.clientX / w - 0.5) * 10, y: (e.clientY / h - 0.5) * 10 });
    };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setGlitchTop(30 + Math.random() * 40);
      window.setTimeout(() => setGlitchTop(null), 140);
    }, 9000);
    return () => window.clearInterval(id);
  }, [reduced]);

  const scale = 1 + Math.min(scrollY, 600) / 6000;
  const fade = Math.max(0, 1 - scrollY / 500);

  return (
    <section
      id="top"
      className="scanlines relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-magenta"
    >
      {/*
        The parallax transform lives on the <img> itself, not on a wrapping
        div. Next/Image's `fill` mode makes the img position:absolute;inset:0
        against the nearest positioned ancestor — putting the transform on
        that ancestor instead (as a previous version did) caused the image
        to fail to composite in production. Transforming the img directly
        avoids touching its own containing-block chain entirely.
      */}
      <div className="absolute inset-0">
        <Image
          src="/photos/hero-studio.jpg"
          alt="Danni Moreno"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[56%_20%] saturate-[1.1]"
          style={
            reduced
              ? undefined
              : {
                  transform: `scale(${scale}) translate(${offset.x}px, ${offset.y}px)`,
                  transition: "transform 0.2s ease-out",
                }
          }
        />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-paper via-paper/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-magenta/25 via-transparent to-cobalt/25" />
      </div>

      {/* perspective grid, behind the name */}
      {/* printed decoration: halftone wash and a checkerboard corner */}
      <div aria-hidden className="halftone pointer-events-none absolute inset-0 z-[4] text-void" />
      <div aria-hidden className="checker pointer-events-none absolute bottom-0 right-0 z-[4] h-16 w-28 text-void/15" />

      {glitchTop !== null && (
        <div
          aria-hidden
          className="absolute inset-x-0 z-20 h-4 bg-paper/90"
          style={{ top: `${glitchTop}%` }}
        />
      )}

      {/* atmospheric texture — small, muted, clearly secondary to the name below */}
      <div
        className="system-label pointer-events-none absolute left-5 top-20 flex items-center gap-2 text-[10px] text-void md:left-8 md:top-24"
        style={{ opacity: fade }}
      >
        <RecDot label="GRABANDO SU PRÓXIMO LANZAMIENTO" />
        <span>— {artist.city.toUpperCase()}</span>
      </div>

      {/* artist identity — the actual subject of the hero */}
      <div
        className="relative z-10 w-full px-4 pb-28 md:px-8 md:pb-32"
        style={{ opacity: fade }}
      >
        <h1
          data-text="DANNI MORENO"
          className="text-aberrate font-display leading-[0.8] text-void"
        >
          <span className="block text-[19vw] md:text-[15vw] lg:text-[13vw]">
            DANNI
          </span>
          <span className="pop-title block text-[19vw] text-signal md:text-[15vw] lg:text-[13vw]">
            MORENO
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-balance font-info text-lg font-medium text-void md:mt-5 md:text-2xl">
          {artist.roles.join(" · ")} de {artist.city}.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          <a
            href="#cefeida"
            className="system-label inline-flex items-center gap-2 rounded-full border-2 border-void bg-signal px-6 py-3 text-xs text-paper transition-transform hover:-translate-y-0.5 sticker"
          >
            ESCUCHAR
          </a>
          <a
            href="#presentaciones"
            className="system-label inline-flex items-center gap-2 rounded-full border-2 border-void bg-cyan px-6 py-3 text-xs text-void transition-transform hover:-translate-y-0.5 sticker"
          >
            VER SHOW EN VIVO
          </a>
        </div>
      </div>
    </section>
  );
}
