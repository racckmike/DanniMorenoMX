import { pastShow } from "@/lib/data";
import { SystemText } from "./SystemText";

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return d
    .toLocaleDateString("es-MX", { year: "numeric", month: "short", day: "2-digit" })
    .toUpperCase();
}

export function LiveArchive() {
  return (
    <section className="border-t border-paper/10 bg-void px-5 py-14 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <SystemText className="text-paper/40">LIVE ARCHIVE</SystemText>
        <p className="system-label text-xs text-paper/70">
          {formatDate(pastShow.date)} — {pastShow.title.toUpperCase()} —{" "}
          {pastShow.venue.toUpperCase()}, {pastShow.city.toUpperCase()}
        </p>
      </div>
    </section>
  );
}
