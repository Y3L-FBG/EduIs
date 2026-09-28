import { useState } from "react";

export default function Sidebar() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <aside className="border-b border-white/[0.06] px-6 py-6 lg:sticky lg:top-0 lg:h-screen lg:w-60 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
      <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/[0.08] bg-[#12161D]">
        {!imgFailed ? (
          <img
            src="/profile/edu.jpg"
            alt="Edu Ismail"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-sm text-[#5B6472]">
            EI
          </div>
        )}
        {/* one-time scan reveal on load */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#6FE3C9]/40 to-transparent animate-[scan_1s_ease-out_1]" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#6FE3C9] animate-pulse" />
        <span className="font-mono text-xs text-[#5B6472]">
          system online
        </span>
      </div>

      <p className="mt-6 font-sans text-lg text-[#E4E7EB] lg:mt-6">
        Edu Ismail
      </p>
      <p className="mt-1 font-mono text-xs text-[#5B6472]">
        full-stack developer
      </p>

      <nav className="mt-8 flex gap-6 font-mono text-xs lg:mt-10 lg:flex-col lg:gap-3">
        <a href="#work" className="text-[#5B6472] hover:text-[#E4E7EB]">
          01 · work
        </a>
        <a href="#contact" className="text-[#5B6472] hover:text-[#E4E7EB]">
          02 · contact
        </a>
      </nav>
    </aside>
  );
}
