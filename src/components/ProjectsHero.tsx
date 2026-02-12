import type { ReactElement } from 'react'
import { data } from '../data/data'
import type { ProjectItem } from '../types/main'
import { Link } from 'react-router-dom'
import { BaseLink } from '../ui'

interface ProjectsHeroProps {
  id?: string
  className?: string
  blockName: string
}

const ProjectsHero = ({
  id,
  className,
  blockName,
}: ProjectsHeroProps): ReactElement => {
  const { projects, order } = data.projects

  const visibleProjects: ProjectItem[] = order.map(
    (id) => projects[id]
  )

  return (
    <section
      id={id}
      className={[blockName, className].filter(Boolean).join(' ')}
    >
      {visibleProjects.map((project, index) => (
        <article
          key={project.id}
          className={`${blockName}__item ${blockName}__item--${index + 1}`}
        >
          {project.background && (
            <div className={`${blockName}__background`}>
              <img
                src={project.background}
                alt={`Background for ${project.label}`}
                className={`${blockName}__background-image`}
              />
            </div>
          )}

          <footer className={`${blockName}__footer`}>
            <h4 className={`h4-subtitle ${blockName}__title`}>
              {project.label}
            </h4>

            {project.link && (
              <BaseLink
                href={project.link.href}
                external={project.link.external}
                className={`${blockName}__link`}
              >
                {project.link.label}
              </BaseLink>
            )}
          </footer>
        </article>
      ))}

      <footer className={`${blockName}__navigate`}>
        <p>
          <Link
            to="/projects"
            className={`${blockName}__navigate-link text-label`}
          >
            Zobacz wszystkie projekty
          </Link>
        </p>
      </footer>
    </section>
  )
}

export default ProjectsHero