"use client"

import { scrollToId } from "@/lib/scroll-to"

export function ScrollLink({
  id,
  className,
  children,
}: {
  id: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <button onClick={() => scrollToId(id)} className={className}>
      {children}
    </button>
  )
}
