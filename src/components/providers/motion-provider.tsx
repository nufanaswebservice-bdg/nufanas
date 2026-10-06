"use client";

import { LazyMotion, domMax } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Lazy-loads only the framer-motion feature bundle we use
 * (dom animations + layout + presence) instead of the full ~60KB runtime.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
}
