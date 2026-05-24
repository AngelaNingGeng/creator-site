import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedWorks } from "@/components/home/FeaturedWorks";
import { AboutPreview } from "@/components/home/AboutPreview";
import { SocialStrip } from "@/components/home/SocialStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedWorks />
      <AboutPreview />
      <SocialStrip />
    </>
  );
}
