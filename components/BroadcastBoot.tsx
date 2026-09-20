"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

const LINES = [
  "D.M. VIDEO SYSTEM",
  "CEFEIDA TRANSMISSION — CH.07",
  "STEREO ● SIGNAL SEARCHING…",
];

export function BroadcastBoot() {
  const reduced = usePrefersReducedMotion();
  const [stage, setStage] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const t1 = window.setTimeout(() => setStage(1), 650);
    const t2 = window.setTimeout(() => setStage(2), 1050);
    const t3 = window.setTimeout(() => setDone(true), 1500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [reduced]);

  if (reduced || done) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-start justify-center gap-3 bg-void px-6 md:px-16"
      role="status"
      aria-live="polite"
    >
      <div className="system-label flex flex-col gap-2 text-sm text-paper/90 md:text-base">
        {LINES.map((line, i) => (
          <p
            key={line}
            className="transition-opacity duration-200"
            style={{ opacity: stage >= i ? 1 : 0 }}
          >
            {line}
          </p>
        ))}
        {stage >= 2 && (
          <p className="mt-4 text-signal">
            SIGNAL ACQUIRED &nbsp; PLAY {"▶"}
          </p>
        )}
      </div>
      {stage >= 2 && (
        <div
          aria-hidden
          className="absolute left-0 top-1/2 h-[2px] w-full bg-paper/90"
          style={{ animation: "boot-flash 0.4s ease-out forwards" }}
        />
      )}
      <style>{`
        @keyframes boot-flash {
          0% { transform: scaleY(1); opacity: 1; }
          100% { transform: scaleY(60); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
