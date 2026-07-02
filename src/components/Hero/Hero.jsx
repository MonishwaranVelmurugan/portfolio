import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { heroContent } from '../../data/hero'
import { siteConfig } from '../../data/site'
import Button from '../Button'
import Container from '../Container'
import FadeIn from '../FadeIn'
import OptimizedImage from '../OptimizedImage'
import resume from '../../resume.pdf'

const socialLinks = [
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: FiLinkedin },
  { label: 'GitHub', href: siteConfig.github, icon: FiGithub },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: FiMail },
]

export default function Hero() {
  const {
    greeting,
    name,
    title,
    specializations,
    description,
    profileImage,
    profileAlt,
    primaryCta,
    secondaryCta,
  } = heroContent

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="bg-background pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <p className="text-sm font-medium text-primary">{greeting}</p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-text sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.15]">
                {name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-3 text-xl font-medium text-text sm:text-2xl">
                {title}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label="Areas of specialization"
              >
                {specializations.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary-bg px-3.5 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  as="a"
                  href={primaryCta.href}
                  variant="primary"
                  size="lg"
                >
                  {primaryCta.label}
                </Button>

                <Button
                  as="a"
                  href={resume}
                  download="Monishwaran_Velmurugan_Resume.pdf"
                  variant="secondary"
                  size="lg"
                >
                  <FiDownload className="h-4 w-4" aria-hidden="true" />
                  {secondaryCta.label}
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Content */}
          <FadeIn
            delay={0.1}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <OptimizedImage
              src={profileImage}
              alt={profileAlt}
              aspectClassName="aspect-square"
              wrapperClassName="w-full max-w-[320px] rounded-2xl border border-border shadow-soft sm:rounded-3xl"
              loading="eager"
              fetchPriority="high"
              width={320}
              height={320}
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}