import type { ProjectItem } from '../types/main';
import data from '../data/data';
import { NavigationLink } from '../ui';
import type { Data } from '../types/data';
import type { JSX } from 'react';

const Projects = (): JSX.Element => {
  const projects: Data['projects'] = data.projects;
  const root: ProjectItem = projects[0];
  const projectsIds = root.childIds;

  return (
    <ul className="projects">
      {projectsIds?.map((id: number) => {
        const projectItem = projects[id];
        return (
          <li key={id} className="projects__item">
            {projectItem.url && (
              <NavigationLink
                to={projectItem.url}
                value={projectItem.title || 'Untitled'}
                className="projects__link"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;