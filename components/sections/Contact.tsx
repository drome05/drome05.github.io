import { Mail, Phone, MapPin } from "lucide-react"
import { GithubIcon } from "@/components/icons/github-icon"
import { Reveal } from "@/components/reveal"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Contact() {
  return (
    <section id="contact" className="py-16 text-center md:py-24">
      <Reveal className="mx-auto max-w-[720px] px-5 md:px-10">
        <h2 className="mb-7 text-[1.8rem] leading-[1.2] font-semibold text-foreground md:text-[2.6rem]">
          Open to ML and computer vision roles starting May 2026.
        </h2>

        <a
          href="mailto:diromerop@gmail.com"
          className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}
        >
          Email Me
        </a>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          <a
            href="mailto:diromerop@gmail.com"
            className="flex items-center gap-2 text-[13.5px] text-muted-foreground transition-colors hover:text-brand-accent"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
            diromerop@gmail.com
          </a>
          <a
            href="https://github.com/drome05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13.5px] text-muted-foreground transition-colors hover:text-brand-accent"
          >
            <GithubIcon className="h-4 w-4" />
            github.com/drome05
          </a>
          <a
            href="tel:+15395254337"
            className="flex items-center gap-2 text-[13.5px] text-muted-foreground transition-colors hover:text-brand-accent"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            +1 539-525-4337
          </a>
          <span className="flex items-center gap-2 text-[13.5px] text-muted-foreground">
            <MapPin className="h-4 w-4" strokeWidth={1.75} />
            Tulsa, OK, open to relocation
          </span>
        </div>
      </Reveal>
    </section>
  )
}
