import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-8 bg-void px-5 text-center text-paper">
      <p className="system-label text-xs text-paper/50">SEÑAL PERDIDA — 404</p>
      <h1 className="font-display text-[18vw] leading-[0.85] sm:text-[10vw]">
        SIN SEÑAL
      </h1>
      <p className="max-w-md text-balance text-paper/70">
        No encontramos esta transmisión. Puede que el enlace esté roto o que
        la página ya no exista.
      </p>
      <Link
        href="/"
        className="system-label rounded-full bg-magenta px-6 py-3 text-xs text-paper transition-transform hover:scale-105"
      >
        VOLVER AL INICIO
      </Link>
    </main>
  );
}
