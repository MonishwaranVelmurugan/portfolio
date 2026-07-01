import { workshopsContent } from '../../data/workshops'
import Container from '../Container'
import FadeIn from '../FadeIn'
import SectionHeader from '../SectionHeader'
import WorkshopCard from '../WorkshopCard'

export default function Workshops() {
  const { title, subtitle, items } = workshopsContent

  return (
    <section
      id="workshops"
      className="bg-background py-20 sm:py-24 lg:py-28"
      aria-labelledby="workshops-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            headingId="workshops-heading"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {items.map((workshop, index) => (
            <FadeIn key={workshop.id} delay={index * 0.08}>
              <WorkshopCard {...workshop} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
