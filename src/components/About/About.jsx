import { aboutContent } from "../../data/about";
import Container from "../Container";
import FadeIn from "../FadeIn";
import HighlightCard from "../HighlightCard";
import SectionTitle from "../SectionTitle";

import aboutIllustration from "../../assets/images/about.png";

export default function About() {
  const { title, paragraphs, expertise } = aboutContent;

  return (
    <section
      id="about"
      className="bg-background py-20 sm:py-24 lg:py-28"
      aria-labelledby="about-heading"
    >
      <Container>
        {/* Section Title */}
        <FadeIn>
          <SectionTitle
            title={title}
            headingId="about-heading"
          />
        </FadeIn>

        {/* About Content */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {paragraphs.map((paragraph, index) => (
              <FadeIn
                key={index}
                delay={0.05 + index * 0.08}
              >
                <p className="text-base sm:text-lg leading-8 text-muted text-justify">
                  {paragraph}
                </p>
              </FadeIn>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center lg:justify-end">

              <img
                src={aboutIllustration}
                alt="Industrial IoT Illustration"
                className="w-full max-w-3xl object-contain"
              />

            </div>
          </FadeIn>

        </div>

        {/* Expertise */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {expertise.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={0.1 + index * 0.08}
            >
              <HighlightCard
                variant="feature"
                title={item.title}
                description={item.description}
                icon={item.icon}
                className="h-full"
              />
            </FadeIn>
          ))}

        </div>
      </Container>
    </section>
  );
}