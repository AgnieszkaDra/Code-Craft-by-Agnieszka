import type { ProjectItem } from '../../types/main';
import projectsData from '../../data/data';
import { NavigationLink } from '../../ui';
import type { JSX } from 'react';
import List from '../../ui/List';

const ProjectsList = (): JSX.Element => {
  const { projectsList: projects, order } = projectsData.projects;

  const projectItems = order
    .map((id) => {
      const project: ProjectItem | undefined = projects[id];
      if (!project) return null; 

      return project.link?.href ? (
        <NavigationLink
          key={id}
          to={project.link.href}
          value={project.label || 'Untitled'}
          className="projects-list__link"
        />
      ) : null;
    })
    .filter(Boolean); 

  return (
    <List
      items={projectItems}
      block="projects-list"
      label="projekty"
    />
  );
};

export default ProjectsList;