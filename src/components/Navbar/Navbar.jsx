import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import { navLinks } from '../../data/navigation'
import { siteConfig } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { cn } from '../../utils/cn'
import Button from '../Button'
import Container from '../Container'

export default function Navbar() {
  const isScrolled = useScrollPosition(20)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const sectionIds = useMemo(
    () => navLinks.map((link) => link.href.replace('#', '')),
    [],
  )
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const getLinkClasses = (href) => {
    const sectionId = href.replace('#', '')
    const isActive = activeSection === sectionId

    return cn(
      'rounded-md px-3.5 py-2 text-sm font-medium transition-colors',
      isActive
        ? 'bg-secondary-bg text-primary'
        : 'text-muted hover:bg-secondary-bg hover:text-text',
    )
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-border bg-background/95 shadow-nav backdrop-blur-sm'
          : 'bg-transparent',
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between lg:h-[4.5rem]"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="font-heading text-lg font-semibold tracking-tight text-text hover:text-primary"
            onClick={closeMobileMenu}
          >
            {siteConfig.name.split(' ')[0]}
            <span className="text-primary">.</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={getLinkClasses(link.href)}
                  aria-current={
                    activeSection === link.href.replace('#', '') ? 'page' : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              as="a"
              href={siteConfig.resumeUrl}
              download
              variant="primary"
              size="sm"
            >
              <FiDownload className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-text transition-colors hover:bg-secondary-bg lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6" aria-hidden="true" />
            ) : (
              <HiMenu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(getLinkClasses(link.href), 'block px-3 py-2.5')}
                      aria-current={
                        activeSection === link.href.replace('#', '')
                          ? 'page'
                          : undefined
                      }
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-border pt-4">
                <Button
                  as="a"
                  href={siteConfig.resumeUrl}
                  download
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={closeMobileMenu}
                >
                  <FiDownload className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
