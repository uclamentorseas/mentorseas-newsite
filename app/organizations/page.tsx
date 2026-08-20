"use client";

import { useMemo, useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CATEGORIES, MAJORS, orgs, type Major, type Org } from "@/lib/orgs";

export default function OrganizationsPage() {
  const [active, setActive] = useState<"All" | (typeof CATEGORIES)[number]>(
    "All",
  );
  const [major, setMajor] = useState<"All" | Major>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo<Org[]>(() => {
    return orgs.filter((o) => {
      if (active !== "All" && !o.categories.includes(active)) return false;
      // An empty majors list means open to everyone, so it survives any filter.
      if (major !== "All" && o.majors.length && !o.majors.includes(major))
        return false;
      if (
        query &&
        !`${o.name} ${o.blurb}`.toLowerCase().includes(query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [active, major, query]);

  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-32 pb-24">
        <section className="wrap">
          <span className="label">Organizations</span>

          <div className="mt-6 grid grid-cols-12 gap-x-0 md:gap-x-10 gap-y-5">
            <h1 className="col-span-12 md:col-span-7 display text-[9vw] md:text-[3.6vw] xl:text-[3.2rem]">
              Engineering organizations at UCLA
            </h1>
          </div>
        </section>

        {/* Toolbar */}
        <section className="wrap mt-12">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between border-y border-line py-4">
            <div className="flex flex-wrap gap-2">
              {(["All", ...CATEGORIES] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  aria-pressed={active === c}
                  className={`rounded-full border px-3.5 py-1.5 text-[0.88rem] transition-colors ${
                    active === c
                      ? "bg-blue-deep text-white border-blue-deep"
                      : "border-line text-blue-deep/80 hover:border-blue"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
              <label className="flex items-center gap-2 rounded-full border border-line px-4 py-2 focus-within:border-blue transition-colors">
                <span className="label text-blue-deep/45">Major</span>
                <select
                  value={major}
                  onChange={(e) => setMajor(e.target.value as "All" | Major)}
                  className="flex-1 bg-transparent outline-none text-[0.92rem] cursor-pointer"
                >
                  <option value="All">All majors</option>
                  {MAJORS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex items-center gap-2.5 rounded-full border border-line px-4 py-2 sm:w-56 focus-within:border-blue transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                  <circle
                    cx="6"
                    cy="6"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <path
                    d="m9.5 9.5 3 3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search"
                  className="flex-1 bg-transparent outline-none text-[0.92rem] placeholder:text-blue-deep/40"
                />
              </label>
            </div>
          </div>

          <p className="mt-3 text-[0.85rem] text-blue-deep/50 tabular">
            {filtered.length} of {orgs.length}
          </p>
        </section>

        {/* List */}
        <section className="wrap mt-6">
          {filtered.length === 0 ? (
            <p className="display text-[1.4rem] text-blue-deep/50 py-20">
              Nothing matches. Try a different filter.
            </p>
          ) : (
            <ul className="divide-y divide-line border-y border-line">
              {filtered.map((o) => {
                const row = (
                  <>
                    <span className="col-span-12 md:col-span-4 display text-[1.25rem] leading-tight text-blue-deep group-hover:text-blue transition-colors">
                      {o.name}
                    </span>

                    <div className="col-span-12 md:col-span-5">
                      {/* Clamped so rows stay a uniform height — blurb lengths
                          in lib/orgs.ts range from one line to four. */}
                      <p className="text-[0.95rem] leading-[1.5] text-blue-deep/70 line-clamp-2">
                        {o.blurb}
                      </p>
                      <p className="mt-1.5 text-[0.8rem] text-blue-deep/45">
                        {o.majors.length
                          ? o.majors.join(" · ")
                          : "Open to all majors"}
                      </p>
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-wrap gap-1.5 md:justify-end">
                      {o.categories.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-line px-2.5 py-0.5 label text-blue-deep/50"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </>
                );
                const cls =
                  "group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline py-5 transition-colors";

                return (
                  <li key={o.name}>
                    {o.website ? (
                      <a
                        href={o.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cls}
                      >
                        {row}
                      </a>
                    ) : (
                      /* No public site — render the row without a dead link. */
                      <div className={cls}>{row}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
