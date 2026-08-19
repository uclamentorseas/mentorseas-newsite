"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  buildings,
  categories,
  categoryMeta,
  pins,
  type PinCategory,
} from "@/lib/map";
import { team } from "@/lib/team";

const VIEW_W = 1600;
const VIEW_H = 1100;
/** Depth of the fake extrusion on each building block. */
const RISE = 14;

const bySlug = new Map(team.map((m) => [m.slug, m]));

export function CampusMap() {
  const [active, setActive] = useState<Set<PinCategory>>(new Set());
  const [selected, setSelected] = useState<string | null>(null);

  const visible = useMemo(
    () => (active.size === 0 ? pins : pins.filter((p) => active.has(p.category))),
    [active]
  );

  const selectedPin = pins.find((p) => p.id === selected) ?? null;
  const mentor = selectedPin?.mentorSlug
    ? bySlug.get(selectedPin.mentorSlug)
    : undefined;

  const toggle = (c: PinCategory) => {
    setActive((cur) => {
      const next = new Set(cur);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  const isDimmed = (c: PinCategory) => active.size > 0 && !active.has(c);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => {
          const on = active.has(c);
          return (
            <button
              key={c}
              onClick={() => toggle(c)}
              aria-pressed={on}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.88rem] transition-colors ${
                on
                  ? "border-blue-deep bg-blue-deep text-white"
                  : "border-line text-blue-deep/80 hover:border-blue"
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: categoryMeta[c].color }}
              />
              {categoryMeta[c].label}
            </button>
          );
        })}
        {active.size > 0 && (
          <button
            onClick={() => setActive(new Set())}
            className="text-[0.85rem] text-blue-deep/55 underline underline-offset-4 ml-1"
          >
            Clear
          </button>
        )}
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-start">
        {/* ---------- Map ---------- */}
        <div className="relative rounded-xl border border-line bg-surface-2 overflow-hidden">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="w-full h-auto block"
            role="img"
            aria-label="Diagrammatic map of UCLA South Campus showing engineering buildings. Every pin is also listed as text below the map."
          >
            {/* ground */}
            <rect width={VIEW_W} height={VIEW_H} fill="var(--color-surface-2)" />

            {/* Bruin Walk, drawn as a path across the top third */}
            <path
              d="M0 300 C 300 250, 560 210, 900 250 S 1400 300, 1600 270"
              stroke="var(--color-line)"
              strokeWidth="46"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0 300 C 300 250, 560 210, 900 250 S 1400 300, 1600 270"
              stroke="var(--color-surface)"
              strokeWidth="38"
              fill="none"
              strokeLinecap="round"
            />
            <text
              x="120"
              y="292"
              fontSize="19"
              fill="var(--color-blue-deep)"
              opacity=".45"
              fontFamily="var(--font-tech)"
              letterSpacing="3"
            >
              BRUIN WALK
            </text>

            {buildings.map((b) => (
              <g key={b.id}>
                {b.plaza ? (
                  <rect
                    x={b.x}
                    y={b.y}
                    width={b.w}
                    height={b.h}
                    rx="10"
                    fill="var(--color-blue-pale)"
                    stroke="var(--color-line)"
                    strokeWidth="2"
                    strokeDasharray="9 7"
                  />
                ) : (
                  <>
                    {/* extruded side */}
                    <rect
                      x={b.x}
                      y={b.y + RISE}
                      width={b.w}
                      height={b.h}
                      rx="6"
                      fill="var(--color-blue)"
                      opacity=".28"
                    />
                    {/* roof */}
                    <rect
                      x={b.x}
                      y={b.y}
                      width={b.w}
                      height={b.h}
                      rx="6"
                      fill="var(--color-surface)"
                      stroke="var(--color-blue)"
                      strokeWidth="2.5"
                      strokeOpacity=".55"
                    />
                  </>
                )}
                {/* Labels sit at the top edge, not the centre — pins occupy
                    the middle of each block and would cover them. */}
                <text
                  x={b.x + b.w / 2}
                  y={b.y + 30}
                  textAnchor="middle"
                  fontSize="20"
                  fontFamily="var(--font-tech)"
                  fontWeight="600"
                  fill="var(--color-blue-deep)"
                  opacity=".55"
                >
                  {b.name}
                </text>
              </g>
            ))}
          </svg>

          {/* Pins live in HTML on top of the artwork, positioned by
              percentage — so redrawing the map never moves them. */}
          {pins.map((p) => {
            const dim = isDimmed(p.category);
            const isSel = selected === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelected(isSel ? null : p.id)}
                aria-label={`${categoryMeta[p.category].label}: ${p.title}`}
                aria-pressed={isSel}
                className="group absolute grid place-items-center transition-opacity"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  /* 44px touch target regardless of marker size */
                  width: 44,
                  height: 44,
                  transform: "translate(-50%, -50%)",
                  opacity: dim ? 0.22 : 1,
                  zIndex: isSel ? 20 : 10,
                }}
              >
                <span
                  className="block rounded-full ring-2 ring-white transition-transform duration-200 group-hover:scale-125"
                  style={{
                    background: categoryMeta[p.category].color,
                    width: isSel ? 20 : 14,
                    height: isSel ? 20 : 14,
                    boxShadow: "0 2px 6px rgba(0,0,0,.28)",
                  }}
                />
                {isSel && (
                  <span
                    className="absolute rounded-full animate-none"
                    style={{
                      width: 32,
                      height: 32,
                      border: `2px solid ${categoryMeta[p.category].color}`,
                    }}
                  />
                )}
                {/* hover label, desktop only */}
                <span className="pointer-events-none absolute top-full mt-1 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded bg-blue-deep text-white text-[0.72rem] px-2 py-1">
                  {p.title}
                </span>
              </button>
            );
          })}

          <p className="absolute bottom-2 right-3 text-[0.68rem] text-blue-deep/40">
            Diagrammatic — not to scale
          </p>
        </div>

        {/* ---------- Detail panel ---------- */}
        <aside className="card p-5 lg:sticky lg:top-24">
          {selectedPin ? (
            <>
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: categoryMeta[selectedPin.category].color }}
                />
                <span className="label">
                  {categoryMeta[selectedPin.category].label}
                </span>
              </div>
              <h3 className="display text-[1.3rem] mt-3 leading-tight">
                {selectedPin.title}
              </h3>
              {selectedPin.building && (
                <p className="text-[0.85rem] text-blue-deep/55 mt-1">
                  {selectedPin.building}
                </p>
              )}
              <p className="mt-3 text-[0.98rem] leading-[1.55] text-blue-deep/80">
                {selectedPin.blurb}
              </p>

              {mentor && (
                <Link
                  href={`/team/${mentor.slug}`}
                  className="mt-5 pt-4 border-t border-line flex items-center gap-3 group"
                >
                  <span className="relative w-10 h-10 rounded-full overflow-hidden bg-blue-pale shrink-0">
                    <Image
                      src={mentor.image}
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[0.9rem] font-semibold group-hover:text-blue transition-colors">
                      {mentor.name}
                    </span>
                    <span className="block text-[0.78rem] text-blue-deep/55">
                      recommended this
                    </span>
                  </span>
                </Link>
              )}

              <button
                onClick={() => setSelected(null)}
                className="mt-5 text-[0.85rem] text-blue-deep/55 underline underline-offset-4"
              >
                Close
              </button>
            </>
          ) : (
            <>
              <span className="label">Pick a pin</span>
              <p className="mt-3 text-[0.98rem] leading-[1.55] text-blue-deep/70">
                {visible.length} spot{visible.length === 1 ? "" : "s"}{" "}
                on the map, each one somebody&apos;s actual advice. Click one
                to read it.
              </p>
              <ul className="mt-5 pt-4 border-t border-line flex flex-col gap-2.5">
                {categories.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                      style={{ background: categoryMeta[c].color }}
                    />
                    <span className="text-[0.85rem] leading-snug">
                      <b className="font-semibold">{categoryMeta[c].label}</b>
                      <span className="block text-blue-deep/55">
                        {categoryMeta[c].blurb}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
