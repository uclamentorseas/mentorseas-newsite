import Image from "next/image";
import Link from "next/link";
import type { Member } from "@/lib/team";

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
  const tilt =
    index % 4 === 0
      ? "md:-rotate-[0.6deg]"
      : index % 4 === 2
      ? "md:rotate-[0.6deg]"
      : "";

  return (
    <Link
      href={`/team/${member.slug}`}
      className={`group block ${tilt} transition-transform duration-700 ease-out hover:rotate-0`}
    >
      <article className={`relative photo ${aspect} overflow-hidden shadow-[0_20px_50px_-30px_rgba(26,24,20,0.35)]`}>
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes={isLarge ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 100vw"}
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />

        {/* Tape */}
        <div className={`tape -top-2 ${index % 2 === 0 ? "left-8 -rotate-6" : "right-8 rotate-6"}`} />

        {/* Slide-up reveal */}
        <div className="mentor-reveal absolute inset-x-0 bottom-0 bg-paper border-t border-rule/60">
          <div className={`px-5 ${isLarge ? "md:px-7 py-6" : "py-5"}`}>
            <p className={`text-ink-2 leading-[1.55] ${isLarge ? "text-[1.02rem] max-w-[40ch]" : "text-[0.93rem] max-w-[32ch]"}`}>
              {member.snippet}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 eyebrow text-ink">
              Read more
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-0.5"
              >
                <path
                  d="M2 5.5h6.5M5.5 2.5l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>

      {/* Caption */}
      <div className={`mt-4 flex items-baseline justify-between gap-3 ${isLarge ? "md:mt-5" : ""}`}>
        <div>
          <h3
            className={`serif tracking-tight leading-[1.05] ${
              isLarge ? "text-3xl md:text-[2.4rem]" : "text-xl md:text-[1.4rem]"
            }`}
          >
            {member.name}
          </h3>
          <p className="eyebrow mt-2">{member.role}</p>
        </div>
        <span className="eyebrow tabular text-muted shrink-0">
          № {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </Link>
  );
}
