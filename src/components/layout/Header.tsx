import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-allied-navy">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4 md:px-8">
        <Image
          src="/allied-logo.svg"
          alt="Allied Outdoor Solutions"
          width={120}
          height={36}
          priority
          className="brightness-0 invert"
        />
      </div>
    </header>
  );
}
