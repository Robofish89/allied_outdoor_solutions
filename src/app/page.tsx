import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-allied-navy px-6 text-center">
      <Image
        src="/allied-logo.svg"
        alt="Allied Outdoor Solutions"
        width={200}
        height={60}
        priority
        className="mb-8"
      />
      <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-allied-cream md:text-5xl lg:text-6xl">
        Allied Outdoor Solutions
      </h1>
      <p className="mt-4 text-lg text-allied-gold">AI Strategy Showcase</p>
    </main>
  );
}
