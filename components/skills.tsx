import { skillCategories } from "./data";
import { Section, SectionHeading } from "./section";

export function Skills() {
  return (
    <Section id="skills" className="border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Toolchain"
          title="Skills & toolchain."
          description="The languages, frameworks and tools I reach for when building robotic systems."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-white">
                  <category.icon className="h-4 w-4" />
                </span>
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
