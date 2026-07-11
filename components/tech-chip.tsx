import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type TechItem = {
  label: string
  /** simple-icons slug: renders the real brand mark in its own brand color */
  brand?: string
  /** lucide fallback for concepts without a brand mark (e.g. "TCP/IP") */
  icon?: LucideIcon
}

export function TechChip({ item, className }: { item: TechItem; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card py-1.5 pr-3.5 pl-1.5 transition-colors hover:border-brand-accent-line",
        className,
      )}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.05]">
        {item.brand ? (
          <img
            src={`https://cdn.simpleicons.org/${item.brand}`}
            alt=""
            className="h-3.5 w-3.5"
            loading="lazy"
            width={14}
            height={14}
          />
        ) : item.icon ? (
          <item.icon className="h-3.5 w-3.5 text-brand-accent" strokeWidth={1.75} />
        ) : null}
      </span>
      <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
    </span>
  )
}
