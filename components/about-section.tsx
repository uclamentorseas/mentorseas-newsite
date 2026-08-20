import { orgs } from "@/lib/orgs";
import { team } from "@/lib/team";
import { CircledPhrase } from "@/components/fun/annotation";

export function AboutSection() {
  const facts = [
    { n: String(team.length), k: "students run it" },
    { n: String(orgs.length), k: "engineering organizations listed" },
    { n: "1", k: "mentor, yours for the year" },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="wrap">
        <div className="flex items-center gap-4">
          <span className="display text-2xl text-blue/40 tabular">01</span>
          <span className="label">What we do</span>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-x-0 md:gap-x-10 gap-y-8">
          <h2 className="col-span-12 md:col-span-7 display text-[8vw] md:text-[3.4vw] xl:text-[3rem]">
            <CircledPhrase>Every</CircledPhrase>{" "}
            incoming engineer
            <br />
            gets an upperclassman.
          </h2>

          {/* The column is a div, not a p: two paragraphs cannot nest. */}
          <div className="col-span-12 md:col-span-5 md:pt-2">
            <p className="text-[1.08rem] leading-[1.6] text-blue-deep/75">
              mentorSEAS pairs first-years with students in their major who
              remember what the first quarter felt like.
            </p>
            <p className="mt-4 text-[1.08rem] leading-[1.6] text-blue-deep/60">
              By the students, for the students
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
          {facts.map((f) => (
            <div key={f.k} className="bg-surface p-7">
              <div className="display text-5xl text-blue tabular">{f.n}</div>
              <div className="mt-2 text-[0.95rem] text-blue-deep/70">{f.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
