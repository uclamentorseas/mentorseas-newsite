import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CircledPhrase } from "@/components/fun/annotation";
import { orgs } from "@/lib/orgs";

export const metadata = {
  title: "Find Your Mentor — mentorSEAS",
  description:
    "Every incoming UCLA engineering student is paired with a mentor from their major. Nothing to fill out — here's what to expect.",
};

const steps = [
  {
    n: "1",
    label: "You do nothing",
    body: "There's no application and no form. Being an incoming SEAS student is the whole requirement.",
  },
  {
    n: "2",
    label: "We match you",
    body: "You get a mentor in your major — someone a year or two ahead who took the same midterms.",
  },
  {
    n: "3",
    label: "Check your inbox",
    body: "Before fall quarter you'll get their name, major, and a short note from them. Check spam too.",
  },
];

export default function FindAMentorPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-32">
        {/* Header */}
        <section className="wrap">
          <span className="label">Incoming students</span>

          <h1 className="mt-6 display text-[9vw] md:text-[4vw] xl:text-[3.6rem] leading-[1.12] max-w-[18ch]">
            You&apos;re paired <CircledPhrase>automatically</CircledPhrase>.
          </h1>

          <div className="rule-gold mt-8" />

          <p className="mt-8 max-w-[50ch] text-[1.08rem] leading-[1.6] text-blue-deep/75">
            Every incoming UCLA engineering student gets a mentor from their
            major — someone who&apos;s walked the same hallways, taken the same
            midterms, and lived to talk about it. You don&apos;t have to sign up
            for anything.
          </p>
        </section>

        {/* How it works */}
        <section className="band mt-16 py-16 md:py-20">
          <div className="wrap">
            <div className="flex items-center gap-4">
              <span className="display text-2xl text-blue/40 tabular">01</span>
              <span className="label">How it works</span>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((s) => (
                <div key={s.n} className="card p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-gold text-blue-deep display text-[0.9rem]">
                      {s.n}
                    </span>
                    <span className="label">{s.label}</span>
                  </div>
                  <p className="mt-4 text-[1rem] leading-[1.55] text-blue-deep/75">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The email */}
        <section className="wrap py-16 md:py-20">
          <div className="flex items-center gap-4">
            <span className="display text-2xl text-blue/40 tabular">02</span>
            <span className="label">Watch for this</span>
          </div>

          <div className="mt-8 grid grid-cols-12 gap-x-0 md:gap-x-10 gap-y-8">
            <h2 className="col-span-12 md:col-span-6 display text-[7vw] md:text-[3vw] xl:text-[2.6rem] max-w-[16ch]">
              One email, before fall quarter.
            </h2>
            <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-2">
              <p className="text-[1.05rem] leading-[1.6] text-blue-deep/75">
                It comes from{" "}
                <span className="font-mono text-blue-deep">
                  mentorseas@ucla.edu
                </span>
                . Add us to your contacts so it doesn&apos;t land in spam — that
                really is the only thing you need to do.
              </p>
              <p className="mt-4 text-[1.05rem] leading-[1.6] text-blue-deep/60">
                Nothing yet? Email us and we&apos;ll sort it out.
              </p>
            </div>
          </div>
        </section>

        {/* Meanwhile */}
        <section className="pb-24 md:pb-32">
          <div className="wrap">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-transparent bg-blue-deep text-white p-8 md:p-10 flex flex-col">
                <span className="label text-gold">In the meantime</span>
                <h2 className="mt-4 display text-white text-[1.8rem] md:text-[2.2rem] max-w-[16ch]">
                  Go find your people.
                </h2>
                <p className="mt-4 text-[1rem] leading-[1.55] text-white/80 max-w-[34ch]">
                  {orgs.length} engineering orgs at UCLA, from race teams to
                  tech clubs.
                </p>
                <div className="mt-8">
                  <Link href="/organizations" className="btn btn-on-dark">
                    Browse organizations
                  </Link>
                </div>
              </div>

              <div className="card p-8 md:p-10 flex flex-col">
                <span className="label">Questions</span>
                <h2 className="mt-4 display text-[1.8rem] md:text-[2.2rem] max-w-[16ch]">
                  Ask a real student.
                </h2>
                <p className="mt-4 text-[1rem] leading-[1.55] text-blue-deep/70 max-w-[34ch]">
                  mentorSEAS is run by undergrads. Someone on the team reads
                  every email.
                </p>
                <div className="mt-8">
                  <a
                    href="mailto:mentorseas@ucla.edu"
                    className="btn btn-ghost"
                  >
                    mentorseas@ucla.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
