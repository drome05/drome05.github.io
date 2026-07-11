"use client"

import { useEffect, useRef, useState } from "react"
import { GithubIcon } from "@/components/icons/github-icon"
import { FloatingNav } from "@/components/ui/floating-nav"
import { cn } from "@/lib/utils"
import { scrollToId } from "@/lib/scroll-to"

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !("IntersectionObserver" in window)) return
    const io = new IntersectionObserver(([entry]) => setIsScrolled(!entry.isIntersecting), {
      threshold: 0,
    })
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-px w-px" aria-hidden="true" />
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-[100] flex h-[68px] items-center justify-between px-5 backdrop-blur-md transition-colors duration-300 md:px-10",
          isScrolled ? "bg-background/92 border-b border-border" : "bg-background/78 border-b border-transparent",
        )}
      >
        <button
          onClick={() => scrollToId("top")}
          className="flex items-center gap-2.5"
          aria-label="Scroll to top"
        >
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] border border-brand-accent-line bg-brand-accent-dim font-mono text-xs font-bold text-brand-accent">
            DR
          </span>
          <span className="text-[14.5px] font-semibold text-foreground">Daniel Romero</span>
        </button>

        {/* Section navigation: the floating pill nav, centered in the header on desktop.
            Below lg, it lives as its own fixed bar at the bottom of the screen instead
            (see app/page.tsx) — the header just keeps the brand mark and GitHub link. */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <FloatingNav variant="inline" />
        </div>

        <a
          href="https://github.com/drome05"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hidden text-muted-foreground transition-colors hover:text-brand-accent lg:flex"
        >
          <GithubIcon className="h-[17px] w-[17px]" />
        </a>

        <a
          href="https://github.com/drome05"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex text-muted-foreground transition-colors hover:text-brand-accent lg:hidden"
        >
          <GithubIcon className="h-[19px] w-[19px]" />
        </a>
      </nav>
    </>
  )
}
