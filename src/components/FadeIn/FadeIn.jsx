import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../utils/cn'

const defaultTransition = { duration: 0.4, ease: 'easeOut' }

export default function FadeIn({
  children,
  className,
  delay = 0,
  as = motion.div,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const Component = as

  if (shouldReduceMotion) {
    return (
      <div className={cn(className)} {...props}>
        {children}
      </div>
    )
  }

  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ ...defaultTransition, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  )
}
