import { Reveal } from "@/components/reveal"
import { ProjectCard } from "@/components/sections/ProjectCard"
import { StatBar } from "@/components/sections/StatBar"
import { Tag, CardTag, StatusBadge, CardLink } from "@/components/sections/project-bits"

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <Reveal className="mb-11 max-w-[620px]">
          <h2 className="mb-2.5 text-[1.6rem] font-semibold text-foreground md:text-[2.1rem]">
            Selected Work
          </h2>
          <p className="text-[0.95rem] leading-[1.7] text-muted-foreground">
            Eight projects spanning computer vision, systems programming, web, and mobile
            development.
          </p>
        </Reveal>

        <div className="grid grid-cols-12 gap-4.5">
          <Reveal className="col-span-12 md:col-span-7">
            <ProjectCard>
              <CardTag>
                Flagship project <StatusBadge status="active" />
              </CardTag>
              <h3 className="mb-2 text-[1.15rem] font-semibold text-foreground">
                Estella: AI Fashion Assistant
              </h3>
              <p className="mb-4 text-[0.9rem] leading-[1.65] text-muted-foreground">
                Ensemble AI system that classifies wardrobe items and generates outfit
                recommendations using computer vision, color theory, and a temporal optimization
                engine.
              </p>
              <div className="mb-5 flex gap-7">
                <StatBar value={88} label="Classification accuracy" />
                <StatBar value={95} label="Color match reliability" />
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                <Tag>Python</Tag>
                <Tag>PyTorch</Tag>
                <Tag>OpenCV</Tag>
                <Tag>ResNet-50</Tag>
                <Tag>Computer Vision</Tag>
              </div>
              <CardLink href="https://github.com/drome05/Estella">View on GitHub</CardLink>
            </ProjectCard>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-5">
            <ProjectCard texture>
              <CardTag>Systems programming</CardTag>
              <h3 className="mb-2 text-[1.15rem] font-semibold text-foreground">
                ext2 Filesystem + Shell
              </h3>
              <p className="mb-4 text-[0.9rem] leading-[1.65] text-muted-foreground">
                TCP/IP client-server implementation of a Unix-style ext2 file system in C++, with
                inode management, directory traversal, and a cooperative thread scheduler using
                inline x86-64 context switching.
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                <Tag>C++</Tag>
                <Tag>x86-64 ASM</Tag>
                <Tag>TCP/IP</Tag>
                <Tag>POSIX</Tag>
              </div>
            </ProjectCard>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4">
            <ProjectCard>
              <CardTag>
                Mobile <StatusBadge status="wip" />
              </CardTag>
              <h3 className="mb-2 text-[1.15rem] font-semibold text-foreground">OneSelf</h3>
              <p className="mb-4 text-[0.9rem] leading-[1.65] text-muted-foreground">
                Personal life tracking app with workout logs, mood tracking, habit streaks, and a
                unified wellness dashboard.
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                <Tag>React Native</Tag>
                <Tag>Firebase</Tag>
                <Tag>Node.js</Tag>
              </div>
              <CardLink href="https://github.com/drome05/OneSelf">View on GitHub</CardLink>
            </ProjectCard>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4">
            <ProjectCard>
              <h3 className="mb-2 text-[1.15rem] font-semibold text-foreground">StepQuest</h3>
              <p className="mb-4 text-[0.9rem] leading-[1.65] text-muted-foreground">
                Fitness RPG that converts real-world step count into in-game power. Walk more, hit
                harder, and battle bosses with your steps.
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                <Tag>Java</Tag>
                <Tag>Android Studio</Tag>
                <Tag>Sensor API</Tag>
              </div>
              <CardLink href="https://github.com/drome05/StepQuest">View on GitHub</CardLink>
            </ProjectCard>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4">
            <ProjectCard texture>
              <CardTag>Computer vision</CardTag>
              <h3 className="mb-2 text-[1.15rem] font-semibold text-foreground">
                AI Face Recognition
              </h3>
              <p className="mb-4 text-[0.9rem] leading-[1.65] text-muted-foreground">
                CNN for real-time face detection and recognition in live video streams, with
                hyperparameter tuning and dataset augmentation for higher accuracy.
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                <Tag>Python</Tag>
                <Tag>TensorFlow</Tag>
                <Tag>OpenCV</Tag>
              </div>
            </ProjectCard>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4">
            <ProjectCard texture>
              <CardTag>
                Web, client work <StatusBadge status="active" />
              </CardTag>
              <h3 className="mb-2 text-[1.15rem] font-semibold text-foreground">develcomp.com</h3>
              <p className="mb-4 text-[0.9rem] leading-[1.65] text-muted-foreground">
                Marketing site for an IT and telecommunications company, designed and built from
                scratch and shipped to production.
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                <Tag>HTML/CSS</Tag>
                <Tag>JavaScript</Tag>
                <Tag>ES Modules</Tag>
              </div>
              <CardLink href="https://develcomp.com">Visit site</CardLink>
            </ProjectCard>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4">
            <ProjectCard>
              <CardTag>Tooling, Discord bot</CardTag>
              <h3 className="mb-2 text-[1.15rem] font-semibold text-foreground">Q-bert</h3>
              <p className="mb-4 text-[0.9rem] leading-[1.65] text-muted-foreground">
                10-man customs Valorant bot that manages competitive lobbies, player queues, and
                match coordination via Discord.
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                <Tag>Python</Tag>
                <Tag>Discord API</Tag>
                <Tag>Async</Tag>
              </div>
              <CardLink href="https://github.com/drome05/Q-bert">View on GitHub</CardLink>
            </ProjectCard>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4">
            <ProjectCard>
              <CardTag>Accessibility, NLP</CardTag>
              <h3 className="mb-2 text-[1.15rem] font-semibold text-foreground">
                AI Text-to-Speech from Paper
              </h3>
              <p className="mb-4 text-[0.9rem] leading-[1.65] text-muted-foreground">
                OCR pipeline that extracts text from scanned documents and converts it to
                natural-sounding speech, making printed materials accessible to everyone.
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                <Tag>Python</Tag>
                <Tag>OpenCV</Tag>
                <Tag>TensorFlow</Tag>
                <Tag>TTS</Tag>
              </div>
            </ProjectCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
