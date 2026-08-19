import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-blue-deep text-white pt-16 pb-10">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="display text-2xl text-white">
              mentor<span className="text-gold">SEAS</span>
            </div>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              Student-run mentorship in the UCLA Samueli School of Engineering
              &amp; Applied Science.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-8">
            <div className="label text-gold mb-4">Visit</div>
            <ul className="space-y-2.5 text-[0.95rem] text-white/80">
              <li><Link className="link-quiet" href="/">Home</Link></li>
              <li><Link className="link-quiet" href="/organizations">Organizations</Link></li>
              <li><Link className="link-quiet" href="/team">Team</Link></li>
              <li><Link className="link-quiet" href="/signup">Join</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="label text-gold mb-4">Reach us</div>
            <ul className="space-y-2.5 text-[0.95rem] text-white/80">
              <li>
                <a className="link-quiet" href="mailto:mentorseas@ucla.edu">
                  mentorseas@ucla.edu
                </a>
              </li>
              <li>
                <a
                  className="link-quiet"
                  href="https://www.instagram.com/mentorseas/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 text-[0.82rem] text-white/55">
          © 2026 mentorSEAS · A student initiative · Westwood, CA
        </div>
      </div>
    </footer>
  );
}
