import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-allied-navy section-padding">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
        <div>
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
