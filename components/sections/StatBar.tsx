export function StatBar({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <span className="mb-0.5 block font-mono text-2xl font-bold text-brand-accent">
        {value}%
      </span>
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <div className="mt-1.5 h-1 w-[90px] overflow-hidden rounded-full bg-muted">
        <span className="block h-full rounded-full bg-brand-accent" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
