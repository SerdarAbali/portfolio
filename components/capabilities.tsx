import { capabilities } from "./data";
import { Section, SectionHeading } from "./section";

export function Capabilities() {
  return (
    <Section id="capabilities" className="border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="Full-stack engineering for physical systems."
          description="From CAD model to deployed autonomy, I cover every layer of the robotics stack."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="group bg-zinc-950 p-6 transition-colors hover:bg-zinc-900/60"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-300 transition-colors group-hover:border-zinc-700 group-hover:text-white">
                <capability.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{capability.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
