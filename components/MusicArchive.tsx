import Image from "next/image";
import { catalog } from "@/lib/data";
import { SystemText } from "./SystemText";

export function MusicArchive() {
  return (
    <section className="relative bg-void px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <h2 className="font-display text-[13vw] leading-[0.85] text-paper sm:text-[8vw] md:text-[5.5vw]">
            CATALOG
          </h2>
          <SystemText className="hidden text-paper/40 sm:block">
            DM ARCHIVE — PROGRAMMING GUIDE
          </SystemText>
        </div>

        <div className="system-label mb-3 hidden grid-cols-[5rem_1fr_5rem_4rem] gap-4 px-3 text-[10px] text-paper/40 md:grid">
          <span>CAT.</span>
          <span>TITLE</span>
          <span>TYPE</span>
          <span className="text-right">YEAR</span>
        </div>

        <ul className="divide-y divide-paper/10 border-y border-paper/10">
          {catalog.map((release) => (
            <li key={release.catNo}>
              <a
                href={release.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="PLAY"
                className="group grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 px-3 py-4 transition-colors hover:bg-paper/5 md:grid-cols-[5rem_1fr_5rem_4rem] md:py-5"
              >
                <span className="system-label text-xs text-paper/40">
                  {release.catNo}
                </span>

                <span className="flex items-center gap-4 overflow-hidden">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden bg-cosmic-deep transition-[width] duration-300 md:h-14 md:w-14">
                    <Image
                      src={release.cover}
                      alt={`${release.title} — Danni Moreno`}
                      fill
                      sizes="56px"
                      className="object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                    />
                  </span>
                  <span className="font-display truncate text-xl leading-none text-paper sm:text-2xl md:text-3xl">
                    {release.title}
                  </span>
                </span>

                <span className="system-label hidden text-xs text-paper/40 md:block">
                  {release.type.toUpperCase()}
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
