"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 overflow-hidden">
      {/* Issue masthead */}
      <div className="wrap">
        <div className="flex items-center justify-between border-b border-rule/60 pb-3 rise rise-1">
          <div className="eyebrow">Volume IV — Spring 2026</div>
          <div className="hidden sm:block eyebrow tabular">№ 001 · Westwood, CA</div>
          <div className="eyebrow">An Issue on Belonging</div>
        </div>
      </div>

      <div className="wrap pt-12 md:pt-16 pb-12 md:pb-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-8">
          {/* Left: headline */}
          <div className="col-span-12 lg:col-span-8 relative">
            <div className="rise rise-2 eyebrow mb-6">An essay in three movements</div>
            <h1 className="rise rise-2 serif font-light text-[14vw] sm:text-[10vw] lg:text-[8.6vw] leading-[0.92] tracking-[-0.025em] text-ink">
              Engineering
              <br />
              <span className="inline-flex items-center gap-4">
                is easier when
              </span>
              <br />
              <span className="serif-italic font-normal text-ink-2">someone&apos;s been</span>
              <br />
              <span className="serif-italic font-normal text-ink-2">
                there before<span className="text-accent">.</span>
              </span>
            </h1>

            <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 rise rise-3">
              <p className="col-span-12 md:col-span-7 text-[1.05rem] md:text-[1.12rem] leading-[1.55] text-ink-2 max-w-[40ch]">
                MentorSEAS is a student-run mentorship community inside UCLA
                Samueli — a quiet, careful pairing of upperclassmen with the
                Bruins coming up behind them. No corporate ladder. No five-year
                plan. Just someone who&apos;s been there, an hour a week, and a
                door that doesn&apos;t close.
              </p>

              <div className="col-span-12 md:col-span-5 md:pl-6 md:border-l md:border-rule/60 flex flex-col justify-between gap-6">
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/signup"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper pl-5 pr-4 py-3 text-[0.92rem] tracking-tight transition-all duration-500 hover:bg-accent"
                  >
                    Find your mentor
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-paper/15 transition-transform duration-500 group-hover:rotate-[-30deg]">
                      <svg width="11" height="11" viewBox="0 0 11 11">
                        <path d="M2 5.5h6.5M5.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/team"
                    className="link-quiet inline-flex items-center gap-2 px-2 py-3 text-[0.92rem] text-ink-2"
                  >
                    Meet the mentors
                  </Link>
                </div>

                <dl className="grid grid-cols-3 gap-4 max-w-sm">
                  <div>
                    <dt className="eyebrow">Pairs</dt>
                    <dd className="serif text-3xl mt-1 tabular">142</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Mentors</dt>
                    <dd className="serif text-3xl mt-1 tabular">68</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Majors</dt>
                    <dd className="serif text-3xl mt-1 tabular">11</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Right: photo lockup */}
          <div className="col-span-12 lg:col-span-4 relative">
            <div className="rise rise-3 relative photo aspect-[3/4.2] -mt-2">
              <Image
                src="/ucla1.jpg"
                alt="A UCLA engineering student working at a whiteboard"
                fill
                priority
                sizes="(min-width:1024px) 33vw, 100vw"
                className="object-cover pan"
              />
              <div className="tape -top-2 left-12 -rotate-6" />
              <div className="tape -bottom-2 right-10 rotate-3" />
            </div>
            <figcaption className="rise rise-4 mt-4 flex items-start gap-3 text-[0.78rem] text-muted">
              <span className="eyebrow shrink-0 mt-0.5">Fig. 01</span>
              <span className="leading-relaxed">
                Office hours, Boelter Hall — a sophomore walks a freshman
                through the second half of CS 31. The fluorescent buzz is part
                of the curriculum.
              </span>
            </figcaption>
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div className="wrap pb-10">
        <div className="flex items-center justify-between border-t border-rule/60 pt-4 rise rise-5">
          <div className="hidden md:flex items-center gap-8 text-[0.78rem] text-muted">
            <span className="eyebrow">In this issue</span>
            <span className="link-quiet">The pairing</span>
            <span aria-hidden className="text-rule">·</span>
            <span className="link-quiet">A scrapbook</span>
            <span aria-hidden className="text-rule">·</span>
            <span className="link-quiet">36 organizations</span>
            <span aria-hidden className="text-rule">·</span>
            <span className="link-quiet">In their words</span>
          </div>
          <ScrollCue />
        </div>
      </div>
    </section>
  );
}

function ScrollCue() {
  return (
    <a
      href="#about"
      className="group inline-flex items-center gap-3 text-[0.78rem] text-ink-2"
    >
      <span className="eyebrow">Scroll</span>
      <span className="relative grid place-items-center w-9 h-9 rounded-full border border-rule/80 overflow-hidden">
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          className="transition-transform duration-700 group-hover:translate-y-1"
        >
          <path
            d="M5.5 2v7M2.5 6L5.5 9l3-3"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </a>
  );
}
