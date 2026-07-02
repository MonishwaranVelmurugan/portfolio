import { FiDownload, FiGithub, FiLinkedin, FiMail, FiGlobe } from 'react-icons/fi'
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
  {
    label: 'Rennovia Solutions',
    href: 'https://www.rennoviasolutions.com',
    icon: FiGlobe,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary-bg">
      <Container className="py-12 lg:py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">

          {/* About */}
          <div>
            <p className="font-heading text-lg font-semibold text-text">
              {siteConfig.name}
            </p>

            <p className="mt-1 text-sm text-muted">
              {siteConfig.designation}
            </p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.footerTagline}
            </p>

            <p className="mt-5 text-sm">
              Founder of{' '}
              <a
                href="https://www.rennoviasolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Rennovia Solutions
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-medium text-text">
              Quick Links
            </p>

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

          {/* Connect */}
          <div>
            <p className="text-sm font-medium text-text">
              Connect
            </p>

            <ul className="mt-4 flex flex-col gap-2.5">
              {connectLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
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
                <FiDownload className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">

          <p className="text-sm text-muted">
            © {siteConfig.copyrightYear} {siteConfig.name}. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-muted">
            Senior Project Engineer | Founder of Rennovia Solutions
          </p>

        </div>

      </Container>
    </footer>
  )
}