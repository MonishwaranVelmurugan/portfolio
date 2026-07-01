import { useState } from 'react'
import { cn } from '../../utils/cn'

const fallbackSrc =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"%3E%3Crect width="400" height="240" fill="%23F8FAFC"/%3E%3Ctext x="200" y="125" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" fill="%236B7280"%3EImage unavailable%3C/text%3E%3C/svg%3E'

export default function OptimizedImage({
  src,
  alt,
  className,
  wrapperClassName,
  aspectClassName = 'aspect-[5/3]',
  loading = 'lazy',
  fetchPriority,
  width,
  height,
}) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn('overflow-hidden bg-secondary-bg', aspectClassName, wrapperClassName)}>
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        onError={() => setHasError(true)}
        className={cn('h-full w-full object-cover', className)}
      />
    </div>
  )
}
