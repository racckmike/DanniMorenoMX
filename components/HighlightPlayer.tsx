"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { liveHighlights, type Highlight } from "@/lib/data";

const PHOTO_MS = 5000;

function Bubble({
  highlight,
  onOpen,
}: {
  highlight: Highlight;
  onOpen: () => void;
}) {
  const previewRef = useRef<HTMLVideoElement>(null);

  // Pause the clip while it's off screen.
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Safari refuses even muted autoplay when the visitor has auto-play off for
  // the site (or is in Low Power Mode), and the overlay button covers the
  // native play control. The first gesture anywhere counts as user intent.
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const kick = () => {
      if (el.paused) void el.play().catch(() => {});
    };
    window.addEventListener("pointerdown", kick, { once: true });
    window.addEventListener("scroll", kick, { once: true, passive: true });
    return () => {
      window.removeEventListener("pointerdown", kick);
      window.removeEventListener("scroll", kick);
    };
  }, []);

  return (
    // The media is a sibling of the button, never a child: Safari does not
    // paint video nested inside a <button>.
    <div className="group relative w-[150px] shrink-0 sm:w-[200px]">
      <div className="neon-ring relative aspect-[9/16] overflow-hidden rounded-sm bg-void">
        {highlight.preview ? (
          <video
            ref={previewRef}
            src={highlight.preview}
            poster={highlight.cover}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={highlight.cover}
            alt=""
            fill
            sizes="200px"
            className="object-cover"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-void via-void/70 to-transparent px-2.5 pb-2.5 pt-8">
          <span className="system-label text-[9px] text-paper sm:text-[10px]">
            {highlight.title}
          </span>
          <span className="system-label flex items-center gap-1 rounded-full bg-magenta px-2.5 py-1.5 text-[9px] text-paper transition-transform group-hover:scale-105 sm:text-[10px]">
            <svg viewBox="0 0 24 24" aria-hidden className="h-3 w-3 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
            VER
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Ver el show: ${highlight.title}`}
        className="absolute inset-0 cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
      />
    </div>
  );
}

export function HighlightPlayer() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  const highlight = liveHighlights.find((h) => h.id === openId) ?? null;
  const current = highlight ? highlight.media[index] : null;

  const close = useCallback(() => setOpenId(null), []);
  const step = useCallback(
    (delta: number) => {
      if (!highlight) return;
      const next = index + delta;
      if (next < 0) return;
      if (next >= highlight.media.length) setOpenId(null);
      else setIndex(next);
    },
    [highlight, index],
  );

  useEffect(() => {
    if (!highlight) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [highlight, close, step]);

  useEffect(() => {
    if (current?.type !== "photo") return;
    const t = setTimeout(() => step(1), PHOTO_MS);
    return () => clearTimeout(t);
  }, [current, step]);

  return (
    <>
      <div className="mb-10 flex gap-4 overflow-x-auto pb-1">
        {liveHighlights.map((h) => (
          <Bubble
            key={h.id}
            highlight={h}
            onOpen={() => {
              setIndex(0);
              setOpenId(h.id);
            }}
          />
        ))}
      </div>

      {highlight && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={highlight.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3"
        >
          <div className="relative h-full w-full max-w-[420px]">
            {current.type === "video" ? (
              <video
                key={current.src}
                src={current.src}
                poster={index === 0 ? highlight.cover : undefined}
                autoPlay
                playsInline
                controls
                preload="auto"
                onEnded={() => step(1)}
                className="h-full w-full rounded-sm object-contain"
              />
            ) : (
              <Image
                key={current.src}
                src={current.src}
                alt={highlight.title}
                fill
                sizes="420px"
                className="rounded-sm object-contain"
              />
            )}

            <div className="absolute inset-x-3 top-3 flex gap-1.5" aria-hidden>
              {highlight.media.map((m, i) => (
                <span
                  key={m.src}
                  className={`h-1 flex-1 rounded-full ${
                    i <= index ? "bg-paper" : "bg-paper/25"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => step(-1)}
              disabled={index === 0}
              aria-label="Anterior"
              className="absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-void/60 text-paper disabled:opacity-0"
            >
              <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-current">
                <path d="M15 5l-7 7 7 7z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Siguiente"
              className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-void/60 text-paper"
            >
              <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-current">
                <path d="M9 5l7 7-7 7z" />
              </svg>
            </button>

            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-2 top-7 cursor-pointer rounded-full bg-void/70 px-3 py-1 text-2xl leading-none text-paper"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
