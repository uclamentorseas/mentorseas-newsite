"use client";

import { useEffect, useRef, useState } from "react";
import { usePointer, useReducedMotion, useScrollY } from "@/lib/use-pointer";

/**
 * Floating engineering doodles in the page background.
 *
 * Each doodle has a `depth` (0–1) driving two things: how far it drifts on
 * scroll (parallax) and how strongly it dodges the cursor. Foreground
 * doodles move more, which is what sells the depth.
 *
 * Drawn as stroked line-art so they read as pen sketches rather than
 * clipart. Swap the `d` paths for real illustration whenever you have it.
 */

const REPEL_RADIUS = 170;
const REPEL_STRENGTH = 46;

type Doodle = {
  id: string;
  /** percentage position within the field */
  left: number;
  top: number;
  size: number;
  rotate: number;
  depth: number;
  path: string;
  /** paths that should be closed loops rather than open strokes */
  extra?: string;
};

const DOODLES: Doodle[] = [
  {
    id: "gear",
    left: 6,
    top: 12,
    size: 44,
    rotate: -12,
    depth: 0.9,
    path: "M12 5.5v-3m0 19v-3m6.5-6.5h3m-19 0h3m11.1-4.6 2.1-2.1M5.3 18.7l2.1-2.1m0-9.2L5.3 5.3m13.4 13.4-2.1-2.1",
    extra: "M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z",
  },
  {
    id: "rocket",
    left: 88,
    top: 8,
    size: 40,
    rotate: 18,
    depth: 0.7,
    path: "M12 2.5c3.2 2.4 4.8 6 4.8 9.6L12 17l-4.8-4.9c0-3.6 1.6-7.2 4.8-9.6Z M9 16l-2.4 4.8L11 19m4 -3 2.4 4.8L13 19",
    extra: "M12 9.4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Z",
  },
  {
    id: "boba",
    left: 12,
    top: 68,
    size: 38,
    rotate: 9,
    depth: 1,
    path: "M6.5 7h11l-1.2 13.2a1.6 1.6 0 0 1-1.6 1.4H9.3a1.6 1.6 0 0 1-1.6-1.4L6.5 7Zm-1 0h13M11 7V3.2M11 3.2l4.5-1",
    extra:
      "M9.6 17.4a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3Z M13.4 17.6a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3Z",
  },
  {
    id: "paw",
    left: 82,
    top: 74,
    size: 34,
    rotate: -8,
    depth: 0.85,
    path: "",
    extra:
      "M12 13.4c2.7 0 4.6 1.8 4.6 3.8s-1.6 2.8-4.6 2.8-4.6-.8-4.6-2.8 1.9-3.8 4.6-3.8Z M7 8.4a1.9 2.3 0 1 0 0 4.6 1.9 2.3 0 0 0 0-4.6Z M17 8.4a1.9 2.3 0 1 0 0 4.6 1.9 2.3 0 0 0 0-4.6Z M10 4.6a1.8 2.2 0 1 0 0 4.4 1.8 2.2 0 0 0 0-4.4Z M14 4.6a1.8 2.2 0 1 0 0 4.4 1.8 2.2 0 0 0 0-4.4Z",
  },
  {
    id: "bulb",
    left: 46,
    top: 4,
    size: 32,
    rotate: 6,
    depth: 0.6,
    path: "M9.4 18h5.2m-4.6 2.6h4m-6.6-8.2a5.6 5.6 0 1 1 9.2 0c-1 1.3-1.5 2.2-1.7 3.6H9.5c-.2-1.4-.7-2.3-1.7-3.6Z",
  },
  {
    id: "compass",
    left: 68,
    top: 40,
    size: 36,
    rotate: -16,
    depth: 0.75,
    path: "M12 3.2v3m0 0L6.4 20.4M12 6.2l5.6 14.2M8.6 15h6.8",
    extra: "M12 2a1.3 1.3 0 1 0 0 2.6A1.3 1.3 0 0 0 12 2Z",
  },
  {
    id: "wave",
    left: 30,
    top: 88,
    size: 42,
    rotate: 0,
    depth: 0.95,
    path: "M2 14c2.5-4 5-4 7.5 0s5 4 7.5 0 5-4 5 0",
  },
  {
    id: "plane",
    left: 58,
    top: 82,
    size: 34,
    rotate: 14,
    depth: 0.65,
    path: "M21.5 3 2.5 11.2l7 2.4m12-10.6-6 17.4-3-6.8m9-10.6-9 10.6",
  },
];

export function DoodleField({ className = "" }: { className?: string }) {
  const pointer = usePointer();
  const reduced = useReducedMotion();
  const scrollY = useScrollY();
  const ref = useRef<HTMLDivElement | null>(null);
  const [box, setBox] = useState<DOMRect | null>(null);

  // The field's own position, so cursor distance is measured against the
  // doodle's real location rather than a page-absolute guess.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setBox(el.getBoundingClientRect());
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {DOODLES.map((d) => {
        let dx = 0;
        let dy = 0;

        if (pointer && box && !reduced) {
          const cx = box.left + (box.width * d.left) / 100;
          const cy = box.top + (box.height * d.top) / 100;
          const vx = cx - pointer.x;
          const vy = cy - pointer.y;
          const dist = Math.hypot(vx, vy);
          if (dist < REPEL_RADIUS && dist > 0) {
            // Falls off toward the edge of the radius so doodles ease away
            // rather than snapping.
            const push = (1 - dist / REPEL_RADIUS) ** 2 * REPEL_STRENGTH;
            dx = (vx / dist) * push * d.depth;
            dy = (vy / dist) * push * d.depth;
          }
        }

        const drift = reduced ? 0 : -scrollY * 0.045 * d.depth;

        return (
          <svg
            key={d.id}
            width={d.size}
            height={d.size}
            viewBox="0 0 24 24"
            className="absolute text-blue"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              opacity: 0.32,
              transform: `translate(-50%,-50%) translate(${dx}px, ${
                dy + drift
              }px) rotate(${d.rotate}deg)`,
              transition: reduced
                ? "none"
                : "transform 520ms cubic-bezier(.22,.61,.36,1)",
            }}
          >
            {d.path && (
              <path
                d={d.path}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            )}
            {d.extra && (
              <path
                d={d.extra}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}
