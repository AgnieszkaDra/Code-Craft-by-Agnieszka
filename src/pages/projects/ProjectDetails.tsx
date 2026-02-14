import { useParams } from 'react-router-dom'
import { projects } from '../../data/projects'
import type { ReactElement } from 'react'

const ProjectDetails = (): ReactElement => {
  const { projectId } = useParams()

  if (!projectId) return <p>Project not found.</p>

  const project = projects.projectsList[projectId]

  if (!project) return <p>Project not found.</p>

  return (
    <section className="project-details section">
      <h1>{project.label}</h1>

      {project.images?.map((img, index) => (
        <img key={index} src={img} alt={project.label} />
      ))}

      {project.description && <p>{project.description}</p>}
    </section>
  )
}

export default ProjectDetails