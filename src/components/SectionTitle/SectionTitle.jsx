import { cn } from '../../utils/cn'

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className,
  headingId,
}) {
  const alignment = {
    left: 'text-left',
    center: 'mx-auto text-center',
  }

  return (
    <div className={cn('max-w-2xl', alignment[align], className)}>
      <h2
        id={headingId}
        className="text-2xl font-semibold tracking-tight text-text sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  )
}
