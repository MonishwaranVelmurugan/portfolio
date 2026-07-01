import { useState } from 'react'
import { motion } from 'framer-motion'
import { projectsContent } from '../../data/projects'
import Container from '../Container'
import FadeIn from '../FadeIn'
import ProjectCard from '../ProjectCard'
import ProjectModal from '../ProjectModal'
import SectionHeader from '../SectionHeader'

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function Projects() {
  const { title, subtitle, items } = projectsContent
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  return (
    <section
      id="projects"
      className="bg-background py-20 sm:py-24 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            headingId="projects-heading"
          />
        </FadeIn>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={openModal}
            />
          ))}
        </motion.div>
      </Container>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={closeModal}
      />
    </section>
  )
}
