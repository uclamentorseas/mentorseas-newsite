export function AboutSection() {
  return (
    <section id="about" className="relative pt-24 md:pt-40">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-10">
          <div className="col-span-12 md:col-span-3">
            <div className="md:sticky md:top-28">
              <div className="eyebrow mb-4">Chapter One</div>
              <div className="serif text-7xl md:text-8xl leading-none tabular text-ink/80">
                01
              </div>
              <div className="rule mt-6 max-w-[3rem]" />
              <p className="mt-4 eyebrow leading-relaxed">
                What we<br />actually are
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2 className="serif text-[10vw] md:text-[5.6vw] xl:text-[4.6vw] leading-[0.98] tracking-[-0.02em] text-ink max-w-[14ch]">
              Mentorship that doesn&apos;t feel{" "}
              <span className="text-accent">institutional.</span>
            </h2>

            <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8 md:gap-x-10">
              <p className="dropcap col-span-12 md:col-span-7 text-[1.05rem] md:text-[1.12rem] leading-[1.65] text-ink-2">
                The hardest part of UCLA Engineering isn&apos;t the math, or even
                the late nights — it&apos;s the moment, somewhere in your first
                quarter, when you&apos;re sitting in a lecture hall of three
                hundred people and quietly wondering if everyone else got a
                manual you didn&apos;t. We started MentorSEAS because we
                remember that feeling. And because the answer to it, almost
                always, was a junior or senior who took fifteen minutes to
                explain something a professor had ten seconds for.
              </p>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
