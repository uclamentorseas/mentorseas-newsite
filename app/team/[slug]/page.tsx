import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { findMember, team } from "@/lib/team";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: PageProps<"/team/[slug]">) {
  const { slug } = await props.params;
  const m = findMember(slug);
  if (!m) return { title: "MentorSEAS" };
  return {
    title: `${m.name} — MentorSEAS`,
    description: m.snippet,
  };
}

export default async function MemberPage(props: PageProps<"/team/[slug]">) {
  const { slug } = await props.params;
  const m = findMember(slug);
  if (!m) notFound();

  const idx = team.findIndex((x) => x.slug === slug);
  const next = team[(idx + 1) % team.length];
  const prev = team[(idx - 1 + team.length) % team.length];

  return (
    <>
      <Nav />
      <main className="pt-24 md:pt-32">
        <section className="wrap">
          <div className="border-b border-rule/60 pb-3 flex items-center justify-between text-[0.78rem]">
            <Link href="/team" className="link-quiet eyebrow">
              ← All contributors
            </Link>
            <div className="eyebrow tabular">
              № {String(idx + 1).padStart(2, "0")} / {String(team.length).padStart(2, "0")}
            </div>
            <div className="eyebrow">{m.committee}</div>
          </div>
        </section>

        <section className="wrap mt-16 md:mt-24">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-10 items-start">
            <div className="col-span-12 md:col-span-5">
              <figure className="relative photo aspect-[4/5] shadow-[0_30px_70px_-30px_rgba(26,24,20,0.4)]">
                <Image
                  src={m.image}
                  alt={`Portrait of ${m.name}`}
                  fill
                  priority
                  sizes="(min-width:768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="tape -top-2 left-10 -rotate-6" />
              </figure>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <div className="eyebrow tabular">
                  Fig. {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="eyebrow text-muted">
                  {m.hometown} → Westwood
                </div>
              </figcaption>
            </div>

            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-5">{m.role}</div>
              <h1 className="serif text-[12vw] md:text-[6.4vw] xl:text-[5.2vw] leading-[0.96] tracking-[-0.024em]">
                {m.name}
              </h1>
              <p className="mt-4 serif-italic text-2xl text-ink-2">
                {m.major}
              </p>

              <div className="mt-12">
                <div className="eyebrow mb-3">Mentorship philosophy</div>
                <p className="serif text-[1.6rem] md:text-[2rem] leading-[1.25] text-ink max-w-[28ch]">
                  &ldquo;{m.philosophy}&rdquo;
                </p>
              </div>

              <div className="mt-14 grid grid-cols-12 gap-y-10 md:gap-x-8">
                <div className="col-span-12 md:col-span-7">
                  <div className="eyebrow mb-3">
                    What I wish I knew freshman year
                  </div>
                  <p className="text-[1.02rem] leading-[1.65] text-ink-2">
                    {m.wish}
                  </p>
                </div>
                <div className="col-span-6 md:col-span-5">
                  <div className="eyebrow mb-2">Favorite spot</div>
                  <p className="text-[0.95rem] text-ink-2 leading-snug">
                    {m.spot}
                  </p>

                  <div className="eyebrow mb-2 mt-7">When not on campus</div>
                  <p className="text-[0.95rem] text-ink-2 leading-snug">
                    {m.hobby}
                  </p>
                </div>
              </div>

              <div className="mt-14">
                <Link
                  href="/signup"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper pl-5 pr-4 py-3 text-[0.95rem] hover:bg-accent transition-colors"
                >
                  Ask to be paired with {m.name.split(" ")[0]}
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
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Prev / next */}
        <section className="wrap mt-32 md:mt-40">
          <div className="rule mb-6" />
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-baseline">
            <Link
              href={`/team/${prev.slug}`}
              className="col-span-6 group block"
            >
              <div className="eyebrow text-muted mb-3">← Previous</div>
              <div className="serif text-2xl md:text-3xl leading-tight tracking-tight group-hover:text-accent transition-colors">
                {prev.name}
              </div>
              <div className="eyebrow mt-2 text-muted">{prev.role}</div>
            </Link>
            <Link
              href={`/team/${next.slug}`}
              className="col-span-6 group block text-right"
            >
              <div className="eyebrow text-muted mb-3">Next →</div>
              <div className="serif text-2xl md:text-3xl leading-tight tracking-tight group-hover:text-accent transition-colors">
                {next.name}
              </div>
              <div className="eyebrow mt-2 text-muted">{next.role}</div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
