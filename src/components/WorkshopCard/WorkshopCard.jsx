import { memo } from 'react'
import { motion } from 'framer-motion'
import { FiClock, FiMapPin, FiUsers } from 'react-icons/fi'
import { cn } from '../../utils/cn'
import {
  cardBase,
  cardInteractive,
  cardPadding,
  hoverLift,
  hoverLiftTransition,
} from '../../utils/styles'
import OptimizedImage from '../OptimizedImage'

function WorkshopCard({
  title,
  institution,
  audience,
  duration,
  description,
  image,
  imageAlt,
  className,
}) {
  return (
    <motion.article
      whileHover={hoverLift}
      transition={hoverLiftTransition}
      className={cn(
        cardBase,
        cardInteractive,
        'flex h-full flex-col overflow-hidden',
        className,
      )}
    >
      <OptimizedImage src={image} alt={imageAlt} loading="lazy" />

      <div className={cn('flex flex-1 flex-col', cardPadding)}>
        <h3 className="font-heading text-lg font-semibold text-text">{title}</h3>

        <div className="mt-4 space-y-2.5">
          <p className="flex items-start gap-2 text-sm text-muted">
            <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="font-medium text-text">Institution: </span>
              {institution}
            </span>
          </p>
          <p className="flex items-start gap-2 text-sm text-muted">
            <FiUsers className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="font-medium text-text">Audience: </span>
              {audience}
            </span>
          </p>
          <p className="flex items-start gap-2 text-sm text-muted">
            <FiClock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="font-medium text-text">Duration: </span>
              {duration}
            </span>
          </p>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </motion.article>
  )
}

export default memo(WorkshopCard)
