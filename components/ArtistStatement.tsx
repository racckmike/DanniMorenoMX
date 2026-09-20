import { artist } from "@/lib/data";
import { SystemText } from "./SystemText";

export function ArtistStatement() {
  return (
    <section className="relative border-t border-paper/10 bg-void px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <div className="flex flex-col gap-3 md:col-span-4">
          <SystemText className="text-paper/50">
            {artist.roles.join(" – ").toUpperCase()}
          </SystemText>
          <SystemText className="text-paper/50">
            {artist.city.toUpperCase()}
          </SystemText>
          <SystemText className="text-signal">TRANSMISSION ACTIVE</SystemText>
        </div>

        <div className="md:col-span-8">
          <p className="font-display text-[11vw] leading-[0.92] text-paper sm:text-[8vw] md:text-[6.5vw] lg:text-[5.2vw]">
            SIGNALS FROM
            <br />
            ANOTHER WORLD.
          </p>
          <p className="mt-8 max-w-xl text-balance font-info text-base leading-relaxed text-paper/70 md:text-lg">
            Danni Moreno escribe, produce y dirige su propio universo:
            electropóp con memoria de disco, sensibilidad de estudio
            casero y una curiosidad constante por lo cósmico. CEFEIDA es
            su transmisión más reciente — siete señales
            grabadas entre México y las estrellas.
          </p>
        </div>
      </div>
    </section>
  );
}
