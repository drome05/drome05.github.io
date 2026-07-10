"use client"

import { cn } from "@/lib/utils"
import { useReveal } from "@/lib/use-reveal"

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </div>
  )
}
