import type { ReactElement } from 'react'
import { data } from '../data/data'
import type { ProjectItem } from '../types/main'
import { Link } from 'react-router-dom'
import { BaseLink } from '../ui'

interface ProjectsMainProps {
  className?: string
}

const ProjectsMain = ({ className }: ProjectsMainProps): ReactElement => {
  const { projects, order } = data.projects

  const visibleProjects: ProjectItem[] = order.map(
    (id) => projects[id]
  )

  return (
    <section className={`projects ${className ?? ''}`}>
      {visibleProjects.map((project, index) => (
        <article
          key={project.id}
          className={`projects__item projects__item--${index + 1}`}
        >
          {project.background && (
            <div className="projects__background">
              <img
                src={project.background}
                alt={`Background for ${project.label}`}
                className="projects__background-image"
              />
            </div>
          )}

          <footer className="projects__footer">
            <h4 className="h4-subtitle projects__title">
              {project.label}
            </h4>

            {project.link && (
              <BaseLink
                href={project.link.href}
                external={project.link.external}
                className="projects__link"
              >
                {project.link.label}
              </BaseLink>
            )}
          </footer>
        </article>
      ))}

      <footer className="projects__navigate">
        <p>
          <Link to="/projects" className="projects__navigate-link text-label">
            Zobacz wszystkie projekty
          </Link>
        </p>
      </footer>
    </section>
  )
}

export default ProjectsMain