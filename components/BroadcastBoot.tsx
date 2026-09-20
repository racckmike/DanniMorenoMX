"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function BroadcastBoot() {
  const reduced = usePrefersReducedMotion();
  const [stage, setStage] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const t1 = window.setTimeout(() => setStage(1), 150);
    const t2 = window.setTimeout(() => setStage(2), 950);
    const t3 = window.setTimeout(() => setDone(true), 1250);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [reduced]);

  if (reduced || done) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-3 bg-cobalt px-6"
      role="status"
      aria-live="polite"
    >
      <p
        className="system-label text-xs text-paper/70 transition-opacity duration-300"
        style={{ opacity: stage >= 1 ? 1 : 0 }}
      >
        CEFEIDA · CANAL 07
      </p>
      <h2
        className="font-display text-center text-[16vw] leading-[0.85] text-paper transition-all duration-300 sm:text-[10vw]"
        style={{
          opacity: stage >= 1 ? 1 : 0,
          transform: stage >= 1 ? "scale(1)" : "scale(0.94)",
        }}
      >
        DANNI MORENO
      </h2>

      {stage >= 2 && (
        <div
          aria-hidden
          className="absolute left-0 top-1/2 h-full w-full bg-paper"
          style={{ animation: "boot-flash 0.3s ease-out forwards" }}
        />
      )}
      <style>{`
        @keyframes boot-flash {
          0% { transform: scaleY(0); opacity: 1; }
          60% { transform: scaleY(1); opacity: 1; }
          100% { transform: scaleY(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
