import type { SVGProps } from "react";
import { ProjectCard } from "@/components/project-card";

type BrandIconProps = SVGProps<SVGSVGElement> & { size?: number };

function GitHubIcon({ size = 16, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.11-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .3.2.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function YouTubeIcon({ size = 16, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

function XIcon({ size = 16, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/SerdarAbali",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/serdar-abali/",
    icon: LinkedInIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@serdar-abali",
    icon: YouTubeIcon,
  },
  {
    name: "X",
    href: "https://x.com/serdar_abali",
    icon: XIcon,
  },
] as const;

const specs = [
  { index: "01", label: "HARDWARE", detail: "Off-Road Platforms · Tactical Mounts · Custom Fabrication" },
  {
    index: "02",
    label: "AUTONOMY",
    detail: "Edge Perception · Sensor Fusion · Motion Control · Field Autonomy",
  },
  {
    index: "03",
    label: "EXECUTION",
    detail: "Mechanical Design to Embedded Code to Hardware Integration",
  },
] as const;

const projects = [
  {
    index: "01",
    title: "Bot 4",
    tags: ["ROS 1", "LiDAR", "Stereo Camera"],
    summary: "4x4 small-size autonomous outdoor robot.",
    href: "https://github.com/SerdarAbali",
    linkLabel: "Code",
    images: [
      "/images/hero/projects/Bot4/02.jpg",
      "/images/hero/projects/Bot4/cover.jpg",
      "/images/hero/projects/Bot4/01.jpg",
      "/images/hero/projects/Bot4/03.jpg",
    ],
  },
  {
    index: "02",
    title: "Bot 5",
    tags: ["ROS 1", "LiDAR", "Wheel Odometry", "IMU"],
    summary: "Fully autonomous SLAM robot for indoor logistics — 2WD.",
    href: "https://github.com/SerdarAbali",
    linkLabel: "Code",
    images: [
      "/images/hero/projects/Bot5/cover.jpg",
      "/images/hero/projects/Bot5/01.jpg",
      "/images/hero/projects/Bot5/02.jpg",
      "/images/hero/projects/Bot5/03.jpg",
    ],
  },
  {
    index: "03",
    title: "Bot 6",
    tags: ["RF", "WiFi", "SBC", "ROS2", "5G", "Teleop"],
    summary:
      "Articulated-steered (hydraulic) 4x4 outdoor UGV for harsh environments. 600 kg cargo and tow capacity, with snow-plow attachment and defense-module support.",
    href: "https://github.com/SerdarAbali",
    linkLabel: "Code",
    images: [
      "/images/hero/projects/bot6/cover.jpg",
      "/images/hero/projects/bot6/01.jpg",
    ],
  },
  {
    index: "04",
    title: "Bot 6.5",
    tags: ["ROS2", "LiDAR", "IMU", "Wheel Odom", "GPS", "5G"],
    summary:
      "Outdoor research UGV for harsh environments with a special air-conditioned electronics enclosure. Articulated-steered (hydraulic) 2x4.",
    href: "https://github.com/SerdarAbali",
    linkLabel: "Code",
    images: [
      "/images/hero/projects/bot6.5/cover.jpg",
      "/images/hero/projects/bot6.5/01.jpg",
      "/images/hero/projects/bot6.5/02.jpg",
      "/images/hero/projects/bot6.5/03.jpg",
    ],
  },
  {
    index: "05",
    title: "Defense Hackathon Targeting Turret — 2nd Place",
    tags: ["UGV Integration", "Target Acquisition", "ROS2"],
    summary:
      "Autonomous targeting turret with an integrated weapon mount, prototyped and field-tested in a 48-hour defense hackathon. Placed 2nd, built end-to-end with teammate Lauri.",
    href: "https://github.com/SerdarAbali",
    linkLabel: "Code",
    images: [
      "/images/hero/projects/turret/cover.jpg",
      "/images/hero/projects/turret/01.jpg",
    ],
  },
  {
    index: "06",
    title: "Low-Cost Custom PTZ Camera System",
    tags: ["Raspberry Pi Zero 2 W", "Steppers", "3D Printed"],
    summary:
      "150mm pan-tilt camera head driven by dual 28BYJ-48 stepper motors on a Raspberry Pi Zero 2 W. Designed as a low-cost alternative to commercial PTZ units for large mobile robots.",
    href: "https://github.com/SerdarAbali",
    linkLabel: "Code",
    images: [
      "/images/hero/projects/pantilt/cover.jpg",
      "/images/hero/projects/pantilt/01.jpg",
      "/images/hero/projects/pantilt/02.jpg",
      "/images/hero/projects/pantilt/03.jpg",
      "/images/hero/projects/pantilt/04.jpg",
    ],
  },
  {
    index: "07",
    title: "Myoelectric Bionic Hand v1",
    tags: ["Myo Sensors", "Signal Processing", "Biomechanics"],
    summary:
      "Prosthetic hand controlled through muscle-signal processing from myoelectric sensors. Early full-stack build spanning CAD, embedded firmware and signal conditioning.",
    href: "https://github.com/SerdarAbali",
    linkLabel: "Code",
    images: [
      "/images/hero/projects/bionichand/cover.jpg",
      "/images/hero/projects/bionichand/01.jpg",
      "/images/hero/projects/bionichand/02.jpg",
    ],
  },
  {
    index: "08",
    title: "Physical Winamp Hardware Revival (in process)",
    tags: ["Embedded Systems", "Custom UI", "Hardware Prototyping"],
    summary:
      "Hardware recreation of the classic media player with a custom enclosure and physical controls. Rebuilt the full embedded architecture and interface from the board up.",
    href: "https://github.com/SerdarAbali",
    linkLabel: "Code",
    images: [
      "/images/hero/projects/winamp/cover.jpg",
      "/images/hero/projects/winamp/01.jpg",
    ],
    credit: {
      text: "3D render designed by",
      href: "https://x.com/rickgude",
      label: "@rickgude",
    },
  },
] as const;

const toolchain = [
  {
    title: "HARDWARE",
    tools: ["Custom Electronics", "Motor Control", "3D Printing", "Actuators"],
  },
  {
    title: "SOFTWARE",
    tools: [
      "Embedded C/C++",
      "Real-Time Systems",
      "Control Algorithms",
      "System Scripts",
      "Linux Environment"
    ],
  },
  {
    title: "COMPUTE & SENSORS",
    tools: [
      "Edge Compute",
      "LiDAR Systems",
      "IMU / Inertial",
      "GNSS / RTK",
      "Biomedical Sensing"
    ],
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#0f0f11]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-[0.25em] text-zinc-200"
          >
            SERDAR ABALI
          </a>
          <nav
            className="flex items-center gap-6 font-mono text-xs text-zinc-500"
            aria-label="Social"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-zinc-200"
              >
                [{social.name}]
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero / Identity */}
        <section className="relative overflow-hidden border-b border-zinc-800/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]"
          />

          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 sm:pt-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Helsinki Area
                </p>

                <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tighter text-zinc-100 sm:text-6xl lg:text-7xl">
                  Full-Stack
                  <br />
                  Robotics &amp;
                  <br />
                  Mechatronics
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
                  Designing and deploying complete hardware-to-code platforms, custom
                  CAD, motor controllers, and autonomy.
                </p>
              </div>

              {/* Hero image */}
              <div className="relative aspect-square overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40 lg:aspect-auto lg:h-full lg:min-h-[420px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero/mainimage.jpg"
                  alt="Serdar Abali working on an autonomous robot"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-zinc-950/45" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-[0.25em] text-zinc-300">
                  FIELD WORK
                </span>
              </div>
            </div>

            <dl className="mt-16 grid gap-8 border-t border-zinc-800 pt-8 sm:grid-cols-3 sm:gap-6">
              {specs.map((spec) => (
                <div key={spec.index}>
                  <dt className="font-mono text-sm tracking-wider">
                    <span className="text-zinc-500">{spec.index}</span>
                    <span className="text-zinc-400"> / </span>
                    <span className="text-zinc-200">{spec.label}</span>
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {spec.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Projects dossier */}
        <section className="border-b border-zinc-800/80">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="flex items-baseline justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Dossier
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  PROJECTS
                </h2>
              </div>
              <p className="hidden font-mono text-xs text-zinc-500 sm:block">
                {projects.length} systems on record
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Toolchain */}
        <section className="border-b border-zinc-800/80">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              Toolchain
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              TECHNICAL STACK
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {toolchain.map((category) => (
                <div
                  key={category.title}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6"
                >
                  <h3 className="font-mono text-sm font-semibold tracking-[0.2em] text-zinc-200">
                    {category.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Contact footer */}
      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            Communication
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            DIRECT SIGNAL
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://x.com/serdar_abali"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900/40 px-5 py-3 font-mono text-xs tracking-wider text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900 hover:text-zinc-100"
            >
              [ REACH OUT VIA X DM ]
            </a>
            <a
              href="https://github.com/SerdarAbali"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900/40 px-5 py-3 font-mono text-xs tracking-wider text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900 hover:text-zinc-100"
            >
              [ OPEN GITHUB DISCUSSIONS ]
            </a>
            <a
              href="https://www.linkedin.com/in/serdar-abali/"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-zinc-800 bg-zinc-900/40 px-4 py-3 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
            >
              [ CONNECT ON LINKEDIN ]
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-zinc-800 pt-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                <social.icon size={14} />
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-800/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-zinc-500">
              © {new Date().getFullYear()} SERDAR ABALI
            </p>
            <p className="font-mono text-xs text-zinc-600">
              Kova Robotics · Helsinki, Finland
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}