import type { ProjectItem } from '../types/main';
import data from '../data/data';
import { NavigationLink } from '../ui';
import type { Data } from '../types/data';
import type { JSX } from 'react';
import List from '../ui/List';

const ProjectsList = (): JSX.Element => {
  const projects: Data['projects'] = data.projects;
  const root: ProjectItem = projects[0];
  const projectsIds = root.childIds;

  const items = projectsIds?.map((id) => {
    const projectItem = projects[id];
    return projectItem.url ? (
      <NavigationLink
        to={projectItem.url}
        value={projectItem.title || 'Untitled'}
        className="projects__link"
      />
    ) : null;
  }) ?? [];

  return (
    <>
   
    <List items={items} className="projects-list" label='projekty'/>
    </>
    )
};

export default ProjectsList;