import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

import viImg from '../public/viproject.png'
import imgclImg from '../public/imgcl.png'
import nikeImg from '../public/nike.png'
import aiplatformImg from '../public/aiplatform.png'
import mnImg from '../public/mn.png'
import sharkchatbotImg from '../public/sharkchatbot.png'
import corpcommentImg from '../public/corpcomment.png' //net

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: '단국대학교 ',
    description: '에너지공학과 졸업',
    icon: React.createElement(LuGraduationCap),
    date: '2011.03 ~ 2018.02',
  },
  {
    title: '(주)바이탈에어코리아 MainTenance 팀 근무',
    description: '의료기기(양압기, 수면검사기) 점검 및 수리',
    icon: React.createElement(CgWorkAlt),
    date: '2018.10 ~ 2022.07',
  },
  {
    title: '멀티캠퍼스 - 국비 교육 수료',
    description: '딥러닝 기반 AI 엔지니어링 수료',
    icon: React.createElement(LuGraduationCap),
    date: '2022.08 ~ 2023.01',
  },
  {
    title: '한국 전자 기술 연구원(KETI)',
    description:
      '엣지디바이스에서 인공지능 모델 경량화 연구 업무를 수행  -  인공지능 프루닝(경량화) 프로젝트 MN pruning과 Netadapt를 수행',
    icon: React.createElement(CgWorkAlt),
    date: '2023.02 ~ 2023.05',
  },
] as const

export const projectsData = [
  {
    title: 'NIKE clone',
    description:
      '기초에 충실할 필요를 느껴서, 강의나 누군가의 코드를 따라하지 않고, 직접 나이키 공식홈페이지에 들어가서 디자인을 보며 반응형 웹디자인으로 코딩을 했습니다.',
    tags: ['React', 'swiper', 'Redux', 'Tailwind', 'react-icon'],
    imageUrl: nikeImg,
  },
  {
    title: 'AI-platform',
    description: '멀티 턴 챗봇, 이미지, 코드, 음악, 비디오 생성이 가능한 반응형 AI 플랫폼 개발',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Prisma'],
    imageUrl: aiplatformImg,
  },
  {
    title: '운동 계획표 생성 챗봇 개발',
    description:
      '사용자의 운동 목표와 선호하는 운동 방식을 입력 받아 계획표를 자동으로 생성해주는 챗봇을 프롬프트엔지니어링을 활용하여 구현',
    tags: ['Python', 'Streamlit', 'Langchain', 'OpenAI'],
    imageUrl: sharkchatbotImg,
  },
  {
    title: '시각화 프로젝트',
    description:
      '탄소 중립을 위한 기후 기술 정보 시각화. 시각화 모듈로는 plotly, folium, pandas, wordcloud 등을 사용',
    tags: ['Python', 'plotly', 'folium', 'wordcloud', 'pandas'],
    imageUrl: viImg,
  },
  {
    title: 'MN pruning(이미지 모델 경량화)',
    description: 'GPU(A100, RTX-A6000)에서 TensorRT 옵션에 따른 Latency 측정 및 비교 분석',
    tags: ['Python', 'Pytorch', 'TensorRT', 'GPU'],
    imageUrl: mnImg,
  },
  {
    title: 'Netadapt(이미지 모델 경량화)',
    description: 'Netadapt 구현 - Netadapt를 Jetson Xavier AGX에 적용',
    tags: ['Python', 'Pytorch', 'TensorRT', 'GPU', 'Jetson'],
    imageUrl: corpcommentImg,
  },
  {
    title: '이미지 분류 프로젝트',
    description: '구글 이미지를 크롤링하여 인공지능 모델을 활용하여 분류 후 삭제 및 재정렬',
    tags: ['Python', 'Huggingface', 'Pytorch'],
    imageUrl: imgclImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'C++',
  'Docker',
  'swiperjs',
  'Google Spread Sheet',
  'Python',
  'VScode',
  'Linux',
  'Jetson',
  'TensorRT',
  'Framer Motion',
] as const
