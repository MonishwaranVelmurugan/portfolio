import SectionTitle from '../SectionTitle'
import { cn } from '../../utils/cn'

export default function SectionHeader({
  title,
  subtitle,
  headingId,
  align = 'left',
  className,
}) {
  return (
    <SectionTitle
      title={title}
      subtitle={subtitle}
      headingId={headingId}
      align={align}
      className={cn('max-w-3xl', className)}
    />
  )
}
