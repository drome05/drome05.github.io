import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

export function SectionHeading({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: LucideIcon
  title: string
  description?: string
  className?: string
}) {
  return (
    <Reveal className={cn("mb-11 flex items-start gap-4", className)}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-accent-line bg-brand-accent-dim text-brand-accent">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div>
        <h2 className="text-[1.6rem] font-semibold text-foreground md:text-[2.1rem]">{title}</h2>
        {description && (
          <p className="mt-1.5 max-w-[520px] text-[0.95rem] leading-[1.7] text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}
