import { HeroTransmission } from "@/components/HeroTransmission";
import { LiveArchive } from "@/components/LiveArchive";
import { CefeidaSection } from "@/components/CefeidaSection";
import { FeaturedTransmission } from "@/components/FeaturedTransmission";
import { VisualArchive } from "@/components/VisualArchive";
import { MusicArchive } from "@/components/MusicArchive";
import { ArtistBio } from "@/components/ArtistBio";
import { FinalTransmission } from "@/components/FinalTransmission";

export default function Home() {
  return (
    <main>
      <HeroTransmission />
      <div aria-hidden className="retro-stripes" />
      <LiveArchive />
      <ArtistBio />
      <div aria-hidden className="retro-stripes" />
      <CefeidaSection />
      <FeaturedTransmission />
      <VisualArchive />
      <div aria-hidden className="retro-stripes" />
      <MusicArchive />
      <FinalTransmission />
    </main>
  );
}
