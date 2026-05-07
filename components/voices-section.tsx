const voices = [
  {
    quote:
      "I asked my mentor what to do when I bombed my first midterm. She said, ‘call me, then your mom, in that order.’",
    name: "Aanya R.",
    detail: "Sophomore, Computer Science",
    spot: "Hedrick Hall",
    align: "left",
  },
  {
    quote:
      "Nobody told me Engineering was a building, a community, a habit, and an identity — all at once. My mentor did.",
    name: "Marcus W.",
    detail: "Junior, Materials Science",
    spot: "Engineering V, 4th",
    align: "right",
  },
  {
    quote:
      "Half of mentorship is technical advice. The other half is somebody saying, out loud, ‘you’re not behind.’",
    name: "Soren K.",
    detail: "Senior, Bioengineering",
    spot: "Court of Sciences",
    align: "left",
  },
  {
    quote:
      "I came in thinking I’d found my people. I’d found my major. The people came after, and they came from MentorSEAS.",
    name: "Ines G.",
    detail: "Sophomore, Mechanical",
    spot: "Engineering VI Patio",
    align: "right",
  },
];

export function VoicesSection() {
  return (
    <section className="relative pt-32 md:pt-48">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-4">Chapter Five</div>
            <div className="serif text-7xl md:text-8xl leading-none tabular text-ink/80">05</div>
            <div className="rule mt-6 max-w-[3rem]" />
            <p className="mt-4 eyebrow leading-relaxed">In their<br />own words</p>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2 className="serif text-[10vw] md:text-[5.6vw] xl:text-[4.6vw] leading-[0.98] tracking-[-0.02em] text-ink max-w-[16ch]">
              The advice that
              <br />
              <span className="serif-italic">actually stuck.</span>
            </h2>
          </div>
        </div>

        <div className="space-y-24 md:space-y-40">
          {voices.map((v, i) => (
            <figure
              key={v.name}
              className={`grid grid-cols-12 gap-x-6 md:gap-x-10 ${
                v.align === "right" ? "md:[direction:rtl]" : ""
              }`}
            >
              <blockquote
                className={`col-span-12 md:col-span-9 ${
                  v.align === "right" ? "md:col-start-4 [direction:ltr]" : ""
                }`}
              >
                <span aria-hidden className="serif-italic text-7xl text-accent/60 leading-none align-top">
                  &ldquo;
                </span>
                <p className="serif font-light text-[7.5vw] md:text-[4.4vw] xl:text-[3.6vw] leading-[1.05] tracking-[-0.018em] text-ink inline">
                  {v.quote}
                </p>
              </blockquote>
              <figcaption
                className={`col-span-12 md:col-span-3 mt-6 md:mt-3 [direction:ltr] ${
                  v.align === "right" ? "md:col-start-1 md:row-start-1 md:text-right" : ""
                }`}
              >
                <div className="serif-italic text-lg text-ink-2">— {v.name}</div>
                <div className="eyebrow mt-2">{v.detail}</div>
                <div className="eyebrow mt-1 text-muted/80">{v.spot}</div>
              </figcaption>
              {i !== voices.length - 1 && (
                <div className="col-span-12 mt-12 md:mt-20 [direction:ltr]">
                  <div className="rule" />
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
