import Link from "next/link";

export function CtaSection() {
  return (
    <section className="relative pt-40 md:pt-56">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-4">Coda</div>
            <div className="serif text-7xl md:text-8xl leading-none tabular text-ink/80">04</div>
            <div className="rule mt-6 max-w-[3rem]" />
            <p className="mt-4 eyebrow leading-relaxed">Two paths<br />out the door.</p>
          </div>

          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <p className="eyebrow mb-8">A note before you go</p>

            {/* 4a — Mentor recruit */}
            <div>
              <div className="eyebrow text-muted mb-4 tabular">04a · For upperclassmen</div>
              <h2 className="serif text-[12vw] md:text-[6.4vw] xl:text-[5.4vw] leading-[0.98] tracking-[-0.022em] text-ink max-w-[20ch]">
                Ready to make
                <br />
                <span className="text-accent">a difference?</span>
              </h2>

              <div className="mt-12">
                <Link
                  href="/signup"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-ink text-paper pl-6 pr-5 py-4 text-[1rem] tracking-tight transition-all duration-500 hover:bg-accent overflow-hidden"
                >
                  <span className="relative z-10">Sign up to be a mentor now</span>
                  <span className="relative z-10 grid place-items-center w-8 h-8 rounded-full bg-paper/15 transition-transform duration-500 group-hover:translate-x-1">
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path d="M2 6h7m-2.5-3L9 6 6.5 9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Divider between 4a and 4b */}
            <div className="my-20 md:my-28 h-px bg-rule/60 max-w-md" />

            {/* 4b — Incoming students */}
            <div>
              <div className="eyebrow text-muted mb-4 tabular">04b · For incoming engineers</div>
              <h2 className="serif text-[10vw] md:text-[5vw] xl:text-[4.2vw] leading-[1.02] tracking-[-0.02em] text-ink max-w-[22ch]">
                Just got here?
                <br />
                <span className="text-accent">Your mentor&apos;s on the way.</span>
              </h2>

              <p className="mt-8 max-w-[52ch] text-[1.02rem] leading-[1.65] text-ink-2">
                Every incoming engineer is paired with an upperclassman from
                their major. No form to fill out on your end — just keep an eye
                on your inbox.
              </p>

              <div className="mt-10">
                <Link
                  href="/find-a-mentor"
                  className="group inline-flex items-center gap-3 text-[0.98rem] tracking-tight text-ink-2 hover:text-ink transition-colors"
                >
                  <span className="border-b border-ink/30 group-hover:border-ink pb-0.5">
                    Read what to expect
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" className="transition-transform duration-500 group-hover:translate-x-1">
                    <path d="M2 6h7m-2.5-3L9 6 6.5 9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
