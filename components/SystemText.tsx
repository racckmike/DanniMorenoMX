import type { ReactNode } from "react";

export function SystemText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`system-label text-xs ${className}`}>{children}</span>
  );
}

export function RecDot({
  className = "",
  label = "GRABANDO",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="h-2 w-2 rounded-full bg-signal animate-blink"
      />
      <SystemText>{label}</SystemText>
    </span>
  );
}
