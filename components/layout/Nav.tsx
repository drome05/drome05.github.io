"use client"

import { GithubIcon } from "@/components/icons/github-icon"
import { FloatingNav } from "@/components/ui/floating-nav"
import { scrollToId } from "@/lib/scroll-to"

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[100] flex h-[68px] items-center justify-between px-5 md:px-10">
      <button
        onClick={() => scrollToId("top")}
        className="group flex items-center gap-2.5 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] transition-transform duration-200 motion-safe:hover:scale-105"
        aria-label="Scroll to top"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(167,139,250,0.7)] motion-safe:animate-pulse" />
        <span className="text-[14.5px] font-semibold text-foreground transition-colors group-hover:text-brand-accent">
          Daniel Romero
        </span>
      </button>

      {/* Section navigation: the floating pill nav, centered in the header on desktop.
          Below lg, it lives as its own fixed bar at the bottom of the screen instead
          (see app/page.tsx) — the header otherwise stays fully transparent, just the
          brand mark and GitHub link floating over whatever's behind them. */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
        <FloatingNav variant="inline" />
      </div>

      <a
        href="https://github.com/drome05"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hidden text-muted-foreground drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:text-brand-accent motion-safe:hover:scale-110 lg:flex"
      >
        <GithubIcon className="h-[17px] w-[17px]" />
      </a>

      <a
        href="https://github.com/drome05"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex text-muted-foreground drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:text-brand-accent motion-safe:hover:scale-110 lg:hidden"
      >
        <GithubIcon className="h-[19px] w-[19px]" />
      </a>
    </nav>
  )
}
