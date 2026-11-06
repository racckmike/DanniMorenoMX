"use client";

import { useState } from "react";
import { artist } from "@/lib/data";

const NAV = [
  { label: "SHOW EN VIVO", href: "#presentaciones" },
  { label: "SOBRE DANNI", href: "#about" },
  { label: "MÚSICA", href: "#cefeida" },
  { label: "ARCHIVO", href: "#archive" },
  { label: "CONTACTO", href: "#transmission" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="retro-stripes" aria-hidden />
      <div className="flex items-center justify-between border-b-2 border-void bg-paper px-5 py-3 md:px-8">
        {/* Channel plate, the way a broadcast ident sat in the corner. */}
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-lg leading-none tracking-wide text-void transition-colors group-hover:text-signal md:text-xl">
            DANNI MORENO
          </span>
          <span className="system-label hidden text-[9px] text-signal sm:inline">
            CANAL 07
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="system-label rounded-full whitespace-nowrap px-2.5 py-1.5 text-[10px] text-void transition-colors hover:bg-signal hover:text-paper lg:text-[11px]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={artist.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Danni Moreno"
            className="system-label rounded-full border-2 border-void px-3 py-1.5 text-[11px] text-void transition-colors hover:bg-void hover:text-paper"
          >
            IG
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="system-label rounded-full border-2 border-void px-3 py-1.5 text-[11px] text-void md:hidden"
        >
          {open ? "CERRAR" : "MENÚ"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-5 border-b-2 border-void bg-paper px-5 pb-8 pt-5 md:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-void"
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
