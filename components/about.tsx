import { BrainCircuit, Microchip, PencilRuler } from "lucide-react";
import { Section, SectionHeading } from "./section";

const roles = [
  {
    icon: PencilRuler,
    title: "Mechanical & CAD",
    description: "SolidWorks design, 3D printing and physical assembly.",
  },
  {
    icon: Microchip,
    title: "Electronics & Embedded",
    description: "Custom PCB wiring, microcontrollers and real-time firmware.",
  },
  {
    icon: BrainCircuit,
    title: "ROS2 & Autonomy",
    description: "Sensor integration, Nav2 navigation and LIO-SAM mapping.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Complete systems ownership — from CAD to navigation."
            />
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              I&apos;m Serdar Abali, a full-stack robotics hardware engineer
              based in Helsinki. I own the entire system: taking ideas from
              mechanical CAD and physical assembly through embedded code, sensor
              integration, and high-level ROS navigation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              My background spans BEng IT and full-stack robotics — mechanical,
              electronics, ROS/ROS2 and autonomy — and I build complete
              autonomous hardware systems from scratch, from custom PCB wiring
              and motor controllers to ROS2 autonomy stacks.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-800 pt-8">
              <div>
                <p className="font-mono text-sm text-zinc-500">Focus</p>
                <p className="mt-1 text-sm font-medium text-white">
                  Full-Stack Robotics
                </p>
              </div>
              <div>
                <p className="font-mono text-sm text-zinc-500">Based in</p>
                <p className="mt-1 text-sm font-medium text-white">
                  Helsinki Area, Finland
                </p>
              </div>
              <div>
                <p className="font-mono text-sm text-zinc-500">Affiliation</p>
                <p className="mt-1 text-sm font-medium text-white">
                  Kova Robotics
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {roles.map((role) => (
              <article
                key={role.title}
                className="group flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors group-hover:text-white">
                  <role.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{role.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {role.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
