'use client'
import React from 'react'
import SectionHeading from './Section-Heading'
import { projectsData } from '../lib/data'
import Project from './Project'
import { useSectionInView } from '../lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.4)
  return (
    <section id="projects" className="mb-28 scroll-mt-28" ref={ref}>
      <SectionHeading>My Project</SectionHeading>
      <div>
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
