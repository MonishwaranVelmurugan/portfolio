import { professionalHighlightsContent } from '../../data/professionalHighlights'
import Container from '../Container'
import FadeIn from '../FadeIn'
import HighlightCard from '../HighlightCard'
import SectionTitle from '../SectionTitle'

export default function ProfessionalHighlights() {
  const { title, items } = professionalHighlightsContent

  return (
    <section
      aria-labelledby="professional-highlights-heading"
      className="border-t border-border bg-secondary-bg py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <FadeIn>
          <SectionTitle title={title} headingId="professional-highlights-heading" />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {items.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08}>
              <HighlightCard
                variant="feature"
                title={item.title}
                description={item.description}
                icon={item.icon}
                className="h-full bg-background"
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
