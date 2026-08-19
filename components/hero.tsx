import Image from "next/image";
import Link from "next/link";

const ROYCE_BLUR =
  "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAE/8QAIBAAAgICAgIDAAAAAAAAAAAAAQIDEQAEEyEFEkGR8P/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGREAAgMBAAAAAAAAAAAAAAAAAAISEzEU/9oADAMBAAIRAxEAPwBV2NeWFpYfeRVNGlN3kksXHyyWgsimFfOadLS15Y2EiFg3ZBY9n8MLf8bqBCgiIVewA7UD949D6TWkcP/Z";

export function Hero() {
  return (
    <section className="relative min-h-[88svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Royce_Hall.jpg"
          alt="Royce Hall at UCLA"
          fill
          priority
          sizes="100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={ROYCE_BLUR}
          className="object-cover"
        />
        {/* Single directional scrim — enough for text contrast, light
            enough that the building still reads as a building. */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-deep/85 via-blue-deep/60 to-blue-deep/25" />
      </div>

      <div className="wrap py-28 md:py-32">
        <div className="max-w-3xl">
          <h1 className="display text-white text-[13vw] sm:text-[9vw] lg:text-[clamp(3.5rem,6.5vw,6rem)]">
            Welcome to
            <br />
            UCLA Engineering
          </h1>

          <div className="rule-gold mt-7" />

          <p className="mt-7 max-w-[42ch] text-[1.15rem] md:text-[1.3rem] leading-[1.5] text-white/90">
            Get paired with a student who&apos;s already done your first year.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/find-a-mentor" className="btn btn-primary">
              Find your mentor
              <Arrow />
            </Link>
            <Link href="/organizations" className="btn btn-on-dark">
              Browse organizations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
      <path
        d="M2 6h7m-2.5-3L9 6 6.5 9"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
