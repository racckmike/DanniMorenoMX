import { pastShows, type PastShow } from "@/lib/data";
import { SystemText } from "./SystemText";

function formatDate(show: PastShow) {
  if (show.dateIsYearOnly) return show.date;
  const d = new Date(`${show.date}T00:00:00`);
  return d
    .toLocaleDateString("es-MX", { year: "numeric", month: "short", day: "2-digit" })
    .toUpperCase();
}

export function LiveArchive() {
  return (
    <section id="presentaciones" className="relative bg-void px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SystemText className="mb-4 text-paper/40">PRESENTACIONES</SystemText>
        <h2 className="mb-10 font-display text-[13vw] leading-[0.85] text-paper sm:text-[8vw] md:mb-14 md:text-[5.5vw]">
          SE HA PRESENTADO EN
        </h2>

        <ul className="flex flex-col divide-y divide-paper/10 border-y border-paper/10">
          {pastShows.map((show) => (
            <li
              key={show.title}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-6"
            >
              <span className="font-display text-3xl leading-none text-paper sm:text-4xl">
                {show.venue}
                <span className="text-paper/50">, {show.city}</span>
              </span>
              <span className="system-label text-xs text-paper/40">
                {formatDate(show)} — {show.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
