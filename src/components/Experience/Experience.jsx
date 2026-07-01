import { experienceContent } from '../../data/experience'
import Container from '../Container'
import ExperienceCard from '../ExperienceCard'
import FadeIn from '../FadeIn'
import SectionTitle from '../SectionTitle'

export default function Experience() {
  const { title, subtitle, items } = experienceContent

  return (
    <section
      id="experience"
      className="border-y border-border bg-secondary-bg py-20 sm:py-24 lg:py-28"
      aria-labelledby="experience-heading"
    >
      <Container>
        <FadeIn>
          <SectionTitle title={title} subtitle={subtitle} headingId="experience-heading" />
        </FadeIn>

        <div className="relative mt-12 lg:mt-16">
          <div
            className="absolute top-3 bottom-3 left-[5px] hidden w-px bg-border lg:block"
            aria-hidden="true"
          />

          <ol className="space-y-8 lg:space-y-10">
            {items.map((item, index) => (
              <li key={item.id} className="relative lg:pl-10">
                <span
                  className="absolute top-8 left-0 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background lg:block"
                  aria-hidden="true"
                />

                <FadeIn delay={index * 0.1}>
                  <ExperienceCard {...item} />
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
