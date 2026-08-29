"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useReveal } from "@/lib/use-reveal"
import { cn } from "@/lib/utils"

const EXPERIENCE = [
  {
    role: "Platform Engineer",
    company: "San Services",
    date: "Aug 2026 - Present",
    location: "San Pedro Sula, Honduras",
    bullets: [
      "Onboard services onto the Kubernetes catalog, provisioning ArgoCD ApplicationSets and Helm-based environments across dev, staging, and production.",
      "Build and maintain CI/CD pipelines that build, push, and roll out container images via GitOps.",
      "Support platform infrastructure for internal teams, including database and Redis provisioning and access management.",
    ],
  },
  {
    role: "Systems Engineer",
    company: "Develcomp",
    date: "May 2026 - Aug 2026",
    location: "San Pedro Sula, Honduras",
    bullets: [
      "Lead end-to-end network deployments and complex troubleshooting engagements across client sites.",
      "Oversee network configuration, IPTV/camera system maintenance, and SAP Business One operations simultaneously across multiple clients.",
      "Serve as a technical resource for junior staff on TCP/IP, firewall policy, VPN architecture, and ERP workflows.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Independent",
    date: "2026 - Present",
    location: "Remote",
    bullets: [
      "Design and build production websites for business clients, end to end: design, development, and deployment.",
      "Shipped develcomp.com, the marketing site for an IT and telecommunications company.",
    ],
  },
  {
    role: "Engineering Intern (4 summers)",
    company: "Develcomp",
    date: "Summers 2022 - 2025",
    location: "San Pedro Sula, Honduras",
    bullets: [
      "Progressed from AV/IPTV systems (2022) to SAP Business One ERP administration (2023) to network infrastructure (2024-2025).",
      "Contributed to a 350-node network deployment for a large-scale call center: structured cabling, hardware procurement, rack setup, and full ISP/WAN connectivity.",
      "Enforced firewall rules, VPN tunnels, and access-control policies to meet security compliance requirements.",
      "Earned Ruijie Specialist Engineer certification (June 2024) in enterprise network configuration and management.",
    ],
  },
  {
    role: "Vice-President & President",
    company: "Student Org. for Athletic Relations (SOAR), ORU",
    date: "Aug 2024 - May 2026",
    location: "Tulsa, OK",
    bullets: [
      "Led event logistics and volunteer coordination for campus-wide athletic events.",
      "Developed promotion strategies that expanded student participation.",
    ],
  },
]

function TimelineItem({ job }: { job: (typeof EXPERIENCE)[number] }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "relative pl-9 transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0",
      )}
    >
      <span
        className={cn(
          "absolute top-1.5 left-0 h-3 w-3 rounded-full border-2 transition-[background-color,border-color,box-shadow] duration-500",
          isVisible
            ? "border-brand-accent bg-brand-accent shadow-[0_0_10px_rgba(167,139,250,0.65)]"
            : "border-border bg-background",
        )}
      />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto] md:gap-6">
        <div>
          <div className="text-[1.02rem] font-semibold text-foreground">{job.role}</div>
          <div className="mt-0.5 text-[0.9rem] text-brand-accent">{job.company}</div>
        </div>
        <div className="text-left md:text-right">
          <div className="font-mono text-[11.5px] text-muted-foreground">{job.date}</div>
          <div className="mt-0.5 text-[11.5px] text-muted-foreground/70">{job.location}</div>
        </div>
        <ul className="col-span-full mt-1.5 list-disc space-y-1 pl-4">
          {job.bullets.map((bullet) => (
            <li key={bullet} className="text-[0.9rem] leading-[1.75] text-muted-foreground">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Experience() {
  const listRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.8", "end 0.5"],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <SectionHeading icon={Briefcase} title="Experience" />

        <div ref={listRef} className="relative flex flex-col gap-8">
          <div className="absolute top-2 bottom-2 left-[5px] w-px bg-border" aria-hidden="true" />
          <motion.div
            className="absolute top-2 left-[5px] w-px origin-top bg-brand-accent"
            style={{
              scaleY: reduceMotion ? 1 : lineScale,
              height: "calc(100% - 16px)",
            }}
            aria-hidden="true"
          />

          {EXPERIENCE.map((job) => (
            <TimelineItem key={job.role} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
