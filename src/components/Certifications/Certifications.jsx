import { certificationsContent } from '../../data/certifications'
import Container from '../Container'
import FadeIn from '../FadeIn'
import CertificateCard from '../CertificateCard'
import SectionHeader from '../SectionHeader'

export default function Certifications() {
  const { title, subtitle, items } = certificationsContent

  return (
    <section
      id="certifications"
      className="border-y border-border bg-secondary-bg py-20 sm:py-24 lg:py-28"
      aria-labelledby="certifications-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            headingId="certifications-heading"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {items.map((certificate, index) => (
            <FadeIn key={certificate.id} delay={index * 0.08}>
              <CertificateCard {...certificate} className="bg-background" />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
