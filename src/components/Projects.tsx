import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="border-t border-white/[0.06]">
      <p className="px-6 pt-10 font-mono text-xs text-[#5B6472] lg:px-16">
        ps --projects
      </p>
      <div className="mt-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
