import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { JourneySection } from "@/components/journey-section";
// import { CommunitySection } from "@/components/community-section";
import { OrgsSection } from "@/components/orgs-section";
import { CtaSection } from "@/components/cta-section";
import { PeekingBruin } from "@/components/fun/bruin";
import { uclaFacts } from "@/lib/ucla-facts";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Zero-height anchor on the hero/about seam. He can't live inside
            <Hero> — that section is overflow-hidden and would crop him. */}
        <div className="relative z-10 h-0">
          <PeekingBruin
            size={112}
            delay={620}
            on="load"
            facts={uclaFacts}
            className="bottom-0 right-8 md:right-40"
          />
        </div>

        <AboutSection />
        <JourneySection />
        {/* <CommunitySection /> — hidden until we have more photos */}
        <OrgsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
