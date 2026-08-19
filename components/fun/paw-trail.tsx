"use client";

import { useEffect, useRef, useState } from "react";
import { useCoarsePointer, useReducedMotion } from "@/lib/use-pointer";

/**
 * Gold paw prints that drop behind the cursor and fade out.
 *
 * Prints are only laid down every MIN_DISTANCE px of travel, so slow
 * movement doesn't smear and fast movement still leaves a clean track.
 * Alternating left/right offset gives it a walking gait.
 */

const MIN_DISTANCE = 78;
const LIFETIME = 900;
const MAX_PRINTS = 14;

type Print = { id: number; x: number; y: number; angle: number; side: 1 | -1 };

export function PawTrail() {
  const coarse = useCoarsePointer();
  const reduced = useReducedMotion();
  const [prints, setPrints] = useState<Print[]>([]);
  const last = useRef<{ x: number; y: number } | null>(null);
  const side = useRef<1 | -1>(1);
  const id = useRef(0);

  useEffect(() => {
    if (coarse || reduced) return;

    const onMove = (e: PointerEvent) => {
      const p = { x: e.clientX, y: e.clientY };
      const prev = last.current;
      if (!prev) {
        last.current = p;
        return;
      }
      const dx = p.x - prev.x;
      const dy = p.y - prev.y;
      if (Math.hypot(dx, dy) < MIN_DISTANCE) return;

      last.current = p;
      side.current = side.current === 1 ? -1 : 1;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      const next: Print = {
        id: id.current++,
        x: p.x,
        y: p.y,
        angle,
        side: side.current,
      };

      setPrints((cur) => [...cur, next].slice(-MAX_PRINTS));
      setTimeout(
        () => setPrints((cur) => cur.filter((q) => q.id !== next.id)),
        LIFETIME
      );
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [coarse, reduced]);

  if (coarse || reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50" aria-hidden>
      {prints.map((p) => (
        <svg
          key={p.id}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className="absolute paw-print"
          style={{
            left: p.x,
            top: p.y,
            // offset perpendicular to travel so tracks alternate like a gait
            transform: `translate(-50%,-50%) rotate(${p.angle}deg) translateX(${
              p.side * 7
            }px)`,
          }}
        >
          <ellipse cx="9" cy="11" rx="4.6" ry="4" fill="var(--color-gold)" />
          <circle cx="4" cy="5.5" r="1.9" fill="var(--color-gold)" />
          <circle cx="8" cy="3.6" r="1.9" fill="var(--color-gold)" />
          <circle cx="12.2" cy="4.6" r="1.9" fill="var(--color-gold)" />
        </svg>
      ))}
    </div>
  );
}
