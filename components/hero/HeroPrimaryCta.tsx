"use client"

import { LiquidMetalButton } from "@/components/ui/liquid-metal-button"
import { scrollToId } from "@/lib/scroll-to"

/**
 * Thin client wrapper: Hero.tsx is a Server Component, and event-handler
 * props can't cross the server/client boundary directly, so the onClick
 * closure has to originate inside a Client Component instead.
 */
export function HeroPrimaryCta() {
  return <LiquidMetalButton label="View Work" onClick={() => scrollToId("projects")} />
}
