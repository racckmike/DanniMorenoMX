import Image from "next/image";

/**
 * A single photographic "frame" in the archive. Wraps a verified, hot-linked
 * image (Spotify cover art or a YouTube video still — never a locally
 * re-hosted copy) with the archive's system-text labelling.
 */
export function MediaFrame({
  src,
  alt,
  label,
  sizes = "(min-width: 1024px) 33vw, 90vw",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden bg-cosmic-deep ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover grayscale-[0.15] contrast-[1.05] saturate-[0.92] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
      <figcaption className="pointer-events-none absolute bottom-2 left-2 right-2 flex items-end justify-between">
        <span className="system-label text-[10px] text-paper/80">
          {label}
        </span>
      </figcaption>
    </figure>
  );
}
