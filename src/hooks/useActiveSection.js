import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds, offset = 120) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      let current = sectionIds[0]

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          current = section.id
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
