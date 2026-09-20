import Image from "next/image";
import { catalog } from "@/lib/data";
import { SystemText } from "./SystemText";

const TYPE_LABEL: Record<string, string> = {
  EP: "EP",
  Single: "SENCILLO",
};

const ROW_HOVER = ["hover:bg-signal/10", "hover:bg-magenta/10", "hover:bg-cobalt/10", "hover:bg-violet/15"];

export function MusicArchive() {
  return (
    <section className="relative bg-void px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <h2 className="font-display text-[13vw] leading-[0.85] text-paper sm:text-[8vw] md:text-[5.5vw]">
            CATÁLOGO
          </h2>
          <SystemText className="hidden text-paper/40 sm:block">
            ARCHIVO DM — GUÍA DE PROGRAMACIÓN
          </SystemText>
        </div>

        <div className="system-label mb-3 hidden grid-cols-[5rem_1fr_5rem_4rem] gap-4 px-3 text-[10px] text-paper/40 md:grid">
          <span>CAT.</span>
          <span>TÍTULO</span>
          <span>TIPO</span>
          <span className="text-right">AÑO</span>
        </div>

        <ul className="divide-y divide-paper/10 border-y border-paper/10">
          {catalog.map((release, i) => (
            <li key={release.catNo}>
              <a
                href={release.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 px-3 py-4 transition-colors md:grid-cols-[5rem_1fr_5rem_4rem] md:py-5 ${ROW_HOVER[i % ROW_HOVER.length]}`}
              >
                <span className="system-label text-xs text-paper/40">
                  {release.catNo}
                </span>

                <span className="flex items-center gap-4 overflow-hidden">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden bg-cosmic-deep md:h-14 md:w-14">
                    <Image
                      src={release.cover}
                      alt={`${release.title} — Danni Moreno`}
                      fill
                      sizes="56px"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <span className="font-display truncate text-xl leading-none text-paper sm:text-2xl md:text-3xl">
                    {release.title}
                  </span>
                </span>

                <span className="system-label hidden text-xs text-paper/40 md:block">
                  {TYPE_LABEL[release.type] ?? release.type}
                </span>

                <span className="system-label whitespace-nowrap text-right text-xs text-paper/40">
                  {release.year}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
