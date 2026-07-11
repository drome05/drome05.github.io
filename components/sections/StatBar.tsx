"use client"

import { useReveal } from "@/lib/use-reveal"

export function StatBar({ value, label }: { value: number; label: string }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref}>
      <span className="mb-0.5 block font-mono text-2xl font-bold text-brand-accent">
        {value}%
      </span>
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <div className="mt-1.5 h-1 w-[90px] overflow-hidden rounded-full bg-muted">
        <span
          className="block h-full rounded-full bg-brand-accent transition-[width] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: isVisible ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  )
}
