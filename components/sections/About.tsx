import Image from "next/image"
import { Download, User } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <SectionHeading icon={User} title="About" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr] md:items-center md:gap-14">
          <Reveal>
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[260px] overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/daniel-romero.jpg"
                alt="Daniel Romero"
                fill
                sizes="260px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delayMs={80} className="space-y-4">
            <p className="text-[1.05rem] leading-[1.8] text-muted-foreground">
              Hey, I&apos;m Daniel. I grew up in San Pedro Sula, Honduras, and from a young age I
              was hooked on technology, the itch to understand how things actually work under the
              hood. That curiosity turned into a computer science degree at Oral Roberts
              University in Tulsa, and a path that ended up spanning more than one lane: enterprise
              networking and IT at Develcomp, low-level systems programming, and now machine
              learning and computer vision.
            </p>
            <p className="text-[1.05rem] leading-[1.8] text-muted-foreground">
              I like building things end to end, whether that&apos;s a fine-tuned vision model, a
              filesystem and shell written from scratch, or a client&apos;s website from design to
              deployment. Bilingual in English and Spanish, I spent two years leading SOAR, our
              campus athletics organization, first as Vice President and then President. These
              days I&apos;m a Systems Engineer at Develcomp during the day, and I build AI products
              and client sites on the side.
            </p>
            <a
              href="/resume/daniel-romero-resume.pdf"
              download
              className={cn(buttonVariants({ variant: "outline" }), "gap-2 rounded-full px-5")}
            >
              <Download className="h-4 w-4" strokeWidth={1.75} />
              Download Resume
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
