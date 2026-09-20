import { catalog, cefeida } from "@/lib/data";
import { MediaFrame } from "./MediaFrame";
import { SystemText } from "./SystemText";

const vaALlegar = catalog.find((r) => r.title === "Va a Llegar")!;
const bailemos = catalog.find((r) => r.title === "Bailemos")!;
const signos = catalog.find((r) => r.title === "Signos")!;
const elAmorEsReal = cefeida.tracks[4];
const yorokobi = cefeida.tracks[5];

// Frames 1 and 3 are real campaign photography from Danni's official 2026
// media kit (see docs/content-sources.md). Everything else is verified
// Spotify cover art from her own artist page — no video auto-thumbnails.
const frames = [
  {
    src: "/photos/archive-grass-02.jpg",
    alt: "Danni Moreno — fotografía de campaña, 2026",
    label: "ARCHIVO DM — CAMPAÑA 2026",
    span: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    src: elAmorEsReal.cover,
    alt: "El amor es real? — arte oficial, Danni Moreno",
    label: "ROLLO 02 — EL AMOR ES REAL?",
    span: "md:col-span-5 aspect-square",
  },
  {
    src: "/photos/archive-grass-01.jpg",
    alt: "Danni Moreno — fotografía de campaña, 2026",
    label: "ARCHIVO DM — CAMPAÑA 2026",
    span: "md:col-span-5 aspect-[3/4]",
  },
  {
    src: yorokobi.cover,
    alt: "Yorokobi (喜び) — arte oficial, Danni Moreno",
    label: "CEFEIDA — YOROKOBI",
    span: "md:col-span-4 aspect-square",
  },
  {
    src: bailemos.cover,
    alt: "Bailemos — arte oficial, Danni Moreno",
    label: "35MM — BAILEMOS",
    span: "md:col-span-3 aspect-square",
  },
  {
    src: vaALlegar.cover,
    alt: "Va a Llegar — arte oficial, Danni Moreno",
    label: "FOTOGRAMA 17 — VA A LLEGAR",
    span: "md:col-span-8 aspect-[16/7]",
  },
  {
    src: signos.cover,
    alt: "Signos — arte oficial, Danni Moreno",
    label: "ARCHIVO DM — SIGNOS",
    span: "md:col-span-4 aspect-[3/4]",
  },
];

export function VisualArchive() {
  return (
    <section
      id="archive"
      className="relative bg-paper px-5 py-24 text-void md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between md:mb-16">
          <h2 className="font-display text-[13vw] leading-[0.85] text-void sm:text-[8vw] md:text-[5.5vw]">
            ARCHIVO
            <br />
            VISUAL
          </h2>
          <SystemText className="hidden text-void/50 sm:block">
            FOTOGRAFÍA Y ARTE
          </SystemText>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
          {frames.map((f, i) => (
            <MediaFrame
              key={`${f.label}-${i}`}
              src={f.src}
              alt={f.alt}
              label={f.label}
              className={f.span}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
