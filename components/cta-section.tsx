import Link from "next/link";

export function CtaSection() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Upperclassmen — the one that needs an action */}
          <div className="rounded-xl border border-transparent bg-blue-deep text-white p-8 md:p-10 flex flex-col">
            <span className="label text-gold">Upperclassmen</span>
            <h2 className="mt-4 display text-white text-[2rem] md:text-[1.75rem] lg:text-[2.4rem] max-w-[14ch]">
              Become a mentor.
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.55] text-white/80 max-w-[34ch] md:min-h-[3.1rem]">
              One form, one Welcome Day, one first-year who stops feeling lost.
            </p>
            <div className="mt-auto pt-8">
              <Link
                href="/signup"
                className="btn border border-transparent bg-gold text-blue-deep hover:bg-gold-deep"
              >
                Sign up to mentor
              </Link>
            </div>
          </div>

          {/* Incoming students — no action required, so say so */}
          <div className="card p-8 md:p-10 flex flex-col">
            <span className="label">Incoming students</span>
            <h2 className="mt-4 display text-[2rem] md:text-[1.75rem] lg:text-[2.4rem] max-w-[14ch]">
              You&apos;re paired.
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.55] text-blue-deep/70 max-w-[34ch] md:min-h-[3.1rem]">
              Nothing to fill out. Watch your inbox before fall quarter.
            </p>
            <div className="mt-auto pt-8">
              <Link href="/find-a-mentor" className="btn btn-ghost">
                What to expect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
