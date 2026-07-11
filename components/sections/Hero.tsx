import { Sparkles } from "lucide-react"
import { GithubIcon } from "@/components/icons/github-icon"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { HeroBackground } from "@/components/hero/HeroBackground"
import { HeroPrimaryCta } from "@/components/hero/HeroPrimaryCta"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[88dvh] items-center overflow-hidden pt-[68px]"
    >
      <HeroBackground />

      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-10">
        <div className="max-w-[620px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-accent-line bg-brand-accent-dim px-3 py-[5px] font-mono text-[11.5px] tracking-[0.14em] text-brand-accent uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent motion-safe:animate-pulse" />
            Systems Engineer at Develcomp
          </div>

          <h1 className="mb-[1.1rem] text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-foreground md:text-[4.1rem]">
            Daniel Romero
          </h1>

          <p className="mb-9 max-w-[480px] text-[1.05rem] leading-[1.75] text-muted-foreground">
            ML and computer vision engineer building systems that see, reason, and act, from
            fine-tuned vision models to intelligent mobile apps.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <HeroPrimaryCta />
            <a
              href="mailto:diromerop@gmail.com"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-6")}
            >
              Contact
            </a>
            <a
              href="https://github.com/drome05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={cn(buttonVariants({ variant: "outline", size: "icon-lg" }), "rounded-full")}
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#contact"
        className="hero-float-chip absolute right-8 bottom-10 hidden items-center gap-2.5 rounded-full border border-brand-accent-line bg-background/70 py-2 pr-4 pl-2.5 backdrop-blur-md transition-colors hover:border-brand-accent lg:flex"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent-dim text-brand-accent">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          Available for freelance work
        </span>
      </a>
    </section>
  )
}
