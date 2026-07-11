import { cn } from "@/lib/utils"

export function Marquee({
  children,
  className,
  durationSeconds = 34,
}: {
  children: React.ReactNode
  className?: string
  durationSeconds?: number
}) {
  return (
    <div className={cn("marquee", className)}>
      <div
        className="marquee-track"
        style={{ ["--marquee-duration" as string]: `${durationSeconds}s` }}
      >
        <div className="flex shrink-0 items-center gap-3">{children}</div>
        <div className="flex shrink-0 items-center gap-3" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
