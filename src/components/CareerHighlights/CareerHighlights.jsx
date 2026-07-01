import { careerHighlights } from '../../data/careerHighlights'
import Container from '../Container'
import FadeIn from '../FadeIn'
import HighlightCard from '../HighlightCard'

export default function CareerHighlights() {
  return (
    <section aria-label="Career highlights" className="border-y border-border bg-secondary-bg py-12 sm:py-14">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {careerHighlights.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.08}>
              <HighlightCard
                variant="stat"
                value={item.value}
                title={item.label}
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
