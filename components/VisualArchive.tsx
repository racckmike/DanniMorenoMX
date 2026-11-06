import { MediaFrame } from "./MediaFrame";
import { SystemText } from "./SystemText";

// Photographs the artist selected herself for this archive (Drive folder
// "Destacados", 2026-11-06) plus the pink-bathroom frame she asked to keep.
// Originals are 2400x3600 — no Spotify cover art here, these are photos only.
const frames = [
  {
    src: "/photos/archive-bathroom-01.jpg",
    span: "md:col-span-7 md:row-span-2 aspect-[3/4] md:aspect-auto",
    objectPosition: "50% 15%",
    tilt: "-rotate-1",
  },
  { src: "/photos/archive-5181.jpg", span: "md:col-span-5 aspect-[3/4]", tilt: "rotate-1" },
  { src: "/photos/archive-5180.jpg", span: "md:col-span-5 aspect-[3/4]", tilt: "-rotate-1" },
  { src: "/photos/archive-5179.jpg", span: "md:col-span-6 aspect-[3/4]", tilt: "rotate-1" },
  { src: "/photos/archive-5178.jpg", span: "md:col-span-6 aspect-[3/4]", tilt: "-rotate-1" },
  { src: "/photos/archive-3596.jpg", span: "md:col-span-6 aspect-[3/4]", tilt: "-rotate-1" },
  { src: "/photos/archive-0273.jpg", span: "md:col-span-6 aspect-[3/4]", tilt: "rotate-1" },
];

export function VisualArchive() {
  return (
    <section
      id="archive"
      className="relative overflow-hidden bg-cyan px-5 py-24 text-void md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between md:mb-16">
          <h2 className="pop-title font-display text-[13vw] leading-[0.85] text-void sm:text-[8vw] md:text-[5.5vw]">
            ARCHIVO
            <br />
            VISUAL
          </h2>
          <SystemText className="banner-label hidden text-[10px] sm:inline-block">
            FOTOGRAFÍA Y ARTE
          </SystemText>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
          {frames.map((f) => (
            <MediaFrame
              key={f.src}
              src={f.src}
              alt="Danni Moreno"
              className={`${f.span} ${f.tilt} transition-transform duration-500 hover:rotate-0`}
              objectPosition={f.objectPosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
