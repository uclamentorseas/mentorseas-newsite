"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    n: "I",
    label: "Match",
    title: "Two forms, one community.",
    body:
      "Incoming students fill out one Google Form, mentors fill out another — a few quick questions about who you are and what you're hoping for.",
    note: "Sign-up page — Google Forms, ~5 minutes",
    image: "/ucla2.jpg",
    caption: "Janss Steps, 11:47 AM",
  },
  {
    n: "II",
    label: "Meet",
    title: "Engineering Welcome Day.",
    body:
      "Your first hello happens in person. Every mentee meets their mentor at Engineering Welcome Day. You walk in a name on a form and walk out with someone who's been there.",
    note: "Engineering Welcome Day — early fall",
    image: "/ucla1.jpg",
    caption: "Royce Hall, 10:02 AM",
  },
  {
    n: "III",
    label: "Stay in touch",
    title: "An open door, all year.",
    body:
      "After Welcome Day, your mentor is yours. Questions on classes, research labs, career pathways? Reach out whenever you need them. They've been there.",
    note: "Throughout the year — as often as you need",
    image: "/ucla3.jpg",
    caption: "Engineering V, 04:20 PM",
  },
];

export function JourneySection() {
  // Continuous scroll-linked progress through the chapter list (0 → chapters.length - 1).
  // The image stack crossfades smoothly based on this value, so what you see on the
  // left tracks where you actually are on the right.
  const [progress, setProgress] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      // Pivot line: the y-coordinate in the viewport that decides "where am I".
      // 42% from the top sits roughly at the center of the sticky image.
      const pivot = window.innerHeight * 0.42;

      // Compute each chapter's center y relative to the viewport.
      const centers = refs.current.map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return r.top + r.height / 2;
      });

      // Walk the centers and find which two chapters bracket the pivot,
      // then interpolate continuously between their indices.
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
    <section id="journey" className="relative pt-32 md:pt-48 pb-32 md:pb-56">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-3">
            <div className="md:sticky md:top-28">
              <div className="eyebrow mb-4">Chapter Two</div>
              <div className="serif text-7xl md:text-8xl leading-none tabular text-ink/80">
                02
              </div>
              <div className="rule mt-6 max-w-[3rem]" />
              <p className="mt-4 eyebrow leading-relaxed">
                The mentorship<br />experience
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2 className="serif text-[10vw] md:text-[5.6vw] xl:text-[4.6vw] leading-[0.98] tracking-[-0.02em] text-ink max-w-[16ch]">
              A three-step path,
              <br />
              <span className="text-accent">told plainly.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 md:mt-28 grid grid-cols-12 gap-x-6 md:gap-x-10">
          {/* Left: image rail */}
          <div className="hidden md:block md:col-span-5 md:col-start-1">
            <div
              className="sticky top-28 will-change-transform"
              style={{
                transform: `translate3d(0, ${progress * 80}px, 0)`,
              }}
            >
              <div className="relative photo aspect-[4/5]">
                {chapters.map((c, i) => (
                  <Image
                    key={c.image}
                    src={c.image}
                    alt={c.caption}
                    fill
                    sizes="(min-width:768px) 40vw, 100vw"
                    className={`object-cover transition-opacity duration-700 ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/[0.04] pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between text-paper">
                  <div className="eyebrow text-paper/80 backdrop-blur-[2px]">
                    Fig. 0{active + 2}
                  </div>
                  <div className="text-[0.78rem] text-paper/90 max-w-[18ch] text-right">
                    {chapters[active].caption}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-1">
                  {chapters.map((c, i) => (
                    <span
                      key={c.n}
                      className={`h-px transition-all duration-500 ${
                        i === active ? "bg-ink w-12" : "bg-rule/80 w-6"
                      }`}
                    />
                  ))}
                </div>
                <div className="eyebrow tabular">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(chapters.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>

          {/* Right: chapters */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24 md:space-y-40">
            {chapters.map((c, i) => (
              <div
                key={c.n}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={`relative pb-2 transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "md:opacity-40"
                }`}
              >
                <div className="flex items-baseline gap-5 mb-6">
                  <span className="serif text-3xl md:text-4xl text-ink/85 tracking-tight">
                    {c.n}.
                  </span>
                  <span className="eyebrow">{c.label}</span>
                </div>
                <h3 className="serif text-4xl md:text-[3.2rem] leading-[1.02] tracking-tight text-ink max-w-[14ch]">
                  {c.title}
                </h3>
                <p className="mt-6 max-w-[44ch] text-[1.05rem] leading-[1.65] text-ink-2">
                  {c.body}
                </p>
                <p className="mt-6 eyebrow text-muted">{c.note}</p>
                {i === chapters.length - 1 && (
                  <div className="hidden md:block h-40" aria-hidden />
                )}

                {/* Mobile inline image */}
                <div className="md:hidden mt-8 relative photo aspect-[4/3]">
                  <Image
                    src={c.image}
                    alt={c.caption}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
