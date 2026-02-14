import type { ReactElement } from 'react'
import ProjectsLayout from './ProjectsLayout'
import data from '../../data/data'
import type { ProjectItem } from '../../types/main'

interface ProjectsMainProps {
  id?: string
  className?: string
}

const { projectsList, order } = data.projects

  const projects: ProjectItem[] = order.map(
    (id) => projectsList[id]
  )

const ProjectsMain = ({
  id,
  className,
}: ProjectsMainProps): ReactElement => {
  return (
    <main
      id={id}
      className={['projects-main', className].filter(Boolean).join(' ')}
    >
        <section className={`projects-info section ${className ?? ''}`}>
            <div className='projects-info__content'>
                <h2 className="projects-info__label text-label">
                Ostatnie projekty
                </h2>
                <h1 className="projects-info__text h1-header">
                Oto niektóre z projektów, nad którymi pracowałam.
                </h1>
                <p className="projects-info__text text-description">
                To miejsce, w którym zapisuję ostatnie projekty, którymi zajmowałam się
                na przestrzeni lat — niezależnie od tego, czy są to nowe inicjatywy,
                które rozwijałam, projekty do nauki czy po prostu eksperymenty.
                </p>
            </div>
        </section>
        <ProjectsLayout
            projects={projects}
            blockName="projects-projects"
            className="section"
        />
    </main>
  )
}

export default ProjectsMain