import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub, FiX } from 'react-icons/fi'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import Button from '../Button'
import TechnologyBadge from '../TechnologyBadge'

function ModalSection({ title, children }) {
  return (
    <div>
      <h3 className="font-heading text-base font-semibold text-text">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  )
}

function ScreenshotPlaceholder({ label, index }) {
  return (
    <div
      className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-secondary-bg"
      role="img"
      aria-label={`${label} screenshot placeholder ${index}`}
    >
      <p className="px-4 text-center text-xs text-muted">Screenshot placeholder</p>
    </div>
  )
}

export default function ProjectModal({ project, isOpen, onClose }) {
  const dialogRef = useRef(null)
  useFocusTrap(isOpen, dialogRef)

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const screenshots =
    project?.screenshots?.length > 0
      ? project.screenshots
      : [1, 2, 3]

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
          role="presentation"
        >
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-text/40 backdrop-blur-[2px]"
            aria-label="Close project details"
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-border bg-background shadow-nav sm:rounded-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5 sm:px-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {project.category}
                </p>
                <h2
                  id="project-modal-title"
                  className="mt-1 font-heading text-2xl font-semibold text-text"
                >
                  {project.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-secondary-bg hover:text-text"
                aria-label="Close dialog"
              >
                <FiX className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              <div className="overflow-hidden rounded-xl border border-border bg-secondary-bg">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>

              <div className="mt-6 space-y-6">
                <ModalSection title="Project Overview">{project.overview}</ModalSection>
                <ModalSection title="Problem Statement">{project.problem}</ModalSection>
                <ModalSection title="Solution">{project.solution}</ModalSection>

                <div>
                  <h3 className="font-heading text-base font-semibold text-text">
                    Technologies Used
                  </h3>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <TechnologyBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-base font-semibold text-text">
                    Key Features
                  </h3>
                  <ul className="mt-2.5 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm text-muted">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <ModalSection title="Architecture Overview">
                  {project.architecture}
                </ModalSection>
                <ModalSection title="Challenges">{project.challenges}</ModalSection>
                <ModalSection title="Outcome">{project.outcome}</ModalSection>
                {project.businessValue && (
                  <ModalSection title="Business Value">{project.businessValue}</ModalSection>
                )}

                <div>
                  <h3 className="font-heading text-base font-semibold text-text">
                    Screenshots
                  </h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {screenshots.map((item, index) =>
                      typeof item === 'string' ? (
                        <img
                          key={item}
                          src={item}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="aspect-video w-full rounded-lg border border-border object-cover"
                        />
                      ) : (
                        <ScreenshotPlaceholder
                          key={index}
                          label={project.title}
                          index={index + 1}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {(project.github || project.demo) && (
              <div className="flex flex-wrap gap-3 border-t border-border px-6 py-4 sm:px-8">
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
                    View on GitHub
                  </Button>
                )}
                {project.demo && (
                  <Button
                    as="a"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                  >
                    View Live Demo
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
