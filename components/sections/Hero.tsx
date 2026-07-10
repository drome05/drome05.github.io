import { GithubIcon } from "@/components/icons/github-icon"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ScrollLink } from "@/components/scroll-link"
import { HeroShaderPanel } from "@/components/hero/HeroShaderPanel"

export function Hero() {
  return (
    <section id="top" className="pt-[calc(68px+3rem)] pb-12 md:pt-[calc(68px+4rem)] md:pb-16">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 px-5 md:grid-cols-[1.05fr_0.85fr] md:gap-16 md:px-10">
        <div>
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
            <ScrollLink id="projects" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}>
              View Work
            </ScrollLink>
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

        <HeroShaderPanel />
      </div>
    </section>
  )
}
