import Link from "next/link";
import { orgs } from "@/lib/orgs";

export function OrgsSection() {
  return (
    <section id="organizations" className="relative pt-32 md:pt-48">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-4">Chapter Three</div>
            <div className="serif text-7xl md:text-8xl leading-none tabular text-ink/80">03</div>
            <div className="rule mt-6 max-w-[3rem]" />
            <p className="mt-4 eyebrow leading-relaxed">A reading list of<br />engineering orgs</p>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2 className="serif text-[10vw] md:text-[5.6vw] xl:text-[4.6vw] leading-[0.98] tracking-[-0.02em] text-ink max-w-[16ch]">
              Thirty-six rooms,
              <br />
              <span className="text-accent">one of them yours.</span>
            </h2>
            <p className="mt-8 max-w-[52ch] text-[1.05rem] leading-[1.65] text-ink-2">
              UCLA Engineering has more student organizations than orientation
              has time for. Here&apos;s a hand-picked, opinionated start —
              ordered by how warmly they greet a freshman who walks in late.
            </p>
          </div>
        </div>

        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 pb-3 border-b border-rule/60 mb-2 eyebrow">
          <div className="col-span-1 hidden md:block">№</div>
          <div className="col-span-7 md:col-span-4">Organization</div>
          <div className="hidden md:block md:col-span-2">Category</div>
          <div className="hidden md:block md:col-span-3">Meets</div>
          <div className="col-span-5 md:col-span-2 text-right">Est.</div>
        </div>

        <ul className="divide-y divide-rule/60">
          {orgs.map((o, i) => (
            <li key={o.name}>
              <Link
                href="/organizations"
                className="group w-full grid grid-cols-12 gap-4 items-baseline py-6 md:py-7 text-left transition-colors"
              >
                <span className="hidden md:block col-span-1 eyebrow tabular text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-7 md:col-span-4 serif text-2xl md:text-[2rem] leading-none tracking-tight text-ink-2 transition-colors group-hover:text-accent">
                  {o.name}
                  {o.beginnerFriendly && (
                    <span className="ml-3 align-middle inline-block w-1.5 h-1.5 rounded-full bg-gold" title="Welcomes beginners" />
                  )}
                </span>
                <span className="hidden md:block md:col-span-2 eyebrow text-muted">
                  {o.category}
                </span>
                <span className="hidden md:block md:col-span-3 text-[0.92rem] text-ink-2/85 leading-snug">
                  {o.meets}
                </span>
                <span className="col-span-5 md:col-span-2 text-right serif text-xl tabular text-muted">
                  {o.founded}
                </span>
                <p className="col-span-12 md:col-span-9 md:col-start-2 mt-2 md:mt-3 text-[0.95rem] leading-relaxed text-muted max-w-[60ch]">
                  {o.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[0.85rem] text-muted">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold align-middle mr-2" />
            Welcomes beginners — no prior experience expected.
          </p>
          <Link
            href="/organizations"
            className="link-quiet inline-flex items-center gap-2 text-[0.95rem]"
          >
            See all 36 organizations
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
