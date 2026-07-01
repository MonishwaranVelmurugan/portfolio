import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import { cn } from '../../utils/cn'
import { cardBase, cardPadding } from '../../utils/styles'
import TechnologyTag from '../TechnologyTag'

export default function ExperienceCard({
  company,
  role,
  duration,
  dateTime,
  description,
  responsibilities,
  technologies,
  className,
}) {
  return (
    <article className={cn(cardBase, cardPadding, 'relative sm:p-8', className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-primary">
            <FiBriefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
            <h3 className="font-heading text-xl font-semibold text-text">{company}</h3>
          </div>
          <p className="mt-1 text-base font-medium text-text">{role}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted sm:shrink-0">
          <FiCalendar className="h-4 w-4 shrink-0" aria-hidden="true" />
          <time dateTime={dateTime}>{duration}</time>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">{description}</p>

      <div className="mt-6">
        <h4 className="text-sm font-medium text-text">Responsibilities</h4>
        <ul className="mt-3 space-y-2">
          {responsibilities.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-medium text-text">Technologies</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechnologyTag key={tech} name={tech} />
          ))}
        </div>
      </div>
    </article>
  )
}
