import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'
import CareerHighlights from '../components/CareerHighlights'
import About from '../components/About'

const Experience = lazy(() => import('../components/Experience'))
const Projects = lazy(() => import('../components/Projects'))
const Skills = lazy(() => import('../components/Skills'))
const ProfessionalHighlights = lazy(() => import('../components/ProfessionalHighlights'))
const Workshops = lazy(() => import('../components/Workshops'))
const Certifications = lazy(() => import('../components/Certifications'))
const Contact = lazy(() => import('../components/Contact'))

function SectionFallback() {
  return <div className="min-h-[16rem]" aria-hidden="true" />
}

export default function Home() {
  return (
    <>
      <Hero />
      <CareerHighlights />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProfessionalHighlights />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Workshops />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  )
}
