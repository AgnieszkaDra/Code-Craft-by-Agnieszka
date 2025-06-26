import { type ReactElement } from 'react';
import { Carousel } from '../ui/Carousel';
import { data } from '../data/data';
import type { ProjectItem } from '../types/main';
import List from '../ui/List';
import { DotsPaginator } from '../ui/paginators/DotsPaginator';

interface ProjectsCarouselProps {
  className?: string;
}

const ProjectsMain = ({ className = '' }: ProjectsCarouselProps): ReactElement => {
  const projectsData = data.projects;
  const root = projectsData[0];
  const projectIds = root.childIds || [];
  const projects: ProjectItem[] = projectIds.map((id) => projectsData[id]);

  return (
    <div className="projects-main">
      <Carousel
        className={`projects-carousel ${className}`}
        items={projects}
        renderItem={(project) => (
          <div className="projects-carousel__item" key={project.id}>
            <h5 className="h5 heading lead carousel__title">{project.title}</h5>
            <p className="text description carousel__description">{project.description}</p>
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
        )}
        paginator={new DotsPaginator('md', 'navy')}
      />
      <div className="projects-images">
        {projects.map(
          (project) =>
            project.images &&
            project.images.length > 0 && (
              <List
                key={project.id}
                className="carousel__images"
                items={project.images.map((image, index) => (
                  <img key={index} src={image} alt={`Project image ${index + 1}`} />
                ))}
              />
            )
        )}
      </div>
    </div>
  );
};

export default ProjectsMain;