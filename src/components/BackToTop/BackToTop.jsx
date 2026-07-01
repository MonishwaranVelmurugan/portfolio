import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { cn } from '../../utils/cn'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-text shadow-nav transition-all duration-300 hover:border-primary/30 hover:text-primary',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0',
      )}
    >
      <FiArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
