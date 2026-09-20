"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { artist } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { RecDot, SystemText } from "./SystemText";

export function HeroTransmission() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
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
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-cosmic-deep"
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(${scale}) translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <Image
          src="/photos/hero-cdmx.jpg"
          alt="Danni Moreno, Ciudad de México"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_25%] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-magenta/15 via-transparent to-cobalt/20" />
      </div>

      {glitchTop !== null && (
        <div
          aria-hidden
          className="absolute inset-x-0 z-20 h-4 bg-paper/80"
          style={{ top: `${glitchTop}%` }}
        />
      )}

      {/* one compact system readout — supporting texture, not the subject */}
      <div
        className="system-label pointer-events-none absolute left-5 top-20 flex items-center gap-2 text-[11px] text-paper/85 md:left-8 md:top-24 md:text-xs"
        style={{ opacity: fade }}
      >
        <RecDot label="GRABANDO" />
        <SystemText>CEFEIDA</SystemText>
      </div>
      <div
        className="system-label pointer-events-none absolute right-5 top-20 text-right text-[11px] text-paper/85 md:right-8 md:top-24 md:text-xs"
        style={{ opacity: fade }}
      >
        <SystemText>{artist.city.toUpperCase()}</SystemText>
      </div>

      {/* huge wordmark */}
      <div
        className="relative z-10 w-full px-4 pb-28 md:px-8 md:pb-32"
        style={{ opacity: fade }}
      >
        <h1
          data-text="DANNI MORENO"
          className="text-aberrate font-display leading-[0.8] text-paper"
        >
          <span className="block text-[19vw] md:text-[15vw] lg:text-[13vw]">
            DANNI
          </span>
          <span className="block text-[19vw] text-signal md:text-[15vw] lg:text-[13vw]">
            MORENO
          </span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          <a
            href="#cefeida"
            className="system-label rounded-full bg-magenta px-6 py-3 text-xs text-paper transition-transform hover:scale-105"
          >
            ESCUCHAR
          </a>
          <a
            href="#archive"
            className="system-label rounded-full border border-paper/50 px-6 py-3 text-xs text-paper transition-colors hover:border-paper"
          >
            VER TRANSMISIÓN
          </a>
        </div>
      </div>
    </section>
  );
}
