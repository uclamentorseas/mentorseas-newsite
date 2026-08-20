"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-pointer";

const steps = [
  {
    n: "1",
    label: "Match",
    title: "Fill out one form.",
    body: "Five minutes to register yourself.",
    image: "/ucla2.jpg",
  },
  {
    n: "2",
    label: "Meet",
    title: "Engineering Welcome Day.",
    body: "Meet your mentor in person, early fall.",
    image: "/ucla1.jpg",
  },
  {
    n: "3",
    label: "Stay in touch",
    title: "All year, as needed.",
    body: "Classes, labs, internships — reach out whenever. They've been there.",
    image: "/ucla3.jpg",
  },
];

export function JourneySection() {
  const reduced = useReducedMotion();

  return (
    <section id="journey" className="band py-24 md:py-32">
      <div className="wrap">
        <div className="flex items-center gap-4">
          <span className="display text-2xl text-blue/40 tabular">02</span>
          <span className="label">How it works</span>
        </div>

        <h2 className="mt-8 display text-[8vw] md:text-[3.4vw] xl:text-[3rem] max-w-[16ch]">
          Three steps, one quarter.
        </h2>

        {/* Desktop gets the scroll-linked rail; everything else gets the
            plain grid, which is also the reduced-motion version. */}
        <div className="hidden md:block">
          {reduced ? <StepGrid /> : <ScrollRail />}
        </div>
        <div className="md:hidden">
          <StepGrid />
        </div>
      </div>
    </section>
  );
}

/**
 * Sticky image on the left, steps on the right. A pivot line 42% down the
 * viewport decides which step you're "on"; progress interpolates
 * continuously between step indices so the image crossfade and the parallax
 * nudge track your actual scroll rather than snapping at thresholds.
 */
function ScrollRail() {
  const [progress, setProgress] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const pivot = window.innerHeight * 0.42;
      const centers = refs.current.map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return r.top + r.height / 2;
      });

      let next = 0;
      const first = centers[0];
      const last = centers[centers.length - 1];
      if (first == null || last == null) return;

      if (first >= pivot) {
        next = 0;
      } else if (last <= pivot) {
        next = centers.length - 1;
      } else {
        for (let i = 0; i < centers.length - 1; i++) {
          const a = centers[i];
          const b = centers[i + 1];
          if (a == null || b == null) continue;
          if (a <= pivot && b >= pivot) {
            const span = b - a;
            next = span > 0 ? i + (pivot - a) / span : i;
            break;
          }
        }
      }

      setProgress(next);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const active = Math.round(progress);

  return (
    <div className="mt-14 grid grid-cols-12 gap-x-10">
      {/* Image rail */}
      <div className="col-span-5">
        <div
          className="sticky top-28 will-change-transform"
          style={{ transform: `translate3d(0, ${progress * 56}px, 0)` }}
        >
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-line bg-blue-pale">
            {steps.map((s, i) => (
              <Image
                key={s.image}
                src={s.image}
                alt=""
                fill
                sizes="40vw"
                className={`object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-1.5">
              {steps.map((s, i) => (
                <span
                  key={s.n}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === active ? "bg-blue w-10" : "bg-line w-5"
                  }`}
                />
              ))}
            </div>
            <span className="label tabular">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(steps.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="col-span-7 space-y-32 lg:space-y-44 pt-4">
        {steps.map((s, i) => (
          <div
            key={s.n}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-40"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-8 h-8 rounded-full bg-gold text-blue-deep display text-[0.95rem]">
                {s.n}
              </span>
              <span className="label">{s.label}</span>
            </div>
            <h3 className="mt-5 display text-[2rem] lg:text-[2.4rem] leading-[1.08] max-w-[16ch]">
              {s.title}
            </h3>
            <p className="mt-3 text-[1.05rem] leading-[1.55] text-blue-deep/70 max-w-[38ch]">
              {s.body}
            </p>
          </div>
        ))}
        {/* Tail room so the last step can reach the pivot line */}
        <div className="h-24" aria-hidden />
      </div>
    </div>
  );
}

/** Static 3-up. Mobile, and the reduced-motion fallback. */
function StepGrid() {
  return (
    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
      {steps.map((s) => (
        <div key={s.n} className="card overflow-hidden flex flex-col">
          <div className="relative aspect-[3/2] bg-blue-pale">
            <Image
              src={s.image}
              alt=""
              fill
              sizes="(min-width:768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 flex-1">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-gold text-blue-deep display text-[0.9rem]">
                {s.n}
              </span>
              <span className="label">{s.label}</span>
            </div>
            <h3 className="mt-4 display text-[1.45rem] leading-[1.15]">
              {s.title}
            </h3>
            <p className="mt-2.5 text-[0.98rem] leading-[1.55] text-blue-deep/70">
              {s.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
