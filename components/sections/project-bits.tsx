import { ArrowUpRight } from "lucide-react"

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  )
}

export function CardTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3.5 flex items-center gap-2 font-mono text-[10.5px] tracking-[0.08em] text-brand-accent uppercase">
      {children}
    </div>
  )
}

export function StatusBadge({ status }: { status: "active" | "wip" }) {
  const isActive = status === "active"
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] normal-case before:h-1.5 before:w-1.5 before:rounded-full before:bg-current " +
        (isActive
          ? "border-brand-accent-line bg-brand-accent-dim text-brand-accent"
          : "border-border bg-white/[0.03] text-muted-foreground")
      }
    >
      {isActive ? "Active" : "In dev"}
    </span>
  )
}

export function CardLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
    </a>
  )
}
