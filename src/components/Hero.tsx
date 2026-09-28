export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 py-20 lg:px-16 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <span className="absolute left-4 top-4 font-mono text-[10px] text-[#5B6472]">
        00.00
      </span>
      <span className="absolute bottom-4 right-4 font-mono text-[10px] text-[#5B6472]">
        24.86
      </span>

      <div className="relative max-w-[46ch]">
        <p className="font-mono text-xs text-[#6FE3C9]">
          $ build --stack
          <span className="ml-1 inline-block h-3 w-1.5 translate-y-[2px] bg-[#6FE3C9] animate-[blink_1s_steps(1)_infinite]" />
        </p>
        <h1 className="mt-4 text-4xl leading-tight text-[#E4E7EB] sm:text-5xl">
          Interfaces on the front.
          <br />
          Logic underneath.
        </h1>
        <p className="mt-6 text-[#5B6472]">
          I'm Edu — I design and build web products end to end: React
          and TypeScript on the surface, APIs and databases running
          the show behind it.
        </p>
      </div>
    </section>
  );
}
