import type { ReactElement } from 'react';
import { data } from '../data/data';
import type { ProjectItem } from '../types/main';

interface ProjectsMainProps {
  className?: string;
}

const ProjectsMain = ({ className }: ProjectsMainProps): ReactElement => {
  const projectsData = data.projects;
  const root = projectsData[0];
  const projectIds = root.childIds ?? [];

  const projects: ProjectItem[] = projectIds.map(
    (id) => projectsData[id]
  );

  return (
    <section className={`projects ${className ?? ''}`}>
      {projects.map((project, index) => (
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
            <h5 className="h5-lead lead projects__title">
              {project.label}
            </h5>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link"
              >
                View Project
              </a>
            )}
          </footer>
        </article>
      ))}
    </section>
  );
};

export default ProjectsMain;