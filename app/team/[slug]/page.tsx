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
  if (!m) return { title: "mentorSEAS" };
  return {
    title: `${m.name} — mentorSEAS`,
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
      <main className="pt-28 md:pt-32">
        <section className="wrap">
          <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
            <Link
              href="/team"
              className="link-quiet label text-blue-deep/70 hover:text-blue"
            >
              ← Back to the team
            </Link>
            <span className="label">{m.committee}</span>
          </div>
        </section>

        <section className="wrap mt-14 md:mt-20">
          <div className="grid grid-cols-12 gap-x-0 md:gap-x-10 gap-y-10 items-start">
            {/* Portrait */}
            <div className="col-span-12 md:col-span-5">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-line bg-blue-pale">
                <Image
                  src={m.image}
                  alt={`Portrait of ${m.name}`}
                  fill
                  priority
                  sizes="(min-width:768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>

              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 btn btn-ghost w-full justify-center"
                  aria-label={`${m.name} on LinkedIn`}
                >
                  <span
                    aria-hidden
                    className="inline-grid place-items-center w-[20px] h-[20px] rounded-[3px] bg-blue text-white text-[0.62rem] font-bold leading-none pt-[1px]"
                  >
                    in
                  </span>
                  LinkedIn
                </a>
              )}
            </div>

            {/* Details */}
            <div className="col-span-12 md:col-span-7">
              <span className="label">{m.role}</span>

              <h1 className="mt-4 display text-[11vw] md:text-[5vw] xl:text-[4rem] leading-[0.98]">
                {m.name}
              </h1>

              {m.major && (
                <p className="mt-4 text-[1.15rem] text-blue-deep/70">
                  {m.major}
                </p>
              )}

              <div className="rule-gold mt-7" />

              {m.snippet && (
                <p className="mt-7 max-w-[46ch] text-[1.05rem] leading-[1.6] text-blue-deep/75">
                  {m.snippet}
                </p>
              )}

              {/* The quote — the reason anyone lands on this page */}
              <figure className="mt-10 rounded-xl bg-blue-deep text-white p-7 md:p-9">
                <figcaption className="label text-gold">
                  What I wish I knew freshman year
                </figcaption>
                <blockquote className="mt-4 display text-white text-[1.5rem] md:text-[1.9rem] leading-[1.2]">
                  &ldquo;{m.wish}&rdquo;
                </blockquote>
              </figure>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card p-6">
                  <div className="label">Fun fact</div>
                  <p className="mt-3 text-[1rem] leading-[1.55] text-blue-deep/80">
                    {m.funFact}
                  </p>
                </div>
                {m.philosophy && (
                  <div className="card p-6">
                    <div className="label">Philosophy</div>
                    <p className="mt-3 text-[1rem] leading-[1.55] text-blue-deep/80">
                      {m.philosophy}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-10">
                <Link href="/find-a-mentor" className="btn btn-primary">
                  Find your mentor
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
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Prev / next */}
        <section className="wrap mt-24 md:mt-32 pb-24 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/team/${prev.slug}`}
              className="card group p-6 transition-colors hover:border-blue"
            >
              <div className="label">← Previous</div>
              <div className="mt-3 display text-[1.4rem] leading-tight group-hover:text-blue transition-colors">
                {prev.name}
              </div>
              <div className="mt-1.5 text-[0.9rem] text-blue-deep/60">
                {prev.role}
              </div>
            </Link>
            <Link
              href={`/team/${next.slug}`}
              className="card group p-6 transition-colors hover:border-blue sm:text-right"
            >
              <div className="label">Next →</div>
              <div className="mt-3 display text-[1.4rem] leading-tight group-hover:text-blue transition-colors">
                {next.name}
              </div>
              <div className="mt-1.5 text-[0.9rem] text-blue-deep/60">
                {next.role}
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
