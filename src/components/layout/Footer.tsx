import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-allied-navy section-padding">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-allied-cream md:text-4xl lg:text-5xl">
          Ready to transform
          <br />
          Allied Outdoor Solutions?
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-allied-slate">
          These aren&apos;t hypotheticals. Each solution is scoped, tooled, and
          ready to build. Let&apos;s talk about which ones move the needle
          first.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="mailto:gerhard@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-allied-gold px-8 py-3 font-sans text-sm font-semibold tracking-wide text-allied-navy transition-colors hover:bg-allied-gold/90"
          >
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/gerhard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-allied-cream/80 underline underline-offset-4 transition-colors hover:text-allied-cream"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="mt-16 border-t border-allied-cream/10 pt-8">
          <Image
            src="/allied-logo.svg"
            alt="Allied Outdoor Solutions"
            width={80}
            height={24}
            className="mx-auto brightness-0 invert opacity-40"
          />
          <p className="mt-4 font-sans text-xs text-allied-cream/30">
            AI Strategy Showcase by Gerhard van den Heever
          </p>
        </div>
      </div>
    </footer>
  );
}
