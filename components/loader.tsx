"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * First-paint loader. Rendered visible in the initial (prerendered) HTML so
 * there's no flash of the real page before it mounts, then swipes up and
 * off-screen like a curtain lifting, once the page has had a moment to
 * settle. The constellation motif matches the hero background and section
 * icons rather than being a generic spinner.
 */
export function Loader() {
  const [phase, setPhase] = useState<"visible" | "exiting" | "done">("visible")

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const minMs = reduceMotion ? 150 : 1050
    const exitMs = reduceMotion ? 0 : 700

    const visibleTimer = setTimeout(() => {
      setPhase("exiting")
      const exitTimer = setTimeout(() => {
        setPhase("done")
        document.body.style.overflow = previousOverflow
      }, exitMs)
      return () => clearTimeout(exitTimer)
    }, minMs)

    return () => {
      clearTimeout(visibleTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  if (phase === "done") return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-background transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform motion-reduce:transition-none",
        phase === "exiting" ? "pointer-events-none -translate-y-full" : "translate-y-0",
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="loader-graph h-14 w-14">
        <g stroke="#a78bfa" strokeWidth="1.4" fill="none">
          <line className="loader-line" x1="50" y1="50" x2="50" y2="15" pathLength={100} />
          <line className="loader-line loader-line-2" x1="50" y1="50" x2="85" y2="70" pathLength={100} />
          <line className="loader-line loader-line-3" x1="50" y1="50" x2="15" y2="70" pathLength={100} />
        </g>
        <circle className="loader-node loader-node-1" cx="50" cy="15" r="4" fill="#a78bfa" />
        <circle className="loader-node loader-node-2" cx="85" cy="70" r="4" fill="#a78bfa" />
        <circle className="loader-node loader-node-3" cx="15" cy="70" r="4" fill="#a78bfa" />
        <circle className="loader-node-core" cx="50" cy="50" r="5" fill="#a78bfa" />
      </svg>

      <div className="flex items-center gap-2">
        <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Daniel Romero
        </span>
      </div>
    </div>
  )
}
