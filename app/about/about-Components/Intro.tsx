'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

import { useSectionInView } from '../lib/hooks'
import { useActiveSectionContext } from '../context/Active-section-context'
import SectionHeading from './Section-Heading'
export default function Intro() {
  const { ref } = useSectionInView('Home', 0.6)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  return (
    <section ref={ref} className="mb-28 max-w-[35rem] scroll-mt-28 text-center sm:mb-0" id="home">
      <SectionHeading>My Portfolio</SectionHeading>
      <div className="items-cente flex justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/static/images/avatar.jpg"
              alt="profile pic"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] dark:text-gray-200 sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Inhwan.</span> I&apos;m a{' '}
        <span className="font-bold">Hello, I&apos;m Inhwan.</span> I&apos;m a{' '}
        <span className="italic">Hello, I&apos;m Inhwan.</span> I&apos;m a{' '}
        <span className="underline">Hello, I&apos;m Inhwan.</span>
        <button className="bg-gray-300" onClick={hrefLink}>
          버튼
        </button>
      </motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-6 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105  dark:bg-white/10 dark:text-white/60"
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          href="/CV.pdf"
          download="true"
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105  dark:bg-white/10 dark:text-white/60"
        >
          Download CV <HiDownload className="opacity-60 transition group-hover:translate-y-0.5" />
        </a>

        <a
          href="https://github.com/InhwanCho"
          target="_blank"
          className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105  dark:bg-white/10 dark:text-white/60"
        >
          {' '}
          <BsGithub />
        </a>
      </motion.div>
    </section>
  )
}

function hrefLink() {
  location.href = '/static/visualProject.html'
}
