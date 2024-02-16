'use client'
import React from 'react'
import SectionHeading from './Section-Heading'
import { useSectionInView } from '../lib/hooks'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '../lib/data'
import { theme } from '@/data/siteMetadata'

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.4)
  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="#e5e7e5" layout="1-column">
        {experiencesData.map((item, i) => (
          <React.Fragment key={i}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === 'light' ? 'rgba(255,255,255,0.05)' : '#f3f4f6',
                boxShadow: 'none',
                border: '0.7px solid rgba(0, 0, 0, 0.4)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? 'rgba(255, 255, 255, 0.15)' : '#d9dae3',
                fontSize: '1.5rem',
                color: theme === 'light' ? 'rgba(231, 224, 224, 0.15)' : '#2e2e30',
                border: '0.7px solid rgba(0, 0, 0, 0.4)',
              }}
            >
              <h2
                className={`mb-2 font-semibold capitalize ${
                  theme === 'light' ? 'text-white/75' : 'text-gray-700'
                }`}
              >
                {item.title}
              </h2>
              <h4
                className={`mb-2 capitalize ${
                  theme === 'light' ? 'text-white/75' : 'text-gray-700'
                }`}
              >
                {item.date}
              </h4>
              {/* <p className="!mt-0 font-normal">{item.location}</p> */}
              <p
                className={`!mt-1 !font-normal ${
                  theme === 'light' ? 'text-white/75' : 'text-gray-700'
                }`}
              >
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
