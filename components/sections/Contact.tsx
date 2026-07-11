import { Mail, MessageCircle, Phone, MapPin } from "lucide-react"
import { GithubIcon } from "@/components/icons/github-icon"
import { Reveal } from "@/components/reveal"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 text-center md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(60% 55% at 50% 30%, rgba(167, 139, 250, 0.1), transparent)",
        }}
      />
      <Reveal className="relative mx-auto max-w-[720px] px-5 md:px-10">
        <span className="mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-accent-line bg-brand-accent-dim text-brand-accent">
          <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <h2 className="mb-7 text-[1.8rem] leading-[1.2] font-semibold text-foreground md:text-[2.6rem]">
          Let&apos;s build something together.
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
            className="flex items-center gap-2 text-[13.5px] text-muted-foreground transition-[color,transform] duration-200 hover:text-brand-accent motion-safe:hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
            diromerop@gmail.com
          </a>
          <a
            href="https://github.com/drome05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13.5px] text-muted-foreground transition-[color,transform] duration-200 hover:text-brand-accent motion-safe:hover:-translate-y-0.5"
          >
            <GithubIcon className="h-4 w-4" />
            github.com/drome05
          </a>
          <a
            href="tel:+50431802458"
            className="flex items-center gap-2 text-[13.5px] text-muted-foreground transition-[color,transform] duration-200 hover:text-brand-accent motion-safe:hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            +504 3180-2458
          </a>
          <a
            href="tel:+15395254337"
            className="flex items-center gap-2 text-[13.5px] text-muted-foreground transition-[color,transform] duration-200 hover:text-brand-accent motion-safe:hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            +1 539-525-4337
          </a>
          <span className="flex items-center gap-2 text-[13.5px] text-muted-foreground">
            <MapPin className="h-4 w-4" strokeWidth={1.75} />
            San Pedro Sula, Honduras
          </span>
        </div>
      </Reveal>
    </section>
  )
}
