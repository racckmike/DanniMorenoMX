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
    <section className="border-t border-paper/10 bg-void px-5 py-14 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <SystemText className="text-paper/40">ARCHIVO EN VIVO</SystemText>
        <ul className="flex flex-col gap-2">
          {pastShows.map((show) => (
            <li
              key={show.title}
              className="system-label flex flex-wrap items-baseline gap-x-2 text-xs text-paper/70"
            >
              <span className="text-signal">{formatDate(show)}</span>
              <span>
                — {show.title.toUpperCase()} — {show.venue.toUpperCase()},{" "}
                {show.city.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
