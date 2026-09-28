export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string;
  status: "deployed";
  url: string;
};

// Edit description/stack below to match each project.
export const projects: Project[] = [
  {
    slug: "sunnyside",
    title: "Sunnyside Agency Landing Page",
    description:
      "Multi-section marketing site built to a fixed design spec — custom grid, responsive breakpoints.",
    stack: "React · Tailwind",
    status: "deployed",
    url: "https://sunnyside-puce.vercel.app/",
  },
  {
    slug: "git-lesson",
    title: "Git Lesson",
    description: "Interactive walkthrough of core Git commands and concepts.",
    stack: "React · TypeScript",
    status: "deployed",
    url: "https://git-lesson-sigma.vercel.app/",
  },
  {
    slug: "flyo",
    title: "Flyo",
    description:
      "Flight search and booking interface — filtering, sorting, result states.",
    stack: "React · Tailwind",
    status: "deployed",
    url: "https://flyo-nu.vercel.app/",
  },
];
