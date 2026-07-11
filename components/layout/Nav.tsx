"use client"

import { useEffect, useRef, useState } from "react"
import { GithubIcon } from "@/components/icons/github-icon"
import { cn } from "@/lib/utils"
import { scrollToId } from "@/lib/scroll-to"

const NAV_LINKS = [
  { label: "Work", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
]

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

        {/* Section links live in the bottom nav bar on mobile; shown inline here on desktop. */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToId(link.id)}
                className="text-[13.5px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/drome05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex text-muted-foreground transition-colors hover:text-brand-accent"
            >
              <GithubIcon className="h-[17px] w-[17px]" />
            </a>
          </li>
        </ul>

        <a
          href="https://github.com/drome05"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex text-muted-foreground transition-colors hover:text-brand-accent md:hidden"
        >
          <GithubIcon className="h-[19px] w-[19px]" />
        </a>
      </nav>
    </>
  )
}
