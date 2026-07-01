import { memo } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { cn } from '../../utils/cn'
import {
  cardBase,
  cardInteractive,
  cardPadding,
  hoverLift,
  hoverLiftTransition,
  imageAspectCertificate,
} from '../../utils/styles'
import Button from '../Button'
import OptimizedImage from '../OptimizedImage'

function CertificateCard({
  title,
  issuedBy,
  year,
  image,
  imageAlt,
  credentialUrl,
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
      <OptimizedImage
        src={image}
        alt={imageAlt}
        aspectClassName={imageAspectCertificate}
        loading="lazy"
      />

      <div className={cn('flex flex-1 flex-col', cardPadding)}>
        <h3 className="font-heading text-lg font-semibold text-text">{title}</h3>
        <p className="mt-2 text-sm text-muted">
          <span className="font-medium text-text">Issued By: </span>
          {issuedBy}
        </p>
        <p className="mt-1 text-sm text-muted">
          <span className="font-medium text-text">Year: </span>
          {year}
        </p>

        <div className="mt-5">
          {credentialUrl ? (
            <Button
              as="a"
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <FiExternalLink className="h-4 w-4" aria-hidden="true" />
              View Certificate
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled
              aria-label="Certificate preview unavailable"
            >
              View Certificate
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default memo(CertificateCard)
