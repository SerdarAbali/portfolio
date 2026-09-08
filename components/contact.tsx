import { ArrowUpRight, Send } from "lucide-react";
import { socials } from "./data";
import { Section, SectionHeading } from "./section";
import { BrandIcon, GitHubIcon } from "./social-icons";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something that moves."
              description="Have a project in mind? Reach out — I'm always happy to talk robotics, automation and everything in between."
            />

            <a
              href="https://github.com/SerdarAbali"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-white">
                <GitHubIcon size={16} />
              </span>
              <span>
                <span className="block font-mono text-xs uppercase tracking-widest text-zinc-500">
                  GitHub
                </span>
                <span className="block text-sm font-semibold text-white">
                  github.com/SerdarAbali
                </span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Elsewhere
              </p>
              <div className="mt-3 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
                  >
                    <BrandIcon brand={social.brand} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ada Lovelace"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-zinc-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ada@lab.dev"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-zinc-500"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the system you're building..."
                className="w-full resize-none rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-zinc-500"
              />
            </div>

            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 sm:w-auto"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
