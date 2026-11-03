"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { liveHighlight } from "@/lib/data";

const PHOTO_MS = 5000;

export function HighlightPlayer() {
  const { media, title } = liveHighlight;
  const [index, setIndex] = useState<number | null>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;
  const current = open ? media[index] : null;

  // Playback is declarative (autoPlay + preload="auto"), because Safari with
  // preload="metadata" buffers no frames at all: readyState stays at 1 and the
  // element paints nothing but its poster. This only pauses the clip while it
  // is off screen.
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

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setIndex((i) => {
        if (i === null) return null;
        const next = i + delta;
        if (next < 0) return 0;
        return next >= media.length ? null : next;
      }),
    [media.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const opener = openerRef.current;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [open, close, step]);

  useEffect(() => {
    if (current?.type !== "photo") return;
    const t = setTimeout(() => step(1), PHOTO_MS);
    return () => clearTimeout(t);
  }, [current, step]);

  return (
    <>
      {/*
        The <video> is a sibling of the button, never a child: Safari does not
        paint media nested inside a <button> (and it's invalid HTML), which is
        what left this card showing only its poster.
      */}
      <div className="group relative mb-10 w-[232px] sm:w-[268px]">
        <div className="neon-ring relative aspect-[9/16] overflow-hidden rounded-sm bg-void">
          <video
            ref={previewRef}
            src={liveHighlight.poster}
            poster="/photos/angel-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-void via-void/70 to-transparent px-3 pb-3 pt-8">
            <span className="system-label text-[10px] text-paper">{title}</span>
            <span className="system-label flex items-center gap-1.5 rounded-full bg-magenta px-3 py-1.5 text-[10px] text-paper transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" aria-hidden className="h-3 w-3 fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
              VER SHOW
            </span>
          </div>
        </div>
        <button
          ref={openerRef}
          type="button"
          onClick={() => setIndex(0)}
          aria-label={`Ver el show: ${title}`}
          className="absolute inset-0 cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        />
      </div>

      {open && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3"
        >
          <div className="relative h-full w-full max-w-[420px]">
            {current.type === "video" ? (
              <video
                key={current.src}
                src={current.src}
                autoPlay
                playsInline
                controls
                onEnded={() => step(1)}
                className="h-full w-full rounded-sm object-contain"
              />
            ) : (
              <Image
                key={current.src}
                src={current.src}
                alt={title}
                fill
                sizes="420px"
                className="rounded-sm object-contain"
              />
            )}

            <div className="absolute inset-x-3 top-3 flex gap-1.5" aria-hidden>
              {media.map((m, i) => (
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
