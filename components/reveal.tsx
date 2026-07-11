"use client"

import { cn } from "@/lib/utils"
import { useReveal } from "@/lib/use-reveal"

export function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode
  className?: string
  delayMs?: number
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={cn(
        "transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-[0.96] opacity-0 translate-y-7",
        className,
      )}
    >
      {children}
    </div>
  )
}
