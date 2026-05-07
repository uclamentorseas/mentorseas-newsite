import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { JourneySection } from "@/components/journey-section";
import { CommunitySection } from "@/components/community-section";
import { OrgsSection } from "@/components/orgs-section";
import { VoicesSection } from "@/components/voices-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutSection />
        <JourneySection />
        <CommunitySection />
        <OrgsSection />
        <VoicesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
