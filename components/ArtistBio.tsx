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

          <div className="flex max-w-xl flex-col gap-5 text-balance text-base leading-relaxed text-paper/75 md:text-lg">
            <p>
              Danni Moreno es artista, compositora y productora musical de{" "}
              {artist.city}, {artist.degree.toLowerCase()}. Su proyecto se
              desarrolla dentro del pop, combinando una identidad fresca y
              cercana con sonidos bailables, influencias disco y referencias
              de los 80 y los 2000.
            </p>
            <p>
              {artist.studioNote} También ha participado en la creación de
              música para marcas, campañas políticas y comerciales, y una
              canción original suya fue transmitida por Televisa durante la
              temporada navideña.
            </p>
            <p>
              Actualmente se encuentra en una nueva etapa artística, con
              canciones como <em className="not-italic text-paper">Yorokobi</em>{" "}
              y <em className="not-italic text-paper">Pecar</em> como parte
              de esta evolución. Después de años de desarrollarse detrás y
              frente al micrófono, construye una carrera independiente en la
              que composición, producción e interpretación convergen para
              darle forma a una identidad propia.
            </p>
          </div>

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
            <div>
              <dt className="text-paper/30">REPRODUCCIONES</dt>
              <dd className="mt-1 text-paper">{artist.stats.streamsOnOneSong} EN UNA CANCIÓN</dd>
            </div>
            <div>
              <dt className="text-paper/30">OYENTES</dt>
              <dd className="mt-1 text-paper">{artist.stats.monthlyListeners} MENSUALES · SPOTIFY</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
