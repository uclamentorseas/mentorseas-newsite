import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CampusMap } from "@/components/map/campus-map";
import { categories, categoryMeta, pins } from "@/lib/map";
import { team } from "@/lib/team";

// Unfinished — unlinked from the nav and kept out of search until the
// illustration work is done. Drop the `robots` block and restore the
// nav entry in components/nav.tsx to bring it back.
export const metadata = {
  title: "The Bruin Map — mentorSEAS",
  description:
    "An illustrated guide to South Campus, pinned by the students who actually study there.",
  robots: { index: false, follow: false },
};

const bySlug = new Map(team.map((m) => [m.slug, m]));

export default function MapPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-32 pb-24">
        <section className="wrap">
          <div className="flex items-baseline gap-4">
            <span className="label">The Bruin Map</span>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-x-0 md:gap-x-10 gap-y-6">
            <h1 className="col-span-12 md:col-span-7 display text-[9vw] md:text-[3.6vw] xl:text-[3.2rem]">
              The campus map nobody hands you.
            </h1>
            <p className="col-span-12 md:col-span-5 text-[1.08rem] leading-[1.6] text-blue-deep/75 md:pt-2">
              Every pin is somebody&apos;s actual advice — the floor that&apos;s
              quiet, the printer that works, the food you can reach in forty
              minutes.
            </p>
          </div>

          {/* Honest about what this is, until real spots land */}
          <p className="mt-8 inline-flex items-start gap-2.5 rounded-lg border border-gold-deep/40 bg-gold/10 px-4 py-3 text-[0.9rem] leading-snug text-blue-deep/80 max-w-[70ch]">
            <span aria-hidden>🚧</span>
            <span>
              <b className="font-semibold">Preview with placeholder pins.</b>{" "}
              The layout is diagrammatic and every blurb below is written to
              demonstrate the format — not yet real recommendations.
            </span>
          </p>
        </section>

        <section className="wrap mt-10">
          <CampusMap />
        </section>

        {/* The list is the accessible, no-JS, mobile-friendly version of the
            same data — always rendered, never a fallback bolted on. */}
        <section className="wrap mt-20">
          <h2 className="display text-[6vw] md:text-[2.2rem]">Every spot</h2>
          <p className="lede mt-2 text-blue-deep/70 max-w-[60ch]">
            The same {pins.length} pins as plain text, grouped by what they
            are.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {categories.map((c) => {
              const group = pins.filter((p) => p.category === c);
              if (group.length === 0) return null;
              return (
                <div key={c} className="mb-10 break-inside-avoid">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-line">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ background: categoryMeta[c].color }}
                    />
                    <h3 className="display text-[1.05rem]">
                      {categoryMeta[c].label}
                    </h3>
                    <span className="text-[0.8rem] text-blue-deep/45 tabular ml-auto">
                      {group.length}
                    </span>
                  </div>

                  <ul className="divide-y divide-line">
                    {group.map((p) => {
                      const mentor = p.mentorSlug
                        ? bySlug.get(p.mentorSlug)
                        : undefined;
                      return (
                        <li key={p.id} className="py-4">
                          <div className="flex items-baseline justify-between gap-4">
                            <h4 className="display text-[1rem] leading-tight">
                              {p.title}
                            </h4>
                            {p.building && (
                              <span className="text-[0.78rem] text-blue-deep/45 shrink-0">
                                {p.building}
                              </span>
                            )}
                          </div>
                          <p className="mt-1.5 text-[0.94rem] leading-[1.5] text-blue-deep/75">
                            {p.blurb}
                          </p>
                          {mentor && (
                            <Link
                              href={`/team/${mentor.slug}`}
                              className="link-quiet mt-2 inline-block text-[0.82rem] text-blue"
                            >
                              — {mentor.name}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
