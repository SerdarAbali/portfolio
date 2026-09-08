import {
  ArrowUpRight,
  Bot,
  MapPin,
  Radio,
  Sparkles,
} from "lucide-react";
import { metrics } from "./data";
import { GitHubIcon } from "./social-icons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-zinc-800/80"
    >
      {/* Background grid + glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-zinc-800/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-20 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Kova Robotics · Helsinki, Finland
          </p>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
            Serdar Abali
          </p>

          <h1 className="mt-3 text-5xl font-bold leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-7xl">
            FULL-STACK
            <br />
            <span className="bg-gradient-to-r from-zinc-200 via-white to-zinc-400 bg-clip-text text-transparent">
              ROBOTICS
            </span>
            <br />
            HARDWARE ENGINEER
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Building complete autonomous hardware systems from scratch—CAD,
            custom PCB wiring, motor controllers, and ROS2 autonomy.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://github.com/SerdarAbali"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            >
              <GitHubIcon size={16} />
              GitHub Profile
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 border-t border-zinc-800 pt-8">
            {metrics.map((metric) => (
              <span
                key={metric.label}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-300"
              >
                <metric.icon className="h-4 w-4 text-zinc-400" />
                {metric.label}
              </span>
            ))}
          </div>
        </div>

        {/* Hero visual card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-1">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/30 via-transparent to-transparent" />
            <div className="relative flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-zinc-900 to-black">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 shadow-[0_0_60px_-10px_rgba(255,255,255,0.25)]">
                  <Bot className="h-12 w-12 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    Serdar Abali
                  </p>
                  <p className="mt-1 inline-flex items-center gap-2 text-sm text-emerald-400">
                    <Radio className="h-3.5 w-3.5" />
                    All systems nominal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="absolute -left-4 top-8 hidden items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-2 text-xs font-medium text-zinc-300 shadow-xl backdrop-blur sm:flex">
            <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
            ROS2 · Nav2 · LIO-SAM
          </div>
          <div className="absolute -right-3 bottom-16 hidden items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-2 text-xs font-medium text-zinc-300 shadow-xl backdrop-blur sm:flex">
            <MapPin className="h-3.5 w-3.5 text-zinc-400" />
            Helsinki, Finland
          </div>
        </div>
      </div>
    </section>
  );
}
