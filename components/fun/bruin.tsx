"use client";

import { useEffect, useRef, useState } from "react";
import { useCoarsePointer, useReducedMotion } from "@/lib/use-pointer";

/**
 * The Bruin.
 *
 * A deliberately simple geometric bear, built to be replaced by real
 * illustration. The rig only needs three things from any artwork:
 *   #bruin-pupil-l / #bruin-pupil-r — <circle> elements; cx/cy are written
 *                                     directly each frame
 *   #bruin-arm                      — group rotated about 84,88 to wave
 * plus a 120x120 viewBox.
 *
 * Eye tracking runs entirely outside React: a rAF loop eases the pupils
 * toward a target and writes cx/cy with setAttribute. Driving this through
 * component state re-rendered on every pointermove and stuttered against
 * the CSS transition — hence the manual easing here.
 */

export type BruinPose = "peek-up" | "peek-side" | "sit";

/**
 * Where the peek-up artwork bottoms out, as a fraction of the 120-unit
 * viewBox: the paw ellipses sit at cy 76 with ry 9, so the ink stops at 85.
 * Cropping the bear here puts the cut exactly at his paws, which is what
 * makes him read as resting ON an edge rather than hovering above it.
 */
const PEEK_CROP = 85 / 120;

/** How far a pupil may travel from centre, in SVG units. */
const PUPIL_RANGE = 3;
/** Per-frame approach rate. Lower = heavier, smoother eyes. */
const EASE = 0.14;
/** Cursor distance at which the eyes reach full deflection. */
const FALLOFF = 420;

const SKIN = "var(--color-blue-pale)";
const LINE = "var(--color-blue-deep)";
const STROKE = 3;

const EYE_L = { x: 47, y: 45 };
const EYE_R = { x: 73, y: 45 };

export function Bruin({
  pose = "sit",
  size = 120,
  waving = false,
  className = "",
}: {
  pose?: BruinPose;
  size?: number;
  waving?: boolean;
  className?: string;
}) {
  const coarse = useCoarsePointer();
  const reduced = useReducedMotion();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pupilL = useRef<SVGCircleElement | null>(null);
  const pupilR = useRef<SVGCircleElement | null>(null);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    if (coarse || reduced) return;

    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let rect: DOMRect | null = null;
    let raf = 0;

    const measure = () => {
      rect = svgRef.current?.getBoundingClientRect() ?? null;
    };

    const onMove = (e: PointerEvent) => {
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height * 0.4; // eye line, not box centre
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const strength = Math.min(1, dist / FALLOFF);
      target.x = (dx / dist) * PUPIL_RANGE * strength;
      target.y = (dy / dist) * PUPIL_RANGE * strength;
    };

    const tick = () => {
      cur.x += (target.x - cur.x) * EASE;
      cur.y += (target.y - cur.y) * EASE;
      pupilL.current?.setAttribute("cx", String(EYE_L.x + cur.x));
      pupilL.current?.setAttribute("cy", String(EYE_L.y + cur.y));
      pupilR.current?.setAttribute("cx", String(EYE_R.x + cur.x));
      pupilR.current?.setAttribute("cy", String(EYE_R.y + cur.y));
      raf = requestAnimationFrame(tick);
    };

    measure();
    raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [coarse, reduced]);

  // Idle blink. Also the only sign of life on touch devices.
  useEffect(() => {
    if (reduced) return;
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timeout = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 140);
        schedule();
      }, 2600 + Math.random() * 3800);
    };
    schedule();
    return () => clearTimeout(timeout);
  }, [reduced]);

  const armAngle = waving && !reduced ? -32 : 0;

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
      className={className}
      style={{ overflow: "visible" }}
    >
      {/* Body first so the head overlaps it. Only the sitting pose has one;
          when peeking, the body is below the edge and we draw paws instead. */}
      {pose === "sit" && (
        <>
          <ellipse
            cx="60"
            cy="96"
            rx="27"
            ry="24"
            fill={SKIN}
            stroke={LINE}
            strokeWidth={STROKE}
          />
          <g
            id="bruin-arm"
            style={{
              transformOrigin: "84px 88px",
              transform: `rotate(${armAngle}deg)`,
              transition: "transform 280ms cubic-bezier(.34,1.56,.64,1)",
            }}
          >
            <rect
              x="79"
              y="82"
              width="13"
              height="27"
              rx="6.5"
              fill={SKIN}
              stroke={LINE}
              strokeWidth={STROKE}
            />
          </g>
          <rect
            x="28"
            y="82"
            width="13"
            height="27"
            rx="6.5"
            fill={SKIN}
            stroke={LINE}
            strokeWidth={STROKE}
          />
        </>
      )}

      {/* Ears */}
      <circle cx="36" cy="26" r="12" fill={SKIN} stroke={LINE} strokeWidth={STROKE} />
      <circle cx="84" cy="26" r="12" fill={SKIN} stroke={LINE} strokeWidth={STROKE} />
      <circle cx="36" cy="26" r="5.5" fill="var(--color-gold)" />
      <circle cx="84" cy="26" r="5.5" fill="var(--color-gold)" />

      {/* Head */}
      <circle cx="60" cy="48" r="31" fill={SKIN} stroke={LINE} strokeWidth={STROKE} />

      {/* Eyes. Pupils stay mounted through a blink so the rAF loop never
          loses its refs; the lids just cover them. */}
      <g>
        <circle
          ref={pupilL}
          id="bruin-pupil-l"
          cx={EYE_L.x}
          cy={EYE_L.y}
          r="4.4"
          fill={LINE}
          opacity={blink ? 0 : 1}
        />
        <circle
          ref={pupilR}
          id="bruin-pupil-r"
          cx={EYE_R.x}
          cy={EYE_R.y}
          r="4.4"
          fill={LINE}
          opacity={blink ? 0 : 1}
        />
        {blink && (
          <>
            <path
              d="M43 44c2.5 2.5 5.5 2.5 8 0"
              stroke={LINE}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M69 44c2.5 2.5 5.5 2.5 8 0"
              stroke={LINE}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}
      </g>

      {/* Muzzle */}
      <ellipse
        cx="60"
        cy="62"
        rx="15"
        ry="11"
        fill="#fff"
        stroke={LINE}
        strokeWidth="2.4"
      />
      <ellipse cx="60" cy="57" rx="4.6" ry="3.4" fill={LINE} />
      <path
        d="M60 60v3.5m0 0c0 2.6-2.6 3.4-4.2 2.4m4.2-2.4c0 2.6 2.6 3.4 4.2 2.4"
        stroke={LINE}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Peeking paws — hook over whatever edge he's sitting on */}
      {pose !== "sit" && (
        <>
          <ellipse
            cx="27"
            cy="76"
            rx="12"
            ry="9"
            fill={SKIN}
            stroke={LINE}
            strokeWidth={STROKE}
          />
          <ellipse
            cx="93"
            cy="76"
            rx="12"
            ry="9"
            fill={SKIN}
            stroke={LINE}
            strokeWidth={STROKE}
          />
        </>
      )}
    </svg>
  );
}

/**
 * Bruin hooked over the top edge of whatever it's placed in — paws on the
 * rim, head above. Slides up when the section scrolls into view.
 */
export function PeekingBruin({
  size = 96,
  delay = 0,
  on = "in-view",
  facts,
  className = "",
}: {
  /**
   * Lines he says when clicked. Passing them is what makes him interactive —
   * with no facts he stays a decoration and keeps pointer-events off, so he
   * can't swallow clicks meant for whatever sits behind him.
   */
  facts?: string[];
  size?: number;
  /** ms to hold before climbing up, so he doesn't race the hero in. */
  delay?: number;
  /**
   * "load" climbs up as soon as he mounts — right for a bear sitting at the
   * fold, where an observer is unreliable: his own reveal transform shifts
   * him across the root boundary, so intersection can fail to settle.
   * "in-view" waits until he scrolls in, for placements further down.
   */
  on?: "load" | "in-view";
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduced || on !== "load") return;
    // A frame's grace so the browser paints the hidden state first and the
    // transition actually runs, rather than snapping straight to visible.
    // rAF alone isn't enough: it is suspended while the tab is backgrounded,
    // which would strand him hidden for anyone who opens the site in a
    // background tab. The timer fires there too, so whichever lands first wins.
    const raf = requestAnimationFrame(() => setShown(true));
    const timer = setTimeout(() => setShown(true), 120);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [reduced, on]);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || on !== "in-view") return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShown(true),
      { rootMargin: "-60px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, on]);

  // Reduced motion skips the reveal entirely and just shows him in place.
  const visible = reduced || shown;

  const interactive = !!facts?.length;
  const [fact, setFact] = useState<string | null>(null);
  const [nudge, setNudge] = useState(false);
  // Remaining facts in shuffled order. Refilled once exhausted, so you see
  // every fact before any repeats instead of the same one three times running.
  const bag = useRef<string[]>([]);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const speak = () => {
    if (!facts?.length) return;
    if (bag.current.length === 0) {
      const pool = [...facts];
      // Fisher-Yates. Runs only on click, never during render — shuffling in
      // render would differ between server and client and break hydration.
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      // Avoid the new bag opening on the line we just showed.
      if (pool.length > 1 && pool[pool.length - 1] === fact) {
        [pool[0], pool[pool.length - 1]] = [pool[pool.length - 1], pool[0]];
      }
      bag.current = pool;
    }
    setFact(bag.current.pop() ?? null);
    setNudge(true);
    setTimeout(() => setNudge(false), 320);

    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setFact(null), 7000);
  };

  useEffect(
    () => () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    },
    []
  );

  const cropHeight = Math.round(size * PEEK_CROP);

  /* Three nested layers because each owns a different transform: this one
     rises, the next bobs. Sharing one element would make the CSS animation
     and the inline transition overwrite each other. */
  const bear = (
    <div
      style={{
        // 100% of his own height parks him entirely below the crop.
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: reduced
          ? "none"
          : "transform 720ms cubic-bezier(.34,1.5,.64,1)",
        transitionDelay: reduced ? "0ms" : `${delay}ms`,
      }}
    >
      <div className="bruin-bob">
        {/* Hover scale gets its own layer for the same reason the bob does:
            three separate transforms (rise, bob, perk) cannot share one
            element without clobbering each other. */}
        <div className="bruin-perk">
          <Bruin pose="peek-up" size={size} />
        </div>
      </div>
    </div>
  );

  /* The crop window. Its bottom edge IS the line he sits on: everything below
     is clipped, so he rises from behind it peek-a-boo style instead of flying
     up in full view. Height stops at his paws. */
  const cropClass = `block overflow-hidden ${nudge ? "bruin-nudge" : ""}`;
  const cropStyle = { width: size, height: cropHeight };

  return (
    <div
      ref={ref}
      // Positioned box, NOT the clipper — the bubble has to escape the crop.
      className={`pointer-events-none absolute ${className}`}
      style={cropStyle}
    >
      {interactive && fact && (
        <div
          // bottom-full lifts it clear of the crop, which would otherwise
          // clip the bubble at the same seam it clips the bear.
          className="bruin-bubble pointer-events-auto absolute bottom-full right-0 mb-3 w-56 sm:w-64"
          role="status"
          aria-live="polite"
        >
          <div className="card relative p-3.5 text-[0.9rem] leading-[1.45] text-blue-deep/85 shadow-[0_12px_32px_-18px_rgba(0,59,92,0.55)]">
            {fact}
            <span className="bruin-bubble-tail" aria-hidden />
          </div>
        </div>
      )}

      {interactive ? (
        <button
          type="button"
          onClick={speak}
          className={`${cropClass} bruin-poke pointer-events-auto cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold`}
          style={cropStyle}
          aria-label="Poke the Bruin for a UCLA fact"
        >
          {bear}
        </button>
      ) : (
        <div className={cropClass} style={cropStyle}>
          {bear}
        </div>
      )}
    </div>
  );
}
