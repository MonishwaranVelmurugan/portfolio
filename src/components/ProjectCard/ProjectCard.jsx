import { memo } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { cn } from '../../utils/cn'
import {
  cardBase,
  cardInteractive,
  cardPadding,
  hoverLift,
  hoverLiftTransition,
} from '../../utils/styles'
import Button from '../Button'
import OptimizedImage from '../OptimizedImage'
import TechnologyBadge from '../TechnologyBadge'

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

function ProjectCard({ project, onViewDetails, className }) {
  const visibleFeatures = project.features.slice(0, 4)
  const remainingFeatures = project.features.length - visibleFeatures.length

  return (
    <motion.article
      variants={cardVariants}
      whileHover={hoverLift}
      transition={hoverLiftTransition}
      className={cn(cardBase, cardInteractive, 'group flex h-full flex-col overflow-hidden', className)}
    >
      <div className="relative">
        <OptimizedImage
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full border border-border bg-background/95 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className={cn('flex flex-1 flex-col', cardPadding)}>
        <h3 className="font-heading text-xl font-semibold text-text">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Technology Stack
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechnologyBadge key={tech} name={tech} />
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Key Features
          </p>
          <ul className="mt-2.5 space-y-1.5">
            {visibleFeatures.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-muted">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
            {remainingFeatures > 0 && (
              <li className="text-sm text-muted">+{remainingFeatures} more features</li>
            )}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => onViewDetails(project)}
          >
            View Project
          </Button>
          {project.github && (
            <Button
              as="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <FiGithub className="h-4 w-4" aria-hidden="true" />
              GitHub
            </Button>
          )}
          {project.demo && (
            <Button
              as="a"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <FiExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default memo(ProjectCard)
