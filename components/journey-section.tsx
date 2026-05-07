"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    n: "I",
    label: "Apply",
    title: "Tell us who you are.",
    body:
      "Five quiet questions, the kind you might actually want to answer. What you're studying, what you're stuck on, what you'd want from someone a year ahead.",
    note: "Application — 6 minutes",
    image: "/ucla2.jpg",
    caption: "Powell Library, 11:47 PM",
  },
  {
    n: "II",
    label: "Match",
    title: "We pair you, by hand.",
    body:
      "Not an algorithm. Two of our coordinators read your application, compare it against our mentors, and pick the one who feels right. We get it wrong sometimes — and we re-pair, no questions asked.",
    note: "About a week of careful reading",
    image: "/ucla3.jpg",
    caption: "Engineering VI courtyard, October",
  },
  {
    n: "III",
    label: "Meet",
    title: "Coffee, then a conversation.",
    body:
      "Your first meeting is on us. After that — a midterm review, a problem set debrief, a question about a research lab, an honest answer about which professors are kind. Whatever you need.",
    note: "Free coffee, indefinite ratio",
    image: "/ucla1.jpg",
    caption: "Kerckhoff coffee house, 8:02 AM",
  },
  {
    n: "IV",
    label: "Belong",
    title: "Find the people behind the people.",
    body:
      "Your mentor knows their friends, who know clubs, who know labs, who know labs that are hiring. Quietly, the campus stops feeling like a brochure and starts feeling like a place you live.",
    note: "By spring, you'll have a study group",
    image: "/ucla-aerial.jpg",
    caption: "Westwood from the Inverted Fountain",
  },
];

export function JourneySection() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const o = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && e.intersectionRatio > 0.4) setActive(i);
          });
        },
        { threshold: [0, 0.4, 0.8], rootMargin: "-30% 0px -30% 0px" },
      );
      o.observe(el);
      return o;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="relative pt-32 md:pt-48">
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
              A four-step joining,
              <br />
              <span className="serif-italic">told slowly.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 md:mt-28 grid grid-cols-12 gap-x-6 md:gap-x-10">
          {/* Left: image rail */}
          <div className="hidden md:block md:col-span-5 md:col-start-1">
            <div className="sticky top-28">
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
                  <span
                    className={`tick-pulse h-1.5 w-1.5 rounded-full bg-accent transition-opacity duration-500 ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
                <h3 className="serif text-4xl md:text-[3.2rem] leading-[1.02] tracking-tight text-ink max-w-[14ch]">
                  {c.title}
                </h3>
                <p className="mt-6 max-w-[44ch] text-[1.05rem] leading-[1.65] text-ink-2">
                  {c.body}
                </p>
                <p className="mt-6 eyebrow text-muted">{c.note}</p>

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
