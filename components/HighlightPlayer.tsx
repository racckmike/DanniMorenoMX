"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { liveHighlight } from "@/lib/data";

export function HighlightPlayer() {
  const { clips, title, url } = liveHighlight;
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = () => setIndex(null);
  const next = () =>
    setIndex((i) => (i === null || i + 1 >= clips.length ? null : i + 1));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const bubble = (
    <>
      <span className="rounded-full bg-gradient-to-tr from-sun via-signal to-magenta p-[3px]">
        <span className="relative block h-24 w-24 overflow-hidden rounded-full border-[3px] border-violet md:h-28 md:w-28">
          <Image
            src="/photos/hero-studio.jpg"
            alt={title}
            fill
            sizes="112px"
            className="object-cover object-[56%_20%]"
          />
        </span>
      </span>
      <span className="text-sm text-paper">{title}</span>
    </>
  );
  const cls = "mb-10 inline-flex flex-col items-center gap-3";

  if (clips.length === 0) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={cls}>
        {bubble}
      </a>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setIndex(0)} className={cls}>
        {bubble}
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="relative h-full w-full max-w-md">
            <video
              key={clips[index]}
              src={clips[index]}
              autoPlay
              playsInline
              onEnded={next}
              onClick={next}
              className="h-full w-full object-contain"
            />
            <div className="absolute inset-x-3 top-3 flex gap-1" aria-hidden>
              {clips.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 flex-1 rounded ${i <= index ? "bg-paper" : "bg-paper/30"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-3 top-8 text-3xl leading-none text-paper"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
