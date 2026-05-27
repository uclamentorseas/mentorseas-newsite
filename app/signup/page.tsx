import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const MENTOR_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfqhJ3Q_ZhJ7EhQEHHpJOt98bjpPGUSsDY7ano6U0EV-YphRA/viewform?embedded=true";

export default function SignupPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36 pb-24 bg-paper">
        <div className="wrap">
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow mb-4">Become a mentor</div>
              <div className="rule mt-2 max-w-[3rem]" />
              <p className="mt-4 eyebrow leading-relaxed">
                Six minutes.<br />One incoming engineer.
              </p>
            </div>
            <div className="col-span-12 md:col-span-9 md:col-start-4">
              <h1 className="serif text-[10vw] md:text-[5.6vw] xl:text-[4.6vw] leading-[0.98] tracking-[-0.02em] text-ink max-w-[18ch]">
                Sign up to be
                <br />
                <span className="text-accent">a mentor.</span>
              </h1>
              <p className="mt-8 max-w-[52ch] text-[1.05rem] leading-[1.65] text-ink-2">
                Tell us a bit about yourself and we&apos;ll pair you with one
                incoming engineering student from your major.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
            <div className="col-span-12 md:col-span-9 md:col-start-4">
              <div className="rounded-2xl overflow-hidden border border-rule/60 bg-paper-2/40">
                <iframe
                  src={MENTOR_FORM_EMBED_URL}
                  className="w-full"
                  style={{ height: "1600px", border: 0 }}
                  title="Mentor signup form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
