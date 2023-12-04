import { genPageMetadata } from 'app/seo'
import Intro from './about-Components/Intro'
import SectionDivider from './about-Components/Section-Divider'
import About from './about-Components/About'
import Projects from './about-Components/Projects'
import Skills from './about-Components/Skills'
import Experience from './about-Components/Experience'
import Contact from './about-Components/Contact'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <main className="flex scroll-mb-20 flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
