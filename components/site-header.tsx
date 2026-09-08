import { CircuitBoard } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-white transition-colors group-hover:bg-zinc-800">
            <CircuitBoard className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-white">
            Serdar<span className="text-zinc-500"> Abali</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 md:inline-flex"
        >
          Work with me
        </a>
      </div>
    </header>
  );
}
