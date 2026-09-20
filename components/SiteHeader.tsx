"use client";

import { useState } from "react";
import { artist } from "@/lib/data";

const NAV = [
  { label: "SOBRE DANNI", href: "#about" },
  { label: "PRESENTACIONES", href: "#presentaciones" },
  { label: "MÚSICA", href: "#cefeida" },
  { label: "ARCHIVO", href: "#archive" },
  { label: "CONTACTO", href: "#transmission" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between bg-gradient-to-b from-void/85 to-transparent px-5 py-4 md:px-8 md:py-5">
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-paper transition-colors hover:text-magenta md:text-xl"
        >
          DM
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="system-label text-xs text-paper transition-colors hover:text-magenta"
            >
              {item.label}
            </a>
          ))}
          <a
            href={artist.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Danni Moreno"
            className="system-label text-xs text-paper transition-colors hover:text-magenta"
          >
            IG
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="system-label text-xs text-paper md:hidden"
        >
          {open ? "CERRAR" : "MENÚ"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-6 bg-void px-5 pb-8 pt-2 md:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href={artist.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="system-label text-xs text-paper"
          >
            INSTAGRAM {"↗"}
          </a>
        </nav>
      )}
    </header>
  );
}
