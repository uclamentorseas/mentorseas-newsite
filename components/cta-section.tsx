import Link from "next/link";

export function CtaSection() {
  return (
    <section className="relative pt-40 md:pt-56">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-4">Coda</div>
            <div className="serif text-7xl md:text-8xl leading-none tabular text-ink/80">05</div>
            <div className="rule mt-6 max-w-[3rem]" />
          </div>

          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <p className="eyebrow mb-8">A note before you go</p>
            <h2 className="serif text-[12vw] md:text-[6.4vw] xl:text-[5.4vw] leading-[0.98] tracking-[-0.022em] text-ink max-w-[20ch]">
              The best advice usually comes from someone 
              <br />
              <span className="text-accent">who was once in your shoes.</span>
            </h2>

            <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/signup"
                className="group relative inline-flex items-center gap-3 rounded-full bg-ink text-paper pl-6 pr-5 py-4 text-[1rem] tracking-tight transition-all duration-500 hover:bg-accent overflow-hidden"
              >
                <span className="relative z-10">Apply for a mentor</span>
                <span className="relative z-10 grid place-items-center w-8 h-8 rounded-full bg-paper/15 transition-transform duration-500 group-hover:translate-x-1">
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path d="M2 6h7m-2.5-3L9 6 6.5 9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/signup?role=mentor"
                className="link-quiet text-[0.95rem] text-ink-2 inline-flex items-center gap-2"
              >
                Or become a mentor yourself
                <span aria-hidden>→</span>
              </Link>
            </div>

            <p className="mt-12 max-w-[44ch] text-[0.95rem] text-muted leading-relaxed">
              Applications take six minutes. Pairings take a week. Whether you
              show up ready, terrified, or somewhere in between — there&apos;s
              already someone here, waiting to say &ldquo;yeah, same.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
