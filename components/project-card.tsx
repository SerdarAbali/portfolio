"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export type ProjectCardData = {
  index: string;
  title: string;
  tags: readonly string[];
  summary: string;
  href: string;
  linkLabel: string;
  images: readonly string[];
  credit?: { text: string; href: string; label: string };
};

export function ProjectCard({ project }: { project: ProjectCardData }) {
  const [current, setCurrent] = useState(0);
  const count = project.images.length;

  const prev = () => setCurrent((c) => (c - 1 + count) % count);
  const next = () => setCurrent((c) => (c + 1) % count);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700">
      <div className="relative aspect-video overflow-hidden border-b border-zinc-800">
        {count > 0 ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.images[current]}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-transparent" />

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded border border-zinc-700/60 bg-zinc-950/70 text-zinc-300 backdrop-blur transition-colors hover:border-zinc-500 hover:text-zinc-100"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded border border-zinc-700/60 bg-zinc-950/70 text-zinc-300 backdrop-blur transition-colors hover:border-zinc-500 hover:text-zinc-100"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <span className="absolute bottom-3 right-4 font-mono text-xs tracking-wider text-zinc-300">
                  {current + 1} / {count}
                </span>
              </>
            )}

            <span className="absolute bottom-3 left-4 font-mono text-xs tracking-[0.25em] text-zinc-300">
              {project.index}
            </span>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 via-zinc-900/30 to-transparent" />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"
            />
            <span className="absolute bottom-3 left-4 font-mono text-xs tracking-[0.25em] text-zinc-500">
              {project.index}
            </span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.summary}
        </p>

        {project.credit && (
          <p className="mt-4 border-t border-zinc-800/70 pt-3 font-mono text-[11px] leading-relaxed text-zinc-500">
            {project.credit.text}{" "}
            <a
              href={project.credit.href}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 underline decoration-zinc-700 underline-offset-2 transition-colors hover:text-zinc-200"
            >
              {project.credit.label}
            </a>
          </p>
        )}
      </div>
    </article>
  );
}
