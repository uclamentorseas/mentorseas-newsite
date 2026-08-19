"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Member } from "@/lib/team";
import { useCoarsePointer, useReducedMotion } from "@/lib/use-pointer";

/** Max tilt in degrees at the corners of a card. */
const TILT = 7;

/* Back-of-card colours, cycled by index so a grid never shows two of the
   same back side by side. Gold is a fill behind dark text only — never
   the other way round. */
const BACKS = [
  { bg: "var(--color-blue-deep)", fg: "#ffffff" },
  { bg: "var(--color-blue)", fg: "#ffffff" },
  { bg: "var(--color-gold)", fg: "var(--color-blue-deep)" },
  { bg: "var(--color-blue-mid)", fg: "#ffffff" },
];

export function MentorCard({
  member,
  index,
  size = "default",
}: {
  member: Member;
  index: number;
  size?: "default" | "large";
}) {
  const isLarge = size === "large";
  const aspect = isLarge ? "aspect-[5/6]" : "aspect-[4/5]";
  const back = BACKS[index % BACKS.length];

  const ref = useRef<HTMLDivElement | null>(null);
  const coarse = useCoarsePointer();
  const reduced = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);

  const interactive = !coarse && !reduced;

  const onMove = (e: React.PointerEvent) => {
    if (!interactive) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * TILT * 2, y: px * TILT * 2 });
  };

  const reset = () => {
    setTilt({ x: 0, y: 0 });
    setFlipped(false);
  };

  return (
    <div>
      <div
        ref={ref}
        className="relative"
        style={{ perspective: "1100px" }}
        onPointerMove={onMove}
        onPointerEnter={() => interactive && setFlipped(true)}
        onPointerLeave={reset}
      >
        <div
          className={`relative ${aspect} w-full`}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${tilt.x}deg) rotateY(${
              tilt.y + (flipped ? 180 : 0)
            }deg)`,
            transition: reduced
              ? "none"
              : "transform 620ms cubic-bezier(.22,.61,.36,1)",
          }}
        >
          {/* Front — the portrait */}
          <Link
            href={`/team/${member.slug}`}
            /* Not .photo — that class sets position:relative and, being
               unlayered CSS, overrides Tailwind's `absolute`, collapsing
               this face to zero height. */
            className="absolute inset-0 block overflow-hidden rounded-xl border border-line bg-blue-pale shadow-[0_18px_40px_-28px_rgba(0,59,92,0.45)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}`}
              fill
              sizes={
                isLarge
                  ? "(min-width:768px) 50vw, 100vw"
                  : "(min-width:768px) 25vw, 100vw"
              }
              className="object-cover"
            />
          </Link>

          {/* Back — the fun fact */}
          <Link
            href={`/team/${member.slug}`}
            className="absolute inset-0 flex flex-col justify-center rounded-xl p-6 shadow-[0_18px_40px_-28px_rgba(0,59,92,0.45)]"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: back.bg,
              color: back.fg,
            }}
          >
            <div className="label" style={{ color: back.fg, opacity: 0.75 }}>
              Fun fact
            </div>
            <p
              className={`mt-3 display leading-[1.15] ${
                isLarge ? "text-2xl" : "text-[1.15rem]"
              }`}
              style={{ color: back.fg }}
            >
              {member.funFact}
            </p>
            <span
              className="mt-auto pt-4 inline-flex items-center gap-2 label"
              style={{ color: back.fg }}
            >
              Read more
              <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
                <path
                  d="M2 5.5h6.5M5.5 2.5l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Caption stays put — it shouldn't flip with the card */}
      <div
        className={`mt-4 flex items-baseline justify-between gap-3 ${
          isLarge ? "md:mt-5" : ""
        }`}
      >
        <div>
          <h3
            className={`display leading-[1.08] ${
              isLarge ? "text-3xl md:text-[2.2rem]" : "text-xl md:text-[1.35rem]"
            }`}
          >
            {member.name}
          </h3>
          <p className="mt-1.5 text-[0.9rem] text-blue-deep/60">{member.role}</p>
        </div>
      </div>
    </div>
  );
}
