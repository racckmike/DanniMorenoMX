import Image from "next/image";
import { liveHighlight, pastShows, type PastShow } from "@/lib/data";
import { SystemText } from "./SystemText";

function formatDate(show: PastShow) {
  if (!show.date) return null;
  if (show.dateIsYearOnly) return show.date;
  const d = new Date(`${show.date}T00:00:00`);
  return d
    .toLocaleDateString("es-MX", { year: "numeric", month: "short", day: "2-digit" })
    .toUpperCase();
}

function ShowRow({ show }: { show: PastShow }) {
  const secondary = [formatDate(show), show.title].filter(Boolean).join(" — ");
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-6">
      <span className="font-display text-3xl leading-none text-paper sm:text-4xl">
        {show.venue}
        {show.venue && show.city && (
          <span className="text-paper/75">, {show.city}</span>
        )}
        {!show.venue && show.city}
      </span>
      {secondary && (
        <span className="system-label text-xs text-paper/75">{secondary}</span>
      )}
    </li>
  );
}

export function LiveArchive() {
  const [featured, ...rest] = pastShows;
  return (
    <section
      id="presentaciones"
      className="relative bg-gradient-to-b from-magenta to-violet px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SystemText className="mb-4 text-paper/80">SE HA PRESENTADO EN</SystemText>
        <h2 className="mb-10 font-display text-[13vw] leading-[0.85] text-paper sm:text-[8vw] md:mb-14 md:text-[5.5vw]">
          SHOW EN VIVO
        </h2>

        <a
          href={liveHighlight.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-10 inline-flex flex-col items-center gap-3"
        >
          <span className="rounded-full bg-gradient-to-tr from-sun via-signal to-magenta p-[3px]">
            <span className="relative block h-24 w-24 overflow-hidden rounded-full border-[3px] border-violet md:h-28 md:w-28">
              <Image
                src="/photos/hero-studio.jpg"
                alt={liveHighlight.title}
                fill
                sizes="112px"
                className="object-cover object-[56%_20%]"
              />
            </span>
          </span>
          <span className="text-sm text-paper">{liveHighlight.title}</span>
        </a>

        <ul className="border-y border-paper/30">
          <ShowRow show={featured} />
        </ul>

        <details className="group mt-8">
          <summary className="system-label inline-block cursor-pointer list-none rounded-full border border-paper/70 px-6 py-3 text-xs text-paper transition-colors hover:bg-paper hover:text-violet [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">VER MÁS</span>
            <span className="hidden group-open:inline">VER MENOS</span>
          </summary>
          <ul className="mt-6 divide-y divide-paper/25 border-y border-paper/30">
            {rest.map((show, i) => (
              <ShowRow key={i} show={show} />
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
