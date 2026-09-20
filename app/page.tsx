import { HeroTransmission } from "@/components/HeroTransmission";
import { ArtistStatement } from "@/components/ArtistStatement";
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
      <ArtistStatement />
      <LiveArchive />
      <CefeidaSection />
      <FeaturedTransmission />
      <VisualArchive />
      <MusicArchive />
      <ArtistBio />
      <FinalTransmission />
    </main>
  );
}
