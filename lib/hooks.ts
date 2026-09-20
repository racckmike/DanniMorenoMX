"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/** Safe across SSR/CSR — matchMedia only exists client-side, so this avoids a hydration mismatch. */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

/** Fake broadcast timecode HH:MM:SS:FF, advances once per animation frame group. Purely aesthetic — not a real clock. */
export function useTimecode(reduced: boolean) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setFrame((f) => f + 1), 42);
    return () => window.clearInterval(id);
  }, [reduced]);

  const totalFrames = frame % (25 * 60 * 60);
  const ff = totalFrames % 25;
  const ss = Math.floor(totalFrames / 25) % 60;
  const mm = Math.floor(totalFrames / (25 * 60)) % 60;
  const hh = Math.floor(totalFrames / (25 * 60 * 60));
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
}
