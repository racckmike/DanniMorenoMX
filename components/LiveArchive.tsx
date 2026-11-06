import { pastShows, type PastShow } from "@/lib/data";
import { HighlightPlayer } from "./HighlightPlayer";
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
    <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b-2 border-dotted border-void/35 px-4 py-5 last:border-b-0 sm:px-6">
      <span className="font-display text-2xl leading-none text-void sm:text-3xl">
        {show.venue}
        {show.venue && show.city && (
          <span className="text-void/60">, {show.city}</span>
        )}
        {!show.venue && show.city}
      </span>
      {secondary && (
        <span className="system-label text-[11px] text-signal">{secondary}</span>
      )}
    </li>
  );
}

export function LiveArchive() {
  const [featured, ...rest] = pastShows;
  return (
    <section
      id="presentaciones"
      className="relative overflow-hidden bg-cobalt px-5 py-20 md:px-8 md:py-28"
    >
      <div aria-hidden className="halftone pointer-events-none absolute inset-0 text-void" />

      <div className="relative mx-auto max-w-6xl">
        <SystemText className="banner-label mb-5 inline-block text-[10px]">SE HA PRESENTADO EN</SystemText>
        <h2 className="pop-title-light mb-10 font-display text-[13vw] leading-[0.85] text-paper sm:text-[8vw] md:mb-14 md:text-[5.5vw]">
          SHOW EN VIVO
        </h2>

        <HighlightPlayer />

        <ul className="sticker border-2 border-void bg-paper">
          <ShowRow show={featured} />
        </ul>

        <details className="group mt-8">
          <summary className="system-label sticker inline-block cursor-pointer list-none rounded-full border-2 border-void bg-cyan px-6 py-3 text-xs text-void transition-transform hover:-translate-y-0.5 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">VER MÁS</span>
            <span className="hidden group-open:inline">VER MENOS</span>
          </summary>
          <ul className="sticker mt-6 border-2 border-void bg-paper">
            {rest.map((show, i) => (
              <ShowRow key={i} show={show} />
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
