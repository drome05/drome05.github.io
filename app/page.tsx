import { Nav } from "@/components/layout/Nav"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Contact } from "@/components/sections/Contact"
import { FloatingNav } from "@/components/ui/floating-nav"

function Divider() {
  return <hr className="mx-auto max-w-[1180px] border-border" />
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pb-24 lg:pb-0">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <div className="lg:hidden">
        <FloatingNav />
      </div>
    </>
  )
}
