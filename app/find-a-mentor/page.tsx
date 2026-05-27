import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function FindAMentorPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36 pb-32 bg-paper min-h-screen">
        <div className="wrap">
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow mb-4">Find a mentor</div>
              <div className="rule mt-2 max-w-[3rem]" />
              <p className="mt-4 eyebrow leading-relaxed">
                Nothing to fill out.<br />Just watch your inbox.
              </p>
            </div>

            <div className="col-span-12 md:col-span-9 md:col-start-4">
              <h1 className="serif text-[10vw] md:text-[5.6vw] xl:text-[4.6vw] leading-[0.98] tracking-[-0.02em] text-ink max-w-[18ch]">
                You&apos;ll be paired
                <br />
                <span className="text-accent">automatically.</span>
              </h1>

              <div className="mt-10 max-w-[58ch] space-y-6 text-[1.1rem] leading-[1.7] text-ink-2">
                <p>
                  Every incoming UCLA engineering student is assigned a mentor
                  from their major — someone a year or two ahead who&apos;s
                  walked the same hallways, taken the same midterms, and lived
                  to talk about it.
                </p>
                <p>
                  When pairings go out, you&apos;ll receive an email from{" "}
                  <span className="tech-mono text-ink">
                    mentorseas@ucla.edu
                  </span>{" "}
                  with your mentor&apos;s name, major, and a short note from
                  them. Keep an eye on it — and check your spam folder, just in
                  case.
                </p>
                <p className="text-muted">
                  Questions in the meantime? Reach us at{" "}
                  <a
                    href="mailto:mentorseas@ucla.edu"
                    className="link-quiet text-ink-2"
                  >
                    mentorseas@ucla.edu
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
