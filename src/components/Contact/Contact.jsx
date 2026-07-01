import { contactContent } from '../../data/contact'
import Container from '../Container'
import ContactCard from '../ContactCard'
import ContactForm from '../ContactForm'
import FadeIn from '../FadeIn'
import SectionHeader from '../SectionHeader'
import Button from '../Button'

export default function Contact() {
  const { title, subtitle, infoCards, resume } = contactContent
  const ResumeIcon = resume.icon

  return (
    <section
      id="contact"
      className="bg-background py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            headingId="contact-heading"
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          <FadeIn delay={0.05}>
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold text-text">
                Contact Information
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {infoCards.map((card) => (
                  <ContactCard key={card.id} {...card} />
                ))}
              </div>
              <Button
                as="a"
                href={resume.href}
                download
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
              >
                <ResumeIcon className="h-4 w-4" aria-hidden="true" />
                {resume.label}
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
