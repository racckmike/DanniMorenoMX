import Image from "next/image";
import { artist } from "@/lib/data";
import { SystemText } from "./SystemText";

export function ArtistBio() {
  return (
    <section
      id="about"
      className="relative border-t border-paper/10 bg-void px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden md:col-span-5">
          <Image
            src="/photos/portrait-about.jpg"
            alt="Danni Moreno"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
            style={{ objectPosition: "54% 21%" }}
          />
        </div>

        <div className="flex flex-col justify-center md:col-span-7">
          <SystemText className="mb-4 text-paper/50">SOBRE DANNI</SystemText>
          <h2 className="font-display mb-6 text-[10vw] leading-[0.88] text-paper sm:text-[6vw] md:text-[4vw]">
            DANNI MORENO
          </h2>
          <p className="max-w-xl text-balance text-base leading-relaxed text-paper/75 md:text-lg">
            Cantautora, compositora y productora de {artist.city}, licenciada
            en Producción Musical. Escribe, produce y hace dirección vocal de
            su propio material —y el de otros artistas independientes—
            desde su estudio, DM Studios, moviéndose entre el pop
            electrónico, el synth-pop y una estética visual que mezcla lo
            análogo con lo cósmico. Su EP más
            reciente, <em className="not-italic text-paper">CEFEIDA</em>, sale
            por Danni Moreno Music / Warner Music Group.
          </p>

          <dl className="system-label mt-10 grid grid-cols-2 gap-6 text-xs text-paper/50 sm:grid-cols-3">
            <div>
              <dt className="text-paper/30">ROL</dt>
              <dd className="mt-1 text-paper">{artist.roles.join(", ").toUpperCase()}</dd>
            </div>
            <div>
              <dt className="text-paper/30">BASE</dt>
              <dd className="mt-1 text-paper">{artist.city.toUpperCase()}</dd>
            </div>
            <div>
              <dt className="text-paper/30">SELLO</dt>
              <dd className="mt-1 text-paper">WARNER MUSIC GROUP</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
