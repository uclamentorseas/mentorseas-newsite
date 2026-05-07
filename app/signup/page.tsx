"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

type Answers = {
  role: "mentee" | "mentor" | "";
  name: string;
  email: string;
  year: string;
  major: string;
  stuck: string;
  vibe: string;
  contact: string;
};

const blank: Answers = {
  role: "",
  name: "",
  email: "",
  year: "",
  major: "",
  stuck: "",
  vibe: "",
  contact: "Anytime is fine",
};

const years = ["First-year", "Sophomore", "Junior", "Senior", "Graduate", "Transfer"];
const majors = [
  "Aerospace",
  "Bioengineering",
  "Chemical",
  "Civil & Environmental",
  "Computer Science",
  "Computer Engineering",
  "Electrical",
  "Materials Science",
  "Mechanical",
  "Undeclared / Pre-Engineering",
  "Other",
];
const vibes = [
  "Someone calm.",
  "Someone who pushes me.",
  "Someone who makes me laugh.",
  "Someone like the older sibling I never had.",
  "Honestly, anyone — I trust you.",
];

function readInitialRole(): Answers["role"] {
  if (typeof window === "undefined") return "";
  const r = new URLSearchParams(window.location.search).get("role");
  return r === "mentor" ? "mentor" : "";
}

export default function SignupPage() {
  const initialRole = readInitialRole();
  const [step, setStep] = useState(initialRole === "mentor" ? 1 : 0);
  const [a, setA] = useState<Answers>({ ...blank, role: initialRole });
  const [submitted, setSubmitted] = useState(false);

  const steps = useMemo(
    () => [
      {
        key: "role",
        prompt: "Are you here to find a mentor, or to become one?",
        valid: () => a.role !== "",
      },
      {
        key: "name",
        prompt: "What should we call you?",
        valid: () => a.name.trim().length > 0,
      },
      {
        key: "email",
        prompt: "And the best UCLA email to reach you at?",
        valid: () => /\S+@\S+\.\S+/.test(a.email),
      },
      {
        key: "year",
        prompt: "Where are you, in time?",
        valid: () => a.year !== "",
      },
      {
        key: "major",
        prompt: "And in major?",
        valid: () => a.major !== "",
      },
      {
        key: "stuck",
        prompt:
          a.role === "mentor"
            ? "What's something you wish someone had told you, freshman year?"
            : "What's a class or moment you're stuck on right now?",
        valid: () => a.stuck.trim().length > 4,
      },
      {
        key: "vibe",
        prompt:
          a.role === "mentor"
            ? "How would you describe the way you mentor?"
            : "Who do you want your mentor to feel like?",
        valid: () => a.vibe !== "",
      },
    ],
    [a],
  );

  const total = steps.length;
  const cur = steps[step];
  const progress = ((step + (submitted ? 1 : 0)) / total) * 100;

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <>
      <Nav />
      <main className="pt-24 md:pt-32 min-h-[calc(100dvh-5rem)]">
        <section className="wrap">
          <div className="border-b border-rule/60 pb-3 flex items-center justify-between">
            <div className="eyebrow">A conversation, not a form</div>
            <div className="eyebrow tabular hidden sm:block">
              {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
            <div className="eyebrow">Six minutes</div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-px bg-rule/40 overflow-hidden">
            <div
              className="h-full bg-ink transition-[width] duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        <section className="wrap mt-16 md:mt-24 pb-32">
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-start">
            <aside className="col-span-12 md:col-span-4 lg:col-span-4">
              <div className="md:sticky md:top-32">
                <div className="eyebrow mb-4">Joining MentorSEAS</div>
                <h1 className="serif text-5xl md:text-6xl leading-[1] tracking-tight">
                  Welcome.
                  <br />
                  <span className="serif-italic text-ink-2">Take your time.</span>
                </h1>
                <p className="mt-8 text-[0.98rem] leading-[1.65] text-ink-2 max-w-[36ch]">
                  We read every application by hand. There&apos;s no scoring.
                  No keyword filter. Just two coordinators with coffee, trying
                  to find someone who&apos;ll get you.
                </p>

                <div className="mt-10 hidden md:block">
                  <div className="relative photo aspect-[4/5] max-w-[280px]">
                    <Image
                      src="/ucla2.jpg"
                      alt=""
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                    <div className="tape -top-2 left-8 -rotate-6" />
                  </div>
                  <p className="mt-3 eyebrow">A study group, March 2026.</p>
                </div>
              </div>
            </aside>

            <div className="col-span-12 md:col-span-8">
              {!submitted ? (
                <div key={step} className="rise">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="eyebrow tabular">Q. {String(step + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 bg-rule/60 max-w-12" />
                    <span className="eyebrow text-muted">{cur.key}</span>
                  </div>

                  <h2 className="serif text-[8vw] md:text-[3.6rem] xl:text-[4rem] leading-[1.05] tracking-[-0.02em] text-ink max-w-[20ch]">
                    {cur.prompt}
                  </h2>

                  <div className="mt-12">
                    {cur.key === "role" && (
                      <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
                        {(
                          [
                            { v: "mentee", t: "Find a mentor", d: "I'm looking for someone a year or two ahead." },
                            { v: "mentor", t: "Become a mentor", d: "I want to be that person for someone." },
                          ] as const
                        ).map((opt) => (
                          <button
                            key={opt.v}
                            onClick={() => setA({ ...a, role: opt.v })}
                            className={`text-left p-5 rounded-2xl border transition-all ${
                              a.role === opt.v
                                ? "border-ink bg-ink text-paper"
                                : "border-rule/80 hover:border-ink"
                            }`}
                          >
                            <div className="serif text-2xl mb-2">{opt.t}</div>
                            <div className={`text-[0.92rem] ${a.role === opt.v ? "text-paper/70" : "text-muted"}`}>
                              {opt.d}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {cur.key === "name" && (
                      <BigInput
                        value={a.name}
                        onChange={(v) => setA({ ...a, name: v })}
                        placeholder="First name is plenty."
                      />
                    )}

                    {cur.key === "email" && (
                      <BigInput
                        value={a.email}
                        onChange={(v) => setA({ ...a, email: v })}
                        placeholder="you@g.ucla.edu"
                        type="email"
                      />
                    )}

                    {cur.key === "year" && (
                      <Pills
                        value={a.year}
                        onChange={(v) => setA({ ...a, year: v })}
                        options={years}
                      />
                    )}

                    {cur.key === "major" && (
                      <Pills
                        value={a.major}
                        onChange={(v) => setA({ ...a, major: v })}
                        options={majors}
                      />
                    )}

                    {cur.key === "stuck" && (
                      <BigTextarea
                        value={a.stuck}
                        onChange={(v) => setA({ ...a, stuck: v })}
                        placeholder={
                          a.role === "mentor"
                            ? "It's fine if it's small. Most of the useful things are."
                            : "It's fine if it's “the whole quarter.” We've heard worse."
                        }
                      />
                    )}

                    {cur.key === "vibe" && (
                      <div className="space-y-2 max-w-xl">
                        {vibes.map((v) => (
                          <button
                            key={v}
                            onClick={() => setA({ ...a, vibe: v })}
                            className={`w-full text-left px-5 py-4 rounded-xl border transition-colors flex items-center gap-3 ${
                              a.vibe === v
                                ? "border-ink bg-paper-3"
                                : "border-rule/80 hover:border-ink"
                            }`}
                          >
                            <span className={`w-2 h-2 rounded-full ${a.vibe === v ? "bg-ink" : "bg-rule"}`} />
                            <span className="serif-italic text-lg">{v}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-14 flex items-center gap-4">
                    {step > 0 && (
                      <button
                        onClick={() => setStep(step - 1)}
                        className="link-quiet text-[0.92rem] text-muted"
                      >
                        ← Back
                      </button>
                    )}
                    <div className="flex-1" />
                    {step < total - 1 ? (
                      <button
                        disabled={!cur.valid()}
                        onClick={() => setStep(step + 1)}
                        className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper pl-5 pr-4 py-3 text-[0.95rem] tracking-tight transition-all hover:bg-accent disabled:bg-rule disabled:text-paper/70 disabled:cursor-not-allowed"
                      >
                        Continue
                        <span className="grid place-items-center w-7 h-7 rounded-full bg-paper/15 transition-transform duration-500 group-enabled:group-hover:translate-x-1">
                          <svg width="11" height="11" viewBox="0 0 11 11"><path d="M2 5.5h6.5M5.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                      </button>
                    ) : (
                      <button
                        disabled={!cur.valid()}
                        onClick={handleSubmit}
                        className="inline-flex items-center gap-3 rounded-full bg-ink text-paper pl-5 pr-4 py-3 text-[0.95rem] hover:bg-accent transition-colors disabled:bg-rule disabled:cursor-not-allowed"
                      >
                        Send it in
                        <span aria-hidden>↗</span>
                      </button>
                    )}
                  </div>

                  <p className="mt-8 text-[0.82rem] text-muted max-w-[48ch]">
                    Press <kbd className="px-1.5 py-0.5 border border-rule rounded text-[0.7rem] font-mono">Enter</kbd>{" "}
                    to continue. Your responses save as you type — close the tab and pick up later.
                  </p>
                </div>
              ) : (
                <div className="rise">
                  <div className="eyebrow mb-6">Thank you, {a.name || "Bruin"}.</div>
                  <h2 className="serif text-[10vw] md:text-[5.4vw] leading-[1] tracking-[-0.02em] text-ink max-w-[18ch]">
                    Your application is in
                    <br />
                    <span className="serif-italic">good hands.</span>
                  </h2>
                  <p className="mt-10 max-w-[50ch] text-[1.05rem] leading-[1.65] text-ink-2">
                    Two of our coordinators will read it this week. Expect a
                    hand-written email from one of them — usually with at least
                    one bad pun. If you don&apos;t see it by next Friday, write
                    us at{" "}
                    <a className="link-quiet" href="mailto:hello@mentorseas.org">
                      hello@mentorseas.org
                    </a>
                    .
                  </p>

                  <div className="mt-12 flex flex-wrap gap-4">
                    <Link
                      href="/organizations"
                      className="link-quiet text-[0.95rem]"
                    >
                      Wander the orgs while you wait →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function BigInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoFocus
      className="w-full max-w-2xl bg-transparent border-b border-rule/80 focus:border-ink outline-none serif text-3xl md:text-4xl pb-3 placeholder:text-muted/60 transition-colors"
    />
  );
}

function BigTextarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoFocus
      rows={4}
      className="w-full max-w-2xl bg-transparent border-b border-rule/80 focus:border-ink outline-none serif text-2xl md:text-[1.7rem] leading-[1.45] pb-3 placeholder:text-muted/60 transition-colors resize-none"
    />
  );
}

function Pills({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <div className="flex flex-wrap gap-2 max-w-2xl">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`px-4 py-2 rounded-full border text-[0.95rem] transition-colors ${
            value === o
              ? "bg-ink text-paper border-ink"
              : "border-rule/80 text-ink-2 hover:border-ink"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
