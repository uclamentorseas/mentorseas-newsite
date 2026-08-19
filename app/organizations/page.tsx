"use client";

import { useMemo, useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { categories, orgs, type Org } from "@/lib/orgs";

export default function OrganizationsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo<Org[]>(() => {
    return orgs.filter((o) => {
      if (active !== "All" && o.category !== active) return false;
      if (
        query &&
        !`${o.name} ${o.blurb}`.toLowerCase().includes(query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [active, query]);

  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-32 pb-24">
        <section className="wrap">
          <span className="label">Organizations</span>

          <div className="mt-6 grid grid-cols-12 gap-x-0 md:gap-x-10 gap-y-5">
            <h1 className="col-span-12 md:col-span-7 display text-[9vw] md:text-[3.6vw] xl:text-[3.2rem]">
              Engineering orgs at UCLA
            </h1>
          </div>
        </section>

        {/* Toolbar */}
        <section className="wrap mt-12">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between border-y border-line py-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
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

            <label className="flex items-center gap-2.5 rounded-full border border-line px-4 py-2 lg:w-72 focus-within:border-blue transition-colors">
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
              {filtered.map((o) => (
                <li key={o.name}>
                  <a
                    href={o.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-12 gap-x-6 gap-y-1 items-baseline py-5 transition-colors"
                  >
                    <span className="col-span-12 md:col-span-3 display text-[1.25rem] leading-tight text-blue-deep group-hover:text-blue transition-colors">
                      {o.name}
                    </span>
                    <span className="hidden md:block md:col-span-2 label text-blue-deep/45">
                      {o.category}
                    </span>
                    {/* Clamped so rows stay a uniform height — blurb lengths
                        in lib/orgs.ts range from one line to four. */}
                    <p className="col-span-12 md:col-span-5 text-[0.95rem] leading-[1.5] text-blue-deep/70 line-clamp-2">
                      {o.blurb}
                    </p>
                    <span className="col-span-12 md:col-span-2 text-[0.85rem] text-blue-deep/50 md:text-right">
                      {o.meets}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
