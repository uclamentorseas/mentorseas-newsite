"use client";

import Image from "next/image";
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

  const baseText = overDarkHero ? "text-white" : "text-blue-deep";
  const mutedText = overDarkHero ? "text-white/85" : "text-blue-deep/75";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-[backdrop-filter,background,box-shadow] duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md shadow-[0_1px_0_var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-18 md:h-20 items-center justify-between">
        <Link href="/" className={`flex items-center gap-2.5 ${baseText}`}>
          {/* Both marks render and crossfade on the same grid cell: swapping
              `src` instead would fetch the second file mid-scroll and flash. */}
          <span className="relative block w-9 h-9 md:w-10 md:h-10 shrink-0">
            <Image
              src="/mentorseas-mark-on-dark.png"
              alt=""
              fill
              priority
              sizes="40px"
              className={`object-contain transition-opacity duration-300 ${
                overDarkHero ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src="/mentorseas-mark-on-light.png"
              alt=""
              fill
              priority
              sizes="40px"
              className={`object-contain transition-opacity duration-300 ${
                overDarkHero ? "opacity-0" : "opacity-100"
              }`}
            />
          </span>
          <span className="display text-2xl text-current!">
            mentor
            <span className={overDarkHero ? "text-gold" : "text-blue"}>
              SEAS
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`link-quiet text-[0.95rem] ${mutedText} hover:${baseText}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/find-a-mentor"
            className={`btn text-[0.92rem] py-2.5 px-5 ${
              overDarkHero ? "btn-on-dark" : "btn-primary"
            }`}
          >
            Find your mentor
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label="menu"
        >
          <span
            className={`block h-0.5 w-5 ${
              overDarkHero ? "bg-white" : "bg-blue-deep"
            } transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 ${
              overDarkHero ? "bg-white" : "bg-blue-deep"
            } transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-400 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="wrap pb-7 pt-2 flex flex-col gap-1 bg-surface/95 backdrop-blur-md border-b border-line">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display text-2xl py-2.5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/find-a-mentor"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 justify-center"
          >
            Find your mentor
          </Link>
        </div>
      </div>
    </header>
  );
}
