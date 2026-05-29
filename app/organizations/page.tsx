"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { categories, orgs, type Org } from "@/lib/orgs";

export default function OrganizationsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [beginner, setBeginner] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo<Org[]>(() => {
    return orgs.filter((o) => {
      if (active !== "All" && o.category !== active) return false;
      if (beginner && !o.beginnerFriendly) return false;
      if (query && !`${o.name} ${o.blurb}`.toLowerCase().includes(query.toLowerCase()))
        return false;
      return true;
    });
  }, [active, beginner, query]);

  return (
    <>
      <Nav />
      <main className="pt-24 md:pt-32">
        <section className="wrap">
          <div className="border-b border-rule/60 pb-3 flex items-center justify-between">
            <div className="eyebrow">A field guide</div>
            <div className="eyebrow tabular hidden sm:block">
              {filtered.length} of {orgs.length} listed
            </div>
            <div className="eyebrow">Updated weekly</div>
          </div>

          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mt-16 md:mt-24">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow mb-4">Organizations</div>
              <p className="serif-italic text-2xl text-ink-2 leading-snug max-w-[16ch]">
                A curated guide
                <br />
                to the rooms.
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="serif text-[12vw] md:text-[7vw] leading-[0.96] tracking-[-0.024em] max-w-[18ch]">
                Where should
                <br />
                <span className="serif-italic">you start?</span>
              </h1>
              <p className="mt-10 max-w-[60ch] text-[1.05rem] leading-[1.65] text-ink-2">
                We picked twenty-three engineering organizations our mentors
                recommend by name. Some are workshops; some are families; some
                are entire little subcultures. Filter by what you want, or
                ignore the filters — half the fun is wandering in.
              </p>
            </div>
          </div>
        </section>

        {/* Toolbar */}
        <section className="wrap mt-20 md:mt-24">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between border-y border-rule/60 py-5">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-3 py-1.5 rounded-full border text-[0.85rem] tracking-tight transition-colors ${
                    active === c
                      ? "bg-ink text-paper border-ink"
                      : "border-rule/80 text-ink-2 hover:border-ink hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
              <button
                onClick={() => setBeginner(!beginner)}
                className={`px-3 py-1.5 rounded-full border text-[0.85rem] tracking-tight transition-colors flex items-center gap-2 ${
                  beginner
                    ? "bg-gold/15 border-gold text-ink"
                    : "border-rule/80 text-ink-2 hover:border-ink"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                Beginner-friendly
              </button>
            </div>

            <label className="flex items-center gap-3 border border-rule/80 rounded-full px-4 py-2 lg:w-72 focus-within:border-ink transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.1" fill="none" /><path d="m9.5 9.5 3 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" /></svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or interest"
                className="flex-1 bg-transparent outline-none text-[0.92rem] placeholder:text-muted"
              />
            </label>
          </div>
        </section>

        {/* Featured */}
        <section className="wrap mt-16 md:mt-20">
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-end">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow">Featured this quarter</div>
            </div>
            <div className="col-span-12 md:col-span-9 mt-3 md:mt-0">
              <p className="serif text-3xl md:text-[2.4rem] leading-[1.15] tracking-tight max-w-[32ch]">
                <span className="serif-italic">Bruin Racing</span> is recruiting first-years
                this week — no welding experience required, just a willingness to learn how
                a shop hums.
              </p>
            </div>
          </div>
        </section>

        {/* List */}
        <section className="wrap mt-12 md:mt-16">
          {filtered.length === 0 ? (
            <p className="serif-italic text-2xl text-muted py-20">
              Nothing here matches yet. Try a different filter — or stop by our
              Thursday meet-and-greet.
            </p>
          ) : (
            <ul className="divide-y divide-rule/60 border-y border-rule/60">
              {filtered.map((o, i) => (
                <li key={o.name} className="group">
                  <a
                    href={o.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-12 gap-4 items-baseline py-7 transition-colors"
                  >
                    <span className="col-span-1 hidden md:block eyebrow tabular text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-7 md:col-span-3 serif text-2xl md:text-[1.7rem] leading-none tracking-tight text-ink-2 group-hover:text-accent transition-colors">
                      {o.name}
                      {o.beginnerFriendly && (
                        <span className="ml-2 align-middle inline-block w-1.5 h-1.5 rounded-full bg-gold" />
                      )}
                    </span>
                    <span className="hidden md:block md:col-span-2 eyebrow text-muted">
                      {o.category}
                    </span>
                    <p className="col-span-12 md:col-span-4 mt-2 md:mt-0 text-[0.95rem] leading-relaxed text-muted max-w-[48ch]">
                      {o.blurb}
                    </p>
                    <span className="hidden md:block md:col-span-2 text-[0.85rem] text-ink-2 leading-snug text-right">
                      {o.meets}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Where should I start */}
        <section className="wrap mt-32 md:mt-40">
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
            <div className="col-span-12 md:col-span-4">
              <div className="eyebrow mb-4">Still not sure?</div>
              <h2 className="serif text-5xl md:text-6xl leading-[1.02] tracking-tight max-w-[14ch]">
                Three doors to <span className="serif-italic">walk through.</span>
              </h2>
            </div>

            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-0">
              {[
                {
                  k: "If you’re a freshman",
                  v: "Start with ACM or SWE. They greet you the loudest, and they’ll introduce you to the rest.",
                },
                {
                  k: "If you want to build",
                  v: "Bruin Racing or Rocket Project. Walk into a shop. Ask what you can hand someone.",
                },
                {
                  k: "If you want to belong",
                  v: "NSBE, SHPE, or SWE — depending on the room you want to be in.",
                },
              ].map((c) => (
                <div key={c.k} className="border-t border-ink/85 pt-5">
                  <div className="eyebrow mb-3">{c.k}</div>
                  <p className="serif text-xl leading-[1.3] text-ink-2 max-w-[22ch]">
                    {c.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
