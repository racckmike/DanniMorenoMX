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
    <section className="border-t border-paper/10 bg-void px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SystemText className="mb-6 text-paper/40">SE HA PRESENTADO EN</SystemText>
        <ul className="flex flex-col divide-y divide-paper/10 border-y border-paper/10">
          {pastShows.map((show) => (
            <li
              key={show.title}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
            >
              <span className="font-display text-2xl leading-none text-paper sm:text-3xl">
                {show.venue}, {show.city}
              </span>
              <span className="system-label text-xs text-paper/50">
                {formatDate(show)} — {show.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
