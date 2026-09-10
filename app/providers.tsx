"use client";

import posthog from "posthog-js";
import type { ReactNode } from "react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

// Initialize once, client-side only. This runs before hydration and works
// with static exports (`output: "export"`) because posthog-js is purely
// client-side and never touches the server build.
if (typeof window !== "undefined" && POSTHOG_KEY && POSTHOG_HOST) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
  });
}

export default function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
