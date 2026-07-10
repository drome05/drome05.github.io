import { Reveal } from "@/components/reveal"

const EXPERIENCE = [
  {
    role: "Systems Engineer",
    company: "Develcomp",
    date: "May 2026 - Present",
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

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <Reveal className="mb-11">
          <h2 className="text-[1.6rem] font-semibold text-foreground md:text-[2.1rem]">
            Experience
          </h2>
        </Reveal>

        <div>
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.role}>
              <div className={i === 0 ? "grid grid-cols-1 gap-2 py-7 md:grid-cols-[1fr_auto] md:gap-6" : "grid grid-cols-1 gap-2 border-t border-border py-7 md:grid-cols-[1fr_auto] md:gap-6"}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
