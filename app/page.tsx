import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { JourneySection } from "@/components/journey-section";
// import { CommunitySection } from "@/components/community-section";
import { OrgsSection } from "@/components/orgs-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="blueprint-grid-dark">
          <AboutSection />
          <JourneySection />
          {/* <CommunitySection /> — hidden until we have more photos */}
          <OrgsSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
