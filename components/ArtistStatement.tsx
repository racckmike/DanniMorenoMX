import { artist } from "@/lib/data";
import { SystemText } from "./SystemText";

export function ArtistStatement() {
  return (
    <section className="relative bg-cobalt px-5 py-24 text-paper md:px-8 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <div className="flex flex-col gap-3 md:col-span-4">
          <SystemText className="text-paper/60">
            {artist.roles.join(" – ").toUpperCase()}
          </SystemText>
          <SystemText className="text-paper/60">
            {artist.city.toUpperCase()}
          </SystemText>
          <SystemText className="text-paper">TRANSMISIÓN ACTIVA</SystemText>
        </div>

        <div className="md:col-span-8">
          <h2 className="font-display text-[11vw] leading-[0.92] text-paper sm:text-[8vw] md:text-[6.5vw] lg:text-[5.2vw]">
            SEÑALES DE
            <br />
            OTRO MUNDO.
          </h2>
          <p className="mt-8 max-w-xl text-balance font-info text-base leading-relaxed text-paper/80 md:text-lg">
            Danni Moreno escribe, produce y dirige su propio universo: pop
            electrónico con memoria de disco, sensibilidad de estudio
            casero y una curiosidad constante por lo cósmico. CEFEIDA, su EP
            más reciente, reúne siete canciones grabadas entre México y las
            estrellas.
          </p>
        </div>
      </div>
    </section>
  );
}
