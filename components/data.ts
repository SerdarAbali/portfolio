import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Boxes,
  Camera,
  DraftingCompass,
  Eye,
  GitBranch,
  Hand,
  Microchip,
  Music2,
  PencilRuler,
  SlidersHorizontal,
  Target,
  Trophy,
  Truck,
  Wrench,
} from "lucide-react";

export type Metric = {
  icon: LucideIcon;
  label: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  icon: LucideIcon;
};

export type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const metrics: Metric[] = [
  { icon: Boxes, label: "5+ Full-Stack Systems" },
  { icon: Trophy, label: "2nd Place Defense Hackathon" },
  { icon: GitBranch, label: "ROS2 / Nav2 / LIO-SAM" },
];

export const projects: Project[] = [
  {
    title: "Outdoor Autonomous UGVs",
    description:
      "Built multiple outdoor wilderness UGVs with custom articulated steering, heavy terrain testing, and full autonomy stacks. Currently documenting as an open-source DIY UGV series on YouTube.",
    tags: ["ROS2", "Nav2", "LIO-SAM", "Custom Controllers", "Hardware Design"],
    gradient: "from-blue-500/30 via-cyan-500/10 to-transparent",
    icon: Truck,
  },
  {
    title: "Defense Hackathon Target Turret (2nd Place)",
    description:
      "Built \"bot6\", an autonomous targeting turret with integrated weapon mount and platform control, earning 2nd place in a defense hackathon with teammate Lauri.",
    tags: ["UGV Integration", "Target Acquisition", "ROS2", "Hardware Prototyping"],
    gradient: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
    icon: Target,
  },
  {
    title: "Custom Low-Cost PTZ Camera System",
    description:
      "Designed a 150mm custom pan-tilt camera system for large mobile robots using dual 28BYJ-48 steppers as a budget alternative to costly commercial units.",
    tags: ["Raspberry Pi Zero 2 W", "Stepper Motors", "3D Printing", "Electronics"],
    gradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
    icon: Camera,
  },
  {
    title: "Physical Winamp & Custom Electronics",
    description:
      "Hardware recreation of the classic media player featuring custom enclosures, physical controls, and embedded system architecture.",
    tags: ["Embedded Hardware", "Rapid Prototyping", "C++", "UI/UX"],
    gradient: "from-orange-500/30 via-amber-500/10 to-transparent",
    icon: Music2,
  },
  {
    title: "Autonomous Indoor Mobile Platforms",
    description:
      "Full-stack indoor mobile robotics platforms featuring custom drivers, motor control, and navigation capabilities.",
    tags: ["DiffBot", "ROS2", "Sensor Fusion", "Embedded C++"],
    gradient: "from-rose-500/30 via-red-500/10 to-transparent",
    icon: Bot,
  },
  {
    title: "Myoelectric Bionic Hand (v1)",
    description:
      "Early full-stack project implementing muscle signal processing for prosthetic hand gesture control.",
    tags: ["Biomechanics", "Myo Sensors", "Embedded Systems", "CAD"],
    gradient: "from-sky-500/30 via-indigo-500/10 to-transparent",
    icon: Hand,
  },
];

export const capabilities: Capability[] = [
  {
    icon: DraftingCompass,
    title: "Mechanical Design",
    description:
      "CAD modeling, FEA and DFM for linkages, actuators and full robot assemblies.",
  },
  {
    icon: Microchip,
    title: "Embedded Systems",
    description:
      "Firmware for microcontrollers, custom PCBs and real-time sensor fusion.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control Systems",
    description:
      "Motor control, PID loops and low-level drivers for precise actuation.",
  },
  {
    icon: GitBranch,
    title: "ROS2 & Autonomy",
    description:
      "Perception, localization, mapping and navigation with ROS2, Nav2 and LIO-SAM.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Object detection, depth sensing and visual servoing for perception-driven robots.",
  },
  {
    icon: Wrench,
    title: "Prototyping & Fab",
    description:
      "3D printing, CNC and PCB bring-up to turn designs into working hardware.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Hardware & CAD",
    icon: PencilRuler,
    skills: [
      "SolidWorks",
      "3D Printing",
      "Custom Wiring/PCB",
      "Motor Drivers",
      "Actuators",
    ],
  },
  {
    title: "Software & Autonomy",
    icon: GitBranch,
    skills: ["ROS2", "Nav2", "LIO-SAM", "Embedded C/C++", "Python", "Linux"],
  },
  {
    title: "Compute & Sensors",
    icon: Microchip,
    skills: [
      "Raspberry Pi",
      "Microcontrollers",
      "LiDAR",
      "IMU",
      "Myoelectric Sensors",
    ],
  },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/SerdarAbali", brand: "github" },
  { name: "YouTube", href: "https://youtube.com/@serdar-abali", brand: "youtube" },
  { name: "X", href: "https://x.com/serdar_abali", brand: "x" },
] as const;
