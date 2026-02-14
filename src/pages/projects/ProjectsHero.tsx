import type { ReactElement } from 'react'
import { data } from '../../data/data'
import type { ProjectItem } from '../../types/main'
import { Link } from 'react-router-dom'
import ProjectsLayout from './ProjectsLayout'

interface ProjectsHeroProps {
  id?: string
  className?: string
}

const ProjectsHero = ({
  id,
  className,
}: ProjectsHeroProps): ReactElement => {
  const { projectsList, order } = data.projects
  const blockName = 'projects-hero'
  const visibleProjects: ProjectItem[] = order.map(
    (id) => projectsList[id]
  )

  return (
    <section
      id={id}
      className={[className].filter(Boolean).join(' ')}
    >
      <ProjectsLayout
        projects={visibleProjects}
        blockName={blockName}
      />

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