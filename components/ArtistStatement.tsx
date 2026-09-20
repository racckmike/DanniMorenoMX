import { artist } from "@/lib/data";
import { SystemText } from "./SystemText";

export function ArtistStatement() {
  return (
    <section
      id="quien-es-danni"
      className="relative bg-cobalt px-5 py-24 text-paper md:px-8 md:py-36"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <div className="flex flex-col gap-3 md:col-span-4">
          <SystemText className="text-paper/60">
            {artist.roles.join(" – ").toUpperCase()}
          </SystemText>
          <SystemText className="text-paper/60">
            {artist.city.toUpperCase()}
          </SystemText>
        </div>

        <div className="md:col-span-8">
          <h2 className="font-display text-[11vw] leading-[0.92] text-paper sm:text-[8vw] md:text-[6.5vw] lg:text-[5.2vw]">
            SU PROPIO
            <br />
            UNIVERSO.
          </h2>
          <p className="mt-8 max-w-xl text-balance font-info text-base leading-relaxed text-paper/80 md:text-lg">
            Danni Moreno es cantautora, productora y creadora audiovisual de{" "}
            {artist.city}. Su música se mueve entre el pop electrónico, el
            synth-pop y una estética que mezcla lo análogo con lo cósmico.
          </p>
        </div>
      </div>
    </section>
  );
}
