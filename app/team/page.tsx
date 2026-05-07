import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MentorCard } from "@/components/mentor-card";
import { committees, team } from "@/lib/team";

export const metadata = {
  title: "The Team — MentorSEAS",
  description:
    "Two co-presidents and three committees — the fourteen students who keep MentorSEAS running.",
};

export default function TeamPage() {
  const presidents = team.filter((m) => m.committee === "Presidency");
  const totalContributors = team.length;

  return (
    <>
      <Nav />
      <main className="pt-24 md:pt-32">
        {/* Masthead */}
        <section className="wrap">
          <div className="border-b border-rule/60 pb-3 flex items-center justify-between rise rise-1">
            <div className="eyebrow">A masthead</div>
            <div className="eyebrow tabular hidden sm:block">
              {totalContributors} contributors · 3 committees
            </div>
            <div className="eyebrow">Spring 2026</div>
          </div>

          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mt-16 md:mt-24">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow mb-4">The Team</div>
              <p className="serif-italic text-2xl text-ink-2 leading-snug max-w-[18ch]">
                The people who keep
                <br />
                the lights on.
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="serif text-[12vw] md:text-[7vw] leading-[0.96] tracking-[-0.024em] max-w-[18ch]">
                Approachable strangers
                <br />
                <span className="serif-italic">who become friends</span> in
                about two coffees<span className="text-accent">.</span>
              </h1>
              <p className="mt-10 max-w-[58ch] text-[1.05rem] leading-[1.65] text-ink-2">
                MentorSEAS is run by fourteen students — two co-presidents and
                three committees. We make pairings, run events, build the
                tools, and answer your DMs at hours we won&apos;t admit to.
                None of us are paid. We&apos;d do this anyway.
              </p>
            </div>
          </div>
        </section>

        {/* Co-Presidents */}
        <section className="wrap mt-32 md:mt-44">
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow mb-4">Editors-in-Chief</div>
              <div className="serif text-7xl md:text-8xl leading-none tabular text-ink/80">
                00
              </div>
              <div className="rule mt-6 max-w-[3rem]" />
              <p className="mt-4 eyebrow leading-relaxed">
                Co-presidents,<br />elected each spring
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="serif text-[10vw] md:text-[5.4vw] xl:text-[4.4vw] leading-[0.98] tracking-[-0.022em] text-ink max-w-[16ch]">
                Two co-presidents,
                <br />
                <span className="serif-italic">no hierarchy.</span>
              </h2>
              <p className="mt-8 max-w-[52ch] text-[1.05rem] leading-[1.65] text-ink-2">
                One holds office hours; one sends the late-night reminders.
                Most weeks, you can&apos;t tell which is which.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-16 md:gap-x-10">
            {presidents.map((m, i) => (
              <div
                key={m.slug}
                className={`col-span-12 md:col-span-6 ${
                  i === 1 ? "md:translate-y-12" : ""
                }`}
              >
                <MentorCard member={m} index={i} size="large" />
              </div>
            ))}
          </div>
        </section>

        {/* Committees */}
        {committees.map((c, ci) => {
          const members = team.filter((m) => m.committee === c.key);
          return (
            <section key={c.key} className="wrap mt-32 md:mt-44">
              <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-12 md:mb-16">
                <div className="col-span-12 md:col-span-3">
                  <div className="eyebrow mb-4">{c.label}</div>
                  <div className="serif text-7xl md:text-8xl leading-none tabular text-ink/80">
                    {String(ci + 1).padStart(2, "0")}
                  </div>
                  <div className="rule mt-6 max-w-[3rem]" />
                  <p className="mt-4 eyebrow leading-relaxed">
                    {members.length} students<br />
                    <span className="text-muted">{c.key}</span>
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h2 className="serif text-[10vw] md:text-[5.4vw] xl:text-[4.4vw] leading-[0.98] tracking-[-0.022em] text-ink max-w-[20ch]">
                    {c.key.split(" & ")[0]}{" "}
                    {c.key.includes(" & ") && (
                      <>
                        &amp;{" "}
                        <span className="serif-italic">
                          {c.key.split(" & ")[1]}
                        </span>
                      </>
                    )}
                    {!c.key.includes(" & ") && (
                      <span className="serif-italic">.</span>
                    )}
                  </h2>
                  <p className="mt-3 serif-italic text-2xl text-ink-2 max-w-[28ch]">
                    {c.subtitle}
                  </p>
                  <p className="mt-6 max-w-[58ch] text-[1.02rem] leading-[1.65] text-ink-2/90">
                    {c.blurb}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14 md:gap-x-7 md:gap-y-20">
                {members.map((m, i) => (
                  <div
                    key={m.slug}
                    className={i % 2 === 1 ? "md:translate-y-10" : ""}
                  >
                    <MentorCard member={m} index={i} />
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Closing */}
        <section className="wrap mt-32 md:mt-44">
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-6">A note from the team</div>
              <p className="serif text-3xl md:text-[2.6rem] leading-[1.18] text-ink max-w-[26ch]">
               Welcome to UCLA Engineering!
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
              <a
                href="/signup"
                className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper pl-5 pr-4 py-3 text-[0.95rem] hover:bg-accent transition-colors"
              >
                Apply for a mentor
                <span className="grid place-items-center w-7 h-7 rounded-full bg-paper/15">
                  <svg width="11" height="11" viewBox="0 0 11 11">
                    <path
                      d="M2 5.5h6.5M5.5 2.5l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
