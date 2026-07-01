import { getTechIcon } from '../../utils/techIcons'
import { cn } from '../../utils/cn'
import { cardBase, cardInteractive, cardPadding } from '../../utils/styles'

export default function SkillCategory({ title, skills, className }) {
  return (
    <article className={cn(cardBase, cardInteractive, cardPadding, 'h-full', className)}>
      <h3 className="font-heading text-lg font-semibold text-text">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${title} skills`}>
        {skills.map((skill) => {
          const Icon = getTechIcon(skill)

          return (
            <li key={skill}>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary-bg px-3 py-2 text-sm text-text">
                <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {skill}
              </span>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
