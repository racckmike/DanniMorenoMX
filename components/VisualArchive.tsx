import { catalog, cefeida, videos, youtubeThumb } from "@/lib/data";
import { MediaFrame } from "./MediaFrame";
import { SystemText } from "./SystemText";

const solamente = catalog.find((r) => r.title.startsWith("Solamente"))!;
const vaALlegar = catalog.find((r) => r.title === "Va a Llegar")!;
const bailemos = catalog.find((r) => r.title === "Bailemos")!;
const signos = catalog.find((r) => r.title === "Signos")!;

const frames = [
  {
    src: youtubeThumb(videos.cefeida.youtubeId),
    alt: "Danni Moreno — Cefeida (Video Oficial), fotograma",
    label: "FRAME 003 — CEFEIDA VIDEO",
    span: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    src: cefeida.tracks[4].cover,
    alt: "El amor es real? — art óficial, Danni Moreno",
    label: "ROLL 02 — EL AMOR ES REAL?",
    span: "md:col-span-5 aspect-square",
  },
  {
    src: solamente.cover,
    alt: "Solamente tú <3 — art oficial, Danni Moreno",
    label: "DM ARCHIVE — SOLAMENTE TÚ",
    span: "md:col-span-5 aspect-[3/4]",
  },
  {
    src: youtubeThumb(videos.yorokobi.youtubeId),
    alt: "Danni Moreno — Yorokobi (喌び), fotograma",
    label: "TRANSMISSION STILL — YOROKOBI",
    span: "md:col-span-4 aspect-video",
  },
  {
    src: bailemos.cover,
    alt: "Bailemos — art oficial, Danni Moreno",
    label: "35MM — BAILEMOS",
    span: "md:col-span-3 aspect-square",
  },
  {
    src: vaALlegar.cover,
    alt: "Va a Llegar — art oficial, Danni Moreno",
    label: "FRAME 17 — VA A LLEGAR",
    span: "md:col-span-8 aspect-[16/7]",
  },
  {
    src: signos.cover,
    alt: "Signos — art oficial, Danni Moreno",
    label: "DM ARCHIVE — SIGNOS",
    span: "md:col-span-4 aspect-[3/4]",
  },
];

export function VisualArchive() {
  return (
    <section
      id="archive"
      className="relative bg-void px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between md:mb-16">
          <h2 className="font-display text-[13vw] leading-[0.85] text-paper sm:text-[8vw] md:text-[5.5vw]">
            VISUAL
            <br />
            ARCHIVE
          </h2>
          <SystemText className="hidden text-paper/40 sm:block">
            STILLS &amp; TRANSMISSIONS
          </SystemText>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
          {frames.map((f) => (
            <MediaFrame
              key={f.label}
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
