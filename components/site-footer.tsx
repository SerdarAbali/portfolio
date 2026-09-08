import { ArrowUp, CircuitBoard } from "lucide-react";
import { socials } from "./data";
import { BrandIcon } from "./social-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-white">
            <CircuitBoard className="h-3.5 w-3.5" />
          </span>
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Serdar Abali · Full-Stack Robotics
            Hardware Engineer
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-white"
              >
                <BrandIcon brand={social.brand} size={15} />
              </a>
            ))}
          </div>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
