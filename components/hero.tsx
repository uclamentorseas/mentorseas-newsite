"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SUBTEXT = "Engineering is easier when someone's been there before.";

const ROYCE_BLUR =
  "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAE/8QAIBAAAgICAgIDAAAAAAAAAAAAAQIDEQAEEyEFEkGR8P/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGREAAgMBAAAAAAAAAAAAAAAAAAISEzEU/9oADAMBAAIRAxEAPwBV2NeWFpYfeRVNGlN3kksXHyyWgsimFfOadLS15Y2EiFg3ZBY9n8MLf8bqBCgiIVewA7UD949D6TWkcP/Z";

export function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col text-paper overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Royce_Hall.jpg"
          alt="Royce Hall at UCLA"
          fill
          priority
          sizes="100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={ROYCE_BLUR}
          className="object-cover"
        />
        {/* Layered overlays for legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-ink/85 via-ink/60 to-ink/90" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/70 via-transparent to-ink/30" />
      </div>

      {/* Top masthead */}
      <div className="wrap pt-24 md:pt-28">
        <div className="flex items-center justify-between border-b border-paper/25 pb-3 rise rise-1">
          <div className="eyebrow !text-paper">UCLA · Samueli — Vol. IV / 2026</div>

          <div className="eyebrow !text-paper">34.0689° N · 118.4452° W</div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="wrap flex-1 flex items-center justify-center pt-16 md:pt-20 pb-16 md:pb-24">
        <div className="w-full flex flex-col items-center text-center">
          {/* Schematic label */}
          <div className="rise rise-2 flex items-center justify-center gap-3 mb-6 md:mb-8 w-full max-w-md">
            <span className="h-px flex-1 bg-accent-soft" />
            <span className="tech-mono text-[0.7rem] tracking-[0.3em] uppercase text-accent-soft">
              MentorSEAS / 001
            </span>
            <span className="h-px flex-1 bg-accent-soft" />
          </div>

          {/* Welcome headline */}
          <h1 className="rise rise-2 tech font-bold text-[9.2vw] sm:text-[10vw] lg:text-[clamp(4rem,8.5vw,8.5rem)] leading-[0.92] tracking-[-0.035em] text-paper">
            Welcome to
            <br />
            <span className="inline-flex items-baseline gap-2 md:gap-5">
              <span className="text-accent">UCLA</span>
              <span>Engineering</span>
              <span className="text-accent -ml-1">!</span>
            </span>
          </h1>

          {/* Typing subtext */}
          <div className="rise rise-3 mt-8 md:mt-10 max-w-[48ch]">
            <p className="tech-mono text-[1.15rem] md:text-[1.4rem] leading-normal text-paper/90">
              <TypedText text={SUBTEXT} speed={32} startDelay={600} />
            </p>
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div className="wrap pb-10">
        <div className="flex items-center justify-between border-t border-paper/25 pt-4 rise rise-5 text-paper/80">
          <div className="hidden md:flex items-center gap-5 lg:gap-6 text-[0.78rem]">
            <span className="eyebrow !text-paper">In this issue</span>
            <a href="#about" className="link-quiet">Who we are</a>
            <span aria-hidden className="text-paper/40">·</span>
            <a href="#journey" className="link-quiet">The process</a>
            <span aria-hidden className="text-paper/40">·</span>
            <a href="#organizations" className="link-quiet">36 organizations</a>
          </div>
          <ScrollCue />
        </div>
      </div>
    </section>
  );
}

function TypedText({
  text,
  speed = 35,
  startDelay = 0,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
}) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOut(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span aria-label={text}>
      <span aria-hidden>{out}</span>
      <span
        aria-hidden
        className="caret"
        style={{ opacity: done ? 0.6 : 1 }}
      />
    </span>
  );
}

function ScrollCue() {
  return (
    <a
      href="#about"
      className="group inline-flex items-center gap-3 text-[0.78rem] text-paper/85"
    >
      <span className="eyebrow !text-paper">Scroll</span>
      <span className="relative grid place-items-center w-9 h-9 rounded-full border border-paper/50 overflow-hidden">
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
