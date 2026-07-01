import { cn } from '../../utils/cn'
import { cardBase, cardInteractive, cardPadding } from '../../utils/styles'

export default function HighlightCard({
  icon: Icon,
  title,
  value,
  description,
  variant = 'feature',
  className,
}) {
  const isStat = variant === 'stat'

  return (
    <article className={cn(cardBase, cardInteractive, cardPadding, 'h-full', className)}>
      {Icon && (
        <div
          className={cn(
            'mb-4 inline-flex items-center justify-center rounded-lg bg-secondary-bg text-primary',
            isStat ? 'h-10 w-10' : 'h-11 w-11',
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </div>
      )}

      {isStat ? (
        <>
          <p className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {value}
          </p>
          <p className="mt-1.5 text-sm text-muted">{title}</p>
        </>
      ) : (
        <>
          <h3 className="font-heading text-lg font-semibold text-text">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        </>
      )}
    </article>
  )
}
