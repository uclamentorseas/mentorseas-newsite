"use client";

import Link from "next/link";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-[backdrop-filter,background] duration-500 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="serif text-xl md:text-[22px] tracking-tight">
            Mentor<span className="serif-italic">SEAS</span>
          </span>
          <span className="hidden md:inline eyebrow text-[0.62rem] text-muted/80">
            UCLA · Engineering
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[0.92rem]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-quiet text-ink-2/85 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <span className="eyebrow tabular">Vol. 04 · ‘26</span>
          <Link
            href="/signup"
            className="group relative inline-flex items-center gap-2 rounded-full border border-ink/85 bg-ink text-paper px-4 py-2 text-[0.82rem] tracking-tight transition-colors hover:bg-accent hover:border-accent"
          >
            <span>Find a mentor</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className="transition-transform duration-500 group-hover:translate-x-0.5"
            >
              <path
                d="M2 6h7m-2.5-3L9 6 6.5 9"
                stroke="currentColor"
                strokeWidth="1.2"
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
          <span className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
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
              className="serif text-3xl py-2 text-ink-2"
            >
              {l.label}
            </Link>
          ))}
          <div className="eyebrow mt-4">Vol. 04 · ‘26</div>
        </div>
      </div>
    </header>
  );
}
