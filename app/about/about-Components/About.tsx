'use client'
import React from 'react'
import SectionHeading from './Section-Heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '../lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About', 0.9)

  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="space-y-2 font-medium">
        <p className="">
          저는 AI 엔지니어링 교육을 이수하고 현재 프론트엔드 개발 분야에서 새로운 경로를 모색하는
          중입니다.
        </p>
        <p>
          Nike 클론 코딩에서 시작해 AI 플랫폼과 데이터 시각화 프로젝트에 이르기까지, 제작한
          작업물들은 디자인의 우수성뿐 아니라 기능적 완성도에도 주력했습니다.
        </p>
        <p>
          {' '}
          이제 저는 프론트엔드 영역에서 폭넓은 지식과 기술력을 발휘하여 혁신적인 가치를 창출하고자
          합니다.
        </p>
        <p> 연구소에서의 짧지만 가치 있는 경험은 저의 전문성을 한층 더 끌어올렸습니다.</p>
        <p>
          {' '}
          다양한 AI 프로젝트에 참여하면서, 문제 해결 능력을 강화했으며 코딩 능력도 한층
          향상되었습니다.
        </p>
        <p>
          {' '}
          현재 저는 기술의 한계를 넘어 새롭고 창의적인 해결책을 찾기 위해 쉼 없이 도전하고 있습니다.
        </p>
        <p>
          {' '}
          비록 프론트엔드 개발자로서의 여정이 막 시작되었지만, 열정을 가지고 학습을 지속함으로써
          짧은 기간 내에 크게 성장할 것이라 확신합니다.
        </p>
        <br></br>
        <p>지속적인 노력과 꾸준함을 저의 가장 큰 장점으로 삼고 있습니다.</p>
        <p>
          {' '}
          여가 시간에는 클라이밍과 요가 그리고 강아지 산책으로 몸과 마음의 균형을 맞추며 스트레스를
          해소합니다.
        </p>
        <p>
          {' '}
          저는 끊임없이 새로운 지식을 향한 호기심을 가지고 있고, 최근에는 Next.js와 Flutter, 그리고
          서버 사이드 렌더링(Server Side Rendering)에 많은 관심을 기울이고 있습니다.
        </p>
        <p>
          {' '}
          이처럼 항상 새로움을 추구하는 저의 성향은 프론트엔드 개발자로서 제가 더 빠르고 효과적으로
          성장할 수 있는 바탕이 되고 있습니다.
        </p>
      </div>
    </motion.section>
  )
}
