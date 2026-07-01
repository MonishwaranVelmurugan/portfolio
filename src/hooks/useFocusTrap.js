import { useEffect } from 'react'

export function useFocusTrap(isActive, containerRef) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return

    const container = containerRef.current
    const selector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

    const getFocusable = () =>
      Array.from(container.querySelectorAll(selector)).filter(
        (el) => !el.hasAttribute('disabled'),
      )

    const previouslyFocused = document.activeElement
    const focusable = getFocusable()
    focusable[0]?.focus()

    const handleKeyDown = (event) => {
      if (event.key !== 'Tab') return

      const elements = getFocusable()
      if (elements.length === 0) return

      const first = elements[0]
      const last = elements[elements.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    container.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('keydown', handleKeyDown)
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [isActive, containerRef])
}
