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
  tintClassName,
  objectPosition = "50% 50%",
}: {
  src: string;
  alt: string;
  label: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Optional mix-blend-color wash so a reused image reads as a distinct moment. */
  tintClassName?: string;
  /** CSS object-position, for keeping a face in frame on a tight aspect ratio. */
  objectPosition?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden bg-cosmic-deep ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectPosition }}
        className="object-cover contrast-[1.05] saturate-[1.15] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      {tintClassName && (
        <div aria-hidden className={`pointer-events-none absolute inset-0 mix-blend-color ${tintClassName}`} />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
      <figcaption className="pointer-events-none absolute bottom-2 left-2 right-2 flex items-end justify-between">
        <span className="system-label text-[10px] text-paper/80">
          {label}
        </span>
      </figcaption>
    </figure>
  );
}
