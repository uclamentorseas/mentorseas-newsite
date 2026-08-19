import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CircledPhrase } from "@/components/fun/annotation";

export const metadata = {
  title: "Become a Mentor — mentorSEAS",
  description:
    "One form, one Welcome Day, one first-year who stops feeling lost. Sign up to mentor an incoming UCLA engineering student.",
};

const MENTOR_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfqhJ3Q_ZhJ7EhQEHHpJOt98bjpPGUSsDY7ano6U0EV-YphRA/viewform?embedded=true";

const steps = [
  {
    n: "1",
    label: "Today",
    body: "Fill out the form below. Six minutes, mostly about your major.",
  },
  {
    n: "2",
    label: "Late summer",
    body: "We pair you with one incoming student in your major and email you both.",
  },
  {
    n: "3",
    label: "Early fall",
    body: "You meet at Engineering Welcome Day, then keep in touch through the year.",
  },
];

export default function SignupPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-32">
        {/* Header */}
        <section className="wrap">
          <span className="label">Upperclassmen</span>

          <h1 className="mt-6 display text-[9vw] md:text-[4vw] xl:text-[3.6rem] leading-[1.12] max-w-[18ch]">
            Be the person you <CircledPhrase>needed</CircledPhrase> freshman
            year.
          </h1>

          <div className="rule-gold mt-8" />

          <p className="mt-8 max-w-[50ch] text-[1.08rem] leading-[1.6] text-blue-deep/75">
            You already know where the good study spots are, which professors
            curve, and how to survive week 8. That&apos;s the whole
            qualification. Tell us a bit about yourself and we&apos;ll pair you
            with one incoming engineer from your major.
          </p>
        </section>

        {/* What happens after you submit */}
        <section className="band mt-16 py-16 md:py-20">
          <div className="wrap">
            <div className="flex items-center gap-4">
              <span className="display text-2xl text-blue/40 tabular">01</span>
              <span className="label">What happens next</span>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((s) => (
                <div key={s.n} className="card p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-gold text-blue-deep display text-[0.9rem]">
                      {s.n}
                    </span>
                    <span className="label">{s.label}</span>
                  </div>
                  <p className="mt-4 text-[1rem] leading-[1.55] text-blue-deep/75">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The form */}
        <section className="wrap py-16 md:py-20">
          <div className="flex items-center gap-4">
            <span className="display text-2xl text-blue/40 tabular">02</span>
            <span className="label">The form</span>
          </div>

          <div className="mt-8 grid grid-cols-12 gap-x-0 md:gap-x-10 gap-y-8">
            <h2 className="col-span-12 md:col-span-7 display text-[7vw] md:text-[3vw] xl:text-[2.6rem] max-w-[16ch]">
              Six minutes. Promise.
            </h2>
            <p className="col-span-12 md:col-span-5 text-[1.05rem] leading-[1.6] text-blue-deep/70 md:pt-2">
              No essays, no resume, no interview. If the embed below
              doesn't load,{" "}
              <a
                href={MENTOR_FORM_EMBED_URL.replace("?embedded=true", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet text-blue"
              >
                open it in a new tab
              </a>
              .
            </p>
          </div>

          {/* Google renders the form itself at ~760px and centres it, so a
              full-bleed card would frame mostly empty gutter. */}
          <div className="mt-10 card overflow-hidden mx-auto max-w-3xl">
            <iframe
              src={MENTOR_FORM_EMBED_URL}
              className="w-full block"
              style={{ height: "1600px", border: 0 }}
              title="Mentor signup form"
            >
              Loading…
            </iframe>
          </div>
        </section>

        {/* Reassurance */}
        <section className="pb-24 md:pb-32">
          <div className="wrap">
            <div className="rounded-xl bg-blue-deep text-white p-8 md:p-10">
              <span className="label text-gold">Still deciding?</span>
              <h2 className="mt-4 display text-white text-[1.8rem] md:text-[2.2rem] max-w-[22ch]">
                It'll be worth it!
              </h2>
              <p className="mt-4 max-w-[46ch] text-[1rem] leading-[1.55] text-white/80">
                Most mentors text their mentee a few times a quarter and grab
                coffee once or twice. Questions first? Email us at{" "}
                <a
                  href="mailto:mentorseas@ucla.edu"
                  className="link-quiet text-gold"
                >
                  mentorseas@ucla.edu
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
