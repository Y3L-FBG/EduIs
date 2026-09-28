import { useState } from "react";
import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 border-b border-white/[0.06] px-6 py-5 no-underline last:border-b-0 lg:gap-6 lg:px-16"
    >
      <div className="h-14 w-20 shrink-0 overflow-hidden rounded border border-white/[0.06] bg-[#12161D] sm:h-20 sm:w-28">
        {project.image && !imgFailed ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center font-mono text-lg text-[#5B6472]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          >
            {project.title.charAt(0)}
          </div>
        )}
      </div>

      <span className="font-mono text-xs text-[#5B6472]">
        proc_{String(index).padStart(2, "0")}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-[#E4E7EB] transition-colors group-hover:text-[#6FE3C9]">
            {project.title}
          </h3>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#5B6472]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6FE3C9] animate-pulse" />
            {project.status}
          </span>
        </div>
        <p className="mt-1 max-w-[52ch] text-sm text-[#5B6472]">
          {project.description}
        </p>
        <p className="mt-2 font-mono text-[10px] text-[#5B6472]">
          {project.stack}
        </p>
      </div>

      <span className="font-mono text-xs text-[#5B6472] transition-colors group-hover:text-[#E4E7EB]">
        open
      </span>
    </a>
  );
}
