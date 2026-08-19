"use client";

import { useEffect, useState } from "react";

/**
 * Shared plumbing for the playful layer (bruin, doodles, paw trail).
 *
 * Two guards run through everything here:
 *  - coarse pointer (touch) — there is no cursor to react to, so effects
 *    fall back to idle behaviour rather than freezing in a random pose.
 *  - prefers-reduced-motion — everything holds still.
 */

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** True on touch devices, where hover/cursor effects don't apply. */
export function useCoarsePointer() {
  return useMediaQuery("(pointer: coarse)");
}

export type Point = { x: number; y: number };

/**
 * Cursor position in viewport coordinates, or null when there's no usable
 * pointer. rAF-throttled so a fast mouse can't outpace React.
 */
export function usePointer(): Point | null {
  const coarse = useCoarsePointer();
  const reduced = useReducedMotion();
  const [point, setPoint] = useState<Point | null>(null);

  useEffect(() => {
    if (coarse || reduced) return;

    let raf = 0;
    let latest: Point = { x: 0, y: 0 };

    const flush = () => {
      raf = 0;
      setPoint(latest);
    };

    const onMove = (e: PointerEvent) => {
      latest = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(flush);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [coarse, reduced]);

  // Derived rather than cleared in the effect: a stale coordinate must not
  // survive a switch to touch or reduced-motion.
  return coarse || reduced ? null : point;
}

/** Scroll offset, rAF-throttled. Used for doodle parallax. */
export function useScrollY() {
  const reduced = useReducedMotion();
  const [y, setY] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const flush = () => {
      raf = 0;
      setY(window.scrollY);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(flush);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return y;
}
