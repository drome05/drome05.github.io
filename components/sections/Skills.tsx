import {
  Cpu,
  Grid3x3,
  Layers,
  MessageSquare,
  Sparkles,
  Database,
  Network,
  Terminal,
  HardDrive,
  Globe,
  ShieldCheck,
  Lock,
  Webhook,
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Marquee } from "@/components/marquee"
import { TechChip, type TechItem } from "@/components/tech-chip"

const SKILL_GROUPS: { title: string; items: TechItem[] }[] = [
  {
    title: "AI / ML",
    items: [
      { label: "PyTorch", brand: "pytorch" },
      { label: "TensorFlow", brand: "tensorflow" },
      { label: "OpenCV", brand: "opencv" },
      { label: "CoreML", brand: "apple" },
      { label: "CNNs", icon: Grid3x3 },
      { label: "Deep Learning", icon: Layers },
      { label: "NLP", icon: MessageSquare },
      { label: "Rec. Systems", icon: Sparkles },
    ],
  },
  {
    title: "Languages",
    items: [
      { label: "Python", brand: "python" },
      { label: "C++", brand: "cplusplus" },
      { label: "Java", brand: "openjdk" },
      { label: "R", brand: "r" },
      { label: "JavaScript", brand: "javascript" },
      { label: "SQL", icon: Database },
      { label: "PHP", brand: "php" },
    ],
  },
  {
    title: "Platform / Infra",
    items: [
      { label: "Kubernetes", brand: "kubernetes" },
      { label: "Docker", brand: "docker" },
      { label: "ArgoCD", brand: "argo" },
      { label: "Helm", brand: "helm" },
      { label: "Terraform", brand: "terraform" },
      { label: "AWS", brand: "amazonaws" },
      { label: "GitHub Actions", brand: "githubactions" },
      { label: "Redis", brand: "redis" },
      { label: "Datadog", brand: "datadog" },
    ],
  },
  {
    title: "Systems",
    items: [
      { label: "TCP/IP", icon: Network },
      { label: "POSIX", icon: Terminal },
      { label: "x86-64 ASM", icon: Cpu },
      { label: "ext2", icon: HardDrive },
      { label: "DNS / DHCP", icon: Globe },
      { label: "Firewalls", icon: ShieldCheck },
      { label: "VPNs", icon: Lock },
    ],
  },
  {
    title: "Web / Mobile",
    items: [
      { label: "React Native", brand: "react" },
      { label: "Node.js", brand: "nodedotjs" },
      { label: "Django", brand: "django" },
      { label: "Firebase", brand: "firebase" },
      { label: "REST APIs", icon: Webhook },
    ],
  },
]

const ALL_ITEMS = SKILL_GROUPS.flatMap((g) => g.items)

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <SectionHeading
          icon={Cpu}
          title="Tech Stack"
          description="The languages, frameworks, and tools behind the projects above."
        />
      </div>

      <Reveal className="mb-11">
        <Marquee>
          {ALL_ITEMS.map((item) => (
            <TechChip key={item.label} item={item} />
          ))}
        </Marquee>
      </Reveal>

      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delayMs={i * 60}>
              <div className="border-t border-border pt-4.5">
                <h4 className="mb-3.5 text-[0.95rem] font-semibold text-foreground">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <TechChip key={item.label} item={item} />
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
