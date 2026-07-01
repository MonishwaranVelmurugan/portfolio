import { cn } from '../../utils/cn'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary/90 shadow-soft',
  secondary:
    'bg-secondary-bg text-text border border-border hover:border-primary/30 hover:text-primary',
  outline:
    'border border-border bg-background text-text hover:border-primary hover:text-primary',
  ghost: 'text-muted hover:text-text hover:bg-secondary-bg',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

function LoadingSpinner() {
  return (
    <span
      className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      aria-hidden="true"
    />
  )
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  as: Component = 'button',
  isLoading = false,
  ...props
}) {
  const isDisabled = props.disabled || isLoading
  const isNativeButton = Component === 'button'

  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
      disabled={isNativeButton ? isDisabled : props.disabled}
      aria-busy={isLoading || undefined}
    >
      {isLoading && <LoadingSpinner />}
      {children}
    </Component>
  )
}
