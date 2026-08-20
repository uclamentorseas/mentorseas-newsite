import Link from "next/link";
import { featured, orgs } from "@/lib/orgs";

export function OrgsSection() {
  return (
    <section id="organizations" className="py-24 md:py-32">
      <div className="wrap">
        <div className="flex items-center gap-4">
          <span className="display text-2xl text-blue/40 tabular">03</span>
          <span className="label">Organizations</span>
        </div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[8vw] md:text-[3.4vw] xl:text-[3rem] max-w-[16ch]">
            {orgs.length} engineering organizations,
            <br />
            one of them yours.
          </h2>
          <Link href="/organizations" className="btn btn-ghost">
            See all {orgs.length}
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

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {featured.map((o) => (
            <li key={o.name}>
              <Link
                href="/organizations"
                className="card group block p-5 h-full transition-colors hover:border-blue"
              >
                <div className="display text-[1.15rem] leading-tight group-hover:text-blue transition-colors">
                  {o.name}
                </div>
                <div className="mt-2 text-[0.85rem] text-blue-deep/60">
                  {o.categories[0]}
                </div>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
