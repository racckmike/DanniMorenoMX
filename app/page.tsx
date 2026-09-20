import { HeroTransmission } from "@/components/HeroTransmission";
import { ArtistStatement } from "@/components/ArtistStatement";
import { CefeidaSection } from "@/components/CefeidaSection";
import { FeaturedTransmission } from "@/components/FeaturedTransmission";
import { VisualArchive } from "@/components/VisualArchive";
import { MusicArchive } from "@/components/MusicArchive";
import { ArtistBio } from "@/components/ArtistBio";
import { LiveArchive } from "@/components/LiveArchive";
import { FinalTransmission } from "@/components/FinalTransmission";

export default function Home() {
  return (
    <main>
      <HeroTransmission />
      <ArtistStatement />
      <CefeidaSection />
      <FeaturedTransmission />
      <VisualArchive />
      <MusicArchive />
      <ArtistBio />
      <LiveArchive />
      <FinalTransmission />
    </main>
  );
}
