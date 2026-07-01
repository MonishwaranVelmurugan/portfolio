import { cn } from '../../utils/cn'

export default function ContactCard({ label, value, href, icon: Icon, className }) {
  const content = (
    <>
      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-bg text-primary"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
        <p className="mt-1 text-sm font-medium text-text">{value}</p>
      </div>
    </>
  )

  const cardClasses = cn(
    'flex items-center gap-4 rounded-[var(--radius-card)] border border-border bg-background p-6 shadow-soft transition-all duration-200 hover:border-primary/20 hover:shadow-nav',
    className,
  )

  if (href) {
    const isExternal = href.startsWith('http')

    return (
      <a
        href={href}
        className={cardClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-label={`${label}: ${value}`}
      >
        {content}
      </a>
    )
  }

  return (
    <div className={cardClasses} aria-label={`${label}: ${value}`}>
      {content}
    </div>
  )
}
