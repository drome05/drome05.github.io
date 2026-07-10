import { Reveal } from "@/components/reveal"

const EXPERIENCE = [
  {
    role: "Network Infrastructure Intern",
    company: "Develcomp",
    date: "May - Sep 2024",
    location: "San Pedro Sula, Honduras",
    bullets: [
      "Configured and maintained routers, switches, and firewalls across multiple locations.",
      "Supported VPN and data-protection controls, contributing to security compliance posture.",
      "Earned Ruijie Specialist Engineer certification in network configuration and management.",
    ],
  },
  {
    role: "Vice-President & President",
    company: "Student Org. for Athletic Relations (SOAR), ORU",
    date: "Aug 2024 - Present",
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
