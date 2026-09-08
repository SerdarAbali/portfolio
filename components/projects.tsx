import { ArrowUpRight } from "lucide-react";
import { projects } from "./data";
import { Section, SectionHeading } from "./section";

export function Projects() {
  return (
    <Section id="projects" className="border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects that move."
            description="A selection of systems I've designed, built and shipped — from concept to working hardware."
          />
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Discuss a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-700"
            >
              {/* Image placeholder */}
              <div className="relative aspect-video overflow-hidden border-b border-zinc-800 bg-zinc-950">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:32px_32px] opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-xl border border-zinc-700/60 bg-zinc-900/80 text-zinc-300 backdrop-blur transition-all group-hover:scale-110 group-hover:text-white">
                    <project.icon className="h-8 w-8" />
                  </span>
                </div>
                <span className="absolute left-4 top-4 rounded-md border border-zinc-700/60 bg-black/60 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur">
                  Case Study
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-700/80 bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <a
                  href="#"
                  className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
