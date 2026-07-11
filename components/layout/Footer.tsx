import { Mail } from "lucide-react"
import { GithubIcon } from "@/components/icons/github-icon"

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-9 text-[12.5px] text-muted-foreground md:px-10">
      <span>Daniel Romero, 2026</span>
      <div className="flex gap-5">
        <a
          href="https://github.com/drome05"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-[color,transform] duration-200 hover:text-brand-accent motion-safe:hover:-translate-y-0.5"
        >
          <GithubIcon className="h-3.5 w-3.5" />
          GitHub
        </a>
        <a
          href="mailto:diromerop@gmail.com"
          className="flex items-center gap-1.5 transition-[color,transform] duration-200 hover:text-brand-accent motion-safe:hover:-translate-y-0.5"
        >
          <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
          Email
        </a>
      </div>
    </footer>
  )
}
