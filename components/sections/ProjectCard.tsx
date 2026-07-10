"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

export function ProjectCard({
  texture,
  className,
  children,
}: {
  texture?: boolean
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(
        "spotlight-card flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-[border-color,transform] duration-250 hover:-translate-y-0.5 hover:border-brand-accent-line",
        texture && "card-texture",
        className,
      )}
    >
      {children}
    </div>
  )
}
