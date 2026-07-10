import { Reveal } from "@/components/reveal"

const SKILL_GROUPS = [
  {
    title: "AI / ML",
    items: ["PyTorch", "TensorFlow", "OpenCV", "CNNs", "Deep Learning", "NLP", "Rec. Systems"],
  },
  {
    title: "Languages",
    items: ["Python", "C++", "Java", "R", "JavaScript", "SQL", "PHP"],
  },
  {
    title: "Systems",
    items: ["TCP/IP", "POSIX", "x86-64 ASM", "ext2", "DNS / DHCP", "Firewalls", "VPNs"],
  },
  {
    title: "Web / Mobile",
    items: ["React Native", "Node.js", "Django", "Firebase", "AWS S3", "REST APIs"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <Reveal className="mb-11">
          <h2 className="text-[1.6rem] font-semibold text-foreground md:text-[2.1rem]">
            Tech Stack
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => (
            <Reveal key={group.title}>
              <div className="border-t border-border pt-4.5">
                <h4 className="mb-3.5 text-[0.95rem] font-semibold text-foreground">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
