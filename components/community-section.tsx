import Image from "next/image";

const moments = [
  {
    src: "/ucla1.jpg",
    caption: "Whiteboard, Engineering IV — “draw the recursion, trust me.”",
    place: "Boelter 5249",
    date: "Oct 14",
    span: "col-span-12 md:col-span-7 md:col-start-1",
    aspect: "aspect-[4/3]",
    rotate: "md:-rotate-[1.4deg]",
    tape: ["top-left"],
  },
  {
    src: "/ucla2.jpg",
    caption: "Late-quarter office hours overflow.",
    place: "Powell 2nd floor",
    date: "Nov 03",
    span: "col-span-7 md:col-span-4 md:col-start-9 md:-mt-12",
    aspect: "aspect-[3/4]",
    rotate: "md:rotate-[1.8deg]",
    tape: ["top-right"],
  },
  {
    src: "/ucla-aerial.jpg",
    caption: "From the Inverted Fountain, the campus shrinks until you can hold it.",
    place: "Westwood",
    date: "Sep 22",
    span: "col-span-12 md:col-span-8 md:col-start-3 md:-mt-8",
    aspect: "aspect-[16/8]",
    rotate: "md:rotate-[0.4deg]",
    tape: ["top-left", "top-right"],
  },
  {
    src: "/ucla3.jpg",
    caption: "First study group of the year — they’ll still be meeting in May.",
    place: "Kerckhoff",
    date: "Sep 28",
    span: "col-span-7 md:col-span-4 md:col-start-2 md:mt-4",
    aspect: "aspect-[4/5]",
    rotate: "md:-rotate-[2.2deg]",
    tape: ["top-left"],
  },
  {
    src: "/ucla1.jpg",
    caption: "Pair programming the way it’s supposed to feel — quietly, with snacks.",
    place: "Engineering VI",
    date: "Jan 19",
    span: "col-span-12 md:col-span-5 md:col-start-7 md:mt-12",
    aspect: "aspect-[5/4]",
    rotate: "md:rotate-[1deg]",
    tape: ["top-right"],
  },
];

export function CommunitySection() {
  return (
    <section id="community" className="relative pt-32 md:pt-48 bg-paper-2/70">
      <div className="absolute inset-x-0 top-0 h-px bg-rule/60" />
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-4">Chapter Three</div>
            <div className="serif text-7xl md:text-8xl leading-none tabular text-ink/80">03</div>
            <div className="rule mt-6 max-w-[3rem]" />
            <p className="mt-4 eyebrow leading-relaxed">A scrapbook<br />from the year</p>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2 className="serif text-[10vw] md:text-[5.6vw] xl:text-[4.6vw] leading-[0.98] tracking-[-0.02em] text-ink max-w-[16ch]">
              Photographs we keep
              <br />
              <span className="serif-italic">on the fridge.</span>
            </h2>
            <p className="mt-8 max-w-[52ch] text-[1.05rem] leading-[1.65] text-ink-2">
              Every quarter we ask our mentors to hand in a photo. Some are
              from the labs. Some are from the long walk to Engineering VI.
              Most are blurry. We&apos;re fine with that.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-20 pb-8">
          {moments.map((m, i) => (
            <figure
              key={i}
              className={`group relative ${m.span} ${m.rotate} transition-transform duration-700 ease-out hover:rotate-0`}
            >
              <div className={`photo ${m.aspect} relative shadow-[0_2px_24px_-12px_rgba(26,24,20,0.35)]`}>
                <Image
                  src={m.src}
                  alt={m.caption}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
                {m.tape.includes("top-left") && (
                  <div className="tape -top-2 left-6 -rotate-12" />
                )}
                {m.tape.includes("top-right") && (
                  <div className="tape -top-2 right-8 rotate-6" />
                )}
              </div>
              <figcaption className="mt-4 flex items-baseline gap-3">
                <span className="eyebrow tabular shrink-0">
                  {String(i + 1).padStart(2, "0")} · {m.date}
                </span>
                <span className="serif-italic text-[1rem] md:text-[1.05rem] text-ink-2 leading-snug">
                  {m.caption}
                </span>
              </figcaption>
              <div className="mt-1 eyebrow text-muted/80">{m.place}</div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
