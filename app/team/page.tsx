import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MentorCard } from "@/components/mentor-card";
import { committees, team } from "@/lib/team";
import { Annotation, CircledPhrase } from "@/components/fun/annotation";

export const metadata = {
  title: "The Team — mentorSEAS",
  description:
    "A president and three committees — the students who keep mentorSEAS running.",
};

export default function TeamPage() {
  const presidents = team.filter((m) => m.committee === "Presidency");

  const facts = [
    { n: String(team.length), k: "students" },
    { n: "3", k: "committees" },
    { n: "0", k: "of us had it figured out" },
  ];

  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-32">
        {/* Masthead */}
        <section className="wrap">
          <span className="label">Meet The Team</span>

          <h1 className="mt-6 display text-[9vw] md:text-[4vw] xl:text-[3.6rem] leading-[1.12] max-w-[20ch]">
            <CircledPhrase>Approachable</CircledPhrase> strangers who
            were once in your shoes.
          </h1>

          <div className="rule-gold mt-8" />

          <p className="mt-8 max-w-[52ch] text-[1.08rem] leading-[1.6] text-blue-deep/75">
            {team.length} students run mentorSEAS — a president and three committees.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
            {facts.map((f) => (
              <div key={f.k} className="bg-surface p-7">
                <div className="display text-5xl text-blue tabular">{f.n}</div>
                <div className="mt-2 text-[0.95rem] text-blue-deep/70">
                  {f.k}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* President */}
        <section className="py-24 md:py-32">
          <div className="wrap">
            <div className="flex items-center gap-4">
              <span className="display text-2xl text-blue/40 tabular">01</span>
              <span className="label">Leadership</span>
            </div>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <h2 className="display text-[8vw] md:text-[3.4vw] xl:text-[3rem] max-w-[16ch]">
                Your president.
              </h2>
              <Annotation direction="left" className="hidden md:block mb-2">
                hover over me!
              </Annotation>
            </div>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-7">
              {presidents.map((m, i) => (
                <MentorCard key={m.slug} member={m} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Committees — alternating bands so the page has a rhythm */}
        {committees.map((c, ci) => {
          const members = team.filter((m) => m.committee === c.key);
          return (
            <section
              key={c.key}
              className={`py-24 md:py-32 ${ci % 2 === 0 ? "band" : ""}`}
            >
              <div className="wrap">
                <div className="flex items-center gap-4">
                  <span className="display text-2xl text-blue/40 tabular">
                    {String(ci + 2).padStart(2, "0")}
                  </span>
                  <span className="label">{c.key}</span>
                </div>

                <h2 className="mt-8 display text-[8vw] md:text-[3.4vw] xl:text-[3rem] max-w-[16ch]">
                  {c.subtitle}
                </h2>

                <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-7">
                  {members.map((m, i) => (
                    <MentorCard key={m.slug} member={m} index={i} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Closing */}
        <section className="pb-24 md:pb-32">
          <div className="wrap">
            <div className="rounded-xl bg-blue-deep text-white p-8 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <span className="label text-gold">A note from the team</span>
                {/* 22ch puts the natural break at the full stop; the nowrap
                    span keeps the closing phrase intact once the column gets
                    narrower than that on mobile. */}
                <h2 className="mt-4 display text-white text-[2rem] md:text-[2.6rem] max-w-[22ch]">
                  Welcome to UCLA Engineering.{" "}
                  <span className="whitespace-nowrap">We've got you.</span>
                </h2>
              </div>
              <Link
                href="/find-a-mentor"
                className="btn bg-gold text-blue-deep hover:bg-gold-deep shrink-0"
              >
                Find your mentor
                <Arrow />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
      <path
        d="M2 6h7m-2.5-3L9 6 6.5 9"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
