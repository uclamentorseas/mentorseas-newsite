"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/organizations", label: "Organizations" },
  { href: "/team", label: "Team" },
  { href: "/signup", label: "Join" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overDarkHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseText = overDarkHero ? "text-paper" : "text-ink";
  const mutedText = overDarkHero ? "text-paper/80" : "text-ink-2/85";
  const subtleText = overDarkHero ? "text-paper/60" : "text-muted/80";
  const ruleColor = overDarkHero ? "border-paper/35" : "border-ink/85";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-[backdrop-filter,background] duration-500 ${
        scrolled ? "bg-paper/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-18 md:h-22 items-center justify-between">
        <Link href="/" className={`group flex items-baseline gap-3 ${baseText}`}>
          <span className="tech text-2xl md:text-[26px] font-bold tracking-tight uppercase">
            Mentor<span className="text-accent">SEAS</span>
          </span>
          <span className={`hidden md:inline tech-mono text-[0.72rem] tracking-[0.28em] uppercase ${subtleText}`}>
            UCLA · Engineering
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[1rem]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`link-quiet tech-mono uppercase tracking-[0.18em] text-[0.92rem] ${mutedText} hover:${baseText}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <span className={`tech-mono text-[0.78rem] tracking-[0.24em] uppercase tabular ${subtleText}`}>
            Vol. 04 · ‘26
          </span>
          <Link
            href="/find-a-mentor"
            className={`group relative inline-flex items-center gap-2 border ${ruleColor} ${
              overDarkHero ? "bg-paper text-ink" : "bg-ink text-paper"
            } px-5 py-2.5 text-[0.95rem] tracking-tight tech transition-colors hover:bg-accent hover:text-paper hover:border-accent`}
          >
            <span>Find your mentor</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className="transition-transform duration-500 group-hover:translate-x-0.5"
            >
              <path
                d="M2 6h7m-2.5-3L9 6 6.5 9"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label="menu"
        >
          <span className={`block h-px w-5 ${overDarkHero ? "bg-paper" : "bg-ink"} transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 ${overDarkHero ? "bg-paper" : "bg-ink"} transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="wrap pb-8 pt-2 flex flex-col gap-1 bg-paper/95 backdrop-blur-md border-b border-rule/60">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="tech text-3xl font-semibold py-2 text-ink-2 uppercase tracking-tight"
            >
              {l.label}
            </Link>
          ))}
          <div className="tech-mono text-[0.7rem] tracking-[0.24em] uppercase mt-4 text-muted">
            Vol. 04 · ‘26
          </div>
        </div>
      </div>
    </header>
  );
}
