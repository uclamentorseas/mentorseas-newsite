"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-pointer";

/**
 * A handwritten margin note with a stroke that draws itself in when the
 * section scrolls into view. `arrow` points at whatever sits nearby;
 * `circle` loops around a phrase.
 *
 * Under reduced motion the stroke is simply present, no drawing.
 */

const ARROW_PATHS: Record<string, string> = {
  // gentle left-to-right hook ending in an arrowhead
  right: "M4 30 C 40 8, 92 8, 124 26",
  left: "M124 30 C 88 8, 36 8, 4 26",
};

const ARROW_HEADS: Record<string, string> = {
  right: "M124 26 l-11 -5 m11 5 l-4 -11",
  left: "M4 26 l11 -5 m-11 5 l4 -11",
};

export function Annotation({
  children,
  direction = "right",
  className = "",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
}) {
  const reduced = useReducedMotion();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.1, ease: [0.43, 0.13, 0.23, 0.96] as const },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <div className={`select-none ${className}`} aria-hidden>
      <motion.p
        className="handwriting text-blue text-[1.35rem] leading-tight"
        initial={reduced ? false : { opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.p>

      <motion.svg
        width="128"
        height="38"
        viewBox="0 0 128 38"
        fill="none"
        className="text-gold-deep mt-1"
        initial={reduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.path
          d={ARROW_PATHS[direction]}
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          variants={draw}
        />
        <motion.path
          d={ARROW_HEADS[direction]}
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          variants={draw}
          transition={{ delay: 0.7 }}
        />
      </motion.svg>
    </div>
  );
}

/** Loops a hand-drawn ellipse around whatever it wraps. */
export function CircledPhrase({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <span className="relative inline-block">
      {children}
      <motion.svg
        className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+1rem)] text-gold pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        fill="none"
        initial={reduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        aria-hidden
      >
        <motion.path
          // The tail passes back through the start point (104,4) and keeps
          // going to x=145, drifting above the opening stroke — a hand-drawn
          // overshoot rather than a seam. Closing exactly on the start point
          // instead leaves a visible notch at the join.
          d="M104 4 C 168 2, 198 14, 196 30 C 194 48, 140 57, 92 56 C 40 55, 4 46, 5 29 C 6 13, 44 6, 145 2"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: {
                  duration: 1.4,
                  ease: [0.43, 0.13, 0.23, 0.96] as const,
                },
                opacity: { duration: 0.2 },
              },
            },
          }}
        />
      </motion.svg>
    </span>
  );
}
