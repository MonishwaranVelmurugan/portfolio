import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { footerLinks } from '../../data/footer'
import { siteConfig } from '../../data/site'
import Container from '../Container'
import Button from '../Button'

const connectLinks = [
  {
    label: 'LinkedIn',
    href: siteConfig.linkedin,
    icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    href: siteConfig.github,
    icon: FiGithub,
  },
  {
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: FiMail,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary-bg">
      <Container className="py-12 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
            <p className="font-heading text-lg font-semibold text-text">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-muted">{siteConfig.designation}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.footerTagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-text">Quick Links</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-text">Connect</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {connectLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Button
                as="a"
                href={siteConfig.resumeUrl}
                download
                variant="outline"
                size="sm"
              >
                <FiDownload className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}
          </p>
          <p className="text-sm text-muted">Built with React + Vite</p>
        </div>
      </Container>
    </footer>
  )
}
