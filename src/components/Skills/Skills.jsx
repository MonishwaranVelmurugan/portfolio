import { skillsContent } from '../../data/skills'
import Container from '../Container'
import FadeIn from '../FadeIn'
import SectionTitle from '../SectionTitle'
import SkillCategory from '../SkillCategory'

export default function Skills() {
  const { title, subtitle, categories } = skillsContent

  return (
    <section
      id="skills"
      className="bg-background py-20 sm:py-24 lg:py-28"
      aria-labelledby="skills-heading"
    >
      <Container>
        <FadeIn>
          <SectionTitle title={title} subtitle={subtitle} headingId="skills-heading" />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.06}>
              <SkillCategory
                title={category.title}
                skills={category.skills}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
