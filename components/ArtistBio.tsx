import Image from "next/image";
import { artist } from "@/lib/data";
import { SystemText } from "./SystemText";

export function ArtistBio() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-magenta px-5 py-24 md:px-8 md:py-36"
    >
      <div aria-hidden className="halftone pointer-events-none absolute inset-0 text-void" />

      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-16">
        {/* pinned like a photo in a magazine spread */}
        <div className="md:col-span-5">
          <div className="polaroid -rotate-2 transition-transform duration-500 hover:rotate-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-plum">
              <Image
                src="/photos/archive-studio-01.jpg"
                alt="Danni Moreno"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
                style={{ objectPosition: "71% 42%" }}
              />
            </div>
            <p className="system-label mt-4 text-center text-[10px] text-void/60">
              DANNI MORENO — {artist.city.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center md:col-span-7">
          <SystemText className="banner-label mb-5 inline-block text-[10px]">SOBRE DANNI</SystemText>
          <h2 className="pop-title font-display mb-6 text-[10vw] leading-[0.88] text-void sm:text-[6vw] md:text-[4vw]">
            DANNI MORENO
          </h2>

          <div className="flex max-w-xl flex-col gap-5 text-balance text-base leading-relaxed text-void/80 md:text-lg">
            <p>
              Danni Moreno es artista, compositora y productora musical de{" "}
              {artist.city}, {artist.degree.toLowerCase()}. Su proyecto se
              desarrolla dentro del pop, combinando una identidad fresca y
              cercana con sonidos bailables, influencias disco y referencias
              de los 70, los 80 y los 2000.
            </p>
            <p>
              Su formación como productora le ha permitido desarrollar una
              visión integral de la música: compone y produce sus propias
              canciones, realiza producción vocal y trabaja también con otros
              artistas independientes en procesos de composición y producción
              desde su propio home studio. A lo largo de su trayectoria
              también ha participado en la creación de música para distintos
              proyectos, incluyendo jingles para marcas, campañas políticas y
              comerciales.
            </p>
            <p>
              Como artista, Danni ha logrado conectar con una audiencia
              digital, alcanzando más de un millón de reproducciones con una
              de sus canciones y construyendo una comunidad que hoy busca
              llevar hacia una nueva etapa de su proyecto artístico.
              Actualmente cuenta con más de 12 mil oyentes mensuales en
              Spotify. Su música también ha llegado a la televisión mexicana:
              una canción original que realizó junto a un amigo fue
              transmitida por Televisa durante la temporada navideña.
            </p>
            <p>
              Actualmente se encuentra en una nueva etapa artística, con
              canciones como <em className="not-italic text-void">Yorokobi</em>{" "}
              y <em className="not-italic text-void">Pecar</em> como parte de
              esta evolución. Próximamente continuará lanzando música que
              explora distintas sonoridades dentro del pop, desde lo
              electrónico y disco hasta influencias que recorren distintas
              épocas, de los 70 a los 2000, reinterpretadas desde una
              perspectiva actual.
            </p>
            <p>
              Después de años de desarrollarse detrás y frente al micrófono,
              Danni continúa construyendo una carrera independiente en la que
              la composición, la producción y la interpretación convergen
              para darle forma a una identidad propia. Hoy busca llevar su
              música a nuevos públicos, abrirse camino en la industria y
              seguir convirtiendo todo lo que ha construido en nuevas
              oportunidades para crecer y llegar cada vez más lejos.
            </p>
          </div>

          <dl className="system-label mt-10 grid grid-cols-2 gap-6 text-xs text-void/70 sm:grid-cols-3">
            <div>
              <dt className="text-void/50">ROL</dt>
              <dd className="mt-1 text-void">{artist.roles.join(", ").toUpperCase()}</dd>
            </div>
            <div>
              <dt className="text-void/50">BASE</dt>
              <dd className="mt-1 text-void">{artist.city.toUpperCase()}</dd>
            </div>
            <div>
              <dt className="text-void/50">TIKTOK</dt>
              <dd className="mt-1 text-void">{artist.stats.tiktok}</dd>
            </div>
            <div>
              <dt className="text-void/50">SPOTIFY</dt>
              <dd className="mt-1 text-void">{artist.stats.spotifyStreams} REPRODUCCIONES</dd>
            </div>
            <div>
              <dt className="text-void/50">INSTAGRAM</dt>
              <dd className="mt-1 text-void">{artist.stats.instagram}</dd>
            </div>
            <div>
              <dt className="text-void/50">YOUTUBE</dt>
              <dd className="mt-1 text-void">{artist.stats.youtube}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
