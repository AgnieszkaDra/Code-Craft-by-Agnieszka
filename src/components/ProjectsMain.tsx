import { type ReactElement } from 'react';
import { Carousel } from '../ui/Carousel';
import { data } from '../data/data';
import type { ProjectItem } from '../types/main';
import { DotsPaginator } from '../ui/paginators/DotsPaginator';
import type { PaginatorContext } from '../ui/paginators/PaginatorBase';

interface ProjectsCarouselProps {
  className?: string;
}

const renderImageItem = () => (
  image: string,
  index: number,
  paginator: PaginatorContext
): ReactElement => (
  <div className="images-carousel__item">
    <img
      src={image}
      alt={`Project image ${index + 1}`}
      className="images-carousel__image"
    />
    <div className="images-carousel__footer">
      {new DotsPaginator('sm', 'navy').render(paginator)}
    </div>
  </div>
);

const renderProjectItem = (
  project: ProjectItem,
  _index: number,
  paginator: PaginatorContext
): ReactElement => (
  <div className="projects-carousel__item" key={project.id}>
    <div className="projects-carousel__content">
      <h5 className="h5-lead lead carousel__title">
        {project.label}
      </h5>

      <p className="text text-description carousel__description">
        {project.description}
      </p>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="carousel__link"
        >
          View Project
        </a>
      )}
    </div>

    <div className="projects-carousel__footer">
      {new DotsPaginator('md', 'navy').render(paginator)}
    </div>

    {project.images &&
         project.images?.length > 0 && (
      <div className="project-images-carousel">
        <Carousel
          className="images-carousel"
          items={project.images}
          renderItem={renderImageItem()}
        />
      </div>
    )}
  </div>
);

const ProjectsMain = ({
  className = '',
}: ProjectsCarouselProps): ReactElement => {
  const projectsData = data.projects;
  const root = projectsData[0];
  const projectIds = root.childIds ?? [];
  const projects: ProjectItem[] = projectIds.map(
    (id) => projectsData[id]
  );

  return (
    <div className="projects-main">
      <Carousel
        className={`projects-carousel ${className}`}
        items={projects}
        renderItem={renderProjectItem}
      />
    </div>
  );
};

export default ProjectsMain;
