export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-[#241623]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[760px] items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-serif text-xl italic text-[#F7F3ED] no-underline"
        >
          Edu Ismail
        </a>
        <a
          href="#contact"
          className="text-sm text-[#B9A8B4] no-underline transition-colors hover:text-[#F7F3ED]"
        >
          say hello
        </a>
      </nav>
    </header>
  );
}
