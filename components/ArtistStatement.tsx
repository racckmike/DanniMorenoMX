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
          <SystemText className="mb-3 block text-paper/60 md:mb-4">
            ¿QUIÉN ES DANNI MORENO?
          </SystemText>
          <h2 className="font-display text-[11vw] leading-[0.92] text-paper sm:text-[8vw] md:text-[6.5vw] lg:text-[5.2vw]">
            IDENTIDAD
            <br />
            FRESCA Y CERCANA.
          </h2>
          <p className="mt-8 max-w-xl text-balance font-info text-base leading-relaxed text-paper/80 md:text-lg">
            Danni Moreno es artista, compositora y productora musical de{" "}
            {artist.city}. Su proyecto se desarrolla dentro del pop,
            combinando una identidad fresca y cercana con sonidos bailables,
            influencias disco y referencias de los 80 y los 2000.
          </p>
        </div>
      </div>
    </section>
  );
}
