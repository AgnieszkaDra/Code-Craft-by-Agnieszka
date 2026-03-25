import { useParams } from 'react-router-dom'
import { projects } from '../../data/projects'
import type { ReactElement } from 'react'
// import { Carousel } from '../../ui/Carousel'
// import { DotsPaginator } from '../../ui/paginators/DotsPaginator'
// import type { PaginatorContext } from '../../ui/paginators/PaginatorBase'
// import Collage from '../../ui/Collage'

const ProjectDetails = (): ReactElement => {
  const { projectId } = useParams()
  if (!projectId) return <p>Projekt nie znaleziony.</p>

  const project = projects.projectsList[projectId]
  if (!project) return <p>Projekt nie znaleziony.</p>

  const { details } = project

  // const renderImageItem = (
  //   image: string,
  //   index: number,
  //   paginator: PaginatorContext
  // ): ReactElement => (
  //   <div className="project-details__carousel-item" key={index}>
  //     <img
  //       src={image}
  //       alt={`Project image ${index + 1}`}
  //       className="project-details__image"
  //     />
  //     <div className="project-details__carousel-footer">
  //       {new DotsPaginator('sm', 'navy').render(paginator)}
  //     </div>
  //   </div>
  // )

  return (
    <main id={projectId} className="project-details">
      <section className="project-details__section section">
        
        <header className="project-details__header">
          <h1 className="project-details__title">
            {project.label}
          </h1>
        </header>

        {/* Carousel */}
        {/* {project.images && project.images.length > 0 && (
          <div className="project-details__carousel">
            <Carousel
              items={project.images}
              className="project-details__carousel-wrapper"
              renderItem={renderImageItem}
            />
          </div>
        )} */}
        {project.images && project.images.length > 0 && (
          <div className="project-details__collage">
            {/* <Collage
              items={project.images}
              className="project-details__collage-wrapper"
            /> */}
          </div>
        )}

        {/* Short description */}
        {project.description && (
          <p className="project-details__description">
            {project.description}
          </p>
        )}

        {/* Details */}
        {details && (
          <div className="project-details__content">

            {details.introduction && (
              <p className="project-details__introduction">
                {details.introduction}
              </p>
            )}

            {details.features && (
              <>
                <h2 className="project-details__section-title">
                  {details.features.title}
                </h2>

                {/* Client */}
                {details.features.client && (
                  <div className="project-details__feature-group">
                    <h3 className="project-details__feature-title">
                      {details.features.client.title}
                    </h3>
                    <ul className="project-details__feature-list">
                      {details.features.client.features.map((f, i) => (
                        <li
                          key={i}
                          className="project-details__feature-item"
                        >
                          <strong>{f.title}:</strong> {f.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Admin */}
                {details.features.admin && (
                  <div className="project-details__feature-group">
                    <h3 className="project-details__feature-title">
                      {details.features.admin.title}
                    </h3>
                    <ul className="project-details__feature-list">
                      {details.features.admin.features.map((f, i) => (
                        <li
                          key={i}
                          className="project-details__feature-item"
                        >
                          <strong>{f.title}:</strong> {f.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical */}
                {details.features.technicalDetails && (
                  <div className="project-details__feature-group">
                    <h3 className="project-details__feature-title">
                      {details.features.technicalDetails.title}
                    </h3>
                    <ul className="project-details__feature-list">
                      {details.features.technicalDetails.features.map((f, i) => (
                        <li
                          key={i}
                          className="project-details__feature-item"
                        >
                          <strong>{f.title}:</strong> {f.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Validation */}
                {details.features.validationAndTypes && (
                  <div className="project-details__feature-group">
                    <h3 className="project-details__feature-title">
                      {details.features.validationAndTypes.title}
                    </h3>
                    <ul className="project-details__feature-list">
                      {details.features.validationAndTypes.features.map((f, i) => (
                        <li
                          key={i}
                          className="project-details__feature-item"
                        >
                          <strong>{f.title}:</strong> {f.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {details.features.technologies && (
                  <div className="project-details__technologies">
                    <h3 className="project-details__feature-title">
                      Technologie
                    </h3>
                    <ul className="project-details__tech-list">
                      {details.features.technologies.map((tech, i) => (
                        <li
                          key={i}
                          className="project-details__tech-item"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </section>
    </main>
  )
}

export default ProjectDetails