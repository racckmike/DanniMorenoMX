"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeFinePointer(callback: () => void) {
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getFinePointerSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const enabled = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot,
  );

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      const el = dotRef.current;
      if (!el) return;
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

      const target = (e.target as HTMLElement).closest("[data-cursor]");
      setLabel(target?.getAttribute("data-cursor") ?? "");
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        {label ? (
          <span className="system-label whitespace-nowrap rounded-full border border-paper bg-void px-2 py-1 text-[10px] text-paper">
            {label}
          </span>
        ) : (
          <span className="block h-1.5 w-1.5 rounded-full bg-paper shadow-[0_0_0_1px_rgba(8,8,8,0.6)]" />
        )}
      </div>
    </div>
  );
}
