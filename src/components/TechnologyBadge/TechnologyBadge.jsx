import { getTechIcon } from '../../utils/techIcons'
import { cn } from '../../utils/cn'

export default function TechnologyBadge({ name, className, showIcon = true }) {
  const Icon = getTechIcon(name)

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary-bg px-2.5 py-1.5 text-xs font-medium text-text',
        className,
      )}
    >
      {showIcon && (
        <Icon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
      )}
      {name}
    </span>
  )
}
