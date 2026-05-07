import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative pt-24 md:pt-40 pb-12 border-t border-rule/60 mt-32 bg-paper-2">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-8">
          {/* Masthead */}
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow mb-6">Colophon</div>
            <h3 className="serif text-5xl md:text-6xl leading-[0.95] tracking-tight">
              Made by Bruins,
              <br />
              <span className="serif-italic">for Bruins.</span>
            </h3>
            <p className="mt-6 max-w-sm text-[0.95rem] text-muted leading-relaxed">
              MentorSEAS is a student-led mentorship organization within the
              UCLA Samueli School of Engineering &amp; Applied Science. We pair
              first- and second-years with upperclassmen who&apos;ve walked the same
              halls, taken the same midterms, and figured a few things out.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-7">
            <div className="eyebrow mb-5">Visit</div>
            <ul className="space-y-2.5 text-[0.95rem]">
              <li><Link className="link-quiet" href="/">Home</Link></li>
              <li><Link className="link-quiet" href="/organizations">Organizations</Link></li>
              <li><Link className="link-quiet" href="/team">Team</Link></li>
              <li><Link className="link-quiet" href="/signup">Join</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="eyebrow mb-5">Reach Us</div>
            <ul className="space-y-2.5 text-[0.95rem]">
              <li><a className="link-quiet" href="mailto:hello@mentorseas.org">hello@mentorseas.org</a></li>
              <li><a className="link-quiet" href="#">Instagram</a></li>
              <li><a className="link-quiet" href="#">LinkedIn</a></li>
              <li><a className="link-quiet" href="#">Discord</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-5">Where</div>
            <p className="text-[0.95rem] leading-relaxed text-ink-2">
              Engineering VI<br />
              404 Westwood Plaza<br />
              Los Angeles, CA 90095
            </p>
            <p className="mt-4 text-[0.85rem] text-muted leading-relaxed">
              We meet on Thursdays at Boelter, second floor — by the chalkboard
              that&apos;s never quite been erased.
            </p>
          </div>
        </div>

        <div className="rule mt-20" />

        <div className="mt-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 text-[0.78rem] text-muted">
          <div className="eyebrow">© MMXXVI MentorSEAS · A student initiative</div>
          <div className="flex items-baseline gap-6">
            <span className="eyebrow tabular">N 34.0689°</span>
            <span className="eyebrow tabular">W 118.4452°</span>
            <span className="eyebrow">Westwood, CA</span>
          </div>
        </div>

        {/* big wordmark */}
        <div className="mt-14 -mb-4 select-none overflow-hidden">
          <div className="serif tracking-[-0.03em] leading-[0.88] text-ink/[0.07] text-[24vw] md:text-[16vw] whitespace-nowrap pr-[0.18em]">
            Mentor<span className="serif-italic">SEAS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
